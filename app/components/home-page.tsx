'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import confetti from 'canvas-confetti'
import { Code, Palette, Database, Sparkles } from 'lucide-react'

export function HomePageComponent() {
  const [confettiTriggered, setConfettiTriggered] = useState(false)
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
      if (!confettiTriggered) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 }
        })
        setConfettiTriggered(true)
      }
    }
  }, [controls, inView, confettiTriggered])

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        delay: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-700 to-indigo-900 text-white">
      <header className="p-6 flex justify-between items-center">
        <motion.h1 
          className="text-4xl font-bold"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Guido Salcedo
        </motion.h1>
        <nav>
          <motion.ul 
            className="flex space-x-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <li><a href="#about" className="hover:text-yellow-300 transition-colors">Sobre mí</a></li>
            <li><a href="#skills" className="hover:text-yellow-300 transition-colors">Habilidades</a></li>
            <li><a href="#projects" className="hover:text-yellow-300 transition-colors">Proyectos</a></li>
            <li><a href="#contact" className="hover:text-yellow-300 transition-colors">Contacto</a></li>
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
          <motion.h2 className="text-5xl font-bold mb-6" variants={itemVariants}>Desarrollador Backend Creativo</motion.h2>
          <motion.p className="text-xl mb-4" variants={itemVariants}>
            Con 5 años de experiencia en el desarrollo backend, combino lógica y creatividad para construir soluciones robustas y elegantes.
          </motion.p>
          <motion.p className="text-xl" variants={itemVariants}>
            Como un INTJ, mi enfoque analítico y visión innovadora me permiten abordar desafíos complejos con soluciones únicas y eficientes.
          </motion.p>
        </motion.section>

        <motion.section 
          id="skills"
          className="mb-20"
          ref={ref}
          initial="hidden"
          animate={controls}
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-8" variants={itemVariants}>Habilidades</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div className="bg-white bg-opacity-10 p-6 rounded-lg" variants={itemVariants}>
              <Code className="w-12 h-12 mb-4 text-yellow-300" />
              <h3 className="text-2xl font-semibold mb-2">Desarrollo Backend</h3>
              <p>Experto en arquitecturas escalables y APIs eficientes.</p>
            </motion.div>
            <motion.div className="bg-white bg-opacity-10 p-6 rounded-lg" variants={itemVariants}>
              <Database className="w-12 h-12 mb-4 text-green-300" />
              <h3 className="text-2xl font-semibold mb-2">Bases de Datos</h3>
              <p>Diseño e implementación de estructuras de datos optimizadas.</p>
            </motion.div>
            <motion.div className="bg-white bg-opacity-10 p-6 rounded-lg" variants={itemVariants}>
              <Palette className="w-12 h-12 mb-4 text-blue-300" />
              <h3 className="text-2xl font-semibold mb-2">Diseño de Sistemas</h3>
              <p>Creación de arquitecturas elegantes y eficientes.</p>
            </motion.div>
            <motion.div className="bg-white bg-opacity-10 p-6 rounded-lg" variants={itemVariants}>
              <Sparkles className="w-12 h-12 mb-4 text-pink-300" />
              <h3 className="text-2xl font-semibold mb-2">Innovación</h3>
              <p>Aplicación de soluciones creativas a problemas técnicos.</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          id="projects"
          className="mb-20"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-8" variants={itemVariants}>Proyectos Destacados</motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div className="bg-white bg-opacity-10 p-6 rounded-lg" variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-2">Sistema de Microservicios</h3>
              <p>Arquitectura escalable para procesamiento de datos en tiempo real.</p>
            </motion.div>
            <motion.div className="bg-white bg-opacity-10 p-6 rounded-lg" variants={itemVariants}>
              <h3 className="text-2xl font-semibold mb-2">API de Inteligencia Artificial</h3>
              <p>Integración de modelos de ML para análisis predictivo de datos.</p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          id="contact"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          <motion.h2 className="text-4xl font-bold mb-8" variants={itemVariants}>Contacto</motion.h2>
          <motion.p className="text-xl mb-4" variants={itemVariants}>
            ¿Interesado en colaborar en proyectos innovadores? ¡Hablemos!
          </motion.p>
          <motion.a 
            href="mailto:guido.salcedo@example.com" 
            className="inline-block bg-yellow-400 text-purple-900 font-bold py-2 px-4 rounded hover:bg-yellow-300 transition-colors"
            variants={itemVariants}
          >
            Envíame un correo
          </motion.a>
        </motion.section>
      </main>

      <footer className="bg-purple-900 text-center py-4">
        <p>&copy; 2023 Guido Salcedo. Todos los derechos reservados.</p>
      </footer>
    </div>
  )
}