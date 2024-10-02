'use client'
import gsap from 'gsap';
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';

const Initializer = () => {
    const initial = useRef(null);
    const letters = useRef([]);
    useGSAP(() => {
        const initialTimeline = gsap.timeline();

        initialTimeline.from(letters.current.filter(Boolean), {
            duration: 0.3,
            opacity: 0,
            stagger: 0.2,
            ease: 'power2.inOut'
        });

        initialTimeline.to(initial.current, {
            duration: 1,
            top: '-150%',
            ease: 'power2.inOut'
        })

    });

    return (
        <div ref={initial} className='border-b-4  z-[99999] fixed top-[0%] left-0 w-full h-screen bg-white text-slate-200'>
            <div className='flex items-center justify-center h-screen relative'>
                <div className='absolute -top-24 -left-44 w-96 h-96 bg-accent-primary blur-[120px] rounded-full ' />
                <div className='absolute -bottom-24 -right-44 w-96 h-96 bg-accent-primary blur-[120px] rounded-full ' />
                <div className='flex flex-col items-center'>
                    <Image src='/logo.png' width={150} height={150} alt='logo' className='' />
                    <div>
                        {Array.from('Soni Interiors').map((item, index) => (
                            <span className={`text-black uppercase tracking-[6px] font-medium`} ref={(el) => (letters.current[index] = el)} key={index}>
                                {item}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Initializer;
