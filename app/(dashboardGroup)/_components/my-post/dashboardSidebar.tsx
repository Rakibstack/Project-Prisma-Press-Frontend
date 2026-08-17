
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  FileText,
  User,
  CreditCard,
  Settings,
  PenSquare,
  Users,
  BarChart3,
  Home,
  LogOut,
} from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

interface DashboardSidebarProps {
  role?: string;
}

const DashboardSidebar = ({ role }: DashboardSidebarProps) => {
  const pathname = usePathname();

  const userItems = [
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

  const authorItems = [
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

  const adminItems = [
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

  const getMenuItems = () => {
    switch (role) {
      case "ADMIN":
        return adminItems;

      case "AUTHOR":
        return authorItems;

      case "USER":
      default:
        return userItems;
    }
  };

  const menuItems = getMenuItems();

  return (
    <Sidebar collapsible="icon">
      {/* Header */}
      <SidebarHeader>
        <Link
          href="/"
          className="flex items-center gap-3 px-2 py-3"
        >
          <div className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Home className="size-5" />
          </div>

          <div className="flex flex-col group-data-[collapsible=icon]:hidden">
            <span className="text-sm font-bold tracking-tight">
              Prisma Press
            </span>

            <span className="text-xs text-muted-foreground">
              {role === "ADMIN"
                ? "Admin Panel"
                : role === "AUTHOR"
                  ? "Author Panel"
                  : "User Dashboard"}
            </span>
          </div>
        </Link>
      </SidebarHeader>

      {/* Navigation */}
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Workspace
          </SidebarGroupLabel>

          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                const Icon = item.icon;

                const isActive =
                  pathname === item.href ||
                  pathname.startsWith(`${item.href}/`);

                return (
                  <SidebarMenuItem key={item.href}>
                    <SidebarMenuButton
                      asChild
                      isActive={isActive}
                      tooltip={item.title}
                    >
                      <Link href={item.href}>
                        <Icon className="size-4" />
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild tooltip="Back to website">
              <Link href="/">
                <Home className="size-4" />
                <span>Back to website</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>

          <SidebarMenuItem>
            <SidebarMenuButton tooltip="Sign out">
              <LogOut className="size-4" />
              <span>Sign out</span>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
};

export default DashboardSidebar;