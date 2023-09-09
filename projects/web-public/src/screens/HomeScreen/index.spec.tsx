import { customRender } from "@alura/test-commons/react-text-library";
import HomeScreen from "./index";

const render = customRender((props) => {
  return <section>{props.children}</section>;
});

describe("<HomeScreen/>", () => {
  it("renders the page", () => {
    const { container } = render(<HomeScreen></HomeScreen>);
    expect(container).toMatchSnapshot();
  });
});
