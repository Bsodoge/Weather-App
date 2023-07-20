import React from 'react';
import { render } from "@testing-library/react";
import WeatherContainer from "./WeatherContainer";


describe(WeatherContainer, () => {
    it("Title displays the correct initial value",() => {
        const {getByTestId} = render(<WeatherContainer/>);
        const locationValue = getByTestId("location").textContent;
        expect(locationValue).toEqual("London")
    })
})      