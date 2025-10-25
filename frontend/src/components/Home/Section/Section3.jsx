import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import BounceCards from "../../PostCard/PostCard.jsx";

gsap.registerPlugin(ScrollTrigger);

export default function HeroScrollFeature() {
  const sectionRef = useRef(null);
  const cardsRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const cards = cardsRef.current;

    const ctx = gsap.context(() => {
      gsap.to(cards, {
        xPercent: -100, // Move horizontally
        rotation: 360, // Rotate full circle
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: "+=2000", // Scroll distance
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative flex items-center justify-between w-full h-screen overflow-hidden"
    >
      {/* LEFT TEXT SIDE */}
      <div className="w-1/3 pl-20">
          <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight">
             NIT-C {" "}
            <span className="text-[rgb(76,228,32)]">Twitter</span>.
          </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam eum sed fugiat ducimus, excepturi provident commodi maiores molestias doloremque, reiciendis odit explicabo, labore repellendus itaque!
        </p>
      </div>

      {/* RIGHT SIDE — BounceCards Animation */}
      <div
        ref={cardsRef}
        className="flex gap-16 w-[300vw] items-center justify-center pr-20"
      >
        {[1,].map((idx) => (
          <div
            key={idx}
            className="flex-shrink-0 w-[500px] h-[300px] flex items-center justify-center"
          >
            <BounceCards
              className="shadow-2xl"
              images={[
                `https://picsum.photos/500/500?random=${idx * 2}`,
                `https://picsum.photos/600/600?random=${idx * 4}`,
                `https://picsum.photos/700/700?random=${idx * 6}`,
                `https://picsum.photos/800/800?random=${idx * 8}`,
                `https://picsum.photos/900/900?random=${idx * 10}`,
              ]}
              containerWidth={400}
              containerHeight={250}
              animationDelay={0.8}
              animationStagger={0.1}
              easeType="elastic.out(1, 0.6)"
              enableHover={false}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
