import React from "react";
import { render } from "@testing-library/react";

import { Hello } from "./Hello";

describe("Hello", () => {
    test("renders Hello component", () => {
        render(<Hello />);
    });
});
