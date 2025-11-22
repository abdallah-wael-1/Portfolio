import { useState, useEffect } from "react";

export function useTypewriter(text = "", speed = 100) {
  const [index, setIndex] = useState(0);
  const [output, setOutput] = useState("");

  useEffect(() => {
    setIndex(0);
    setOutput("");
  }, [text]);

  useEffect(() => {
    if (index >= text.length) return;

    const timeout = setTimeout(() => {
      setOutput((prev) => prev + text.charAt(index));
      setIndex(index + 1);
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, text, speed]);

  return output;
}
