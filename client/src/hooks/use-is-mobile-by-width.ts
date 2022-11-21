import { useEffect, useState } from 'react';
import { fromEvent } from 'rxjs';

import { MediaQuery } from '@/constants/media-queries';

// ~~~~~~ Component

export const useIsMobileByWidth = () => {
  // ~~~~~~ State

  const [isMobile, setIsMobile] = useState(false);

  // ~~~~~~ Effects

  useEffect(() => {
    function calcIsMobile() {
      const winIsLessThanMobile =
        window.innerWidth <= parseInt(MediaQuery.MaxWidthSmall);

      if (!isMobile && winIsLessThanMobile) {
        setIsMobile(true);
        return;
      }

      if (isMobile && !winIsLessThanMobile) {
        setIsMobile(false);
      }
    }

    const sub = fromEvent(window, 'resize').subscribe({
      next: () => {
        requestAnimationFrame(() => {
          calcIsMobile();
        });
      }
    });

    calcIsMobile();

    return () => {
      sub.unsubscribe();
    };
  }, [isMobile]);

  return isMobile;
};
