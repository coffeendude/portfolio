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
        // intensity={0.15} 
        intensity={2} 
        groundColor="black"
      />
      {/* <hemisphereLight
        skycolor={new THREE.Color(0xffffff)}
        groundColor={new THREE.Color(0xffffff)}
        intensity={0.61}
        position={[0, 50, 0]}
      /> */}
      <pointLight intensity={8} />
      <spotLight
        position={[-60, -300, 400]}
        angle={0.26}
        penumbra={0}
        intensity={4}
        castShadow 
        shadow-mapSize={2048} 
      />
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
      camera={{
        position: [25, 5, -.9
        ], fov: 24
      }}
      gL={{ preserveDrawingBuffer: true }}
    >
      {/* <ambientLight /> */}
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