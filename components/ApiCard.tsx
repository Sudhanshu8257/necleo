import Image from "next/image";
import Link from "next/link";
import React from "react";
interface image {
  image: {
    id: string;
    author: string;
    width: number;
    height: number;
    url: string;
    download_url: string;
  };
}
const ApiCard = ({ image }: image) => {
  return (
    <Link
      href={image?.url}
      className="flex flex-col min-w-[220px] max-md:min-w-[150px] overflow-hidden items-start justify-center gap-2 hover:bg-primary rounded-xl px-3 py-2 bg-white text-black font-semibold "
    >
      <Image
        key={image?.id}
        src={image?.download_url}
        width={200}
        height={200}
        alt={image?.author}
        className="rounded-lg max-md:w-[150px] max-md:h-auto"
      />
      <span>{image?.author}</span>
    </Link>
  );
};

export default ApiCard;
