import { scrollView, toTitleCase, formatDate } from "../src/functions";
import "@testing-library/jest-dom";

describe("scrollView", () => {
  // Mocking document and window for testing
  let mockDocumentQuerySelector: jest.Mock;
  let mockWindowScrollTo: jest.Mock;

  beforeAll(() => {
    mockDocumentQuerySelector = jest.fn();
    mockWindowScrollTo = jest.fn();

    Object.defineProperty(global, "document", {
      value: {
        querySelector: mockDocumentQuerySelector,
      },
    });

    Object.defineProperty(global, "window", {
      value: {
        scrollY: 100,
        scrollTo: mockWindowScrollTo,
      },
    });
  });

  beforeEach(() => {
    mockDocumentQuerySelector.mockReset();
    mockWindowScrollTo.mockReset();
  });

  it("should scroll to the specified element", () => {
    const mockElement = {
      getBoundingClientRect: () => ({ top: 50 }),
    };
    mockDocumentQuerySelector.mockReturnValue(mockElement);

    scrollView(50, "testId");

    expect(mockDocumentQuerySelector).toHaveBeenCalledWith('[id="testId"]');
    expect(mockWindowScrollTo).toHaveBeenCalledWith({
      top: 200,
      behavior: "smooth",
    });
  });

  it("should log an error if element is not found", () => {
    mockDocumentQuerySelector.mockReturnValue(null);

    const consoleErrorSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => {});

    scrollView(50, "nonexistentId");

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      "Element with id nonexistentId not found."
    );
    expect(mockWindowScrollTo).not.toHaveBeenCalled();
  });
});

describe("toTitleCase", () => {
  it("should convert string to title case", () => {
    expect(toTitleCase("hello world")).toBe("Hello World");
    expect(toTitleCase("THIS IS A TEST")).toBe("This Is A Test");
    expect(toTitleCase("another test")).toBe("Another Test");
  });
});

describe("formatDate", () => {
  it("should format date in the specified locale", () => {
    // Mocking Date object to have consistent results in tests
    const mockDate = new Date("2024-04-04 03:38:47");
    jest.spyOn(global, "Date").mockImplementation(() => mockDate);

    expect(formatDate("2024-04-04 03:38:47", "en-US")).toBe(
      "April 4, 2024 at 3:38 AM"
    );
    expect(formatDate("2024-04-04 03:38:47", "fr-FR")).toBe(
      "4 avril 2024 à 03:38"
    );
  });
});
