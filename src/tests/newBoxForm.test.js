import React from "react"
import {render} from "@testing-library/react"
import NewBoxFrom from "../newBoxForm"

it("renders witout crashing", ()=>{
    render(<NewBoxFrom/>)
})

it("matches snapshot", ()=>{
    const {asFragment} = render(<NewBoxFrom/>);
    expect(asFragment()).toMatchSnapshot()
})