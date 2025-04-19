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

const FilterSidebar = () => {
  return (
    <div className="w-full md:w-64 p-4 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4 text-model-primary">Фильтры</h2>
      
      <div className="space-y-6">
        {/* Тип проекта */}
        <div>
          <h3 className="font-medium mb-2">Тип проекта</h3>
          <div className="space-y-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="type-photo" />
              <Label htmlFor="type-photo">Фотосъемка</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="type-video" />
              <Label htmlFor="type-video">Видеосъемка</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="type-runway" />
              <Label htmlFor="type-runway">Показ мод</Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="type-acting" />
              <Label htmlFor="type-acting">Актерское</Label>
            </div>
          </div>
        </div>
        
        {/* Оплата */}
        <div>
          <h3 className="font-medium mb-2">Оплата</h3>
          <RadioGroup defaultValue="all">
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
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Выберите город" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="moscow">Москва</SelectItem>
              <SelectItem value="spb">Санкт-Петербург</SelectItem>
              <SelectItem value="kazan">Казань</SelectItem>
              <SelectItem value="sochi">Сочи</SelectItem>
              <SelectItem value="other">Другие города</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default FilterSidebar;