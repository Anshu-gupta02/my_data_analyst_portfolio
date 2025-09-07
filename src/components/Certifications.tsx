import { Award, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

const Certifications = () => {
  const certifications = [
    {
      id: 1,
      title: 'Advanced Certification in Microsoft Excel',
      issuer: 'Udemy',
      description: 'Completed comprehensive Excel training covering advanced formulas, data analysis tools, PivotTables, macros and VBA, enhancing data management capabilities.',
      date: '2023',
      certificateUrl: '/certificate/AdvanceCertificationInMicrosoftExcel.jpg',
      skills: ['Excel', 'Data Analysis', 'Formulas', 'PivotTables', 'Macros', 'VBA'],
    },
    {
      id: 2,
      title: 'MS SQL Developer Course',
      issuer: 'Microsoft Learning',
      description: 'Mastered SQL database development including database design, complex queries, stored procedures, and performance optimization techniques.',
      date: '2023',
      certificateUrl: '/certificate/MsSqlDevCourse.jpg',
      skills: ['SQL', 'Database Design', 'Queries', 'Stored Procedures', 'Performance Optimization'],
    },
    {
      id: 3,
      title: 'Power BI Training',
      issuer: 'Microsoft',
      description: 'Gained expertise in creating interactive dashboards, data modeling, and advanced DAX functions for effective business intelligence reporting.',
      date: '2024',
      certificateUrl: '/certificate/PowerBI_Training.jpg',
      skills: ['Power BI', 'Dashboard Creation', 'Data Modeling', 'DAX', 'Business Intelligence'],
    },
    {
      id: 4,
      title: 'Python Training',
      issuer: 'Python Institute',
      description: 'Developed proficiency in Python programming with focus on data analysis libraries including Pandas, NumPy, and visualization tools like Matplotlib and Seaborn.',
      date: '2024',
      certificateUrl: '/certificate/PythonTraining.jpg',
      skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis', 'Matplotlib', 'Seaborn'],
    },
  ];

  return (
    <section id="certifications" className="py-16 sm:py-20 bg-section-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Certifications
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Professional certifications that validate my expertise in data analysis, SQL, Microsoft Excel, and Python programming.
            </p>
          </div>

          {/* Certifications Grid */}
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card
                key={cert.id}
                className={`bg-gradient-card border-border hover:shadow-glow transition-all duration-500 group ${
                  index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-4">
                  <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                    <div className="flex items-center space-x-3 sm:space-x-4 w-full sm:w-auto">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                        <Award className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-lg sm:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                          {cert.title}
                        </CardTitle>
                        <p className="text-primary font-medium text-sm sm:text-base">{cert.issuer} • {cert.date}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed">
                    {cert.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {cert.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="pt-0">
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 text-sm sm:text-base w-full sm:w-auto"
                  >
                    <a href={cert.certificateUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      View Certificate
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <p className="text-sm sm:text-base text-muted-foreground mb-6">
              Continuously learning and earning new certifications to stay up-to-date with 
              the latest data analysis tools and techniques.
            </p>
            <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
              {['Tableau', 'Machine Learning', 'Cloud Computing', 'Data Engineering'].map((upcoming) => (
                <span
                  key={upcoming}
                  className="px-3 sm:px-4 py-1.5 sm:py-2 bg-muted border border-border rounded-full text-xs sm:text-sm text-muted-foreground"
                >
                  {upcoming} (In Progress)
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;