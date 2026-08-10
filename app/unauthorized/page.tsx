
import Link from "next/link";
import {
  ArrowLeft,
  House,
  ShieldAlert,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";

export default function UnauthorizedPage() {
  return (
    <main className="min-h-[calc(100vh-4rem)] bg-background">
      <div className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-4xl items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
        <div className="w-full text-center">
          {/* Icon */}
          <div className="relative mx-auto mb-8 flex size-28 items-center justify-center">
            <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl" />

            <div className="relative flex size-24 items-center justify-center rounded-3xl border bg-primary/5 shadow-sm">
              <ShieldAlert className="size-12 text-primary" />
            </div>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary">
            <ShieldAlert className="size-4" />
            403 Forbidden
          </div>

          {/* Heading */}
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Access denied
          </h1>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-muted-foreground sm:text-lg">
            You dont have permission to access this page. Your
            account may not have the required role or permissions.
          </p>

          {/* Actions */}
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
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
              <Link href="/dashboard">
                <ArrowLeft className="size-4" />
                Go to Dashboard
              </Link>
            </Button>
          </div>

          {/* Permission Card */}
          <div className="mx-auto mt-12 max-w-2xl rounded-2xl border bg-card p-5 text-left shadow-sm sm:p-6">
            <div className="flex gap-4">
              <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-primary/10">
                <ShieldCheck className="size-5 text-primary" />
              </div>

              <div>
                <h2 className="font-semibold">
                  Need access?
                </h2>

                <p className="mt-1 text-sm leading-6 text-muted-foreground">
                  If you believe you should have access to this
                  page, please contact an administrator and ask
                  them to review your account permissions.
                </p>
              </div>
            </div>
          </div>

          {/* Small footer message */}
          <p className="mt-8 text-sm text-muted-foreground">
            If you think this is a mistake, please contact support.
          </p>
        </div>
      </div>
    </main>
  );
}