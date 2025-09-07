import { Briefcase, Calendar, Award, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Data Science Intern',
      company: 'Codtech It Solutions',
      duration: 'March 2025 – May 2025',
      responsibilities: [
        'Solved business problems using optimization techniques (e.g., Linear Programming) and Python libraries',
        'Demonstrated problem setup, solution approach, and key insights',
        'Applied data science methodologies to real-world business challenges',
        'Utilized Python for data analysis and optimization modeling',
        'Presented findings and recommendations based on data-driven solutions'
      ],
      skills: ['Data Science', 'Python', 'Linear Programming', 'Optimization', 'Problem Solving'],
      certificateLink: '/Experience/codtech it solutions_intership.jpg'
    },
    {
      id: 2,
      title: 'Data Analyst Intern',
      company: 'Contechub Pvt Ltd',
      duration: 'May 2024 - Jul 2024',
      responsibilities: [
        'Performed data mining to extract valuable insights from complex datasets',
        'Conducted demographic analysis to identify customer patterns and trends',
        'Worked with CRM Microsoft Salesforce for customer relationship management',
        'Developed and analyzed interactive dashboards for business intelligence',
        'Implemented data-driven marketing strategies based on analytical findings'
      ],
      skills: ['Data Mining', 'Demography Analysis', 'CRM', 'Microsoft Salesforce', 'Data-Driven Marketing'],
      certificateLink: '/Experience/contechub solutions pvt ltd._experience_letter.jpg'
    },
    {
      id: 3,
      title: 'Data Analytics Intern',
      company: 'KPMG',
      duration: 'Jul 2023',
      responsibilities: [
        'Conducted comprehensive data quality assessments to ensure accuracy and reliability',
        'Generated actionable insights from complex datasets for business decision-making',
        'Created effective data visualizations to communicate findings to stakeholders',
        'Employed data storytelling techniques to make analytical results accessible',
        'Participated in data-driven projects that supported business objectives'
      ],
      skills: ['Data Quality Assessment', 'Data Analysis', 'Data Visualization', 'Data Storytelling', 'Business Intelligence'],
      certificateLink: ''
    },
    {
      id: 4,
      title: 'Recruiter (Full-Time)',
      company: 'IMS People',
      location: 'Ahmedabad, Gujarat',
      duration: 'May 2019 – Jan 2021',
      responsibilities: [
        'Sourced, screened, and placed candidates across various domains with focus on temporary staffing, contract-based, and full-time requirements',
        'Utilized combination of online platforms, database management, and direct outreach to find suitable talent',
        'Managed end-to-end recruitment processes from initial sourcing to final placement',
        'Maintained candidate relationships and client communications throughout hiring processes',
        'Matched suitable talent with clients\' specific requirements across multiple industries'
      ],
      skills: ['Recruitment', 'Talent Sourcing', 'Database Management', 'Client Relations', 'HR'],
      certificateLink: ''
    }
  ];

  return (
    <section id="experience" className="py-16 sm:py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground mb-4">
              Professional Experience
            </h2>
            <div className="w-20 h-1 bg-primary mx-auto mb-8" />
            <p className="text-muted-foreground max-w-2xl mx-auto">
              My professional journey in data science, analytics, and recruitment, showcasing my practical experience in diverse industries.
            </p>
          </div>

          {/* Experience Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {experiences.map((experience) => (
              <Card key={experience.id} className="group overflow-hidden transition-all duration-300 hover:shadow-lg border-border">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start">
                    <div className="flex items-center space-x-2">
                      <Briefcase className="h-5 w-5 text-primary" />
                      <CardTitle className="text-xl font-bold">{experience.title}</CardTitle>
                    </div>
                  </div>
                  <div className="text-base font-medium text-foreground mt-2">
                    {experience.company}
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center gap-1 mt-1">
                    <Calendar className="h-4 w-4" />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="text-sm text-muted-foreground mt-1">
                    {experience.location}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold mb-2">Key Responsibilities:</h4>
                    <ul className="text-sm text-muted-foreground list-disc pl-5 space-y-1">
                      {experience.responsibilities.map((responsibility, index) => (
                        <li key={index}>{responsibility}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-4">
                    {experience.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary/10 text-primary"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  
                  {experience.certificateLink && (
                    <div className="mt-4">
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="flex items-center gap-1 text-xs"
                        asChild
                      >
                        <a href={experience.certificateLink} target="_blank" rel="noopener noreferrer">
                          <Award className="h-3.5 w-3.5 mr-1" />
                          View Experience Letter
                          <ExternalLink className="h-3 w-3 ml-1" />
                        </a>
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
