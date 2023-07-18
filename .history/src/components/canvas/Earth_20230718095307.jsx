import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader';

const Earth = () => {
  return (
    <div>Earth</div>
  )
}

const EarthCanvas = () => {
  return (
    <Canvas
      shadows
      frameLoop='demand'
      gL={{ preserveDrawingBuffer: true }}
      camera={{ }}
    >
      <Suspense fallback={<CnvasLoader />}>
        <OrbitControls 
          autoRotate
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Earth />
      </Suspense>

    </Canvas>
  )
}

export default EarthCanvas