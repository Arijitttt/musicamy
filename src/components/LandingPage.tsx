import Link from "next/link"
import { Spotlight } from "./ui/Spotlight"
import { Button } from "./ui/moving-border";
import { BackgroundBeams } from "./ui/background-beams";
function LandingPage() {
    return (
        <>
            <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col justify-center items-center relative overflow-hidden mx-auto py-10 md:py-0">
                <Spotlight
                    className="-top-40 left-0 md:left-60 md:-top-20"
                    fill="violet"
                />
                <BackgroundBeams/>
                <div className=" p-4 relative z-10 w-full text-center">
                    <h1 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-pink-500 to-violet-500">Discover Your Music</h1>
                    <p
                        className="mt-4 font-normal text-base md:text-lg text-pink-500 max-w-lg mx-auto">
                        Explore a wide range of genres, listen to your favorite artists, and create playlists tailored to your mood.
                    </p>
                    <div className="mt-4">
                        <Link href={"/explore"}>
                            <Button borderRadius="1.75rem"
                            className="bg-white dark:bg-black dark:text-white border-neutral-200 dark:border-slate-800"
                            >Explore</Button>
                        </Link>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LandingPage
