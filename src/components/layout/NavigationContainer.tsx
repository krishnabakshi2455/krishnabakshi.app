'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';
import { navigatingAtom } from '@/components/layout/use-custom-router';
import { useAtom } from 'jotai';
import AnimatedLogo from '@/animations/animationlogo/animated-logo';

export function NavigationContainer() {
  const pathname = usePathname();
  const [navigating, setNavigating] = useAtom(navigatingAtom);

  useEffect(() => {
    setNavigating(false);
  }, [pathname]);

  return (
    <>
      {navigating && (
        <div className="fixed left-0 top-0 z-[99999] flex h-screen w-screen items-center justify-center bg-black bg-opacity-60">
          <div className="absolute h-28 w-28 animate-bounce left-20 top-1/3 md:top-72 md:left-1/3 ">
            <AnimatedLogo className='w-fit md:h-28 h-16'/>
          </div>
        </div>
      )} 
    </>
  );
}
