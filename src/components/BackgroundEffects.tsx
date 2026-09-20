import { Canvas, useFrame } from '@react-three/fiber';
import { Icosahedron, TorusKnot, Sparkles } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';



// Highly aggressive, complex AI Core
const AICore = () => {
  const coreRef = useRef<THREE.Group>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.elapsedTime;
    const scrollY = window.scrollY;
    
    if (coreRef.current) {
      // Continuous base rotation
      const baseRotY = time * 0.2 + (scrollY * 0.001);
      const baseRotX = time * 0.15;
      
      // Target offset based on mouse position
      const mouseOffsetY = (state.pointer.x * Math.PI) / 3;
      const mouseOffsetX = -(state.pointer.y * Math.PI) / 3;
      
      // Smoothly interpolate to the combined rotation
      coreRef.current.rotation.y = THREE.MathUtils.lerp(coreRef.current.rotation.y, baseRotY + mouseOffsetY, 0.05);
      coreRef.current.rotation.x = THREE.MathUtils.lerp(coreRef.current.rotation.x, baseRotX + mouseOffsetX, 0.05);

      coreRef.current.position.y = THREE.MathUtils.lerp(coreRef.current.position.y, (scrollY * 0.005), 0.1);
    }
    
    if (ring1Ref.current && ring2Ref.current) {
      ring1Ref.current.rotation.z = time * 0.8;
      ring2Ref.current.rotation.y = -time * 1.2;
      ring2Ref.current.rotation.x = time * 0.5;
    }
  });

  return (
    <group ref={coreRef} position={[0, 0, -3]} scale={1.5}>
      {/* Central Neural Node */}
      <Icosahedron args={[1, 2]}>
        <meshStandardMaterial color="#ffffff" wireframe={true} wireframeLinewidth={2} transparent opacity={0.15} />
      </Icosahedron>

      {/* Inner Data Core */}
      <Icosahedron args={[0.7, 1]}>
        <meshStandardMaterial color="#222222" roughness={0.4} metalness={0.9} emissive="#050505" />
      </Icosahedron>

      {/* Complex Quantum Ring 1 */}
      <TorusKnot ref={ring1Ref} args={[1.5, 0.02, 256, 16, 3, 7]}>
        <meshStandardMaterial color="#ffffff" wireframe={true} transparent opacity={0.1} />
      </TorusKnot>

      {/* Complex Quantum Ring 2 - Silver Glow */}
      <TorusKnot ref={ring2Ref} args={[2, 0.05, 128, 8, 2, 5]}>
        <meshStandardMaterial color="#ffffff" roughness={0.1} metalness={0.9} emissive="#ffffff" emissiveIntensity={0.1} transparent opacity={0.5} />
      </TorusKnot>

      {/* Data Swarm (Particles) */}
      <Sparkles count={300} scale={8} size={2} speed={0.5} opacity={0.4} color="#ffffff" />
      
    </group>
  );
};

const BackgroundEffects = () => {
  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden bg-black">
      
      <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-[#0a0a0a]"></div>

      {/* 3D Canvas Layer */}
      <div className="absolute inset-0">
        <Canvas camera={{ position: [0, 0, 8], fov: 45 }} eventSource={document.body}>
          <ambientLight intensity={0.2} />
          <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
          <directionalLight position={[-10, -10, -10]} intensity={0.5} color="#ffffff" />
          
          <AICore />
        </Canvas>
      </div>

      {/* Tech Grid Overlay for absolute AI aesthetic */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{ 
          backgroundImage: `
            linear-gradient(to right, #ffffff 1px, transparent 1px),
            linear-gradient(to bottom, #ffffff 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>
      
    </div>
  );
};

export default BackgroundEffects;
