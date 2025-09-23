import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Download } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "GraphRAG Text-to-SQL System",
      description: "Advanced Text-to-SQL system using GraphRAG and Neo4j for enhanced natural language query processing. Combines graph-based knowledge with retrieval techniques for more accurate and context-aware SQL generation.",
      technologies: ["GraphRAG", "Neo4j", "Python", "LLMs", "SQL", "NLP"],
      category: "Machine Learning",
      highlights: ["Graph-based knowledge integration", "Context-aware query processing", "Production-ready system"],
      status: "In Development"
    },
    {
      title: "Nuclear Reactor Simulation with Neural ODEs",
      description: "Deep Neural Network solution for Point Kinetic Equations simulation of Uranium-235 nuclear reactors. Achieved 93% efficiency improvement using LSTMs, Autoencoders, and Neural ODEs.",
      technologies: ["PyTorch", "Neural ODEs", "LSTMs", "TensorFlow", "Python", "Scientific Computing"],
      category: "Deep Learning",
      highlights: ["93% efficiency improvement", "Loss reduction: 1.19520 → 0.00062", "BARC research project"],
      githubUrl: "#",
      status: "Completed"
    },
    {
      title: "Time Series Anomaly Detection",
      description: "Unsupervised Machine Learning model for anomaly detection in advertisement KPIs using Facebook Prophet algorithm. Published research in Springer Journal with 96.7% accuracy.",
      technologies: ["Facebook Prophet", "Python", "Time Series", "Unsupervised Learning", "Scikit-learn"],
      category: "Research",
      highlights: ["96.7% model accuracy", "Springer Journal publication", "CPC/CPM optimization"],
      githubUrl: "#",
      demoUrl: "#",
      status: "Published"
    },
    {
      title: "Where is my Duck? - Platformer Game",
      description: "2D platformer game developed for both mobile and desktop platforms. Achieved 4.7/5 star rating with 1000+ downloads on Google Play Store, showcasing game development and cross-platform skills.",
      technologies: ["GDevelop5", "Game Development", "Cross-platform", "Mobile Development"],
      category: "Game Development",
      highlights: ["4.7/5 star rating", "1000+ downloads", "Cross-platform release"],
      demoUrl: "#",
      playstoreUrl: "#",
      status: "Live"
    },
    {
      title: "Credit Risk Scorecards",
      description: "Predictive models for retail lending focusing on personal and home loan default risk assessment. Implemented using XGBoost and Logistic Regression algorithms for accurate risk quantification.",
      technologies: ["XGBoost", "Logistic Regression", "Python", "Risk Analytics", "Financial Modeling"],
      category: "FinTech",
      highlights: ["Production credit scoring", "Risk quantification", "Retail lending focus"],
      status: "Production"
    },
    {
      title: "FinTech Social Investment App",
      description: "Android application for stock market investment education and social networking. Optimized REST API performance achieving 25% latency reduction through efficient backend architecture.",
      technologies: ["Android Studio", "Java", "Python", "Flask", "REST APIs", "XML"],
      category: "Mobile Development",
      highlights: ["25% latency reduction", "Financial literacy focus", "Social networking features"],
      githubUrl: "#",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500/20 text-green-400";
      case "Production": return "bg-blue-500/20 text-blue-400";
      case "Published": return "bg-purple-500/20 text-purple-400";
      case "Completed": return "bg-yellow-500/20 text-yellow-400";
      case "In Development": return "bg-orange-500/20 text-orange-400";
      default: return "bg-gray-500/20 text-gray-400";
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-secondary">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Featured Projects
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="shadow-card border-border/50 backdrop-blur-sm hover:shadow-primary/20 transition-all duration-300 group">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-xl font-bold text-primary group-hover:text-primary-glow transition-colors">
                    {project.title}
                  </CardTitle>
                  <Badge className={`${getStatusColor(project.status)} border-0 font-medium`}>
                    {project.status}
                  </Badge>
                </div>
                <Badge variant="outline" className="w-fit text-secondary border-secondary/30">
                  {project.category}
                </Badge>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3">
                  <h4 className="font-semibold text-foreground">Key Highlights:</h4>
                  <ul className="space-y-1">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Star className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <Badge key={idx} variant="secondary" className="bg-muted/30 text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Github className="w-4 h-4" />
                      Code
                    </Button>
                  )}
                  {project.demoUrl && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </Button>
                  )}
                  {project.playstoreUrl && (
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-4 h-4" />
                      Play Store
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="gap-2">
            <Github className="w-5 h-5" />
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;