"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { User } from "lucide-react";
import { cn } from "@/lib/utils";

export interface CustomImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  fill?: boolean;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  blurDataURL?: string;
  objectFit?: "contain" | "cover" | "fill" | "none" | "scale-down";
  fallbackSrc?: string;
}

/**
 * Reusable Image component with error handling and fallbacks
 * Wraps Next.js Image component with additional features
 */
export const CustomImage: React.FC<CustomImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
  fill = false,
  priority = false,
  placeholder = "empty",
  blurDataURL,
  objectFit = "cover",
  fallbackSrc = "/images/placeholder.png",
}) => {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleError = () => {
    if (!hasError && fallbackSrc) {
      setHasError(true);
      setImgSrc(fallbackSrc);
    }
  };

  const handleLoad = () => {
    setIsLoading(false);
  };

  if (fill) {
    return (
      <div className={cn("relative w-full h-full overflow-hidden bg-secondary-800", className)}>
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary-800 to-secondary-900 z-10">
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <User className="h-12 w-12 text-secondary-600" />
            </motion.div>
          </div>
        )}
        {hasError ? (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-secondary-800 to-secondary-900">
            <User className="h-12 w-12 text-secondary-600" />
          </div>
        ) : (
          <Image
            src={imgSrc}
            alt={alt}
            fill
            className={cn(
              "transition-opacity duration-500",
              isLoading ? "opacity-0" : "opacity-100",
              objectFit === "cover" && "object-cover",
              objectFit === "contain" && "object-contain"
            )}
            priority={priority}
            placeholder={placeholder}
            blurDataURL={blurDataURL}
            onError={handleError}
            onLoad={handleLoad}
            unoptimized={true}
            sizes="(max-width: 768px) 256px, (max-width: 1024px) 288px, 320px"
          />
        )}
      </div>
    );
  }

  return (
    <div className="relative">
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-secondary-800 rounded">
          <User className="h-8 w-8 text-secondary-600 animate-pulse" />
        </div>
      )}
      <Image
        src={imgSrc}
        alt={alt}
        width={width || 400}
        height={height || 400}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
        priority={priority}
        placeholder={placeholder}
        blurDataURL={blurDataURL}
        onError={handleError}
        onLoad={handleLoad}
        unoptimized={src.startsWith("/images/profile")}
      />
    </div>
  );
};
