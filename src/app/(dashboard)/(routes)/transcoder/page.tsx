"use client";
import React, { Suspense, useState } from "react";
import Sidebar from "@/components/sidebar";
import { UploadDropzone } from "@/utils/uploadthing";
import "@uploadthing/react/styles.css";

const Page = () => {
  const sidebarItems = [{ name: "Video Transcoder", href: "/transcoder" }];
  const [videoComing, isVideoComing] = useState(true);

  return (
    <div className="flex h-screen">
      <Sidebar title="TranscodeNow" sidebarItems={sidebarItems} />
      <div className="w-full h-screen">
        <div className="p-6 md:ml-0 ml-10">
          <h1 className="text-2xl font-bold">Transcoder</h1>
        </div>
        <div className="flex flex-col items-center justify-center">
          {videoComing && (
            <Suspense fallback={<div>Loading...</div>}>
              <div className="flex flex-col items-center justify-center">
                <div className="font-bold text-start w-full px-10">
                  Original Video
                </div>
                <div className="flex justify-center px-10 py-3 ">
                  <video className="rounded-lg w-3/4" controls>
                    <source
                      src="https://utfs.io/f/ZFGX35u3FQVsXJqzSfPoZckuALFYndazmwe7rOh2jsVETbyQ"
                      type="video/mp4"
                    />
                  </video>
                </div>
                <div className="font-bold w-full text-start px-10 py-2">
                  Transcoded Videos
                </div>
                <div className="flex justify-center items-center w-full px-10 gap-5 ">
                  <div className="h-1/4 w-auto">
                    <video className="rounded-lg" controls>
                      <source
                        src="https://utfs.io/f/ZFGX35u3FQVsXJqzSfPoZckuALFYndazmwe7rOh2jsVETbyQ"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                  <div className="h-1/4 w-auto">
                    <video className="rounded-lg" controls>
                      <source
                        src="https://utfs.io/f/ZFGX35u3FQVsXJqzSfPoZckuALFYndazmwe7rOh2jsVETbyQ"
                        type="video/mp4"
                      />
                    </video>
                  </div>
                </div>
              </div>
            </Suspense>
          )}
          <UploadDropzone
            endpoint="mediaPost"
            className="!px-1 !py-2"
            onClientUploadComplete={(res) => {
              console.log("Files: ", res);
              alert("Upload Completed");
            }}
            onUploadError={(error: Error) => {
              alert(`ERROR! ${error.message}`);
            }}
            onChange={(files) => {
              console.log("Files: ", files);
            }}
            onUploadBegin={() => {
              isVideoComing(true);
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Page;
