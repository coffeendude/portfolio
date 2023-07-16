import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { PresentationControls, OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';

import { motion } from 'framer-motion';


const Computers = () => {
  // const computer = useGLTF('./desktop_pc/scene.gltf')
  const computer = useGLTF('./matrix_void/scene.gltf')

  return (
<motion.div
        animate={{
          x: [9, 2, 0],
          y:
        }}
        transition={{
          duration: 3,

        }}>
    <PresentationControls
      enabled={true} // the controls can be disabled by setting this to false
      global={false} // Spin globally or by dragging the model
      cursor={true} // Whether to toggle cursor style on drag
      snap={true} // Snap-back to center (can also be a spring config)
      speed={1} // Speed factor
      zoom={0} // Zoom factor when half the polar-max is reached
      // rotation={[0, 0, 0]} // Default rotation
      polar={[0, Math.PI / 2]} // Vertical limits
    // azimuth={[-Infinity, Infinity]} // Horizontal limits
    // config={{ mass: 1, tension: 170, friction: 26 }} // Spring config
    // domElement={events.connected} // The DOM element events for this controller will attach to

    >

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
    </PresentationControls>
    </motion.div>
  )
}

const ComputersCanvas = () => {
  return (

    <Canvas
      frameloop="demand"
      // shadows
      camera={{
        position: [25, 9, 1.5
        ], fov: 22
      }}
      gL={{ preserveDrawingBuffer: true }}
    >
      
        <ambientLight intensity={2} />
        <Suspense
          fallback={<CanvasLoader />}
        >
          <OrbitControls
            enableZoom={false}
            maxPolarAngle={Math.PI / 2}
            minPolarAngle={Math.PI / 2}
          />
          <Computers />
        </Suspense>
        <Preload all />
      
    </Canvas >
  )

}

export default ComputersCanvas