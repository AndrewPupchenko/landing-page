import beetsoft from "@/images/beetsoft.png"
import kreios from "@/images/kreios.png"
import ONIIP from "@/images/ONIIP.png"
import portfolio from "@/images/portfolio.png"
import sustain from "@/images/sustain.png"
import vivid from "@/images/vivid.png"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import styles from "./style.module.scss"

const slider1 = [
  {
    color: "#e3e5e7",
    src: kreios,
  },
  {
    color: "#d6d7dc",
    src: beetsoft,
  },
  {
    color: "#e3e3e3",
    src: ONIIP,
  },
  {
    color: "#e5e0e1",
    src: portfolio,
  },
]

const slider2 = [
  {
    color: "#e5e0e1",
    src: portfolio,
  },

  {
    color: "#d4e3ec",
    src: vivid,
  },
  {
    color: "#21242b",
    src: sustain,
  },
  {
    color: "#e3e5e7",
    src: kreios,
  },
]

export default function Index() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  })

  const x1 = useTransform(scrollYProgress, [0, 1], [0, 150])
  const x2 = useTransform(scrollYProgress, [0, 1], [0, -150])
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0])

  return (
    <div ref={container} className={styles.slidingImages}>
      <motion.div style={{ x: x1 }} className={styles.slider}>
        {slider1.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div className={styles.imageContainer}>
                <Image fill alt={"image"} src={project.src} sizes="100%" />
              </div>
            </div>
          )
        })}
      </motion.div>
      <motion.div style={{ x: x2 }} className={styles.slider}>
        {slider2.map((project, index) => {
          return (
            <div
              key={index}
              className={styles.project}
              style={{ backgroundColor: project.color }}
            >
              <div key={index} className={styles.imageContainer}>
                <Image
                  fill={true}
                  alt={"image"}
                  src={project.src}
                  sizes="100%"
                />
              </div>
            </div>
          )
        })}
      </motion.div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  )
}
