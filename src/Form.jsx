import React, { useState } from 'react';

const Form = ({ onSubmit, error }) => {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [animal, setAnimal] = useState(''); // Nuevo estado para el animal

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(name, color, animal); // Pasar el animal seleccionado
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Nombre:</label>
                <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor="color">Color favorito (HEX):</label>
                <input type="text" id="color" value={color} onChange={(e) => setColor(e.target.value)} />
            </div>
            <div>
                <label htmlFor="animal">Animal favorito:</label>
                <select id="animal" value={animal} onChange={(e) => setAnimal(e.target.value)}>
                    <option value="">Selecciona uno</option>
                    <option value="gato">Gato</option>
                    <option value="perro">Perro</option>
                    <option value="dino">Dino</option>
                </select>
            </div>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Form;
