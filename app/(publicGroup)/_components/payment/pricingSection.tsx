
import {
  Check,
  Crown,
  Gem,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import SubscriptionButton from "./subscriptionButton";
import { getSubscriptionStatus } from "../../_action/getSubscriptionStatus";

const plans = [
  {
    name: "Monthly",
    description: "Perfect for trying out premium content.",
    price: "$5",
    period: "/month",
    priceId: "price_monthly",
    icon: Zap,
    popular: false,
    features: [
      "Unlimited premium articles",
      "Ad-free reading experience",
      "Access to exclusive stories",
      "Save articles for later",
      "Cancel anytime",
    ],
  },
  {
    name: "Yearly",
    description: "Best value for dedicated readers.",
    price: "$49",
    period: "/year",
    priceId: "price_yearly",
    icon: Crown,
    popular: true,
    features: [
      "Everything in Monthly",
      "2 months completely free",
      "Early access to new stories",
      "Premium author content",
      "Priority support",
    ],
  },
];

const PricingSection =async () => {

   const statusResult = await getSubscriptionStatus();
   const isActive = Boolean(statusResult.success && statusResult.data?.isSubscribed);
   
  return (
    <section className="relative overflow-hidden">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-20 size-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -left-40 top-1/2 size-80 rounded-full bg-primary/5 blur-3xl" />

        <div className="absolute -right-40 top-1/3 size-80 rounded-full bg-primary/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <Badge
            variant="outline"
            className="gap-2 rounded-full px-3 py-1"
          >
            <Sparkles className="size-3.5 text-primary" />
            Simple & transparent pricing
          </Badge>

          <h2 className="mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            Choose your{" "}
            <span className="text-primary">
              premium experience
            </span>
          </h2>

          <p className="mt-4 text-sm leading-6 text-muted-foreground sm:text-base">
            Unlock exclusive stories, deeper insights, and a
            distraction-free reading experience.
          </p>
        </div>

        {/* Trust */}
        <div className="mt-8 flex flex-wrap justify-center gap-5 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <ShieldCheck className="size-4 text-primary" />
            Secure payment
          </div>

          <div className="flex items-center gap-2">
            <Gem className="size-4 text-primary" />
            Premium content
          </div>

          <div className="flex items-center gap-2">
            <Check className="size-4 text-primary" />
            Cancel anytime
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
          {plans.map((plan) => {
            const Icon = plan.icon;

            return (
              <Card
                key={plan.name}
                className={`relative overflow-hidden ${
                  plan.popular
                    ? "border-primary shadow-xl shadow-primary/10"
                    : "border-border/60 shadow-sm"
                }`}
              >
                {/* Popular label */}
                {plan.popular && (
                  <div className="absolute right-0 top-0 rounded-bl-xl bg-primary px-4 py-1.5 text-xs font-semibold text-primary-foreground">
                    Most Popular
                    {
                      isActive && <Badge>ACTIVE</Badge>
                    }
                  </div>
                )}

                <CardContent className="p-7 sm:p-8">
                  {/* Icon */}
                  <div
                    className={`flex size-12 items-center justify-center rounded-2xl ${
                      plan.popular
                        ? "bg-primary text-primary-foreground"
                        : "bg-primary/10 text-primary"
                    }`}
                  >
                    <Icon className="size-6" />
                  </div>

                  {/* Plan */}
                  <div className="mt-6">
                    <h3 className="text-xl font-bold">
                      {plan.name}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {plan.description}
                    </p>
                  </div>

                  {/* Price */}
                  <div className="mt-7 flex items-end gap-1">
                    <span className="text-5xl font-bold tracking-tight">
                      {plan.price}
                    </span>

                    <span className="mb-2 text-sm text-muted-foreground">
                      {plan.period}
                    </span>
                  </div>

                  {/* Divider */}
                  <div className="my-7 border-t" />

                  {/* Features */}
                  <ul className="space-y-4">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-3 text-sm"
                      >
                        <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <Check className="size-3.5 text-primary" />
                        </span>

                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  {
                    !isActive && <div className="mt-8">
                    <SubscriptionButton
                    />
                  </div>
                  }
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom reassurance */}
        <div className="mx-auto mt-10 flex max-w-2xl items-center justify-center gap-2 text-center text-xs text-muted-foreground">
          <ShieldCheck className="size-4 shrink-0" />
          Your payment information is securely processed. You can
          cancel your subscription anytime.
        </div>
      </div>
    </section>
  );
};

export default PricingSection;