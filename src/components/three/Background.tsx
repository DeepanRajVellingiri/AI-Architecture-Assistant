import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as random from 'maath/random';

function Stars() {
  const ref = useRef<any>();
  
  // Use useMemo to generate positions once and prevent regeneration on each render
  const positions = useMemo(() => {
    const pos = new Float32Array(5000 * 3); // 5000 points * 3 coordinates (x,y,z)
    for (let i = 0; i < 5000 * 3; i += 3) {
      // Generate random coordinates between -1.5 and 1.5
      pos[i] = (Math.random() - 0.5) * 3;     // x
      pos[i + 1] = (Math.random() - 0.5) * 3; // y
      pos[i + 2] = (Math.random() - 0.5) * 3; // z
      
      // Ensure minimum distance from center
      const distance = Math.sqrt(pos[i] * pos[i] + pos[i + 1] * pos[i + 1] + pos[i + 2] * pos[i + 2]);
      if (distance < 0.5) {
        const scale = 0.5 / distance;
        pos[i] *= scale;
        pos[i + 1] *= scale;
        pos[i + 2] *= scale;
      }
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points
        ref={ref}
        positions={positions}
        stride={3}
        frustumCulled={false}
      >
        <PointMaterial
          transparent
          color="#fff"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
}

const Background = () => {
  return (
    <div className="fixed inset-0 bg-[#000814]">
      <Canvas
        camera={{ position: [0, 0, 1] }}
        style={{ position: 'absolute' }}
      >
        <Stars />
      </Canvas>
    </div>
  );
};

export default Background;