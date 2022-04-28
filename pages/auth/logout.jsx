import { useRouter } from "next/router";
import React from "react";

const Logout = () => {
  const router = useRouter();
  router.push("/auth/login");
  // setTimeout(() => {
  // }, 1000);
  return (
    <div
      style={{ margin: " 10rem auto", textAlign: "center", height: "100vh" }}
    >
      {" "}
      logout
    </div>
  );
};

export default Logout;
