
import { Skeleton } from "@/components/ui/skeleton";

const PricingSectionLoader = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <Skeleton className="mx-auto h-7 w-48 rounded-full" />

        <Skeleton className="mx-auto mt-5 h-10 w-80 max-w-full" />

        <Skeleton className="mx-auto mt-4 h-5 w-full max-w-xl" />
      </div>

      {/* Trust */}
      <div className="mt-8 flex justify-center gap-5">
        <Skeleton className="h-5 w-28" />
        <Skeleton className="h-5 w-28" />
        <Skeleton className="h-5 w-28" />
      </div>

      {/* Cards */}
      <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
        {Array.from({ length: 2 }).map((_, index) => (
          <div
            key={index}
            className="rounded-xl border p-7 sm:p-8"
          >
            <Skeleton className="size-12 rounded-2xl" />

            <Skeleton className="mt-6 h-6 w-28" />

            <Skeleton className="mt-3 h-4 w-full" />
            <Skeleton className="mt-2 h-4 w-3/4" />

            <Skeleton className="mt-7 h-12 w-32" />

            <div className="my-7 border-t" />

            <div className="space-y-4">
              {Array.from({ length: 5 }).map((_, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center gap-3"
                >
                  <Skeleton className="size-5 rounded-full" />
                  <Skeleton className="h-4 w-44" />
                </div>
              ))}
            </div>

            <Skeleton className="mt-8 h-11 w-full" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSectionLoader;