import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import PlaneSVG from "../../assets/plane.svg";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const PaperPlaneAnimation = ({ startX = 10, startY = 10 }) => {
  const planeRef = useRef(null);

  useEffect(() => {
    const plane = planeRef.current;

    gsap.set(plane, { opacity: 0, scale: 1.75, rotate: 0});

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top center",
        end: "bottom+=200 center", // shorter scroll distance → faster coverage
        scrub: 1,
      },
    });

    tl.to(plane, {
      opacity: 1,
      duration: 0.3,
      ease: "power2.out",
    })
      .to(plane, {
        motionPath: {
          path: [
            { x: startX, y: startY },
            { x: 150, y: 80 },
            { x: 320, y: 100 },
            { x: 480, y: -100 },
            { x: 650, y: 40 },
            { x: 800, y: -20 },
          ],
          curviness: 1.5,
          autoRotate: true,
        },
        ease: "power1.inOut",
        duration: 7,
      })
      .to(plane, {
        opacity: 0.7,
        rotate: 15,
        duration: 0.7,
        ease: "sine.inOut",
      });

    return () => tl.kill();
  }, [startX, startY]);

  return (
    <div className="relative flex-1 flex items-center justify-center">
      <img
        ref={planeRef}
        src={PlaneSVG}
        alt="Paper Plane"
        className="w-14 h-14 absolute top-1/2 left-0 transform -translate-y-1/2 select-none"
      />
    </div>
  );
};

export default PaperPlaneAnimation;
