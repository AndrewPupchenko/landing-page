"use client"
import { useEffect, useLayoutEffect, useRef, useState } from "react"
import styles from "./style.module.scss"
import { usePathname } from "next/navigation"
import { AnimatePresence } from "framer-motion"
import Nav from "./nav"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import Rounded from "../../common/RoundedButton"
import Magnetic from "../../common/Magnetic"
import { CustomLink } from "@/common/Link/CustomLink"

export default function Index() {
  const header = useRef(null)
  const [isActive, setIsActive] = useState(false)
  const pathname = usePathname()
  const button = useRef(null)

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(button.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          gsap.to(button.current, {
            scale: 1,
            duration: 0.25,
            ease: "power1.out",
          })
        },
        onEnterBack: () => {
          gsap.to(
            button.current,
            { scale: 0, duration: 0.25, ease: "power1.out" },
            setIsActive(false)
          )
        },
      },
    })
  }, [])

  return (
    <>
      <div ref={header} className={styles.header}>
        <div className={styles.logo}>
          <p className={styles.copyright}>©</p>
          <div className={styles.name}>
            <p className={styles.codeBy}>Code by</p>
            <p className={styles.dennis}>Andrei</p>
            <p className={styles.snellenberg}>Pupchenko</p>
          </div>
        </div>
        <div className={styles.nav}>
          <CustomLink href={"#work"}>
            <Magnetic>
              <div className={styles.el}>
                <p>Work</p>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
          </CustomLink>
          <CustomLink href={"#about"}>
            <Magnetic>
              <div className={styles.el}>
                <p>About</p>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
          </CustomLink>
          <CustomLink href={"#contact"}>
            <Magnetic>
              <div className={styles.el}>
                <p>Contact</p>
                <div className={styles.indicator}></div>
              </div>
            </Magnetic>
          </CustomLink>
        </div>
      </div>
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => setIsActive((v) => !v)}
          className={styles.button}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          />
        </Rounded>
      </div>
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </>
  )
}
