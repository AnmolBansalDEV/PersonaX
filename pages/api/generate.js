import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

// const basePromptPrefix = "The following is a conversation with a persona defined below named Kartik. \nCost-conscious students and young adults: This group of individuals consists of young, less affluent individuals, such as students and entry-level professionals, who prioritize affordability when making purchasing decisions. This persona may be a college student in her early 20s living in Delhi who is focused on building her financial stability. They may be interested in budget-friendly products, such as inexpensive smartphones and value-priced fashion items, and may be more likely to make purchasing decisions based on price rather than brand reputation or quality. This persona may also be focused on saving money and building their financial stability, and may be less likely to spend money on luxury or premium products and services. For example, they may purchase affordable, budget-friendly smartphones, clothing, and accessories, as well as inexpensive, prepaid mobile plans, and value-priced subscriptions to music, video, and content services.\nUser:";
// const basePromptPrefix = "this is the conversation with a school boy named Kartik\n User:";
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