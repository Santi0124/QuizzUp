
import { screen } from "@testing-library/react"
import React from "react"
import Progress from "../../src/components/Progress/Progress"


describe('Progress', () => {
  it("Renders progress component", () => {
    SUT.render()
    const progress = SUT.progress()
    expect(progress).toBeTruthy()
  })
  it('When u passed the question progress will increase + 1', () => {
  })
})

class SUT {
  static render() {
    <Progress
      progressQuizz={0}
      questions={[]} />
  }
  static progress() {
    return screen.findByRole('1 / 10')
  }
}