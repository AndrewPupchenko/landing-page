import { contact_data } from "@/api/mock-data"
import { CustomLink } from "@/common/Link/CustomLink"
import ArrowSvg from "@/components/svg/Arrow"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import Magnetic from "../../common/Magnetic"
import Rounded from "../../common/RoundedButton"
import styles from "./style.module.scss"

export default function Index() {
  const container = useRef(null)
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end end"],
  })
  const x = useTransform(scrollYProgress, [0, 1], [0, 100])
  const y = useTransform(scrollYProgress, [0, 1], [-500, 0])
  const rotate = useTransform(scrollYProgress, [0, 1], [120, 90])

  return (
    <motion.div style={{ y }} ref={container} className={styles.contact}>
      <div className={styles.body}>
        <div className={styles.title}>
          <span>
            <div className={styles.imageContainer}>
              <Image fill={true} alt={"image"} src={`/images/avatar.ico`} />
            </div>
            <h2>Let's work together</h2>
          </span>
          <motion.div style={{ x }} className={styles.buttonContainer}>
            <CustomLink href={contact_data.telegramRef}>
              <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                <p>Get in touch</p>
              </Rounded>
            </CustomLink>
          </motion.div>
          <motion.svg
            style={{ rotate, scale: 2 }}
            width="9"
            height="9"
            viewBox="0 0 9 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ArrowSvg />
          </motion.svg>
        </div>
        <div className={styles.nav}>
          <CustomLink href={contact_data.emailRef}>
            <Rounded>
              <p>{contact_data.email}</p>
            </Rounded>
          </CustomLink>
          <CustomLink href={contact_data.phoneRef}>
            <Rounded>
              <p>{contact_data.phone}</p>
            </Rounded>
          </CustomLink>
        </div>
        <div className={styles.info}>
          <div>
            <span>
              <h3>Version</h3>
              <p>2024 © Edition</p>
            </span>
            <span>
              <p>11:49 PM GMT+2</p>
            </span>
          </div>
          <div>
            <span>
              <h3>Socials</h3>
              <Magnetic>
                <p>
                  <CustomLink href={contact_data.telegramRef}>
                    Telegram
                  </CustomLink>
                </p>
              </Magnetic>
            </span>
            <Magnetic>
              <p>
                <CustomLink href={contact_data.githubRef}>Github</CustomLink>
              </p>
            </Magnetic>
            <Magnetic>
              <p>
                <CustomLink href={contact_data.linkedinRef}>
                  LinkedIn
                </CustomLink>
              </p>
            </Magnetic>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
