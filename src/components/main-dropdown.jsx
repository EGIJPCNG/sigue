import React, { useState } from 'react';
import AulaButton from './button-aula';

export function MainDropdown() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedType, setSelectedType] = useState(null); // 'aula' or 'laboratorio'
  const hora = "8:00 a.m - 12:00 p.m";

  // Datos de las aulas (puedes obtenerlos de una API o un archivo)
  const aulasData = [
    { id: 1, nombre: 'K-110'},
    { id: 2, nombre: 'K-111'},
    { id: 3, nombre: 'K-112'},
    { id: 4, nombre: 'K-113'},
  ];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleTypeChange = (type) => {
    setSelectedType(type);
  };

  return (
    <article className="sg-dropdown-contentBuilder">

      <div className="sg-dropDownInfo-content">
        <h1>Edificio N</h1>
        <div className="sg-dropDownInfo-contentHorario ">
          <span className='text-medium'>Horario</span>
          <div className='sg-output'>
            <span className='sg-dropDownInfo-contentHoras'>
              <time dateTime="" className='text-medium'>{hora}</time>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" 
                class="lucide lucide-clock icon">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
              </svg>
            </span>

          </div>
        </div>
        <div className="sg-dropDownInfo-contentAulas">
          <div className="button-group">
            <button
              type="button"
              className={selectedType === 'aula' ? 'active text-medium' : 'text-medium'}
              onClick={() => handleTypeChange('aula')}
            >
              Aula
            </button>
            <button
              type="button"
              className={selectedType === 'laboratorio' ? 'active text-medium' : 'text-medium'}
              onClick={() => handleTypeChange('laboratorio')}
            >
              Laboratorio
            </button>
          </div>

          <select className="select-filter text-medium"  value={selectedOption} onChange={handleChange}>
            <option value="">Filtrar</option>
            <option className="option-filter" value="opcion1">Libre</option>
            <option className="option-filter" value="opcion2">Ocupado</option>
          </select>
        </div>
        <div className="sg-dropDown-contentAulas">
          {aulasData.map((aula) => (
            <AulaButton key={aula.id} aula={aula} style={{ color:'green' }} />
          ))}
        </div>
      </div>
      
      <h1>Opciones</h1>
      <div className="sg-dropDownOption-content">
        <div className='sg-dropDownOption-buttonOption'>
          <button className="sg-buttonOption"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-map h-full w-full text-white"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg></button>
          <button className="sg-buttonOption"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-arrow-left-right h-full w-full text-white"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg></button>
          <button className="sg-buttonOption"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M660-320v-320L500-480l160 160ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm120-80v-560H200v560h120Zm80 0h360v-560H400v560Zm-80 0H200h120Z" /></svg></button>
        </div>
        <div className='sg-dropDown-infoOption'>
          <button className="sg-buttonInfo">vista general</button>
        </div>
      </div>
    </article>
  );
}