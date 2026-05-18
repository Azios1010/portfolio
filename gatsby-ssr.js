import React from 'react';

const FallbackThemeScript = () => {
  const codeToRunOnClient = `
    (function() {
      try {
        var mode = localStorage.getItem('theme');
        if (mode === 'light') {
          document.documentElement.classList.add('light-mode');
        }
      } catch (e) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([<FallbackThemeScript key="fallback-theme-script" />]);
};