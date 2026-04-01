import { AlertCircle, CheckCircle2, Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Principles from "@/components/Principles";
import Industries from "@/components/Industries";
import About from "@/components/About";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import "@/lib/api";
import { useHealthCheck } from "@workspace/api-client-react";

export default function Home() {
  const healthQuery = useHealthCheck();

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Principles />
        <Industries />
        <About />
        <Solutions />
        <Services />
        <Stats />
        <section className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 lg:px-8">
          <Card className="border-slate-200/80 bg-white/90 shadow-sm backdrop-blur">
            <CardContent className="flex flex-col gap-4 p-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">
                  Backend Health
                </p>
                <h2 className="mt-2 text-2xl font-semibold text-slate-900">
                  Live API connection
                </h2>
                <p className="mt-2 text-sm text-slate-600">
                  The frontend is reading data from the backend health endpoint
                  through the generated API client.
                </p>
              </div>

              <div className="flex items-center gap-3 rounded-full border border-slate-200 bg-slate-50 px-4 py-3">
                {healthQuery.isLoading ? (
                  <Loader2 className="h-5 w-5 animate-spin text-slate-500" />
                ) : healthQuery.isError ? (
                  <AlertCircle className="h-5 w-5 text-red-500" />
                ) : (
                  <CheckCircle2 className="h-5 w-5 text-emerald-600" />
                )}

                <div>
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                    Status
                  </p>
                  <p className="text-sm font-semibold text-slate-900">
                    {healthQuery.isLoading
                      ? "Loading..."
                      : healthQuery.isError
                        ? "Error loading API"
                        : healthQuery.data?.status ?? "Unknown"}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {healthQuery.isError ? (
            <p className="mt-3 text-sm text-red-600">
              {healthQuery.error instanceof Error
                ? healthQuery.error.message
                : "Unable to reach the backend."}
            </p>
          ) : null}
        </section>
      </main>
      <Footer />
    </div>
  );
}
