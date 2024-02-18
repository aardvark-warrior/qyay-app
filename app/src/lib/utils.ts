import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime); // Load dayjs plugin

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format timestamp to relative time if within than 24 hours from now, otherwise
// format to "ddd, MMM D, YYYY h:mm A"
// For example "in 2 hours" or "Mon, Jul 26, 2021 9:46 PM"
export function formatTimestamp(timestamp: string) {
  const formattedTimestamp =
    dayjs().diff(dayjs(timestamp), "hour") > -24  
      ? dayjs(timestamp).fromNow()
      : dayjs(timestamp).format("ddd, MMM D, YYYY h:mm A");
  return formattedTimestamp;
}

export function combineDateTime(date: string, time: string) {
  const dateTimeString = dayjs(`${date}T${time}`).toISOString();
  return dateTimeString;
}
