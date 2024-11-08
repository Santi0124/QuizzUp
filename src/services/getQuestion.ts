import { QuestionData } from "../types/Questions"


const categoryMapping: { [key: string]: number } = {
  Historic: 23,
  Politics: 24,
  Geography: 22,
}

const apiUrl = "https://opentdb.com/api.php"

async function getQuestions(difficulty: string, category: string): Promise<Array<QuestionData>> {

  const categoryId = categoryMapping[category]

  const params = {
    question: "",
    amount: "5",
    category: categoryId.toString(),
    difficulty: difficulty.toLowerCase(),
    type: "multiple",
  };

  const url = apiUrl + "?" + new URLSearchParams(params).toString()

  try {
    const response = await fetch(url)
    const data = await response.json()

    console.log('API response:', data)

    if (data.response_code === 2) {
      alert("No se encontraron preguntas para esta combinación.")
      return []
    }

    return data.results
  } catch (error) {
    console.error('Error getting questions', error)
    return []
  }
}

export default getQuestions
