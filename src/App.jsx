import { Suspense } from 'react'
import './App.css'
import {Canvas} from '@react-three/fiber'
import {Environment , OrbitControls} from '@react-three/drei'
import Scene from '../public/Scene'

function App() {


  return (
    <>
      <Canvas>
      <ambientLight intensity={1} />
      <OrbitControls enableZoom={false} autoRotate />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Environment preset='sunset' />
      </Canvas>
      <h1>_coding__hub_ -- Follow,Like and Share </h1>
    </>
  )
}

export default App
