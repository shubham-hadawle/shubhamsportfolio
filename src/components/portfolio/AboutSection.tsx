import { Card, CardContent } from "@/components/ui/card";
import profilePlaceholder from "@/assets/profile-placeholder.jpg";

const AboutSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="shadow-card border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Professional Journey</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I'm a passionate Machine Learning Engineer currently working at Motilal Oswal, where I focus on 
                  GraphRAG (Graph Retrieval-Augmented Generation) and advanced Text-to-SQL systems using Neo4j.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  My journey spans from nuclear reactor simulations at BARC using Neural Networks to developing 
                  high-performance Android applications. I specialize in Deep Learning, Computer Vision, and 
                  Natural Language Processing.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  With a strong foundation in both theoretical ML concepts and practical software engineering, 
                  I bridge the gap between cutting-edge research and production-ready solutions.
                </p>
              </CardContent>
            </Card>
            
            <Card className="shadow-card border-border/50 backdrop-blur-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold mb-4 text-secondary">Education Excellence</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Bachelor of Engineering - AI & Data Science</h4>
                    <p className="text-muted-foreground">University of Mumbai • GPA: 9.27/10.0</p>
                    <p className="text-sm text-muted-foreground">July 2020 - June 2024</p>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Relevant Coursework:</strong> Machine Learning, Deep Learning, Data Structures & Algorithms, 
                    Database Management, Python Programming, Computer Vision, Natural Language Processing
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary opacity-20 blur-3xl rounded-full transform scale-110" />
              <img 
                src={profilePlaceholder} 
                alt="Shubham Hadawle - ML Engineer" 
                className="relative w-80 h-80 object-cover rounded-2xl shadow-primary"
              />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary/20 rounded-full animate-glow" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-float" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;