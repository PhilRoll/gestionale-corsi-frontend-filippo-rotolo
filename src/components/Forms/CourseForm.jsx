import React, { useState, useEffect } from 'react';
import { CreateCourse, GetAllCategories } from '../../services/RESTservice';
import Cookies from 'js-cookie';

export function CourseForm() {

    const [formData, setFormData] = useState({
        nomeCorso: '',
        descrizioneBreve: '',
        descrizioneCompleta: '',
        durata: '',
        idCategoria: ''
    });

    const [errorFlag, setErrorFlag] = useState(false);
    const [successFlag, setSuccessFlag] = useState(false);
    const [categorie, setCategorie] = useState([]);

    // Carica le categorie quando il componente viene montato
    useEffect(() => {
        async function fetchCategories() {
            const categories = await GetAllCategories();
            setCategorie(categories); // Imposta le categorie nello stato
            setFormData(prevState => ({
                ...prevState,
                categoria: categories.length > 0 ? categories[0].id : '' // Imposta l'ID della prima categoria come valore predefinito
            }));
        }
        fetchCategories();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    //handle submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.table(formData);

        //let response = await CreateCourse(formData, Cookies.get('token'));
        let response = await CreateCourse(formData);
        if (response.ok) {
            setSuccessFlag(true);
        } else {
            setErrorFlag(true);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="nomeCorso" className="form-label">Nome del Corso</label>
                    <input type="text" className="form-control" id="nomeCorso" name="nomeCorso" value={formData.nomeCorso} onChange={handleChange} required placeholder="Inserisci il nome del corso" />
                </div>
                <div className="mb-3">
                    <label htmlFor="descrizioneBreve" className="form-label">Descrizione Breve</label>
                    <input type="text" className="form-control" id="descrizioneBreve" name="descrizioneBreve" value={formData.descrizioneBreve} onChange={handleChange} required placeholder="Inserisci una breve descrizione" />
                </div>
                <div className="mb-3">
                    <label htmlFor="descrizioneCompleta" className="form-label">Descrizione Completa</label>
                    <textarea className="form-control" id="descrizioneCompleta" name="descrizioneCompleta" rows="5" value={formData.descrizioneCompleta} onChange={handleChange} required placeholder="Inserisci una descrizione completa"></textarea>
                </div>
                <div className="mb-3">
                    <label htmlFor="durata" className="form-label">Durata (in ore)</label>
                    <input type="text" className="form-control" id="durata" name="durata" value={formData.durata} onChange={handleChange} required placeholder="Inserisci la durata del corso in ore" />
                </div>
                <div className="mb-3">
                    <label htmlFor="idCategoria" className="form-label">Categoria</label>
                    <select className="form-select" id="idCategoria" name="idCategoria" value={formData.idCategoria} onChange={handleChange} required>
                        <option value="">Seleziona una categoria</option>
                        {categorie.map((category) => (
                            <option key={category.id} value={category.id}>{category.nomeCategoria}</option>
                        ))}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Crea</button>
            </form>
    
            {errorFlag && <p className="alert alert-danger">Si è verificato un errore. Riprova.</p>}
    
            {successFlag && (
                <p className="alert alert-success d-flex justify-content-between align-items-center">
                    <span>Corso registrato con successo!</span>
                </p>
            )}
        </>
    );
    
}
