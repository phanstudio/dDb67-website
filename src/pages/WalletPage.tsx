import { useState } from 'react';
import PaperImg from '../components/paperImg';
import { useGo } from "../context/Usego";
import { useSubmission } from '../context/SubmissionContext';
import Loading from '../components/loading';

export default function WalletPage() {
    const go = useGo()
    const continue_array: number[] = [1.1,0.8,1,1,0.9,0.7,0.7,1.0];
    const [addressError, setAddressError] = useState('')
    const [walletExistsError, setWalletExistsError] = useState('')
    const [submitError, setSubmitError] = useState('')
    const [loading, setLoading] = useState(false)
    const [submitting, setSubmitting] = useState(false);

    const {
        data,
        updateData,
        setStepCompleted,
        validateEvmAddress,
        checkWalletExists,
        submitEntry,
    } = useSubmission()

    const handleSubmit = async () => {
        setAddressError('')
        setWalletExistsError('')
        setSubmitError('')

        
        const walletAddress = data.walletAddress.trim()
        if (!validateEvmAddress(walletAddress)) {
            setAddressError('INVALID EVM ADDRESS!')
            return
        }

        setLoading(true)
        const walletResult = await checkWalletExists(walletAddress)
        if (walletResult.exists) {
            setLoading(false)
            setWalletExistsError('WALLET ALREADY REGISTERED!')
            return
        }

        const payload = {
            ...data,
            walletAddress,
            createdAt: new Date().toISOString(),
        }
        if (submitting) return;
        setSubmitting(true);
        try {
            await submitEntry(payload)
            updateData(payload)
            setStepCompleted('wallet')
            setLoading(false)
            requestAnimationFrame(() => {
                go('/submit')
            })
        } catch (error) {
            setLoading(false)
            const message = error instanceof Error ? error.message : 'Submission failed'
            setSubmitError(message)
        } finally {
            setSubmitting(false);
        }
    }

    if (loading) return (
        <Loading />
    )

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
                            {['D','R','O','P'].map((letter, i) => (
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
                            {['Y', 'O', 'U', 'R'].map((letter, i) => (
                                <span key={i}
                                    className="px-0.5 py-0.5 text-sm font-bold
                                    transform border-b-2 border-[#0007] leading-none 
                                    "
                                    style={{
                                        background: i % 2 === 0 ? '#8b0000' : '#ddd',
                                        color: i % 2 === 0 ? '#fff' : '#000',
                                        transform: `rotate(${(Math.random() - 0.5) * 8}deg)`,
                                        fontFamily: i % 2 === 0 ? 'Georgia, serif' : 'Arial, sans-serif',
                                        fontSize: `21px`,
                                        boxShadow: "inset 0 0 20px rgba(139, 69, 19, 0.3)",
                                    }}>{letter}</span>
                            ))}
                            <span className="mx-1" />
                            {['W', 'A', 'L', 'L', 'E', 'T'].map((letter, i) => (
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
                                    // background: 'linear-gradient(90deg, #d4b896 0%, #c9a875 100%)', 
                                    backgroundImage: 'url("tape1.webp")',
                                    // boxShadow: '2px 2px 4px rgba(0,0,0,0.2)' 
                                }} 
                            />
                            {/* Decorative Tape - Top Right */}
                            <div className="absolute -top-10 -right-9 w-[96px] h-[96px] scale-[-1] rotate-12 
                                opacity-70 bg-center bg-no-repeat bg-cover z-10"
                                style={{ 
                                    // background: 'linear-gradient(90deg, #d4b896 0%, #c9a875 100%)', 
                                    backgroundImage: 'url("tape2.webp")',
                                    // boxShadow: '2px 2px 4px rgba(0,0,0,0.2)' 
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
                                    {/* <div className="absolute inset-0 pointer-events-none"
                                        style={{
                                            background: 'radial-gradient(ellipse at 0% 0%, rgba(60,30,10,0.4) 0%, transparent 30%), radial-gradient(ellipse at 100% 0%, rgba(60,30,10,0.3) 0%, transparent 25%), radial-gradient(ellipse at 0% 100%, rgba(60,30,10,0.4) 0%, transparent 30%), radial-gradient(ellipse at 100% 100%, rgba(60,30,10,0.3) 0%, transparent 25%)'
                                        }} /> */}
                                    <div
                                        className="absolute inset-0 pointer-events-none -z-10"
                                        style={{
                                            background:
                                                "radial-gradient(ellipse at 0% 0%, rgba(60,30,10,0.4) 0%, transparent 30%), radial-gradient(ellipse at 100% 0%, rgba(60,30,10,0.3) 0%, transparent 25%), radial-gradient(ellipse at 0% 100%, rgba(60,30,10,0.4) 0%, transparent 30%), radial-gradient(ellipse at 100% 100%, rgba(60,30,10,0.3) 0%, transparent 25%)",
                                        }}
                                    />

                                    <div className="flex justify-between items-center mb-5 ml-2 relative z-20 flex-col md:flex-row">
                                        <p className="text-sm text-gray-800 text-center md:text-left" style={{ fontFamily: "Arial Black, sans-serif" }}>
                                            EVM WALLET ADDRESS:
                                        </p>
                                    </div>

                                    <div className="-mt-6 relative z-10">
                                        <PaperImg
                                        value={data.walletAddress}
                                        onChange={(e) => {
                                            updateData({ walletAddress: e.target.value })
                                            setAddressError('')
                                            setWalletExistsError('')
                                        }}
                                        placeholder="0xYOURWALLETADDRESSHERE"
                                        paperImage="/burntpaper.webp"
                                        />
                                    </div>
                                    {addressError && (
                                        <div className="mt-2 text-xs font-bold text-red-600">{addressError}</div>
                                    )}
                                    {walletExistsError && (
                                        <div className="mt-2 text-xs font-bold text-red-600">{walletExistsError}</div>
                                    )}
                                </div>

                                {/* Continue to Wallet Button - Ransom Style */}
                                {/* <div className="flex flex-wrap justify-center py-2 
                                    bg-center bg-no-repeat bg-conic relative rounded-lg
                                    items-baseline border-b-2 border-[#0008]
                                    transition-transform duration-150 ease-out
                                    active:scale-[0.96] hover:-translate-y-[1px]
                                    hover:scale-[1.04] active:translate-y-[1px]
                                    "
                                    onClick={handleSubmit}
                                    style={{ 
                                        backgroundImage: 'url("paper.webp")',
                                        boxShadow: "inset 0 0 20px rgba(139, 69, 19, 0.3)",
                                    }}
                                    onKeyDown={(event) => {
                                        if (event.key === 'Enter' || event.key === ' ') {
                                            event.preventDefault()
                                            handleSubmit()
                                        }
                                    }}
                                    role="button"
                                    tabIndex={0}
                                >
                                    {['S', 'U', 'B', 'M', 'I', 'T'].map((letter, i) => (
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
                                            }}>{letter}</span>
                                    ))}
                                    <span className="mx-1" />
                                </div> */}
                                <button
                                    disabled={submitting}
                                    type="button"
                                    onClick={handleSubmit}
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
                                    {['S', 'U', 'B', 'M', 'I', 'T'].map((letter, i) => (
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
                                    <span className="mx-1" />
                                    </button>

                                {loading && (
                                    <div className="mt-2 text-xs font-bold text-black">SUBMITTING...</div>
                                )}
                                {submitError && (
                                    <div className="mt-2 text-xs font-bold text-red-600">{submitError}</div>
                                )}

                                {/* Back Button */}
                                <div className="flex justify-center pt-2">
                                    <div className="relative inline-block overflow-visible group">
                                    {/* Decorative tape */}
                                    <div
                                        aria-hidden="true"
                                        className="
                                        pointer-events-none
                                        absolute -inset-x-2 -inset-y-4
                                        bg-center bg-no-repeat bg-contain
                                        transition-all duration-200 ease-out

                                        opacity-90
                                        rotate-[-2deg]

                                        group-hover:opacity-100
                                        group-hover:saturate-125
                                        group-hover:brightness-110
                                        group-hover:contrast-110

                                        group-active:scale-[0.97]
                                        group-active:rotate-[-1deg]
                                        "
                                        style={{ backgroundImage: 'url("tape6.webp")' }}
                                    />

                                    {/* Clickable button */}
                                    <button
                                        type="button"
                                        className="
                                        px-6 py-2 text-sm font-bold
                                        rounded flex items-center gap-2 text-black
                                        transition-colors
                                        relative z-10
                                        font-valentine
                                        "
                                        onClick={() => go('/task')}
                                    >
                                        <span className="text-lg">←</span> BACK
                                    </button>
                                    </div>


                                </div>
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
