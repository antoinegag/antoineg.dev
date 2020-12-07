import React, { useRef, useState, useMemo } from "react";
import { Canvas, useFrame } from "react-three-fiber";
import * as THREE from "three";
import { ConeGeometry, EdgesGeometry, Mesh } from "three";

const PyramidMesh = (props) => {
  // This reference will give us direct access to the mesh
  const mesh = useRef();
  const inner = useRef();

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false);
  const [active, setActive] = useState(false);

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame((state, delta) => {
    const cMesh = mesh.current || null;
    const cin = inner.current || null;

    if (cMesh) {
      cMesh.rotation.y += 0.005;

      const pos = Math.sin(state.clock.elapsedTime);
      cMesh.position.y = (pos + 1) / 3;
    }
  });

  const position = [5, 0, -3];

  return (
    <group>
      <mesh {...props} ref={mesh} scale={[1, 1, 1]} position={position}>
        <coneGeometry args={[1, 2, 3, 1, true]} />
        <meshPhongMaterial
          color={hovered ? "orange" : "white"}
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
    <Canvas className={className} style={{ position: "" }}>
      <ambientLight intensity={1} />
      {/* <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} /> */}
      <gridHelper
        args={[30, 20, "orange", new THREE.Color(0xd97706)]}
        rotation={new THREE.Euler(0.1, 0, 0)}
        position={[0, -3, -0.6]}
      />
      <PyramidMesh position={[0, 0, 0]} />
    </Canvas>
  );
};

export default Pyramid;
