/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.16 SciFi.gltf --transform 
Files: SciFi.gltf [3.22KB] > C:\Users\Mae K\OneDrive - nevada.unr.edu\Documents\2023-2024\Winter 2024\IrvineHacks 2024\my-app\public\SciFi-transformed.glb [350.72KB] (-10792%)
Author: RubyB (https://sketchfab.com/RubyB)
License: CC-BY-SA-4.0 (http://creativecommons.org/licenses/by-sa/4.0/)
Source: https://sketchfab.com/3d-models/mike-sully-faceswap-meme-da10b8a72c324d53934fa9d872e4b3a5
Title: Mike Sully Faceswap meme
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Mike/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_2.geometry} material={materials.defaultMat} rotation={[-Math.PI / 2, 0, 0]} scale={1.256} />
    </group>
  )
}

useGLTF.preload('/Mike/scene-transformed.glb')
