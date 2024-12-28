"use client";
import React from "react";
import Sidebar from "@/components/sidebar";
import { UploadButton } from "@/utils/uploadthing";

const page = () => {
  const sidebarItems = [{ name: "Video Transcoder", href: "/transcoder" }];

  return (
    <div className="flex h-screen">
      <Sidebar title="TranscodeNow" sidebarItems={sidebarItems} />
      <div className="w-full">
        <div className="p-6 md:ml-0 ml-10">
          <h1 className="text-2xl font-bold">Transcoder</h1>
        </div>
        <div className="flex flex-col items-center justify-between p-24">
          <UploadButton
            endpoint="mediaPost"
            onClientUploadComplete={(res) => {
              // Do something with the response
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              // Do something with the error.
              alert(`ERROR! ${error.message}`);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
