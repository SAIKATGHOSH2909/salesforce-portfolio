import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Utility function to merge Tailwind CSS classes
 * Combines clsx and tailwind-merge for optimal class handling
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format date range for experience display
 */
export function formatDateRange(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : null;
  
  const startFormatted = start.toLocaleDateString("en-US", { 
    month: "short", 
    year: "numeric" 
  });
  
  if (!end) {
    return `${startFormatted} - Present`;
  }
  
  const endFormatted = end.toLocaleDateString("en-US", { 
    month: "short", 
    year: "numeric" 
  });
  
  return `${startFormatted} - ${endFormatted}`;
}

/**
 * Calculate duration in years and months
 */
export function calculateDuration(startDate: string, endDate?: string): string {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : new Date();
  
  const years = end.getFullYear() - start.getFullYear();
  const months = end.getMonth() - start.getMonth();
  
  const totalMonths = years * 12 + months;
  const finalYears = Math.floor(totalMonths / 12);
  const finalMonths = totalMonths % 12;
  
  if (finalYears === 0) {
    return `${finalMonths} ${finalMonths === 1 ? "month" : "months"}`;
  }
  
  if (finalMonths === 0) {
    return `${finalYears} ${finalYears === 1 ? "year" : "years"}`;
  }
  
  return `${finalYears} ${finalYears === 1 ? "year" : "years"} ${finalMonths} ${finalMonths === 1 ? "month" : "months"}`;
}
