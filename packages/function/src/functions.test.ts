import { scrollView, toTitleCase, formatDate } from "./functions";

describe("scrollView function", () => {
  test("scrolls to the correct element", () => {
    // Mock document.querySelector
    document.querySelector = jest.fn().mockReturnValue({
      getBoundingClientRect: jest.fn().mockReturnValue({ top: 100 }),
    });

    const mockScrollTo = jest.fn();
    window.scrollTo = mockScrollTo;

    scrollView(50, "myElementId");

    expect(document.querySelector).toHaveBeenCalledWith('[id="myElementId"]');
    expect(mockScrollTo).toHaveBeenCalledWith({ top: 150, behavior: "smooth" });
  });

  test("logs error when element not found", () => {
    console.error = jest.fn();

    document.querySelector = jest.fn().mockReturnValue(null);

    scrollView(50, "nonExistentElement");

    expect(console.error).toHaveBeenCalledWith(
      "Element with id nonExistentElement not found."
    );
  });
});

describe("toTitleCase function", () => {
  test("converts string to title case", () => {
    const result = toTitleCase("hello world");
    expect(result).toBe("Hello World");
  });
});

describe("formatDate function", () => {
  test("formats date string correctly", () => {
    const result = formatDate("2024-03-30 11:13:51", "en-GB");
    expect(result).toBe("30 March 2024 at 11:13");
  });
});
