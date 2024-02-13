// NotVerify.js

import { useEffect } from "react";
import { useRouter } from "next/router";

const NotVerify = () => {
  const router = useRouter();

  useEffect(() => {
    const userRole = localStorage.getItem("userBidRole");
    if (userRole) {
      router.push("/");
    }
  }, []);

  return null;
};

export default NotVerify;
