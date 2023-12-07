const apiUrl = "https://opentdb.com/api.php?amount=1"

async function getQuestions(){
  try {
    const response = await fetch(apiUrl)
    const data = await response.json()
    console.log(data)
  } catch (error) {
    console.error('Error getting questions', error)
  }
}

export default getQuestions()