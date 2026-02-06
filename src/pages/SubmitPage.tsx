import { useNavigate } from 'react-router-dom';

export default function SubmitPage() {
    const navigate = useNavigate()
    const continue_array: number[] = [1.1,0.8,1,1,0.9,0.7,0.7,1.0];

    return (
        <div className="min-h-screen relative overflow-hidden font-mono flex items-center 
        justify-center p-0 md:p-4 bg-center bg-no-repeat bg-cover"
            style={{ 
                backgroundImage: 'url("bg.webp")',
            }}>
            <div className="relative w-full max-w-md overflow-visible">
                <div className="relative overflow-visible h-[750px]">
                    {/* Clipboard image (controls the size) */}
                    <img
                    src="clipboard.webp"
                    alt=""
                    className="w-auto h-full block scale-x-[1.05] scale-y-[0.97]"
                    />

                    {/* Content on top */}
                    <div className="absolute inset-0 p-6 pt-[55px] pb-8 overflow-hidden flex flex-col">
                        {/* Header - "COMPLETE THESE TASKS" Ransom Style */}
                        <div className="
                            flex flex-wrap justify-center mb-2 px-2 items-baseline z-10
                            pb-1 relative pt-2 [filter:drop-shadow(0_4px_5px_rgba(0,0,0,0.55))] shrink-0 relative
                        " 
                            style={{ 
                                boxShadow: "inset 0 0 20px rgba(139, 69, 19, 0.3)",
                            }}
                        >
                            <img className="-top-[2px] absolute -z-8 w-full h-[110%] object-cover" src="sandpaper.webp" alt="" />
                            {['Y','O','U','\'', 'E'].map((letter, i) => (
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
                            {['I', 'N', '!'].map((letter, i) => (
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
                                h-full overflow-y-auto overflow-x-hidden text-black text-center"
                                style={{
                                    background: 'linear-gradient(180deg, #f5f0e6 0%, #e8e0d0 100%)',
                                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.1)'
                            }}>
                                YOUR ENTRY HAS BEEN RECORDED <br />
                                YOUR USERNAME IS YOUR INVITE CODE

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
                                    <div className="relative group overflow-visible">
                                        {/* Paper background layer */}
                                        <div
                                            className="
                                            absolute inset-0 
                                            bg-center bg-no-repeat bg-contain
                                            transition-all duration-300 ease-out
                                            filter sepia-30 saturate-90 brightness-95

                                            group-hover:scale-105
                                            group-hover: saturate-120
                                            group-hover:brightness-110
                                            group-hover:contrast-110
                                            "
                                            style={{ backgroundImage: `url("burntpaper.webp")` }}
                                        />

                                        <button className='w-full bg-transparent py-10 px-6
                                            text-black text-md text-center font-bold
                                            placeholder:text-gray-500
                                            relative'
                                        >
                                            https://x.com/PostRugPhotos
                                        </button>
                                    </div>
                                </div>
                                
                                CLICK TO COPY LINK <br />
                                SHARE LINK FOR HIGHER REVIEW CHANCE <br />

                                STAY TUNED FOR UPDATES <br />

                                Keep surviving!

                                {/* Continue to Wallet Button - Ransom Style */}
                                <div className="flex flex-wrap justify-center py-2 
                                    bg-center bg-no-repeat bg-conic relative rounded-lg
                                    items-baseline border-b-2
                                    border-[#0008] font-valentine cursor-pointer
                                    "
                                    style={{ 
                                        backgroundImage: 'url("paper.webp")',
                                        boxShadow: "inset 0 0 20px rgba(139, 69, 19, 0.3)",
                                    }}
                                    onClick={() => navigate('/')}
                                >
                                    BACK TO THE START
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
        </div>
    )
}
