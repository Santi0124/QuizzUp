import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Send from "../../src/components/ButtonSend/ButtonSend"
import { SendProps } from "../../src/components/ButtonSend/ButtonSend"
import {vi} from "vitest"


describe('Question', () => {
  it("When u have a clicked the correct answer is send", () => {
    SUT.render()
    const send = SUT.send()
    expect(send).toBeInTheDocument()
  })
  it('The button is disabled where the question is empty', () => {
    SUT.render({disabled:true})
    const send = SUT.send()
    expect(send).toBeDisabled()
  })
  it('when click in send call a handle', () => {
    SUT.render({
      handleClick: SUT.mockOnClick,
      disabled: false
    })
    const sendClick = SUT.send()
    fireEvent.click(sendClick)
    expect(SUT.mockOnClick).toHaveBeenCalledTimes(1)
  })
})


class SUT {

  static mockOnClick = vi.fn()

  static render(props: SendProps = {}) {
    return render(
      <Send disabled={props.disabled} handleClick={props.handleClick} />
    )
  }
  static send() {
    return screen.getByRole("button", { name: "SEND" })
  }
  static checkbox() {
    return screen.getByRole('checkbox', { name: "A" })
  }
}