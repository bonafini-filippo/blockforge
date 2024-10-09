'use client';
import { Circle } from '@/components/Circle';
import { CutCornerButton } from '@/components/CutCornerButton';
import { Hexagon } from '@/components/Hexagon';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';

export const HeroSection = () => {
   const cubeRef = useRef(null);
   const icosahedronRef = useRef(null);
   const torusRef = useRef(null);
   const cuboidRef = useRef(null);

   const { scrollYProgress: cubeScrollYProgress } = useScroll({
      target: cubeRef,
      offset: ['start end', 'end start'],
   });
   const { scrollYProgress: icosahedronScrollYProgress } = useScroll({
      target: icosahedronRef,
      offset: ['start end', 'end start'],
   });
   const { scrollYProgress: torusScrollYProgress } = useScroll({
      target: torusRef,
      offset: ['start end', 'end start'],
   });
   const { scrollYProgress: cuboidScrollYProgress } = useScroll({
      target: cuboidRef,
      offset: ['start end', 'end start'],
   });

   const cubeRotate = useTransform(cubeScrollYProgress, [0, 1], [100, -45]);
   const icosahedronRotate = useTransform(
      icosahedronScrollYProgress,
      [0, 1],
      [30, -45]
   );
   const torusRotate = useTransform(torusScrollYProgress, [0, 1], [20, -20]);
   const cuboidRotate = useTransform(cuboidScrollYProgress, [0, 1], [20, -40]);

   return (
      <section className='py-24 md:py-52 overflow-x-clip'>
         <div className='container'>
            <div className='relative z-10'>
               <p className='uppercase font-extrabold text-center text-zinc-500 tracking-wider'>
                  Realizza il sito per la tua azienda
               </p>
               <h1 className='font-heading font-black text-5xl md:text-6xl lg:text-7xl text-center mt-4 max-w-3xl mx-auto'>
                  Spostati nel digintale con Webcraft
               </h1>
               <p className='text-center text-xl md:text-2xl text-zinc-400 mt-6 max-w-xl mx-auto'>
                  Scopri con noi la soluzione migliore per te e per la tua
                  attività{' '}
               </p>
            </div>

            <div className='flex justify-center mt-10'>
               <CutCornerButton>Scopri di più</CutCornerButton>
            </div>

            <div className='flex justify-center mt-24'>
               <div className='inline-flex relative z-0'>
                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                     <Hexagon className='size-[1100px]' size={1100} />
                  </div>
                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                     <Hexagon
                        className='size-[1800px]'
                        size={1800}
                        reverse
                        duration={40}
                     />
                  </div>
                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                     <Circle
                        className='absolute left-[200px] -top-[900px]'
                        animate
                     >
                        <motion.img
                           src='/assets/images/cube.png'
                           style={{
                              rotate: cubeRotate,
                           }}
                           alt='cube 3d image'
                           className='size-[140px]'
                           ref={cubeRef}
                        />
                     </Circle>
                  </div>
                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                     <Circle
                        className='absolute left-[200px] top-[270px]'
                        animate
                     >
                        <motion.img
                           src='/assets/images/cuboid.png'
                           alt='cuboid 3d image'
                           ref={cubeRef}
                           style={{
                              rotate: cuboidRotate,
                           }}
                           className='size-[140px]'
                        />
                     </Circle>
                  </div>
                  <div className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                     <Circle
                        className='absolute -left-[600px] -top-[80px]'
                        animate
                     >
                        <motion.img
                           src='/assets/images/torus.png'
                           alt='torus 3d image'
                           ref={torusRef}
                           style={{
                              rotate: torusRotate,
                           }}
                           className='size-[140px]'
                        />
                     </Circle>
                  </div>
                  <motion.div
                     className='inline-flex'
                     style={{
                        rotate: icosahedronRotate,
                     }}
                     ref={icosahedronRef}
                  >
                     <Image
                        width={300}
                        height={300}
                        src='/assets/images/icosahedron.png'
                        alt=''
                        className='absolute w-[calc(100%+100px)] max-w-none -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 saturate-[10%] brightness-[4%] hue-rotate-[240deg]'
                     />
                     <Image
                        width={300}
                        height={300}
                        src='/assets/images/icosahedron.png'
                        alt='icosahedron 3d image'
                        className='w-[500px]'
                     />
                  </motion.div>
               </div>
            </div>
            <div className='flex justify-center flex-col items-center mt-40 md:mt-80 gap-4'>
               <div className='h-10 w-5 outline outline-[6px] outline-fuchsia-500/10 inline-flex rounded-full justify-center pt-2'>
                  <motion.div
                     animate={{
                        translateY: 12,
                        opacity: 0.2,
                     }}
                     transition={{
                        duration: 2,
                        ease: 'linear',
                        repeat: Infinity,
                        repeatType: 'loop',
                     }}
                     className='h-3 w-1 bg-fuchsia-500 rounded-full'
                  ></motion.div>
               </div>
               <p className='uppercase text-zinc-500 font-extrabold tracking-wider'>
                  Scroll
               </p>
            </div>
         </div>
      </section>
   );
};
