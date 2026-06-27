import Loader from "./components/Loader";
import MouseFollower from "./components/MouseFollower";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TrendingGames from "./components/TrendingGames";
import LiveTournaments from "./components/LiveTournaments";
import CommunitySection from "./components/CommunitySection";
import MembershipPlans from "./components/MembershipPlans";
import GamingNews from "./components/GamingNews";
import FAQ from "./components/FAQ";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

export default function App() {
  return (
    <div className="relative min-h-screen bg-nova-dark text-white overflow-hidden selection:bg-nova-secondary/30 selection:text-white">
      {/* Preloader */}
      <Loader />

      {/* Futuristic Mouse Follower Indicator */}
      <MouseFollower />

      {/* Navigation Layout */}
      <Navbar />

      {/* Main Screen Layout */}
      <main className="relative z-10">
        <Hero />
        <TrendingGames />
        <LiveTournaments />
        <CommunitySection />
        <MembershipPlans />
        <GamingNews />
        <FAQ />
        <Newsletter />
      </main>

      {/* Footer & Navigation Controls */}
      <Footer />
      <BackToTop />
    </div>
  );
}
