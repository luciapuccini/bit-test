import React from "react";
import { ButtonText } from "@luciap/test.ui.button-text";

export function Button({ text }) {
  return (
    <button
      style={{
        fontSize: "1rem",
        backgroundColor: "gold",
        border: "none",
        borderRadius: "20px",
        padding: "12px",
      }}
    >
      <ButtonText text={text} />
    </button>
  );
}
