
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Feather,
  Sparkles,
  Users,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default async function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden border-b">
        {/* Background decoration */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -left-32 top-40 size-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-32 top-20 size-72 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
          <div className="mx-auto max-w-3xl text-center">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border bg-muted/50 px-3 py-1.5 text-sm font-medium">
              <Sparkles className="size-4 text-primary" />
              <span>Share ideas. Inspire people.</span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
              Your ideas deserve to be{" "}
              <span className="text-primary">heard.</span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Prisma Press is a modern publishing platform where
              writers can share meaningful stories, ideas, and
              knowledge with a growing community of readers.
            </p>

            {/* CTA */}
            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/news">
                  Explore News
                  <ArrowRight className="size-4" />
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
              >
                <Link href="/register">
                  Start Writing
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {/* Feature 1 */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/10">
                <Feather className="size-5 text-primary" />
              </div>

              <h2 className="text-lg font-semibold">
                Write freely
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Turn your thoughts and experiences into meaningful
                stories and publish them with ease.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/10">
                <BookOpen className="size-5 text-primary" />
              </div>

              <h2 className="text-lg font-semibold">
                Discover ideas
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Explore thoughtful articles and discover fresh
                perspectives from different writers.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="mb-5 flex size-11 items-center justify-center rounded-xl bg-primary/10">
                <Users className="size-5 text-primary" />
              </div>

              <h2 className="text-lg font-semibold">
                Build a community
              </h2>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Connect with readers and writers through meaningful
                conversations and shared knowledge.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section>
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <div className="rounded-3xl border bg-muted/30 px-6 py-12 sm:px-12">
            <div className="mx-auto flex size-12 items-center justify-center rounded-xl bg-primary/10">
              <BookOpen className="size-6 text-primary" />
            </div>

            <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
              Have something worth sharing?
            </h2>

            <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
              Join Prisma Press and start publishing your ideas,
              stories, and knowledge with the world.
            </p>

            <div className="mt-6">
              <Button asChild size="lg" className="gap-2">
                <Link href="/register">
                  Get Started
                  <ArrowRight className="size-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}