import { Button } from "../../UI/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../UI/card";
import { Badge } from "../../UI/badge";

export function AIStorytellingSection() {
  const aiFeatures = [
    {
      icon: "✨",
      title: "Story Enhancement",
      description: "AI helps improve your narrative flow, suggests compelling details, and ensures your story resonates with readers.",
      benefits: ["Grammar & Style", "Narrative Flow", "Emotional Impact"]
    },
    {
      icon: "🏷️",
      title: "Smart Categorization",
      description: "Automatically categorize your stories by craft type, cultural origin, and themes for better discoverability.",
      benefits: ["Auto-Tagging", "Cultural Context", "Theme Detection"]
    },
    {
      icon: "🔍",
      title: "Content Discovery",
      description: "AI-powered recommendations help readers find stories that match their interests and cultural background.",
      benefits: ["Personalized Feeds", "Similar Stories", "Cultural Connections"]
    },
    {
      icon: "🌐",
      title: "Translation Support",
      description: "Break language barriers with AI-assisted translation while preserving cultural nuances and context.",
      benefits: ["Multi-Language", "Cultural Sensitivity", "Context Preservation"]
    },
    {
      icon: "📊",
      title: "Heritage Analysis",
      description: "Identify patterns and connections in traditional techniques across different cultures and time periods.",
      benefits: ["Pattern Recognition", "Historical Context", "Cultural Links"]
    },
    {
      icon: "🎯",
      title: "Audience Insights",
      description: "Understand your audience better with AI-driven analytics on story engagement and reader preferences.",
      benefits: ["Engagement Metrics", "Reader Insights", "Content Optimization"]
    }
  ];

  const aiExamples = [
    {
      title: "Story Structure Suggestion",
      description: "AI analyzed your pottery story and suggested adding more details about the clay preparation process",
      impact: "Increased reader engagement by 45%"
    },
    {
      title: "Cultural Context Addition",
      description: "AI identified historical significance of your weaving patterns and suggested relevant cultural background",
      impact: "Enhanced educational value"
    },
    {
      title: "Cross-Cultural Connection",
      description: "AI found similar techniques in Japanese and Mexican ceramics, creating valuable cultural bridges",
      impact: "Connected 3 artisan communities"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-primary/5 via-background to-accent/10">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <Badge variant="secondary" className="mb-4">
            Powered by AI
          </Badge>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            AI-Enhanced Storytelling
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Harness the power of artificial intelligence to enhance your stories, preserve cultural knowledge, 
            and connect with audiences worldwide while maintaining authenticity.
          </p>
        </div>

        {/* AI Features Grid */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {aiFeatures.map((feature, index) => (
              <Card key={index} className="relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="text-2xl">{feature.icon}</div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </div>
                  <CardDescription className="text-sm">
                    {feature.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                      Key Benefits
                    </h4>
                    <div className="flex flex-wrap gap-1">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <Badge key={benefitIndex} variant="outline" className="text-xs">
                          {benefit}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* AI in Action Examples */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h3 className="text-2xl font-bold text-center mb-8">AI in Action</h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {aiExamples.map((example, index) => (
              <Card key={index} className="border-l-4 border-l-primary">
                <CardContent className="pt-6">
                  <h4 className="font-semibold mb-2">{example.title}</h4>
                  <p className="text-sm text-muted-foreground mb-3">{example.description}</p>
                  <Badge variant="secondary" className="text-xs">
                    {example.impact}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Privacy & Ethics */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Card className="bg-gradient-to-r from-secondary/50 to-accent/30">
            <CardContent className="p-8 text-center">
              <h3 className="text-xl font-bold mb-4">Ethical AI & Privacy</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Our AI respects cultural sensitivity, maintains your creative ownership, and operates transparently. 
                Your stories remain yours, and AI suggestions are always optional.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Cultural Sensitivity</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Privacy Protected</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500"></div>
                  <span>Always Optional</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <Button size="lg" className="px-8">
            Try AI-Enhanced Storytelling
          </Button>
        </div>
      </div>
    </section>
  );
}