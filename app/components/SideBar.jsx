import { forwardRef } from "react";
import Link from "next/link";
import { ComputerDesktopIcon,UsersIcon , CalendarDaysIcon, InformationCircleIcon ,CreditCardIcon} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import { CalendarMonth, CreditCard, CreditCardOffOutlined, DashboardOutlined, EmojiEventsRounded, Event, EventAvailable, EventAvailableOutlined, EventBusy, EventNote, EventNoteOutlined, EventOutlined, GroupAddOutlined, GroupWork, Groups3, MessageSharp, Settings } from "@mui/icons-material";
import { CalendarIcon } from "@heroicons/react/24/solid";



const SideBar = forwardRef(({ showNav }, ref) => {
  const pathname = usePathname();

  return (
    <div ref={ref} className="bg-slate-100 mt-14 fixed w-56 h-full shadow-sm">
      <div className="flex flex-col">
        <Link href="/Dashboard">
          <div
            className={` pl-6 py-2 mx-5 rounded text-center cursor-pointer mb-3 mt-2 flex items-center transition-colors ${
              pathname == "/dashoard"
                ? "bg-violet-700 text-orange-500"
                : "text-gray-600 hover:text-white hover:bg-violet-700 "
            }`}
          >
            <div className="mr-2">
              <DashboardOutlined className="h-5 w-5" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/caleder">
          <div
            className={`pl-6  py-2 mx-5  mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/dashoard"
                ? "bg-orange-100  text-orange-500"
                : "text-gray-600 hover:bg-violet-700 hover:text-white"
            }`}
          >
            <div className="mr-2">
              <CalendarIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Caleder</p>
            </div>
          </div>
        </Link>
        <Link href="/events">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/dashoard"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-600 hover:text-white hover:bg-violet-700 "
            }`}
          >
            <div className="mr-2">
              <EventOutlined className="h-5 w-5" />
            </div>
            <div>
              <p>My Events</p>
            </div>
          </div>
        </Link>
        
        <Link href="/team">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/account"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-600 hover:text-white hover:bg-violet-700 "
            }`}
          >
            <div className="mr-2">
              <Groups3 className="h-5 w-5" />
            </div>
            <div>
              <p>Teams</p>
            </div>
          </div>
        </Link>
        <Link href="/purchases">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/billing"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-600 hover:text-white hover:bg-violet-700 "
            }`}
          >
            <div className="mr-2">
            <CreditCardIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Payment</p>
            </div>
          </div>
        </Link>
        <Link href="/message">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/billing"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-600 hover:text-white hover:bg-violet-700 "
            }`}
          >
            <div className="mr-2">
              <MessageSharp className="h-5 w-5" />
            </div>
            <div className="flex flex-align-items">
              <p>Messages</p>
              <span className="bg-red-600 rounded-full ml-3 w-5 h-5 text-white text-center flex items-center justify-center mt-0.5">9</span>

            </div>
          </div>
        </Link>
        <Link href="/settings">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/billing"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-600 hover:text-white hover:bg-violet-700 "
            }`}
          >
            <div className="mr-2">
              <Settings className="h-5 w-5" />
            </div>
            <div>
              <p>Settings</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
