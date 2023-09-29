import { render } from "@testing-library/react";
import CategoryTable from "../features/category/CategoryPage";



test("renders CategoryTable component", () => {
  const { queryByText } = render(<CategoryTable />);

  expect(queryByText("ID")).toBeTruthy(); 
  expect(queryByText("Name")).toBeTruthy(); 
  expect(queryByText("Is Active")).toBeTruthy(); 

});

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
