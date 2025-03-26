import React, { useState } from 'react';
import AulaButton from './button-aula';

export function MainDropdown() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedType, setSelectedType] = useState(null); // 'aula' or 'laboratorio'
  const hora = "8:00 a.m - 12:00 p.m";

  // Datos de las aulas (puedes obtenerlos de una API o un archivo)
  const aulasData = [
    { id: 1, nombre: 'K-110' },
    { id: 2, nombre: 'K-111' },
    { id: 3, nombre: 'K-112' },
    { id: 4, nombre: 'K-113' },
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
        <span>Edificio N</span>
        <div className="sg-dropDownInfo-contentHorario">
          <span>Horario</span>
          <div className='sg-output'>
            <span className='sg-dropDownInfo-contentHoras'>
              <time datetime="">{hora}</time>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-clock icon">
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
              className={selectedType === 'aula' ? 'active' : ''}
              onClick={() => handleTypeChange('aula')}
            >
              Aula
            </button>
            <button
              type="button"
              className={selectedType === 'laboratorio' ? 'active' : ''}
              onClick={() => handleTypeChange('laboratorio')}
            >
              Laboratorio
            </button>
          </div>

          <select value={selectedOption} onChange={handleChange}>
            <option value="">Filtrar</option>
            <option value="opcion1">Opción 1</option>
            <option value="opcion2">Opción 2</option>
            <option value="opcion3">Opción 3</option>
          </select>
        </div>
        <div className="sg-dropDown-contentAulas">
          {aulasData.map((aula) => (
            <AulaButton key={aula.id} aula={aula} />
          ))}
        </div>
      </div>

      <div className="sg-dropDownOption-content">
        <span>Opciones</span>
        <div></div>
        <div></div>
      </div>
    </article>
  );
}