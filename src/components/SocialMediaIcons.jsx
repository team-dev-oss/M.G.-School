import Link from 'next/link'
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa"

const socialLinks = [
  { Icon: FaFacebook, href: "https://facebook.com", label: "Facebook" },
  { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" },
  { Icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { Icon: FaYoutube, href: "https://youtube.com", label: "YouTube" },
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

