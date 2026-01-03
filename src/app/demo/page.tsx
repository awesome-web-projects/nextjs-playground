import Link from 'next/link'
import { Button } from '@/components/ui/button'

const steps = [
    {
        title: 'Ingest',
        text: 'Drop notes, drafts, or logs and let reasonlearn parse the intent.',
    },
    {
        title: 'Reason',
        text: 'Generate a traceable chain of claims, evidence, and risks.',
    },
    {
        title: 'Publish',
        text: 'Export a clean narrative for blogs, docs, or demos.',
    },
]

export default function DemoPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
                    <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
                </div>
                <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-14">
                    <header className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                Live demo
                            </p>
                            <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
                                Reasoning in motion
                            </h1>
                            <p className="mt-3 max-w-2xl text-base text-slate-300">
                                A lightweight, animated walkthrough of how
                                reasonlearn turns raw notes into publishable
                                technical narratives.
                            </p>
                        </div>
                        <Link
                            href="/"
                            className="rounded-full border border-slate-700 bg-slate-950/40 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-900/60 hover:text-white"
                        >
                            Back to home
                        </Link>
                    </header>

                    <div className="mt-12 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
                        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold text-white">
                                    Live reasoning trace
                                </p>
                                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300">
                                    Active
                                </span>
                            </div>
                            <div className="mt-6 space-y-4">
                                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                        Input
                                    </p>
                                    <p className="mt-2 text-sm text-slate-200">
                                        Notes on a distributed cache design +
                                        latency metrics.
                                    </p>
                                    <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-slate-800">
                                        <div className="h-full w-2/3 animate-pulse rounded-full bg-cyan-400" />
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                        Reasoning
                                    </p>
                                    <p className="mt-2 text-sm text-slate-200">
                                        Claims mapped to evidence, risks flagged
                                        for review.
                                    </p>
                                    <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
                                        <span className="h-2 w-2 animate-ping rounded-full bg-emerald-400" />
                                        Verifying assumptions
                                    </div>
                                </div>
                                <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                        Output
                                    </p>
                                    <p className="mt-2 text-sm text-slate-200">
                                        Drafted a blog narrative with citations
                                        and next steps.
                                    </p>
                                    <div className="mt-3 flex items-center gap-2">
                                        <div className="h-2 w-2 animate-bounce rounded-full bg-cyan-300" />
                                        <span className="text-xs text-slate-400">
                                            Exporting story
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                                <h2 className="text-xl font-semibold text-white">
                                    Demo timeline
                                </h2>
                                <div className="mt-6 space-y-4">
                                    {steps.map((step, index) => (
                                        <div
                                            key={step.title}
                                            className="flex gap-4"
                                        >
                                            <div className="flex flex-col items-center">
                                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20 text-sm text-cyan-200">
                                                    {index + 1}
                                                </span>
                                                {index < steps.length - 1 && (
                                                    <span className="mt-2 h-10 w-px bg-slate-800" />
                                                )}
                                            </div>
                                            <div>
                                                <p className="text-sm font-semibold text-white">
                                                    {step.title}
                                                </p>
                                                <p className="mt-1 text-sm text-slate-300">
                                                    {step.text}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-emerald-500/10 p-6">
                                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                    Try it
                                </p>
                                <h3 className="mt-3 text-xl font-semibold text-white">
                                    Run your own reasoning demo
                                </h3>
                                <p className="mt-2 text-sm text-slate-300">
                                    Upload a draft or log file and see a
                                    structured reasoning flow in minutes.
                                </p>
                                <Button className="mt-6 bg-cyan-400 text-slate-900 hover:bg-cyan-300">
                                    Start a demo run
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
