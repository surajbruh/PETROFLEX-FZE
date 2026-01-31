import { ChevronsRight } from "lucide-react";
import { Link } from "react-router-dom";
import useDataContext from "../contexts/DataContext";

// todo: fix brand_logo image size.

const Footer = () => {
  const { footer } = useDataContext();

  return (
    <footer className="bg-black text-white pt-12 pb-6" role="contentinfo">
      <div className="w-[90vw] sm:w-[85vw] lg:w-[80vw] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {/* ========== BRAND + ABOUT ========== */}
          <section aria-labelledby="footer-about-heading">
            <div className="mb-5">
              <Link to="/" aria-label={`${footer.about.brandName} homepage`}>
                <img
                  className="w-full max-w-[180px] md:max-w-[85%] h-auto"
                  src={footer.about.brandLogo}
                  alt={footer.about.brandName}
                  width="200"
                  height="auto"
                  loading="lazy"
                />
              </Link>
            </div>

            <h2 id="footer-about-heading" className="sr-only">
              About {footer.about.brandName}
            </h2>

            <p className="text-sm sm:text-base leading-relaxed text-gray-300 max-w-[400px]">
              {footer.about.description}
            </p>
          </section>

          {/* ========== QUICK LINKS =========== */}
          <nav aria-labelledby="footer-quick-links-heading">
            <h2
              id="footer-quick-links-heading"
              className="text-base sm:text-lg font-semibold mb-4 uppercase"
            >
              Quick Links
            </h2>

            <ul className="space-y-2 sm:space-y-3">
              {footer.quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href || "#"}
                    className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded inline-flex items-center gap-2 sm:gap-3 transition-colors duration-200 text-sm sm:text-base uppercase"
                  >
                    <ChevronsRight
                      className="w-4 h-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* ========== PRODUCTS =========== */}
          <nav aria-labelledby="footer-products-heading">
            <h2
              id="footer-products-heading"
              className="text-base sm:text-lg font-semibold mb-4 uppercase"
            >
              Products
            </h2>

            <ul className="space-y-2 sm:space-y-3">
              {footer.products.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.href || "#"}
                    className="text-gray-300 hover:text-white focus:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black rounded inline-flex items-center gap-2 sm:gap-3 transition-colors duration-200 text-sm sm:text-base uppercase"
                  >
                    <ChevronsRight
                      className="w-4 h-4 shrink-0"
                      aria-hidden="true"
                    />
                    <span>{item.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* ========== COPYRIGHT ========== */}
        <div className="w-full text-center text-gray-400 text-xs sm:text-sm mt-8 sm:mt-10 pt-4 sm:pt-6 border-t border-gray-700">
          <p>
            © {new Date().getFullYear()} {footer.about.brandName}. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
