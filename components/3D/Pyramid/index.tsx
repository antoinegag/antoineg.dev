import { POINT_CONVERSION_COMPRESSED } from "constants";
import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { ConeGeometry, Mesh } from "three";

const PyramidMesh = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => {
    const cMesh = mesh.current || null;

    if (cMesh) {
      cMesh.rotation.y += 0.005;

      const pos = Math.sin(state.clock.elapsedTime);
      cMesh.position.y = (pos + 1) / 3;
    }
  });

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={[1, 1, 1]}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <coneGeometry args={[1, 2, 3, 1, true]} />
      <meshStandardMaterial color={hovered ? "white" : "orange"} wireframe />
    </mesh>
  );
};

const Pyramid = ({ className }: { className: string }) => {
  return (
    <Canvas className={className}>
      <ambientLight intensity={0.2} />
      <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <PyramidMesh position={[0, 0, 0]} />
    </Canvas>
  );
};

export default Pyramid;
