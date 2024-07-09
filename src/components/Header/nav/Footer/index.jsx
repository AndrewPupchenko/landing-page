import { contact_data } from "@/api/mock-data"
import { CustomLink } from "@/common/Link/CustomLink"
import Magnetic from "@/common/Magnetic"
import styles from "./style.module.scss"

export default function Index() {
  return (
    <div className={styles.footer}>
      <Magnetic>
        <p>
          <CustomLink href={contact_data.telegramRef}>Telegram</CustomLink>
        </p>
      </Magnetic>

      <Magnetic>
        <p>
          <CustomLink href={contact_data.githubRef}>Github</CustomLink>
        </p>
      </Magnetic>
      <Magnetic>
        <p>
          <CustomLink href={contact_data.linkedinRef}>LinkedIn</CustomLink>
        </p>
      </Magnetic>
    </div>
  )
}
