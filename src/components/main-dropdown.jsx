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
            <option className="option-filter" value="opcion1">Opción 1</option>
            <option className="option-filter" value="opcion2">Opción 2</option>
            <option className="option-filter" value="opcion3">Opción 3</option>
          </select>
        </div>
        <div className="sg-dropDown-contentAula">
          {aulasData.map((aula) => (
            <AulaButton key={aula.id} aula={aula} style={{ color:'green' }} />
          ))}
        </div>
      </div>

      <div className="sg-dropDownOption-content">
        <h1>Opciones</h1>
        <div></div>
        <div></div>
      </div>
    </article>
  );
}