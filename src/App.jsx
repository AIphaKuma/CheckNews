import MistralClient from "@mistralai/mistralai";

function App() {

    const doChatStream = async function() {

        const apiKey = process.env.MISTRAL_API_KEY;
        const instruction = "Act as a Fake news detector, and you have to justify your answer by quote source"
        const chatValue = document.getElementById("chat").value;
        const chat = `${instruction}${chatValue}`

        const client = new MistralClient(apiKey);

        document.getElementById("output").innerHTML = "";
        document.getElementById("error").innerHTML = "";

        try {
            const chatStreamResponse = await client.chatStream({
                model: 'open-mistral-7b',
                messages: [{role: 'user', content: chat}],
            });

            for await (const chunk of chatStreamResponse) {
                if (chunk.choices[0].delta.content !== undefined) {
                    let streamText = chunk.choices[0].delta.content;
                    streamText = streamText.replace(/(?:\r\n|\r|\n)/g, '<br>');
                    document.getElementById("output").innerHTML += streamText;
                }
            }
        }
        catch (e) {
            document.getElementById("error").innerHTML += e;
        }
    };

    return (
        <div className="App">
            <section className="section">
                <div className="container">
                    <h1 className="title has-text-centered">Web Stream Example</h1>
                    <div id="output" className="message is-info"></div>

                    <div className="field">
                        <label className="label" htmlFor="question">Question</label>
                        <div className="control">
                            <input className="input" type="text" id="chat" name="question" placeholder="Enter your question"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className="control">
                            <button className="button is-primary" onClick={doChatStream}>Submit</button>
                        </div>
                    </div>

                    <div id="error" className="message is-danger"></div>
                </div>
            </section>
        </div>
    );
}

export default App;
