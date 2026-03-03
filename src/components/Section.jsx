import React from 'react'

const Section = ({ id, children }) => {

    return (
        <section
            id={id}
            className={`min-h-[50vh] w-full flex  justify-center items-center  transition-colors duration-300 `}
        >
            {/* <h1 className="text-5xl font-bold mb-6 capitalize">{title}</h1> */}
            <div className='w-full'>{children}</div>
            {/* <div className="max-w-2xl text-center text-lg">{children}</div> */}
        </section>
    )
}

export default Section
