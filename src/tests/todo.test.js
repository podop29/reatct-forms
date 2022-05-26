import React from "react"
import {render} from "@testing-library/react"
import Todo from "../todo"

it("renders witout crashing", ()=>{
    render(<Todo/>)
})


//snapshot test
it("matches snapshot", ()=>{
    const {asFragment} = render(<Todo/>);
    expect(asFragment()).toMatchSnapshot()
})