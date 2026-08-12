import MyPostSkeleton from "../../_components/my-post/myPostSkeleton";

const Loading = () => {
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <MyPostSkeleton />
      </div>
    </main>
  );
};

export default Loading;