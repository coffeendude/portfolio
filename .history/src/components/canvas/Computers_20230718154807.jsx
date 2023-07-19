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
          intensity={5}
          groundColor="black"
        />
        <pointLight intensity={5} />
        <spotLight
          position={ isMobile ?[80, 400, 120] : [200, 800, 0]}
          // angle={ isMobile ? -0.5 : 0.5}
          angle={0.5}
          penumbra={1}
          intensity={5}
        // castShadow 
        // shadow-mapSize={2048} 
        />
        <primitive
          object={computer.scene}
          // scale={ isMobile ? 0.2 : 4}
          scale={4}
          // position={isMobile ? [-1, 2, 1] : [0, -2.5, -0.5]}
          position={[-.05, -2.5, -0.5]}
          // rotation={isMobile ? [-2, 0.4, 2] : [0, -0.16, -0.01]}
          // rotation={[0, -0.24, -0.05]}
          rotation={[0, 0, 0]}
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
        position: [24, 9, 1.5
        ], fov: 25
      }}
      gL={{ preserveDrawingBuffer: true }}
    >

      <ambientLight intensity={5} />
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
          rotateSpeed={0.008}
        />
          <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />

    </Canvas >

  )

}

export default ComputersCanvas