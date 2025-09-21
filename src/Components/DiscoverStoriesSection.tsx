import { Button } from "../../UI/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../UI/card";
import { Badge } from "../../UI/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../UI/tabs";

export function DiscoverStoriesSection() {
  const stories = [
    {
      title: "The Last Silk Weaver of Varanasi",
      artisan: "Rajesh Kumar",
      location: "Varanasi, India",
      craft: "Silk Weaving",
      excerpt: "A 300-year-old family tradition of creating the finest Banarasi silk sarees, passed down through seven generations.",
      image: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=600",
      readTime: "8 min read",
      category: "Textile Arts"
    },
    {
      title: "Forging Legends: The Samurai Sword Maker",
      artisan: "Takeshi Yamamoto",
      location: "Kyoto, Japan",
      craft: "Sword Making",
      excerpt: "Master swordsmith continues the ancient art of katana making, preserving techniques that date back to feudal Japan.",
      image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=600",
      readTime: "12 min read",
      category: "Metalwork"
    },
    {
      title: "Clay Dreams: Pottery in the Digital Age",
      artisan: "Maria Santos",
      location: "Talavera, Mexico",
      craft: "Ceramic Art",
      excerpt: "How traditional Talavera pottery adapts to modern times while maintaining its authentic cultural significance.",
      image: "https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&w=600",
      readTime: "6 min read",
      category: "Ceramics"
    }
  ];

  const categories = ["All Stories", "Textile Arts", "Metalwork", "Ceramics", "Woodwork", "Jewelry"];

  return (
    <section className="py-24 sm:py-32 bg-secondary/20">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Discover Inspiring Stories
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Explore the rich tapestry of human creativity through authentic stories from master artisans around the world.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-6xl">
          <Tabs defaultValue="All Stories" className="w-full">
            <TabsList className="grid w-full grid-cols-3 lg:grid-cols-6">
              {categories.map((category) => (
                <TabsTrigger key={category} value={category} className="text-xs">
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value="All Stories" className="mt-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                {stories.map((story, index) => (
                  <Card key={index} className="group overflow-hidden transition-all hover:shadow-lg">
                    <div className="aspect-[16/10] overflow-hidden">
                      <img
                        src={story.image}
                        alt={story.title}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline">{story.category}</Badge>
                        <span className="text-xs text-muted-foreground">{story.readTime}</span>
                      </div>
                      <CardTitle className="line-clamp-2">{story.title}</CardTitle>
                      <CardDescription>
                        <span className="font-medium">{story.artisan}</span> • {story.location}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                        {story.excerpt}
                      </p>
                      <Button variant="ghost" size="sm" className="p-0 h-auto">
                        Read Story →
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            {categories.slice(1).map((category) => (
              <TabsContent key={category} value={category} className="mt-8">
                <div className="text-center py-12">
                  <p className="text-muted-foreground">
                    Stories in the {category} category will be displayed here.
                  </p>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg">
            Explore All Stories
          </Button>
        </div>
      </div>
    </section>
  );
}