import {
  LayoutDashboard,
  FileText,
  User,
  CreditCard,
  Settings,
  PenSquare,
  Users,
  BarChart3,
 
} from "lucide-react";

 export const userItems = [
    {
      title: "Overview",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Posts",
      href: "/dashboard/my-posts",
      icon: FileText,
    },
    {
      title: "Subscription",
      href: "/dashboard/subscription",
      icon: CreditCard,
    },
    {
      title: "Profile",
      href: "/dashboard/profile",
      icon: User,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

export  const authorItems = [
    {
      title: "Overview",
      href: "/author-Dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "My Posts",
      href: "/author-Dashboard/my-posts",
      icon: FileText,
    },
    {
      title: "Create Post",
      href: "/author-Dashboard/create-post",
      icon: PenSquare,
    },
    {
      title: "Analytics",
      href: "/author-Dashboard/analytics",
      icon: BarChart3,
    },
    {
      title: "Profile",
      href: "/author-Dashboard/profile",
      icon: User,
    },
  ];

 export const adminItems = [
    {
      title: "Overview",
      href: "/admin-Dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Users",
      href: "/admin-Dashboard/users",
      icon: Users,
    },
    {
      title: "Posts",
      href: "/admin-Dashboard/posts",
      icon: FileText,
    },
    {
      title: "Analytics",
      href: "/admin-Dashboard/analytics",
      icon: BarChart3,
    },
    {
      title: "Settings",
      href: "/admin-Dashboard/settings",
      icon: Settings,
    },
  ];