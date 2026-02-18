type Props = {
  title?: string;
  message?: string;
  twitterUrl?: string;
  homeHref?: string;
};

export default function NomorePage({
  title = "Submissions are closed",
  message = "This page is currently down and we’re no longer taking submissions at the moment.",
  twitterUrl = "https://twitter.com/yourhandle",
}: Props) {
  return (
    <main className="min-h-screen bg-zinc-950 text-zinc-100">
      <div className="mx-auto flex min-h-screen max-w-3xl flex-col items-center justify-center px-6 py-12 text-center">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/60 px-4 py-2 text-sm text-zinc-300">
          <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
          Status: Offline
        </div>

        <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
          {title}
        </h1>

        <p className="mt-4 max-w-xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          {message}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-white px-5 py-3 text-sm font-medium text-zinc-900 shadow hover:bg-zinc-200 focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            Thank you for visting
          </a>

          <a
            href={twitterUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-zinc-800 bg-zinc-900/40 px-5 py-3 text-sm font-medium text-zinc-100 hover:bg-zinc-900 focus:outline-none focus:ring-2 focus:ring-white/20"
          >
            Contact us on Twitter
          </a>
        </div>

        <p className="mt-8 text-xs text-zinc-500">
          For updates, follow us on Twitter <span className="text-amber-400 text-md">@dumbdegenboy67</span>.
        </p>
      </div>
    </main>
  );
}
