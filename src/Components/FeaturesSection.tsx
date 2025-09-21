import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../UI/card";
import { Badge } from "../../UI/badge";

export function FeaturesSection() {
  const features = [
    {
      title: "Story Documentation",
      description: "Capture and preserve artisan stories with rich multimedia content including photos, videos, and detailed narratives.",
      icon: "📖",
      benefits: ["Rich Media Support", "Story Templates", "Cultural Context"]
    },
    {
      title: "Artisan Profiles",
      description: "Create comprehensive profiles showcasing skills, heritage, and artistic journey with professional presentation.",
      icon: "👤",
      benefits: ["Professional Showcase", "Skill Verification", "Heritage Documentation"]
    },
    {
      title: "Global Discovery",
      description: "Connect with artisans worldwide through our intelligent matching system based on crafts, regions, and interests.",
      icon: "🌍",
      benefits: ["Smart Matching", "Global Network", "Cultural Exchange"]
    },
    {
      title: "AI-Powered Insights",
      description: "Leverage AI to enhance storytelling, suggest connections, and preserve cultural knowledge automatically.",
      icon: "🤖",
      benefits: ["Story Enhancement", "Auto-Categorization", "Knowledge Preservation"]
    },
    {
      title: "Community Building",
      description: "Join workshops, collaborate on projects, and build lasting relationships within the artisan community.",
      icon: "🤝",
      benefits: ["Virtual Workshops", "Collaboration Tools", "Mentorship Programs"]
    },
    {
      title: "Digital Marketing",
      description: "Promote your craft with built-in marketing tools, social sharing, and e-commerce integration.",
      icon: "📱",
      benefits: ["Social Integration", "E-commerce Ready", "Analytics Dashboard"]
    }
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Everything You Need to Share Your Craft
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Our platform provides comprehensive tools for artisans to document, share, and preserve their cultural heritage while building meaningful connections.
          </p>
        </div>
        
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="text-2xl">{feature.icon}</div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <Badge key={benefitIndex} variant="secondary" className="text-xs">
                        {benefit}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}