import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { userDetails } from "api/slice/authSlice/authSlice";
import { useNavigate } from "react-router-dom";

const AllUser = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const allUser = useSelector(
    (state: any) => state?.authSlice?.user?.data?.users
  );
  const { isAuthenticated } = useSelector((state: any) => state?.authSlice);
  console.log(allUser, "user");

  useEffect(() => {
    // Dispatch userDetails action to fetch user details
    dispatch(userDetails());
  }, [dispatch, navigate]);

  // if(!isAuthenticated) return;
  return (
    <div className="pt-[2rem] flex flex-col justify-center items-center ">
      {allUser ? (
        <div className="relative overflow-x-auto w-full px-10">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  #
                </th>
                <th scope="col" className="px-6 py-3">
                  First Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
              </tr>
            </thead>
            <tbody>
              {allUser?.map((data: any, index: number) => (
                <tr className="hover:bg-gray-100 bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {++index}
                  </th>
                  <td className="px-6 py-4">{data.firstName}</td>
                  <td className="px-6 py-4">{data.lastName}</td>
                  <td className="px-6 py-4">{data.email}</td>
                  <td className="px-6 py-4">{data?.roles}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default AllUser;
