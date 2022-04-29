import React, { Suspense } from 'react';
import { OrbitControls } from "@react-three/drei";
import { Canvas,useLoader } from "@react-three/fiber"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

function Model(props) {
  const { scene } = useLoader(GLTFLoader, 'http://localhost:3001/'+ props.model)
  return <primitive object={scene} />;
}

function ThreeDModels(props) {
  return (
    <div style = {{height:`${props.height ? props.dimension : '100vh' }`, width: `${props.width ? props.width : '100vw'}`, backgroundColor:"#fde2e4"}}>
      <Canvas camera={{position: [10, 18, 23], fov: 0.5 }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} intensity={2} />
        <Suspense fallback={null}>
          <Model model={props.model}/>
        </Suspense>
        <OrbitControls />
      </Canvas>
    </div>
  );
}

export default ThreeDModels