const promptInput = document.getElementById("prompt");
const results = document.getElementById("results");

// Initialize the OpenAI SDK with your API key
const openai = new OpenAI(a151776f6bmsh94ea1567cbe783dp1d803bjsn21d00779e249);

async function callGPTAPI() {
    const message = [
        { 'role': 'system', 'content': 'You are a helpful assistant.' },
        { 'role': 'user', 'content': promptInput.value }
    ];

    try {
        const response = await openai.complete('gpt-3.5-turbo', message);
        console.log(response);
        // Display the chatbot's response inside the results div
        results.innerText = response.data.choices[0].message.content;
    } catch (error) {
        console.error(error);
    }
}
