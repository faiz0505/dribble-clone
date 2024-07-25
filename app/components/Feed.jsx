import React from "react";
import FeedCard from "./FeedCard";
import { feedData } from "../lib/data";

const Feed = () => {
  return (
    <section className="min-h-screen w-full my-14 px-2 md:px-5 lg:px-16">
      <h1 className="text-center text-5xl">Explore inspiring designs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
        {feedData.map((post) => (
          <FeedCard
            key={post.id}
            id={post.id}
            title={post.title}
            image={post.image}
            likes={post.likes}
            views={post.views}
            author={post.authorName}
            authorImage={post.authorImage}
          />
        ))}
      </div>
    </section>
  );
};

export default Feed;
