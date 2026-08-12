import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Crown,
  Newspaper,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

interface NewsCardProps {
  news: {
    id: string;
    title: string;
    description: string;
    image?: string;
    category?: string;
    publishedAt?: string;
    readTime?: number;
  };
  isPremium?: boolean;
}

const NewsCard = ({
  news,
  isPremium = false,
}: NewsCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/60 bg-card py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        {news.image ? (
          <Image
            src={news.image}
            alt={news.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted">
            <Newspaper className="size-8 text-muted-foreground" />
          </div>
        )}

        {/* News type */}
        <div className="absolute left-4 top-4">
          {isPremium ? (
            <Badge className="gap-1.5 border-0 bg-primary text-primary-foreground shadow-sm">
              <Crown className="size-3.5" />
              Premium
            </Badge>
          ) : (
            <Badge
              variant="secondary"
              className="gap-1.5 border bg-background/90 backdrop-blur-sm"
            >
              <Newspaper className="size-3.5" />
              Free
            </Badge>
          )}
        </div>
      </div>

      <CardContent className="p-5">
        {/* Category + Date */}
        <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
          {news.category && (
            <span className="font-medium text-primary">
              {news.category}
            </span>
          )}

          {news.publishedAt && (
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5" />
              {news.publishedAt}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="mt-3 line-clamp-2 text-xl font-semibold leading-tight tracking-tight">
          {news.title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {news.description}
        </p>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t pt-4">
          {news.readTime ? (
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock3 className="size-3.5" />
              {news.readTime} min read
            </span>
          ) : (
            <span />
          )}

          <Link
            href={
              isPremium
                ? `/premium/${news.id}`
                : `/news/${news.id}`
            }
            className="ml-auto inline-flex items-center gap-1.5 text-sm font-medium text-primary transition-colors hover:text-primary/80"
          >
            Read article
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default NewsCard;