"use client"
import styles from "./page.module.scss"
import { useEffect, useState } from "react"
import { AnimatePresence } from "framer-motion"
import Preloader from "../components/Preloader"
import Landing from "../components/Landing"
import Projects from "../components/Projects"
import Description from "../components/Description"
import SlidingImages from "../components/SlidingImages"
import Contact from "../components/Contact"

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const initScroll = async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default

      const locoScroll = new LocomotiveScroll({
        el: document.querySelector("[data-scroll-container]"),
        smooth: true,
        smartphone: { smooth: true },
        tablet: { smooth: true },
      })

      setTimeout(() => {
        setIsLoading(false)
        document.body.style.cursor = "default"
        window.scrollTo(0, 0)
      }, 2000)

      return () => {
        if (locoScroll) locoScroll.destroy()
      }
    }

    if (typeof window !== "undefined") {
      initScroll()
    }
  }, [])

  return (
    <main className={`${styles.main} smooth-scroll`}>
      <AnimatePresence mode="wait">
        {isLoading && <Preloader />}
      </AnimatePresence>
      <section id="">
        <Landing />
      </section>
      <section id="work">
        <Description />
      </section>
      <section id="about">
        <Projects />
      </section>
      <section id="sliding-images">
        <SlidingImages />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  )
}
