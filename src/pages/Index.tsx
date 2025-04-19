import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import FilterSidebar from "@/components/FilterSidebar";
import ModelCard from "@/components/ModelCard";
import { castings, searchCastings, Casting } from "@/data/mockData";
import SearchBar from "@/components/SearchBar";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState({
    types: [] as string[],
    payment: "all",
    location: "",
  });
  const [filteredCastings, setFilteredCastings] = useState<Casting[]>(castings);

  // Обновляем результаты при изменении поиска или фильтров
  useEffect(() => {
    const results = searchCastings(searchQuery, {
      types: filters.types,
      payment: filters.payment,
      location: filters.location,
    });
    setFilteredCastings(results);
  }, [searchQuery, filters]);

  const handleSearch = () => {
    // Поиск уже выполняется в useEffect при изменении searchQuery
    // Этот метод нужен для обработки отправки формы поиска
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <HeroSection />
      
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* Поисковая строка */}
        <div className="mb-6">
          <SearchBar 
            searchQuery={searchQuery} 
            onSearchChange={setSearchQuery} 
            onSearch={handleSearch}
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-6">
          {/* Боковая панель фильтров */}
          <aside className="md:w-64 shrink-0">
            <FilterSidebar onFilterChange={setFilters} />
          </aside>
          
          {/* Основной контент с карточками */}
          <div className="flex-grow">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-model-primary">
                Актуальные кастинги
              </h2>
              <span className="text-gray-600">Найдено: {filteredCastings.length}</span>
            </div>
            
            {filteredCastings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCastings.map((casting) => (
                  <ModelCard key={casting.id} {...casting} />
                ))}
              </div>
            ) : (
              <div className="p-8 text-center bg-gray-50 rounded-lg">
                <p className="text-xl text-gray-600">
                  По вашему запросу ничего не найдено.
                </p>
                <p className="mt-2 text-gray-500">
                  Попробуйте изменить параметры поиска или фильтры.
                </p>
              </div>
            )}
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;