import { ReactNode } from "react";

interface sidebarItemProp {
  icon: ReactNode;
  title: string;
  onClick?: () => void;
}
export default function SideBarItem({ icon, title, onClick }: sidebarItemProp) {
  return (
    <>
      <div
        className="text-primaryDark hover:text-white hover:bg-secondary group flex gap-x-3 py-[19px] px-5 text-base leading-[160%] font-bold duration-300 cursor-pointer"
        onClick={onClick}
      >
        {icon}
        {title}
      </div>
      <hr className="w-[90%] mx-auto" />
    </>
  );
}
