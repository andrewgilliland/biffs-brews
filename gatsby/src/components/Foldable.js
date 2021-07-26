import React, { useState } from 'react';

export default function Foldable({ width, height, src }) {
  const [foldAngle, setFoldAngle] = useState(0);

  const sharedStyles = {
    width,
    height: height / 2,
    backgroundSize: `${width}px ${height}px`,
    backgroundImage: `url(${src})`,
    maxWidth: `${width}px`,
  };

  return (
    <div style={{ perspective: 500, margin: `2rem` }}>
      {/* Top Half */}
      <div style={sharedStyles} />
      {/* Bottom Half */}
      <div
        style={{
          ...sharedStyles,
          // Shift our background up to make it contiguous with the top half
          backgroundPosition: `0px -100%`,
          // Apply the folding rotation:
          transform: `rotateX(${foldAngle}deg)`,
          transformOrigin: 'center top',
          // This optional prop can improve performance, by letting the browser optimize it:
          willChange: 'transform',
        }}
      />

      {/* Slider Control */}
      <br />
      <label htmlFor="slider">
        Fold ratio:
        <input
          id="slider"
          type="range"
          min={0}
          max={180}
          value={foldAngle}
          onChange={(ev) => setFoldAngle(ev.target.value)}
          style={{ width }}
        />
      </label>
    </div>
  );
}
