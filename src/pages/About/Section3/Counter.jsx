import { useEffect, useState } from "react";

const Counter = ({
  end,
  duration = 2000,
  decimals = 0,
  suffix = "",
  separator = false,
  start = false,
}) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!start) return;

    let current = 0;
    const fps = 60;
    const totalFrames = (duration / 1000) * fps;
    const increment = end / totalFrames;

    const timer = setInterval(() => {
      current += increment;

      if (current >= end) {
        current = end;
        clearInterval(timer);
      }

      setCount(current);
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [start, end, duration]);

  let value;

  if (separator) {
    value = count.toLocaleString("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  } else {
    value = count.toFixed(decimals);
  }

  return (
    <>
      {value}
      {suffix}
    </>
  );
};

export default Counter; 