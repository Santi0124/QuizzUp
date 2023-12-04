import { render, screen, fireEvent } from "@testing-library/react"
import React from "react"
import Questionnarie from "../../src/components/Questionnarie/Questionnarie"

describe('Questionnarie', () => {
  it('Has a prompt', () => {
    SUT.render()
    const propmt = SUT.propmt()
    expect(propmt).toBeInTheDocument()
  })
  it('Has title', () => {
    SUT.render()
    const title = SUT.title()
    expect(title).toBeInTheDocument()
  })
})

class SUT {
  static render() {
    return render(<Questionnarie />)
  }
  static title() {
    return screen.getByRole('heading', { name: "Quizz" })
  }
  static propmt() {
    return screen.getByRole('heading', { name: "¿Cuál es el operador lógico AND en muchos lenguajes de programación?" })
  }
}
