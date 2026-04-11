'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface StaggerContainerProps {
  children: React.ReactNode
  staggerDelay?: number
  className?: string
}

export default function StaggerContainer({ 
  children, 
  staggerDelay = 0.1,
  className 
}: StaggerContainerProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: staggerDelay } },
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}
