import React, { useEffect } from 'react';

const Adsense = () => {
  useEffect(() => {
    // Adiciona o script do Google AdSense ao carregar o componente
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1673425691644116';
    script.crossOrigin = 'anonymous';
    document.body.appendChild(script);

    // Configura o bloco de anúncio
    (window.adsbygoogle = window.adsbygoogle || []).push({});

    return () => {
      // Remove o script quando o componente é desmontado
      document.body.removeChild(script);
    };
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block', backgroundColor: 'rgb(200,200,200)'}}
      data-ad-client="ca-pub-1673425691644116"
      data-ad-slot="5570482029" 
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};

export default Adsense;
