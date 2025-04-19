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
    image: "/placeholder.svg",
    type: "Фотосъёмка",
    location: "Москва",
    date: "10.06.2023",
    compensation: "20 000 ₽",
    description: "Ищем моделей для съёмки нового летнего каталога купальников. Требования: рост от 170 см, параметры близкие к 90-60-90."
  },
  {
    id: 2,
    title: "Рекламная кампания пляжной одежды",
    image: "/placeholder.svg",
    type: "Видеосъёмка",
    location: "Сочи",
    date: "15.06.2023",
    compensation: "30 000 ₽",
    description: "Съёмки рекламного ролика для известного бренда пляжной одежды. Требуются модели с опытом работы на камеру."
  },
  {
    id: 3,
    title: "TFP фотосессия в бикини на пляже",
    image: "/placeholder.svg",
    type: "TFP",
    location: "Санкт-Петербург",
    date: "20.06.2023",
    compensation: "TFP",
    description: "Креативная фотосессия на песчаном пляже. Отличная возможность обновить портфолио. Фотограф с 10-летним опытом работы."
  },
  {
    id: 4,
    title: "Показ купальников на Неделе Моды",
    image: "/placeholder.svg",
    type: "Показ",
    location: "Москва",
    date: "02.07.2023",
    compensation: "15 000 ₽",
    description: "Требуются модели для участия в модном показе купальников и пляжной одежды в рамках Недели Моды."
  },
  {
    id: 5,
    title: "Съёмка летней коллекции для журнала",
    image: "/placeholder.svg",
    type: "Фотосъёмка",
    location: "Казань",
    date: "25.06.2023",
    compensation: "25 000 ₽",
    description: "Съёмка эксклюзивной летней коллекции для модного журнала. Требуются модели с опытом работы."
  },
  {
    id: 6,
    title: "Рекламная съёмка для пляжного клуба",
    image: "/placeholder.svg",
    type: "Фото+Видео",
    location: "Сочи",
    date: "05.07.2023",
    compensation: "35 000 ₽",
    description: "Фото и видеосъёмка для рекламной кампании элитного пляжного клуба. Съёмки будут проходить на побережье."
  }
];