import Link from 'next/link'

const demoArticle = {
    id: 'llm-reasoning-learning',
    title: 'Using LLMs for reasoning and learning technical challenges',
    subtitle:
        'A practical, technical walkthrough of how large language models can scaffold thought, reduce errors, and accelerate mastery.',
    date: 'Sep 22, 2026',
    readTime: '9 min read',
    author: 'Ronald D.',
    role: 'Founder at reasonlearn',
    tags: ['LLMs', 'Reasoning', 'Technical Writing'],
}

const sections = [
    {
        heading: '1) Start with a constraint-driven prompt',
        body: [
            'Reasoning tasks fail when the model is asked to improvise with vague goals. Start with constraints: the target audience, the scope, and the expected output format. For example, when exploring a new algorithm, ask for a step-by-step explanation, followed by a minimal proof sketch, and a concrete implementation plan.',
            'Constraints reduce hallucinations because the model has fewer degrees of freedom. You can also specify the level of rigor: formal proof, engineering intuition, or a layered answer that bridges both.',
        ],
    },
    {
        heading: '2) Use a reasoning scaffold',
        body: [
            'A scaffold is a reusable template for how the model should think. In reasonlearn, we use: Context -> Assumptions -> Claims -> Evidence -> Open Risks. This converts free-form responses into traceable logic.',
            'For example, if you are learning distributed systems, ask the model to list failure modes, then provide evidence for each mitigation. The scaffold makes it harder for the model to skip the hard parts.',
        ],
    },
    {
        heading: '3) Add verification checkpoints',
        body: [
            'LLM reasoning is strongest when paired with verification. Insert checkpoints where the model must re-derive a claim, check dimensional consistency, or test against a counterexample.',
            'Example: after describing a caching strategy, ask the model to evaluate worst-case latency and then compare it to a baseline. This surfaces trade-offs early.',
        ],
    },
    {
        heading: '4) Convert answers into learning artifacts',
        body: [
            'The final step is to turn the reasoning into assets you can reuse: a knowledge card, a blog outline, or a decision record. These artifacts compound over time and become the backbone of your technical writing.',
            'For a demo, export the scaffold as a blog post with headings, code snippets, and diagrams. The narrative becomes a teaching tool rather than a one-off response.',
        ],
    },
]

const defaultContent = {
    title: 'Demo article not found',
    subtitle:
        'This is a placeholder for future blog entries. Create a post and map it in this route.',
}

export default async function BlogDetailPage({
    params,
}: {
    params: Promise<{ blogid: string }>
}) {
    const { blogid } = await params
    const isDemo = blogid === demoArticle.id
    const header = isDemo
        ? demoArticle
        : {
              ...demoArticle,
              title: defaultContent.title,
              subtitle: defaultContent.subtitle,
          }

    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-48 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
                    <div className="absolute left-0 top-24 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
                </div>
                <article className="relative z-10 mx-auto w-full max-w-4xl px-6 pb-20 pt-12">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                        <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.3em] text-slate-400">
                            <span>Blog</span>
                            <span>{header.readTime}</span>
                            <span>{header.date}</span>
                        </div>
                        <Link
                            href="/blogs/reasonlearn-projects"
                            className="rounded-full border border-slate-700 bg-slate-950/40 px-4 py-2 text-xs text-slate-200 transition hover:bg-slate-900/60 hover:text-white"
                        >
                            Back to blog hub
                        </Link>
                    </div>
                    <h1 className="mt-6 text-4xl font-semibold leading-tight text-white md:text-5xl">
                        {header.title}
                    </h1>
                    <p className="mt-4 text-lg text-slate-300">
                        {header.subtitle}
                    </p>
                    <div className="mt-6 flex items-center gap-3 text-sm text-slate-400">
                        <div className="h-10 w-10 rounded-full bg-slate-800" />
                        <div>
                            <p className="text-white">{header.author}</p>
                            <p className="text-xs text-slate-500">
                                {header.role}
                            </p>
                        </div>
                    </div>
                    <div className="mt-8 flex flex-wrap gap-2">
                        {header.tags.map((tag) => (
                            <span
                                key={tag}
                                className="rounded-full bg-slate-900 px-3 py-1 text-xs uppercase tracking-[0.2em] text-slate-300"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="mt-10 h-56 w-full rounded-3xl bg-gradient-to-br from-slate-200 via-white to-emerald-100" />

                    <section className="mt-10 space-y-8 text-base leading-relaxed text-slate-300">
                        {isDemo ? (
                            sections.map((section) => (
                                <div key={section.heading}>
                                    <h2 className="text-2xl font-semibold text-white">
                                        {section.heading}
                                    </h2>
                                    <div className="mt-3 space-y-4">
                                        {section.body.map((paragraph) => (
                                            <p key={paragraph}>{paragraph}</p>
                                        ))}
                                    </div>
                                </div>
                            ))
                        ) : (
                            <p>{defaultContent.subtitle}</p>
                        )}
                    </section>

                    {isDemo && (
                        <div className="mt-10 rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                            <h3 className="text-xl font-semibold text-white">
                                Demo checklist for technical reasoning posts
                            </h3>
                            <ul className="mt-4 space-y-3 text-sm text-slate-300">
                                <li>
                                    Define the scope, target reader, and
                                    confidence level.
                                </li>
                                <li>
                                    Convert the reasoning into a repeatable
                                    scaffold.
                                </li>
                                <li>
                                    Add verification checkpoints for claims and
                                    metrics.
                                </li>
                                <li>
                                    Export the final narrative with diagrams and
                                    references.
                                </li>
                            </ul>
                        </div>
                    )}
                </article>
            </div>
        </main>
    )
}
