"use client";
import Link from "next/link";
import {
  BellIcon,
  CreditCardIcon,
  LayoutDashboardIcon,
  LogOutIcon,
  SettingsIcon,
  SparklesIcon,
  UserIcon,
} from "lucide-react";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const navItems = [
  { label: "Home", href: "/" },
  { label: "All Posts", href: "/properties" },
  { label: "Contact", href: "/contact" },
  { label: "Subscriptions", href: "/subscriptions" },
  { label: "Dashboard", href: "/dashboard" },
];

const accountItems = [
  { label: "Profile", icon: UserIcon },
  { label: "Settings", icon: SettingsIcon },
  { label: "Billing", icon: CreditCardIcon },
];

type Iuser = {
  success: boolean;
  statusCode: number;
  message: string;
  data: {
    userProfile: {
      id: string;
      name: string;
      email: string;
      activeStatus: string;
      role: string;
      createdAt: string;
      updatedAt: string;
      profile: {
        id: string;
        profilePhoto: string;
        bio: string | null;
      };
    };
  };
};

type NavberProps = {
  user: Iuser;
};

export default function Navber({ user }: NavberProps) {
  return (
    <div className="border-b border-border bg-background">
      <div className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between gap-6 px-4 sm:px-6">
        <Link
          href="/"
          className="flex shrink-0 items-center gap-2"
          aria-label="next.js press home"
        >
          <span className="flex size-8 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <SparklesIcon aria-hidden="true" />
          </span>
          <span className="text-base font-semibold tracking-tight">
            Next.js press
          </span>
        </Link>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList className="gap-1">
            {navItems.map((item) => (
              <NavigationMenuItem key={item.href}>
                <NavigationMenuLink
                  render={<Link href={item.href} />}
                  className={navigationMenuTriggerStyle()}
                >
                  {item.label}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" aria-label="Notifications">
            <BellIcon aria-hidden="true" />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger
              render={
                <Button
                  variant="ghost"
                  className="gap-2 px-1.5 sm:px-2.5"
                  aria-label="Open user menu"
                />
              }
            >
              <Avatar size="sm">
                <AvatarFallback>
                  {" "}
                  <UserIcon className="size-5" />{" "}
                </AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuLabel className="pl-8">
                  <span className="block">Jordan Davis</span>
                  <span className="block font-normal text-muted-foreground">
                    jordan@example.com
                  </span>
                </DropdownMenuLabel>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                {accountItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <DropdownMenuItem key={item.label}>
                      <Icon aria-hidden="true" />
                      {item.label}
                    </DropdownMenuItem>
                  );
                })}
                <DropdownMenuItem>
                  <LayoutDashboardIcon aria-hidden="true" />
                  Switch workspace
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon aria-hidden="true" />
                Sign out
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
}
