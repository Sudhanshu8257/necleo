import { FileWithPath } from "@uploadthing/react";
import { Upload } from "lucide-react";
import React from "react";
import { useCallback } from "react";
import { useDropzone } from "@uploadthing/react/hooks";
import { generateClientDropzoneAccept } from "uploadthing/client";
import { Button } from "./ui/button";
import Image from "next/image";

const ImageUploader = ({ onFieldChange, imageUrl, setFiles }: any) => {
  const convertFileToUrl = (file: File) => URL.createObjectURL(file);

  const onDrop = useCallback((acceptedFiles: FileWithPath[]) => {
    setFiles(acceptedFiles);
    onFieldChange(convertFileToUrl(acceptedFiles[0]));
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: "image/*" ? generateClientDropzoneAccept(["image/*"]) : undefined,
  });
  return (
    <div
      {...getRootProps()}
      className="flex bg-gray-100 h-fit p-4 cursor-pointer flex-col items-center justify-center overflow-hidden rounded-xl "
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {imageUrl ? (
        <div className="flex max-h-[150px] w-full flex-1 justify-center">
          <Image
            src={imageUrl}
            alt="image"
            width={150}
            height={150}
            className="w-full object-contain object-center"
          />
        </div>
      ) : (
        <div className="flex items-center justify-center flex-col py-5 font-semibold">
          <Upload width={36} height={36} />
          <h3 className="mb-2 mt-2">Drag photo here</h3>
          <p className="p-medium-12 mb-4">SVG, PNG, JPG</p>
          <Button type="button" className="rounded-full">
            Select from computer
          </Button>
        </div>
      )}
    </div>
  );
};

export default ImageUploader;
