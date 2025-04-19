import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <header className="bg-model-primary text-white py-4 shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
          <div className="flex items-center">
            <h1 className="text-2xl md:text-3xl font-bold">ModelSearch</h1>
          </div>

          {/* Поисковая строка */}
          <div className="w-full max-w-3xl flex">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Поиск кастингов, съемок и проектов..."
              className="w-full px-4 py-2 rounded-l-md text-black focus:outline-none"
            />
            <Button className="rounded-l-none bg-model-secondary hover:bg-model-dark">
              <Search className="h-5 w-5" />
            </Button>
          </div>

          {/* Telegram контакт */}
          <div className="flex items-center text-sm md:text-base bg-model-secondary px-4 py-2 rounded-md">
            <span>Для участия в кастингах пишите нам: </span>
            <a 
              href="https://t.me/vocoders" 
              target="_blank" 
              rel="noopener noreferrer"
              className="ml-1 font-bold hover:underline"
            >
              t.me/vocoders
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;