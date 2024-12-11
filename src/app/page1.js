import Image from "next/image";
import TopBanner from "../components/TopBanner";
import HeroSection from "../components/HeroSection";
import CategorySection from "../components/CategorySection";
import CitySection from "../components/CitySection";
import InternshipTab from "../components/InternshipTab";
import CoursesTab from "../components/CourseTab";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <TopBanner />
      <HeroSection />

      <CategorySection />
      <CitySection />

      <div className="w-full mx-auto my-6 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
        <InternshipTab />
      </div>

      <div className="w-full mx-auto my-6 p-4 bg-gray-100 rounded-lg shadow-md border border-gray-300">
        <CoursesTab />
      </div>
      
      <Footer />
    </div>
  );
}
