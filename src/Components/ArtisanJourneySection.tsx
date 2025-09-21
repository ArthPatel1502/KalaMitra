import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../UI/card";
import { Badge } from "../../UI/badge";
import { Progress } from "../../UI/progress";

export function ArtisanJourneySection() {
  const journeySteps = [
    {
      step: 1,
      title: "Discovery & Learning",
      description: "Every artisan's journey begins with curiosity and the first touch of their chosen medium.",
      skills: ["Basic Techniques", "Tool Familiarity", "Material Understanding"],
      duration: "1-2 years",
      progress: 20
    },
    {
      step: 2,
      title: "Skill Development",
      description: "Through practice and mentorship, fundamental skills are refined and personal style begins to emerge.",
      skills: ["Advanced Techniques", "Quality Control", "Design Principles"],
      duration: "3-5 years",
      progress: 45
    },
    {
      step: 3,
      title: "Mastery & Innovation",
      description: "Years of dedication lead to mastery, where tradition meets innovation and unique artistry flourishes.",
      skills: ["Master Craftsmanship", "Innovation", "Teaching Others"],
      duration: "10+ years",
      progress: 75
    },
    {
      step: 4,
      title: "Legacy & Preservation",
      description: "Master artisans become guardians of tradition, passing knowledge to future generations.",
      skills: ["Cultural Preservation", "Mentorship", "Knowledge Transfer"],
      duration: "Lifetime",
      progress: 100
    }
  ];

  const featuredJourney = {
    artisan: "Elena Rodriguez",
    craft: "Traditional Pottery",
    location: "Puebla, Mexico",
    yearsOfExperience: 25,
    currentStage: "Legacy & Preservation",
    image: "https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&w=600",
    story: "From a curious child watching her grandmother shape clay to becoming a master potter who teaches workshops worldwide, Elena's journey embodies the evolution of traditional Mexican pottery."
  };

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-secondary/30 via-background to-accent/20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            The Artisan's Journey
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Every master craftsperson follows a unique path of discovery, learning, and eventual mastery. 
            Explore the stages that transform passion into expertise.
          </p>
        </div>

        {/* Featured Journey */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Card className="overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="aspect-[4/3] lg:aspect-auto">
                <img
                  src={featuredJourney.image}
                  alt={featuredJourney.artisan}
                  className="h-full w-full object-cover"
                />
              </div>
              <CardContent className="p-8">
                <div className="flex items-center gap-2 mb-4">
                  <Badge variant="outline">{featuredJourney.craft}</Badge>
                  <Badge variant="secondary">{featuredJourney.yearsOfExperience} years</Badge>
                </div>
                <CardTitle className="text-2xl mb-2">{featuredJourney.artisan}</CardTitle>
                <CardDescription className="text-base mb-4">
                  {featuredJourney.location} • {featuredJourney.currentStage}
                </CardDescription>
                <p className="text-muted-foreground mb-6">
                  {featuredJourney.story}
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Journey Progress</span>
                    <span>Master Level</span>
                  </div>
                  <Progress value={95} className="h-2" />
                </div>
              </CardContent>
            </div>
          </Card>
        </div>

        {/* Journey Stages */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {journeySteps.map((step, index) => (
              <Card key={index} className="relative overflow-hidden transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold">
                      {step.step}
                    </div>
                    <Badge variant="outline" className="text-xs">
                      {step.duration}
                    </Badge>
                  </div>
                  <CardTitle className="text-lg">{step.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {step.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span>Skill Development</span>
                        <span>{step.progress}%</span>
                      </div>
                      <Progress value={step.progress} className="h-1" />
                    </div>
                    <div>
                      <h4 className="text-xs font-medium mb-2">Key Skills:</h4>
                      <div className="flex flex-wrap gap-1">
                        {step.skills.map((skill, skillIndex) => (
                          <Badge key={skillIndex} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <p className="text-muted-foreground mb-6">
            Every artisan's journey is unique, shaped by culture, tradition, and personal passion. 
            Share your own story and inspire the next generation of craftspeople.
          </p>
        </div>
      </div>
    </section>
  );
}