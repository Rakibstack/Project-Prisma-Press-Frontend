import { Crown, Sparkles } from "lucide-react";
import { Suspense } from "react";
import PremiumNewsList from "../_components/premiumNews/premiumNewsList";
import PremiumSkeleton from "../_components/premiumNews/premiumSkeleton";
import PremiumNewsSearch from "../_components/premiumNews/premiumNewsSearch";

const PremiumPage =  async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) => {
  
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-0 size-[450px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -left-40 top-20 size-72 rounded-full bg-primary/5 blur-3xl" />
          <div className="absolute -right-40 top-40 size-72 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full border bg-primary/5 px-3 py-1.5 text-sm font-medium text-primary">
              <Crown className="size-4" />
              Premium Collection
            </div>

            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Stories worth <span className="text-primary">your time.</span>
            </h1>

            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
              Get access to carefully selected stories, expert insights, and
              in-depth articles created for readers who want to go beyond the
              headlines.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-10 flex flex-wrap gap-6">
            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <Sparkles className="size-5 text-primary" />
              </div>

              <div>
                <p className="text-sm font-semibold">Curated content</p>
                <p className="text-xs text-muted-foreground">
                  Hand-picked stories
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex size-10 items-center justify-center rounded-xl bg-primary/10">
                <Crown className="size-5 text-primary" />
              </div>

              <div>
                <p className="text-sm font-semibold">Premium access</p>
                <p className="text-xs text-muted-foreground">
                  Exclusive articles
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News */}
      <section className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
       <div className="mb-8 flex flex-col items-center justify-between gap-126 sm:flex-row">
         <div className="mb-8">
          <h2 className="text-2xl font-bold tracking-tight">
            Latest Premium News
          </h2>

          <p className="mt-1 text-sm text-muted-foreground">
            Discover our latest premium stories and insights.
          </p>
        </div>
        <PremiumNewsSearch></PremiumNewsSearch>

       </div>
        <Suspense fallback={<PremiumSkeleton />}>
          <PremiumNewsList searchParams={searchParams} />
        </Suspense>
      </section>
    </main>
  );
};

export default PremiumPage;
