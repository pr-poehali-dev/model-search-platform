import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface SearchBarProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearch: () => void;
}

const SearchBar = ({ searchQuery, onSearchChange, onSearch }: SearchBarProps) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex gap-2">
      <div className="relative flex-grow">
        <Input
          type="text"
          placeholder="Поиск кастингов и съемок..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="w-full pl-4 pr-10 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-model-primary"
        />
      </div>
      <Button 
        type="submit"
        className="bg-model-primary hover:bg-model-dark text-white"
      >
        <Search className="w-5 h-5 mr-2" />
        Найти
      </Button>
    </form>
  );
};

export default SearchBar;