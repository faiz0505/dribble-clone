import React from "react";
import CardComp from "./HeroCard";
import Hero from "./Hero";

const Crousal = () => {
  const marqueData = [
    {
      id: "001",
      type: "image",
      title: "Chris Owens dsj jshd",
      categories: ["Brand", "Web", "Design"],
      href: "/marque-image-1.jpg",
    },
    {
      id: "002",
      type: "image",
      title: "Chris Owens dsj jshd sdhfg fsfgd ksdgfl sk",
      categories: ["Brand", "Web", "Design"],
      href: "/marque-image-1.jpg",
    },
    {
      id: "003",
      type: "image",
      title: "Chris Owens dsj jshd",
      categories: ["Brand", "Web", "Design"],
      href: "/marque-image-1.jpg",
    },
    {
      id: "004",
      type: "image",
      title: "Chris Owens dsj jshd jhfgs hsg sh ",
      categories: ["Brand", "Web", "Design"],
      href: "/marque-image-1.jpg",
    },
    {
      id: "005",
      type: "image",
      title: "Chris Owens dsj jshd",
      categories: ["Brand", "Web", "Design"],
      href: "/marque-image-1.jpg",
    },
    {
      id: "006",
      type: "image",
      title: "Chris Owens dsj jshd",
      categories: ["Brand", "Web", "Design"],
      href: "/marque-image-1.jpg",
    },
  ];
  return (
    <section className="relative flex overflow-x-hidden">
      <div className="py-12 animate-marquee whitespace-nowrap grid grid-flow-col gap-8">
        {marqueData.map((item) => (
          <CardComp
            key={item.id}
            type={item.type}
            title={item.title}
            href={item.href}
            categoties={item.categories}
          />
        ))}
      </div>
      <div className="absolute top-0 py-12 animate-marquee2 whitespace-nowrap grid grid-flow-col gap-8 ml-14">
        {marqueData.map((item) => (
          <CardComp
            key={item.id}
            type={item.type}
            title={item.title}
            href={item.href}
            categoties={item.categories}
          />
        ))}
      </div>
    </section>
  );
};

export default Crousal;
