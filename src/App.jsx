import { useState } from 'react';
import Form from './Form';
import Card from './Card';
import './App.css';

function App() {
    const [name, setName] = useState('');
    const [color, setColor] = useState('');
    const [animal, setAnimal] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (name, color, animal) => {
        if (name.length < 3 || name.startsWith(' ') || color.length < 6) {
            setError('Por favor chequea que la información sea correcta.');
        } else {
            setError('');
            setName(name);
            setColor(color.startsWith('#') ? color : `#${color}`);
            setAnimal(animal);
        }
    };

    return (
        <>
            <Form onSubmit={handleSubmit} error={error} />
            {!error && name && color && (
                <Card name={name} color={color} animal={animal} />
            )}
        </>
    );
}

export default App;
