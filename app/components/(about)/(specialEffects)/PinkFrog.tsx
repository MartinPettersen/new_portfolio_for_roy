"use client"
import React from "react";
import { motion } from "framer-motion";

export default function PinkFrog() {
  return (
    <svg
      width="312"
      height="401"
      viewBox="0 0 312 401"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ 
        animation: "bounce 0.8s ease-in-out infinite alternate",
      }}
    >
      <motion.ellipse 
        cx="157.5" 
        cy="243.5" 
        animate={{
          rx: [78.5, 100, 78.5],
          ry: [138.5, 110, 138.5],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 0.5, 1],
          ease: "easeInOut"
        }}
        fill="#D270CC" 
      />
      
      <motion.ellipse 
        cx="157.5" 
        cy="104.5" 
        animate={{
          rx: [134.5, 150, 134.5],
          ry: [78.5, 65, 78.5],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 0.5, 1],
          ease: "easeInOut",
          delay: 0.1
        }}
        fill="#E6A1D9" 
      />
      
      <circle cx="238" cy="35" r="35" fill="#E6A1D9" />
      <circle cx="237.5" cy="37.5" r="32.5" fill="#D9D9D9" />
      <circle cx="238" cy="38" r="10" fill="#5E4242" />
      <circle cx="76" cy="35" r="35" fill="#E6A1D9" />
      <circle cx="75.5" cy="37.5" r="32.5" fill="#D9D9D9" />
      <circle cx="76" cy="38" r="10" fill="#5E4242" />
      
      <motion.ellipse
        cx="234.223"
        cy="316.69"
        animate={{
          rx: [31.737, 38, 31.737],
          ry: [78.537, 65, 78.537],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 0.5, 1],
          ease: "easeInOut"
        }}
        transform="rotate(43.7296 234.223 316.69)"
        fill="#E6A1D9"
      />
      <motion.ellipse
        cx="78.69"
        cy="323.223"
        animate={{
          rx: [31.737, 38, 31.737],
          ry: [78.537, 65, 78.537],
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "loop",
          times: [0, 0.5, 1],
          ease: "easeInOut",
          delay: 0.4
        }}
        transform="rotate(133.73 78.69 323.223)"
        fill="#E6A1D9"
      />
      
      <rect x="61" y="366" width="187" height="16" fill="#E6A1D9" />
      <circle cx="246.5" cy="373.5" r="9.5" fill="#E6A1D9" />
      <circle cx="227.5" cy="372.5" r="9.5" fill="#E6A1D9" />
      <circle cx="76.5" cy="372.5" r="9.5" fill="#E6A1D9" />
      <circle cx="61.5" cy="373.5" r="9.5" fill="#E6A1D9" />
      
      <ellipse cx="154.5" cy="138.5" rx="13.5" ry="9.5" fill="#6A5454" />
      <circle cx="132" cy="110" r="5" fill="#D270CC" />
      <circle cx="176" cy="110" r="5" fill="#D270CC" />
    </svg>
  );
};

