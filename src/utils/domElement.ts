export function toggleClass(element: HTMLElement, className: string): void {
  element.classList.toggle(className);
}

export function elementHasClass(element: HTMLElement, className: string): boolean {
  return element.classList.contains(className);
}

export function rootInDarkMode(): boolean {
  return document.documentElement.getAttribute("data-theme") === "dark";
}