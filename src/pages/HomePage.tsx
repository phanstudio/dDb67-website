import { useNavigate } from 'react-router-dom'


export default function HomePage() {
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
                            {['d','D','b','6','7'].map((letter, i) => (
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
                            {/* <span className="mx-1" />
                            {['T', 'H', 'E', 'S', 'E'].map((letter, i) => (
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
                            {['T', 'A', 'S', 'K', 'S'].map((letter, i) => (
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
                            ))} */}
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
                            <div className="bg-[#f5f0e6] rounded-none relative p-4 space-y-3 text-black text-md
                                h-full overflow-y-auto overflow-x-hidden"
                                style={{
                                    background: 'linear-gradient(180deg, #f5f0e6 0%, #e8e0d0 100%)',
                                    boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.1)',
                                    fontFamily: 'Arial Black, sans-serif'
                                }}>
                                
                                <p className='font-bold text-3xl'>Welcome to the forest</p>
                                In a world where loss is certain, a group of survivors endure - in a forest for some reason....
                                
                                <div className='relative w-fit rotate-12'>
                                    <img
                                        src="key.webp"
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
                                    <div className="absolute -bottom-4 md:-top-7 md:right-4 rotate-45 w-[50px] h-[72px] scale-x-[-1] 
                                        opacity-80 bg-center bg-no-repeat bg-cover pointer-events-none select-none"
                                        style={{
                                            backgroundImage: 'url("tape1.webp")', 
                                        }}
                                    />
                                </div>
                                

                                {/* Continue to Wallet Button - Ransom Style */}
                                <div className="flex flex-wrap justify-center py-2 
                                    bg-center bg-no-repeat bg-conic relative rounded-lg
                                    items-baseline border-b-2
                                    border-[#0008]
                                    "
                                    onClick={() => navigate('/deets')}
                                    style={{ 
                                        backgroundImage: 'url("paper.webp")',
                                        boxShadow: "inset 0 0 20px rgba(139, 69, 19, 0.3)",
                                    }}
                                >
                                    {['A', 'P', 'P', 'L', 'Y'].map((letter, i) => (
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
