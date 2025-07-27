export default function handler(req, res) {
  const templates = [
    {
      id: 'landing-page',
      name: 'Landing Page',
      description: 'Modern landing page',
      prompt: 'Create a modern landing page'
    },
    {
      id: 'dashboard',
      name: 'Dashboard',
      description: 'Analytics dashboard',
      prompt: 'Create an analytics dashboard'
    }
  ];

  res.status(200).json({
    success: true,
    templates: templates
  });
}
