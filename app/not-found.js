import Link from "next/link";

export const metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-[#010528] to-[#004B8E] px-6 text-center text-white">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-emerald-400">Error 404</p>
      <h1 className="mt-4 text-5xl font-extrabold md:text-6xl">Page not found</h1>
      <p className="mt-4 max-w-md text-slate-300">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-lg bg-emerald-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-emerald-500/20 transition-colors hover:bg-emerald-400"
      >
        Back to home
      </Link>
    </main>
  );
}