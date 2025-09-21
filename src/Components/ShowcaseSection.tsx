import { Card, CardContent } from "../../UI/card";
import { Badge } from "../../UI/badge";
import { Button } from "../../UI/button";

export function ShowcaseSection() {
  const showcaseItems = [
    {
      title: "Master Craftsman Gallery",
      description: "Curated collection of exceptional artisan work",
      image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Featured Collection",
      stats: "150+ Artisans"
    },
    {
      title: "Cultural Heritage Archive",
      description: "Preserving traditional techniques for future generations",
      image: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Heritage",
      stats: "500+ Stories"
    },
    {
      title: "Global Artisan Network",
      description: "Connecting makers across continents and cultures",
      image: "https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&w=800",
      category: "Community",
      stats: "50+ Countries"
    }
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Showcase of Excellence
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Celebrating the finest examples of traditional craftsmanship and the stories behind them.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-7xl">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {showcaseItems.map((item, index) => (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-lg">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                </div>
                <CardContent className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                      {item.category}
                    </Badge>
                    <span className="text-sm font-medium">{item.stats}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                  <p className="text-sm text-white/90 mb-4">{item.description}</p>
                  <Button variant="secondary" size="sm" className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                    Explore
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-2xl bg-gradient-to-r from-primary/10 via-accent/10 to-secondary/20 p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Join Our Featured Artisans</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Share your craft with the world and become part of our curated showcase. 
              Connect with collectors, enthusiasts, and fellow artisans who appreciate authentic craftsmanship.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg">
                Submit Your Work
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}