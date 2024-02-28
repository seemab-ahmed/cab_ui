import Cookies from "universal-cookie";

const cookies = new Cookies(null, { path: "/" });

export const getToken = () => cookies.get("cabtoken");
export const setToken = (token: string) => cookies.set("cabtoken", token);
export const removeToken = () => cookies.remove("cabtoken");
export const combineClasses = (
  defaultClasses: string,
  className?: string
): string => {
  if (!className) return defaultClasses;

  const defaultSet = new Set(defaultClasses.split(" "));
  const customSet = new Set(className.split(" "));

  // Remove classes with !! prefix from default classes
  [...customSet].forEach((customClass) => {
    if (customClass.startsWith("!!")) {
      defaultSet.delete(customClass.slice(2));
      customSet.delete(customClass);
    }
  });

  // Remove overlapping classes from default classes
  [...defaultSet].forEach((defaultClass) => {
    const baseClass = defaultClass.split("-")[0];
    [...customSet].forEach((customClass) => {
      if (customClass.startsWith(baseClass)) {
        defaultSet.delete(defaultClass);
      }
    });
  });

  return [...defaultSet, ...customSet].join(" ");
};
