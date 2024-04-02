import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model(props) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/scene.gltf')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model" rotation={[-Math.PI / 2, 0, 0]} scale={2.5}>
          <group name="root">
            <group name="GLTF_SceneRootNode" rotation={[Math.PI / 2, 0, 0]}>
              <group name="Clouds_1">
                <mesh name="Object_6" geometry={nodes.Object_6.geometry} material={materials.clouds} />
              </group>
              <group name="Earth_0">
                <mesh name="Object_4" geometry={nodes.Object_4.geometry} material={materials.earth} />
              </group>
            </group>
          </group>
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
