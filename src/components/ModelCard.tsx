import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { useState } from "react";

export interface ModelCardProps {
  id: number;
  title: string;
  image: string;
  type: string;
  location: string;
  date: string;
  compensation: string;
  description: string;
}

const ModelCard = ({
  title,
  image,
  type,
  location,
  date,
  compensation,
  description,
}: ModelCardProps) => {
  const [imageError, setImageError] = useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <Card className="overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className="relative h-80 overflow-hidden">
        <img
          src={imageError ? "/placeholder.svg" : image}
          alt={title}
          className="w-full h-full object-cover"
          onError={handleImageError}
        />
        <Badge className="absolute top-2 right-2 bg-model-primary">{type}</Badge>
      </div>
      <CardContent className="pt-4">
        <h3 className="text-xl font-semibold line-clamp-2">{title}</h3>
        <div className="mt-2 space-y-1 text-sm text-gray-600">
          <div className="flex items-center">
            <span className="mr-1">📍</span> {location}
          </div>
          <div className="flex items-center">
            <span className="mr-1">📅</span> {date}
          </div>
          <div className="flex items-center">
            <span className="mr-1">💰</span> {compensation}
          </div>
        </div>
        <p className="mt-3 text-sm text-gray-600 line-clamp-3">{description}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <button className="w-full py-2 bg-model-secondary text-white rounded-md hover:bg-model-dark transition-colors">
          Подать заявку
        </button>
      </CardFooter>
    </Card>
  );
};

export default ModelCard;