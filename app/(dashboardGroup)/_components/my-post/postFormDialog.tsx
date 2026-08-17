"use client";

import { useState } from "react";
import { ImagePlus, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import type { Post } from "./myPostCard";

interface PostFormDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  mode: "create" | "edit";
  post?: Post | null;
}

interface FormData {
  title: string;
  content: string;
  category: string;
  thumbnail: string;
}

const PostFormDialog = ({
  open,
  onOpenChange,
  mode,
  post,
}: PostFormDialogProps) => {
  const [formData, setFormData] = useState<FormData>({
    title: post?.title ?? "",
    content: post?.content ?? "",
    category: post?.category ?? "",
    thumbnail: post?.thumbnail ?? "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }; 

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      if (mode === "create") {
        console.log("Create Post:", formData);

        // Later:
        // const result = await createPost(formData);
      }
      if (mode === "edit" && post) {
        console.log("Update Post:", {
          id: post.id,
          ...formData,
        });

        // Later:
        // const result = await updatePost(
        //   post.id,
        //   formData
        // );
      }

      // Close dialog
      onOpenChange(false);
    } catch (error) {
      console.error("Post form error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleClose = () => {
    if (!loading) {
      onOpenChange(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle className="text-xl">
            {mode === "create" ? "Create a new post" : "Edit your post"}
          </DialogTitle>

          <DialogDescription>
            {mode === "create"
              ? "Share your thoughts and ideas with the community."
              : "Update your post information and save your changes."}
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* TITLE */}

          <div className="space-y-2">
            <Label htmlFor="title">Title</Label>

            <Input
              id="title"
              name="title"
              placeholder="Enter your post title"
              value={formData.title}
              onChange={handleChange}
              disabled={loading}
              required
            />
          </div>

          {/* CATEGORY */}

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>

            <Input
              id="category"
              name="category"
              placeholder="Technology, Business..."
              value={formData.category}
              onChange={handleChange}
              disabled={loading}
            />
          </div>

          {/* IMAGE */}

          <div className="space-y-2">
            <Label htmlFor="thumbnail">Thumbnail URL</Label>

            <div className="relative">
              <ImagePlus className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />

              <Input
                id="thumbnail"
                name="thumbnail"
                placeholder="https://example.com/image.jpg"
                value={formData.thumbnail}
                onChange={handleChange}
                disabled={loading}
                className="pl-9"
              />
            </div>
          </div>

          {/* CONTENT */}

          <div className="space-y-2">
            <Label htmlFor="content">Content</Label>

            <Textarea
              id="content"
              name="content"
              placeholder="Write your post..."
              value={formData.content}
              onChange={handleChange}
              disabled={loading}
              required
              className="min-h-40 resize-none"
            />
          </div>

          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="outline"
              onClick={handleClose}
              disabled={loading}
            >
              Cancel
            </Button>

            <Button type="submit" disabled={loading} className="gap-2">
              {loading && <Loader2 className="size-4 animate-spin" />}

              {mode === "create" ? "Create Post" : "Save Changes"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default PostFormDialog;
