import { render, screen, fireEvent } from "@testing-library/react"
import React from "react"
import Start from "../../src/components/Start/Start"
import { vi } from "vitest"
import Questionarie from "../../src/components/Questionarie/Questionarie"

describe("Starting the quizz", () => {

  const spy = vi.fn()
  vi.mock('react-router-dom', () => ({
    useNavigate: () => spy
  }))

  it("renders the start button", () => {
    SUT.render()
    const startButton = SUT.startButton()
    expect(startButton).toBeInTheDocument()
  })

  it("navigates to the questionnaire when the button is clicked", () => {
    SUT.render()
    const startButton = SUT.startButton()
    fireEvent.click(startButton)
    expect(spy).toHaveBeenCalled()
    expect(spy).toHaveBeenNCalledWith('/questionarie')
  })
})

class SUT {
  static render() {
    return render(
      <Start />
    )
  }
  static startButton() {
    return screen.getByRole("button", { name: "Start Test" })
  }
  static getQuestionnaireTitle() {
    return screen.getByText("Quizz")
  }
}