'use client'
import { useRouter } from 'next/navigation'
import ButtonInner from '@/components/ButtonInner'

export default function Dasboard() {
    const router = useRouter()

    const onClickSuccessEvent = () => {
        router.push('/')
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="relative rounded-lg border border-dashed p-4 lg:p-9 border-gray-700">
                <div className="absolute -top-2.5 flex gap-x-1 text-[9px] uppercase leading-4 tracking-widest left-4 lg:left-9">
                    <div className="rounded-full px-1.5 shadow-xl bg-gray-800 text-gray-300 animate-[rerender_1s_ease-in-out_1]">
                        Main Component
                    </div>
                </div>
                <div className="prose prose-sm prose-invert max-w-none">
                    <h1 className="text-xl p-8 font-bold">Dasboard Page</h1>
                    <a
                        onClick={onClickSuccessEvent}
                        className="mx-auto hover:shadow-lg flex bg-green-400 shadow-xl mb-4 shadow-green-200 p-2 align-center gap-2 cursor-pointer"
                    >
                        <ButtonInner
                            name="Logout"
                            component_name="button_inner"
                        />
                    </a>
                </div>
            </div>
        </main>
    )
}
