import { Card, CardBody, CardFooter, Chip } from "@nextui-org/react";
import Image from "next/image";
import React from "react";

const CardComp = ({ href, type, title, categoties }) => {
  return (
    <Card className=" h-80 w-72 relative bg-black overflow-hidden" radius="lg">
      {type === "video" ? (
        <video></video>
      ) : (
        <Image
          src={href}
          alt="image"
          fill
          sizes="100%"
          className=" opacity-70 object-cover"
        />
      )}
      <div className="flex flex-col gap-3 absolute bottom-0 p-3 ">
        <h4 className="text-white font-bold z-10 w-40 text-sm">{title}</h4>
        <div className="flex gap-3">
          {categoties.map((category) => (
            <Chip className="bg-transparent border border-white" size="sm">
              <span className="text-white font-semibold text-sm">
                {category}
              </span>
            </Chip>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default CardComp;
