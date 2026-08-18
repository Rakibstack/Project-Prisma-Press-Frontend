import Link from "next/link";
import { ArrowUpRight, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="inline-flex items-center gap-2"
            >
              <div className="flex size-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                <span className="text-lg font-bold">P</span>
              </div>

              <span className="text-lg font-bold tracking-tight">
                Prisma Press
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-muted-foreground">
              Discover the latest stories, insights, and premium
              content from writers around the world.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-2">
              <Link
                href="#"
                aria-label="GitHub"
                className="flex size-9 items-center justify-center rounded-lg border text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                GH
              </Link>

              <Link
                href="#"
                aria-label="LinkedIn"
                className="flex size-9 items-center justify-center rounded-lg border text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                in
              </Link>

              <Link
                href="#"
                aria-label="Facebook"
                className="flex size-9 items-center justify-center rounded-lg border text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                f
              </Link>

              <Link
                href="#"
                aria-label="Instagram"
                className="flex size-9 items-center justify-center rounded-lg border text-xs font-semibold text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
              >
                IG
              </Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h3 className="text-sm font-semibold">
              Explore
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/news"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Latest News
                </Link>
              </li>

              <li>
                <Link
                  href="/premium"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Premium News
                </Link>
              </li>

              <li>
                <Link
                  href="/authors"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Authors
                </Link>
              </li>

              <li>
                <Link
                  href="/categories"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Categories
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold">
              Company
            </h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About Us
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link
                  href="/terms"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold">
              Stay Updated
            </h3>

            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Get the latest news and premium stories delivered
              to your inbox.
            </p>

            <Link
              href="/register"
              className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              Join Prisma Press
              <ArrowUpRight className="size-4" />
            </Link>

            <div className="mt-5 flex items-center gap-2 text-xs text-muted-foreground">
              <Mail className="size-3.5" />
              No spam. Unsubscribe anytime.
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col gap-4 border-t pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Prisma Press. All rights
            reserved.
          </p>

          <p className="text-sm text-muted-foreground">
            Built with{" "}
            <span className="font-medium text-foreground">
              Next.js
            </span>{" "}
            &{" "}
            <span className="font-medium text-foreground">
              Prisma
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;