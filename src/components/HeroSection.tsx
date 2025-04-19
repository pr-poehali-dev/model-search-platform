import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-[500px] flex items-center overflow-hidden">
      {/* Фоновое изображение */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-r from-model-dark/70 to-model-primary/50 z-10" />
        <img 
          src="/placeholder.svg" 
          alt="Модели на подиуме" 
          className="w-full h-full object-cover"
        />
      </div>
      
      {/* Контент */}
      <div className="container mx-auto px-4 relative z-20 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Найди свой идеальный кастинг
          </h1>
          <p className="text-xl mb-8">
            Тысячи возможностей для моделей и актёров. Съёмки, показы мод и рекламные кампании ждут тебя!
          </p>
          <div className="flex flex-wrap gap-4">
            <Button className="bg-model-primary hover:bg-model-primary/90 text-white px-8 py-6 text-lg">
              Найти кастинг
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white/10 px-8 py-6 text-lg">
              Разместить проект
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;