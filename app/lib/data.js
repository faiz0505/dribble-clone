export const feedData = Array.from({ length: 20 }, (_, id) => ({
  id: id + 1,
  title: `Sample Title ${id + 1}`,
  image: `https://picsum.photos/200/200?random=${id + 1}`,
  authorImage: `https://picsum.photos/50/50?random=${id + 21}`,
  likes: Math.floor(Math.random() * 1000),
  views: Math.floor(Math.random() * 10000),
  authorName: `Author ${id + 1}`,
}));
