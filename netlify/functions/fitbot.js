const { Configuration, OpenAIApi } = require("openai");

exports.handler = async function (event, context) {
  try {
    // Parse incoming request body
    const body = JSON.parse(event.body);
    const userQuery = body.query;

    // Configure OpenAI with your secure environment key
    const configuration = new Configuration({
      apiKey: process.env.OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    // Send request to OpenAI
    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userQuery }],
    });

    const reply = completion.data.choices[0].message.content;

    // Return the reply to frontend
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ reply }),
    };
  } catch (error) {
    console.error("AI error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "FitBot brain failed to respond" }),
    };
  }
};
