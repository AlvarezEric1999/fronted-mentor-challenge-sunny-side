import React from 'react'

export const Text = ({title ,description, button,color, order}) => {

    console.log(color)

  return (
    <article className={`px-8 py-8 text-center h-[437px] lg:text-left flex flex-col justify-center sm:h-auto ${order}
     lg:px-[65px]
    `}>
        <h1 className=' font-Fraunces sm:text-[1.25rem]  text-[2rem] lg:px-0  px-8  lg:text-[2.5rem] '> {title} </h1>
        <p className='py-4 font-Barlow text-[1.125rem] leading-[1.875rem] lg:text-[18px]'>{description}</p>
        <div className='' >
            <button className={`font-Fraunces uppercase  after:content-[""]  after:${color} after:block after:h-2  after:relative after:top-[-10px] after:rounded-lg after:-z-10 after:w-[130px]`}>{button}</button>
        </div>
    </article>

    )
}
