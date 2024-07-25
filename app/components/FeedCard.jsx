import { Chip, User } from "@nextui-org/react";
import Image from "next/image";
import React from "react";
import { FaEye, FaHeart, FaRegBookmark, FaRegHeart } from "react-icons/fa";
import CustomButton from "./CustomButton";

const FeedCard = ({ id, title, image, author, likes, views, authorImage }) => {
  return (
    <div className="w-full group">
      <div className="w-full h-72 relative rounded-xl overflow-hidden bg-black">
        <Image
          src={image}
          alt="image"
          fill
          sizes="100%"
          className="opacity-75 object-cover"
          loading="lazy"
        />
        <div className="absolute bottom-0 py-8 px-4 hidden group-hover:flex items-center justify-between w-full">
          <h3 className="text-lg text-white font-semibold">{title}</h3>
          <div className="flex items-center gap-3">
            <CustomButton
              isIconOnly={true}
              radius="full"
              className="bg-white"
              color="secondary"
            >
              <FaRegHeart className="text-lg" />
            </CustomButton>
            <CustomButton
              isIconOnly={true}
              radius="full"
              className="bg-white"
              color="secondary"
            >
              <FaRegBookmark className="text-lg" />
            </CustomButton>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between py-3">
        <div className="flex items-center gap-3">
          <User
            avatarProps={{ src: authorImage, classNames: { base: "h-8 w-8" } }}
            name={author}
          />
          <Chip size="sm" radius="sm">
            <span className="text-white font-extrabold">Pro</span>
          </Chip>
        </div>
        <div className="flex items-center gap-2 text-sm">
          <div className="flex items-center gap-2">
            <FaHeart className="text-xs font-semibold opacity-65" />
            <span className="text-xs font-semibold opacity-65">{likes}</span>
          </div>
          <div className="flex items-center gap-2">
            <FaEye className="text-xs font-semibold opacity-65" />
            <span className="text-xs font-semibold opacity-65">{views}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
