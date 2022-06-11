import React from "react";
import {mount} from "enzyme";
import LostPassword from "../../views/screens/Home/lostPassword";

describe("<LostPassword/>", () => {
    /** Variables */
    let component: any,
        mockedFunction = jest.fn();

    beforeEach(() => component = mount(
        <LostPassword
            open={true}
            onClose={() => mockedFunction()}
        />
    ));

    /**
     * This unit test validates that the function is executed only once.
     */
   it("Should call the function only 1 time.", async() => {
       let button = await component.find(".cancel-button");
       console.log(button.at(0).html());
       button.at(1).simulate("click");
       expect(mockedFunction.mock.calls.length).toBe(1);
   });
});