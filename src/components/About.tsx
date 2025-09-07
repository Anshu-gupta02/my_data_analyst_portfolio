import { useEffect, useState, useRef } from 'react';
import { FaDatabase, FaPython, FaChartBar, FaFileExcel, FaTable, FaFigma } from 'react-icons/fa';
import { motion, useAnimation, useInView, Variants } from 'framer-motion';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const controls = useAnimation();
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: false, amount: 0.3 });

  const skills = [
    { name: 'SQL', icon: FaDatabase },
    { name: 'Python', icon: FaPython },
    { name: 'PowerBI', icon: FaChartBar },
    { name: 'Excel', icon: FaFileExcel },
    { name: 'Tableau', icon: FaTable },
    ,
  ];  

  useEffect(() => {
    if (isInView) {
      setIsVisible(true);
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skillVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: (i: number) => ({
      opacity: 1,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: "easeOut"
      }
    })
  };

  return (
    <section id="about" className="py-20 sm:py-24 bg-gradient-to-b from-section-bg to-background" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
        
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">About Me</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary/80 to-secondary/80 mx-auto rounded-full mb-8" />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* About Text */}
            <motion.div 
              className="space-y-6"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <motion.p 
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                variants={itemVariants}
              >
                I decode data to uncover stories, patterns, and possibilities. With a sharp eye for insights and a love for clean visuals, I turn raw numbers into real impact. From dashboards to predictions, I blend logic with creativity — because great data speaks, and I make sure it's heard.
              </motion.p>
              
              <motion.p 
                className="text-base sm:text-lg text-muted-foreground leading-relaxed"
                variants={itemVariants}
              >
                My approach combines analytical thinking with a passion for elegant visualization. I believe in making data accessible and actionable for decision-makers at all levels of an organization.
              </motion.p>
              
              <motion.div 
                className="flex flex-wrap gap-3 pt-4"
                variants={itemVariants}
              >
                {['Data Analysis', 'Business Intelligence', 'SQL Queries', 'Dashboard Creation', 'Statistical Analysis'].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-gradient-to-r from-primary/10 to-secondary/10 text-primary rounded-full text-sm font-medium backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-all duration-300"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* Skills */}
            <motion.div 
              className="space-y-8"
              variants={containerVariants}
              initial="hidden"
              animate={controls}
            >
              <motion.h3 
                className="text-xl sm:text-2xl font-bold mb-6"
                variants={itemVariants}
              >
                My Skills
              </motion.h3>
              
              <div className="grid grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div 
                    key={skill.name} 
                    className="flex flex-col items-center justify-center p-4 bg-card/50 backdrop-blur-sm rounded-xl border border-border hover:border-primary/30 hover:shadow-glow transition-all duration-500 group"
                    custom={index}
                    variants={skillVariants}
                    initial="hidden"
                    animate={controls}
                  >
                    <div className="text-4xl sm:text-5xl text-primary mb-3 transition-transform duration-500 group-hover:scale-110 group-hover:text-accent">
                      <skill.icon />
                    </div>
                    <span className="text-base font-medium text-center">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;