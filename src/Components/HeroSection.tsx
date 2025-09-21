import { Button } from "../../UI/button";
import { Badge } from "../../UI/badge";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-secondary/20 to-accent/30 py-24 sm:py-32">
      <div className="container relative">
        <div className="mx-auto max-w-4xl text-center">
          <Badge variant="secondary" className="mb-6">
            Preserving Cultural Heritage Through Stories
          </Badge>
          
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
            Every Craft Has a
            <span className="text-primary"> Story</span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
            Connect with master artisans, discover their unique journeys, and preserve traditional crafts for future generations. Share your own story and join a global community of makers.
          </p>
          
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Button size="lg" className="px-8">
              Explore Stories
            </Button>
            <Button variant="outline" size="lg" className="px-8">
              Share Your Craft
            </Button>
          </div>
        </div>
        
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                title: "Master Potter",
                location: "Kyoto, Japan",
                craft: "Ceramic Art",
                image: "https://images.pexels.com/photos/1094767/pexels-photo-1094767.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "Textile Weaver",
                location: "Gujarat, India",
                craft: "Traditional Weaving",
                image: "https://images.pexels.com/photos/6474471/pexels-photo-6474471.jpeg?auto=compress&cs=tinysrgb&w=400"
              },
              {
                title: "Wood Carver",
                location: "Black Forest, Germany",
                craft: "Wood Sculpture",
                image: "https://images.pexels.com/photos/1094770/pexels-photo-1094770.jpeg?auto=compress&cs=tinysrgb&w=400"
              }
            ].map((artisan, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl bg-card shadow-lg transition-all hover:shadow-xl">
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={artisan.image}
                    alt={artisan.title}
                    className="h-full w-full object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <Badge variant="outline" className="mb-2">
                    {artisan.craft}
                  </Badge>
                  <h3 className="text-lg font-semibold">{artisan.title}</h3>
                  <p className="text-sm text-muted-foreground">{artisan.location}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}