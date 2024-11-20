"use client"
import Image from "next/image";
import useCanvasCursor from '../animations/canvahook/useCanvasCursor '


export default function Home() {
  useCanvasCursor()
  return (
    <>
      <canvas
        className="pointer-events-none fixed inset-0"
        id="canvas"
      />
    hello world
    </>
  );
}
