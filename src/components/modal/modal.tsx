"use client";

import { useState, type ChangeEvent } from "react";
import Image from "next/image";

import { BASE_URL, API_KEY } from "@/lib/constants";
import CloseButton from "@/components/modal/close-button";
import UploadBackground from "@/components/modal/upload-background";
import UploadPhotoButton from "@/components/modal/upload-photo-button";

export default function Modal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);
  const [imageUrl, setImageUrl] = useState("");
  const [isUploading, setIsUploading] = useState(false);
  const [isResponseOk, setIsResponseOk] = useState<boolean | null>(null);

  const handleClose = () => {
    onClose();
    setSelectedImage(null);
    setIsResponseOk(null);
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedImage(file);
      setIsUploading(false);
      setIsResponseOk(null);
      setImageUrl(URL.createObjectURL(file));
    }
  };

  const uploadImage = async () => {
    setIsUploading(true);

    const formData = new FormData();
    if (selectedImage) {
      formData.append("file", selectedImage);
    }

    const headers = new Headers();
    headers.append("x-api-key", API_KEY || "");
    const response = await fetch(`${BASE_URL}/images/upload`, {
      method: "POST",
      body: formData,
      headers,
    });

    setIsResponseOk(response.ok);
    if (response.ok) {
      setSelectedImage(null);
    }
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed right-24 top-5 z-20 flex h-[57.5rem] w-[47.5rem] flex-col rounded-[1.25rem] bg-stone-50 dark:bg-stone-800 max-sm:right-0 max-sm:top-0 max-sm:w-screen max-sm:rounded-none">
      <CloseButton onClick={handleClose} />
      <div className="flex flex-col text-center">
        <div className="mt-8 font-jost text-4xl font-medium text-stone-900 dark:text-white max-sm:text-xl">
          Upload a .jpg or .png Cat Image
        </div>
        <span className="mt-4 font-jost text-xl font-normal leading-[1.875rem] text-neutral-400">
          Any uploads must comply with the
          <a
            className="font-jost text-xl font-normal leading-[1.875rem] text-rose-400"
            target="_blank"
            href="https://thecatapi.com/privacy"
          >
            {` upload guidelines `}
          </a>
          or face deletion.
        </span>
        <div
          className={`mt-8 flex h-80 w-[40rem] justify-center self-center rounded-[1.25rem] border-2 border-dashed dark:border-rose-400 dark:border-opacity-20 dark:bg-opacity-5 max-sm:h-[10.46875rem] max-sm:w-[20.9375rem] ${
            isResponseOk === false
              ? "border-rose-400 bg-red-100"
              : "border-red-100 bg-white"
          }`}
        >
          <input
            className="fixed z-30 h-80 w-[40rem] opacity-0"
            type="file"
            accept="image/*,.jpeg,.jpg,.png"
            onChange={handleImageChange}
          />
          <div className="relative mt-4 flex h-[17.5rem] w-[34.88375rem] flex-col items-center justify-center rounded-[0.625rem] max-sm:h-[9.2495rem] max-sm:w-[18.4375rem]">
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
                <div className="z-10 font-jost text-xl font-medium leading-[1.875rem] text-stone-900 dark:text-white">
                  Drag here
                  <span className="text-neutral-400">{` your file or `}</span>
                  {` Click here `}
                  <span className="text-neutral-400">to upload</span>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="mt-8 font-jost text-xl font-normal leading-[1.875rem] text-neutral-400">
          {selectedImage
            ? `Image File Name: ${selectedImage.name}`
            : "No file selected"}
        </div>
        {isResponseOk === true && (
          <div className="mt-8 flex h-[3.75rem] w-[40rem] items-center self-center rounded-[0.625rem] bg-white dark:bg-opacity-5">
            <div className="ml-5 h-5 w-5 bg-[url('/success-20.svg')] bg-center bg-no-repeat" />
            <div className="ml-2.5 font-jost text-base font-normal leading-normal text-neutral-400">
              Thanks for the Upload - Cat found!
            </div>
          </div>
        )}
        {isResponseOk === false && (
          <div className="mt-8 flex h-[3.75rem] w-[40rem] items-center self-center rounded-[0.625rem] bg-white dark:bg-opacity-5">
            <div className="ml-5 h-5 w-5 bg-[url('/error-20.svg')] bg-center bg-no-repeat" />
            <div className="ml-2.5 font-jost text-base font-normal leading-normal text-neutral-400">
              No Cat found - try a different one
            </div>
          </div>
        )}
        {selectedImage && isResponseOk === null && (
          <UploadPhotoButton isUploading={isUploading} onClick={uploadImage} />
        )}
      </div>
    </div>
  );
}
