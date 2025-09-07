import { ExternalLink, Github, Database, BarChart, PieChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

import powerbiImage from '@/assets/powerbi-dashboard.jpg';
import sqlImage from '@/assets/sql-analysis.jpg';
import dashboardReportImage from '@/assets/dashboard-report.png';

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'Credit Card Financial Dashboard',
      description: 'An interactive dashboard providing insights into credit card transactions, spending patterns, and financial health using advanced data visualization techniques.',
      image: '/vaishnavi-uploads/creditCardFinancialDashboard.png',
      icon: 'BarChart',
      tags: ['Power BI', 'Data Visualization', 'Finance', 'Dashboard'],
      githubUrl: 'https://github.com/Anshu-gupta02/Credit_Card_Financial_Dashboard',
      liveUrl: 'https://github.com/Anshu-gupta02/Credit_Card_Financial_Dashboard',
    },
    {
      id: 2,
      title: 'Diwali Sales Analysis',
      description: 'Comprehensive analysis of sales trends and customer behavior during the Diwali season using Power BI and Excel. The dashboard identifies key patterns by product category, customer demographics, and sales performance across multiple years.',
      image: 'https://sdmntpraustraliaeast.oaiusercontent.com/files/00000000-fadc-61fa-a01e-2cd041c53f11/raw?se=2025-09-06T10%3A34%3A10Z&sp=r&sv=2024-08-04&sr=b&scid=b9766a0c-fbb3-5a18-ae15-8073eacba6bd&skoid=cb94e22a-e3df-4e6a-9e17-1696f40fa435&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-05T17%3A30%3A34Z&ske=2025-09-06T17%3A30%3A34Z&sks=b&skv=2024-08-04&sig=unYpGQJCi394IG7GKutr7UnNwrn22gTL%2BisjziScVD4%3D',
      icon: 'Database',
      tags: ['Power BI', 'Excel', 'Data Analysis', 'Dashboard'],
      githubUrl: 'https://github.com/Anshu-gupta02/Diwali-sales-analysis-using-PYTHON',
      liveUrl: 'https://github.com/Anshu-gupta02/Diwali-sales-analysis-using-PYTHON',
    },
    {
      id: 3,
      title: 'Pizza Sales Power BI Dashboard',
      description: 'An interactive Power BI dashboard project simulating a real-world project for a Pizza Sales dataset.',
      image: 'https://sdmntpraustraliaeast.oaiusercontent.com/files/00000000-7854-61fa-ad05-387ee21efa48/raw?se=2025-09-06T10%3A40%3A45Z&sp=r&sv=2024-08-04&sr=b&scid=bd9d8c38-c924-5c72-b1c7-50672f988d95&skoid=cb94e22a-e3df-4e6a-9e17-1696f40fa435&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2025-09-06T01%3A09%3A45Z&ske=2025-09-07T01%3A09%3A45Z&sks=b&skv=2024-08-04&sig=7WLJ7C0D1SlxDcuKZ9wdgLboS1QatXe7m3gCospeDdU%3D',
      icon: 'PieChart',
      tags: ['Power BI', 'Data Visualization', 'Dashboard'],
      githubUrl: 'https://github.com/Anshu-gupta02/Power-BI-SQL-Project',
      liveUrl: 'https://github.com/Anshu-gupta02/Power-BI-SQL-Project',
    },
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Projects
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Here are some of my recent data analysis projects showcasing my skills in 
              data visualization, SQL analysis, and business intelligence.
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
            {projects.map((project, index) => (
              <Card
                key={project.id}
                className={`bg-gradient-card border-border hover:shadow-glow transition-all duration-500 group overflow-hidden ${
                  index % 2 === 0 ? 'animate-fade-in' : 'animate-fade-in'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="p-0">
                  <div className="relative overflow-hidden h-40 sm:h-48 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/20">
                    {project.icon === 'BarChart' && (
                      <BarChart className="w-20 h-20 text-primary project-icon" strokeWidth={1.5} />
                    )}
                    {project.icon === 'Database' && (
                      <Database className="w-20 h-20 text-primary project-icon" strokeWidth={1.5} />
                    )}
                    {project.icon === 'PieChart' && (
                      <PieChart className="w-20 h-20 text-primary project-icon" strokeWidth={1.5} />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CardHeader>

                <CardContent className="p-4 sm:p-6">
                  <CardTitle className="text-lg sm:text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                    {project.title}
                  </CardTitle>
                  <p className="text-sm sm:text-base text-muted-foreground mb-4 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 sm:px-3 py-1 bg-primary/10 text-primary rounded-full text-xs sm:text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>

                <CardFooter className="p-4 sm:p-6 pt-0 flex flex-col sm:flex-row gap-3">
                  <Button
                    asChild
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-xs sm:text-sm"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    asChild
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground transition-all duration-300 text-xs sm:text-sm"
                  >
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                      View Project
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;