import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Header() {
  const client = createClient();

  const setting = await client.getSingle("setting");

  return (
    <header>
      <Link href="/">{setting.data.site_title}</Link>

      <nav>
        <ul>
          {setting.data.navigation.map(({ link, label }) => (
            <li key={label}>
              <PrismicNextLink field={link}>{label}</PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
