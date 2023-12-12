const apiUrl = "https://opentdb.com/api.php"

async function getQuestions(): Promise<any> {
  const params = {
    amount: "10",
    category: "23",
    difficulty: "hard",
    type: "multiple"
  }
  const url = apiUrl + "?" + new URLSearchParams(params).toString()
  try {
    const response = await fetch(url)
    const data = await response.json()
    return data
  } catch (error) {
    console.error('Error getting questions', error)
  }
}

export default getQuestions