import { render, RenderResult } from "@testing-library/react";
import DashboardLayout from "./DashboardLayout";

describe("<DashboardLayout/>", () => {
    let dashboardLayout: RenderResult;
    beforeEach(() => dashboardLayout = render(
        <DashboardLayout>
            <span>Hola Mundo!</span>
        </DashboardLayout>
    ));

    it("should show the text sent as children", () => {
        const { getByText } = dashboardLayout;
        expect(getByText("Hola Mundo!")).toBeInTheDocument();
    });
});