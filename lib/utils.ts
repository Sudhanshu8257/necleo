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
    width: 24,
    height: 24,
  },
  {
    icon: "/assets/icons/sample.svg",
    label: "Sample Projects",
    route: "/sampleprojects",
    width: 20,
    height: 20,
  },
];
export const secondaryLinks = [
  {
    icon: "/assets/icons/apps.svg",
    label: "Apps",
    route: "/apps",
    width: 24,
    height: 24,
  },
  {
    icon: "/assets/icons/video.svg",
    label: "Intro to Neclo",
    route: "/intro",
    width: 24,
    height: 24,
  },
];

export const tertiaryLinks = [
  {
    icon: "/assets/icons/help.svg",
    label: "Apps",
    route: "/apps",
    width: 24,
    height: 24,
  },
  {
    icon: "/assets/icons/feedback.svg",
    label: "Feedback",
    route: "/feedback",
    width: 24,
    height: 24,
  },
];
