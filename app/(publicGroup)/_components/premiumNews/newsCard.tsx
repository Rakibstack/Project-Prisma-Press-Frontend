import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CalendarDays,
  Clock3,
  Crown,
  MessageCircle,
  Newspaper,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { IPost } from "@/lib/type";


const NewsCard = ( { post }: { post: IPost }) => {

  const commentcount = post.comment ? post.comment.length : 0;
  return (
    <Card className="group overflow-hidden border-border/60 bg-card py-0 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        { post.thumbnail? (
          <Image
            src={post.thumbnail || ""}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center bg-muted">
            <Newspaper className="size-8 text-muted-foreground" />
          </div>
        )}

        {/* News type */}
        <div className="absolute left-4 top-4">
          {post.isPremium ? (
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
          {post.tags && (
            <span className="font-medium text-primary">{post.tags[0]}</span>
          )}

          {post.createdAt && (
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5" />
              {new Date(post.createdAt).toLocaleDateString()}
            </span>
          )}
        </div>

        {/* Title */}
        <h2 className="mt-3 line-clamp-2 text-xl font-semibold leading-tight tracking-tight">
          {post.title}
        </h2>

        {/* Description */}
        <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
          {post.content}
        </p>

        {/* Footer */}
        <div className="mt-5 flex items-center gap-2 justify-between border-t pt-4">

           <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Clock3 className="size-3.5" />
              {post.views} views
            </span>
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MessageCircle className="size-3.5" />
              {commentcount} comments
            </span>

          <Link
            href={post.isPremium ? `/premium/${post.id}` : `/news/${post.id}`}
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
