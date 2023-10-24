import BouncingBalls from './bouncing-balls'

export default function LoadingScreen() {
    return (
        <main className="w-screen h-screen overflow-hidden flex flex-col gap-4 items-center justify-center ">
            {/* <p className='font-normal text-neutral-500 text-center animate-pulse text-lg'>Hang on </p> */}
            <BouncingBalls />
        </main>
    )
}