import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";

import type { OurFileRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton(); //ga match nih bagian ini
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();
