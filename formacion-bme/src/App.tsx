import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Sidebar } from "./components/Sidebar";
import { TopicLanding } from "./components/landing/TopicLanding";
import { Footer } from "./components/Footer";
import { topicsPresentation } from "./data/presentation";

export default function App() {
  return (
    <div className="app" id="top">
      <Header />
      <Hero />
      <div className="main-layout">
        <Sidebar topics={topicsPresentation} />
        <main id="bloques" className="main-landing">
          <div className="landing-topics">
            {topicsPresentation.map((topic) => (
              <TopicLanding key={topic.id} topic={topic} />
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
