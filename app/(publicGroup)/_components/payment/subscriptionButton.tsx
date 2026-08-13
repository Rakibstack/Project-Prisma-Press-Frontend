"use client";

import { ArrowRight, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useActionState, useEffect } from "react";
import { subscripePremium } from "../../_action/subscripePremium";
import { toast } from "sonner";

const SubscriptionButton = () => {
  const [state, subscripeAction, pending] = useActionState(
    subscripePremium,
    null,
  );

  useEffect(() => {
    if (!state) return;
    if (!state?.success) {
      toast.error(state?.message || "Failed To Start Chackout");
    }
  }, [state]);

  return (
    <form action={subscripeAction}>
      <Button type="submit" size="lg" className="w-full gap-2">
        <Sparkles className="size-4" />
        {pending ? "Redirecting.." : " Subscribe Now"}
        <ArrowRight className="size-4" />
      </Button>
    </form>
  );
};

export default SubscriptionButton;
