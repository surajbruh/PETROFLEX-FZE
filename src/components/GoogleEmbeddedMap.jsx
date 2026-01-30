import React from "react";

const DEFAULT_MAP_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115727.39497208208!2d55.17128!3d25.204849!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f434655555555%3A0x8a0cbe123456abcd!2sDubai!5e0!3m2!1sen!2sae!4v0000000000000";

const GoogleEmbeddedMap = ({
  mapUrl = DEFAULT_MAP_URL,
  title = "Company location on Google Maps",
}) => {
  return (
    <section
      aria-label="Company location map"
      className="w-full"
    >
      <iframe
        src={mapUrl}
        title={title}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="
          w-full
          min-h-[300px] sm:min-h-[350px] md:min-h-[400px]
          border-0 rounded-lg
        "
      />
    </section>
  );
};

export default GoogleEmbeddedMap;