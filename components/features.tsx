'use client'
import { useState, useRef, TouchEvent, MouseEvent } from 'react'; // Added useRef, TouchEvent, MouseEvent
import {featureCards} from "@/app/data/features"

// Define types for our component props and data
interface Feature {
  title: string;
  author: string;
}

interface FeatureCardProps {
  features: Feature[];
  title: string;
  onSwipeLeft: () => void;  // Called when user swipes left (to go to next)
  onSwipeRight: () => void; // Called when user swipes right (to go to prev)
}

interface PaginationDotsProps {
  total: number;
  active: number;
  onClick: (index: number) => void;
}

// Feature card component
const FeatureCard: React.FC<FeatureCardProps> = ({ features, title, onSwipeLeft, onSwipeRight }) => {
  const touchStartXRef = useRef<number | null>(null);
  const touchEndXRef = useRef<number | null>(null); // To store end position for calculation
  const minSwipeDistance = 50; // Minimum distance (in pixels) to be considered a swipe

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchEndXRef.current = null; // Reset endX on new touch start
    touchStartXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (touchStartXRef.current === null) return;
    touchEndXRef.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartXRef.current === null || touchEndXRef.current === null) {
      // If no move, touchEndXRef might still be null.
      // This handles taps or very short movements where touchMove might not have fired reliably.
      touchStartXRef.current = null;
      touchEndXRef.current = null;
      return;
    }

    const distance = touchStartXRef.current - touchEndXRef.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onSwipeLeft();
    } else if (isRightSwipe) {
      onSwipeRight();
    }

    // Reset refs
    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };

  // Optional: Basic mouse drag support (similar logic)
  const [isDragging, setIsDragging] = useState(false);

  const handleMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    touchEndXRef.current = null;
    touchStartXRef.current = e.clientX;
    // Prevent text selection during drag
    e.preventDefault();
  };

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!isDragging || touchStartXRef.current === null) return;
    touchEndXRef.current = e.clientX;
  };

  const handleMouseUpOrLeave = () => { // Combined MouseUp and MouseLeave
    if (!isDragging) return;
    setIsDragging(false);

    if (touchStartXRef.current === null || touchEndXRef.current === null) {
        touchStartXRef.current = null;
        touchEndXRef.current = null;
        return;
    }

    const distance = touchStartXRef.current - touchEndXRef.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      onSwipeLeft();
    } else if (isRightSwipe) {
      onSwipeRight();
    }

    touchStartXRef.current = null;
    touchEndXRef.current = null;
  };


  return (
    <div 
      className="bg-white p-4 w-full cursor-grab active:cursor-grabbing" // Added cursor styles for UX
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUpOrLeave}
      onMouseLeave={handleMouseUpOrLeave} // Handle case where mouse leaves element while pressed
    >
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

// Pagination dots component (no changes needed here)
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
  const [activeCardIndex, setActiveCardIndex] = useState<number>(0);

  const handleNextFeature = () => {
    setActiveCardIndex((prevIndex) => (prevIndex + 1) % featureCards.length);
  };

  const handlePreviousFeature = () => {
    setActiveCardIndex((prevIndex) => (prevIndex - 1 + featureCards.length) % featureCards.length);
  };

  return (
    <div className="w-full mt-4">
      {/* Show the active card */}
      <FeatureCard 
        features={featureCards[activeCardIndex].features} 
        title={featureCards[activeCardIndex].title}
        onSwipeLeft={handleNextFeature}    // Swipe left on screen shows next item
        onSwipeRight={handlePreviousFeature} // Swipe right on screen shows previous item
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