import { Header } from "./Components/Header";
import { HeroSection } from "./Components/HeroSection";
import { FeaturesSection } from "./Components/FeaturesSection";
import { DiscoverStoriesSection } from "./Components/DiscoverStoriesSection";
import { ShowcaseSection } from "./Components/ShowcaseSection";
import { ArtisanJourneySection } from "./Components/ArtisanJourneySection";
import { TellYourStorySection } from "./Components/TellYourStorySection";
import { PublicProfileSection } from "./Components/PublicProfileSection";
import { AIStorytellingSection } from "./Components/AIStorytellingSection";
import { CulturalHeritageSection } from "./Components/CulturalHeritageSection";
import { CommunityNetworkSection } from "./Components/CommunityNetworkSection";
import { DigitalMarketingSection } from "./Components/DigitalMarketingSection";
import { Footer } from "./Components/Footer";

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
