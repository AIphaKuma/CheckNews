import MistralClient from '@mistralai/mistralai'
import './App.css'
function App() {
  const doChatStream = async function() {

    const apiKey = document.getElementById("apiKey").value;
    const chat = document.getElementById("chat").value;

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

    const appStyle = {
        fontFamily: 'Inter, system-ui, Avenir, Helvetica, Arial, sans-serif',
        backgroundColor: '#C6D7F1', // Columbia Blue
      };
    
      const sectionStyle = {
        padding: '20px',
      };
    
      const containerStyle = {
        maxWidth: '800px',
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: 'row', 
        flexWrap: 'wrap', 
        margin: '0 auto', 
        backgroundColor: '#F6F7F2', // Blanc
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        borderRadius: '8px',
        padding: '20px',
    };
    
    
      const titleStyle = {
        color: '#2C80B5', // Steel Blue
        textAlign: 'center',
        marginBottom: '20px',
      };
    
      const fieldStyle = {
        marginBottom: '15px',
      };
    
      const labelStyle = {
        display: 'block',
        color: '#11100F', // Noir
        marginBottom: '5px',
      };
    
      const controlStyle = {
        display: 'flex',
        flexDirection: 'column',
      };
    
      const inputStyle = {
        fontSize: '1em',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid #C6D7F1', // Columbia Blue
        backgroundColor: '#fff',
        color: '#11100F', // Noir
      };
    
      const buttonStyle = {
        fontSize: '1em',
        padding: '10px',
        borderRadius: '8px',
        border: '1px solid transparent',
        backgroundColor: '#2C80B5', // Steel Blue
        color: '#F6F7F2', // Blanc
        cursor: 'pointer',
        transition: 'background-color 0.3s ease',
      };
    
      const messageStyle = {
        padding: '15px',
        borderRadius: '8px',
        marginTop: '10px',
        backgroundColor: '#C6D7F1', // Columbia Blue pour is-info
        color: '#11100F', // Noir
      };
    
      const errorMessageStyle = {
      };
      return (
        <div className="App" style={appStyle}>
            <section className="section" style={sectionStyle}>
                <div className="container" style={containerStyle}>
                    <h1 className="title has-text-centered" style={titleStyle}>Check News</h1>
                    <div className="field" style={fieldStyle}>
                        <label className="label" htmlFor="apiKey" style={labelStyle}>API Key</label>
                        <div className="control" style={controlStyle}>
                            <input className="input" type="text" id="apiKey" name="apiKey" placeholder="API Key" style={inputStyle}/>
                        </div>
                    </div>
    
                    <div className="field" style={fieldStyle}>
                        <label className="label" htmlFor="question" style={labelStyle}>Question</label>
                        <div className="control" style={controlStyle}>
                            <input className="input" type="text" id="chat" name="question" placeholder="Enter your question" style={inputStyle}/>
                        </div>
                    </div>
                    <div className="field" style={fieldStyle}>
                        <div className="control" style={controlStyle}>
                            <button className="button is-primary" onClick={doChatStream} style={buttonStyle}>Submit</button>
                        </div>
                    </div>
                    <div id="output" className="message is-info" style={messageStyle}></div>
    
                    <div id="error" className="message is-danger" style={errorMessageStyle}></div>
                </div>
            </section>
        </div>
      );
    }

export default App;
