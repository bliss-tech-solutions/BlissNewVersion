import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const SmoothScroll = ({ children }) => {
  const wrapperRef = useRef(null);
  const contentRef = useRef(null);
  const scrollTween = useRef(null);
  const scrollY = useRef(0);
  const currentY = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const content = contentRef.current;
    
    if (!wrapper || !content) return;

    // Prevent default scroll on body
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';

    // Set wrapper styles
    gsap.set(wrapper, {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      overflow: 'hidden'
    });

    // Set content styles with GPU acceleration
    gsap.set(content, {
      willChange: 'transform',
      force3D: true,
      y: 0
    });

    // Smooth scroll animation loop
    const smoothScroll = () => {
      const ease = 0.08; // Easing factor (lower = smoother but slower)
      const diff = scrollY.current - currentY.current;
      
      // Always update position
      currentY.current += diff * ease;
      
      // Update transform
      gsap.set(content, {
        y: -currentY.current,
        force3D: true
      });

      // Continue animation if not at target (with smaller threshold)
      if (Math.abs(diff) > 0.01) {
        rafId.current = requestAnimationFrame(smoothScroll);
      } else {
        // Snap to final position if very close
        currentY.current = scrollY.current;
        gsap.set(content, { y: -currentY.current, force3D: true });
        rafId.current = null;
      }
    };

    // Get max scroll value
    const getMaxScroll = () => {
      return Math.max(0, content.scrollHeight - window.innerHeight);
    };

    // Handle wheel event for smooth scrolling
    const handleWheel = (e) => {
      e.preventDefault();
      
      const delta = e.deltaY;
      const maxScroll = getMaxScroll();
      
      scrollY.current += delta;
      scrollY.current = Math.max(0, Math.min(scrollY.current, maxScroll));
      
      // Always restart smooth scroll animation
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(smoothScroll);
    };

    // Handle touch events for mobile
    let touchStartY = 0;
    let touchCurrentY = 0;
    let isTouching = false;

    const handleTouchStart = (e) => {
      isTouching = true;
      touchStartY = e.touches[0].clientY;
      touchCurrentY = scrollY.current;
    };

    const handleTouchMove = (e) => {
      if (!isTouching) return;
      e.preventDefault();
      
      const deltaY = touchStartY - e.touches[0].clientY;
      const maxScroll = getMaxScroll();
      
      scrollY.current = touchCurrentY + deltaY;
      scrollY.current = Math.max(0, Math.min(scrollY.current, maxScroll));
      
      // Direct update for touch (no easing for responsiveness)
      gsap.set(content, { y: -scrollY.current, force3D: true });
      currentY.current = scrollY.current;
    };

    const handleTouchEnd = () => {
      isTouching = false;
      // Resume smooth scroll after touch - ensure it restarts
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(smoothScroll);
    };

    // Handle programmatic scroll (like route changes)
    const handleScroll = () => {
      const maxScroll = getMaxScroll();
      const newScrollY = window.scrollY || window.pageYOffset;
      scrollY.current = Math.max(0, Math.min(newScrollY, maxScroll));
      
      // Always restart animation if not touching
      if (!isTouching) {
        if (rafId.current) {
          cancelAnimationFrame(rafId.current);
        }
        rafId.current = requestAnimationFrame(smoothScroll);
      }
    };

    // Sync with window scroll for programmatic scrolls
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Continuous check to ensure animation doesn't get stuck
    const checkAnimation = () => {
      const diff = Math.abs(scrollY.current - currentY.current);
      if (diff > 0.01 && !rafId.current && !isTouching) {
        rafId.current = requestAnimationFrame(smoothScroll);
      }
    };

    // Check periodically to restart animation if needed
    const checkInterval = setInterval(checkAnimation, 100);

    // Add event listeners
    wrapper.addEventListener('wheel', handleWheel, { passive: false });
    wrapper.addEventListener('touchstart', handleTouchStart, { passive: true });
    wrapper.addEventListener('touchmove', handleTouchMove, { passive: false });
    wrapper.addEventListener('touchend', handleTouchEnd, { passive: true });

    // Handle resize
    const handleResize = () => {
      const maxScroll = getMaxScroll();
      scrollY.current = Math.max(0, Math.min(scrollY.current, maxScroll));
      gsap.set(content, { y: -scrollY.current, force3D: true });
      currentY.current = scrollY.current;
      
      // Restart animation after resize
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      rafId.current = requestAnimationFrame(smoothScroll);
    };

    window.addEventListener('resize', handleResize, { passive: true });

    // Initial scroll position
    scrollY.current = window.scrollY || 0;
    currentY.current = scrollY.current;
    gsap.set(content, { y: -currentY.current });

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      
      clearInterval(checkInterval);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      wrapper.removeEventListener('wheel', handleWheel);
      wrapper.removeEventListener('touchstart', handleTouchStart);
      wrapper.removeEventListener('touchmove', handleTouchMove);
      wrapper.removeEventListener('touchend', handleTouchEnd);
      
      if (rafId.current) {
        cancelAnimationFrame(rafId.current);
      }
      
      if (scrollTween.current) {
        scrollTween.current.kill();
      }
      
      gsap.set([wrapper, content], { clearProps: 'all' });
    };
  }, []);

  return (
    <div ref={wrapperRef} className="smooth-scroll-wrapper">
      <div ref={contentRef} className="smooth-scroll-content">
        {children}
      </div>
    </div>
  );
};

export default SmoothScroll;

