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
          intensity={2}
          groundColor="black"
        />
        <pointLight intensity={8} />
        <spotLight
          position={[200, 800, 0]}
          angle={0.5}
          penumbra={0}
          intensity={4}
        // castShadow 
        // shadow-mapSize={2048} 
        />
        <primitive
          object={computer.scene}
          scale={4}
          position={[0, -2.5, -0.5]}
          rotation={[0, -0.16, -0.01]}
        />
      </mesh >
    
  )
}

const ComputersCanvas = () => {
  return (

    <Canvas
      frameloop="demand"
      // shadows
      camera={{
        position: [25, 9, 1.5
        ], fov: 28
      }}
      gL={{ preserveDrawingBuffer: true }}
    >

      <ambientLight intensity={2} />
      <Suspense
        fallback={<CanvasLoader />}
      >
        <OrbitControls
          autoRotate
          enableZoom={false}
          // enableDamping
          // dampingFactor={0.5}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          rotateSpeed={0.1}
        />

          <Computers />
      </Suspense>
      <Preload all />

    </Canvas >

  )

}

export default ComputersCanvas