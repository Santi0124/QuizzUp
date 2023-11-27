import { render, screen, fireEvent } from "@testing-library/react"
import React from "react"
import { BrowserRouter } from "react-router-dom"
import ButtonHome from "../../src/components/ButtonHome/ButtonHome"
import Questionnarie from "../../src/components/Questionnarie/Questionnarie"


describe("Starting the quizz", () => {
  beforeEach(() => {
    SUT.render()
  })

  it("renders the start button", () => {
    const startButton = SUT.startButton()
    expect(startButton).toBeInTheDocument()
  })

  it("navigates to the questionnaire when the button is clicked", () => {
    const startButton = SUT.startButton()
    fireEvent.click(startButton)
    const questionnaireTitle = SUT.getQuestionnaireTitle()
    expect(questionnaireTitle).toBeInTheDocument()
  })
})

class SUT {
  static render() {
    return render(
      <BrowserRouter>
        <ButtonHome />
        <Questionnarie />
      </BrowserRouter>
    )
  }
  static startButton() {
    return screen.getByRole("button", { name: "Start Test" })
  }
  static getQuestionnaireTitle() {
    return screen.getByText(/questionnarie/i);
  }
}