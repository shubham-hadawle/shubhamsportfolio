import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Brain, Database, Cloud, Smartphone, Wrench } from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="w-6 h-6" />,
      skills: ["Python", "Java", "C/C++", "JavaScript", "SQL", "Shell Scripting"],
      color: "text-primary"
    },
    {
      title: "Machine Learning & AI",
      icon: <Brain className="w-6 h-6" />,
      skills: ["Deep Learning", "CNNs", "RNNs", "GANs", "Transformers", "Computer Vision", "NLP", "Time Series Analysis", "GraphRAG", "LLMs", "RAGs", "LangChain"],
      color: "text-secondary"
    },
    {
      title: "ML Frameworks",
      icon: <Wrench className="w-6 h-6" />,
      skills: ["PyTorch", "TensorFlow", "Keras", "Scikit-learn", "PySpark", "OpenCV", "NLTK", "SpaCy", "NumPy", "Pandas", "Matplotlib"],
      color: "text-primary"
    },
    {
      title: "Databases",
      icon: <Database className="w-6 h-6" />,
      skills: ["MySQL", "MongoDB", "Firebase", "Neo4j", "SQL", "NoSQL"],
      color: "text-secondary"
    },
    {
      title: "Web & Mobile Development",
      icon: <Smartphone className="w-6 h-6" />,
      skills: ["ReactJS", "NodeJS", "ExpressJS", "HTML", "CSS", "Android Studio", "XML", "Flask", "REST APIs"],
      color: "text-primary"
    },
    {
      title: "Tools & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      skills: ["AWS (EC2, S3)", "Google Cloud", "Git", "GitHub", "Linux", "Unix", "Postman", "Docker"],
      color: "text-secondary"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Technical Skills
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <Card key={index} className="shadow-card border-border/50 backdrop-blur-sm hover:shadow-primary/20 transition-all duration-300 group">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`${category.color} group-hover:scale-110 transition-transform duration-200`}>
                    {category.icon}
                  </div>
                  <span className={category.color}>{category.title}</span>
                </CardTitle>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <Badge 
                      key={idx} 
                      variant="secondary" 
                      className="bg-muted/30 hover:bg-muted/50 transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Featured Skills Highlight */}
        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold mb-8 text-muted-foreground">Currently Specializing In</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["GraphRAG", "Neural ODEs", "LLMs", "Neo4j", "PyTorch", "Text-to-SQL"].map((skill, idx) => (
              <Badge 
                key={idx} 
                variant="default"
                className="px-4 py-2 text-lg shadow-primary animate-glow"
                style={{ animationDelay: `${idx * 0.5}s` }}
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;