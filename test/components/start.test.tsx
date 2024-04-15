import { render, screen } from "@testing-library/react"
import React from "react"
import Start from "../../src/components/Start/Start"
import { vi } from "vitest"
import { BrowserRouter, MemoryRouter } from "react-router-dom"
import {userEvent} from "@testing-library/user-event"

const spy = vi.fn()

vi.mock('react-router-dom', () => {
  const actual = vi.importActual('react-router-dom')
  return {
    ...actual,
    useNavigate:() => spy
  }
})

describe("Starting the quizz", () => {

  it("renders the start button", () => {
    SUT.render()
    const startButton = SUT.startButton()
    expect(startButton).toBeInTheDocument()
  })

  it.skip("navigates to the questionnaire when the button is clicked", async () => {
    SUT.render()
    const startButton = await SUT.startButton()
    userEvent.click(startButton)
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
    return screen.getByRole("button", { name: "Start Test" })
  }
  static getQuestionnaireTitle() {
    return screen.getByText("Quizz")
  }
}