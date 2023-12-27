import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const primaryLinks = [
  {
    icon: "/assets/icons/db.svg",
    label: "My Projects",
    route: "/",
  },
  {
    icon: "/assets/icons/sample.svg",
    label: "Sample Projects",
    route: "/sampleprojects",
  },
];
export const secondaryLinks = [
  {
    icon: "/assets/icons/apps.svg",
    label: "Apps",
    route: "/apps",
  },
  {
    icon: "/assets/icons/video.svg",
    label: "Intro to Neclo",
    route: "/intro",
  },
];

export const tertiaryLinks = [
  {
    icon: "/assets/icons/help.svg",
    label: "Apps",
    route: "/apps",
  },
  {
    icon: "/assets/icons/feedback.svg",
    label: "Feedback",
    route: "/feedback",
  },
];
