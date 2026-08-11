import { Loader2 } from "lucide-react";

const GlobalLoading = () => {
  return (
    <div className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="flex flex-col items-center justify-center text-center">
        {/* Spinner */}
        <div className="mb-5 flex size-14 items-center justify-center rounded-2xl border bg-primary/5">
          <Loader2 className="size-7 animate-spin text-primary" />
        </div>

        {/* Text */}
        <h2 className="text-lg font-semibold tracking-tight">
          Loading...
        </h2>

        <p className="mt-1 text-sm text-muted-foreground">
          Please wait while we get things ready.
        </p>
      </div>
    </div>
  );
};

export default GlobalLoading;