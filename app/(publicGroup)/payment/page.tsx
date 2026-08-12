
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle2,
  Crown,
  HelpCircle,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";
import { Suspense } from "react";

import { Button } from "@/components/ui/button";
import PricingSection from "../_components/payment/pricingSection";
import PricingSectionLoader from "../_components/payment/pricingSectionLoader";



const PaymentPage = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Hero */}
      <section className="relative overflow-hidden border-b">
        {/* Background glow */}
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-1/2 top-[-180px] size-[650px] -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

          <div className="absolute -left-40 top-40 size-80 rounded-full bg-primary/5 blur-3xl" />

          <div className="absolute -right-40 top-20 size-80 rounded-full bg-primary/5 blur-3xl" />
        </div>

        <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:px-8">
          {/* Badge */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border bg-background/80 px-4 py-2 text-sm font-medium shadow-sm backdrop-blur">
            <Crown className="size-4 text-primary" />
            <span>Prisma Press Premium</span>
            <Sparkles className="size-3.5 text-primary" />
          </div>

          {/* Heading */}
          <h1 className="mx-auto mt-7 max-w-4xl text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Read more.
            <br />
            <span className="bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
              Discover more.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg">
            Unlock premium stories, expert insights, and exclusive
            content designed for curious minds who want more than
            the ordinary.
          </p>

          {/* Benefits */}
          <div className="mt-8 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {[
              "Unlimited premium articles",
              "Ad-free experience",
              "Cancel anytime",
            ].map((benefit) => (
              <div
                key={benefit}
                className="flex items-center gap-2 text-sm font-medium"
              >
                <CheckCircle2 className="size-4 text-primary" />
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <Suspense fallback={<PricingSectionLoader />}>
        <PricingSection />
      </Suspense>

      {/* Why Premium */}
      <section className="border-y bg-muted/20">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold text-primary">
              WHY PREMIUM?
            </span>

            <h2 className="mt-2 text-3xl font-bold tracking-tight">
              More than just another subscription
            </h2>

            <p className="mt-3 text-muted-foreground">
              Premium is built for readers who value quality,
              depth, and uninterrupted reading.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                <Crown className="size-5 text-primary" />
              </div>

              <h3 className="mt-5 font-semibold">
                Exclusive content
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Get access to carefully curated articles and
                stories that arent available to everyone.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                <Zap className="size-5 text-primary" />
              </div>

              <h3 className="mt-5 font-semibold">
                Read without limits
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Explore premium content without worrying about
                article limits or interruptions.
              </p>
            </div>

            <div className="rounded-2xl border bg-card p-6 shadow-sm">
              <div className="flex size-11 items-center justify-center rounded-xl bg-primary/10">
                <ShieldCheck className="size-5 text-primary" />
              </div>

              <h3 className="mt-5 font-semibold">
                Secure & flexible
              </h3>

              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                Secure payments and flexible subscriptions. Cancel
                whenever you want.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ / CTA */}
      <section className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
        <div className="mx-auto flex size-12 items-center justify-center rounded-2xl bg-primary/10">
          <HelpCircle className="size-6 text-primary" />
        </div>

        <h2 className="mt-5 text-2xl font-bold tracking-tight sm:text-3xl">
          Still have questions?
        </h2>

        <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
          Were here to help. Check out our frequently asked
          questions or get in touch with our support team.
        </p>

        <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
          <Button asChild variant="outline" size="lg">
            <Link href="/news">
              Continue Reading
            </Link>
          </Button>

          <Button asChild size="lg" className="gap-2">
            <Link href="/register">
              Get Started
              <ArrowRight className="size-4" />
            </Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default PaymentPage;