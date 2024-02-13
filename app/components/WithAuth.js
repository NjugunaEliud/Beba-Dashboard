"use client";

import { redirect } from "next/navigation";
import { useEffect, useLayoutEffect, useState } from "react";

export default function withAuth(Component) {
  return function withAuth(props) {
    const [userRole, setUserRole] = useState(null);
    useLayoutEffect(() => {
      const role = localStorage.getItem("userBidRole");

      setUserRole(role);
      if (!role) {
        redirect("/login");
      }
    }, []);

    if (!userRole) {
      return null;
    } else if (userRole != "admin") {
      redirect("/");
    }

    return <Component {...props} />;
  };
}
