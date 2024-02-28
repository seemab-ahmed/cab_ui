import { Logo } from "components/logo/logo";
import { logoutUser } from "api/slice/authSlice/authSlice";
import { useDispatch } from "react-redux";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import SideBarItem from "./sideBarItem";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import Diversity3OutlinedIcon from '@mui/icons-material/Diversity3Outlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
export default function SideBar() {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div className="bg-white w-[270px] overflow-y-auto border-r border-gray-200">
      <div className="py-1 flex justify-center w-full h-[90px] items-center">
        <Logo width={180} height={80} navigate="/" />
      </div>
      <div className="p-5 pr-4 bg-[#F1F4F6] mb-5">
        <p className="text-lg leading-[160%] font-bold text-primary">
          Welcome, Daniell
        </p>
        <p className="text-base leading-[160%] font-medium text-customGrey">
          Wednesday, February 28th, 2024
        </p>
      </div>
      <nav className="flex flex-1 flex-col h-[70vh]">
        <ul className="flex flex-1 flex-col gap-y-7">
          <li>
            <ul>
              <li>
                <SideBarItem
                  title="Dashboard" 
                  icon={<HomeOutlinedIcon />} 
                 />
              </li>
              <li>
                <SideBarItem
                  title="Appointment" 
                  icon={<CalendarMonthOutlinedIcon />} 
                 />
              </li>
              <li>
                <SideBarItem
                  title="Doctors" 
                  icon={<PersonOutlineOutlinedIcon />} 
                 />
              </li>
              <li>
                <SideBarItem
                  title="Patients" 
                  icon={<Diversity3OutlinedIcon />} 
                 />
              </li>
              <li>
                <SideBarItem
                  title="Invoice"
                  icon={<DescriptionOutlinedIcon 
                />}
                />
              </li>
            </ul>
          </li>
          <li className="mt-auto">
            <ul>
              <li>
                <SideBarItem 
                 title="Settings" 
                 icon={<TuneOutlinedIcon 
                 />} />
              </li>
              <li>
                <SideBarItem
                  title="Sign Out"
                  icon={<LogoutOutlinedIcon />}
                  onClick={handleLogout}
                />
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </div>
  );
}
