import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const contactItems = [
    {
        icon: Phone,
        label: "Phone",
        value: "+971 50 903 6334",
        href: "tel:+971509036334",
    },
    {
        icon: Mail,
        label: "Email",
        value: "info@regasfze.com",
        href: "mailto:info@regasfze.com",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Sharjah, UAE",
        href: null,
    },
];

const HeaderInfo = () => {
    return (
        <address
            className="
        not-italic
        hidden lg:flex
        gap-6 lg:gap-10
        items-start lg:items-center
      "
            aria-label="Company contact information"
        >
            {contactItems.map(({ icon: Icon, label, value, href }) => (
                <div
                    key={label}
                    className="flex items-start gap-4"
                >
                    {/* Icon */}
                    <span
                        className="
              h-10 w-10 shrink-0
              rounded-full bg-red-500
              flex items-center justify-center
            "
                        aria-hidden="true"
                    >
                        <Icon className="h-5 w-5" />
                    </span>

                    {/* Text */}
                    <div className="leading-snug">
                        <p className="text-sm font-medium">
                            {label}
                        </p>

                        {href ? (
                            <a
                                href={href}
                                className="
                  text-sm font-light
                  hover:underline
                  focus:outline-none focus:ring-2 focus:ring-red-500
                "
                            >
                                {value}
                            </a>
                        ) : (
                            <p className="text-sm font-light">
                                {value}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </address>
    );
};

export default HeaderInfo;
