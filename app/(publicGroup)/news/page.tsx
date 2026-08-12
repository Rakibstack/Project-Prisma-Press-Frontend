import {
  ArrowRight,
  BookOpen,
  Newspaper,
  Sparkles,
} from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import PremiumSkeleton from "../_components/premiumNews/premiumSkeleton";
import PublicNewsList from "../_components/publicNews/PublicNewsList";

const PublicNews = async () => {
  // Later:
  // const publicNews = await getPublicNews();

  const publicNews = [
    {
      id: "1",
      title: "The Latest Trends Shaping the Digital World",
      description:
        "Discover the latest technology trends and how they are changing the way we live, work, and communicate.",
      image:
        "https://images.unsplash.com/photo-1518770660439-4636190af475",
      category: "Technology",
      publishedAt: "Aug 12, 2026",
      readTime: 5,
    },
    {
      id: "2",
      title: "Simple Ways to Improve Your Daily Productivity",
      description:
        "Small improvements in your daily routine can make a meaningful difference. Here are some practical ideas to try.",
      image:
        "https://images.unsplash.com/photo-1499750310107-5fef28a66643",
      category: "Lifestyle",
      publishedAt: "Aug 11, 2026",
      readTime: 4,
    },
    {
      id: "3",
      title: "Understanding the Changing World of AI",
      description:
        "Artificial intelligence is moving quickly. Learn about the technologies and ideas shaping this rapidly changing field.",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      category: "AI",
      publishedAt: "Aug 10, 2026",
      readTime: 7,
    },
    {
      id: "4",
      title: "Why Good Communication Still Matters",
      description:
        "Technology changes constantly, but effective communication remains one of the most valuable skills.",
      image:
        "https://images.unsplash.com/photo-1552664730-d307ca884978",
      category: "Business",
      publishedAt: "Aug 9, 2026",
      readTime: 6,
    },
    {
      id: "5",
      title: "The Future of Modern Web Development",
      description:
        "From server components to edge computing, modern web development continues to evolve.",
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
      category: "Development",
      publishedAt: "Aug 8, 2026",
      readTime: 8,
    },
    {
      id: "6",
      title: "Building Better Habits for Long-Term Growth",
      description:
        "Sustainable growth comes from consistent actions. Explore practical ways to build habits that actually last.",
      image:
        "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",
      category: "Personal Growth",
      publishedAt: "Aug 7, 2026",
      readTime: 5,
    },
  ];

  return <PublicNewsList news={publicNews} />;
};

const PublicNewsPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        {/* Background */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 size-[450px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

          <div className="absolute -left-40 top-32 size-72 rounded-full bg-primary/5 blur-3xl" />

          <div className="absolute -right-40 top-20 size-72 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            {/* Heading */}
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1.5 text-sm font-medium">
                <Newspaper className="size-4 text-primary" />
                Latest Stories
              </div>

              <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
                Stay informed.
                <br />
                <span className="text-primary">
                  Stay curious.
                </span>
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
                Explore the latest stories, ideas, and insights
                from our community. Discover something new every
                day.
              </p>
            </div>

            {/* Premium CTA */}
            <div className="shrink-0">
              <Button
                asChild
                variant="outline"
                className="gap-2"
              >
                <Link href="/premium">
                  <Sparkles className="size-4 text-primary" />
                  Explore Premium
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick info */}
          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <BookOpen className="size-5 text-primary" />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Fresh content
                </p>

                <p className="text-xs text-muted-foreground">
                  Updated regularly
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <Newspaper className="size-5 text-primary" />
              </div>

              <div>
                <p className="text-sm font-semibold">
                  Free to read
                </p>

                <p className="text-xs text-muted-foreground">
                  Open to everyone
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News List */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Latest News
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Read the latest stories and discover new perspectives.
          </p>
        </div>
          <Suspense fallback={<PremiumSkeleton />}>
          <PublicNewsList news={PublicNews} />
        </Suspense>

      </section>
    </main>
  );
};

export default PublicNewsPage;