import { load } from "dotenv";
import { ChatOpenAI } from "@langchain/openai";

if (import.meta.main) {
  const env = await load();
  const apiKey = env["OPENAI_API_KEY"];

  const model = new ChatOpenAI({
    temperature: 0.9,
    apiKey,
  });

  const aiMessage = await model.invoke("what is LangSmith?");
  console.log(aiMessage.content);
}
