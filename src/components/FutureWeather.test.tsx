import React from 'react';
import { getByTestId, render } from "@testing-library/react";
import FutureWeather from './FutureWeather';


describe(FutureWeather, () => {
    it("Correct day is displayed",() => {
        const {getByTestId} = render(<FutureWeather date='2023-07-24' tempMax={40} tempMin={34} icon='clear-day' conditions='Clear'/>);
        const dayValue = getByTestId("day").textContent;
        expect(dayValue).toEqual("Monday")
    })
    it("Correct tempMax is displayed",() => {
        const {getByTestId} = render(<FutureWeather date='2023-07-24' tempMax={40} tempMin={34} icon='clear-day' conditions='Clear'/>);
        const maxValue = getByTestId("max").textContent;
        expect(maxValue).toContain("40")
    })
    it("Correct tempMin is displayed",() => {
        const {getByTestId} = render(<FutureWeather date='2023-07-24' tempMax={40} tempMin={34} icon='clear-day' conditions='Clear'/>);
        const minValue = getByTestId("min").textContent;
        expect(minValue).toContain("34")
    })
    it("Correct icon is displayed",() => {
        render(<FutureWeather date='2023-07-24' tempMax={40} tempMin={34} icon='clear-day' conditions='Clear'/>);
        const icon = document.querySelector("img") as HTMLImageElement;
        expect(icon.src).toContain("src/assets/icons/clear-day.svg")
    })
    it("Correct alt for image is displayed",() => {
        render(<FutureWeather date='2023-07-24' tempMax={40} tempMin={34} icon='clear-day' conditions='Clear'/>);
        const icon = document.querySelector("img") as HTMLImageElement;
        expect(icon.alt).toEqual("Clear")
    })
})      