import React from "react"
import Table from "../../src/components/TableResults/TableResults"
import { render, screen } from "@testing-library/react"


describe('Table', () => {
  it('Render table', () => {
    SUT.render()
    const result = SUT.result()
    expect(result).toBeInTheDocument()
  })
})


class SUT {
  static render() {
    return render(<Table newSolution={[]} />)
  }
  static result() {
    return screen.getByRole('table')
  }
}