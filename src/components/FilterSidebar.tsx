import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { useState, useEffect } from "react";

interface FilterSidebarProps {
  onFilterChange: (filters: {
    types: string[];
    payment: string;
    location: string;
  }) => void;
}

const FilterSidebar = ({ onFilterChange }: FilterSidebarProps) => {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [paymentType, setPaymentType] = useState<string>("all");
  const [selectedLocation, setSelectedLocation] = useState<string>("all");

  const typeOptions = [
    { id: "type-photo", label: "Фотосъёмка", value: "Фотосъёмка" },
    { id: "type-video", label: "Видеосъёмка", value: "Видеосъёмка" },
    { id: "type-runway", label: "Показ", value: "Показ" },
    { id: "type-mixed", label: "Фото+Видео", value: "Фото+Видео" },
    { id: "type-tfp", label: "TFP", value: "TFP" },
  ];

  useEffect(() => {
    console.log("Отправка фильтров:", {
      types: selectedTypes,
      payment: paymentType,
      location: selectedLocation === "all" ? "" : selectedLocation,
    });
    
    onFilterChange({
      types: selectedTypes,
      payment: paymentType,
      location: selectedLocation === "all" ? "" : selectedLocation,
    });
  }, [selectedTypes, paymentType, selectedLocation, onFilterChange]);

  const handleTypeChange = (value: string, checked: boolean) => {
    console.log("Изменение типа:", value, checked);
    if (checked) {
      setSelectedTypes(prev => [...prev, value]);
    } else {
      setSelectedTypes(prev => prev.filter((type) => type !== value));
    }
  };

  return (
    <div className="w-full md:w-64 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-model-primary">Фильтры</h2>
      
      <div className="space-y-6">
        {/* Тип проекта */}
        <div>
          <h3 className="font-medium mb-2">Тип проекта</h3>
          <div className="space-y-2">
            {typeOptions.map((option) => (
              <div key={option.id} className="flex items-center space-x-2">
                <Checkbox 
                  id={option.id} 
                  checked={selectedTypes.includes(option.value)}
                  onCheckedChange={(checked) => 
                    handleTypeChange(option.value, checked === true)
                  }
                />
                <Label htmlFor={option.id}>{option.label}</Label>
              </div>
            ))}
          </div>
        </div>
        
        {/* Оплата */}
        <div>
          <h3 className="font-medium mb-2">Оплата</h3>
          <RadioGroup 
            value={paymentType} 
            onValueChange={setPaymentType}
          >
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="all" id="pay-all" />
              <Label htmlFor="pay-all">Любая</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="paid" id="pay-paid" />
              <Label htmlFor="pay-paid">Оплачиваемые</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="tfp" id="pay-tfp" />
              <Label htmlFor="pay-tfp">TFP</Label>
            </div>
          </RadioGroup>
        </div>
        
        {/* Локация */}
        <div>
          <h3 className="font-medium mb-2">Город</h3>
          <Select 
            value={selectedLocation} 
            onValueChange={setSelectedLocation}
          >
            <SelectTrigger>
              <SelectValue placeholder="Выберите город" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Все города</SelectItem>
              <SelectItem value="Москва">Москва</SelectItem>
              <SelectItem value="Санкт-Петербург">Санкт-Петербург</SelectItem>
              <SelectItem value="Казань">Казань</SelectItem>
              <SelectItem value="Сочи">Сочи</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;