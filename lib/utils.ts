import { clsx, type ClassValue } from "clsx"
import { extendTailwindMerge } from "tailwind-merge"

const customTwMerge = extendTailwindMerge({
  classGroups: {
    boxShadow: [
      { shadow: ["none", "offset-xs", "offset-sm", "offset-md", "offset-lg"] },
    ],
  },
})
export function cn(...inputs: ClassValue[]) {
  return customTwMerge(clsx(inputs))
}
