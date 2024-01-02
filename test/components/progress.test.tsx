
import { screen } from "@testing-library/react"
import React from "react"
import Progress from "../../src/components/Progress/Progress"


describe('Progress', () => {
  it("Element", () => {
    SUT.render()
    const progress = SUT.progress()
    expect(progress).toBeInTheDocument()
  })
})

class SUT {
  static render() {
    <Progress
      progressQuizz={0}
      questions={[]} />
  }
  static progress() {
    return screen.getByRole('heading', { name: '1 / 10'  })
  }
}