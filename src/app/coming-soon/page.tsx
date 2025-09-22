"use client";

import AnimatedSection from "@/components/AnimatedSection";
import AnimatedButton from "@/components/AnimatedButton";
import AnimatedCard from "@/components/AnimatedCard";
import AnimatedCounter from "@/components/AnimatedCounter";

export default function ComingSoonPage() {
  return (
    <div className="relative min-h-[100dvh] overflow-hidden">
      {/* Background decorative gradients */}
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full fintech-gradient animate-gradient blur-3xl opacity-30" />
        <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full fintech-gradient animate-gradient blur-3xl opacity-20" />
      </div>

      {/* Hero */}
      <AnimatedSection className="px-6 md:px-8 lg:px-12 pt-24 md:pt-32">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100/60 bg-blue-50/50 px-3 py-1 text-xs font-medium text-blue-700 animate-fade-in">
            Instafin
            <span className="h-1 w-1 rounded-full bg-blue-600 animate-pulse-slow" />
            Coming Soon
          </span>

          <h1 className="mt-6 bg-gradient-to-r from-blue-700 via-sky-500 to-cyan-400 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent md:text-5xl lg:text-6xl animate-slide-up">
            The future of intelligent finance
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg animate-fade-in delay-200">
            We are crafting an AI-powered platform to simplify treasury,
            automate insights, and help teams move faster with confidence.
          </p>

          <div className="mt-8 flex items-center justify-center gap-4 animate-fade-in delay-300">
            <AnimatedButton
              size="lg"
              variant="primary"
              onClick={() => {
                window.location.href =
                  "mailto:info@instafin.ai?subject=Instafin%20-%20Early%20Access";
              }}
              className="shadow-md hover:shadow-lg"
            >
              Contact the team
            </AnimatedButton>
            <a
              href="mailto:info@instafin.ai?subject=Instafin%20-%20Keep%20Me%20Posted"
              className="text-sm font-semibold text-blue-700 hover:underline"
            >
              info@instafin.ai
            </a>
          </div>
        </div>
      </AnimatedSection>

      {/* Highlights */}
      <AnimatedSection className="px-6 md:px-8 lg:px-12 mt-16" stagger>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatedCard className="glass-effect p-6 hover-lift">
            <div className="text-sm uppercase tracking-wide text-slate-500">
              Built for Teams
            </div>
            <div className="mt-2 text-xl font-bold text-slate-900">
              Collaborative by default
            </div>
            <p className="mt-2 text-slate-600">
              Role-based access, shared workspaces, and export-ready reports.
            </p>
          </AnimatedCard>

          <AnimatedCard className="glass-effect p-6 hover-lift" delay={0.1}>
            <div className="text-sm uppercase tracking-wide text-slate-500">
              AI Insights
            </div>
            <div className="mt-2 text-xl font-bold text-slate-900">
              Answers, not dashboards
            </div>
            <p className="mt-2 text-slate-600">
              Natural-language queries with explainable results you can trust.
            </p>
          </AnimatedCard>

          <AnimatedCard className="glass-effect p-6 hover-lift" delay={0.2}>
            <div className="text-sm uppercase tracking-wide text-slate-500">
              Secure
            </div>
            <div className="mt-2 text-xl font-bold text-slate-900">
              Enterprise-grade
            </div>
            <p className="mt-2 text-slate-600">
              SSO, audit logs, and data residency. Security is non‑negotiable.
            </p>
          </AnimatedCard>
        </div>
      </AnimatedSection>

      {/* Simple Stats */}
      <AnimatedSection className="px-6 md:px-8 lg:px-12 mt-14">
        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 rounded-2xl border border-slate-200/70 bg-white/80 p-6 backdrop-blur sm:grid-cols-3">
          <div className="text-center">
            <AnimatedCounter
              value={2025}
              className="text-3xl font-extrabold text-slate-900"
            />
            <div className="mt-1 text-sm text-slate-500">Launch window</div>
          </div>
          <div className="text-center">
            <AnimatedCounter
              value={24}
              suffix="/7"
              className="text-3xl font-extrabold text-slate-900"
            />
            <div className="mt-1 text-sm text-slate-500">
              Support availability
            </div>
          </div>
          <div className="text-center">
            <AnimatedCounter
              value={100}
              suffix="%"
              className="text-3xl font-extrabold text-slate-900"
            />
            <div className="mt-1 text-sm text-slate-500">
              Focus on your success
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* Footer note */}
      <AnimatedSection className="px-6 md:px-8 lg:px-12 mt-10 pb-20">
        <p className="mx-auto max-w-2xl text-center text-xs text-slate-500">
          Are you an early design partner? Email us at{" "}
          <a
            href="mailto:info@instafin.ai"
            className="font-semibold text-blue-700 hover:underline"
          >
            info@instafin.ai
          </a>{" "}
          to get in touch.
        </p>
      </AnimatedSection>
    </div>
  );
}
