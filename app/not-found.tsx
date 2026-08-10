
import Link from "next/link";
import {
  ArrowLeft,
  Building2,
  House,
  Search,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-6xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid w-full items-center gap-12 lg:grid-cols-2">
          {/* Left - Illustration */}
          <div className="relative flex items-center justify-center">
            <div className="absolute h-72 w-72 rounded-full bg-primary/5 blur-3xl" />

            <div className="relative flex h-80 w-full max-w-md items-center justify-center overflow-hidden rounded-3xl border bg-muted/30">
              {/* Decorative elements */}
              <div className="absolute left-8 top-10 h-3 w-3 rounded-full bg-primary/20" />
              <div className="absolute right-12 top-20 h-2 w-2 rounded-full bg-primary/30" />
              <div className="absolute bottom-16 left-16 h-2 w-2 rounded-full bg-primary/20" />

              <div className="text-center">
                <div className="mb-2 text-[100px] font-black leading-none tracking-tighter text-primary/15 sm:text-[120px]">
                  404
                </div>

                <div className="mx-auto -mt-8 flex w-fit items-center gap-2 rounded-full border bg-background px-4 py-2 text-sm font-semibold shadow-sm">
                  <Building2 className="size-4 text-primary" />
                  <span>Page Not Found</span>
                </div>
              </div>

              {/* Small house decoration */}
              <div className="absolute bottom-8 right-10 rounded-2xl border bg-background p-3 shadow-sm">
                <House className="size-6 text-primary" />
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="max-w-xl">
            <span className="mb-4 inline-flex rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
              Oops! 404
            </span>

            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Page not found
            </h1>

            <p className="mt-5 max-w-lg text-base leading-7 text-muted-foreground sm:text-lg">
              The page you are looking for doesnt exist, has been
              moved, or may have been removed. Lets get you back to
              somewhere useful.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="gap-2">
                <Link href="/">
                  <House className="size-4" />
                  Go Home
                </Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="gap-2"
              >
                <Link href="/properties">
                  <Search className="size-4" />
                  Browse Properties
                </Link>
              </Button>
            </div>

            {/* Helpful Links */}
            <div className="mt-10 rounded-2xl border bg-card p-5 shadow-sm">
              <h2 className="font-semibold">Helpful Links</h2>

              <div className="mt-4 divide-y">
                <Link
                  href="/"
                  className="flex items-center justify-between py-3 text-sm transition-colors hover:text-primary"
                >
                  <span className="flex items-center gap-3">
                    <House className="size-4 text-muted-foreground" />
                    Back to homepage
                  </span>

                  <ArrowLeft className="size-4 rotate-180 text-muted-foreground" />
                </Link>

                <Link
                  href="/properties"
                  className="flex items-center justify-between py-3 text-sm transition-colors hover:text-primary"
                >
                  <span className="flex items-center gap-3">
                    <Building2 className="size-4 text-muted-foreground" />
                    Browse all properties
                  </span>

                  <ArrowLeft className="size-4 rotate-180 text-muted-foreground" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}