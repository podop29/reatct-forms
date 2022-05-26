import React from "react"
import {render} from "@testing-library/react"
import App from "../App"

it("renders witout crashing", ()=>{
    render(<App/>)
})

it("matches snapshot", ()=>{
    const {asFragment} = render(<App/>);
    expect(asFragment()).toMatchSnapshot()
})