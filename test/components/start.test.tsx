import { render, screen, fireEvent } from "@testing-library/react"
import React from "react"
import Start from "../../src/components/Start/Start"
import { vi } from "vitest"
import { BrowserRouter, MemoryRouter } from "react-router-dom"


const spy = vi.fn()

vi.mock('react-router-dom', () => ({
  useNavigate: () => spy
}))

describe("Starting the quizz", () => {

  it.skip("renders the start button", () => {
    SUT.render()
    const startButton = SUT.startButton()
    expect(startButton).toBeInTheDocument()
  })

  it.skip("navigates to the questionnaire when the button is clicked",async() => {
    SUT.render()
    const startButton = await SUT.startButton()
    fireEvent.click(startButton)
    expect(spy).toHaveBeenCalledTimes(1)
  })
})

class SUT {
  static render() {
    return render(
      <MemoryRouter>
        <Start />
      </MemoryRouter>
    )
  }
  static startButton() {
    return screen.findByRole("button", { name: "Start Test" })
  }
  static getQuestionnaireTitle() {
    return screen.getByText("Quizz")
  }
}