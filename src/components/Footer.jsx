import React from "react";
import { PrimaryButton } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Projects",
    href: "#project",
  },
  {
    label: "Skills",
    href: "#skills",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/nihalnaveed12",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/nihal-naveed/",
  },
];

function Footer() {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2 ">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">
              Let&apos;s work together today!
            </h2>

            <PrimaryButton
              href="mailto:nihalnaveed044@gmail.com"
              label="Start Project"
              icon="chevron_right"
              className='reveal-up'
            />
          </div>

          <div className="grid grid-cols-2 lg:ml-20 gap-4">
            <div>
              <p className="mb-3 reveal-up">Site map</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="text-zinc-400 block text-sm transition-colors hover:text-zinc-200 py-1 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="">
              <p className="mb-3 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="text-zinc-400 block text-sm transition-colors hover:text-zinc-200 py-1 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

        <div className="flex justify-between items-center pt-10 mb-7">
          <a href="/" className="">
            <img
              src="/images/coding.png"
              alt="logo"
              width={40}
              height={40}
              className="rounded-full"
            />
          </a>

          <p className="text-zinc-400 text-sm">
            &copy; 2024 <span className="text-zinc-200 reveal-up">codewithnihal</span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
