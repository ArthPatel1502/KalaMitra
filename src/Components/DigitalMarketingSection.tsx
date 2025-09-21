import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../UI/card";
import { Badge } from "../../UI/badge";
import { Button } from "../../UI/button";
import { Progress } from "../../UI/progress";

export function DigitalMarketingSection() {
  const marketingFeatures = [
    {
      icon: "📱",
      title: "Social Media Integration",
      description: "Seamlessly share your stories and work across all major social platforms",
      features: ["Auto-posting", "Hashtag optimization", "Cross-platform sync"]
    },
    {
      icon: "🛒",
      title: "E-commerce Ready",
      description: "Built-in tools to showcase and sell your handcrafted items directly",
      features: ["Product galleries", "Secure payments", "Order management"]
    },
    {
      icon: "📊",
      title: "Analytics Dashboard",
      description: "Track engagement, understand your audience, and optimize your content",
      features: ["Visitor insights", "Story performance", "Audience demographics"]
    },
    {
      icon: "🎯",
      title: "SEO Optimization",
      description: "Improve discoverability with built-in search engine optimization",
      features: ["Keyword optimization", "Meta tags", "Search rankings"]
    },
    {
      icon: "📧",
      title: "Email Marketing",
      description: "Build and nurture your audience with integrated email campaigns",
      features: ["Newsletter builder", "Automated sequences", "Subscriber management"]
    },
    {
      icon: "🌐",
      title: "Global Reach",
      description: "Multi-language support and cultural localization for worldwide appeal",
      features: ["Translation tools", "Currency conversion", "Regional customization"]
    }
  ];

  const successStories = [
    {
      artisan: "Maya Patel",
      craft: "Block Printing",
      location: "Rajasthan, India",
      achievement: "300% increase in online sales",
      story: "Using our platform's marketing tools, Maya expanded her traditional block printing business globally",
      metrics: {
        followers: 15420,
        sales: 300,
        reach: 89
      }
    },
    {
      artisan: "Jean-Pierre Dubois",
      craft: "Glassblowing",
      location: "Lyon, France",
      achievement: "Featured in international exhibitions",
      story: "Jean-Pierre's story reached curators worldwide, leading to gallery representations",
      metrics: {
        followers: 8930,
        sales: 180,
        reach: 67
      }
    },
    {
      artisan: "Fatima Al-Zahra",
      craft: "Calligraphy",
      location: "Marrakech, Morocco",
      achievement: "1M+ story views in 6 months",
      story: "Her calligraphy tutorials became viral, establishing her as a leading online instructor",
      metrics: {
        followers: 23450,
        sales: 450,
        reach: 95
      }
    }
  ];

  const marketingTools = [
    {
      tool: "Content Scheduler",
      description: "Plan and automate your content across platforms",
      usage: 78
    },
    {
      tool: "Brand Builder",
      description: "Create consistent visual identity for your craft",
      usage: 65
    },
    {
      tool: "Customer Insights",
      description: "Understand your audience and their preferences",
      usage: 82
    },
    {
      tool: "Campaign Manager",
      description: "Run targeted marketing campaigns effectively",
      usage: 71
    }
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Digital Marketing for Artisans
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Amplify your craft's reach with powerful digital marketing tools designed specifically 
            for artisans. Build your brand, grow your audience, and increase sales.
          </p>
        </div>

        {/* Marketing Features */}
        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {marketingFeatures.map((feature, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
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
                      Includes
                    </h4>
                    <div className="space-y-1">
                      {feature.features.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mr-2"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Success Stories */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h3 className="text-2xl font-bold text-center mb-8">Success Stories</h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {successStories.map((story, index) => (
              <Card key={index} className="overflow-hidden">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary">{story.craft}</Badge>
                    <Badge variant="outline" className="text-xs">
                      {story.achievement}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{story.artisan}</CardTitle>
                  <CardDescription>{story.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {story.story}
                  </p>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-lg font-bold text-primary">
                        {story.metrics.followers.toLocaleString()}
                      </div>
                      <div className="text-xs text-muted-foreground">Followers</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">
                        +{story.metrics.sales}%
                      </div>
                      <div className="text-xs text-muted-foreground">Sales</div>
                    </div>
                    <div>
                      <div className="text-lg font-bold text-primary">
                        {story.metrics.reach}%
                      </div>
                      <div className="text-xs text-muted-foreground">Reach</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Marketing Tools Usage */}
        <div className="mx-auto mt-16 max-w-4xl">
          <h3 className="text-2xl font-bold text-center mb-8">Popular Marketing Tools</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {marketingTools.map((tool, index) => (
              <Card key={index}>
                <CardContent className="pt-6">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-semibold">{tool.tool}</h4>
                    <span className="text-sm text-muted-foreground">{tool.usage}% adoption</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{tool.description}</p>
                  <Progress value={tool.usage} className="h-2" />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Pricing Tiers */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h3 className="text-2xl font-bold text-center mb-8">Marketing Plans</h3>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Starter</CardTitle>
                <CardDescription>Perfect for new artisans</CardDescription>
                <div className="text-2xl font-bold">Free</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    Basic social sharing
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    Simple analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    Community access
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Get Started
                </Button>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle>Professional</CardTitle>
                    <CardDescription>For growing businesses</CardDescription>
                  </div>
                  <Badge>Popular</Badge>
                </div>
                <div className="text-2xl font-bold">$29/month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    Advanced marketing tools
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    E-commerce integration
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    Detailed analytics
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    Email marketing
                  </li>
                </ul>
                <Button className="w-full mt-6">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Enterprise</CardTitle>
                <CardDescription>For established artisans</CardDescription>
                <div className="text-2xl font-bold">$99/month</div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    All Professional features
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    Priority support
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    Custom branding
                  </li>
                  <li className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 mr-2"></div>
                    API access
                  </li>
                </ul>
                <Button className="w-full mt-6" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}