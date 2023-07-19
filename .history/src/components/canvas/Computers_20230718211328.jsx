import { Suspense, useEffect, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Preload, useGLTF } from '@react-three/drei';
import CanvasLoader from '../Loader';


const Computers = ({ isMobile }) => {
  // const computer = useGLTF('./desktop_pc/scene.gltf')
  const computer = useGLTF('./matrix_void/scene.gltf')
  // const computer = useGLTF('./sci-fi_globe/scene.gltf')

  return (
     <mesh>
        {/* <hemisphereLight
          intensity={5}
          groundColor="black"
        /> */}
        <pointLight position={[80, 100, 100]} intensity={5} />
        <spotLight
          // position={ isMobile ?[80, 400, 120] : [200, 800, 0]}
          position={[200, 60, 1000]}
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
          scale={6}
          // position={isMobile ? [-1, 2, 1] : [0, -2.5, -0.5]}
          // position={[0, -3.5, -2, 5, -6]}
          position={[-8, -9.5, -8.5]}
          // rotation={isMobile ? [-2, 0.4, 2] : [0, -0.16, -0.01]}
          // rotation={[0, -0.24, -0.05]}
          rotation={[0, 0, 0]}
        />
        {/* <Animation prototype={new AnimationEffect: } /> */}
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
      // camera={{
      //   position: [15, 19, -5
      //   ], fov: 27
      // }}
      camera={{ position: [19, 20, -10.5], fov: 60 }}
      gL={{ preserveDrawingBuffer: true }}
    >

      <ambientLight />
      {/* <directionalLight position={[-5, 5, 5]} castShadow shadow-mapSize={1024} /> */}
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