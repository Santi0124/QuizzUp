import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import React from "react"
import Question from "../../src/components/Question/Question"


describe('Question', () => {
  it('renders four possible answers', () => {
    SUT.render({
      question: "",
      correct_answer: "",
      incorrect_answers: ["", "", ""]
    })
    const answersItems = SUT.items()
    expect(answersItems).toHaveLength(4)
  })
  it('renders prompt', () => {
    SUT.render({
      question: "",
      correct_answer: "",
      incorrect_answers: ["", "", ""]
    })
    const prompt = SUT.propmt()
    expect(prompt).toHaveTextContent('')
  })
  it('The questions have a checkbox', () => {
    SUT.render({
      question: "",
      correct_answer: "",
      incorrect_answers: ["", "", ""]
    })
    const checkboxItems = SUT.checkbox()
    expect(checkboxItems).toHaveLength(4)
  })
  it.skip('When you can check and answer', () => {
     SUT.render({
      question: "",
      correct_answer: "",
      incorrect_answers: ["", "", ""]
    })
    const secondAnswer = SUT.secondAnswer()
    expect(secondAnswer).not.toBeChecked()
    fireEvent.click(secondAnswer)
    expect(secondAnswer).toBeChecked()
  })
})

class SUT {
  static render(data: { question: string; correct_answer: string; incorrect_answers: string[] | string[] }) {
    return render(
      <Question
        handleClick={() => { }}
        data={data}
      />)
  }
  static propmt() {
    return screen.getByRole("heading")
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
  static secondAnswer() {
    return screen.getByRole('checkbox', { name: 'A' })
  }
}