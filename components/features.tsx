'use client'
import { useState } from 'react';
import {featureCards} from "@/app/data/features"

// Define types for our component props and data
interface Feature {
  title: string;
  author: string;
}

// interface FeatureCardData {
//   features: Feature[];
//   title: string;
// }

interface FeatureCardProps {
  features: Feature[];
  title: string;
}

interface PaginationDotsProps {
  total: number;
  active: number;
  onClick: (index: number) => void;
}

// Feature card component
const FeatureCard: React.FC<FeatureCardProps> = ({ features, title }) => {
  return (
    <div className="bg-white p-4 w-full">
      <div className="flex flex-col md:flex-row gap-4 justify-between">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col">
            <p className="font-roboto font-medium text-xs">{feature.title}</p>
            <p className="font-roboto font-light mt-1 text-xs">({feature.author})</p>
          </div>
        ))}
      </div>
      <p className="font-roboto font-medium mt-4 text-xs">{title}</p>
    </div>
  );
};

// Pagination dots component
const PaginationDots: React.FC<PaginationDotsProps> = ({ total, active, onClick }) => {
  return (
    <div className="flex justify-center md:justify-start mt-4 gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <button 
          key={index}
          onClick={() => onClick(index)}
          className={`h-1 w-2 rounded-medium w-6 transition-all cursor-pointer ${
            active === index ? 'bg-hover' : 'bg-gray-500'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

// Main Features component
const Features: React.FC = () => {

  // State to track the active card
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  return (
    <div className="w-full mt-4">
      {/* Show the active card */}
      <FeatureCard 
        features={featureCards[activeCardIndex].features} 
        title={featureCards[activeCardIndex].title} 
      />
      
      {/* Pagination dots */}
      <PaginationDots 
        total={featureCards.length} 
        active={activeCardIndex} 
        onClick={setActiveCardIndex} 
      />
    </div>
  );
};

export default Features;