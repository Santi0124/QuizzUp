import { render, screen } from "@testing-library/react"
import React from "react"
import Questionnarie from "../../src/components/Questionnarie/Questionnarie"

describe('Question', () => {
  it('Container Title', () => {
    SUT.render()
    const QuestionnarieOne = SUT.questionnarieOne()
    expect(QuestionnarieOne).toBeInTheDocument()
  })
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
})


class SUT {
  static render() {
    return render(<Questionnarie />)
  }
  static questionnarieOne() {
    return screen.getByRole("heading", { name: "QuestionnarieOne" })
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
}