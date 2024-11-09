import React from 'react';
import catImage from './img/cat.png';
import dogImage from './img/dog.png';
import dinoImage from './img/dino.png';

const Card = ({ name, color, animal }) => {


    const animalImages = {
        gato: catImage,
        perro: dogImage,
        dino: dinoImage,
    };

    return (
        <div className="card">
            <h1>¡Hola {name}!</h1>
            <h4>Tu color favorito es:</h4>
            <div className="rectangle" style={{ backgroundColor: color }}>
                <span className="color-code">{color}</span>
            </div>
            {animal && (
                <div>
                    <h4>Tu animal favorito es:</h4>
                    <img src={animalImages[animal]} alt={animal} style={{ width: '100px', height: '100px' }} />
                </div>
            )}
        </div>
    );
};

export default Card;
