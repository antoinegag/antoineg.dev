import React, { useRef } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";

const PyramidMesh = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => {
    const cMesh = mesh.current || null;

    if (cMesh) {
      cMesh.rotation.y += 0.005;

      const pos = Math.sin(state.clock.elapsedTime);
      cMesh.position.y = (pos + 1) / 3;
    }
  });

  const position = [0, 0, 0];

  return (
    <group>
      <mesh {...props} ref={mesh} scale={[2, 2, 2]} position={position}>
        <coneGeometry args={[1, 2, 3, 1, true]} />
        <meshPhongMaterial
          color={new THREE.Color(0x047857)}
          polygonOffset={true}
          polygonOffsetFactor={1}
          polygonOffsetUnits={1}
          wireframe
        />
      </mesh>
    </group>
  );
};

const Pyramid = ({ className }: { className: string }) => {
  return (
    <Canvas className={className}>
      <ambientLight intensity={1} />
      <PyramidMesh position={[0, 0, 0]} />
    </Canvas>
  );
};

export default Pyramid;
