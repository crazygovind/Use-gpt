const prompt = document.getElementById("prompt");
const results = document.querySelector(".chat-messages");

async function callGPTAPI() {
  const options = {
    method: 'POST',
    url: 'https://open-ai21.p.rapidapi.com/conversationllama',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'a151776f6bmsh94ea1567cbe783dp1d803bjsn21d00779e249',
      'X-RapidAPI-Host': 'open-ai21.p.rapidapi.com'
    },
    data: {
        messages: [
          {
            role: 'user',
            content: 'hello'
          }
        ],
        web_access: false
      }
  };

  try {
    const response = await axios(options);
    console.log(response.data);
    // Do something with the response, like displaying it in the chat window
    results.innerText = response.data.choices[0].message.content;
  } catch (error) {
    console.error(error);
  }
}
