import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../UI/card";
import { Badge } from "../../UI/badge";
import { Button } from "../../UI/button";
import { Progress } from "../../UI/progress";

export function CulturalHeritageSection() {
  const heritageStats = [
    { label: "Crafts Documented", value: 1247, unit: "traditions" },
    { label: "Countries Represented", value: 89, unit: "nations" },
    { label: "Languages Preserved", value: 156, unit: "languages" },
    { label: "Master Artisans", value: 3421, unit: "craftspeople" }
  ];

  const endangeredCrafts = [
    {
      craft: "Ainu Wood Carving",
      location: "Hokkaido, Japan",
      status: "Critically Endangered",
      practitioners: 12,
      urgency: 95,
      description: "Traditional Ainu bear carving techniques passed down through generations",
      image: "https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      craft: "Khmer Silk Weaving",
      location: "Cambodia",
      status: "Endangered",
      practitioners: 45,
      urgency: 78,
      description: "Ancient silk weaving techniques using traditional looms and natural dyes",
      image: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      craft: "Berber Carpet Making",
      location: "Atlas Mountains, Morocco",
      status: "Vulnerable",
      practitioners: 234,
      urgency: 65,
      description: "Hand-knotted carpets with symbolic patterns representing tribal stories",
      image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  const preservationInitiatives = [
    {
      title: "Digital Archive Project",
      description: "Creating comprehensive digital records of traditional techniques",
      progress: 67,
      goal: "10,000 techniques documented"
    },
    {
      title: "Master-Apprentice Program",
      description: "Connecting elderly masters with young learners worldwide",
      progress: 43,
      goal: "500 mentorship pairs"
    },
    {
      title: "Cultural Exchange Network",
      description: "Facilitating knowledge sharing between similar crafts globally",
      progress: 78,
      goal: "100 cultural bridges"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Critically Endangered": return "destructive";
      case "Endangered": return "secondary";
      case "Vulnerable": return "outline";
      default: return "outline";
    }
  };

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Preserving Cultural Heritage
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Traditional crafts are disappearing at an alarming rate. Join our mission to document, 
            preserve, and revitalize cultural heritage for future generations.
          </p>
        </div>

        {/* Heritage Statistics */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {heritageStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value.toLocaleString()}
                  </div>
                  <div className="text-sm text-muted-foreground">{stat.unit}</div>
                  <div className="text-xs font-medium mt-1">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Endangered Crafts */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">Crafts at Risk</h3>
            <Button variant="outline">View All At-Risk Crafts</Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {endangeredCrafts.map((craft, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={craft.image}
                    alt={craft.craft}
                    className="h-full w-full object-cover"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={getStatusColor(craft.status) as any}>
                      {craft.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">
                      {craft.practitioners} practitioners
                    </span>
                  </div>
                  <CardTitle className="text-lg">{craft.craft}</CardTitle>
                  <CardDescription>{craft.location}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {craft.description}
                  </p>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span>Urgency Level</span>
                      <span>{craft.urgency}%</span>
                    </div>
                    <Progress value={craft.urgency} className="h-2" />
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    Support This Craft
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Preservation Initiatives */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h3 className="text-2xl font-bold text-center mb-8">Our Preservation Efforts</h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {preservationInitiatives.map((initiative, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-lg">{initiative.title}</CardTitle>
                  <CardDescription>{initiative.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm">
                      <span>Progress</span>
                      <span>{initiative.progress}%</span>
                    </div>
                    <Progress value={initiative.progress} className="h-2" />
                    <p className="text-xs text-muted-foreground">
                      Goal: {initiative.goal}
                    </p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/20">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Help Preserve Cultural Heritage</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Every story shared, every technique documented, and every connection made helps preserve 
                our world's rich cultural heritage. Join thousands of artisans in this vital mission.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Document Your Craft
                </Button>
                <Button variant="outline" size="lg">
                  Support Preservation
                </Button>
                <Button variant="outline" size="lg">
                  Become a Mentor
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}