import React from 'react'

// font 54 px
const Heading1 = ({ text, color }) => {
    return (
        <h1 className={`${color} text-center md:text-start text-4xl xl:text-6xl font-semibold leading-tight`}>
            {text}
        </h1>
    )
}

// font 48px
const Heading2 = ({ text, align,width }) => {
    return (
        <h2 className={`text-2xl sm:text-3xl md:text-5xl font-semibold  ${width} leading-tight ${align}`}>{text}</h2>
    )
    // md: w - 8 / 12
}

// const 38px
const Heading3 = ({ text }) => {
    return (
        <h3 className='text-2xl lg:text-[38px] text-center md:text-start font-semibold leading-snug w-full'>{text}</h3>
    )
}

// const 24px
const Heading5 = ({ text }) => {
    return (
        <h4 className=" font-medium text-2xl  my-4">{text}</h4>

    )
}


export {
    Heading1,
    Heading2,
    Heading3,
    Heading5
}