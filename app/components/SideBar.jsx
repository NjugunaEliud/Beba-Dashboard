import { forwardRef } from "react";
import Link from "next/link";
import { LockClosedIcon,ComputerDesktopIcon,UsersIcon, CreditCardIcon, UserIcon } from "@heroicons/react/24/solid";
import { usePathname } from "next/navigation";

const SideBar = forwardRef(({ showNav }, ref) => {
  const pathname = usePathname();

  return (
    <div ref={ref} className="fixed w-56 h-full bg-white shadow-sm">
      <div className="flex justify-center mt-3 mb-3">
      <b className="font-black"> Beba Admin</b>
      </div>
      <div className="flex flex-col">
        <Link href="/Dashboard">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/dashoard"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-800 hover:bg-orange-100 hover:text-orange-400"
            }`}
          >
            <div className="mr-2">
              <ComputerDesktopIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Dashboard</p>
            </div>
          </div>
        </Link>
        <Link href="/buyers">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/dashoard"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-800 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <UsersIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Buyers</p>
            </div>
          </div>
        </Link>
        <Link href="/sellers">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/dashoard"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-800 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <UsersIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Sellers</p>
            </div>
          </div>
        </Link>
        
        <Link href="/biddings">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/account"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-800 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              {/* <UserIcon className="h-5 w-5" /> */}
            </div>
            <div>
              <p>Biddings</p>
            </div>
          </div>
        </Link>
        <Link href="/purchases">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/billing"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-800 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
            </div>
            <div>
              <p>Purchases</p>
            </div>
          </div>
        </Link>
        <Link href="/login">
          <div
            className={`pl-6 py-3 mx-5 rounded text-center cursor-pointer mb-3 flex items-center transition-colors ${
              pathname == "/billing"
                ? "bg-orange-100 text-orange-500"
                : "text-gray-800 hover:bg-orange-100 hover:text-orange-500"
            }`}
          >
            <div className="mr-2">
              <LockClosedIcon className="h-5 w-5" />
            </div>
            <div>
              <p>Login</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
});

SideBar.displayName = "SideBar";

export default SideBar;
