import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Dodecahedron, OrbitControls } from '@react-three/drei';

const SpinningMesh = () => {
  const meshRef = useRef();

  // This hook runs on every frame, allowing for animation
  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.002;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Dodecahedron ref={meshRef} args={[1.8, 0]}>
      <meshStandardMaterial color="#00ffff" wireframe />
    </Dodecahedron>
  );
};

const ThreeScene = () => {
  return (
    <Canvas>
      <ambientLight intensity={0.2} />
      <pointLight position={[10, 10, 10]} intensity={1} />
      <SpinningMesh />
      <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={0.5} />
    </Canvas>
  );
};

export default ThreeScene;