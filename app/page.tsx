import { useActions } from "./actions";  

export default function Chat() {  
  const [stream, setStream] = useState<StreamingTextResponse>();  

  async function handleSubmit(query: string) {  
    const response = await fetch("/api/chat", {  
      method: "POST",  
      body: JSON.stringify({ query }),  
    });  

    setStream(response.body?.pipeThrough(new TextDecoderStream()));  
  }  

  return (  
    <div>  
      <input onSubmit={(e) => handleSubmit(e.target.value)} />  
      {stream && <Markdown>{stream}</Markdown>}  
    </div>  
  );  
}  