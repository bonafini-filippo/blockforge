'use client';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { CutCornerButton } from '@/components/CutCornerButton';
import { TextButton } from '@/components/TextButton';

const listItems = [
   'Testo del primo punto della sezione features.',
   'Testo del secondo punto della sezione features.',
   'Testo del terzo punto della sezione features.',
];

export const FeaturesGridSection = () => {
   const torusKnotRef = useRef(null);
   const firstHemisphereRef = useRef(null);

   const { scrollYProgress: firstHemispherScrollYProgress } = useScroll({
      target: firstHemisphereRef,
      offset: ['start end', 'end start'],
   });

   const firstHemispherTranslateY = useTransform(
      firstHemispherScrollYProgress,
      [0, 1],
      [50, -50]
   );
   const firstHemispherRotate = useTransform(
      firstHemispherScrollYProgress,
      [0, 1],
      [-20, 10]
   );

   const { scrollYProgress: torusKnotScrollYProgress } = useScroll({
      target: torusKnotRef,
      offset: ['start end', 'end start'],
   });

   const torusKnotTranslateY = useTransform(
      torusKnotScrollYProgress,
      [0, 1],
      [100, -100]
   );
   const torusKnotRotate = useTransform(
      torusKnotScrollYProgress,
      [0, 1],
      [-20, -50]
   );

   const coneRef = useRef(null);
   const secondHemisphereRef = useRef(null);

   const { scrollYProgress: secondHemispherScrollYProgress } = useScroll({
      target: secondHemisphereRef,
      offset: ['start end', 'end start'],
   });

   const secondHemispherTranslateY = useTransform(
      secondHemispherScrollYProgress,
      [0, 1],
      [50, -50]
   );
   const secondHemispherRotate = useTransform(
      secondHemispherScrollYProgress,
      [0, 1],
      [-20, 10]
   );

   const { scrollYProgress: coneScrollYProgress } = useScroll({
      target: coneRef,
      offset: ['start end', 'end start'],
   });

   const coneTranslateY = useTransform(
      coneScrollYProgress,
      [0, 1],
      [100, -100]
   );
   const coneRotate = useTransform(coneScrollYProgress, [0, 1], [12, 45]);

   return (
      <section className='py-24 overflow-x-clip'>
         <div className='container'>
            <div className='flex flex-col gap-56 md:gap-48 lg:gap-80'>
               <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  <div className='col-span-2'>
                     <h2 className='font-heading font-black text-4xl md:text-5xl lg:text-6xl'>
                        Titolo della sezione Features Grid
                     </h2>
                     <p className='text-xl lg:text-2xl text-zinc-400 mt-8'>
                        Paragrafo importantissimo per la seo, inserire molte
                        informazioni qua.
                     </p>
                     <ul className='flex flex-col gap-8 mt-12 '>
                        {listItems.map((item) => (
                           <li key={item} className='flex items-center gap-3'>
                              <div className=' inline-flex flex-shrink-0 justify-center items-center size-8 outline outline-4 -outline-offset-4 rounded-full outline-fuchsia-500/10'>
                                 <div className='size-1.5 bg-fuchsia-500 rounded-full'></div>
                              </div>
                              <span className='text-xl font-bold '>{item}</span>
                           </li>
                        ))}
                     </ul>
                     <div className='flex gap-8 mt-12'>
                        <CutCornerButton>Call to action</CutCornerButton>
                        <TextButton>Call to action 2</TextButton>
                     </div>
                  </div>
                  <div className='hidden md:block'>
                     <div className='relative inline-flex z-0'>
                        <motion.img
                           src='/assets/images/torus-knot.png'
                           alt='torus knot 3d image'
                           className='size-96 max-w-none'
                           ref={torusKnotRef}
                           style={{
                              translateY: torusKnotTranslateY,
                              rotate: torusKnotRotate,
                           }}
                        />
                        <motion.img
                           src='/assets/images/hemisphere.png'
                           alt='hemisphere 3d image'
                           className='absolute size-96 max-w-none top-3/4 -z-10 scale-x-[-1]'
                           ref={firstHemisphereRef}
                           style={{
                              translateY: firstHemispherTranslateY,
                              rotate: firstHemispherRotate,
                           }}
                        />
                     </div>
                  </div>
               </div>

               <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                  <div className='relative hidden md:block'>
                     <div className='absolute right-0'>
                        <motion.img
                           src='/assets/images/cone.png'
                           alt='cone 3d image'
                           className='size-96 max-w-none rotate-12'
                           ref={coneRef}
                           style={{
                              translateY: coneTranslateY,
                              rotate: coneRotate,
                           }}
                        />
                        <motion.img
                           src='/assets/images/hemisphere.png'
                           alt='hemisphere 3d image'
                           className='absolute size-96 max-w-none top-3/4 -z-10'
                           ref={secondHemisphereRef}
                           style={{
                              translateY: secondHemispherTranslateY,
                              rotate: secondHemispherRotate,
                           }}
                        />
                     </div>
                  </div>
                  <div className='col-span-2'>
                     <h2 className='font-heading font-black text-4xl md:text-5xl lg:text-6xl'>
                        Block titolo da scrivere.
                     </h2>
                     <div className='flex flex-col text-xl lg:text-2xl text-zinc-400 mt-6 gap-6'>
                        <p className=''>
                           Lorem, ipsum dolor sit amet consectetur adipisicing
                           elit. Quas, voluptatum. Eius magnam vero, libero
                           dolor nemo neque voluptatum sint fugiat quidem
                           voluptates ab sit delectus et eaque saepe soluta
                           nostrum?
                        </p>
                        <p>
                           Lorem ipsum dolor sit amet consectetur adipisicing
                           elit. Impedit ratione, fugit nostrum assumenda
                           aperiam unde neque minima delectus. Est quis natus
                           voluptas doloremque expedita sint saepe similique a,
                           non voluptatem!
                        </p>
                     </div>

                     <div className='flex gap-8 mt-12'>
                        <CutCornerButton>Inizia</CutCornerButton>
                        <TextButton>Scopri</TextButton>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
