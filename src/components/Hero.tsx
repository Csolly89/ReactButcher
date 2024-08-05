

function Hero() {
    return (
        <>
            <div className='w-full h-[65vh] mt-[6rem] bg-gradient-to-t from-background-100 to-primary-500 overflow-hidden relative'>
            {/* img box */}
            <div className='bg-gradient-to-r from-background-50 to-transparent w-full h-full content-normal absolute top-0 left-0 opacity-100 z-10'></div>
            <div className='h-full '>
                <img src={"/assets/Tallgrass_beef.png"} alt="" className='object-cover object-left scale-x-[-1] ' />
            </div>
            {/* text box */}
            <div className='font-Body text-text-950'>
                <h1 className=''>Barn & Blade Butchers</h1>
                <p className=''>Freshness you can trust, from our farms to your home.</p>
            </div>
        </div>
        </>
    );
}

export default Hero;