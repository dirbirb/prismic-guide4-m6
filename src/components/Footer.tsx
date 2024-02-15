import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
  const client = createClient();

  const setting = await client.getSingle("setting");

  return (
    <footer>
      <Link href="/">{setting.data.site_title}</Link>

      <p>
        ©{new Date().getFullYear()}
        {setting.data.site_title}
      </p>

      <ul>
        {setting.data.navigation.map(({ link, label }) => (
          <li key={label}>
            <PrismicNextLink field={link}>{label}</PrismicNextLink>
          </li>
        ))}
      </ul>
    </footer>
  );
}
