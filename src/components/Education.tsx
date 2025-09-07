import { GraduationCap, Calendar, MapPin, School, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, Variants } from 'framer-motion';
import { useRef } from 'react';

const Education = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  const education = [
    {
      id: 1,
      degree: 'B.Tech, Computer Science & Engineering',
      institution: 'G.G.S.E.S.T.C, Kandra Chas Bokaro,Jharkhand',
      location: 'Chas, Bokaro',
      year: '2015 - 2019',
      cgpa: '7.5',
      description: 'Bachelor of Technology in Computer Science & Engineering with a strong foundation in software development and engineering principles.',
      icon: GraduationCap,
      color: 'from-primary to-secondary'
    },
    {
      id: 2,
      degree: 'Senior Secondary (XII), CBSE - Science',
      institution: 'Sree Ayyappa Public School, Bokaro',
      location: 'Bokaro',
      year: '2013 - 2015',
      percentage: '78.00%',
      description: 'Completed Senior Secondary education in Science stream with CBSE curriculum, focusing on analytical and scientific skills.',
      icon: School,
      color: 'from-secondary to-accent'
    },
    {
      id: 3,
      degree: 'Secondary (X), CBSE',
      institution: 'Sree Ayyappa Public School, Bokaro',
      location: 'Bokaro',
      year: '2013',
      percentage: '88.00%',
      description: 'Achieved a strong CGPA in Secondary education, building a solid academic base in core subjects.',
      icon: Award,
      color: 'from-accent to-primary'
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 20 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      } 
    }
  };

  return (
    <section 
      id="education" 
      className="py-20 sm:py-24 bg-gradient-to-b from-background to-section-bg relative overflow-hidden"
      ref={sectionRef}
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl -z-10 opacity-50"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Education</span>
            </h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-primary/80 to-secondary/80 mx-auto rounded-full mb-8" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              My academic journey in computer science and foundational education that built my analytical and technical skills.
            </p>
          </motion.div>

          {/* Education Timeline */}
          <motion.div 
            className="space-y-10"
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {education.map((edu, index) => (
              <motion.div key={edu.id} variants={item}>
                <Card
                  className="bg-card/60 backdrop-blur-sm border border-border hover:border-primary/30 transition-all duration-500 group relative overflow-hidden"
                >
                  {/* Animated gradient border on hover */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-700 blur-sm -z-10 from-primary/20 to-secondary/20"></div>
                  
                  {/* Timeline Line */}
                  {index !== education.length - 1 && (
                    <div className="absolute left-10 top-24 w-0.5 h-24 bg-gradient-to-b from-primary/50 to-secondary/50 hidden md:block z-10" />
                  )}
                  
                  <CardHeader className="pb-4 relative">
                    <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      {/* Education Icon */}
                      <div className="relative">
                        <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${edu.color} opacity-20 blur-sm group-hover:opacity-50 transition-opacity duration-500`}></div>
                        <div className="w-14 h-14 sm:w-16 sm:h-16 bg-muted rounded-xl flex items-center justify-center relative z-10 border border-border group-hover:border-primary/30 transition-all duration-500">
                          <edu.icon className="w-7 h-7 sm:w-8 sm:h-8 text-primary group-hover:text-accent transition-colors duration-300" />
                        </div>
                      </div>
                      
                      {/* Education details */}
                      <div className="flex-1">
                        <CardTitle className="text-xl sm:text-2xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/80 group-hover:from-primary group-hover:to-secondary transition-all duration-500">
                          {edu.degree}
                        </CardTitle>
                        <div className="flex flex-col gap-2 text-muted-foreground text-sm">
                          <div className="flex items-center gap-1">
                            <span className="font-medium text-primary">{edu.institution}</span>
                          </div>
                          <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6">
                            <div className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-secondary/80" />
                              <span>{edu.location}</span>
                            </div>
                            <div className="flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-secondary/80" />
                              <span>{edu.year}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      {/* CGPA/Percentage */}
                      <div className="text-left sm:text-right">
                        {edu.cgpa && (
                          <div className="flex items-center justify-center px-4 py-2 bg-muted/50 backdrop-blur-sm border border-border rounded-lg">
                            <div className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                              CGPA: {edu.cgpa}
                            </div>
                          </div>
                        )}
                        {edu.percentage && (
                          <div className="flex items-center justify-center px-4 py-2 bg-muted/50 backdrop-blur-sm border border-border rounded-lg">
                            <div className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                              {edu.percentage}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="pt-0 pl-4 sm:pl-24">
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {edu.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Education;