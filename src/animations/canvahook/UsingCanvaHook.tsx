"use client"
import React from 'react'
import useCanvasCursor from '@/animations/canvahook/useCanvasCursor '
const UsingCanvaHook = () => {
    useCanvasCursor()
    return (
        <div>
            <canvas
                className="pointer-events-none fixed inset-0"
                id="canvas"
            />

        </div>
    )
}

export default UsingCanvaHook