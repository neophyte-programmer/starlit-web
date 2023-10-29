import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { v4 as uuid } from 'uuid'
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getTitleFromPath(path: string): string {
  const pathArray = path.split("/")
  const title = pathArray[pathArray.length - 1].toLowerCase()

  if (title === "admin" || title === "executive") {
    return "dashboard"
  }

  if (pathArray[pathArray.length - 2] === "edit" && pathArray[pathArray.length - 3] === "projects") {
    return "Edit Project"
  }
  if (pathArray[pathArray.length - 2] === "view" && pathArray[pathArray.length - 3] === "projects") {
    return "View Project"
  }
  
  return title
}

export function convertDate(isoDate: string | Date) {
  const date = new Date(isoDate);
  
  // Define arrays for month names and suffixes for days
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const daySuffixes = ["st", "nd", "rd", "th"];
  
  // Get day, month, year, hours, and minutes
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  
  // Calculate the day suffix based on the day
  let daySuffix = "th";
  if (day >= 1 && day <= 3) {
    daySuffix = daySuffixes[day - 1];
  }
  
  // Convert hours to 12-hour format and determine AM/PM
  const ampm = hours >= 12 ? "pm" : "am";
  const formattedHours = hours % 12 === 0 ? 12 : hours % 12;
  
  // Format the date string
  const formattedDate = `${day}${daySuffix} ${months[month]} ${year}, ${formattedHours}:${(minutes < 10 ? "0" : "")}${minutes}${ampm}`;
  
  return formattedDate;
}

export const getRandomID = (length?: number) => {
  if(length) return uuid().slice(0, length)
  return uuid().slice(0, 8)
}
