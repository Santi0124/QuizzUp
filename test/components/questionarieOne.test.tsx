import { render, screen, fireEvent } from "@testing-library/react"
import React from "react"
import Questionnarie from "../../src/components/Questionnarie/Questionnarie"

describe('QuestionOne', () => {
  it('Question statement', () => {
    SUT.render()
    const statement = SUT.statement()
    expect(statement).toBeInTheDocument()
  })
})

class SUT {
  static render() {
    return render(<Questionnarie />)
  }
  static statement() {
    return screen.getByRole('heading', { name: "¿Cuál es el operador lógico AND en muchos lenguajes de programación?"})
  }
}
