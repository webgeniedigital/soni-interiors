import Image from 'next/image'
import React from 'react'

const AboutIntro = ({ name, designation, description, image, styles }) => {
    return (
        <div className={`w-full rounded-3xl p-4 md:bg-none ${styles}  md:p-10 flex items-center justify-around flex-col-reverse md:flex-row   max-w-screen-xl gap-16 `}>
            <div className="max-w-screen-sm" >

                <h1 className="text-gray-600 text-[6vw] md:text-[4vw] text-center md:text-start  font-semibold ">
                    <div dangerouslySetInnerHTML={{
                        __html:
                            name.split(" ").join('<br className="md:block hidden">')
                    }
                    } />
                </h1>
                <div className="flex items-center gap-4 text-accent-primary font-semibold ">
                    <p className='text-nowrap'> {designation} </p>
                    <div className="w-full h-[1px] bg-accent-primary " />
                </div>
                <p className="max-w-screen-sm text-gray-600">
                    {description}
                </p>
            </div>
            <Image src={image} alt="about" width={400} height={400} className="p-0" />
        </div>
    )
}

export default AboutIntro