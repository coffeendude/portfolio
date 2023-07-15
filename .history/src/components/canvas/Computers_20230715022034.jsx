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
        intensity={0.15} 
        groundColor="black"
      />
      <pointLight intensity={1} />
      <spotLight position={[-900, -300, 400]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive 
        object={computer.scene}
        scale={4}
        position={[0, -2.5, -0.5]}
        rotation={[0.02, 0, -.03]}
      />
    </mesh>
  )
}

const ComputersCanvas = () => {
  return (
    <Canvas
      frameloop="demand"
      // shadows
      camera={{ position: [25, 5, -.9
      ], fov: 24 }}
      gL={{ preserveDrawingBuffer: true }}
    >
      <ambientLight />
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