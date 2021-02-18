// @ts-nocheck
import { useHelper } from "@react-three/drei";
import React, { useRef, useState, useMemo, Suspense, useEffect } from "react";
import {
  Canvas,
  useFrame,
  useLoader,
  useThree,
  extend,
} from "react-three-fiber";
import * as THREE from "three";
import { SpotLightHelper } from "three";

const RoverModel = () => {
  // const { viewport } = useThree();
  const ref = useRef();

  // useFrame(({ mouse }) => {
  //   // if (ref.current) {
  //   //   const x = (mouse.x * viewport.width) / 2 - 100;
  //   //   ref.current.rotation.set(0.1, x, 0);
  //   // }
  // });

  const gltf = useLoader(
    require("three/examples/jsm/loaders/GLTFLoader").GLTFLoader,
    "./Perseverance.glb"
  );
  return (
    <primitive
      ref={ref}
      object={(gltf as any).scene} // I'm so sorry
      position={[0, -2, 0]}
      rotation={new THREE.Euler(0, 0.5, 0)}
    />
  );
};

const CameraControls = () => {
  const OrbitControls = require("three/examples/jsm/controls/OrbitControls")
    .OrbitControls;
  extend({ OrbitControls });
  const {
    camera,
    gl: { domElement },
  } = useThree();

  // Ref to the controls, so that we can update them on every frame using useFrame
  const controls = useRef();
  useFrame((state) => controls.current.update());
  return (
    <orbitControls
      ref={controls}
      args={[camera, domElement]}
      enableZoom={true}
    />
  );
};

const Spotlight = () => {
  const spotlight = useRef();
  // useHelper(spotlight, SpotLightHelper);
  return (
    <spotLight
      position={[0, 0, 10]}
      angle={0.3}
      penumbra={1}
      ref={spotlight}
      distance={200}
    />
  );
};

const Rover = ({ className }: { className: string }) => {
  return (
    <Canvas className={className} style={{ position: "" }}>
      <ambientLight intensity={0.5} />
      <Spotlight />
      <gridHelper
        args={[30, 20, "#a82700", new THREE.Color(0xa82700)]}
        rotation={new THREE.Euler(0, 0, 0)}
        position={[0, -2, -0.6]}
      />
      <CameraControls />
      <Suspense fallback={null}>
        <RoverModel />
      </Suspense>
    </Canvas>
  );
};

export default Rover;
