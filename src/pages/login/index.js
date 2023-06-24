import React, { useEffect } from "react";
import LeftPanel from "../../components/LeftPanel";
import RightPanel from "../../components/RightPanel";
import { useRouter } from "next/router";

const Login = () => {
  const router = useRouter();
  useEffect(() => {
    const userToken = localStorage.getItem("token");
    if (userToken) {
      router.push("/");
    }
  }, []);
  return (
    <div className="flex h-screen">
      <LeftPanel />
      <RightPanel />
    </div>
  );
};

export default Login;
