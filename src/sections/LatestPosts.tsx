'use client';
import { twMerge } from 'tailwind-merge';
import { useScroll, motion, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/Card';
import { getPostColorFromCategory } from '@/utils/postUtils';
import Tag from '@/components/Tag';
import { CutCornerButton } from '@/components/CutCornerButton';

const latestPosts = [
   {
      title: 'Blockchain in Healthcare: A New Frontier',
      description:
         'Discover how blockchain can revolutionize the healthcare industry by enhancing data security and streamlining patient records.',
      pubDate: '2024-08-12',
      category: 'Innovation',
      slug: 'blockchain-in-healthcare-new-frontier',
      author: {
         name: 'Emily Davis',
         title: 'Lead Researcher - BlockLink',
         image: '/assets/images/becky.jpg',
      },
   },
   {
      title: 'Blockchain in Healthcare: A New Frontier',
      description:
         'Discover how blockchain can revolutionize the healthcare industry by enhancing data security and streamlining patient records.',
      pubDate: '2024-08-12',
      category: 'Sustainability',
      slug: 'blockchain-in-healthcare-new-frontier',
      author: {
         name: 'Emily Davis',
         title: 'Lead Researcher - BlockLink',
         image: '/assets/images/becky.jpg',
      },
   },
   {
      title: 'Blockchain in Healthcare: A New Frontier',
      description:
         'Discover how blockchain can revolutionize the healthcare industry by enhancing data security and streamlining patient records.',
      pubDate: '2024-08-12',
      category: 'Security',
      slug: 'blockchain-in-healthcare-new-frontier',
      author: {
         name: 'Emily Davis',
         title: 'Lead Researcher - BlockLink',
         image: '/assets/images/becky.jpg',
      },
   },
   {
      title: 'Blockchain in Healthcare: A New Frontier',
      description:
         'Discover how blockchain can revolutionize the healthcare industry by enhancing data security and streamlining patient records.',
      pubDate: '2024-08-12',
      category: 'Competitive',
      slug: 'blockchain-in-healthcare-new-frontier',
      author: {
         name: 'Emily Davis',
         title: 'Lead Researcher - BlockLink',
         image: '/assets/images/becky.jpg',
      },
   },
];

export const LatestPostsSection = () => {
   const targetRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: targetRef,
      offset: ['start end', 'start center'],
   });
   const marginTop = useTransform(scrollYProgress, [0, 1], [0, 64]);
   return (
      <section className='py-60'>
         <div className='container'>
            <div className='max-w-3xl mx-auto'>
               <h2 className='font-heading font-black text-4xl md:text-5xl lg:text-6xl text-center'>
                  Titolo sezione blog
               </h2>
               ∂
               <p className='text-xl lg:text-2xl text-center text-zinc-400 mt-8'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Incidunt mollitia necessitatibus a alias, fugiat ducimus rerum
                  quisquam.
               </p>
            </div>

            <div className='mt-16 md:mt-28 grid grid-cols-1 md:grid-cols-2 gap-8'>
               <div className='flex flex-col gap-8'>
                  {latestPosts.map(
                     ({ title, description, category }, postIndex) => (
                        <Card
                           key={postIndex}
                           buttonText='Leggi altro'
                           color={getPostColorFromCategory(category)}
                           className={twMerge(
                              (postIndex === 1 || postIndex === 3) &&
                                 'md:hidden'
                           )}
                        >
                           <div>
                              <Tag color={getPostColorFromCategory(category)}>
                                 {category}
                              </Tag>
                              <h3 className='font-heading font-black text-3xl mt-3'>
                                 {title}
                              </h3>
                              <p className='text-lg text-zinc-400 mt-6'>
                                 {description}
                              </p>
                           </div>
                        </Card>
                     )
                  )}
               </div>
               <motion.div
                  className='hidden md:flex flex-col gap-8 mt-16'
                  style={{
                     marginTop,
                  }}
                  ref={targetRef}
               >
                  {latestPosts.map(
                     ({ title, description, category }, postIndex) => (
                        <Card
                           key={postIndex}
                           buttonText='Leggi altro'
                           color={getPostColorFromCategory(category)}
                           className={twMerge(
                              (postIndex === 0 || postIndex === 2) &&
                                 'md:hidden'
                           )}
                        >
                           <div>
                              <Tag color={getPostColorFromCategory(category)}>
                                 {category}
                              </Tag>
                              <h3 className='font-heading font-black text-3xl mt-3'>
                                 {title}
                              </h3>
                              <p className='text-lg text-zinc-400 mt-6'>
                                 {description}
                              </p>
                           </div>
                        </Card>
                     )
                  )}
               </motion.div>
            </div>

            <div className='flex justify-center mt-48  md:32'>
               <CutCornerButton>Vedi tutti i post</CutCornerButton>
            </div>
         </div>
      </section>
   );
};
