import { describe, it, expect } from "vitest";

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import BlogPage from "../pages/BlogPage";


describe("example", () => {
  it("should pass", () => {
    expect(true).toBe(true);
  });
});

describe("BlogPage", () => {
  it("renders hero heading", () => {
    render(<BlogPage />);
    expect(screen.getByText(/Study Abroad Blog/i)).toBeInTheDocument();
  });
});
