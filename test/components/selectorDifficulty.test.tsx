import { fireEvent, render, screen } from "@testing-library/react"
import SelectorDifficulty from "../../src/components/Start/Selectors/SelectorDifficulty"
import React from "react"


describe("Selector difficulty", () => {

  it("Render selector options difficulty", async () => {
    SUT.render()
    const options = SUT.buttonOptions()
    expect(options).toBeInTheDocument()
  })
  it.skip("Shows a list difficult when is clicked", () => {
    SUT.render()
    const button = SUT.buttonOptions()
    fireEvent.click(button)
    expect(screen.getByRole('listitem')).toBeInTheDocument()
  })
})

class SUT {
  static render() {
    render(<SelectorDifficulty />)
  }
  static buttonOptions() {
    return screen.getByRole("button", { name: "Selected Difficulty" })
  }
}