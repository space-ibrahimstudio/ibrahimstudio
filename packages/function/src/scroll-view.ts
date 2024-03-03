export const scrollView = (offset: number, id: string): void => {
  const element = document.querySelector(`[id="${id}"]`) as HTMLElement | null;
  if (element) {
    const yOffset: number = offset;
    const y: number =
      element.getBoundingClientRect().top + window.scrollY + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  } else {
    console.error(`Element with id ${id} not found.`);
  }
};
