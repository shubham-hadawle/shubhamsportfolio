import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building2, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      company: "Motilal Oswal",
      role: "Machine Learning Engineer",
      period: "November 2024 - Present",
      location: "Mumbai, India",
      team: "Data Science Team",
      achievements: [
        "Working with GraphRAG (Graph Retrieval-Augmented Generation) to enhance LLMs by combining graph-based knowledge with retrieval techniques",
        "Implementing Neo4j in Text-to-SQL systems for mapping natural language queries to SQL with structured schema graphs",
        "Developed predictive models for retail lending including credit-risk scorecards for personal and home loans",
        "Utilized XGBoost and Logistic Regression algorithms to quantify borrower default risk"
      ],
      technologies: ["GraphRAG", "Neo4j", "XGBoost", "Logistic Regression", "LLMs", "Python", "SQL"]
    },
    {
      company: "Bhabha Atomic Research Centre (BARC)",
      role: "Data Science Intern",
      period: "November 2023 - January 2024",
      location: "Mumbai, India",
      team: "Security Electronics and Cyber Technology Division",
      achievements: [
        "Used Deep Neural Networks (LSTMs, Autoencoders, VAEs, Neural ODEs) to solve Point Kinetic Equations for Uranium-235 reactor simulation",
        "Automated calculation processes using PyTorch (torchdyn/torchdiffeq), increasing efficiency by 93%",
        "Optimized cross-domain adaptation with Adam optimizer, reducing loss from 1.19520 to 0.00062",
        "Implemented various activation functions: Sigmoid, Sin, Tanh, Leaky ReLU & Euler's function"
      ],
      technologies: ["PyTorch", "TensorFlow", "Keras", "Neural ODEs", "LSTMs", "Autoencoders", "VAEs", "Python"]
    },
    {
      company: "VESIT - Vivekanand Education Society's Institute of Technology",
      role: "Machine Learning Research Intern",
      period: "June 2022 - July 2022",
      location: "Mumbai, India",
      team: "Research Paper - Springer Journal",
      achievements: [
        "Developed forecasting model for Anomaly Detection in Time Series Data using Unsupervised ML techniques",
        "Implemented Facebook (Meta) Prophet algorithm for identifying outliers in advertisement KPIs",
        "Achieved 96.7% model accuracy through iterative tuning for CPC and CPM anomaly detection",
        "Published research findings in Springer Journal"
      ],
      technologies: ["Facebook Prophet", "Unsupervised Learning", "Time Series Analysis", "Python", "Scikit-learn"]
    },
    {
      company: "Stocc Guru",
      role: "Android Development Intern",
      period: "July 2021 - September 2021",
      location: "Mumbai, India",
      team: "FinTech Startup",
      achievements: [
        "Developed social application for stock market investments and financial literacy",
        "Utilized XML for frontend and Java/Python/Flask for backend development",
        "Implemented REST APIs with JSON data testing via Postman",
        "Achieved 25% latency reduction through optimization techniques"
      ],
      technologies: ["Android Studio", "Java", "Python", "Flask", "REST APIs", "XML", "Postman"]
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="shadow-card border-border/50 backdrop-blur-sm hover:shadow-primary/20 transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                  <div>
                    <CardTitle className="text-2xl font-bold text-primary mb-2">{exp.role}</CardTitle>
                    <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 mt-2 text-secondary">
                      <Calendar className="w-4 h-4" />
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    {exp.team && (
                      <p className="text-sm text-muted-foreground italic mt-1">{exp.team}</p>
                    )}
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{achievement}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <div className="flex flex-wrap gap-2 mt-6">
                    {exp.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-muted/50">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;