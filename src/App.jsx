import MistralClient from "@mistralai/mistralai";
import Features from "./Components/features";
import logo from './assets/checknews.png'

function App() {
  const doChatStream = async function () {
    const apiKey = process.env.MISTRAL_API_KEY;
    const client = new MistralClient(apiKey);

    const instruction =
      "Act as a Fake news detector, and you have to justify your answer by quote source";
    const chatValue = document.getElementById("chat").value;
    const chat = `${instruction}${chatValue}`;

    try {
      const chatStreamResponse = await client.chatStream({
        model: "open-mistral-7b",
        messages: [{ role: "user", content: chat }],
      });

      for await (const chunk of chatStreamResponse) {
        if (chunk.choices[0].delta.content !== undefined) {
          let streamText = chunk.choices[0].delta.content;
          streamText = streamText.replace(/(?:\r\n|\r|\n)/g, "<br>");
          document.getElementById("output").innerHTML += streamText;
        }
      }
    } catch (e) {
      document.getElementById("error").innerHTML += e;
    }
  };

  return (
  <div className="App flex flex-col items-center min-h-screen bg-white py-8">
    <div className="container mx-auto px-4 w-full max-w-4xl">
      <div className="text-center mb-8">
      </div>
    <label className="label text-black block mb-2 text-xl text-gray-400" htmlFor="question">
        Comment puis-je vous aider ?
    </label>
    <div className="mb-4 flex flex-col md:flex-row">
      <div className="md:flex-1">
        <input
          className="input w-full px-4 py-2 border-2 bg-white border-gray-300 rounded-md focus:outline-none focus:border-steel text-black"
          type="text"
          id="chat"
          name="question"
          placeholder="Entrez votre information"
        />
      </div>
      <div className="md:ml-4 mt-4 md:mt-0">
        <button className="button bg-steel px-4 py-2 text-white rounded-md" onClick={doChatStream}>
          Vérifier
        </button>
      </div>
    </div>
    <Features/>
    <div id="output" className="w-full border-2 border-gray-300 p-4 rounded-md text-steels" style={{ minHeight: '150px' }}>
      
    </div>
    
    <div id="error" className="message mt-4 bg-red-600 text-white p-4 rounded-md hidden">
    </div>
  </div>
</div>
  );
}

export default App;
