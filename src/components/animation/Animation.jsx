import { useRef } from "react"
import { motion,useScroll,useSpring,useInView } from "framer-motion"

export const FadeUp = ({children,delay=0.2,className=""}) => {

    return(
        <>
            <motion.div
                className={className}
                initial={{opacity:0,y:40}}
                whileInView={{ opacity: 1,y: 0}}
                viewport={{ once: false,amount: 0.25 }}
                transition={{
                    duration: 1.5,
                    delay: delay,
                    ease: [0.16, 1 , 0.3, 1]
                }}
            >
                {children}
            </motion.div>
        </>
    )
}

export const ScrollBar = ({containerRef}) => {

    const { scrollYProgress } = useScroll({container: containerRef});
    const scaleX = useSpring(scrollYProgress, {stiffness: 100,damping: 30});

    return(
        <>
            <motion.div
                style={{scaleX,transformOrigin: "left"}}
                className="fixed left-0 top-0 z-50 h-1 w-full bg-blue-500"
            />
        </>
    )
}

export const PulseNode = ({ color = "#818cf8", speed = 2.4 ,area }) => {
  return (
    <div className={`flex ${area} items-center justify-center`}>
      {/* Core dot */}
      <div className="w-2.5 h-2.5 rounded-full z-10"
           style={{ background: color }} />

      {/* 3 expanding rings — stagger with delay */}
      {[0, 0.6, 1.2].map((delay, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full border"
          style={{
            top: "50%",
            left: "50%",
            borderColor: color,
            marginTop: -5,
            marginLeft: -5,
          }}
          initial={{ width: 10,  height: 10,  opacity: 0.8,
                     marginTop: -5,  marginLeft: -5 }}
          animate={{ width: 52,  height: 52,  opacity: 0,
                     marginTop: -26, marginLeft: -26 }}
          transition={{ duration: speed, delay,
                        repeat: Infinity, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}


export const Pulse = () => {
    return(
        <>
            <motion.div
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="w-2 h-2 rounded-full bg-green"
            />
        </>
    )
}


export function WordFadeUp({
  text = "",
  delay = 0,
  stagger = 0.09,
  once = true,
  className = "",
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: 0.4 });
 
  const words = text.split(" ");
 
  return (
    <div
      ref={ref}
      aria-label={text}
      className={`flex flex-wrap gap-x-[0.3em] gap-y-1 ${className}`}
    >
      {words.map((word, i) => (
        <motion.span
          key={i}
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.55,
            delay: delay + i * stagger,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="inline-block"
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}

export function SlideSection({children,x,delay=0.5}) {

  return(
    <motion.div
        initial= {{opacity:0,x,y:-10}}
        whileInView={{opacity:1,x:0,y:0}}
        viewport={{once: false ,amount: 0.25}}
        transition={{
            duration: 0.5,
            delay: delay,
            ease: [0.16, 1, 0.3, 1]
        }}
    >
        {children}
    </motion.div>
  )
}
