import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const contactItems = [
    {
        icon: Phone,
        label: "Phone",
        value: "+971 50 194 1986",
        href: "tel:+971501941986",
    },
    {
        icon: Mail,
        label: "Email",
        value: "info@petroflexfze.com",
        href: "mailto:info@petroflexfze.com",
    },
    {
        icon: MapPin,
        label: "Location",
        value: "Sharjah, United Arab Emirates",
        href: null,
    },
];

const ContactInfo = () => {
    return (
        <div className="hidden lg:flex flex-col gap-10">
            {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                    <div
                        key={item.label}
                        className="flex items-center gap-4"
                    >
                        {/* Icon */}
                        <div className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center">
                            <Icon className="text-white" aria-hidden="true" />
                        </div>

                        {/* Text */}
                        <div className="leading-tight">
                            <p className="text-xl font-medium">
                                {item.label}
                            </p>

                            {item.href ? (
                                <a
                                    href={item.href}
                                    className="hover:underline"
                                    aria-label={`${item.label}: ${item.value}`}
                                >
                                    {item.value}
                                </a>
                            ) : (
                                <p>{item.value}</p>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ContactInfo;