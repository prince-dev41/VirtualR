'use client'

import React, { useEffect, useRef } from 'react'

const MouseFollowBackground = () => {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let particles = []
    let mouseX = 0
    let mouseY = 0

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }

    const createParticle = (x, y) => {
      return {
        x,
        y,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
        life: 0,
        maxLife: Math.random() * 100 + 50,
      }
    }

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)
      particles.forEach((p, index) => {
        p.x += (mouseX - p.x) * 0.05
        p.y += (mouseY - p.y) * 0.05
        p.x += p.speedX
        p.y += p.speedY
        p.life++

        if (p.life >= p.maxLife) {
          particles.splice(index, 1)
        }

        const alpha = 1 - p.life / p.maxLife
        ctx.fillStyle = `rgba(244, 112, 21, ${alpha})`  // Orange color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()
      })
    }

    const animate = () => {
      drawParticles()
      if (particles.length < 100) {
        particles.push(createParticle(mouseX, mouseY))
      }
      requestAnimationFrame(animate)
    }

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    window.addEventListener('resize', resize)
    window.addEventListener('mousemove', handleMouseMove)
    resize()
    animate()

    return () => {
      window.removeEventListener('resize', resize)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        zIndex: -1,
      }}
    />
  )
}

export default MouseFollowBackground