#!/bin/bash
# Deploy script para DeepSite Pro

echo "🚀 Iniciando deploy do DeepSite Pro..."

# Instalar dependências
npm install

# Login no Vercel
vercel login

# Link do projeto
vercel link

# Configurar variáveis de ambiente
vercel env add OPENAI_API_KEY production
vercel env add OPENAI_MODEL production
vercel env add OPENAI_BASE_URL production

# Deploy para produção
vercel --prod

echo "✅ Deploy concluído!"
