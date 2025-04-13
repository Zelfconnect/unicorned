import Counter from "./Component/Counter";
import Link from "next/link"; 
export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Counter title="Counter1 " />
        <Counter title="Counter2" />
        <Counter title="Counter3" />
        <Link href="/dashboard" className="text-blue-500 hover:underline">
          Go to Dashboard
        </Link>
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
          <li className="mb-2 tracking-[-.01em]">
            Unicorn{" "}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
              app/page.tsx
            </code>
          </li>
          <li className="tracking-[-.01em]">
           Suck a dick
          </li>
        </ol>
      </main>
    </div>
  );
}

      