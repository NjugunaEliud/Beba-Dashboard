// NotVerifyAdmin.js

import { useEffect } from "react";
import { useRouter } from "next/router";

const NotVerifyAdmin = () => {
  const router = useRouter();

  useEffect(() => {
    const userRole = localStorage.getItem("userBidRole");
    if (userRole && userRole === "admin") {
      router.push("/");
    }
  }, []);

  return null;
};

export default NotVerifyAdmin;
