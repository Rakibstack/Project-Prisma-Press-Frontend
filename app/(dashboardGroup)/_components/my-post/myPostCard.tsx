import Link from "next/link";
import {
  CalendarDays,
  Edit3,
  Eye,
  MoreHorizontal,
  Trash2,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Image from "next/image";

export interface Post {
  id: string;
  title: string;
  content: string;
  image?: string | null;
  category?: string | null;
  status?: "DRAFT" | "PUBLISHED" | "ARCHIVED";
  createdAt?: string;
  updatedAt?: string;
}

interface MyPostCardProps {
  post: Post;
  onEdit: (post: Post) => void;
  onDelete: (post: Post) => void;
}

const MyPostCard = ({
  post,
  onEdit,
  onDelete,
}: MyPostCardProps) => {
  
  const getStatusVariant = () => {
    switch (post.status) {
      case "PUBLISHED":
        return "default";

      case "DRAFT":
        return "secondary";

      case "ARCHIVED":
        return "outline";

      default:
        return "secondary";
    }
  };

  return (
    <Card className="group overflow-hidden border-border/60 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden bg-muted">
        {post.image ? (
          <Image
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority
            src={post.image}
            alt={post.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-sm text-muted-foreground">
            No image available
          </div>
        )}

        {/* Status */}
        {post.status && (
          <div className="absolute left-4 top-4">
            <Badge variant={getStatusVariant()}>
              {post.status}
            </Badge>
          </div>
        )}
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-start justify-between gap-3">
          <h2 className="line-clamp-2 text-lg font-semibold leading-tight">
            {post.title}
          </h2>

          {/* Actions */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="size-8 shrink-0"
              >
                <MoreHorizontal className="size-4" />

                <span className="sr-only">
                  Open post actions
                </span>
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="end">
              {/* Edit */}
              <DropdownMenuItem
                onClick={() => onEdit(post)}
              >
                <Edit3 className="mr-2 size-4" />
                Edit post
              </DropdownMenuItem>

              {/* View */}
              <DropdownMenuItem asChild>
                <Link href={`/posts/${post.id}`}>
                  <Eye className="mr-2 size-4" />
                  View post
                </Link>
              </DropdownMenuItem>

              <DropdownMenuSeparator />

              {/* Delete */}
              <DropdownMenuItem
                variant="destructive"
                onClick={() => onDelete(post)}
              >
                <Trash2 className="mr-2 size-4" />
                Delete post
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>

      <CardContent>
        <p className="line-clamp-3 text-sm leading-6 text-muted-foreground">
          {post.content}
        </p>
      </CardContent>

      <CardFooter className="border-t pt-4">
        <div className="flex w-full items-center justify-between text-xs text-muted-foreground">
          {post.category && (
            <span className="font-medium text-primary">
              {post.category}
            </span>
          )}

          {post.createdAt && (
            <span className="flex items-center gap-1.5">
              <CalendarDays className="size-3.5" />
              {post.createdAt}
            </span>
          )}
        </div>
      </CardFooter>
    </Card>
  );
};

export default MyPostCard;