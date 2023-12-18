import { QuestionData as QuestionData } from "../types/Questions"

const apiUrl = "https://opentdb.com/api.php"


async function getQuestions(): Promise<Array<QuestionData>> {
  const params = {
    question: "",
    amount: "10",
    category: "23",
    difficulty: "hard",
    type: "multiple",
  }
  const url = apiUrl + "?" + new URLSearchParams(params).toString()
  try {
    const response = await fetch(url)
    const data = await response.json()
    console.log(data);
    return data.results
  } catch (error) {
    console.error('Error getting questions', error)
    return []
  }
}

export default getQuestions