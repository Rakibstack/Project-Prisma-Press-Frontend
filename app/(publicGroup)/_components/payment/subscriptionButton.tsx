
"use client";

import { useState } from "react";
import { ArrowRight, Loader2, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

interface SubscriptionButtonProps {
  priceId: string;
  isPopular?: boolean;
}

const SubscriptionButton = ({
  priceId,
  isPopular = false,
}: SubscriptionButtonProps) => {
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async () => {
    try {
      setLoading(true);

      // Later:
      // const result = await createCheckoutSession(priceId);

      console.log("Subscribe:", priceId);

      // Example:
      // if (result.success) {
      //   window.location.href = result.data.url;
      // }
    } catch (error) {
      console.error("Subscription error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      onClick={handleSubscribe}
      disabled={loading}
      size="lg"
      className="w-full gap-2"
    >
      {loading ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          Processing...
        </>
      ) : (
        <>
          {isPopular ? (
            <Sparkles className="size-4" />
          ) : null}

          Subscribe Now
          <ArrowRight className="size-4" />
        </>
      )}
    </Button>
  );
};

export default SubscriptionButton;