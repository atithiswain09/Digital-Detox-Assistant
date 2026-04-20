import { useNavigate, useRouter } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { SEO } from "@/components/shared/SEO";
import { AlertCircle } from "lucide-react";
import { useEffect } from "react";

export function ErrorBoundary({ error, reset }) {
  const navigate = useNavigate();
  const { history } = useRouter();

  useEffect(() => {
    if (error) {
      console.error("Caught by ErrorBoundary:", error);
    }
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8">
      <SEO
        title="Error - Something went wrong"
        description="An unexpected error occurred."
        keywords="error, boundary, crash"
      />
      <div className="w-full max-w-lg text-center">
        <AlertCircle className="h-16 w-16 text-destructive mx-auto mb-4" />
        <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-2">
          Something went wrong!
        </h1>
        <p className="text-muted-foreground mb-4 max-w-md mx-auto">
          {error?.message ||
            "An unexpected error occurred. Please try again or return to the home page."}
        </p>
        <div className="flex justify-center gap-4">
          <Button variant="outline" onClick={() => reset?.() || history.go(-1)}>
            {reset ? "Try Again" : "Go Back"}
          </Button>
          <Button onClick={() => navigate({ to: "/" })}>Back to Home</Button>
        </div>
      </div>
    </div>
  );
}
