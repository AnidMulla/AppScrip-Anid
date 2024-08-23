"use client";
import { useRouter } from "next/navigation";
import React from "react";

const Skills = () => {
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
        color: "#e76f51",
      }}
    >
      <h1>Skills Page - Under Construction</h1>
      <button
        style={{
          padding: "10px",
          cursor: "pointer",
          backgroundColor: "#2a9d8f",
          border: "none",
          color: "#fff",
        }}
        onClick={() => navigate.push("/")}
      >
        Back to Home
      </button>
    </div>
  );
};

export default Skills;
