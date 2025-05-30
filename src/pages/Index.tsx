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
  const [isSearching, setIsSearching] = useState(false);

  // Обновляем результаты при изменении поиска или фильтров
  useEffect(() => {
    setIsSearching(true);
    
    // Добавляем небольшую задержку для лучшего UX
    const searchTimeout = setTimeout(() => {
      try {
        const results = searchCastings(searchQuery, {
          types: filters.types,
          payment: filters.payment,
          location: filters.location,
        });
        setFilteredCastings(results);
      } catch (error) {
        console.error("Ошибка при поиске:", error);
        setFilteredCastings([]);
      } finally {
        setIsSearching(false);
      }
    }, 300);
    
    return () => clearTimeout(searchTimeout);
  }, [searchQuery, filters]);

  const handleSearch = () => {
    // Поиск уже выполняется в useEffect при изменении searchQuery
  };

  const handleFilterChange = (newFilters: typeof filters) => {
    setFilters(newFilters);
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
            <FilterSidebar onFilterChange={handleFilterChange} />
          </aside>
          
          {/* Основной контент с карточками */}
          <div className="flex-grow">
            <div className="mb-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-model-primary">
                Актуальные кастинги
              </h2>
              <span className="text-gray-600">
                Найдено: {isSearching ? '...' : filteredCastings.length}
              </span>
            </div>
            
            {isSearching ? (
              <div className="p-8 text-center">
                <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-model-primary border-r-transparent"></div>
                <p className="mt-4 text-gray-600">Выполняется поиск...</p>
              </div>
            ) : filteredCastings.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredCastings.map((casting) => (
                  <ModelCard 
                    key={casting.id} 
                    id={casting.id}
                    title={casting.title}
                    image={casting.image}
                    type={casting.type}
                    location={casting.location}
                    date={casting.date}
                    compensation={casting.compensation}
                    description={casting.description}
                  />
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