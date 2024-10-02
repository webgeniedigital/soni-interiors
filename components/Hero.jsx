'use client'
import React, { useCallback, useEffect, useRef } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import gsap from 'gsap'
import Link from 'next/link'

export default function Hero() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ stopOnInteraction: true })])
    const animationDivRef = useRef(null)

    useEffect(() => {
        if (!emblaApi) return;

        emblaApi.on('scroll', onSlideChange);

        function onSlideChange() {
            const h1Elements = animationDivRef.current.querySelectorAll('h1.word');
            let t1 = gsap.timeline();
            t1.fromTo(
                h1Elements,
                {
                    y: 100,
                    opacity: 0,
                    stagger: {
                        each: 0.2
                    },
                },
                {
                    y: 0,
                    opacity: 1,
                }
            );
        };

        return () => {
            emblaApi.off('scroll', onSlideChange);
        };
    }, [emblaApi]);


    return (
        <section className={`px-[1rem]`}>
            <div className="embla relative">
                <div className="embla__viewport" ref={emblaRef}>
                    <div className="embla__container" ref={animationDivRef}>
                        {
                            [
                                {
                                    title: 'Commercial',
                                    image: 'https://images.unsplash.com/photo-1631679706909-1844bbd07221?q=80&w=1992&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                },
                                {
                                    title: 'Residential',
                                    image: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
                                },
                                
                            ].map((item, index) => (
                                <div className="embla__slide relative" key={index}>
                                    <Image src={item.image} width={2000} height={2000} alt='banner' className='w-full aspect-[16/12]  md:aspect-video brightness-75 object-cover' />
                                    <div className='overflow-hidden absolute top-1/2 -translate-y-1/2 md:left-16 left-1/2 md:-translate-x-0 -translate-x-1/2 w-full md:w-auto md:px-0 px-4 '>

                                        <h1 className='word md:text-[6vw] text-[8vw] text-center md:text-start text-white drop-shadow-xl ' key={index} > {item.title} </h1>
                                        <div className='items-center gap-6 relative z-[999] hidden md:flex'>
                                            <Link href="tel:+919820325038" className='bg-accent-primary px-8 py-4 rounded-full text-white text-xl hover:bg-accent-secondary/75 transition-all' >Call Now
                                            </Link>
                                            <Link href="/portfolio" className='flex items-center gap-2 bg-accent-secondary px-8 py-4 rounded-full text-white text-xl icon_hover hover:bg-accent-primary/75 transition-all' >Portfolio
                                                <ArrowRight className='right_icon' />
                                            </Link>
                                        </div>

                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>

                <div className='flex items-center justify-center gap-8 pt-4 md:hidden w-full'>
                    <Link href="tel:+919820325038" className='bg-accent-primary px-4 py-2 rounded-full text-white '>Call Now</Link>
                    <Link href="/portfolio" className='bg-accent-secondary px-4 py-2 rounded-full text-white '>Portfolio </Link>
                </div>
            </div>
        </section>
    )
}
