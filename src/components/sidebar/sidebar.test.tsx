import { render, screen } from "@testing-library/react";
import { Sidebar } from "./Sidebar";
import { useLocation } from "react-router-dom";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useLocation: jest.fn()
  }));
  
  const mockUseLocation = useLocation as jest.MockedFunction<typeof useLocation>;

describe("Sidebar", () => {

  it("should render sidebar component", () => {

    mockUseLocation.mockReturnValue({
        pathname: "/dashboard"
    } as any)
    
    render(<Sidebar />);
    expect(screen.getByText("GloriousFarm")).toBeInTheDocument()
  });
});
