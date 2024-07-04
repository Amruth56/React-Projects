import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/header";

const AppLayout = () => {
  return (
    <div className="bg-slate-950 text-white min-h-screen">
      <div className="container px-6 py-4">
        <Header></Header>
        <main>
          <Outlet></Outlet>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
