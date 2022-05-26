import React from "react"
import {render} from "@testing-library/react"
import TodoList from "../TodoList"

it("renders witout crashing", ()=>{
    render(<TodoList/>)
})

it("matches snapshot", ()=>{
    const {asFragment} = render(<TodoList/>);
    expect(asFragment()).toMatchSnapshot()
})