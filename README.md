# Next.js AI Assistant 🤖⚡  

Build an AI-powered developer assistant that answers questions about your codebase using Next.js, OpenAI, and MongoDB Atlas Vector Search.  

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)  
![TypeScript](https://img.shields.io/badge/TypeScript-5.3-blue?logo=typescript)  
![MongoDB](https://img.shields.io/badge/MongoDB-Atlas_Vector_Search-green)  

## Features  

### 1. **Codebase-Aware AI**  
- Index documentation/PDFs/code → Answer questions contextually :cite[6]:cite[8]  
- Supports **Markdown, Python, TypeScript** file parsing  

### 2. **Real-Time RAG Pipeline**  
- MongoDB Atlas Vector Search for low-latency queries :cite[6]  
- LangChain for document chunking/embedding :cite[1]:cite[8]  

### 3. **Next.js Optimized**  
- App Router + Server Actions for secure API calls  
- Streaming UI with Suspense boundaries  

## Quick Start  
git clone https://github.com/your-username/nextjs-ai-assistant.git  
cd nextjs-ai-assistant  

# Install  
pnpm install  

# Add OpenAI key  
echo "OPENAI_API_KEY=sk-your-key" > .env.local  

# Run  
pnpm dev  
