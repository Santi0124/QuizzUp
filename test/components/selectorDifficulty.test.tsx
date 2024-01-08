import { fireEvent, render, screen } from "@testing-library/react"
import SelectorDifficulty from "../../src/components/Start/Selectors/SelectorDifficulty"
import React from "react"


describe("Selector", () => {

  beforeEach(() => {
    render(<SelectorDifficulty />)
  })
  
  it("Render selector options difficulty", async () => {
    SUT.render()
    const options = SUT.buttonOptions()
    expect(options).toBeInTheDocument()
  })
  it('Shows a list when u clicked', () => {
    SUT.render()
    const options = SUT.buttonOptions()
    fireEvent.click(options)
    expect(SUT.getListItems()).toBeDefined()
  })
})

class SUT {
  static render() {
    render(<SelectorDifficulty />)
  }

  static buttonOptions() {
    return screen.getByRole("button", { name: "Selected Difficulty :" })
  }
  static getListItems() {
    return screen.getAllByRole("listitem", { name: "" })
  }
}