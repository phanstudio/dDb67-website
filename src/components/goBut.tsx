export type GoButProps = {
    url: string;
  };

export default function GoBut({
    url,
}: GoButProps) {
  return (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Go to X profile"
        className="
            group inline-flex items-center
            transition-all duration-200 ease-out
            hover:-translate-y-0.5
            hover:scale-[1.03]
            hover:drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)]
            focus-visible:ring-2 focus-visible:ring-amber-500
            focus:outline-none
        "
        >
        <img
            src="whatass/gobutton.png"
            alt="GO"
            draggable={false}
            className="
            md:w-21.25 h-auto

            w-16
            min-w-16
            select-none
            transition-all duration-200

            group-hover:saturate-125
            group-hover:brightness-110
            group-hover:contrast-110
            "
        />
    </a>
  );
}