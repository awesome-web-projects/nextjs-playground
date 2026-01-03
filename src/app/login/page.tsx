import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function LoginPage() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <div className="relative overflow-hidden">
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute -top-40 right-0 h-80 w-80 rounded-full bg-cyan-500/20 blur-3xl" />
                    <div className="absolute left-0 top-20 h-80 w-80 rounded-full bg-emerald-400/10 blur-3xl" />
                </div>
                <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-6xl items-center justify-center px-6 py-16">
                    <div className="w-full max-w-md rounded-3xl border border-slate-800 bg-slate-900/70 p-8 shadow-2xl shadow-slate-950/40">
                        <div className="mb-6 space-y-2">
                            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
                                Welcome back
                            </p>
                            <h1 className="text-3xl font-semibold text-white">
                                Sign in to reasonlearn
                            </h1>
                            <p className="text-sm text-slate-300">
                                Access your research packs, dashboards, and
                                ongoing projects.
                            </p>
                        </div>
                        <form className="space-y-4">
                            <label className="block text-sm text-slate-300">
                                Email
                                <input
                                    type="email"
                                    placeholder="you@reasonlearn.ai"
                                    className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                />
                            </label>
                            <label className="block text-sm text-slate-300">
                                Password
                                <input
                                    type="password"
                                    placeholder="Your password"
                                    className="mt-2 w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-2 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
                                />
                            </label>
                            <div className="flex items-center justify-between text-xs text-slate-400">
                                <label className="flex items-center gap-2">
                                    <input
                                        type="checkbox"
                                        className="h-4 w-4 rounded border-slate-700 bg-slate-950"
                                    />
                                    Remember me
                                </label>
                                <span className="cursor-pointer hover:text-slate-200">
                                    Forgot password?
                                </span>
                            </div>
                            <Button className="w-full bg-cyan-400 text-slate-900 hover:bg-cyan-300">
                                Continue to dashboard
                            </Button>
                        </form>
                        <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/60 p-4 text-xs text-slate-400">
                            New here?{' '}
                            <Link
                                href="/"
                                className="text-cyan-200 hover:text-cyan-100"
                            >
                                Explore reasonlearn
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    )
}
