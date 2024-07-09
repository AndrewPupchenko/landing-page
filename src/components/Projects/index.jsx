"use client"
import { motion } from "framer-motion"
import gsap from "gsap"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Rounded from "../../common/RoundedButton"
import Project from "./components/project"
import styles from "./style.module.scss"
import { CustomLink } from "@/common/Link/CustomLink"
import { contact_data } from "@/api/mock-data"

const projects = [
  {
    title: "Kreios",
    src: "vivid.png",
    color: "#d4e3ec",
    role: "Fullstack Developer",
  },
  {
    title: "Beetsoft",
    src: "beetsoft.png",
    color: "#d6d7dc",
    role: "Fullstack Developer",
  },
  {
    title: "ONIIP",
    color: "#e3e3e3",
    src: "ONIIP.png",
    role: "Fullstack Developer",
  },
]

const scaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  enter: {
    scale: 1,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  closed: {
    scale: 0,
    x: "-50%",
    y: "-50%",
    transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
  },
}

export default function Home() {
  const [{ active, index }, setModal] = useState({ active: false, index: 0 })
  const modalContainer = useRef(null)
  const cursor = useRef(null)
  const cursorLabel = useRef(null)

  let xMoveContainer = useRef(null)
  let yMoveContainer = useRef(null)
  let xMoveCursor = useRef(null)
  let yMoveCursor = useRef(null)
  let xMoveCursorLabel = useRef(null)
  let yMoveCursorLabel = useRef(null)

  useEffect(() => {
    //Move Container
    xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
      duration: 0.8,
      ease: "power3",
    })
    yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
      duration: 0.8,
      ease: "power3",
    })
    //Move cursor
    xMoveCursor.current = gsap.quickTo(cursor.current, "left", {
      duration: 0.5,
      ease: "power3",
    })
    yMoveCursor.current = gsap.quickTo(cursor.current, "top", {
      duration: 0.5,
      ease: "power3",
    })
    //Move cursor label
    xMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "left", {
      duration: 0.45,
      ease: "power3",
    })
    yMoveCursorLabel.current = gsap.quickTo(cursorLabel.current, "top", {
      duration: 0.45,
      ease: "power3",
    })
  }, [])

  const moveItems = (x, y) => {
    xMoveContainer.current(x)
    yMoveContainer.current(y)
    xMoveCursor.current(x)
    yMoveCursor.current(y)
    xMoveCursorLabel.current(x)
    yMoveCursorLabel.current(y)
  }
  const manageModal = (active, index, x, y) => {
    moveItems(x, y)
    setModal({ active, index })
  }

  return (
    <main
      onMouseMove={(e) => moveItems(e.clientX, e.clientY)}
      className={styles.projects}
    >
      <div className={styles.body}>
        {projects.map(({ title, role }, index) => (
          <Project
            index={index}
            title={title}
            role={role}
            manageModal={manageModal}
            key={index}
          />
        ))}
      </div>
      <CustomLink href={contact_data.githubRef} style={{ color: "black" }}>
        <Rounded>
          <p>Open Source</p>
        </Rounded>
      </CustomLink>
      <>
        <motion.div
          ref={modalContainer}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
          className={styles.modalContainer}
        >
          <div
            style={{ top: index * -100 + "%" }}
            className={styles.modalSlider}
          >
            {projects.map(({ src, color }, index) => (
              <div
                className={styles.modal}
                style={{ backgroundColor: color }}
                key={`modal_${index}`}
              >
                <Image
                  src={`/images/${src}`}
                  width={300}
                  height={0}
                  alt="image"
                />
              </div>
            ))}
          </div>
        </motion.div>
        <motion.div
          ref={cursor}
          className={styles.cursor}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        />
        <motion.div
          ref={cursorLabel}
          className={styles.cursorLabel}
          variants={scaleAnimation}
          initial="initial"
          animate={active ? "enter" : "closed"}
        >
          View
        </motion.div>
      </>
    </main>
  )
}
