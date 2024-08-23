"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Contact = () => {
  const navigate = useRouter();

  return (
    <div
      style={{
        minHeight: "50vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 20,
        color: "#264653",
      }}
    >
      <h1>Contact Page - Under Construction</h1>
      <button
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          backgroundColor: "#2a9d8f",
          border: "none",
          color: "#fff",
        }}
        onClick={() => navigate.push("/")}
      >
        Return to Home
      </button>
    </div>
  );
};

export default Contact;
