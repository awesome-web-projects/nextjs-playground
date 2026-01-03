import Link from 'next/link'
import { Button } from '@/components/ui/button'

const highlights = [
    { label: 'Active packs', value: '12' },
    { label: 'Open citations', value: '38' },
    { label: 'Weekly reviews', value: '6' },
    { label: 'Publishing queue', value: '4' },
]

const tasks = [
    {
        title: 'Validate citation gaps in neural decoder pack',
        status: 'Due tomorrow',
        tag: 'Review',
    },
    {
        title: 'Draft summary for biophysics diffusion model',
        status: 'Due in 3 days',
        tag: 'Writing',
    },
    {
        title: 'Refine assumptions in nonlinear PDE pack',
        status: 'Due next week',
        tag: 'Analysis',
    },
]

const notes = [
    {
        title: 'Advisor feedback',
        text: 'Clarify the bounds in section 2.2 and expand the reasoning map.',
        time: '2 hours ago',
    },
    {
        title: 'Team update',
        text: 'Three collaborators requested access to the evidence table.',
        time: 'Yesterday',
    },
]

export default function DashboardPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-48 right-0 h-96 w-96 rounded-full bg-cyan-500/20 blur-3xl" />
                    <div className="absolute left-0 top-24 h-96 w-96 rounded-full bg-emerald-400/10 blur-3xl" />
                </div>
                <section className="relative z-10 mx-auto w-full max-w-6xl px-6 pb-20 pt-12">
                    <header className="flex flex-wrap items-center justify-between gap-6">
                        <div>
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                Dashboard
                            </p>
                            <h1 className="mt-3 text-4xl font-semibold text-white md:text-5xl">
                                Your reasoning workspace
                            </h1>
                            <p className="mt-3 max-w-2xl text-base text-slate-300">
                                Track packs in progress, surface critical
                                feedback, and keep research output ready to
                                publish.
                            </p>
                        </div>
                        <div className="flex flex-wrap gap-3">
                            <Button className="bg-cyan-400 text-slate-900 hover:bg-cyan-300">
                                New reasoning pack
                            </Button>
                            <Link
                                href="/"
                                className="rounded-full border border-slate-700 bg-slate-950/40 px-4 py-2 text-sm text-slate-200 transition hover:bg-slate-900/60 hover:text-white"
                            >
                                Back to home
                            </Link>
                        </div>
                    </header>

                    <div className="mt-10 grid gap-6 md:grid-cols-4">
                        {highlights.map((item) => (
                            <div
                                key={item.label}
                                className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5"
                            >
                                <p className="text-xs uppercase tracking-[0.2em] text-slate-500">
                                    {item.label}
                                </p>
                                <p className="mt-3 text-3xl font-semibold text-white">
                                    {item.value}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
                        <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-xl font-semibold text-white">
                                    Priority tasks
                                </h2>
                                <span className="text-xs text-slate-500">
                                    Updated today
                                </span>
                            </div>
                            <div className="mt-6 space-y-4">
                                {tasks.map((task) => (
                                    <div
                                        key={task.title}
                                        className="rounded-2xl border border-slate-800 bg-slate-950 p-4"
                                    >
                                        <div className="flex items-center justify-between">
                                            <p className="text-sm font-semibold text-white">
                                                {task.title}
                                            </p>
                                            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs text-cyan-200">
                                                {task.tag}
                                            </span>
                                        </div>
                                        <p className="mt-2 text-xs text-slate-400">
                                            {task.status}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-6">
                            <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
                                <h2 className="text-xl font-semibold text-white">
                                    Team notes
                                </h2>
                                <div className="mt-5 space-y-4">
                                    {notes.map((note) => (
                                        <div
                                            key={note.title}
                                            className="rounded-2xl border border-slate-800 bg-slate-950 p-4"
                                        >
                                            <p className="text-sm font-semibold text-white">
                                                {note.title}
                                            </p>
                                            <p className="mt-2 text-sm text-slate-300">
                                                {note.text}
                                            </p>
                                            <p className="mt-3 text-xs text-slate-500">
                                                {note.time}
                                            </p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-cyan-500/10 via-slate-900 to-emerald-500/10 p-6">
                                <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                    Publishing lane
                                </p>
                                <h3 className="mt-3 text-xl font-semibold text-white">
                                    Release a new project write-up
                                </h3>
                                <p className="mt-2 text-sm text-slate-300">
                                    Convert reasoning packs into Medium-style
                                    posts with citations and visuals.
                                </p>
                                <Button className="mt-6 bg-cyan-400 text-slate-900 hover:bg-cyan-300">
                                    Draft new blog
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
