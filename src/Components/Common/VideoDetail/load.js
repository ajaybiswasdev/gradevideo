const loadVideoJs = (callback) => {
    const existingScript = document.getElementById('videojs');
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://muse.ai/static/js/embed-player.min.js';
      script.async = true;
      script.id = 'videojs';
      document.body.appendChild(script);
      script.onload = () => { 
        if (callback) callback();
      };
    }
    if (existingScript && callback) callback();
  };
  export default loadVideoJs;