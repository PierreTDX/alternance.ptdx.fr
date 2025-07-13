'use client';
import './sendMeEmail.scss';
import { IoIosSend } from 'react-icons/io';
import { useState } from 'react';

type FormData = {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
};

export default function SendMeEmail() {
    const [sent, setSent] = useState(false);
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: 'Opportunité d\'alternance, projet...',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSent(true);
            } else {
                alert('Erreur lors de l’envoi. Merci de réessayer plus tard.');
            }
        } catch (error) {
            console.error(error);
            alert('Erreur lors de la soumission du formulaire.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <article className="articleSendMeEmail">
            <h2>
                <IoIosSend className="iconContact" size={46} role="presentation" /> Envoyez-moi un message
            </h2>

            {!sent ? (
                <form onSubmit={handleSubmit}>
                    <label>
                        Nom complet *
                        <input type="text" name="name" required placeholder="Jean Dupont" value={formData.name} onChange={handleChange} />
                    </label>

                    <label>
                        Email *
                        <input type="email" name="email" required placeholder="email@example.com" value={formData.email} onChange={handleChange} />
                    </label>

                    <label>
                        Téléphone
                        <input type="tel" name="phone" placeholder="06 12 34 56 78" value={formData.phone} onChange={handleChange} />
                    </label>

                    <label>
                        Objet
                        <input type="text" name="subject" placeholder="Objet" value={formData.subject} onChange={handleChange} />
                    </label>

                    <label>
                        Message *
                        <textarea name="message" required placeholder="Votre message ici..." rows={6} value={formData.message} onChange={handleChange} />
                    </label>

                    <button type="submit" aria-label="Envoyer le message" disabled={loading}>
                        {loading ? 'Envoi...' : 'Envoyer le message'} <IoIosSend size={20} aria-hidden="true" />
                    </button>
                </form>
            ) : (
                <p className="confirmationMessage">
                    <span className="important">Merci</span> pour votre message ! Je vous répondrai rapidement.
                </p>
            )}
        </article>
    );
}