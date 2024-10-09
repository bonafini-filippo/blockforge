'use client';
import { useRef } from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { Hexagon } from '@/components/Hexagon';
import { Circle } from '@/components/Circle';
import { CutCornerButton } from '@/components/CutCornerButton';

export const CallToActionSection = () => {
   const sectionRef = useRef(null);

   const { scrollYProgress } = useScroll({
      target: sectionRef,
      offset: ['start end', 'end start'],
   });

   const rotate = useTransform(scrollYProgress, [0, 1], [45, -45]);

   return (
      <section className='py-60 overflow-hidden' ref={sectionRef}>
         <div className='container'>
            <div className='relative'>
               {/* ESAGONI */}
               <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <Hexagon className='size-[700px]' size={700} />
               </div>
               <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <Hexagon
                     className='size-[1100px]'
                     size={1100}
                     reverse
                     duration={50}
                  />
               </div>
               {/* CERCHI  */}
               <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <Circle className='absolute left-0 -top-[400px]' animate>
                     <motion.img
                        src='/assets/images/cuboid.png'
                        alt='cuboid 3d image'
                        className='size-[140px]'
                        style={{
                           rotate,
                        }}
                     />
                  </Circle>
               </div>
               <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                  <Circle
                     className='absolute -left-[600px] -top-[70px]'
                     animate
                  >
                     <motion.img
                        src='/assets/images/cylinder.png'
                        alt='cylinder 3d image'
                        className='size-[140px]'
                        style={{
                           rotate,
                        }}
                     />
                  </Circle>
               </div>

               {/* CONTENUTO  */}
               <h2 className='font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center'>
                  Iniai a lavorare <span className='block'>con noi</span>
               </h2>
               <p className='text-xl lg:text-2xl text-zinc-400 text-center mt-8 max-w-sm mx-auto'>
                  piccolo paragrafo da inserire qua
               </p>
               <div className='flex justify-center mt-12'>
                  <CutCornerButton>Richiedi un preventivo</CutCornerButton>
               </div>
            </div>
         </div>
      </section>
   );
};
