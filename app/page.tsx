const features = [
  {
    title: "Next.js 15",
    description: "App Router, server components, and optimized routing ready to go.",
  },
  {
    title: "TypeScript",
    description: "Strict defaults keep types predictable while you ship fast.",
  },
  {
    title: "TailwindCSS",
    description: "Utility-first styling with sensible defaults and extendable theme.",
  },
  {
    title: "ESLint",
    description: "React hooks rules are enabled to keep components predictable.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-white">
      <div className="mx-auto flex max-w-5xl flex-col gap-12 px-6 py-16">
        <header className="flex flex-col gap-4">
          <p className="text-sm font-semibold uppercase tracking-widest text-slate-500">
            mostraloja-web
          </p>
          <h1 className="text-4xl font-semibold leading-tight text-balance text-slate-900 sm:text-5xl">
            Next.js 15 starter with TypeScript, TailwindCSS, and ESLint.
          </h1>
          <p className="text-lg text-slate-600 sm:max-w-3xl">
            Everything is prewired so you can jump straight into building your product.
            Start the dev server with <span className="font-mono text-sm">npm run dev</span>
            and keep moving.
          </p>
          <div className="flex flex-wrap gap-3">
            <a
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
              href="https://nextjs.org/docs"
            >
              Read the Next.js docs
            </a>
            <a
              className="inline-flex items-center gap-2 rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:-translate-y-0.5 hover:border-slate-300 hover:bg-slate-50"
              href="https://tailwindcss.com/docs"
            >
              Tailwind documentation
            </a>
          </div>
        </header>

        <section className="grid gap-4 sm:grid-cols-2">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <h2 className="text-lg font-semibold text-slate-900">{feature.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600 text-balance">
                {feature.description}
              </p>
            </article>
          ))}
        </section>
      </div>
    </main>
  );
}
