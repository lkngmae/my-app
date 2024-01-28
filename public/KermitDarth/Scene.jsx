/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 scene.gltf --transform 
Files: scene.gltf [11.9KB] > C:\Users\Mae K\OneDrive - nevada.unr.edu\Documents\2023-2024\Winter 2024\IrvineHacks 2024\my-app\public\KermitDarth\scene-transformed.glb [914.07KB] (-7581%)
Author: ₵₳₮ ₵Ɽł₮ł₵₳Ⱡ. (https://sketchfab.com/cat_critical)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/darth-kermit-the-wise-5d59ba11ba1c40af913217ba03c8b3d6
Title: Darth Kermit The Wise
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.PaletteMaterial001} rotation={[-Math.PI, 0, 0]} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
