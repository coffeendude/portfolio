import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Computers = ({ isMobile }) => {
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
          position={ isMobile ?[80, 400, 120] : [200, 800, 0]}
          angle={ isMobile ? -0.5 : 0.5}
          penumbra={0}
          intensity={4}
        // castShadow 
        // shadow-mapSize={2048} 
        />
        <primitive
          object={computer.scene}
          scale={ isMobile ? 0.2 : 4}
          position={isMobile ? [-1, 2, 1] : [0, -2.5, -0.5]}
          rotation={isMobile ? [-2, 0.4, 2] : [0, -0.16, -0.01]}
        />
      </mesh >
    
  )
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)");

    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change', handleMediaQueryChange);

    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    }
  }, [])

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

      <ambientLight intensity={{ intensity: {value: -8, min: 0, max: 5}}} />
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
          <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />

    </Canvas >

  )

}

export default ComputersCanvas