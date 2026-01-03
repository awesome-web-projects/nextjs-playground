import Link from 'next/link'

const blogs = [
    {
        id: 'reasoning-first-devlog',
        title: 'Building a reasoning-first dev log',
        excerpt:
            'A practical walkthrough for capturing decisions, trade-offs, and experiments while you ship.',
        date: 'Sep 18, 2026',
        readTime: '6 min read',
        tag: 'Process',
    },
    {
        id: 'clarity-in-projects',
        title: 'Clarity as a feature in programming projects',
        excerpt:
            'Why architecture notes, metrics, and story framing keep teams aligned and reduce rewrites.',
        date: 'Sep 10, 2026',
        readTime: '5 min read',
        tag: 'Engineering',
    },
    {
        id: 'reasonlearn-case-study',
        title: 'Reasonlearn case study: shipping with evidence',
        excerpt:
            'Turning research notes into a polished release, with citations and review checkpoints.',
        date: 'Aug 29, 2026',
        readTime: '7 min read',
        tag: 'Case Study',
    },
]

export default function ReasonlearnProjectsBlogHub() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-48 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
                    <div className="absolute left-0 top-24 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
                </div>
                <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-16">
                    <div className="flex flex-wrap items-end justify-between gap-6">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                reasonlearn blog
                            </p>
                            <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
                                Programming projects, told with clarity
                            </h1>
                            <p className="mt-4 max-w-2xl text-base text-slate-300">
                                Short, practical write-ups on how reasonlearn
                                captures reasoning, keeps project decisions
                                visible, and turns build notes into publishable
                                narratives.
                            </p>
                        </div>
                        <Link
                            className="rounded-full border border-slate-700 bg-slate-950/40 px-5 py-2 text-sm text-slate-200 transition hover:bg-slate-900/60 hover:text-white"
                            href="/"
                        >
                            Back to home
                        </Link>
                    </div>

                    <div className="mt-12 grid gap-6 md:grid-cols-2">
                        {blogs.map((blog) => (
                            <article
                                key={blog.id}
                                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl"
                            >
                                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-500">
                                    <span>{blog.tag}</span>
                                    <span>{blog.readTime}</span>
                                </div>
                                <h2 className="mt-4 text-2xl font-semibold text-white">
                                    {blog.title}
                                </h2>
                                <p className="mt-3 text-sm text-slate-300">
                                    {blog.excerpt}
                                </p>
                                <div className="mt-6 flex items-center justify-between text-xs text-slate-500">
                                    <span>{blog.date}</span>
                                    <Link
                                        className="text-cyan-200 hover:text-cyan-100"
                                        href={`/blogs/${blog.id}`}
                                    >
                                        Read story
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
