import { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';


const Stars = (props) => {
  return (
    <div>Stars</div>
  )
}

const StarsCanvas = () => {
  <div className=" w-full h-full absolute inset-0 z-[-1]">
    <Canvas
      camera={{ position: [] }}
    >

    </Canvas>
  </div>
}

export default StarsCanvas