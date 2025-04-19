export interface Casting {
  id: number;
  title: string;
  image: string;
  type: string;
  location: string;
  date: string;
  compensation: string;
  description: string;
}

export const castings: Casting[] = [
  {
    id: 1,
    title: "Фотосессия купальников для летнего каталога",
    image: "https://images.unsplash.com/photo-1564485377539-4af72d1f6a2f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    type: "Фотосъёмка",
    location: "Москва",
    date: "10.06.2023",
    compensation: "20 000 ₽",
    description: "Ищем моделей для съёмки нового летнего каталога купальников. Требования: рост от 170 см, параметры близкие к 90-60-90."
  },
  {
    id: 2,
    title: "Рекламная кампания пляжной одежды",
    image: "https://images.unsplash.com/photo-1552673597-e3cd6747a996?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    type: "Видеосъёмка",
    location: "Сочи",
    date: "15.06.2023",
    compensation: "30 000 ₽",
    description: "Съёмки рекламного ролика для известного бренда пляжной одежды. Требуются модели с опытом работы на камеру."
  },
  {
    id: 3,
    title: "TFP фотосессия в бикини на пляже",
    image: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    type: "TFP",
    location: "Санкт-Петербург",
    date: "20.06.2023",
    compensation: "TFP",
    description: "Креативная фотосессия на песчаном пляже. Отличная возможность обновить портфолио. Фотограф с 10-летним опытом работы."
  },
  {
    id: 4,
    title: "Показ купальников на Неделе Моды",
    image: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    type: "Показ",
    location: "Москва",
    date: "02.07.2023",
    compensation: "15 000 ₽",
    description: "Требуются модели для участия в модном показе купальников и пляжной одежды в рамках Недели Моды."
  },
  {
    id: 5,
    title: "Съёмка летней коллекции для журнала",
    image: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    type: "Фотосъёмка",
    location: "Казань",
    date: "25.06.2023",
    compensation: "25 000 ₽",
    description: "Съёмка эксклюзивной летней коллекции для модного журнала. Требуются модели с опытом работы."
  },
  {
    id: 6,
    title: "Рекламная съёмка для пляжного клуба",
    image: "https://images.unsplash.com/photo-1583766395091-2eb9994ed094?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
    type: "Фото+Видео",
    location: "Сочи",
    date: "05.07.2023",
    compensation: "35 000 ₽",
    description: "Фото и видеосъёмка для рекламной кампании элитного пляжного клуба. Съёмки будут проходить на побережье."
  }
];

// Функция поиска кастингов
export const searchCastings = (
  query: string, 
  filters: {
    types?: string[],
    payment?: string,
    location?: string
  }
): Casting[] => {
  console.log("Поисковый запрос:", query);
  console.log("Фильтры:", filters);
  
  const results = castings.filter(casting => {
    // Поиск по строке запроса
    const matchesQuery = !query || query === '' || 
      casting.title.toLowerCase().includes(query.toLowerCase()) ||
      casting.description.toLowerCase().includes(query.toLowerCase());
    
    // Фильтрация по типу
    const matchesType = !filters.types?.length || 
      filters.types.includes(casting.type);
    
    // Фильтрация по оплате
    const matchesPayment = !filters.payment || 
      filters.payment === 'all' || 
      (filters.payment === 'paid' && casting.compensation !== 'TFP') ||
      (filters.payment === 'tfp' && casting.compensation === 'TFP');
    
    // Фильтрация по локации
    const matchesLocation = !filters.location || filters.location === '' || 
      casting.location === filters.location;
    
    return matchesQuery && matchesType && matchesPayment && matchesLocation;
  });
  
  console.log("Результаты поиска:", results.length);
  return results;
};