'use client'

import React, { useRef, useEffect } from 'react'
import * as THREE from 'three'

const ThreeBackground = () => {
  const mountRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })

    renderer.setSize(window.innerWidth, window.innerHeight)
    mountRef.current.appendChild(renderer.domElement)

    const particles = new THREE.BufferGeometry()
    const particleCount = 100

    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i++) {
      positions[i] = (Math.random() - 0.5) * 10
      colors[i] = Math.random()
    }

    particles.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    particles.setAttribute('color', new THREE.BufferAttribute(colors, 3))

    const material = new THREE.PointsMaterial({
      size: 0.1,
      vertexColors: true,
      transparent: true,
      opacity: 0.8
    })

    const particleSystem = new THREE.Points(particles, material)
    scene.add(particleSystem)

    camera.position.z = 5

    const mouse = new THREE.Vector2()
    const target = new THREE.Vector2()
    const windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2)

    function onMouseMove(event) {
      mouse.x = (event.clientX - windowHalf.x)
      mouse.y = (event.clientY - windowHalf.y)
    }

    window.addEventListener('mousemove', onMouseMove, false)

    function animate() {
      requestAnimationFrame(animate)

      target.x = (1 - mouse.x) * 0.002
      target.y = (1 - mouse.y) * 0.002

      camera.rotation.x += 0.05 * (target.y - camera.rotation.x)
      camera.rotation.y += 0.05 * (target.x - camera.rotation.y)

      renderer.render(scene, camera)
    }

    animate()

    function handleResize() {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
      windowHalf.set(window.innerWidth / 2, window.innerHeight / 2)
    }

    window.addEventListener('resize', handleResize, false)

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', handleResize)
      mountRef.current.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }} />
}

export default ThreeBackground