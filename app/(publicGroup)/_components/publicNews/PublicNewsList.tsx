import NewsCard from "../premiumNews/newsCard";


interface PublicNewsListProps {
  news: Array<{
    id: string;
    title: string;
    description: string;
    image?: string;
    category?: string;
    publishedAt?: string;
    readTime?: number;
  }>;
}

const PublicNewsList = ({ news }: PublicNewsListProps) => {
  if (!news.length) {
    return (
      <div className="flex min-h-60 items-center justify-center rounded-2xl border border-dashed">
        <div className="text-center">
          <h3 className="font-semibold">
            No news available
          </h3>

          <p className="mt-1 text-sm text-muted-foreground">
            There are no public news articles available right now.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {news.map((item) => (
        <NewsCard key={item.id} news={item} />
      ))}
    </div>
  );
};

export default PublicNewsList;