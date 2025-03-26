import React, { useState } from 'react';

function AulaButton({ aula }) {
    const [libre, setLibre] = useState(false);

    const buttonClass = libre ? 'sg-aulaLibre sg-output' : 'sg-aulaOcupada sg-output';

    const handleAulaLibre = () => {
        setLibre(!libre);
    };

    return (
        <button
            className={buttonClass}
            onClick={handleAulaLibre}
            style={{ display: 'flex', justifyContent: 'space-between' }}
        >
            <span>{aula.nombre}</span>
            <span className="material-symbols-outlined">preview</span>
        </button>
    );
}

export default AulaButton;