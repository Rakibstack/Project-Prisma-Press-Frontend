
export interface IAuthor {
  id: string;
  name: string;
  email: string;
  profileImage?: string | null;
}

export interface IComment {
  id: string;
  content: string;
  authorId: string;
  postId: string;
  createdAt: string;
  updatedAt: string;
  author?: IAuthor;
}

export interface IPost {
  id: string;
  title: string;
  content: string;
  thumbnail: string;

  isFeatured: boolean;
  isPremium: boolean;

  status: "DRAFT" | "PUBLISHED" | "ARCHIVED";

  tags: string[];

  views: number;

  createdAt: string;
  updatedAt: string;

  authorId: string;

  author?: IAuthor;

  comment: IComment[];

  _count: {
    comment: number;
  };
}

export interface IProps {
  posts: IPost[];
}