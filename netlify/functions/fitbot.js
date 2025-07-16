const { Configuration, OpenAIApi } = require("openai");

exports.handler = async function(event, context) {
  try {
    const body = JSON.parse(event.body);
    const query = body.query;

    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY, // 🚫 NEVER hardcode the key
    });

    const openai = new OpenAIApi(configuration);
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: query }],
    });

    const reply = completion.data.choices[0].message.content;

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply }),
    };
  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "FitBot brain failed to respond." }),
    };
  }
};
