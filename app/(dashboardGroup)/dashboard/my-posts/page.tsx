import { getMyPosts } from "../../_actions/myPostAction";
import MyPostList from "../../_components/my-post/myPostList";

const MyPostsPage = async () => {
  const posts = await getMyPosts()  
  return (
    <main className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <MyPostList posts={posts.data.result} />
      </div>
    </main>
  );
};

export default MyPostsPage;