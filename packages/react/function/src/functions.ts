export function scrollView(offset: number, id: string): void {
  const element = document.querySelector(`[id="${id}"]`) as HTMLElement | null;
  if (element) {
    const yOffset: number = offset;
    const y: number =
      element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  } else {
    console.error(`Element with id ${id} not found.`);
  }
}

export function toTitleCase(str: string): string {
  return str.replace(/\w\S*/g, function (txt: string): string {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

export function formatDate(
  dateString: string,
  locale: string = "en-US"
): string {
  const date = new Date(dateString);
  const options: Intl.DateTimeFormatOptions = {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
  };
  return date.toLocaleDateString(locale, options);
}
