/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // Diz ao Next para gerar HTML/CSS/JS estáticos na pasta 'out'
  basePath: "/luizfernando-portfolio", // IMPORTANTE: Coloque o nome exato do seu repositório no GitHub
  images: {
    unoptimized: true, // O GitHub Pages não suporta a otimização de imagens nativa do Next.js
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
