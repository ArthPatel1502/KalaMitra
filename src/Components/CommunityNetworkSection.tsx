import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../UI/card";
import { Badge } from "../../UI/badge";
import { Button } from "../../UI/button";
import { Avatar, AvatarFallback, AvatarImage } from "../../UI/avatar";

export function CommunityNetworkSection() {
  const communityStats = [
    { label: "Active Members", value: 15420, growth: "+12%" },
    { label: "Countries", value: 89, growth: "+5%" },
    { label: "Workshops This Month", value: 234, growth: "+28%" },
    { label: "Collaborations", value: 1847, growth: "+15%" }
  ];

  const featuredMembers = [
    {
      name: "Kenji Nakamura",
      craft: "Pottery",
      location: "Kyoto, Japan",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      specialties: ["Raku Firing", "Tea Ceremony Bowls"],
      followers: 2847,
      stories: 23,
      isOnline: true
    },
    {
      name: "Amara Okafor",
      craft: "Textile Arts",
      location: "Lagos, Nigeria",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      specialties: ["Adire Dyeing", "Traditional Patterns"],
      followers: 1923,
      stories: 18,
      isOnline: false
    },
    {
      name: "Carlos Mendoza",
      craft: "Woodworking",
      location: "Oaxaca, Mexico",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150",
      specialties: ["Alebrije Carving", "Natural Pigments"],
      followers: 3156,
      stories: 31,
      isOnline: true
    }
  ];

  const upcomingEvents = [
    {
      title: "Global Pottery Exchange",
      date: "March 15, 2024",
      time: "2:00 PM UTC",
      participants: 156,
      type: "Virtual Workshop",
      host: "Master Chen Wei"
    },
    {
      title: "Textile Traditions Symposium",
      date: "March 22, 2024",
      time: "10:00 AM UTC",
      participants: 89,
      type: "Panel Discussion",
      host: "Heritage Foundation"
    },
    {
      title: "Collaborative Art Project",
      date: "March 28, 2024",
      time: "6:00 PM UTC",
      participants: 234,
      type: "Group Project",
      host: "Community Initiative"
    }
  ];

  const communityFeatures = [
    {
      icon: "🤝",
      title: "Mentorship Programs",
      description: "Connect with experienced artisans for guidance and skill development"
    },
    {
      icon: "🎓",
      title: "Virtual Workshops",
      description: "Join live workshops and masterclasses from anywhere in the world"
    },
    {
      icon: "💬",
      title: "Discussion Forums",
      description: "Share techniques, ask questions, and engage in meaningful conversations"
    },
    {
      icon: "🌟",
      title: "Collaboration Hub",
      description: "Find partners for joint projects and cross-cultural exchanges"
    }
  ];

  return (
    <section className="py-24 sm:py-32 bg-gradient-to-br from-accent/20 via-background to-secondary/30">
      <div className="container">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Global Artisan Community
          </h2>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            Connect with fellow artisans, share knowledge, and build lasting relationships 
            in our vibrant global community of makers and creators.
          </p>
        </div>

        {/* Community Statistics */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {communityStats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="text-2xl font-bold text-primary mb-1">
                    {stat.value.toLocaleString()}
                  </div>
                  <div className="text-sm font-medium mb-1">{stat.label}</div>
                  <Badge variant="secondary" className="text-xs">
                    {stat.growth} this month
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Featured Community Members */}
        <div className="mx-auto mt-16 max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-bold">Featured Artisans</h3>
            <Button variant="outline">View All Members</Button>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredMembers.map((member, index) => (
              <Card key={index} className="transition-all hover:shadow-lg">
                <CardHeader>
                  <div className="flex items-center space-x-4">
                    <div className="relative">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={member.avatar} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      {member.isOnline && (
                        <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-background"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg">{member.name}</CardTitle>
                      <CardDescription>
                        {member.craft} • {member.location}
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {member.specialties.map((specialty, specialtyIndex) => (
                        <Badge key={specialtyIndex} variant="outline" className="text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>{member.followers.toLocaleString()} followers</span>
                      <span>{member.stories} stories</span>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" className="flex-1">Follow</Button>
                      <Button variant="outline" size="sm" className="flex-1">Message</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Upcoming Events */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h3 className="text-2xl font-bold text-center mb-8">Upcoming Community Events</h3>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
            {upcomingEvents.map((event, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant="outline">{event.type}</Badge>
                    <span className="text-xs text-muted-foreground">
                      {event.participants} attending
                    </span>
                  </div>
                  <CardTitle className="text-lg">{event.title}</CardTitle>
                  <CardDescription>Hosted by {event.host}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-sm">
                      <span className="font-medium mr-2">📅</span>
                      {event.date}
                    </div>
                    <div className="flex items-center text-sm">
                      <span className="font-medium mr-2">🕐</span>
                      {event.time}
                    </div>
                  </div>
                  <Button size="sm" className="w-full">
                    Join Event
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Community Features */}
        <div className="mx-auto mt-16 max-w-6xl">
          <h3 className="text-2xl font-bold text-center mb-8">Community Features</h3>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {communityFeatures.map((feature, index) => (
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

        {/* Join Community CTA */}
        <div className="mx-auto mt-16 max-w-4xl">
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Join Our Growing Community</h3>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Connect with artisans worldwide, share your knowledge, learn new techniques, 
                and be part of a movement that celebrates and preserves traditional crafts.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg">
                  Join Community
                </Button>
                <Button variant="outline" size="lg">
                  Explore Events
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}