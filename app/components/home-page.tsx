'use client';

import { useState, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import confetti from 'canvas-confetti';
import { Code, Palette, Database, Sparkles } from 'lucide-react';
import { homepageContent } from '../lib/homepageContent'; // Importa el contenido

export function HomePageComponent() {
  const [confettiTriggered, setConfettiTriggered] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('visible');
      if (!confettiTriggered) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });
        setConfettiTriggered(true);
      }
    }
  }, [controls, inView, confettiTriggered]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <header className="p-6 flex justify-between items-center">
        <motion.h1
          className="text-4xl font-bold"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {homepageContent.header.title}
        </motion.h1>
        <nav>
          <motion.ul
            className="flex space-x-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            {homepageContent.header.navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="hover:text-yellow-300 transition-colors"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </motion.ul>
        </nav>
      </header>

      <main className="container mx-auto px-6 py-12">
        <motion.section
          id="about"
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2
            className="text-5xl font-bold mb-6"
            variants={itemVariants}
          >
            {homepageContent.aboutSection.title}
          </motion.h2>
          {homepageContent.aboutSection.description.map((desc, idx) => (
            <motion.p
              className="text-xl mb-4"
              key={idx}
              variants={itemVariants}
            >
              {desc}
            </motion.p>
          ))}
        </motion.section>

        <motion.section
          id="skills"
          className="mb-20"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2
            className="text-4xl font-bold mb-8"
            variants={itemVariants}
          >
            {homepageContent.skillsSection.title}
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {homepageContent.skillsSection.skills.map((skill, idx) => (
              <motion.div
                className="bg-white bg-opacity-10 p-6 rounded-lg"
                key={idx}
                variants={itemVariants}
              >
                {skill.icon === 'Code' && (
                  <Code className="w-12 h-12 mb-4 text-yellow-300" />
                )}
                {skill.icon === 'Database' && (
                  <Database className="w-12 h-12 mb-4 text-green-300" />
                )}
                {skill.icon === 'Palette' && (
                  <Palette className="w-12 h-12 mb-4 text-blue-300" />
                )}
                {skill.icon === 'Sparkles' && (
                  <Sparkles className="w-12 h-12 mb-4 text-pink-300" />
                )}
                <h3 className="text-2xl font-semibold mb-2">{skill.title}</h3>
                <p>{skill.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        <motion.a
          href={homepageContent.contactSection.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded hover:bg-yellow-300 transition-colors"
          variants={itemVariants}
        >
          Contactame por LinkedIn
        </motion.a>
      </main>

      <footer className="bg-blue-900 text-center py-4">
        <p>&copy; 2024 Guido Salcedo. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
}
