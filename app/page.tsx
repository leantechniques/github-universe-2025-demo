import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={100}
          height={20}
          priority
        />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            GitHub Universe 2025 Demo
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Explore our custom component library featuring{" "}
            <span className="font-semibold" style={{ color: "#CCCCFF" }}>
              Periwinkle
            </span>{" "}
            and{" "}
            <span className="font-semibold" style={{ color: "#6495ED" }}>
              Cornflower Blue
            </span>{" "}
            color schemes. Visit the{" "}
            <a
              href="/components-showcase"
              className="font-medium text-zinc-950 dark:text-zinc-50 underline"
            >
              Component Showcase
            </a>{" "}
            to see all available components.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-base font-medium sm:flex-row">
          <a
            className="flex h-12 w-full items-center justify-center gap-2 rounded-full px-5 text-black transition-colors hover:opacity-80 md:w-[200px]"
            style={{ backgroundColor: "#CCCCFF" }}
            href="/components-showcase"
          >
            View Components
          </a>
          <a
            className="flex h-12 w-full items-center justify-center rounded-full px-5 text-white transition-colors hover:opacity-80 md:w-[200px]"
            style={{ backgroundColor: "#6495ED" }}
            href="https://github.com/leantechniques/github-universe-2025-demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub Repo
          </a>
        </div>
      </main>
    </div>
  );
}
