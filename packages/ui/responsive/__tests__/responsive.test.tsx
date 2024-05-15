import React from "react";
import { render } from "@testing-library/react";
import { useDeviceType, usePixelConverter } from "@ibrahimstudio/hooks";
import ISResponsive from "../src/responsive";
import "@testing-library/jest-dom";
// test
jest.mock("react", () => ({
  ...jest.requireActual("react"),
  useState: jest.fn(),
  useEffect: jest.fn(),
}));

describe("useDeviceType", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return "desktop" when window width is greater than 1120px', () => {
    (window as any).innerWidth = 1200;
    (React.useState as jest.Mock).mockReturnValueOnce(["desktop", jest.fn()]);

    const deviceType = useDeviceType();
    expect(deviceType).toBe("desktop");
  });

  it('should return "tablet" when window width is less than or equal to 1120px', () => {
    (window as any).innerWidth = 800;
    (React.useState as jest.Mock).mockReturnValueOnce(["tablet", jest.fn()]);

    const deviceType = useDeviceType();
    expect(deviceType).toBe("tablet");
  });

  it('should return "mobile" when window width is less than or equal to 700px', () => {
    (window as any).innerWidth = 500;
    (React.useState as jest.Mock).mockReturnValueOnce(["mobile", jest.fn()]);

    const deviceType = useDeviceType();
    expect(deviceType).toBe("mobile");
  });
});

describe("usePixelConverter", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should convert pixel value based on device type", () => {
    expect(usePixelConverter("100px", "mobile")).toBe("80px");
    expect(usePixelConverter("100px", "tablet")).toBe("90px");
    expect(usePixelConverter("100px", "desktop")).toBe("100px");
  });

  it("should return the original value if not in pixel format", () => {
    expect(usePixelConverter("100%", "mobile")).toBe("100%");
  });
});

describe("ISResponsive", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should render children with desktop device", () => {
    (window as any).innerWidth = 1200;
    (React.useState as jest.Mock).mockReturnValueOnce(["desktop", jest.fn()]);

    const { getByTestId } = render(
      <ISResponsive>
        <div data-testid="test" style={{ width: "100px", height: "100px" }} />
      </ISResponsive>
    );

    const testElement = getByTestId("test");
    expect(testElement).toHaveStyle("width: 100px");
    expect(testElement).toHaveStyle("height: 100px");
  });

  it("should render children with tablet device", () => {
    (window as any).innerWidth = 800;
    (React.useState as jest.Mock).mockReturnValueOnce(["tablet", jest.fn()]);

    const { getByTestId } = render(
      <ISResponsive>
        <div data-testid="test" style={{ width: "100px", height: "100px" }} />
      </ISResponsive>
    );

    const testElement = getByTestId("test");
    expect(testElement).toHaveStyle("width: 90px");
    expect(testElement).toHaveStyle("height: 90px");
  });

  it("should render children with mobile device", () => {
    (window as any).innerWidth = 500;
    (React.useState as jest.Mock).mockReturnValueOnce(["mobile", jest.fn()]);

    const { getByTestId } = render(
      <ISResponsive>
        <div data-testid="test" style={{ width: "100px", height: "100px" }} />
      </ISResponsive>
    );

    const testElement = getByTestId("test");
    expect(testElement).toHaveStyle("width: 80px");
    expect(testElement).toHaveStyle("height: 80px");
  });
});
