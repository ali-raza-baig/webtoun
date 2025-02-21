import React from 'react'

const Button = () => {
    return (
        <>
            <button className="relative inline-block cursor-pointer outline-none border-0 align-middle text-decoration-none bg-transparent p-0 text-inherit font-inherit w-48 h-auto group">
                <span className="relative block w-12 h-12 font-bold bg-blue-700 rounded-[1.625rem] shadow-[0_0_5px_1px_white] transition-all duration-[0.45s] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:w-full group-hover:shadow-[0_0_10px_2px_white] group-active:scale-90 group-active:shadow-[0_0_5px_0.5px_white]">
                    <span className="absolute top-0 bottom-0 my-auto left-[0.625rem] w-[1.125rem] h-[0.125rem] bg-none transition-all duration-[0.45s] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:translate-x-[8.7rem] group-active:translate-x-[9.5rem] after:content-[''] after:absolute after:top-[-0.29rem] after:right-[0.0625rem] after:w-[0.625rem] after:h-[0.625rem] after:border-t-[0.125rem] after:border-r-[0.125rem] after:border-white after:rotate-45" />
                </span>
                <span className="absolute top-0 left-0 right-0 bottom-0 px-0 py-3 ml-[1.85rem] text-blue-700 font-bold leading-[1.6] text-center uppercase transition-all duration-[0.45s] ease-[cubic-bezier(0.65,0,0.076,1)] group-hover:-translate-x-[1.7rem] group-hover:text-white group-active:text-[rgba(255,255,255,0.459)]">Learn More</span>
            </button>
        </>
    )
}

export default Button