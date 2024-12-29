import { createUploadthing, type FileRouter } from "uploadthing/next";
import { UploadThingError } from "uploadthing/server";
import { currentUser } from "@clerk/nextjs/server";

const f = createUploadthing();

// FileRouter for your app, can contain multiple FileRoutes
export const ourFileRouter = {
  // Define as many FileRoutes as you like, each with a unique routeSlug
  mediaPost: f({
    video: {
      maxFileSize: "128MB",
      maxFileCount: 1,
    },
  })
    // Set permissions and file types for this FileRoute
    .middleware(async ({ req }) => {
      console.log("Middleware for mediaPost");
      // This code runs on your server before upload
      const user = await currentUser();

      // If you throw, the user will not be able to upload
      if (!user) throw new UploadThingError("Unauthorized");

      console.log("User is authorized to upload");
      console.log("User id:", user.id);
      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("onUploadComplete for mediaPost");
      console.log("\n");
      // This code RUNS ON YOUR SERVER after upload
      console.log("Upload complete for userId : ", metadata.userId);
      console.log("\n\n\n");
      console.log("file url = ", file.url);

      // sent message to queue

      // !!! Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: "done" };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
