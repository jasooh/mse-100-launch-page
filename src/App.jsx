import './App.css'
// Icons
import {RiSpeedUpFill} from "react-icons/ri";
import {GoDownload} from "react-icons/go";

// Images
import DashboardPreview from './assets/DashboardPreview.png'
import DashboardPreview2 from './assets/DashboardPreview2.png';
import GeminiLogo from './assets/Google_Gemini_logo.png';
import KanbanPreview from './assets/KanbanPreview.png';

function App() {
    return (
        <>
            <main
                className="p-4 pt-5 sm:pl-6 md:pl-8 lg:pl-10 xl:pl-12 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
                <RiSpeedUpFill className="size-40 fill-orange-500"/>
                <header className="flex flex-row mb-20">
                    <section className="flex flex-col gap-4 w-fit">
                        <h1>
                            <span className="text-orange-500">Focus</span>Forge
                        </h1>
                        <h2 className="w-[75%]">Forge better focus and productivity with this powerful study tool.</h2>
                        <p className="w-full text-sm sm:text-md sm:w-[80%]">
                            Streamline your studies with our Excel Study Planner. Organize schedules, track deadlines,
                            and prioritize tasks effortlessly. Boost productivity and make every study session count!
                        </p>
                        <button
                            className="w-1/3 btn btn-xs sm:btn-sm md:btn-md lg:btn-lg hover:bg-orange-400 hover:text-white flex flex-nowrap">Download
                            <GoDownload className="size-3.5 md:size-6"/>
                        </button>
                    </section>
                    <div className="w-[90%] h-full overflow-hidden opacity-60 hidden sm:block">
                        <img src={DashboardPreview} alt="Dashboard preview"
                             className="w-full h-full object-cover pointer-events-none rounded-l-2xl border-orange-500 border-l-8 border-t-4"/>
                    </div>
                </header>
                {/* Info sections */}
                <div className="flex w-full flex-col border-opacity-50 sm:pr-8">
                    <div className="divider mb-10 text-orange-400">HOW IT WORKS</div>
                    <div className="p-4 card bg-base-200 rounded-box grid h-fit place-items-center text-base">
                        Managing your time as a busy student can feel overwhelming with looming deadlines,
                        extracurriculars, and countless meetings. Most scheduling tools out there are either too rigid
                        or overly complex, making it hard to find a solution that truly fits your needs.
                        <br/> <br/>
                        <section className="w-full">
                            <div className="flex flex-col items-center">
                                <div className="w-[90%] h-full overflow-hidden opacity-60 md:w-[70%]">
                                    <img src={DashboardPreview2} alt="Dashboard preview 2"
                                         className="w-full h-full object-cover pointer-events-none rounded-2xl border-orange-500 border-4"/>
                                </div>
                                <p className="text-xs italic text-gray-400 sm:text-sm">
                                    FocusForge is your ultimate solution for streamlined and efficient task planning
                                </p>
                            </div>
                        </section>
                        <br/>
                        That's where our Excel Planner comes in. Designed with flexibility and simplicity in mind, it
                        adapts to your unique schedule while staying completely transparent. Customize it effortlessly
                        to create a planner that works for you—without unnecessary complexity.
                    </div>
                </div>
                {/* A.I */}
                <div className="flex w-full flex-col border-opacity-50 sm:pr-8">
                    <div className="divider my-10 text-orange-400">A.I AT YOUR FINGERTIPS</div>
                    <div className="p-4 card bg-base-200 rounded-box grid h-fit text-base">
                        <section className="flex flex-col sm:flex-row items-center gap-5">
                            <p className="w-full sm:w-1/2">
                                Users can receive AI-generated advice by clicking the "Advice" button. The AI analyzes
                                various factors, including grades, courses, upcoming tasks, deadlines, and user
                                preferences, to provide personalized recommendations.
                            </p>
                            <div
                                className="w-full sm:w-[50%] h-full overflow-hidden opacity-60 flex justify-center sm:justify-end">
                                <img src={GeminiLogo} alt="Dashboard preview"
                                     className="w-3/4 h-full pointer-events-none rounded-xl border-orange-500 border-2 p-4"/>
                            </div>
                        </section>
                    </div>
                </div>
                {/* Specifications */}
                <div className="flex w-full flex-col border-opacity-50 sm:pr-8 mb-40">
                    <div className="divider my-10 text-orange-400">PRODUCTIVITY REFORGED</div>
                    <div className="p-4 card bg-base-200 rounded-box grid h-fit text-base">
                        <section className="flex flex-col sm:flex-row items-center gap-5">
                            <div
                                className="w-full sm:w-[50%] h-full overflow-hidden opacity-60 flex justify-center sm:justify-start">
                                <img src={KanbanPreview} alt="Dashboard preview"
                                     className="w-3/4 h-full pointer-events-none rounded-xl border-orange-500 border-2 p-4"/>
                            </div>
                            <p className="w-full sm:w-1/2">
                                Users can efficiently manage their large workloads through an intuitive, interactive
                                system that includes a built-in Kanban board, task management tools, a calendar, and
                                visualized data with graphs.
                            </p>
                        </section>
                    </div>
                </div>
            </main>
            <footer className="footer bg-base-200 text-base-content p-10">
                <aside>
                    <RiSpeedUpFill className="size-20 rotate-12 fill-orange-500"/>
                    <p>
                        FocusForge Industries Ltd (Parody)
                        <br/>
                        Providing productive solutions since the dawn of MSE 100.
                        <br/>
                        Made with ❤️ by MSE: 100 - Group 1, 2024
                    </p>
                </aside>
            </footer>
        </>
    )
}

export default App
