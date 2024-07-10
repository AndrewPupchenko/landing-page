import { CustomLink } from "@/common/Link/CustomLink"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import Rounded from "../../common/RoundedButton"
import { opacity, slideUp } from "./animation"
import styles from "./style.module.scss"
import { contact_data } from "@/api/mock-data"

export default function Index() {
  const description = useRef(null)
  const isInView = useInView(description)

  return (
    <div ref={description} className={styles.description}>
      <div className={styles.body}>
        <p>
          {contact_data.phrase.split(" ").map((word, index) => (
            <span key={index} className={styles.mask}>
              <motion.span
                variants={slideUp}
                custom={index}
                animate={isInView ? "open" : "closed"}
                key={index}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </p>
        <div>
          <p>Commercial development is 4 years:</p>

          <motion.ul variants={opacity} animate={isInView ? "open" : "closed"}>
            {contact_data.aboutMe.map((info, i) => (
              <li key={i}>{info}</li>
            ))}
          </motion.ul>
        </div>
        <div
          data-scroll
          data-scroll-speed={0.1}
          className={styles.scrollItem}
        >
          <CustomLink href={"https://linkedin.com/in/andrew-react"}>
            <Rounded className={styles.button}>
              <p>About me</p>
            </Rounded>
          </CustomLink>
        </div>
      </div>
    </div>
  )
}
