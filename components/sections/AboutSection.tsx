'use client'

import { motion } from 'framer-motion'
import AnimateSection from '../ui/AnimateSection'
import StaggerContainer from '../ui/StaggerContainer'
import StaggerItem from '../ui/StaggerItem'

import { Shield, Users, TrendingUp, Award } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'

const stats = [
  { value: '107', label: 'Years of Legacy', suffix: '' },
  { value: '500', label: 'Member Businesses', suffix: '+' },
  { value: '64', label: 'Districts Covered', suffix: '' },
  { value: '1919', label: 'Founded', suffix: '' },
]

const pillars = [
  {
    icon: Shield,
    title: 'Compliance & Trust',
    desc: 'Upholding trade standards and consumer protection across Bangladesh\'s gold market.',
  },
  {
    icon: Users,
    title: 'Industry Representation',
    desc: 'Unified voice for bullion dealers, jewellers, manufacturers and wholesale traders.',
  },
  {
    icon: TrendingUp,
    title: 'Market Intelligence',
    desc: 'Daily price guidance, market monitoring and economic research for members.',
  },
  {
    icon: Award,
    title: 'Expertise & Value',
    desc: 'Decades of institutional knowledge driving Bangladesh\'s gold industry forward.',
  },
]

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-dark-surface relative overflow-hidden">
      {/* Decorative bg ring */}
      <div className="absolute -left-40 top-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full border border-gold-bright/5 pointer-events-none" />
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-[320px] h-[320px] rounded-full border border-gold-bright/5 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <AnimateSection direction="up" delay={0}>
          <SectionHeader
            tag="Who We Are"
            title="Bangladesh's Premier Gold Industry Authority"
            subtitle="The Bangladesh Bullion and Jewellers Association (BAJUS) has represented the gold, bullion and jewellery trade since 1919 — connecting retailers, wholesalers, manufacturers and investors across the country."
          />
        </AnimateSection>

        {/* Two column: text left, stats right */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Left — mission text */}
          <AnimateSection direction="left" delay={0.1}>
            <div className="space-y-6">
              <p className="text-text-muted leading-relaxed text-base">
                Built on seven core principles — <span className="text-gold-warm">Compliance, Trust, Expertise, Value, Range,</span> and <span className="text-gold-warm">Security</span> — BAJUS deeply embodies each one. For over a century, we have been the institutional backbone of Bangladesh's gold economy, shaping policy, protecting consumers, and elevating trade standards nationwide.
              </p>
              <p className="text-text-muted leading-relaxed text-base">
                Our initiatives — from the City of Gold programme to the Annual Gold Fair — have positioned Bangladesh as an emerging destination for gold investment and craftsmanship in South Asia.
              </p>

              {/* Gold divider */}
              <div className="w-16 h-[2px] bg-gradient-to-r from-gold-bright to-transparent" />

              <p className="text-gold-warm font-serif text-lg italic">
                "Empowering every link in Bangladesh's gold value chain."
              </p>
            </div>
          </AnimateSection>

          {/* Right — stat grid */}
          <StaggerContainer staggerDelay={0.08}>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <StaggerItem key={stat.label}>
                  <div className="bg-dark-bg border border-gold-brown/20 rounded-lg p-6 text-center hover:border-gold-bright/40 transition-colors duration-300">
                    <div className="font-serif text-4xl font-bold text-gold-bright">
                      {stat.value}<span className="text-gold-warm">{stat.suffix}</span>
                    </div>
                    <div className="text-text-muted text-sm mt-2">{stat.label}</div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>

        {/* Four pillars */}
        <div className="mt-20">
          <AnimateSection direction="up" delay={0}>
            <h3 className="text-center text-xl font-serif text-text-primary mb-10">
              Our <span className="text-gold-bright">Core Pillars</span>
            </h3>
          </AnimateSection>
          <StaggerContainer staggerDelay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {pillars.map((p) => {
                const Icon = p.icon
                return (
                  <StaggerItem key={p.title}>
                    <motion.div
                      whileHover={{ y: -4, transition: { duration: 0.2 } }}
                      className="bg-dark-bg border border-gold-brown/20 rounded-lg p-6 group hover:border-gold-bright/40 transition-colors duration-300"
                    >
                      <div className="w-10 h-10 rounded-md bg-gold-bright/10 flex items-center justify-center mb-4 group-hover:bg-gold-bright/20 transition-colors">
                        <Icon className="w-5 h-5 text-gold-bright" />
                      </div>
                      <h4 className="text-text-primary font-medium text-sm mb-2">{p.title}</h4>
                      <p className="text-text-muted text-xs leading-relaxed">{p.desc}</p>
                    </motion.div>
                  </StaggerItem>
                )
              })}
            </div>
          </StaggerContainer>
        </div>
      </div>
    </section>
  )
}
