import React from "react";
import Sidebar from "@/components/sidebar";

const page = () => {
  const sidebarItems = [{ name: "Video Transcoder", href: "/transcoder" }];

  return (
    <div className="flex h-screen">
      <Sidebar title="TranscodeNow" sidebarItems={sidebarItems} />
      <div className="w-full">
        <div className="p-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
