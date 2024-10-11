'use client';
import { twMerge } from 'tailwind-merge';
import { useEffect, useState } from 'react';
import { Card } from '@/components/Card';
import Image from 'next/image';

const cardData = [
   {
      image: '/assets/images/pill.png',
      title: 'Card 1',
      description:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odio incidunt fugiat nostrum, explicabo sit tempore eaque tenetur!',
      color: 'fuchsia',
      link: '',
   },
   {
      image: '/assets/images/cuboid.png',
      title: 'Card 2',
      description:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odio incidunt fugiat nostrum, explicabo sit tempore eaque tenetur!',
      color: 'lime',
      link: '',
   },
   {
      image: '/assets/images/cone.png',
      title: 'Card 3',
      description:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odio incidunt fugiat nostrum, explicabo sit tempore eaque tenetur!',
      color: 'cyan',
      link: '',
   },
   {
      image: '/assets/images/icosahedron.png',
      title: 'Card 4',
      description:
         'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi odio incidunt fugiat nostrum, explicabo sit tempore eaque tenetur!',
      color: 'violet',
      link: '',
   },
];

export const FeaturesCardsSection = () => {
   const [selectedDotIndex, setSelectedDotIndex] = useState(0);
   const [isHovered, setIsHovered] = useState(false);
   useEffect(() => {
      if (isHovered) return;
      const timeout = setTimeout(() => {
         setSelectedDotIndex((curr) =>
            curr === cardData.length - 1 ? 0 : curr + 1
         );
      }, 2000);
      return () => {
         clearTimeout(timeout);
      };
   }, [selectedDotIndex, isHovered]);
   return (
      <section className='py-24 overflow-x-clip md:-mt-28'>
         <div className='container'>
            <h2 className='font-heading font-black text-4xl text-center md:text-5xl lg:text-6xl'>
               Qua bisogna inserire il titolo della sezione
            </h2>
            <div className='mt-36 lg:mt-48 flex'>
               <div className='flex flex-none gap-8'>
                  {cardData.map(
                     (
                        { image, title, description, color, link },
                        cardIndex
                     ) => (
                        <div
                           key={cardIndex}
                           className='inline-flex transition-all duration-500'
                           onMouseEnter={() => {
                              setIsHovered(true);
                           }}
                           onMouseLeave={() => {
                              setIsHovered(false);
                           }}
                           style={{
                              transform: `translateX(calc((-100% - 2rem)*${selectedDotIndex}))`,
                           }}
                        >
                           <Card
                              key={title}
                              className='max-w-xs md:max-w-md'
                              color={color}
                              buttonText='Scopri di più'
                              buttonLink={link}
                           >
                              <div className='flex justify-center -mt-28'>
                                 <div className='inline-flex relative'>
                                    <div className='absolute h-4 w-full group-hover:bg-zinc-950/30 trnasition duration-300 top-[calc(100%+16px)] bg-zinc-950/70 rounded-[100%] [mask-image:radial-gradient(closest-side,black,transparent)]'></div>
                                    <Image
                                       width={300}
                                       height={300}
                                       src={image}
                                       alt='pill 3d image'
                                       className='size-40 group-hover:-translate-y-6 transition duration-300 '
                                    />
                                 </div>
                              </div>
                              <h3 className='font-heading font-black text-3xl mt-12'>
                                 {title}
                              </h3>
                              <p className='text-lg text-zinc-400 mt-4'>
                                 {description}
                              </p>
                           </Card>
                        </div>
                     )
                  )}
               </div>
            </div>

            <div className='flex justify-center mt-10 '>
               <div className='bg-zinc-950 inline-flex gap-4 p-2.5 rounded-full'>
                  {cardData.map(({ title }, cardIndex) => (
                     <div
                        key={title}
                        className={twMerge(
                           'size-2.5 bg-zinc-500 rounded-full cursor-pointer',
                           cardIndex === selectedDotIndex && 'bg-zinc-300'
                        )}
                        onClick={() => {
                           setSelectedDotIndex(cardIndex);
                        }}
                     ></div>
                  ))}
               </div>
            </div>
         </div>
      </section>
   );
};
