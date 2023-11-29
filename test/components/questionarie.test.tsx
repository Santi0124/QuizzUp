import { render, screen, fireEvent } from "@testing-library/react"
import React from "react"
import Questionnarie from "../../src/components/Questionnarie/Questionnarie"

describe('Questionnarie', () => {
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
    return screen.getByRole('heading', { name: "Quizz"})
  }
}
