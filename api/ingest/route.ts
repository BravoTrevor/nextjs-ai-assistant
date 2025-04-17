import { MongoDBAtlasVectorSearch } from "@langchain/mongodb";  
import { PDFLoader } from "langchain/document_loaders";  

export async function POST(req: Request) {  
  const file = await req.formData().get("file");  
  const loader = new PDFLoader(file as Blob);  
  const docs = await loader.load();  

  // Store in MongoDB Atlas  
  const vectorStore = await MongoDBAtlasVectorSearch.fromDocuments(  
    docs,  
    new OpenAIEmbeddings(),  
    { collection: client.db().collection("vectors") }  
  );  
}  