export default function Loading() {
    return (
      <div className="
        fixed inset-0 z-50
        bg-white/90
        flex justify-center items-center
        animate-[fadeIn_180ms_ease-out]
      ">
        <div
          className="
            bg-black text-white p-8 rounded-xl border-4 border-black
            shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]
            text-center rotate-1
  
            animate-[popIn_240ms_ease-out]
            hover:rotate-0 transition-transform duration-200
          "
        >
          {/* Spinner */}
          <div className="
            mx-auto mb-4
            w-12 h-12 rounded-full
            border-4 border-white/30 border-t-white
            animate-spin
          " />
  
          {/* Title */}
          <h3 className="
            text-2xl font-black uppercase mt-2
            animate-[jitter_1.2s_infinite]
          ">
            GETTING ddb67...
          </h3>
  
          {/* Subtext */}
          <p className="
            font-bold mt-1
            opacity-80
            animate-pulse
          ">
            HODL ON TIGHT!
          </p>
        </div>
      </div>
    );
  }
  