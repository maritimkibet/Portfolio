import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Leaf, TrendingUp, Users, Lock, Radio, DollarSign } from "lucide-react";

export const Projects = () => {
  const projects = [
    {
      title: "AgroFlow",
      icon: Leaf,
      description: "A farmer-first app with marketplace, task scheduling, reminders, and chatbot integration",
      tech: ["Flutter", "Firebase Firestore", "Firebase Storage", "WhatsApp API", "Weather API"],
      color: "primary"
    },
    {
      title: "SafePull",
      icon: TrendingUp,
      description: "Flutter-based crash multiplier game with wallet integration and win/loss animations",
      tech: ["Flutter", "Wallet Integration", "Theme Toggle", "Animations"],
      color: "secondary"
    },
    {
      title: "JamiiHub",
      icon: Users,
      description: "Community-based trading platform with escrow and offline Bluetooth exchange",
      tech: ["Escrow System", "Bluetooth", "M-Pesa Integration", "Trading Platform"],
      color: "accent"
    },
    {
      title: "DeadDrop",
      icon: Lock,
      description: "Secure messaging app with end-to-end encryption and self-deleting messages",
      tech: ["Flutter", "E2E Encryption", "SMS", "Firebase", "PIN Protection"],
      color: "primary"
    },
    {
      title: "Disaster Communication App",
      icon: Radio,
      description: "Emergency alerts platform with offline mesh networking and volunteer coordination",
      tech: ["Emergency Alerts", "Mesh Networking", "Volunteer System", "Hackathon Project"],
      color: "secondary"
    },
    {
      title: "GKE Hackathon Project",
      icon: DollarSign,
      description: "Fintech prototype exploring cloud-native financial services",
      tech: ["Google Kubernetes Engine", "Bank of Anthos", "Cloud-Native", "Fintech"],
      color: "accent"
    }
  ];

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary via-secondary to-accent">
          Key Projects
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          Innovative solutions built with modern technologies
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-xl group"
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 bg-${project.color}/10 rounded-lg group-hover:scale-110 transition-transform`}>
                      <Icon className={`h-6 w-6 text-${project.color}`} />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-base">
                        {project.description}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, idx) => (
                      <Badge key={idx} variant="outline">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
