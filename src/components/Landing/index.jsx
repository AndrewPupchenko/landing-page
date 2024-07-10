"use client"
import Image from "next/image"
import styles from "./style.module.scss"
import { useRef, useLayoutEffect } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { slideUp } from "./animation"
import { motion } from "framer-motion"
import ArrowSvg from "@/components/svg/Arrow"
import background from "@/images/background.png"

export default function Home() {
  const firstText = useRef(null)
  const secondText = useRef(null)
  const slider = useRef(null)
  let xPercent = 0
  let direction = -1

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(slider.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        scrub: 0.25,
        start: 0,
        end: window.innerHeight,
        onUpdate: (e) => (direction = e.direction * -1),
      },
      x: "-500px",
    })
    requestAnimationFrame(animate)
  }, [])

  const animate = () => {
    if (xPercent < -100) {
      xPercent = 0
    } else if (xPercent > 0) {
      xPercent = -100
    }
    gsap.set(firstText.current, { xPercent: xPercent })
    gsap.set(secondText.current, { xPercent: xPercent })
    requestAnimationFrame(animate)
    xPercent += 0.1 * direction
  }

  return (
    <motion.main
      variants={slideUp}
      initial="initial"
      animate="enter"
      className={styles.landing}
    >
      <Image src={background} fill={true} alt="background" />
      <div className={styles.sliderContainer}>
        <div ref={slider} className={styles.slider}>
          <p ref={firstText}>Frontend Developer - </p>
          <p ref={secondText}>Fullstack Developer - </p>
        </div>
      </div>
      <div data-scroll data-scroll-speed={0.1} className={styles.description}>
        <svg
          width="9"
          height="9"
          viewBox="0 0 9 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ArrowSvg />
        </svg>
        <p>Freelance & Fulltime</p>
        <p>Frontend & Fullstack Developer</p>
      </div>
    </motion.main>
  )
}
