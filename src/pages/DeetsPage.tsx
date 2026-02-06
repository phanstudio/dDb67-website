import { useState } from 'react';
import PaperImg from '../components/paperImg';
import { useNavigate } from 'react-router-dom';

export default function DeetsPage() {
    const [task1Link, setTask1Link] = useState('');
    const [task2Link, setTask2Link] = useState('');
    const navigate = useNavigate()
    const continue_array: number[] = [1.1,0.8,1,1,0.9,0.7,0.7,1.0];
    const [noInviter, setNoInviter] = useState(false)

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
                            {['E','N','T','E','R'].map((letter, i) => (
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
                            {['D', 'E', 'E', 'T', 'S'].map((letter, i) => (
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

                                    <div className="flex justify-between items-center mb-5 ml-2 relative z-20 flex-col md:flex-row">
                                        <p className="text-sm text-gray-800 text-center md:text-left" style={{ fontFamily: "Arial Black, sans-serif" }}>
                                            YOUR X USERNAME (MUST START WITH @):
                                        </p>
                                    </div>

                                    <div className="-mt-6 relative z-10">
                                        <PaperImg
                                        value={task1Link}
                                        onChange={(e) => setTask1Link(e.target.value)}
                                        placeholder="@yourusername"
                                        paperImage="/burntpaper.webp"
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

                                    <div className="flex justify-between items-center mb-4 relative z-20 flex-col md:flex-row text-black">
                                        <p className="text-sm text-center md:text-left" style={{ fontFamily: "Arial Black, sans-serif" }}>
                                            WHO INVITED YOU? (OPTIONAL):
                                        </p>
                                    </div>

                                    <div className="-mt-5 relative z-10">
                                        <PaperImg
                                        value={task2Link}
                                        onChange={(e) => setTask2Link(e.target.value)}
                                        placeholder="@inviterusername"
                                        paperImage="/burntpaper.webp"
                                        />
                                    </div>
                                </div>
                                
                                <div>

                                </div>

                                {/* <p class="font-black uppercase text-sm text-stone-900">YOUR X USERNAME (MUST START WITH @):</p>
                                <input type="text" id="x_username" placeholder="@yourusername"
                                    class="w-full border-4 border-black bg-white p-3 font-bold placeholder:text-stone-500 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-center rounded-md">
                                <div class="error-message" id="username-error">USERNAME MUST START WITH @</div>
                                <div class="error-message" id="username-exists-error" style="display: none;">❌ USERNAME ALREADY REGISTERED!</div>
                                
                                <p class="font-black uppercase text-sm text-stone-900 mt-4">WHO INVITED YOU? (OPTIONAL):</p>
                                <input type="text" id="invitee_username" placeholder="@inviterusername"
                                    class="w-full border-4 border-black bg-white p-3 font-bold placeholder:text-stone-500 focus:outline-none focus:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all text-center rounded-md">
                                <div class="error-message" id="invitee-error">INVITEE MUST START WITH @</div>
                                 */}
                                {/* <div className="flex items-center justify-center p-3 bg-white/80 border-2 border-dashed border-black rounded-lg transform -rotate-0.5 mt-4">
                                    <input type="checkbox" id="no_invitee" className="w-5 h-5 mr-3 accent-black scale-125" > </input>
                                    <label htmlFor="no_invitee" className="font-black text-sm cursor-pointer">I HAVE NO INVITER (FOUND THIS MYSELF)</label>
                                </div> */}

                                <div
                                    className="
                                        flex items-center justify-center p-3
                                        bg-white/80 border-2 border-dashed border-black
                                        rounded-lg transform -rotate-0.5 mt-4
                                    "
                                    >
                                    <input
                                        type="checkbox"
                                        id="no_invitee"
                                        checked={noInviter}
                                        onChange={(e) => setNoInviter(e.target.checked)}
                                        className="w-5 h-5 mr-3 accent-black scale-125"
                                    />
                                    <label
                                        htmlFor="no_invitee"
                                        className="font-black text-black text-sm cursor-pointer"
                                    >
                                        I HAVE NO INVITER (FOUND THIS MYSELF)
                                    </label>
                                </div>
                                
                                {/* <div class="warning bg-white border-3 border-black p-3 rounded-lg font-black text-red-600 text-sm transform rotate-0.5 shadow-[3px_3px_0_#000] mt-3" 
                                    id="invitee-warning" style="display: none;">
                                    ❌ INVITER NOT FOUND! MAKE SURE THEY'RE REGISTERED
                                </div> */}

                                {/* Continue to Wallet Button - Ransom Style */}
                                <div className="flex flex-wrap justify-center py-2 
                                    bg-center bg-no-repeat bg-conic relative rounded-lg
                                    items-baseline border-b-2
                                    border-[#0008]
                                    "
                                    onClick={() => navigate('/task')}
                                    style={{ 
                                        backgroundImage: 'url("paper.webp")',
                                        boxShadow: "inset 0 0 20px rgba(139, 69, 19, 0.3)",
                                    }}
                                >
                                    {['C', 'O', 'N', 'T', 'I', 'N', 'U', 'E'].map((letter, i) => (
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
                                    {['T', 'O'].map((letter, i) => (
                                        <span key={i}
                                            className="
                                                px-0.5 py-0.5 text-lg font-bold cursor-pointer 
                                                hover:scale-110 transition-transform
                                                leading-none 
                                                border-b-2 border-[#0007]
                                            "
                                            style={{
                                                background: i === 0 ? '#d4b896' : '#d4a883',
                                                color: i === 0 ? '#000' : '#f00',
                                                transform: `rotate(${(Math.random() - 0.5) * 6}deg)`,
                                                fontFamily: 'serif',
                                                fontSize: '18px'
                                            }}>{letter}</span>
                                    ))}
                                    <span className="mx-1" />
                                    {['T', 'A', 'S', 'K', 'S'].map((letter, i) => (
                                        <span key={i}
                                            className="px-0.5 py-1 text-lg font-bold 
                                                cursor-pointer hover:scale-110 
                                                transition-transform
                                                leading-none 
                                                border-b-2 border-[#0007]
                                            "
                                            style={{
                                                background: i % 3 === 0 ? '#8b0000' : i % 3 === 1 ? '#f5e6d3' : '#1a1a1a',
                                                color: i % 3 === 1 ? '#8b0000' : '#fff',
                                                transform: `rotate(${(Math.random() - 0.5) * 12}deg)`,
                                                fontFamily: i % 2 === 0 ? 'Times New Roman, serif' : 'Arial Black, sans-serif',
                                                fontSize: `${25*continue_array[i]}px`
                                            }}>{letter}</span>
                                    ))}
                                </div>

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
                                        onClick={() => navigate('/')}
                                        // style={{ fontFamily: "Valentine Delight" }}
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
        </div>
    )
}
