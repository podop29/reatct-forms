import React from "react"
import {getByTestId, render} from "@testing-library/react"
import BoxList from "../BoxList"


it("renders witout crashing", ()=>{
    render(<BoxList/>)
})

it("matches snapshot", ()=>{
    const {asFragment} = render(<BoxList/>);
    expect(asFragment()).toMatchSnapshot()
})

