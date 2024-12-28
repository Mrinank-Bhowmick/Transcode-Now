import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="">{children}</div>
    </div>
  );
};

export default DashboardLayout;
