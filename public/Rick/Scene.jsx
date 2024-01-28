/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf --transform 
Files: scene.gltf [3.68KB] > C:\Users\Mae K\OneDrive - nevada.unr.edu\Documents\2023-2024\Winter 2024\IrvineHacks 2024\my-app\public\Rick\scene-transformed.glb [141.37KB] (-3742%)
Author: DavidA3D (https://sketchfab.com/DavidA3D)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/rick-rick-and-morty-3c0928c16ddd4e61ab23d0b141648ed4
Title: Rick (Rick and Morty)
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.Material1} position={[-0.306, -0.003, 0.315]} rotation={[-Math.PI / 2, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
