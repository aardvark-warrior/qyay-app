import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

dayjs.extend(relativeTime); // Load dayjs plugin

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Format timestamp to relative time if less than 48 hours ago, otherwise
// format to "ddd, MMM D, YYYY h:mm A"
// For example "2 hours ago" or "Mon, Jul 26, 2021 9:46 PM"
export function formatTimestamp(timestamp: string) {
  const formattedTimestamp =
    dayjs().diff(dayjs(timestamp), "hour") <= 48
      ? dayjs(timestamp).fromNow()
      : dayjs(timestamp).format("ddd, MMM D, YYYY h:mm A");
  return formattedTimestamp;
}
