export default function handler(req, res) {
  const hasApiKey = !!process.env.OPENAI_API_KEY;
  const model = process.env.OPENAI_MODEL || 'gpt-4o';
  const baseUrl = process.env.OPENAI_BASE_URL || 'https://api.openai.com/v1';
  
  res.status(200).json({
    success: true,
    configured: hasApiKey,
    model: model,
    baseUrl: baseUrl,
    provider: 'openai'
  });
}
