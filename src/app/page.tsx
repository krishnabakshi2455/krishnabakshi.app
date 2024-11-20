"use client"
import Image from "next/image";
import useCanvasCursor from '../animations/canvahook/useCanvasCursor '
import { motion } from "framer-motion";
import Header from './Header/pages'

export default function Home() {
  useCanvasCursor()
  return (
    <>
      <canvas
        className="pointer-events-none fixed inset-0"
        id="canvas"
      />

      <div className="fixed top-0 w-full h-10">
        <Header />
      </div>


    </>
  );
}
