"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`
        fixed
        right-5
        bottom-5
        md:right-7
        md:bottom-7
        z-50
        w-10
        h-10
        md:w-11
        md:h-11
        rounded-full
        flex
        items-center
        justify-center
        bg-blue-600
        text-white
        border
        border-blue-500/30
        shadow-[0_0_25px_rgba(37,99,235,0.25)]
        hover:bg-blue-500
        hover:shadow-[0_0_35px_rgba(37,99,235,0.4)]
        hover:-translate-y-1
        transition-all
        duration-300
        ${
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }
      `}
    >
      <ArrowUp className="w-4 h-4 md:w-5 md:h-5" />
    </button>
  );
}