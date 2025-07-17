import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function isInParentOrAncestor(
  target: Node | null | undefined,
  ancestor: Node | null | undefined
): boolean {
  if (!target || !ancestor) {
    return false;
  }

  let current: Node | null = target;
  while (current) {
    if (current === ancestor) {
      return true;
    }
    current = current.parentNode;
  }
  return false;
}