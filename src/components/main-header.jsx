import React, { useState, useEffect } from 'react';


export function MainHeader() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000); // Actualiza cada segundo

    return () => clearInterval(intervalId); // Limpia el intervalo al desmontar el componente
  }, []);

    const formattedTime = currentTime.toLocaleTimeString('es-US', {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        hour12: true,
    });

  return (

    <article className="sg-headerInfo-builder">

      <form className='sg-headerInfo-builder__left'>
        <input className='sg-input sg-input-bgTransparent text-small' type="text" placeholder="Buscar un edificio-aula" />
        <button className='sg-button sg-button-search sg-button-primary'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-search"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
        </button>
      </form>

      <div className='sg-headerInfo-builder__right'>
          <time className='sg-headerInfo-timeDisplay'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" 
                  viewBox="0 0 24 24" fill="none" stroke="currentColor"
                  className="lucide lucide-clock icon">
                  <circle cx="12" cy="12" r="10"></circle>
                  <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
              {formattedTime}
          </time>
          <div className='sg-headerInfo-divider'></div>
          <button className='sg-button sg-button-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path></svg>
          </button>
          <button className='sg-button sg-button-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-layout-grid"><rect width="7" height="7" x="3" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="3" rx="1"></rect><rect width="7" height="7" x="14" y="14" rx="1"></rect><rect width="7" height="7" x="3" y="14" rx="1"></rect></svg>
          </button>
          <button className='sg-button sg-button-icon'>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
          </button>
      </div>

      <div className='sg-headerLogin-button sg-button-icon'>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="lucide lucide-user"><path d="M3 21v-2a4 4 0 0 1 4-4h10a4 4 0 0 1 4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
        <span>Iniciar sesión</span>
      </div>

    </article>

  );
}