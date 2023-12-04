import { render, screen, fireEvent } from "@testing-library/react"
import React from "react"
import Questionnarie from "../../src/components/Questionnarie/Questionnarie"
import Start from "../../src/components/Start/Start"
import { vi } from "vitest"

describe("Starting the quizz", () => {

  const mockNavigate = vi.fn()
  vi.mock('@reach/router', () => ({
    navigate: mockNavigate,
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
    expect(mockNavigate).toHaveBeenCalledTimes(1)
    expect(mockNavigate).toHaveBeenNCalledWith('/questionnarie')
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