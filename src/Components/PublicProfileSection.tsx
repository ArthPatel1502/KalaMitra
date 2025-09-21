import { Button } from "../../UI/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../UI/card";
import { Badge } from "../../UI/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../../UI/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../UI/tabs";

export function PublicProfileSection() {
  const profileExample = {
    name: "Isabella Martinez",
    craft: "Traditional Embroidery",
    location: "Oaxaca, Mexico",
    yearsOfExperience: 15,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
    bio: "Master embroiderer specializing in Zapotec traditional patterns. I learned from my grandmother and now teach workshops to preserve our cultural heritage.",
    specialties: ["Zapotec Patterns", "Natural Dyes", "Silk Threading", "Cultural Preservation"],
    achievements: ["UNESCO Heritage Craftsperson", "Master Artisan Certification", "Cultural Ambassador"],
    stats: {
      stories: 12,
      followers: 2847,
      workshops: 45
    }
  };

  const portfolio = [
    {
      title: "Traditional Wedding Huipil",
      description: "Hand-embroidered ceremonial dress with ancestral patterns",
      image: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Ceremonial"
    },
    {
      title: "Butterfly Garden Series",
      description: "Modern interpretation of traditional motifs",
      image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Contemporary"
    },
    {
      title: "Children's Learning Set",
      description: "Educational embroidery kit for young learners",
      image: "https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&w=400",
      category: "Educational"
    }
  ];

  const profileFeatures = [
    {
      icon: "🎨",
      title: "Portfolio Showcase",
      description: "Display your best work with high-quality images and detailed descriptions"
    },
    {
      icon: "📚",
      title: "Story Collection",
      description: "Organize all your stories in one place for easy discovery"
    },
    {
      icon: "🏆",
      title: "Achievements & Credentials",
      description: "Highlight your certifications, awards, and professional recognition"
    },
    {
      icon: "📞",
      title: "Contact & Booking",
      description: "Enable direct contact for workshops, commissions, and collaborations"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-secondary/20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Your Professional Profile
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Create a stunning public profile that showcases your expertise, tells your story, 
            and connects you with clients and collaborators worldwide.
          </p>
        </div>

        {/* Profile Example */}
        <div className="mx-auto mt-16 max-w-6xl">
          <Card className="overflow-hidden">
            <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                <Avatar className="w-24 h-24">
                  <AvatarImage src={profileExample.avatar} alt={profileExample.name} />
                  <AvatarFallback>{profileExample.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <h3 className="text-2xl font-bold">{profileExample.name}</h3>
                    <Badge variant="secondary">Verified Artisan</Badge>
                  </div>
                  <p className="text-lg text-muted-foreground mb-2">
                    {profileExample.craft} • {profileExample.location}
                  </p>
                  <p className="text-sm text-muted-foreground mb-4">
                    {profileExample.yearsOfExperience} years of experience
                  </p>
                  <p className="text-sm max-w-2xl">{profileExample.bio}</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <Button>Follow</Button>
                  <Button variant="outline">Message</Button>
                </div>
              </div>
              
              <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-border/50">
                <div className="text-center">
                  <div className="text-2xl font-bold">{profileExample.stats.stories}</div>
                  <div className="text-sm text-muted-foreground">Stories</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{profileExample.stats.followers.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Followers</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">{profileExample.stats.workshops}</div>
                  <div className="text-sm text-muted-foreground">Workshops</div>
                </div>
              </div>
            </div>
            
            <CardContent className="p-8">
              <Tabs defaultValue="portfolio" className="w-full">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="portfolio">Portfolio</TabsTrigger>
                  <TabsTrigger value="specialties">Specialties</TabsTrigger>
                  <TabsTrigger value="achievements">Achievements</TabsTrigger>
                  <TabsTrigger value="contact">Contact</TabsTrigger>
                </TabsList>
                
                <TabsContent value="portfolio" className="mt-6">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {portfolio.map((item, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className="aspect-square overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="h-full w-full object-cover transition-transform hover:scale-105"
                          />
                        </div>
                        <CardContent className="p-4">
                          <Badge variant="outline" className="mb-2">{item.category}</Badge>
                          <h4 className="font-semibold mb-1">{item.title}</h4>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="specialties" className="mt-6">
                  <div className="flex flex-wrap gap-2">
                    {profileExample.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary" className="text-sm">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="achievements" className="mt-6">
                  <div className="space-y-2">
                    {profileExample.achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-primary"></div>
                        <span>{achievement}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="contact" className="mt-6">
                  <div className="space-y-4">
                    <p className="text-muted-foreground">
                      Interested in workshops, commissions, or collaborations? Get in touch!
                    </p>
                    <div className="flex gap-4">
                      <Button>Book Workshop</Button>
                      <Button variant="outline">Request Commission</Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        {/* Profile Features */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h3 className="text-2xl font-bold text-center mb-8">Profile Features</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {profileFeatures.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-3xl mb-4">{feature.icon}</div>
                  <h4 className="font-semibold mb-2">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-2xl text-center">
          <Button size="lg" className="px-8">
            Create Your Profile
          </Button>
        </div>
      </div>
    </section>
  );
}