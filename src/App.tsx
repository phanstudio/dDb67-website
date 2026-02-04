import { useState } from 'react';
import PaperImg from './components/paperImg';
import GoBut from './components/goBut';
import KeyBut from './components/keyBut';

function App() {
    const [task1Link, setTask1Link] = useState('');
    const [task2Link, setTask2Link] = useState('');

    return (
        <div className="min-h-screen relative overflow-hidden font-mono flex items-center justify-center p-4"
            style={{ 
                // background: 'linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 50%, #1a1a1a 100%)'
                backgroundImage: 'url("whatass/bg.jpg")',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',       // or 'contain'
                backgroundPosition: 'center',
            }}>

            {/* Clipboard Container */}
            <div className="relative w-full max-w-md">

                {/* Clipboard Board */}
                <div className="
                    relative rounded-lg p-6 pt-16 pb-8
                    bg-center bg-no-repeat bg-conic
                "
                style={{
                    backgroundImage: 'url("whatass/clipboard.png")'
                }}
                    aria-hidden="true"
                    >

                    {/* Clipboard Clip */}
                    {/* <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-8 rounded-t-lg"
                        style={{
                            background: 'linear-gradient(180deg, #666 0%, #444 100%)',
                            border: '2px solid #333'
                        }}>
                        <div className="absolute top-1 left-1/2 -translate-x-1/2 w-10 h-4 rounded-full"
                            style={{ background: '#333', border: '1px solid #222' }} />
                    </div> */}

                    {/* Header - "COMPLETE THESE TASKS" Ransom Style */}
                    <div className="flex flex-wrap justify-center gap-1 mb-6 px-2">
                        {['C', 'O', 'M', 'P', 'L', 'E', 'T', 'E'].map((letter, i) => (
                            <span key={i}
                                className="px-1 py-0.5 text-sm font-bold transform"
                                style={{
                                    background: i % 3 === 0 ? '#ff4444' : i % 3 === 1 ? '#333' : '#fff',
                                    color: i % 3 === 0 ? '#fff' : i % 3 === 1 ? '#fff' : '#000',
                                    transform: `rotate(${(Math.random() - 0.5) * 8}deg)`,
                                    fontFamily: i % 2 === 0 ? 'serif' : 'sans-serif'
                                }}>{letter}</span>
                        ))}
                        <span className="mx-1" />
                        {['T', 'H', 'E', 'S', 'E'].map((letter, i) => (
                            <span key={i}
                                className="px-1 py-0.5 text-sm font-bold"
                                style={{
                                    background: i % 2 === 0 ? '#8b0000' : '#ddd',
                                    color: i % 2 === 0 ? '#fff' : '#000',
                                    transform: `rotate(${(Math.random() - 0.5) * 8}deg)`,
                                    fontFamily: i % 2 === 0 ? 'Georgia, serif' : 'Arial, sans-serif'
                                }}>{letter}</span>
                        ))}
                        <span className="mx-1" />
                        {['T', 'A', 'S', 'K', 'S'].map((letter, i) => (
                            <span key={i}
                                className="px-1 py-0.5 text-sm font-bold"
                                style={{
                                    background: i % 3 === 0 ? '#1a1a1a' : i % 3 === 1 ? '#c41e3a' : '#f5f5dc',
                                    color: i % 3 === 0 ? '#fff' : i % 3 === 1 ? '#fff' : '#000',
                                    transform: `rotate(${(Math.random() - 0.5) * 8}deg)`,
                                    fontFamily: 'Times New Roman, serif'
                                }}>{letter}</span>
                        ))}
                    </div>

                    {/* Paper Content Area */}
                    <div className="bg-[#f5f0e6] rounded relative p-4 space-y-3"
                        style={{
                            background: 'linear-gradient(180deg, #f5f0e6 0%, #e8e0d0 100%)',
                            boxShadow: 'inset 0 2px 8px rgba(0,0,0,0.1)'
                        }}>

                        {/* Decorative Tape - Top Left */}
                        <div className="absolute -top-3 -left-2 w-16 h-6 -rotate-12 opacity-80"
                            style={{ background: 'linear-gradient(90deg, #d4b896 0%, #c9a875 100%)', boxShadow: '2px 2px 4px rgba(0,0,0,0.2)' }} />

                        {/* Decorative Tape - Top Right */}
                        <div className="absolute -top-3 -right-2 w-16 h-6 rotate-12 opacity-80"
                            style={{ background: 'linear-gradient(90deg, #d4b896 0%, #c9a875 100%)', boxShadow: '2px 2px 4px rgba(0,0,0,0.2)' }} />

                        {/* Task 1 - Follow */}
                        <div className="flex items-center justify-between bg-[#e8e0d0] rounded p-3 border-b-2 border-[#ccc]">
                            <p className="text-xs font-bold text-gray-800 flex-1 pr-2" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                                FOLLOW @dumbdegenboy67 AND TURN ON NOTIS
                            </p>
                            {/* <button className="px-3 py-1 text-xs font-bold bg-[#d4d0c8] border-2 border-[#888] rounded shadow-[2px_2px_0_#666] hover:translate-y-0.5 hover:shadow-[1px_1px_0_#666] transition-all"
                                style={{ fontFamily: 'monospace' }}>
                                ENTER
                            </button> */}
                            <KeyBut 
                                url='https://x.com/dumbdegenboy67'
                                value='ENTER'
                            />
                        </div>

                        {/* Task 2 - Like & Retweet */}
                        <div className="flex items-center justify-between bg-[#e8e0d0] rounded p-3 border-b-2 border-[#ccc]">
                            <p className="text-xs font-bold text-gray-800 flex-1 pr-2" style={{ fontFamily: 'Arial Black, sans-serif' }}>
                                LIKE & RETWEET THIS POST
                            </p>
                            <KeyBut 
                                url='https://x.com/dumbdegenboy67'
                                value='CTRL'
                            />
                        </div>

                        {/* Task 3 - Quote with burnt paper */}
                        <div
                            className="relative bg-[#ebe0cc] rounded p-3 overflow-hidden bg-center bg-no-repeat bg-conic border-b-2 border-[#ccc]"
                            style={{ 
                                boxShadow: "inset 0 0 20px rgba(139, 69, 19, 0.3)",
                                backgroundImage: 'url("whatass/paper.png")',
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
                                <p className="text-sm text-gray-800" style={{ fontFamily: "Arial Black, sans-serif" }}>
                                    QUOTE WITH "dDb67 eth niggas"(OPTIONAL)
                                </p>
                                <GoBut url="https://x.com/dumbdegenboy67" />
                            </div>

                            <div className="-mt-6 relative z-10">
                                <PaperImg
                                value={task1Link}
                                onChange={(e) => setTask1Link(e.target.value)}
                                placeholder="PASTE LINK"
                                paperImage="/whatass/burntpaper.png"
                                />
                            </div>
                        </div>

                        {/* Task 4 - Tag 2 Frens with burnt paper */}
                        <div
                            className="relative bg-[#ebe0cc] rounded-lg p-3 overflow-hidden"
                            style={{ boxShadow: "inset 0 0 20px rgba(139, 69, 19, 0.3)" }}
                        >
                            <div className="absolute inset-0 pointer-events-none"
                                style={{
                                    background: 'radial-gradient(ellipse at 0% 0%, rgba(60,30,10,0.4) 0%, transparent 30%), radial-gradient(ellipse at 100% 0%, rgba(60,30,10,0.3) 0%, transparent 25%), radial-gradient(ellipse at 0% 100%, rgba(60,30,10,0.4) 0%, transparent 30%), radial-gradient(ellipse at 100% 100%, rgba(60,30,10,0.3) 0%, transparent 25%)'
                                }} />
                            <div
                                className="absolute inset-0 pointer-events-none -z-10"
                                style={{
                                background:
                                    "radial-gradient(ellipse at 0% 0%, rgba(60,30,10,0.4) 0%, transparent 30%), radial-gradient(ellipse at 100% 0%, rgba(60,30,10,0.3) 0%, transparent 25%), radial-gradient(ellipse at 0% 100%, rgba(60,30,10,0.4) 0%, transparent 30%), radial-gradient(ellipse at 100% 100%, rgba(60,30,10,0.3) 0%, transparent 25%)",
                                }} />

                            <div className="flex justify-between items-center mb-4 relative z-20">
                                <p className="text-sm text-gray-800" style={{ fontFamily: "Arial Black, sans-serif" }}>
                                TAG 2 UNEMPLOYED FRENS
                                </p>
                                <GoBut url="https://x.com/dumbdegenboy67" />
                            </div>

                            <div className="-mt-8 relative z-10">
                                <PaperImg
                                value={task2Link}
                                onChange={(e) => setTask2Link(e.target.value)}
                                placeholder="PASTE LINK"
                                paperImage="/whatass/burntpaper.png"
                                />
                            </div>
                        </div>
                    
                        {/* Continue to Wallet Button - Ransom Style */}
                        <div className="flex flex-wrap justify-center gap-1 pt-2">
                            {['C', 'O', 'N', 'T', 'I', 'N', 'U', 'E'].map((letter, i) => (
                                <span key={i}
                                    className="px-1.5 py-1 text-lg font-bold cursor-pointer hover:scale-110 transition-transform"
                                    style={{
                                        background: i % 4 === 0 ? '#8b0000' : i % 4 === 1 ? '#1a1a1a' : i % 4 === 2 ? '#c9a875' : '#333',
                                        color: i % 4 === 2 ? '#000' : '#fff',
                                        transform: `rotate(${(Math.random() - 0.5) * 12}deg)`,
                                        fontFamily: i % 2 === 0 ? 'Georgia, serif' : 'Impact, sans-serif',
                                        textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
                                    }}>{letter}</span>
                            ))}
                            <span className="mx-1" />
                            {['T', 'O'].map((letter, i) => (
                                <span key={i}
                                    className="px-1.5 py-1 text-lg font-bold cursor-pointer hover:scale-110 transition-transform"
                                    style={{
                                        background: i === 0 ? '#d4b896' : '#222',
                                        color: i === 0 ? '#000' : '#fff',
                                        transform: `rotate(${(Math.random() - 0.5) * 12}deg)`,
                                        fontFamily: 'serif'
                                    }}>{letter}</span>
                            ))}
                            <span className="mx-1" />
                            {['W', 'A', 'L', 'L', 'E', 'T'].map((letter, i) => (
                                <span key={i}
                                    className="px-1.5 py-1 text-lg font-bold cursor-pointer hover:scale-110 transition-transform"
                                    style={{
                                        background: i % 3 === 0 ? '#8b0000' : i % 3 === 1 ? '#f5e6d3' : '#1a1a1a',
                                        color: i % 3 === 1 ? '#8b0000' : '#fff',
                                        transform: `rotate(${(Math.random() - 0.5) * 12}deg)`,
                                        fontFamily: i % 2 === 0 ? 'Times New Roman, serif' : 'Arial Black, sans-serif'
                                    }}>{letter}</span>
                            ))}
                        </div>

                        {/* Back Button */}
                        <div className="flex justify-center pt-2">
                            <button className="px-6 py-2 text-sm font-bold bg-[#e8e0d0] border-2 border-[#666] rounded flex items-center gap-2 hover:bg-[#d4d0c8] transition-colors shadow-[3px_3px_0_#444]"
                                style={{ fontFamily: 'monospace' }}>
                                <span className="text-lg">←</span> BACK
                            </button>
                        </div>

                        {/* Decorative Tape - Bottom Left */}
                        <div className="absolute -bottom-3 -left-2 w-16 h-6 rotate-12 opacity-80"
                            style={{ background: 'linear-gradient(90deg, #d4b896 0%, #c9a875 100%)', boxShadow: '2px 2px 4px rgba(0,0,0,0.2)' }} />

                        {/* Decorative Tape - Bottom Right */}
                        <div className="absolute -bottom-3 -right-2 w-16 h-6 -rotate-12 opacity-80"
                            style={{ background: 'linear-gradient(90deg, #d4b896 0%, #c9a875 100%)', boxShadow: '2px 2px 4px rgba(0,0,0,0.2)' }} />

                        
                    </div>

                    {/* Creepy Face at Bottom */}
                    <div className="flex justify-center pt-4">
                        <img src="whatass/face-dick.png" alt="face-dick" className='w-20' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
