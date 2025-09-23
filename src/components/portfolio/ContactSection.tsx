import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

const ContactSection = () => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-primary bg-clip-text text-transparent">
          Let's Connect
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-primary">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed mb-8">
                I'm always interested in discussing new opportunities, innovative projects, 
                and collaborations in Machine Learning and Software Engineering. 
                Let's connect and build something amazing together!
              </p>
            </div>
            
            <div className="space-y-6">
              <Card className="shadow-card border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <a href="mailto:shubham.hadawle@gmail.com" 
                         className="text-muted-foreground hover:text-primary transition-colors">
                        shubham.hadawle@gmail.com
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-secondary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <a href="tel:+919137871591" 
                         className="text-muted-foreground hover:text-secondary transition-colors">
                        +91 9137871591
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              <Card className="shadow-card border-border/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-muted-foreground">Mumbai, India</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
            
            <div className="flex gap-6 pt-4">
              <a href="https://github.com/shubhamhadawle" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-all duration-200 group">
                <Github className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
              <a href="https://linkedin.com/in/shubhamhadawle" target="_blank" rel="noopener noreferrer"
                 className="w-12 h-12 bg-muted/20 rounded-lg flex items-center justify-center hover:bg-secondary/20 hover:text-secondary transition-all duration-200 group">
                <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <Card className="shadow-card border-border/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-primary">Send a Message</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">First Name</label>
                  <Input placeholder="John" className="bg-muted/10" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Last Name</label>
                  <Input placeholder="Doe" className="bg-muted/10" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Email</label>
                <Input type="email" placeholder="john@example.com" className="bg-muted/10" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Subject</label>
                <Input placeholder="Let's discuss a project" className="bg-muted/10" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Message</label>
                <Textarea 
                  placeholder="Tell me about your project or opportunity..."
                  className="bg-muted/10 min-h-[120px]"
                />
              </div>
              
              <Button className="w-full shadow-primary gap-2">
                <Send className="w-4 h-4" />
                Send Message
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;