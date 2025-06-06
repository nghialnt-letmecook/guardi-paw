"use client";

import { useState } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
}

export default function ProductGallery({ images }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="space-y-4">
      <div className="bg-gray-100 rounded-xl p-6 flex items-center justify-center">
        <Image
          src={images[selectedImage] || "/placeholder.svg"}
          alt="Product image"
          width={500}
          height={500}
          className="w-full max-w-md h-auto object-contain"
        />
      </div>
      <div className="flex space-x-4 overflow-x-auto pb-2">
        {images.map((image, index) => (
          <div
            key={index}
            className={`bg-gray-100 rounded-lg p-2 cursor-pointer min-w-[80px] ${
              selectedImage === index ? "ring-2 ring-pink-500" : ""
            }`}
            onClick={() => setSelectedImage(index)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Thumbnail ${index + 1}`}
              width={80}
              height={80}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
