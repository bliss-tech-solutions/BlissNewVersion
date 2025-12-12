import { useEffect, useRef, useMemo } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import './ScrollReveal.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  enableBlur = true,
  baseOpacity = 0.1,
  baseRotation = 3,
  blurStrength = 4,
  containerClassName = '',
  textClassName = '',
  rotationEnd = 'bottom bottom',
  wordAnimationEnd = 'bottom bottom',
  as = 'h2' // Allow different HTML tags
}) => {
  const containerRef = useRef(null);
  const Component = as;

  const splitText = useMemo(() => {
    const text = typeof children === 'string' ? children : '';
    return text.split(/(\s+)/).map((word, index) => {
      if (word.match(/^\s+$/)) return word;
      return (
        <span className="word" key={index}>
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef && scrollContainerRef.current ? scrollContainerRef.current : window;
    const wordElements = Array.from(el.querySelectorAll('.word'));

    // Set initial styles with GPU acceleration
    gsap.set(el, {
      transformOrigin: '0% 50%',
      rotation: baseRotation,
      force3D: true
    });

    gsap.set(wordElements, {
      opacity: baseOpacity,
      filter: enableBlur ? `blur(${blurStrength}px)` : 'none',
      force3D: true
    });

    // Create timeline for smoother animation
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        scroller,
        start: 'top bottom-=20%',
        end: wordAnimationEnd,
        scrub: 0.5, // Smoother scrubbing (lower = smoother)
        refreshPriority: -1,
        invalidateOnRefresh: false
      }
    });

    // Container rotation
    tl.to(el, {
      rotation: 0,
      ease: 'none',
      duration: 1
    }, 0);

    // Word animations - combine opacity and blur in single animation
    if (enableBlur) {
      tl.to(wordElements, {
        opacity: 1,
        filter: 'blur(0px)',
        stagger: {
          amount: 0.3,
          from: 'start'
        },
        ease: 'none',
        duration: 1
      }, 0);
    } else {
      tl.to(wordElements, {
        opacity: 1,
        stagger: {
          amount: 0.3,
          from: 'start'
        },
        ease: 'none',
        duration: 1
      }, 0);
    }

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.trigger === el) {
          trigger.kill();
        }
      });
      tl.kill();
      gsap.set([el, ...wordElements], { clearProps: 'all' });
    };
  }, [scrollContainerRef, enableBlur, baseRotation, baseOpacity, rotationEnd, wordAnimationEnd, blurStrength]);

  return (
    <Component ref={containerRef} className={`scroll-reveal ${containerClassName}`}>
      <span className={`scroll-reveal-text ${textClassName}`}>{splitText}</span>
    </Component>
  );
};

export default ScrollReveal;

