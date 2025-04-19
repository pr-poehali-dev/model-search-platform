import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FilterSidebar from "@/components/FilterSidebar";
import ModelCard from "@/components/ModelCard";
import FeaturedModels from "@/components/FeaturedModels";
import { castings } from "@/data/mockData";

const Index = () => {
  const [searchResults] = useState(castings);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      
      <main className="flex-grow py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Актуальные кастинги и съёмки</h2>
          
          <div className="flex flex-col md:flex-row gap-8">
            {/* Сайдбар с фильтрами */}
            <aside className="w-full md:w-64 md:flex-shrink-0">
              <FilterSidebar />
            </aside>
            
            {/* Основной контент с карточками */}
            <div className="flex-grow">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {searchResults.map((casting) => (
                  <ModelCard 
                    key={casting.id}
                    id={casting.id}
                    title={casting.title}
                    image={casting.image}
                    type={casting.type}
                    location={casting.location}
                    date={casting.date}
                    compensation={casting.compensation}
                  />
                ))}
              </div>
              
              {/* Пагинация */}
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-1">
                  <button className="px-4 py-2 bg-white border rounded-md hover:bg-gray-100">1</button>
                  <button className="px-4 py-2 bg-white border rounded-md hover:bg-gray-100">2</button>
                  <button className="px-4 py-2 bg-white border rounded-md hover:bg-gray-100">3</button>
                  <span className="px-4 py-2">...</span>
                  <button className="px-4 py-2 bg-white border rounded-md hover:bg-gray-100">10</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <FeaturedModels />
      <Footer />
    </div>
  );
};

export default Index;