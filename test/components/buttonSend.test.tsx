import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Questionnarie from "../../src/components/Questionnarie/Questionnarie"

describe('Question', () => {
  it("When u have a clicked the correct answer is send", () => {
    SUT.render()
    const send = SUT.send()
    expect(send).toBeInTheDocument()
  })
  it('The button is disabled where the question is empty', () => {
    SUT.render()
    const send = SUT.send()
    expect(send).toBeDisabled()
  })
  it('The button will be enabled when a question is answered', () => {
    SUT.render()
    const send = SUT.send()
    fireEvent.click(SUT.checkbox())
    expect(send).toBeEnabled()
  })
})


class SUT {
  static render() {
    return render(<Questionnarie />)
  }
  static send() {
    return screen.getByRole("button", { name: "SEND" })
  }
  static checkbox(){
    return screen.getByRole('checkbox',{name: "checkbox" })
  }
}