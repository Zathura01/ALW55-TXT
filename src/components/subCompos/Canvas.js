import React, { useEffect, useRef, useState } from "react";

const Canvas = () => {
  const canvasRef = useRef(null); // Ref for the canvas element
  const [isDrawing, setIsDrawing] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 }); // To track cursor position

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineWidth = 2;
    context.strokeStyle = "black";
    context.lineCap = "round"; // Makes lines smooth and round at edges
  }, []);

  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();

    // Update cursor position while drawing
    setCursorPos({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  };

  const stopDrawing = () => {
    setIsDrawing(false);
  };

  const handleMouseMove = (e) => {
    // Update cursor position when moving over canvas
    setCursorPos({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  };

  return (
    <div style={{ position: "relative" }}>
      {/* Custom Cursor */}
      <div
        style={{
          position: "absolute",
          top: `${cursorPos.y - 2}px`,
          left: `${cursorPos.x - 2}px`,
          width: "4px",
          height: "4px",
          backgroundColor: "black",
          borderRadius: "50%",
          pointerEvents: "none", // Prevent interference with mouse events
          zIndex: 1,
        }}
      ></div>

      {/* Canvas Element */}
      <canvas
        ref={canvasRef}
        width={600}
        height={400}
        style={{
          border: "1px solid black",
          cursor: "none", // Hide the default cursor
        }}
        onMouseDown={startDrawing}
        onMouseMove={(e) => {
          draw(e);
          handleMouseMove(e);
        }}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
      />
    </div>
  );
};

export default Canvas;
