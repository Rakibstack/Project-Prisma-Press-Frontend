"use client";

import { useState } from "react";
import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

import MyPostCard, {
  type Post,
} from "./myPostCard";

import PostFormDialog from "./postFormDialog";

interface MyPostListProps {
  posts: Post[];
}

const MyPostList = ({ posts }: MyPostListProps) => {
  const [dialogOpen, setDialogOpen] = useState(false);

  const [mode, setMode] = useState<"create" | "edit">(
    "create",
  );

  const [selectedPost, setSelectedPost] =
    useState<Post | null>(null);

  // =========================
  // CREATE POST
  // =========================

  const handleCreate = () => {
    setSelectedPost(null);
    setMode("create");
    setDialogOpen(true);
  };

  // =========================
  // EDIT POST
  // =========================

  const handleEdit = (post: Post) => {
    setSelectedPost(post);
    setMode("edit");
    setDialogOpen(true);
  };

  // =========================
  // DELETE POST
  // =========================

  const handleDelete = (post: Post) => {
    console.log("Delete post:", post.id);

    // Later:
    // await deletePost(post.id);
  };

  return (
    <div className="space-y-6">
      {/* =========================
          HEADER
      ========================= */}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            My Posts
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Create, edit, and manage your posts.
          </p>
        </div>

        <Button
          onClick={handleCreate}
          className="gap-2"
        >
          <Plus className="size-4" />
          Create Post
        </Button>
      </div>

      {/* =========================
          EMPTY STATE
      ========================= */}

      {posts.length === 0 ? (
        <div className="flex min-h-80 flex-col items-center justify-center rounded-2xl border border-dashed px-6 text-center">
          <div className="flex size-12 items-center justify-center rounded-2xl bg-primary/10">
            <Plus className="size-5 text-primary" />
          </div>

          <h3 className="mt-4 font-semibold">
            No posts yet
          </h3>

          <p className="mt-1 max-w-sm text-sm text-muted-foreground">
            Start sharing your thoughts with the community by
            creating your first post.
          </p>

          <Button
            onClick={handleCreate}
            className="mt-5 gap-2"
          >
            <Plus className="size-4" />
            Create your first post
          </Button>
        </div>
      ) : (
        /* =========================
            POST LIST
        ========================= */

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {posts.map((post) => (
            <MyPostCard
              key={post.id}
              post={post}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* =========================
          CREATE / EDIT DIALOG
      ========================= */}

      <PostFormDialog
        key={`${mode}-${selectedPost?.id ?? "create"}`}
        open={dialogOpen}
        onOpenChange={setDialogOpen}
        mode={mode}
        post={selectedPost}
      />
    </div>
  );
};

export default MyPostList;