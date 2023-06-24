import { useEffect, useState } from "react";
import Dashboard from "../components/Dashboard";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter();
  const [user, setUser] = useState("");
  useEffect(() => {
    const userToken = localStorage.getItem("token");
    setUser(userToken);
    if (!userToken) {
      router.push("/login");
    }
  }, []);

  if (!user) return <div>Loading...</div>;

  return <Dashboard />;
}
