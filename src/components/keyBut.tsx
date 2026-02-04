export type KeyButProps = {
    url: string;
    value: string;
  };

export default function KeyBut({
    url,
    value
}: KeyButProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Go to X profile"
      className="
        group relative inline-block
        transition-all duration-200 ease-out
        hover:-translate-y-0.5
        hover:scale-[1.03]
        hover:drop-shadow-[0_6px_12px_rgba(0,0,0,0.25)]
        focus-visible:ring-2 focus-visible:ring-amber-500
        focus:outline-none
      "
    >
      {/* Image */}
      <img
        src="whatass/key.png"
        alt="GO"
        draggable={false}
        className="
          w-16 md:w-[85px]
          h-auto
          select-none
          transition-all duration-200
          group-hover:saturate-125
          group-hover:brightness-110
          group-hover:contrast-110
          rotate-[-2deg]
        "
      />

      {/* drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)] */}
      {/* Value on top */}
      <span
        className="
          absolute inset-0
          flex items-center justify-start
          text-xs font-bold text-black
          pointer-events-none
          -top-3.5 left-2.5 right-0
        "
        style={{ fontFamily: "monospace" }}
      >
        {value}
      </span>
    </a>

  );
}