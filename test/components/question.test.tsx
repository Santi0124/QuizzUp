import {  fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import Question from "../../src/components/Question/Question"
import userEvent from "@testing-library/user-event"


describe('Question', () => {
  // it('Has a prompt', () => {
  //   SUT.render()
  //   const propmt = SUT.propmt()
  //   expect(propmt).toBeInTheDocument()
  // })
  it('renders four possible answers', () => {
    SUT.render()
    const answersItems = SUT.items()
    expect(answersItems).toHaveLength(4)
  })
  it('The questions have a checkbox', () => {
    SUT.render()
    const checkboxItems = SUT.checkbox()
    expect(checkboxItems).toHaveLength(4)
  })
  // it('When you can check and answer', async  () => {
  //   SUT.render()
  //   const secondAnswer= SUT.secondAnswer()
  //   await userEvent.click(secondAnswer)
  //   expect(secondAnswer.click()).toBeChecked()
  // })
})


class SUT {
  static render() {
    return render(<Question promt={""} />)
  }
  static propmt() {
    return screen.getByRole("heading", { name: "¿Cuál es el operador lógico AND en muchos lenguajes de programación?" })
  }
  static items() {
    return screen.getAllByRole('listitem')
  }
  static checkbox() {
    return screen.getAllByRole('checkbox')
  }
  static send() {
    return screen.getByRole("button", { name: "SEND" })
  }
  static secondAnswer(){
    return screen.getByRole('checkbox', {name:'A'})
  }
}