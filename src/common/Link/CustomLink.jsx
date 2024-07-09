import Link from "next/link"
import styles from "./style.module.scss"
import { forwardRef } from "react"

export const CustomLink = ({ href, children, isDark, ...props }) => {
  return (
    <Link ref={forwardRef} className={[styles.link]} href={href} {...props}>
      {children}
    </Link>
  )
}
