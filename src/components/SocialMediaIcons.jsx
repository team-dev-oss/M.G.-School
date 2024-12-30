import Link from 'next/link'
import { FaFacebook, FaInstagram,  FaYoutube } from "react-icons/fa"

const socialLinks = [
  { Icon: FaFacebook, href: "https://www.facebook.com/groups/358916311242887/?ref=share&mibextid=NSMWBT", label: "Facebook" },
  { Icon: FaInstagram, href: "https://www.instagram.com/moderngurukulpublic?igsh=MTdmOGszNndjYzRqZA==", label: "Instagram" },
  { Icon: FaYoutube, href: "https://youtube.com/@m.g.publicschool4997?si=pjyMlGJJ0Rjoj_GM", label: "YouTube" },
]

export function SocialMediaIcons() {    
  return (
    <ul className="flex items-center space-x-4">
      {socialLinks.map(({ Icon, href, label }) => (
        <li key={label}>
          <Link href={href} aria-label={label} className="text-gray-500 hover:text-gray-700">
            <Icon size={20} />
          </Link>
        </li>
      ))}
    </ul>
  )
}

