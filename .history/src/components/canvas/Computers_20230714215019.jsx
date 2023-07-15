import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Computers = () => {
  // const computer = useGLTF('./desktop_pc/scene.gltf')
  const computer = useGLTF('./matrix_void/scene.gltf')

  return (
    <mesh>
      <hemisphereLight 
        intensity={0.8} 
        groundColor="black"
      />
      <pointLight intensity={1} />
      <spotLight position={[20, -12, -4]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive 
        object={computer.scene}
        scale={0.7}
        position={[3, 0, 0]}
        rotation={[-0.01, -0.6, 0]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      shadows
      camera={{ position: [20, 2, 2], fov: 30 }}
      gL={{ preserveDrawingBuffer: true }}
    >
      <Suspense 
        // fallback={<CanvasLoader />}
      >
        <OrbitControls 
          enableZoom={false} 
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Computers />
      </Suspense>
      <Preload all />
    </Canvas>
  )

}

export default ComputersCanvas