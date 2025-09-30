import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Smartphone, Cloud, Cog, Network, Code, Wrench } from "lucide-react";

export const Skills = () => {
  const skills = [
    {
      title: "App Development",
      icon: Smartphone,
      color: "primary",
      items: ["Flutter", "Firebase", "Authentication", "API Integration", "APK Building"]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "secondary",
      items: ["Kubernetes", "Skaffold", "Containerization", "Cloud-Native Development"]
    },
    {
      title: "Automation",
      icon: Cog,
      color: "accent",
      items: ["Zapier", "n8n", "Workato", "Mendix", "Workflow Automation"]
    },
    {
      title: "Networking",
      icon: Network,
      color: "primary",
      items: ["MikroTik Routers", "PPPoE Setup", "3CX VoIP", "ISP Configuration"]
    },
    {
      title: "Development Tools",
      icon: Code,
      color: "secondary",
      items: ["GitHub", "Version Control", "Collaboration", "Code Management"]
    },
    {
      title: "ICT Support",
      icon: Wrench,
      color: "accent",
      items: ["Hardware Troubleshooting", "Software Diagnostics", "CRM Systems", "Data Management"]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
          Technical Strengths
        </h2>
        <p className="text-center text-muted-foreground mb-12 text-lg">
          A comprehensive toolkit for modern technology solutions
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <Card 
                key={index} 
                className="border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className={`p-3 bg-${skill.color}/10 rounded-lg`}>
                      <Icon className={`h-6 w-6 text-${skill.color}`} />
                    </div>
                    <CardTitle className="text-xl">{skill.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, idx) => (
                      <Badge key={idx} variant="secondary">
                        {item}
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
