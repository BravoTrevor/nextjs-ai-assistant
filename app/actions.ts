"use server";  
import { loadQAStuffChain } from "langchain/chains";  

export async function ragQuery(query: string) {  
  const vectorStore = new MongoDBAtlasVectorSearch(  
    new OpenAIEmbeddings(),  
    { collection: getMongoCollection() }  
  );  

  const chain = loadQAStuffChain(llm);  
  const context = await vectorStore.similaritySearch(query, 3); // Top 3 matches  
  return chain.call({ input_documents: context, question: query });  
}  