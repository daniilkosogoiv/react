import { render, screen } from "@testing-library/react";
import { Message } from "../Message";

describe("Message", () => {
    it("renders passed text", () => {
      render(<Message text="Text" author="author"  />);
      const text = screen.getByText("Text");
      expect(text).toBeDefined();
      
    });
    it("renders passed author", () => {
        render(<Message text="Text" author="author"  />);
        const author = screen.getByText("author");
        expect(author).toBeDefined();
    });

    it("matches snapshot", () => {
    const component = render(
        <Message text="Text" author="author" theme="dark" />
    );
    
    expect(component).toMatchSnapshot();
    });
    
  });