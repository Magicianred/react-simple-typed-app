import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { act } from "react-dom/test-utils";
import { create } from 'react-test-renderer';

import Contact from "./../../../Components/Pages/Contact";

let container: Element;
beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    unmountComponentAtNode(container);
    container.remove();
});

describe("Contact Component", () => {

    describe("Snapshots", () => {
    
        it("Matches the snapshot (with default title)", () => {
            const instance = create(<Contact />);
            expect(instance.toJSON()).toMatchSnapshot();
        });
    
    });

    describe("Check content elements", () => {
        it("Render Component", () => {
            act(() => {
                render(<Contact />, container);
            });
            expect(container.querySelector("h2").textContent).toBe("Contact page");
            expect(container.querySelector("p").textContent).toBe("This is the contact page");
        });
    });
});