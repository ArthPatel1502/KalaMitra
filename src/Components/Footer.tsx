import { Button } from "../../UI/button";
import { Input } from "../../UI/input";
import { Separator } from "../../UI/seperator";

export function Footer() {
  const footerLinks = {
    Platform: [
      { name: "Discover Stories", href: "#" },
      { name: "Share Your Story", href: "#" },
      { name: "Community", href: "#" },
      { name: "Workshops", href: "#" }
    ],
    Resources: [
      { name: "Help Center", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Cultural Heritage", href: "#" }
    ],
    Company: [
      { name: "About Us", href: "#" },
      { name: "Careers", href: "#" },
      { name: "Press", href: "#" },
      { name: "Contact", href: "#" }
    ],
    Legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Cookie Policy", href: "#" },
      { name: "Guidelines", href: "#" }
    ]
  };

  const socialLinks = [
    { name: "Twitter", href: "#", icon: "🐦" },
    { name: "Instagram", href: "#", icon: "📷" },
    { name: "Facebook", href: "#", icon: "📘" },
    { name: "YouTube", href: "#", icon: "📺" }
  ];

  return (
    <footer className="bg-secondary/30 border-t">
      <div className="container py-16">
        {/* Newsletter Section */}
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h3 className="text-2xl font-bold mb-4">Stay Connected</h3>
          <p className="text-muted-foreground mb-6">
            Get the latest stories, workshop announcements, and community updates delivered to your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input 
              placeholder="Enter your email" 
              className="flex-1"
            />
            <Button>Subscribe</Button>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-2 gap-8 lg:grid-cols-6">
          {/* Brand Section */}
          <div className="col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="h-8 w-8 rounded-full bg-primary"></div>
              <span className="text-xl font-bold">Artisan Stories</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Preserving cultural heritage through authentic artisan stories. 
              Connect, learn, and celebrate traditional crafts from around the world.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="text-2xl hover:opacity-75 transition-opacity"
                  aria-label={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Links Sections */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold mb-4">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-muted-foreground">
            © 2024 Artisan Stories Platform. All rights reserved.
          </div>
          <div className="flex items-center space-x-6 text-sm text-muted-foreground">
            <span>🌍 Available in 25+ languages</span>
            <span>🔒 Privacy protected</span>
            <span>♿ Accessibility focused</span>
          </div>
        </div>
      </div>
    </footer>
  );
}