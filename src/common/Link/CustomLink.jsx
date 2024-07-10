import Link from "next/link"
import styles from "./style.module.scss"

export const CustomLink = ({ href, children, isDark, ...props }) => {
  return (
    <Link className={[styles.link]} href={href} {...props}>
      {children}
    </Link>
  )
}
