export const config = {
  maxDuration: 30,
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { prompt } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: 'Prompt is required' });
  }

  const optimizedPrompt = `
Create a complete web application: ${prompt}

Include:
- Modern HTML5
- Responsive CSS
- Interactive JavaScript
- Beautiful design
  `.trim();

  res.status(200).json({
    success: true,
    optimizedPrompt: optimizedPrompt,
    original: prompt
  });
}
