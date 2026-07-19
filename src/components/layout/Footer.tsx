import toast from "react-hot-toast";
import dazzlingDivaIcon from "../../assets/icons/footer/dazzling-diva-icon-white.png";
import locationIcon from "../../assets/icons/footer/location-icon.svg";
import mailIcon from "../../assets/icons/footer/mail-icon.svg";
import copyIcon from "../../assets/icons/footer/copy-icon.svg";
import { linkColumns, socialLinks, legalLinks } from "../../data/footerData";

const Footer = () => {
  const handleCopyEmail = () => {
    navigator.clipboard
      ?.writeText("info@dazzling.com")
      .then(() => toast.success("Email copied!"))
      .catch(() => toast.error("Failed to copy"));
  };

  return (
    <footer className="bg-footer">
      <div className="px-4 py-10 sm:px-8 sm:py-12 md:px-16 lg:px-32 lg:py-14">
        {/* Brand block */}
        <div className="flex flex-col items-center text-center">
          <img
            src={dazzlingDivaIcon}
            alt="Dazzling Diva Logo"
            className="h-8 w-auto sm:h-9"
          />
          <p className="font-outfit mt-3 text-lg font-semibold text-white sm:text-xl">
            Dazzling Diva
          </p>
          <p className="font-outfit mt-4 max-w-xs text-sm leading-relaxed text-white/80 sm:max-w-lg md:max-w-xl">
            We Only Carry Designs We Believe In Ethically And Aesthetically –
            Original, Authentic Pieces That Are Made To Last.
          </p>
        </div>

        {/* Contact + link columns */}
        <div className="mt-10 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-[1.4fr_1fr_1fr_1fr_1fr] lg:gap-8">
          {/* Contact info */}
          <div className="font-outfit flex flex-col items-center gap-3 text-center text-sm text-white/90 sm:col-span-2 sm:items-start sm:text-left lg:col-span-1">
            <div className="mx-auto flex w-fit items-start gap-2 text-left">
              <img
                src={locationIcon}
                alt="Location"
                className="mt-0.5 h-4 w-4 flex-shrink-0"
              />
              <span className="text-left">
                29 SE 2nd Ave, Miami Florida 33131, United States
              </span>
            </div>
            <div className="flex items-center gap-2">
              <img
                src={mailIcon}
                alt="Email"
                className="h-4 w-4 flex-shrink-0"
              />
              <a
                href="mailto:info@dazzling.com"
                className="transition-opacity hover:opacity-80"
              >
                info@dazzling.com
              </a>
              <button
                type="button"
                aria-label="Copy email address"
                onClick={handleCopyEmail}
                className="transition-opacity hover:opacity-80"
              >
                <img src={copyIcon} alt="Copy email" className="h-3.5 w-3.5" />
              </button>
            </div>
            <a
              href="tel:+923942789"
              className="text-base font-bold text-white transition-opacity hover:opacity-80"
            >
              (+92) 3942 7879
            </a>
          </div>

          {/* Link columns */}
          {linkColumns.map((column) => (
            <div
              key={column.title}
              className="font-outfit flex flex-col items-center gap-3 text-center sm:items-start sm:text-left"
            >
              <h3 className="text-sm font-bold tracking-wide text-white uppercase">
                {column.title}
              </h3>
              <ul className="flex flex-col items-center gap-2.5 sm:items-start">
                {column.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/80 transition-opacity hover:text-white hover:opacity-100"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-footer-bottom font-outfit flex flex-col items-center gap-4 px-4 py-4 text-center text-xs text-white sm:px-8 md:flex-row md:justify-between md:px-16 lg:px-32">
        <p className="order-2 md:order-1">
          Copyright ©{" "}
          <a
            href="#"
            className="text-pink-300 transition-opacity hover:opacity-80"
          >
            Orbixon
          </a>{" "}
          2026. All rights reserved.
        </p>

        <div className="order-1 flex items-center gap-3 md:order-2">
          {socialLinks.map((social) => (
            <a
              key={social.name}
              href={social.href}
              aria-label={social.name}
              className="transition-opacity hover:opacity-80"
            >
              <img
                src={social.icon}
                alt={social.name}
                className="h-7 w-7 sm:h-8 sm:w-8"
              />
            </a>
          ))}
        </div>

        <div className="order-3 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {legalLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="whitespace-nowrap transition-opacity hover:opacity-80"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
