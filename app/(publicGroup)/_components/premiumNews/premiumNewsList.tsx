import { IPost } from "@/lib/type";
import { getPremiumNews } from "../../_action/getPremiumNews";
import NewsCard from "./newsCard";

const PremiumNewsList = async () => {
  
  const result = await getPremiumNews()

  if (!result.success || result.data?.length === 0) {
    
    return (
      <div className="flex min-h-60 items-center justify-center rounded-2xl border border-dashed">
        <div className="text-center">
          <h3 className="font-semibold">
            No premium news available
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            Check back later for new premium articles.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {result.data.map((post : IPost) => (
        <NewsCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PremiumNewsList;