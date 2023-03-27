import { useSpring, animated } from "@react-spring/web";
import React, { useState } from "react";

export default function ReactSpringExample() {
  const [state, toggle] = useState(true);
  const { x } = useSpring({
    from: { x: 0 },
    x: state ? 1 : 0,
    config: { duration: 1000 },
  });
  return (
    <div
      className="flex items-center h-[100%] justify-center"
      onClick={() => toggle(!state)}
    >
      <animated.div
        className="font-semibold text-[8em]"
        style={{
          opacity: x.to({ range: [0, 1], output: [0.3, 1] }),
          scale: x.to({
            range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
            output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1],
          }),
        }}
      >
        click
      </animated.div>
    </div>
  );
}
