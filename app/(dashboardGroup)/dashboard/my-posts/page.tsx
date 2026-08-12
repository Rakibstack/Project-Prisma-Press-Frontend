import MyPostList from "../../_components/my-post/myPostList";

const MyPostsPage = async () => {
  const posts = [
    {
      id: "1",
      title: "Understanding Modern Web Development",
      content:
        "Modern web development is evolving rapidly with new tools and frameworks...",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      category: "Technology",
      status: "PUBLISHED" as const,
      createdAt: "Aug 12, 2026",
    },
    {
      id: "2",
      title: "Getting Started with Next.js",
      content:
        "Next.js provides a powerful way to build modern full-stack web applications...",
      image:
        "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
      category: "Development",
      status: "DRAFT" as const,
      createdAt: "Aug 10, 2026",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <MyPostList posts={posts} />
      </div>
    </main>
  );
};

export default MyPostsPage;