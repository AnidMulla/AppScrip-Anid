"use client";
import { useRouter } from "next/navigation";
import React from "react";

const AboutPage = () => {
  const router = useRouter();

  return (
    <div
      style={{
        minHeight: "60vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 25,
        color: "#1d3557",
      }}
    >
      <h1>About Us - Page Under Construction</h1>
      <button
        style={{
          padding: "12px 20px",
          cursor: "pointer",
          backgroundColor: "#457b9d",
          border: "none",
          color: "#f1faee",
        }}
        onClick={() => router.push("/")}
      >
        Return to Home
      </button>
    </div>
  );
};

export default AboutPage;
