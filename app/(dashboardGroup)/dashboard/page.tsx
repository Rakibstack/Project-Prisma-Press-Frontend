import {
  BookOpen,
  Bookmark,
  MessageSquare,
  ArrowUpRight,
  Crown,
  Clock3,
  Sparkles,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

const UserDashboardPage = async () => {
  return (
    <div className="min-h-screen bg-muted/30">
      <div className="mx-auto max-w-7xl space-y-8 p-4 sm:p-6 lg:p-8">

        {/* Hero / Welcome */}
        <section className="relative overflow-hidden rounded-3xl border bg-background p-6 shadow-sm sm:p-8">
          <div className="relative z-10 max-w-2xl">
            <Badge
              variant="secondary"
              className="mb-4 gap-1.5 rounded-full px-3 py-1"
            >
              <Sparkles className="size-3.5" />
              Member Dashboard
            </Badge>

            <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
              Welcome back, Rakib 👋
            </h1>

            <p className="mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Stay updated with the latest stories, discover premium
              content, and keep track of your reading journey.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild>
                <Link href="/news">
                  Explore News
                  <ArrowUpRight className="ml-1 size-4" />
                </Link>
              </Button>

              <Button variant="outline" asChild>
                <Link href="/premium">
                  <Crown className="mr-2 size-4" />
                  Explore Premium
                </Link>
              </Button>
            </div>
          </div>

          {/* Decorative element */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-24 right-24 size-48 rounded-full bg-primary/5 blur-3xl" />
        </section>

        {/* Stats */}
        <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <Card className="rounded-2xl">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <BookOpen className="size-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Articles Read
                </p>
                <p className="mt-1 text-2xl font-bold">24</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Bookmark className="size-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Saved Articles
                </p>
                <p className="mt-1 text-2xl font-bold">12</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <MessageSquare className="size-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Comments
                </p>
                <p className="mt-1 text-2xl font-bold">08</p>
              </div>
            </CardContent>
          </Card>

          <Card className="rounded-2xl">
            <CardContent className="flex items-center gap-4 p-5">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <Crown className="size-5" />
              </div>

              <div>
                <p className="text-sm text-muted-foreground">
                  Subscription
                </p>
                <p className="mt-1 text-lg font-bold">
                  Premium
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        {/* Main Content */}
        <section className="grid gap-6 lg:grid-cols-3">

          {/* Recent Activity */}
          <Card className="rounded-2xl lg:col-span-2">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Recent Activity</CardTitle>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Your latest activity on Prisma Press.
                  </p>
                </div>

                <Button variant="ghost" size="sm">
                  View all
                </Button>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-5">

                {/* Activity */}
                <div className="flex gap-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <BookOpen className="size-4" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      You read a premium article
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      The Future of AI Development
                    </p>

                    <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock3 className="size-3" />
                      2 hours ago
                    </div>
                  </div>
                </div>

                <div className="border-t" />

                {/* Activity */}
                <div className="flex gap-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <MessageSquare className="size-4" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      You commented on an article
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Building scalable applications with Next.js
                    </p>

                    <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock3 className="size-3" />
                      Yesterday
                    </div>
                  </div>
                </div>

                <div className="border-t" />

                {/* Activity */}
                <div className="flex gap-4">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Bookmark className="size-4" />
                  </div>

                  <div className="flex-1">
                    <p className="text-sm font-medium">
                      You saved an article
                    </p>

                    <p className="mt-1 text-sm text-muted-foreground">
                      Understanding Modern Web Architecture
                    </p>

                    <div className="mt-2 flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock3 className="size-3" />
                      2 days ago
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Subscription Card */}
          <Card className="relative overflow-hidden rounded-2xl">
            <CardHeader>
              <Badge className="w-fit gap-1.5 rounded-full">
                <Crown className="size-3.5" />
                Premium
              </Badge>

              <CardTitle className="mt-3">
                Your Subscription
              </CardTitle>
            </CardHeader>

            <CardContent>
              <div className="rounded-xl border bg-muted/40 p-4">
                <p className="text-sm text-muted-foreground">
                  Current Plan
                </p>

                <p className="mt-1 text-xl font-bold">
                  Premium Monthly
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Enjoy unlimited access to premium articles.
                </p>
              </div>

              <div className="mt-5 space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Status
                  </span>

                  <span className="font-medium text-primary">
                    Active
                  </span>
                </div>

                <div className="flex justify-between">
                  <span className="text-muted-foreground">
                    Next billing
                  </span>

                  <span className="font-medium">
                    Sep 12, 2026
                  </span>
                </div>
              </div>

              <Button
                variant="outline"
                className="mt-6 w-full"
                asChild
              >
                <Link href="/dashboard/subscription">
                  Manage Subscription
                </Link>
              </Button>
            </CardContent>

            <div className="pointer-events-none absolute -bottom-16 -right-16 size-40 rounded-full bg-primary/10 blur-3xl" />
          </Card>
        </section>

        {/* Quick Actions */}
        <section>
          <div className="mb-4">
            <h2 className="text-xl font-semibold">
              Quick Actions
            </h2>

            <p className="mt-1 text-sm text-muted-foreground">
              Quickly access the things you use most.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Button
              variant="outline"
              className="h-auto justify-between rounded-2xl p-5"
              asChild
            >
              <Link href="/news">
                <div className="text-left">
                  <p className="font-semibold">Browse News</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Explore latest articles
                  </p>
                </div>

                <ArrowUpRight className="size-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="h-auto justify-between rounded-2xl p-5"
              asChild
            >
              <Link href="/premium">
                <div className="text-left">
                  <p className="font-semibold">Premium News</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Read exclusive content
                  </p>
                </div>

                <Crown className="size-5" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="h-auto justify-between rounded-2xl p-5"
              asChild
            >
              <Link href="/dashboard/profile">
                <div className="text-left">
                  <p className="font-semibold">Edit Profile</p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    Update your account
                  </p>
                </div>

                <ArrowUpRight className="size-5" />
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default UserDashboardPage;