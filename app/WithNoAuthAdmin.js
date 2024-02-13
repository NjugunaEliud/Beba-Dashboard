// withNoAuthAdmin.js

import { useEffect } from "react";
import { useRouter } from "next/router";

const withNoAuthAdmin = (WrappedComponent) => {
  const Wrapper = (props) => {
    const router = useRouter();

    useEffect(() => {
      const userRole = localStorage.getItem("userBidRole");
      if (userRole && userRole === "admin") {
        router.push("/");
      }
    }, []);

    return <WrappedComponent {...props} />;
  };

  return Wrapper;
};

export default withNoAuthAdmin;
