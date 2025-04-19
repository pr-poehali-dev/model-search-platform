import { useState } from "react";

interface Model {
  id: number;
  name: string;
  image: string;
  speciality: string;
}

const FeaturedModels = () => {
  const [models] = useState<Model[]>([
    {
      id: 1,
      name: "Алина К.",
      image: "/placeholder.svg",
      speciality: "Фотомодель, Реклама"
    },
    {
      id: 2,
      name: "Елена М.",
      image: "/placeholder.svg",
      speciality: "Подиум, Fashion"
    },
    {
      id: 3,
      name: "Ирина С.",
      image: "/placeholder.svg",
      speciality: "Фотомодель, TFP"
    }
  ]);

  return (
    <section className="py-12 bg-model-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center text-model-dark">Успешные модели</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {models.map((model) => (
            <div key={model.id} className="relative group overflow-hidden rounded-lg">
              <div className="aspect-[2/3] overflow-hidden">
                <img 
                  src={model.image} 
                  alt={model.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 text-white">
                <h3 className="text-xl font-semibold">{model.name}</h3>
                <p className="text-sm opacity-90">{model.speciality}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;