import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { FeaturesSection } from "./components/FeaturesSection";
import { DiscoverStoriesSection } from "./components/DiscoverStoriesSection";
import { ShowcaseSection } from "./components/ShowcaseSection";
import { ArtisanJourneySection } from "./components/ArtisanJourneySection";
import { TellYourStorySection } from "./components/TellYourStorySection";
import { PublicProfileSection } from "./components/PublicProfileSection";
import { AIStorytellingSection } from "./components/AIStorytellingSection";
import { CulturalHeritageSection } from "./components/CulturalHeritageSection";
import { CommunityNetworkSection } from "./components/CommunityNetworkSection";
import { DigitalMarketingSection } from "./components/DigitalMarketingSection";
import { Footer } from "./components/Footer";
gg
export default function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <DiscoverStoriesSection />
        <ShowcaseSection />
        <ArtisanJourneySection />
        <TellYourStorySection />
        <PublicProfileSection />
        <AIStorytellingSection />
        <CulturalHeritageSection />
        <CommunityNetworkSection />
        <DigitalMarketingSection />
      </main>
      <Footer />
    </div>
  );
}
