import { useState, useMemo } from 'react';
import PaperImg from '../components/paperImg';


const API_BASE = "https://ddb67-fun.vercel.app";

/**
 * Normalizes common wallet formats.
 * - trims whitespace
 * - removes spaces/newlines
 * - EVM (0x...): lowercases
 * - otherwise: returns cleaned string (useful for Solana/base58 too)
 */
function normalizeWallet(input: string) {
  const cleaned = (input || "").trim().replace(/\s+/g, "");

  if (/^0x/i.test(cleaned)) return cleaned.toLowerCase(); // EVM-style

  return cleaned; // e.g. Solana base58 is case-sensitive, so don't change case
}

// function isValidEvmAddress(addr: string) {
//   return /^0x[0-9a-f]{40}$/.test(addr);
// }

export default function CheckerPage() {
    const continue_array: number[] = [1.1, 0.8, 1, 1, 0.9, 0.7, 0.7, 1.0];

    const [wallet, setWallet] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [eligableMessage, setEligableMessage] = useState("");
    const [loading, setLoading] = useState(false);

    const normalizedWallet = useMemo(() => normalizeWallet(wallet), [wallet]);

    // async function handleCheck() {
    //   setUsernameError("");
    //   setEligableMessage("");

    //   const w = normalizedWallet;

    //   if (!w) {
    //     setUsernameError("Please enter your wallet address.");
    //     return;
    //   }

    //   // If you ONLY support EVM addresses, uncomment this:
    //   // if (!isValidEvmAddress(w)) {
    //   //   setUsernameError("Invalid EVM wallet format (expected 0x...).");
    //   //   return;
    //   // }

    //   setLoading(true);
    //   try {
    //     // ✅ Choose ONE of these styles depending on your backend:

    //     // A) GET with querystring (common)
    //     const res = await fetch(
    //       `${API_BASE}/api/verify-wallet/${encodeURIComponent(w)}`, 
    //       {
    //         method: "GET",
    //         headers: { Accept: "application/json" },
    //       }
    //     );

    //     // B) POST JSON body (also common)
    //     // const res = await fetch(`${API_BASE}/eligibility`, {
    //     //   method: "POST",
    //     //   headers: { "Content-Type": "application/json", Accept: "application/json" },
    //     //   body: JSON.stringify({ wallet: w }),
    //     // });

    //     // If backend returns non-2xx, try to show its message
    //     const text = await res.text();
    //     console.log(res)
    //     let data: any = null;
    //     try {
    //       data = text ? JSON.parse(text) : null;
    //     } catch {
    //       // not JSON
    //     }

    //     if (!res.ok) {
    //       const msg =
    //         data?.detail ||
    //         data?.message ||
    //         data?.error ||
    //         `Request failed (${res.status})`;
    //       setUsernameError(msg);
    //       return;
    //     }

    //     // ✅ Handle flexible response shapes:
    //     // expected: { eligible: boolean, message?: string }
    //     const eligible =
    //       data?.eligible ??
    //       data?.isEligible ??
    //       data?.eligable ?? // in case backend uses same spelling
    //       data?.status === "eligible";

    //     const message =
    //       data?.message ||
    //       data?.detail ||
    //       (eligible ? "✅ You are eligible!" : "❌ You are not eligible.");

    //     if (eligible) {
    //       setEligableMessage(message);
    //     } else {
    //       setUsernameError(message);
    //     }
    //   } catch (err: any) {
    //     // CORS errors often show up here as TypeError: Failed to fetch
    //     setUsernameError(err?.message || "Network error. Please try again.");
    //   } finally {
    //     setLoading(false);
    //   }
    // }

    async function handleCheck() {
      setUsernameError("");
      setEligableMessage("");
    
      // const walletNormalized = normalizeWallet(wallet);
      const w = normalizedWallet;

      if (!w) {
        setUsernameError("Please enter your wallet address.");
        return;
      }
    
      if (!w) {
        setUsernameError("Enter wallet address");
        return;
      }
    
      setLoading(true);
    
      try {
        const res = await fetch(
          `${API_BASE}/api/verify-wallet/${encodeURIComponent(w)}`,
          { method: "GET", headers: { Accept: "application/json" } }
        );
    
        const data = await res.json();
    
        if (!res.ok) {
          setUsernameError(data?.detail || "Request failed");
          return;
        }
    
        if (data.exists) {
          setEligableMessage("✅ Wallet eligible");
        } else {
          setUsernameError("❌ Wallet not eligible");
        }
      } catch (err: any) {
        setUsernameError(err?.message || "Network error");
      } finally {
        setLoading(false);
      }
    }

    return (
        <div className="min-h-screen relative overflow-hidden font-mono flex items-center 
        justify-center p-0 md:p-4 bg-center bg-no-repeat bg-cover bg-black">
            <div className="tv-static" />
            <div className="tv-scanlines" />
            <div className="relative z-10 w-full max-w-md overflow-visible group/clipboard">
                <div className="relative overflow-visible h-[750px]">
                    {/* Clipboard image (controls the size) */}
                    <img
                    src="clipboard.webp"
                    alt=""
                    className="w-auto h-full block scale-x-[1.05] scale-y-[0.97]
                        transition-transform duration-300 ease-out
                        group-hover/clipboard:-translate-y-2
                        group-hover/clipboard:rotate-[0.4deg]
                    "
                    />

                    {/* Content on top */}
                    <div className="absolute inset-0 p-6 pt-[55px] pb-8 overflow-hidden flex flex-col
                            transition-transform duration-300 ease-out
                            group-hover/clipboard:-translate-y-2
                            group-hover/clipboard:rotate-[0.4deg]
                        "
                    >
                        {/* Header - "COMPLETE THESE TASKS" Ransom Style */}
                        <div className="
                            flex flex-wrap justify-center mb-2 px-2 items-baseline z-10
                            pb-1 relative pt-2 [filter:drop-shadow(0_4px_5px_rgba(0,0,0,0.55))] shrink-0
                        " 
                            style={{ 
                                boxShadow: "inset 0 0 20px rgba(139, 69, 19, 0.3)",
                            }}
                        >
                            <img className="-top-[2px] absolute -z-8 w-full h-[110%] object-cover" src="sandpaper.webp" alt="" />
                            {['C', 'H', 'E', 'C', 'K'].map((letter, i) => (
                                <span key={i}
                                    className="px-0.5 py-0.5 text-sm font-bold
                                    transform border-b-2 border-[#0007] leading-none 
                                    "
                                    style={{
                                        background: i % 3 === 0 ? '#ff4444' : i % 3 === 1 ? '#333' : '#fff',
                                        color: i % 3 === 0 ? '#fff' : i % 3 === 1 ? '#fff' : '#000',
                                        transform: `rotate(${(Math.random() - 0.5) * 8}deg)`,
                                        fontFamily: i % 2 === 0 ? 'serif' : 'sans-serif',
                                        fontSize: `${28*continue_array[i]}px`,
                                        boxShadow: "inset 0 0 20px rgba(139, 69, 19, 0.3)",
                                    }}>{letter}</span>
                            ))}
                            <span className="mx-1" />
                            {['E', 'L', 'I', 'B', 'I', 'L', 'I', 'T', 'Y'].map((letter, i) => (
                                <span key={i}
                                    className="px-0.25 py-0.5 text-sm font-bold
                                    transform border-b-2 border-[#0007] leading-none 
                                    "
                                    style={{
                                        background: i % 3 === 0 ? '#1a1a1a' : i % 3 === 1 ? '#c41e3a' : '#f5f5dc',
                                        color: i % 3 === 0 ? '#fff' : i % 3 === 1 ? '#fff' : '#000',
                                        transform: `rotate(${(Math.random() - 0.5) * 8}deg)`,
                                        fontFamily: 'Times New Roman, serif',
                                        fontSize: `24px`,
                                        boxShadow: "inset 0 0 20px rgba(139, 69, 19, 0.3)",
                                    }}>{letter}</span>
                            ))}
                        </div>

                        <div className='relative flex-1 min-h-0 overflow-visible'>
                            {/* Decorative Tape - Top Left */}
                            <div className="absolute -top-10 -left-8 w-[96px] h-[96px] scale-x-[-1] 
                                opacity-80 bg-center bg-no-repeat bg-cover z-20"
                                style={{ 
                                    backgroundImage: 'url("tape1.webp")',
                                }} 
                            />
                            {/* Decorative Tape - Top Right */}
                            <div className="absolute -top-10 -right-9 w-[96px] h-[96px] scale-[-1] rotate-12 
                                opacity-70 bg-center bg-no-repeat bg-cover z-10"
                                style={{ 
                                    backgroundImage: 'url("tape2.webp")',
                                }} 
                            />
                            {/* Paper Content Area */}
                            <div className="bg-[#f5f0e6] rounded-none relative p-4 space-y-3
                                h-full overflow-y-auto overflow-x-hidden"
                                style={{
                                    background: 'linear-gradient(180deg, #f5f0e6 0%, #e8e0d0 100%)',
                                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.1)'
                                }}>
                                {/* Task 3 - Quote with burnt paper */}
                                <div
                                    className="relative bg-[#ebe0cc] rounded p-3 overflow-hidden bg-center bg-no-repeat bg-conic border-b-2 border-[#ccc]"
                                    style={{ 
                                        boxShadow: "inset 0 0 20px rgba(139, 69, 19, 0.3)",
                                        backgroundImage: 'url("paper.webp")',
                                    }}
                                    
                                >
                                    <div
                                        className="absolute inset-0 pointer-events-none -z-10"
                                        style={{
                                            background:
                                                "radial-gradient(ellipse at 0% 0%, rgba(60,30,10,0.4) 0%, transparent 30%), radial-gradient(ellipse at 100% 0%, rgba(60,30,10,0.3) 0%, transparent 25%), radial-gradient(ellipse at 0% 100%, rgba(60,30,10,0.4) 0%, transparent 30%), radial-gradient(ellipse at 100% 100%, rgba(60,30,10,0.3) 0%, transparent 25%)",
                                        }}
                                    />

                                    <div className="flex justify-between items-center mb-5 ml-2 relative z-20 flex-col md:flex-row font-inter font-bold">
                                        <p className="text-sm text-gray-800 text-center md:text-left">
                                            YOUR WALLET ADDRESS
                                        </p>
                                    </div>

                                    <div className="-mt-6 relative z-10">
                                        <PaperImg
                                        value={wallet}
                                        onChange={(e) => {
                                          setWallet(e?.target?.value ?? "");
                                          setUsernameError("");
                                          setEligableMessage("");
                                        }}
                                        placeholder="your wallet address"
                                        paperImage="/burntpaper.webp"
                                        />
                                    </div>
                                    {usernameError && (
                                        <div className="mt-2 text-xs font-bold text-red-600">{usernameError}</div>
                                    )}
                                    {eligableMessage && (
                                        <div className="mt-2 text-xs font-bold text-green-600">{eligableMessage}</div>
                                    )}
                                </div>

                                
                                <div>

                                </div>

                                {/* Continue to Wallet Button - Ransom Style */}
                                <button
                                    type="button"
                                    onClick={handleCheck}
                                    className="w-full flex flex-wrap justify-center py-2 
                                        bg-center bg-no-repeat bg-conic relative rounded-lg
                                        items-baseline border-b-2
                                        border-[#0008]
                                        transition-transform duration-150 ease-out
                                        active:scale-[0.96]
                                        hover:-translate-y-[1px]
                                        hover:scale-[1.04]
                                        active:translate-y-[1px]
                                        focus:outline-none"
                                    style={{ 
                                        backgroundImage: 'url("paper.webp")',
                                        boxShadow: "inset 0 0 20px rgba(139, 69, 19, 0.3)",
                                    }}
                                    >
                                    {['C', 'H', 'E', 'C', 'K'].map((letter, i) => (
                                        <span key={i}
                                        className="
                                            px-[2px] py-1 text-lg font-bold cursor-pointer 
                                            hover:scale-110 transition-transform
                                            inline-flex items-baseline align-baseline
                                            leading-none 
                                            border-b-2 border-[#0007]
                                        "
                                        style={{
                                            background: i % 4 === 0 ? '#8b0000' : i % 4 === 1 ? '#1a1a1a' : i % 4 === 2 ? '#c9a875' : '#333',
                                            color: i % 4 === 2 ? '#000' : '#fff',
                                            transform: `rotate(${(Math.random() - 0.5) * 6}deg)`,
                                            fontFamily: i % 2 === 0 ? 'Georgia, serif' : 'Impact, sans-serif',
                                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                                            fontSize: `${30*continue_array[i]}px`,
                                            boxShadow: "inset 0 0 20px rgba(139, 69, 19, 0.3)",
                                        }}
                                        >
                                        {letter}
                                        </span>
                                    ))}
                                </button>

                                {loading && (
                                    <div className="mt-2 text-xs font-bold text-black">CHECKING...</div>
                                )}
                            </div>

                            {/* Decorative Tape - Bottom Left */}
                            <div className="absolute -bottom-3 -left-2 w-[72px] h-6 rotate-12 opacity-80 bg-center bg-no-repeat bg-cover"
                                    style={{ 
                                        backgroundImage: 'url("tape2.webp")', 
                                }}/>
                            {/* Decorative Tape - Bottom Right */}
                            <div className="absolute -bottom-11 -right-8 scale-x-[-1] w-[96px] h-[96px] rotate-60 opacity-80 bg-center bg-no-repeat bg-cover"
                                style={{ 
                                    backgroundImage: 'url("tape2.webp")', 
                                }}/>
                        </div>
                        
                        {/* Creepy Face at Bottom */}
                        <div className="flex justify-center pt-4">
                            <img src="face-dick.webp" alt="face-dick" className='w-20' />
                        </div>
                    </div>
                </div>
            </div>
            <img src="fg.webp" alt="forground" className="absolute w-auto h-[120%] z-30 pointer-events-none object-cover" />
        </div>
    )
}
