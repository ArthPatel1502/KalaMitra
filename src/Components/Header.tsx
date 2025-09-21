import { Button } from "../../UI/button";
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from "../../UI/navigation-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-full bg-primary"></div>
            <span className="text-xl font-bold">Artisan Stories</span>
          </div>
        </div>

        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Discover</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-6 md:w-[400px] lg:w-[500px]">
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Stories</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Explore authentic artisan stories from around the world
                    </p>
                  </NavigationMenuLink>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium leading-none">Artisans</div>
                    <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                      Meet talented craftspeople and their unique skills
                    </p>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                Community
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                About
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex items-center space-x-4">
          <Button variant="ghost">Sign In</Button>
          <Button>Get Started</Button>
        </div>
      </div>
    </header>
  );
}