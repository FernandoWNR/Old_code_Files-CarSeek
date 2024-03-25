 'use client';

import {UploadDropzone } from "@uploadthing/react";

const ImageUpload = () => {
   
  return (
    <div>
     <UploadDropzone endpoint='imageUploader'
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
  )
}

export default ImageUpload;
