 export const LandingPage = () => {
    return (
        <div className="bg-dark-blue h-screen w-screen relative scroll-children z-10">
            <div className="w-full h-screen text-white box-border flex flex-col justify-between pt-0 pb-36 px-6 md:pb-10 md:px-32">
                <div className="h-full flex flex-col mt-12 justify-center ">
                    <h1 className="text-xl md:text-lg text-gray-500 uppercase mb-6 font-normal animate-fade-in delay-300">Jacob Caldwell</h1>
                    <h2 className="text-3xl md:text-4xl font-bold pb-4 animate-slide-in delay-100">Product Development Engineer from Memphis, TN</h2>
                    <h2 className="text-3xl md:text-4xl font-bold pb-4 animate-slide-in delay-100">Currently @ <a className="hover:text-green-500" href="https://abb.com">ABB</a></h2>
                </div>
                <span className="animate-bounce">↓ scroll</span>
            </div>
        </div>
        
    )
}