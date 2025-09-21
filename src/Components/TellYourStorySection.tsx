import { Button } from "../../UI/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../UI/card";
import { Input } from "../../UI/input";
import { Textarea } from "../../UI/textarea";
import { Badge } from "../../UI/badge";

export function TellYourStorySection() {
  const storyFeatures = [
    {
      icon: "📸",
      title: "Rich Media Support",
      description: "Upload photos, videos, and audio recordings to bring your story to life"
    },
    {
      icon: "🎨",
      title: "Story Templates",
      description: "Choose from professionally designed templates or create your own unique layout"
    },
    {
      icon: "🌍",
      title: "Cultural Context",
      description: "Add historical background and cultural significance to preserve heritage"
    },
    {
      icon: "🤝",
      title: "Community Feedback",
      description: "Receive encouragement and insights from fellow artisans worldwide"
    }
  ];

  const storyExamples = [
    {
      title: "My First Pottery Wheel",
      author: "Sarah Chen",
      craft: "Ceramics",
      excerpt: "The clay felt cold and unforgiving in my hands, but my grandmother's patient guidance...",
      likes: 234,
      comments: 18
    },
    {
      title: "Learning from the Masters",
      author: "Ahmed Hassan",
      craft: "Calligraphy",
      excerpt: "In the narrow streets of old Cairo, I discovered the workshop that would change my life...",
      likes: 189,
      comments: 25
    },
    {
      title: "Reviving Ancient Techniques",
      author: "Maria Gonzalez",
      craft: "Textile Arts",
      excerpt: "When I found my great-grandmother's loom in the attic, I knew I had to learn...",
      likes: 312,
      comments: 42
    }
  ];

  return (
    <section className="py-24 sm:py-32">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Tell Your Story
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Every artisan has a unique journey. Share your experiences, challenges, and triumphs 
            to inspire others and preserve your craft's heritage.
          </p>
        </div>

        {/* Story Creation Form */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Card>
            <CardHeader>
              <CardTitle>Share Your Artisan Story</CardTitle>
              <CardDescription>
                Tell the world about your craft, your journey, and what makes your work special.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Name</label>
                  <Input placeholder="Enter your name" />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Craft</label>
                  <Input placeholder="e.g., Pottery, Weaving, Woodworking" />
                </div>
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Story Title</label>
                <Input placeholder="Give your story a compelling title" />
              </div>
              
              <div>
                <label className="text-sm font-medium mb-2 block">Your Story</label>
                <Textarea 
                  placeholder="Share your journey, techniques, cultural background, or any aspect of your craft that you'd like others to know about..."
                  className="min-h-32"
                />
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="flex-1">
                  Publish Story
                </Button>
                <Button variant="outline" className="flex-1">
                  Save as Draft
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Story Features */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h3 className="text-2xl font-bold text-center mb-8">Why Share Your Story?</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {storyFeatures.map((feature, index) => (
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

        {/* Recent Stories */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">Recent Stories</h3>
            <Button variant="outline">View All Stories</Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {storyExamples.map((story, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{story.craft}</Badge>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <span>❤️ {story.likes}</span>
                      <span>💬 {story.comments}</span>
                    </div>
                  </div>
                  <CardTitle className="text-lg line-clamp-2">{story.title}</CardTitle>
                  <CardDescription>by {story.author}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground line-clamp-3 mb-4">
                    {story.excerpt}
                  </p>
                  <Button variant="ghost" size="sm" className="p-0 h-auto">
                    Read Full Story →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}