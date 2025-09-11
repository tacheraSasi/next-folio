"use client";
import { motion } from "framer-motion";
import { Brain } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import StarryBackground from "@/components/StarryBackground";
import SplashCursor from "@/components/SplashCursor";
import { pillars, principles } from "@/lib/pillars";

export default function PhilosophyPage() {
  return (
    <>
      <SplashCursor />
      <div className="bg-neutral-900 text-white min-h-screen">
        <StarryBackground />
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative py-20 px-6 pt-32">
            <div className="container mx-auto text-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <Brain className="w-16 h-16 mx-auto mb-6 text-green-400" />
                <h1 className="text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
                  How I Run My Life
                </h1>
                <p className="text-xl text-gray-300 max-w-4xl mx-auto">
                  This page is my playbook  the five pillars I use to stay
                  grounded, grow, and keep building cool stuff. They’re systems
                  I can lean on whether I’m coding, lifting, jamming on guitar,
                  or taking a quiet Sabbath. Everything here works with or
                  without an audience, and it keeps me steady even when life
                  flips upside down.
                </p>
              </motion.div>
            </div>
          </section>

          {/* Introduction */}
          <section className="px-6 pb-12">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-green-400">
                  Introduction
                </h2>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    My life runs on five pillars that keep me grounded and
                    moving forward. They cover what I build, how I stay fit, how
                    I feed my mind, how I play music, and how I stay connected
                    to God. They’re simple systems I can lean on whether I’m
                    shipping a project, training, or just sitting with my
                    thoughts.
                  </p>
                </div>
              </motion.div>
            </div>
          </section>

          {/* Core Pillars */}
          <section className="px-6 pb-12">
            <div className="container mx-auto max-w-6xl">
              <motion.h2
                className="text-4xl font-bold text-center mb-12 text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                The 5 Core Pillars
              </motion.h2>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {pillars.map((pillar, index) => (
                  <motion.div
                    key={pillar.title}
                    className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-6 border border-gray-700/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <div className="flex items-center mb-4">
                      <pillar.icon className={`w-8 h-8 mr-3 ${pillar.color}`} />
                      <h3 className="text-xl font-semibold text-white">
                        {pillar.title}
                      </h3>
                    </div>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {pillar.description}
                    </p>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                        Key Activities:
                      </h4>
                      <ul className="space-y-1">
                        {pillar.activities.map((activity, actIndex) => (
                          <li
                            key={actIndex}
                            className="text-sm text-gray-300 flex items-start"
                          >
                            <span className="text-green-400 mr-2">•</span>
                            {activity}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Daily Structure */}
          {/* <section className="px-6 pb-12">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-green-400">Daily Structure</h2>
                <div className="space-y-6 text-gray-300">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Morning (6:00 AM - 9:00 AM): Spirit & Body</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Wake up, prayer/meditation (30 min) – Start with gratitude and scripture</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Workout (1 hour) – Gym or calisthenics; include mobility</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Breakfast and journaling (30 min) – Reflect on Mind pillar insights</li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Midday (9:00 AM - 1:00 PM): Creation</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Focused coding/engineering session (3-4 hours) – Work on projects like VintLang</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Afternoon (1:00 PM - 3:00 PM): Mind</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Learning block (1-2 hours) – Read, study philosophy, or write</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Lunch and short walk for reset</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Evening (3:00 PM - 6:00 PM): Music & Body/Mind Flex</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Music practice (1 hour) – Guitar, beatboxing, or songwriting</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Optional: Basketball or light reading if energy allows</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-3">Night (6:00 PM - 10:00 PM): Wind Down & Spirit</h3>
                    <ul className="space-y-2 ml-4">
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Dinner, free time for integration</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Evening prayer/meditation (30 min)</li>
                      <li className="flex items-start"><span className="text-green-400 mr-2">•</span>Bed by 10:00 PM for 8 hours sleep</li>
                    </ul>
                  </div>
                </div>
              </motion.div>
            </div>
          </section> */}

          {/* Principles */}
          <section className="px-6 pb-20">
            <div className="container mx-auto max-w-4xl">
              <motion.div
                className="bg-neutral-800/50 backdrop-blur-sm rounded-lg p-8 border border-gray-700/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-green-400">
                  Principles for Living This Life
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {principles.map((principle) => (
                    <div
                      key={principle.title}
                      className="bg-neutral-700/50 rounded-lg p-4"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {principle.title}
                      </h3>
                      <p className="text-gray-300 text-sm">{principle.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-gradient-to-r from-green-900/50 to-green-800/50 rounded-lg border border-green-700/50">
                  <p className="text-green-200 italic text-center">
                    &quot;This structure isn&apos;t rigid it&apos;s a compass.
                    Living this way ensures a life of purpose, growth, and
                    contentment, regardless of external factors.&quot;
                  </p>
                </div>
              </motion.div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </>
  );
}
