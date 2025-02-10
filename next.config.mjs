/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Directorio de salida personalizado (en lugar de '.next')
    distDir: "build",
  
    // 2. Configuración recomendada para optimización
    reactStrictMode: true,
    swcMinify: true,
  
    // 3. Opcional: Configurar dominios para imágenes remotas (si usas next/image)
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "**", // Permite todas las imágenes externas
        },
      ],
    },
  
    // 4. Opcional: Exportación estática (si tu portfolio es 100% estático)
    // output: "export",
  };
  
  export default nextConfig;