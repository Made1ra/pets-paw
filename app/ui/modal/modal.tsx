"use client";

import { useState } from "react";
import Image from "next/image";
import CloseButton from "@/app/ui/modal/close-button";
import UploadBackground from "@/app/ui/modal/upload-background";
import UploadPhotoButton from "@/app/ui/modal/upload-photo-button";

export default function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isResponseOk, setIsResponseOk] = useState<boolean | null>(null);

  function handleClose() {
    onClose();
    setSelectedImage(null);
    setIsResponseOk(null);
  }

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setIsUploading(false);
      setIsResponseOk(null);
      setImageUrl(URL.createObjectURL(file));
    }
  }

  async function uploadImage() {
    setIsUploading(true);

    const formData = new FormData();
    if (selectedImage) {
      formData.append("file", selectedImage);
    }

    const headers = new Headers();
    headers.append("x-api-key", API_KEY || "");
    const response = await fetch("https://api.thecatapi.com/v1/images/upload", {
      method: "POST",
      body: formData,
      headers: headers,
    });

    setIsResponseOk(response.ok);
    if (response.ok) {
      setSelectedImage(null);
    }
  }

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="flex flex-col w-[47.5rem] h-[57.5rem] bg-stone-50 rounded-[1.25rem] z-20 fixed top-5 right-24
        max-sm:w-screen max-sm:top-0 max-sm:right-0 max-sm:rounded-none
        dark:bg-stone-800"
    >
      <CloseButton onClick={() => handleClose()} />
      <div className="flex flex-col text-center">
        <div
          className="mt-8 text-stone-900 text-4xl font-medium font-jost
                max-sm:text-xl
                dark:text-white"
        >
          Upload a .jpg or .png Cat Image
        </div>
        <span className="mt-4 text-neutral-400 text-xl font-normal font-jost leading-[1.875rem]">
          Any uploads must comply with the
          <a
            className="text-rose-400 text-xl font-normal font-jost leading-[1.875rem]"
            target="_blank"
            href="https://thecatapi.com/privacy"
          >
            {` upload guidelines `}
          </a>
          or face deletion.
        </span>
        <div
          className={`flex justify-center self-center mt-8 w-[40rem] h-80 rounded-[1.25rem] border-2 border-dashed
                max-sm:w-[20.9375rem] max-sm:h-[10.46875rem]
                dark:bg-opacity-5 dark:border-rose-400 dark:border-opacity-20 ${
                  isResponseOk === false
                    ? "bg-red-100 border-rose-400"
                    : "bg-white border-red-100"
                }`}
        >
          <input
            className="fixed w-[40rem] h-80 opacity-0 z-30"
            type="file"
            accept="image/*,.jpeg,.jpg,.png"
            onChange={(e) => handleImageChange(e)}
          />
          <div
            className="relative flex flex-col items-center justify-center w-[34.88375rem] h-[17.5rem] rounded-[0.625rem] mt-4
                    max-sm:w-[18.4375rem] max-sm:h-[9.2495rem]"
          >
            {selectedImage ? (
              <Image
                className="rounded-[0.625rem]"
                src={imageUrl}
                alt={selectedImage.name}
                fill
                sizes="100vw"
                priority={true}
              />
            ) : (
              <>
                <UploadBackground />
                <div
                  className="text-stone-900 text-xl font-medium font-jost leading-[1.875rem] z-10
                                dark:text-white"
                >
                  Drag here
                  <span className="text-neutral-400">{` your file or `}</span>
                  {` Click here `}
                  <span className="text-neutral-400">to upload</span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="mt-8 text-neutral-400 text-xl font-normal font-jost leading-[1.875rem]">
          {selectedImage
            ? `Image File Name: ${selectedImage.name}`
            : "No file selected"}
        </div>
        {isResponseOk === true && (
          <div
            className="flex items-center self-center w-[40rem] h-[3.75rem] mt-8 bg-white rounded-[0.625rem]
                    dark:bg-opacity-5"
          >
            <div className="w-5 h-5 ml-5 bg-center bg-no-repeat bg-[url('/success-20.svg')]" />
            <div className="ml-2.5 text-neutral-400 text-base font-normal font-jost leading-normal">
              Thanks for the Upload - Cat found!
            </div>
          </div>
        )}
        {isResponseOk === false && (
          <div
            className="flex items-center self-center w-[40rem] h-[3.75rem] mt-8 bg-white rounded-[0.625rem]
                    dark:bg-opacity-5"
          >
            <div className="w-5 h-5 ml-5 bg-center bg-no-repeat bg-[url('/error-20.svg')]" />
            <div className="ml-2.5 text-neutral-400 text-base font-normal font-jost leading-normal">
              No Cat found - try a different one
            </div>
          </div>
        )}
        {selectedImage && isResponseOk === null && (
          <UploadPhotoButton
            isUploading={isUploading}
            onClick={() => uploadImage()}
          />
        )}
      </div>
    </div>
  );
}
