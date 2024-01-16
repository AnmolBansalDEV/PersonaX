import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY)
console.log(process.env.GEMINI_API_KEY)
const generateAction = async (req, res) => {
  const generationConfig = {
    stopSequences: ["User"],
    maxOutputTokens: 1000,
    temperature: 0.9,
    topP: 0.1,
    topK: 16,
  };
  const model = genAI.getGenerativeModel({ model: "gemini-pro", generationConfig});
  const result = await model.generateContent(req.body.userInput);
  const response = result.response;
  const text = response.text();

  res.status(200).json({ output: text });
};

export default generateAction;