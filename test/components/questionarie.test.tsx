import { render, screen } from "@testing-library/react"
import React from "react"
import Questionarie from "../../src/components/Questionarie/Questionarie"
import { vi } from "vitest"

describe('Questionarie', () => {
  it('Has title', () => {
    SUT.render()
    const title = SUT.title()
    expect(title).toBeInTheDocument()
  })
  it('renders dates questionarie', async () => {
    const mockResponse = {
      question: "",
      amount: "10",
      category: "23",
      difficulty: "hard",
      type: "multiple",
    }
    vi.spyOn(window, "fetch").mockImplementationOnce(() => {
      return Promise.resolve({
        json: () => Promise.resolve(mockResponse),
      } as Response)
    })
    SUT.render()
    const title = SUT.title()
    expect(title).toBeInTheDocument()
    
  })
})


class SUT {
  static render() {
    return render(
      <Questionarie
        selected={0}
        prompt={""}
        title={""}
        handleClick={() => { }}
        disabled={false} />)
  }
  static title() {
    return screen.getByRole('heading', { name: "Quizz" })
  }
}
