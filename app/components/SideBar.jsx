import { forwardRef } from "react";
import Link from "next/link";
import { useState } from 'react';
import { usePathname } from "next/navigation";
import { DashboardOutlined, Groups3, ProductionQuantityLimitsOutlined} from "@mui/icons-material";
import { UserIcon } from "@heroicons/react/24/solid";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


const SideBar = forwardRef(({ showNav }, ref) => {
  const pathname = usePathname();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const handleDropdownOptionClick = (option) => {
    console.log(`Selected option: ${option}`);
  };

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
              <p className="text-sm">Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/auctions">
          <div
            className={`pl-6  py-2 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/dashoard"
                ? "bg-orange-100  text-orange-500"
                : "text-gray-600 hover:bg-violet-700 hover:text-white"
            }`}
          >
            <div className="mr-2">
              <ProductionQuantityLimitsOutlined className="h-5 w-5" />
            </div>
            <div>
              <p className="text-sm">Auction Products</p>
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
              <p className="text-sm">Teams</p>
            </div>
          </div>
        </Link>
        <div
          className={`pl-6 py-2 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
            pathname == "/dashoard"
              ? "bg-orange-100 text-orange-500"
              : "text-gray-600 hover:bg-violet-700 hover:text-white"
          }`}
        >
          <div className="mr-2">
            <UserIcon className="h-5 w-5" />
          </div>
          <div>
            <p className="text-sm">Bidders</p>
          </div>
          <div className="ml-2 cursor-pointer" onClick={handleDropdownToggle}>
            <ExpandMoreIcon />
          </div>
        </div>
      {showDropdown && (
        <div className="mx-5 mb-3">
          <div
            className="bg-white rounded shadow-md py-2 px-4 cursor-pointer text-gray-600 hover:bg-violet-700 hover:text-white"
            onClick={() => handleDropdownOptionClick('winners')}
          >  
            Winners
          </div>
          <div
            className="bg-white rounded shadow-md py-2 px-4 cursor-pointer text-gray-600 hover:bg-violet-700 hover:text-white"
            onClick={() => handleDropdownOptionClick('unsuccessful')}
          >
            Unsuccessful
          </div>
        </div>
      )}
    
     
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
