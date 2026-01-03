'use client'

import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'

export default function Home() {
    const router = useRouter()

    const onStart = () => {
        router.push('/login')
    }

    const onViewDemo = () => {
        router.push('/demo')
    }

    const onReadBlog = () => {
        router.push('/blogs/reasonlearn-projects')
    }

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-48 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
                    <div className="absolute left-0 top-24 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
                </div>
                <header className="relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/20 text-lg font-semibold text-cyan-200">
                            rl
                        </div>
                        <div>
                            <p className="text-lg font-semibold">reasonlearn</p>
                            <p className="text-xs text-slate-400">
                                reasoning agent for research-grade writing
                            </p>
                        </div>
                    </div>
                    <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
                        <span className="cursor-pointer hover:text-white">
                            Product
                        </span>
                        <span className="cursor-pointer hover:text-white">
                            Workflows
                        </span>
                        <span className="cursor-pointer hover:text-white">
                            Researchers
                        </span>
                        <span className="cursor-pointer hover:text-white">
                            Pricing
                        </span>
                    </nav>
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            className="hidden md:inline-flex"
                        >
                            Talk to sales
                        </Button>
                        <Button
                            onClick={onStart}
                            className="bg-cyan-400 text-slate-900 hover:bg-cyan-300"
                        >
                            Start free
                        </Button>
                    </div>
                </header>

                <section className="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-6 pb-16 pt-10 md:grid-cols-[1.1fr_0.9fr]">
                    <div className="space-y-6">
                        <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200">
                            Research clarity, accelerated
                        </div>
                        <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                            reasonlearn helps you understand, validate, and
                            explain math + science ideas with confidence.
                        </h1>
                        <p className="text-base text-slate-300">
                            Drop in drafts, formulas, or datasets and get
                            structured reasoning, citations, and clear narrative
                            framing for dissertations, papers, and high-impact
                            blogs.
                        </p>
                        <div className="flex flex-wrap items-center gap-3">
                            <Button
                                onClick={onStart}
                                size="lg"
                                className="bg-cyan-400 text-slate-900 hover:bg-cyan-300"
                            >
                                Start building reasoning packs
                            </Button>
                            <Button
                                onClick={onViewDemo}
                                size="lg"
                                variant="outline"
                                className="border-slate-700"
                            >
                                View live demo
                            </Button>
                        </div>
                        <div className="grid gap-4 pt-4 text-sm text-slate-300 md:grid-cols-3">
                            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                                <p className="text-lg font-semibold text-white">
                                    92%
                                </p>
                                <p>fewer revision loops for advisors</p>
                            </div>
                            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                                <p className="text-lg font-semibold text-white">
                                    2.4x
                                </p>
                                <p>faster synthesis of references</p>
                            </div>
                            <div className="rounded-xl border border-slate-800 bg-slate-900/40 p-4">
                                <p className="text-lg font-semibold text-white">
                                    17k
                                </p>
                                <p>active academic creators</p>
                            </div>
                        </div>
                    </div>
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl">
                        <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-white">
                                Reasoning Summary
                            </p>
                            <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-xs text-emerald-300">
                                Live
                            </span>
                        </div>
                        <div className="mt-6 space-y-4">
                            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                    Thesis Check
                                </p>
                                <p className="mt-2 text-sm text-slate-200">
                                    Convergence rate aligns with spectral gap
                                    assumptions for the graph Laplacian, with a
                                    0.05 tolerance across datasets.
                                </p>
                            </div>
                            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                    Citation Map
                                </p>
                                <div className="mt-3 grid gap-2 text-xs text-slate-300">
                                    <div className="flex items-center justify-between">
                                        <span>
                                            Journal of Applied Physics, 2022
                                        </span>
                                        <span className="text-emerald-300">
                                            Matched
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>Nature Methods, 2021</span>
                                        <span className="text-emerald-300">
                                            Matched
                                        </span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span>ArXiv 2104.11872</span>
                                        <span className="text-amber-300">
                                            Needs review
                                        </span>
                                    </div>
                                </div>
                            </div>
                            <div className="rounded-2xl border border-slate-800 bg-gradient-to-r from-cyan-500/10 via-slate-900 to-emerald-500/10 p-4">
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                                    Confidence Score
                                </p>
                                <div className="mt-3 flex items-center justify-between">
                                    <p className="text-3xl font-semibold text-white">
                                        0.91
                                    </p>
                                    <div className="h-2 w-32 overflow-hidden rounded-full bg-slate-800">
                                        <div className="h-full w-4/5 bg-emerald-400" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <section className="mx-auto w-full max-w-6xl px-6 pb-20">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8 md:p-12">
                    <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                From the reasonlearn desk
                            </p>
                            <h2 className="mt-3 text-3xl font-semibold text-white md:text-4xl">
                                A sample blog you can edit and publish
                            </h2>
                        </div>
                        <Button
                            onClick={onReadBlog}
                            variant="outline"
                            className="border-slate-700 text-slate-200"
                        >
                            Open full article
                        </Button>
                    </div>
                    <div className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]">
                        <article className="rounded-3xl bg-slate-50 p-8 text-slate-900 shadow-2xl shadow-slate-950/40">
                            <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-500">
                                <span>Blog</span>
                                <span>8 min read</span>
                                <span>Programming projects</span>
                            </div>
                            <h3 className="mt-4 text-4xl font-semibold leading-tight text-slate-900">
                                Why reasonlearn is the quiet engine behind
                                better programming projects
                            </h3>
                            <p className="mt-4 text-lg text-slate-600">
                                Every ambitious codebase starts with a question:
                                "What are we really building?" reasonlearn helps
                                teams and solo builders turn that uncertainty
                                into clear reasoning, sharp decisions, and
                                documentation that actually ships with the code.
                            </p>
                            <div className="mt-6 flex items-center gap-4">
                                <div className="h-12 w-12 rounded-full bg-slate-200" />
                                <div>
                                    <p className="text-sm font-semibold text-slate-900">
                                        Lahir S.
                                    </p>
                                    <p className="text-xs text-slate-500">
                                        Founder at reasonlearn • Sep 2026
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8 h-56 w-full rounded-2xl bg-gradient-to-br from-slate-200 via-white to-emerald-100" />
                            <div className="mt-8 space-y-5 text-base leading-relaxed text-slate-700">
                                <p>
                                    The most fragile part of a project is the
                                    invisible reasoning: why you picked a
                                    framework, why the data model looks the way
                                    it does, why the API boundaries landed on
                                    specific trade-offs. reasonlearn captures
                                    that thinking alongside the code, so
                                    future-you (or a new teammate) can
                                    understand decisions without decoding a maze
                                    of commits.
                                </p>
                                <p>
                                    When you run a build with reasonlearn, it
                                    becomes a structured working log. It
                                    highlights assumptions, pulls in citations
                                    for the ideas you borrowed, and reminds you
                                    what risks you deferred. The result is a
                                    roadmap you can share with collaborators,
                                    investors, or a community that wants to
                                    follow along.
                                </p>
                                <blockquote className="rounded-2xl border border-slate-200 bg-white p-5 text-slate-700">
                                    "Great programming projects are not just
                                    shipped; they are explained. reasonlearn
                                    makes the explanation part effortless."
                                </blockquote>
                                <p>
                                    If you publish your work, the same reasoning
                                    becomes a blog-ready narrative. That is why
                                    the /blogs/[blogid] page is central: every
                                    project write-up gets a clean, Medium-style
                                    layout with tags, reading time, and space
                                    for visuals. Start with a draft, attach
                                    diagrams, and you have a professional case
                                    study that scales with your portfolio.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {[
                                        'Reasoning',
                                        'Engineering',
                                        'Project Notes',
                                    ].map((tag) => (
                                        <span
                                            key={tag}
                                            className="rounded-full bg-slate-200 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-600"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                        <aside className="space-y-6">
                            <div className="rounded-2xl border border-slate-800 bg-slate-950 p-6">
                                <p className="text-xs uppercase tracking-[0.3em] text-slate-500">
                                    Blog essentials
                                </p>
                                <h4 className="mt-3 text-xl font-semibold text-white">
                                    What every project story should include
                                </h4>
                                <ul className="mt-4 space-y-3 text-sm text-slate-300">
                                    <li>
                                        Clear problem statement and the research
                                        questions you set out to answer.
                                    </li>
                                    <li>
                                        System architecture snapshots that show
                                        how the logic flows.
                                    </li>
                                    <li>
                                        Metrics that explain why the approach is
                                        working.
                                    </li>
                                    <li>
                                        Lessons learned so the community can
                                        reuse your insights.
                                    </li>
                                </ul>
                            </div>
                            <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-emerald-500/10 p-6">
                                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                    Featured in reasonlearn
                                </p>
                                <div className="mt-4 space-y-4">
                                    {[
                                        {
                                            title: 'Turning research notes into published apps',
                                            time: '6 min read',
                                        },
                                        {
                                            title: 'How to build a reasoning-first dev log',
                                            time: '4 min read',
                                        },
                                        {
                                            title: 'Shipping with clarity: sprint retrospectives',
                                            time: '5 min read',
                                        },
                                    ].map((item) => (
                                        <div
                                            key={item.title}
                                            className="space-y-1"
                                        >
                                            <p className="text-sm font-semibold text-white">
                                                {item.title}
                                            </p>
                                            <p className="text-xs text-slate-400">
                                                {item.time}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                                <Button
                                    onClick={onReadBlog}
                                    className="mt-6 w-full bg-cyan-400 text-slate-900 hover:bg-cyan-300"
                                >
                                    Explore the blog hub
                                </Button>
                            </div>
                        </aside>
                    </div>
                </div>
            </section>
            <section className="mx-auto w-full max-w-6xl px-6 py-16">
                <div className="flex flex-wrap items-end justify-between gap-6">
                    <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                            Workflows
                        </p>
                        <h2 className="mt-3 text-3xl font-semibold text-white">
                            Turn dense research into clear reasoning
                        </h2>
                    </div>
                    <Button variant="outline" className="border-slate-700">
                        See workflow library
                    </Button>
                </div>
                <div className="mt-10 grid gap-6 md:grid-cols-3">
                    {[
                        {
                            title: 'Draft intelligence',
                            text: 'Inline critique for math proofs, assumptions, and claim boundaries with highlights and fixes.',
                        },
                        {
                            title: 'Evidence packs',
                            text: 'Auto-generated reasoning packets with citations, logical chain, and missing-source prompts.',
                        },
                        {
                            title: 'Narrative builder',
                            text: 'Transform computations into human-friendly reasoning for blogs and final chapters.',
                        },
                    ].map((item) => (
                        <div
                            key={item.title}
                            className="rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
                        >
                            <p className="text-lg font-semibold text-white">
                                {item.title}
                            </p>
                            <p className="mt-2 text-sm text-slate-300">
                                {item.text}
                            </p>
                            <Button
                                variant="ghost"
                                className="mt-4 px-0 text-cyan-200"
                            >
                                Learn more
                            </Button>
                        </div>
                    ))}
                </div>
            </section>

            <section className="mx-auto w-full max-w-6xl px-6 pb-16">
                <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-8">
                    <div className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                Evidence Table
                            </p>
                            <h3 className="mt-3 text-2xl font-semibold text-white">
                                Reasoning packs in progress
                            </h3>
                        </div>
                        <Button
                            onClick={onStart}
                            className="bg-cyan-400 text-slate-900 hover:bg-cyan-300"
                        >
                            Create new pack
                        </Button>
                    </div>
                    <div className="mt-8 overflow-hidden rounded-2xl border border-slate-800">
                        <table className="w-full text-left text-sm">
                            <thead className="bg-slate-950 text-xs uppercase tracking-[0.2em] text-slate-500">
                                <tr>
                                    <th className="px-4 py-3">Pack</th>
                                    <th className="px-4 py-3">Domain</th>
                                    <th className="px-4 py-3">Confidence</th>
                                    <th className="px-4 py-3">Status</th>
                                    <th className="px-4 py-3">Next action</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-slate-800">
                                {[
                                    {
                                        name: 'Nonlinear PDE stability',
                                        domain: 'Applied Math',
                                        confidence: '0.88',
                                        status: 'Reviewer ready',
                                        next: 'Send to advisor',
                                    },
                                    {
                                        name: 'Biophysics diffusion model',
                                        domain: 'Physics',
                                        confidence: '0.74',
                                        status: 'Needs sources',
                                        next: 'Add citations',
                                    },
                                    {
                                        name: 'Neural decoder calibration',
                                        domain: 'Neuroscience',
                                        confidence: '0.93',
                                        status: 'Approved',
                                        next: 'Publish summary',
                                    },
                                    {
                                        name: 'Nanomaterials thermal loss',
                                        domain: 'Materials',
                                        confidence: '0.81',
                                        status: 'In review',
                                        next: 'Refine assumptions',
                                    },
                                ].map((row) => (
                                    <tr
                                        key={row.name}
                                        className="bg-slate-950/40"
                                    >
                                        <td className="px-4 py-3 font-medium text-white">
                                            {row.name}
                                        </td>
                                        <td className="px-4 py-3 text-slate-300">
                                            {row.domain}
                                        </td>
                                        <td className="px-4 py-3 text-cyan-200">
                                            {row.confidence}
                                        </td>
                                        <td className="px-4 py-3 text-slate-300">
                                            {row.status}
                                        </td>
                                        <td className="px-4 py-3 text-emerald-300">
                                            {row.next}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-6xl px-6 pb-20">
                <div className="grid gap-8 md:grid-cols-[0.55fr_0.45fr]">
                    <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-8">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                            Live Dashboard
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">
                            SaaS-ready insights for every project
                        </h3>
                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {[
                                { label: 'Active projects', value: '42' },
                                { label: 'Reasoning tasks', value: '1,204' },
                                { label: 'Open citations', value: '86' },
                                { label: 'Advisor reviews', value: '12' },
                            ].map((metric) => (
                                <div
                                    key={metric.label}
                                    className="rounded-2xl border border-slate-800 bg-slate-950 p-4"
                                >
                                    <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                        {metric.label}
                                    </p>
                                    <p className="mt-2 text-2xl font-semibold text-white">
                                        {metric.value}
                                    </p>
                                </div>
                            ))}
                        </div>
                        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950 p-4">
                            <div className="flex items-center justify-between">
                                <p className="text-sm font-semibold text-white">
                                    Weekly reasoning velocity
                                </p>
                                <span className="text-xs text-slate-500">
                                    Last 7 days
                                </span>
                            </div>
                            <div className="mt-4 flex items-end gap-2">
                                {[40, 28, 56, 70, 52, 64, 80].map(
                                    (bar, index) => (
                                        <div
                                            key={`bar-${index}`}
                                            className="flex h-24 w-full items-end rounded-lg bg-slate-900"
                                        >
                                            <div
                                                className="w-full rounded-lg bg-cyan-400"
                                                style={{ height: `${bar}%` }}
                                            />
                                        </div>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="rounded-3xl border border-slate-800 bg-gradient-to-b from-slate-900 via-slate-950 to-slate-950 p-8">
                        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                            Signals
                        </p>
                        <h3 className="mt-3 text-2xl font-semibold text-white">
                            Keep every claim defensible
                        </h3>
                        <div className="mt-6 space-y-4">
                            {[
                                {
                                    title: 'Assumption alerts',
                                    text: '8 new alerts in Bayesian inference section',
                                    status: 'Resolve',
                                },
                                {
                                    title: 'Reviewer comments',
                                    text: '2 advisors flagged missing citations',
                                    status: 'Review',
                                },
                                {
                                    title: 'Clarity score',
                                    text: 'Up 12 points after revision',
                                    status: 'View impact',
                                },
                            ].map((item) => (
                                <div
                                    key={item.title}
                                    className="rounded-2xl border border-slate-800 bg-slate-950 p-4"
                                >
                                    <p className="text-sm font-semibold text-white">
                                        {item.title}
                                    </p>
                                    <p className="mt-1 text-sm text-slate-300">
                                        {item.text}
                                    </p>
                                    <Button
                                        variant="ghost"
                                        className="mt-3 px-0 text-cyan-200"
                                    >
                                        {item.status}
                                    </Button>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="mx-auto w-full max-w-6xl px-6 pb-20">
                <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-cyan-500/20 via-slate-900 to-emerald-500/20 p-10">
                    <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                Ready to launch
                            </p>
                            <h3 className="mt-3 text-3xl font-semibold text-white">
                                Build your reasoning stack with reasonlearn.
                            </h3>
                            <p className="mt-2 text-sm text-slate-300">
                                Trusted by graduate labs, independent
                                researchers, and technical publishers.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button
                                onClick={onStart}
                                size="lg"
                                className="bg-cyan-400 text-slate-900 hover:bg-cyan-300"
                            >
                                Start free
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-slate-700"
                            >
                                Schedule a demo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <footer className="border-t border-slate-800 py-10">
                <div className="mx-auto flex w-full max-w-6xl flex-wrap items-center justify-between gap-6 px-6 text-sm text-slate-400">
                    <p>© 2026 reasonlearn. Built for rigorous reasoning.</p>
                    <div className="flex gap-4">
                        <span>Security</span>
                        <span>Docs</span>
                        <span>Terms</span>
                    </div>
                </div>
            </footer>
        </main>
    )
}
