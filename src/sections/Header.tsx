import { CutCornerButton } from '@/components/CutCornerButton';
import Image from 'next/image';

export const HeaderSection = () => {
   return (
      <header className='sticky top-0 z-40 bg-zinc-900/50 backdrop-blur-lg'>
         <div className='container'>
            <div className='flex justify-between items-center h-24 md:h-28'>
               {/* LOGO  */}
               <div>
                  <Image
                     width={200}
                     height={200}
                     src='/assets/images/logo.svg'
                     alt='Webcraft Logo'
                  />
               </div>

               <div className='flex items-center gap-4'>
                  {/* CALL TO ACTION */}
                  <CutCornerButton className='hidden md:inline-flex'>
                     Scopri
                  </CutCornerButton>

                  {/* HAMBURGER MENU  */}
                  <div className='size-10 relative'>
                     <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <div className='w-5 h-0.5 bg-zinc-300 -translate-y-1'></div>
                     </div>
                     <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <div className='w-5 h-0.5 bg-zinc-300 translate-y-1'></div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </header>
   );
};
