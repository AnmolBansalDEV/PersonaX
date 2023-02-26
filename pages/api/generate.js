import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY
});

const openai = new OpenAIApi(configuration);

const generateAction = async (req, res) => {
  // Run first prompt
  console.log(`API:${req.body.userInput}`)

  const baseCompletion = await openai.createCompletion({
    model: 'text-davinci-003',
    prompt: `${req.body.userInput}`,
    temperature: 0.9,
    max_tokens: 1000,
    // top_p: 1,
    // frequency_penalty: 0,
    // presence_penalty: 0.6,
    stop: ["User"],//kartik
  });
  
  const basePromptOutput = baseCompletion.data.choices.pop();

  res.status(200).json({ output: basePromptOutput });
};

export default generateAction;