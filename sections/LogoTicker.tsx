"use client";

import AcmeLogo from "@/public/assets/logo-acme.png";
import QuantumLogo from "@/public/assets/logo-quantum.png";
import EchoLogo from "@/public/assets/logo-echo.png";
import CelestialLogo from "@/public/assets/logo-celestial.png";
import PulseLogo from "@/public/assets/logo-pulse.png";
import ApexLogo from "@/public/assets/logo-apex.png";
import Image from "next/image";
import { motion } from "framer-motion";

export const LogoTicker = () => {
  return (
    <div className="py-8 md:py-12 bg-white">
      <div className="container">
        <div className=" flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none pr-14"
            animate={{
              translateX: "-50%",
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
              repeatType: "loop",
            }}
          >
            <Image
              src={AcmeLogo}
              alt="Acme Logo"
              className="logo-ticker-imgage"
            />
            <Image
              src={QuantumLogo}
              alt="Quantum Logo"
              className="logo-ticker-imgage"
            />
            <Image
              src={EchoLogo}
              alt="Echo Logo"
              className="logo-ticker-imgage"
            />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              className="logo-ticker-imgage"
            />
            <Image
              src={PulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-imgage"
            />
            <Image
              src={ApexLogo}
              alt="Apex Logo"
              className="logo-ticker-imgage"
            />

            {/* DUPLICATE LOGOS */}
            <Image
              src={AcmeLogo}
              alt="Acme Logo"
              className="logo-ticker-imgage"
            />
            <Image
              src={QuantumLogo}
              alt="Quantum Logo"
              className="logo-ticker-imgage"
            />
            <Image
              src={EchoLogo}
              alt="Echo Logo"
              className="logo-ticker-imgage"
            />
            <Image
              src={CelestialLogo}
              alt="Celestial Logo"
              className="logo-ticker-imgage"
            />
            <Image
              src={PulseLogo}
              alt="Pulse Logo"
              className="logo-ticker-imgage"
            />
            <Image
              src={ApexLogo}
              alt="Apex Logo"
              className="logo-ticker-imgage"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
