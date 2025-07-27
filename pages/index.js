export default function Home() {
  return (
    <div style={{ 
      padding: '40px', 
      fontFamily: 'system-ui, -apple-system, sans-serif',
      maxWidth: '800px',
      margin: '0 auto'
    }}>
      <h1>🚀 DeepSite Pro</h1>
      <p>Bem-vindo ao DeepSite Pro! O sistema está funcionando.</p>
      
      <h2>Status das APIs:</h2>
      <ul>
        <li><a href="/api/check-env">/api/check-env</a> - Verificar ambiente</li>
        <li><a href="/api/templates">/api/templates</a> - Templates disponíveis</li>
        <li>/api/ask-ai - Gerar código (POST)</li>
        <li>/api/optimize-prompt - Otimizar prompt (POST)</li>
      </ul>
      
      <h2>Teste Rápido:</h2>
      <button onClick={testAPI} style={{
        padding: '10px 20px',
        fontSize: '16px',
        backgroundColor: '#0070f3',
        color: 'white',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer'
      }}>
        Testar API
      </button>
      
      <div id="result" style={{ 
        marginTop: '20px', 
        padding: '20px', 
        backgroundColor: '#f5f5f5',
        borderRadius: '5px',
        display: 'none'
      }}></div>
    </div>
  );
}

// Função de teste no cliente
if (typeof window !== 'undefined') {
  window.testAPI = async function() {
    const resultDiv = document.getElementById('result');
    resultDiv.style.display = 'block';
    resultDiv.innerHTML = 'Testando...';
    
    try {
      const response = await fetch('/api/check-env');
      const data = await response.json();
      resultDiv.innerHTML = '<pre>' + JSON.stringify(data, null, 2) + '</pre>';
    } catch (error) {
      resultDiv.innerHTML = 'Erro: ' + error.message;
    }
  }
}
