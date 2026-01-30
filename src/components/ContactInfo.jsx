import React from 'react'

const contactItems = [
    {
        label: "Phone",
        value: "+971 50 903 6334",
        href: "tel:+971509036334",
    },
    {
        label: "Email",
        value: "info@regasfze.com",
        href: "mailto:info@regasfze.com",
    },
    {
        label: "Location",
        value: "Sharjah, UAE",
        href: null,
    },
];

const ContactInfo = () => {
    return (
        <div className="hidden lg:flex flex-col gap-10">
            {contactItems.map((item) => (
                <div
                    key={item.label}
                    className="flex items-center gap-4"
                >
                    {/* Icon placeholder */}
                    <div className="h-12 w-12 rounded-full bg-red-500 flex items-center justify-center" />

                    {/* Text */}
                    <div className="leading-tight">
                        <p className="text-xl font-medium">
                            {item.label}
                        </p>

                        {item.href ? (
                            <a
                                href={item.href}
                                className="hover:underline"
                            >
                                {item.value}
                            </a>
                        ) : (
                            <p className="">
                                {item.value}
                            </p>
                        )}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ContactInfo