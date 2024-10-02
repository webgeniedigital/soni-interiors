import React from 'react'
import { qwitcher } from "../utils/font";
import { RiBuilding2Line, RiCalendarTodoLine, RiPencilRulerLine, RiSearch2Line } from 'react-icons/ri';

const WorkFlow = () => {
    const iconStyle = "text-7xl aspect-square rounded-full border p-4 text-accent-primary";
    let workFlw = [
        {
            icon: <RiPencilRulerLine className={iconStyle} />,
            title: "Design",
            description: ["Focus on need of client", "Anticipate Creative Outcomes"]
        },
        {
            icon: <RiCalendarTodoLine className={iconStyle} />,
            title: "Preparation",
            description: [
                "ARRANGEMENTS OF SPECIALISED CONTRACTING TEAM", "AFFORDABLE MATERIALS"]
        },
        {
            icon: <RiBuilding2Line className={iconStyle} />,
            title: "Construction",
            description: ["FOCUS ON DETAILS AND FINISHING", "EXECUTION AS PER DESIGN"]
        },
        {
            icon: <RiSearch2Line className={iconStyle} />,
            title: "Inspection",
            description: ["INSPECTION OF DESIGN EXECUTION", "TO MAKE SURE WORK IS IN GOOD SPEED"]
        },
    ];

    return (
        <>
            <div className='text-3xl md:text-5xl text-center'>
                <h2>WORKFLOW</h2>
                <p className={`${qwitcher.className} text-accent-primary font-bold `}>What We Follow</p>
            </div>
            <section className=' grid  grid-cols-1  md:grid-cols-2 md:grid-rows-2 gap-8 max-w-4xl  my-0 mx-auto px-[1rem] md:px-0'>

                {
                    workFlw.map((e, i) => (
                        <div key={i} className='bg-white border shadow text-[#737373] relative flex items-center justify-center flex-col gap-5 text-center md:py-[5vw] py-[8vw] '>
                            {e.icon}
                            <span>
                                <h3 className='text-xl font-semibold my-1'>{e.title}</h3>
                                <ul className='list-disc  list-inside px-6 text-sm  uppercase max-w-[350px]'>
                                    <li className=''>{e.description[0]}</li>
                                    <li>{e.description[1]}</li>
                                </ul>
                            </span>
                            <p className='p-1 rounded-full bg-black text-white w-8 h-8 absolute -top-2 -left-2'>{i + 1}</p>
                        </div>
                    ))
                }
            </section>
        </>
    )
}

export default WorkFlow