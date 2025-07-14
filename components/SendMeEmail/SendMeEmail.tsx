'use client';
import './sendMeEmail.scss';
import { IoIosSend } from 'react-icons/io';
import { useState, useRef } from 'react';

type FormData = {
    name: string;
    email: string;
    phone?: string;
    subject: string;
    message: string;
};

type Errors = Partial<Record<keyof FormData, string>>;

export default function SendMeEmail() {
    const [sent, setSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [hasSubmitted, setHasSubmitted] = useState(false);

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        subject: 'Opportunité d\'alternance, projet...',
        message: '',
    });

    const [errors, setErrors] = useState<Errors>({});

    // Champs refs
    const nameRef = useRef<HTMLInputElement | null>(null);
    const emailRef = useRef<HTMLInputElement | null>(null);
    const phoneRef = useRef<HTMLInputElement | null>(null);
    const subjectRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<HTMLTextAreaElement | null>(null);
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    const autoResizeTextarea = () => {
        const textarea = textareaRef.current;
        if (textarea) {
            textarea.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight}px`;
        }
    };

    const focusFirstError = (errorFields: Errors) => {
        if (errorFields.name) nameRef.current?.focus();
        else if (errorFields.email) emailRef.current?.focus();
        else if (errorFields.phone) phoneRef.current?.focus();
        else if (errorFields.subject) subjectRef.current?.focus();
        else if (errorFields.message) messageRef.current?.focus();
    };

    const validate = () => {
        const newErrors: Errors = {};

        if (!formData.name.trim()) newErrors.name = 'Le nom est requis.';
        if (!formData.email.trim()) {
            newErrors.email = 'L’email est requis.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Adresse email invalide.';
        }

        if (formData.phone) {
            const digitsOnly = formData.phone.replace(/\D/g, '');
            if (digitsOnly.length < 10) {
                newErrors.phone = 'Numéro de téléphone invalide.';
            }
        }

        if (!formData.subject.trim()) newErrors.subject = 'L’objet est requis.';
        if (!formData.message.trim()) newErrors.message = 'Le message est requis.';

        setErrors(newErrors);
        focusFirstError(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrors((prev) => ({ ...prev, [e.target.name]: '' }));

        if (e.target.name === 'message') autoResizeTextarea();
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setHasSubmitted(true);

        if (!validate()) return;

        setLoading(true);
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setSent(true);
                setHasSubmitted(false);
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    subject: 'Opportunité d\'alternance, projet...',
                    message: '',
                });
                setErrors({});
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
                <div><IoIosSend className="iconContact" size={46} role="presentation" /></div>
                Envoyez-moi un message
            </h2>

            {!sent ? (
                <form onSubmit={handleSubmit} noValidate>
                    {/* Nom */}
                    <label htmlFor="name">
                        Nom complet *
                        <input
                            ref={nameRef}
                            type="text"
                            id="name"
                            name="name"
                            required
                            aria-invalid={hasSubmitted && !!errors.name}
                            aria-describedby={hasSubmitted && errors.name ? 'name-error' : undefined}
                            placeholder="Jean Dupont"
                            value={formData.name}
                            onChange={handleChange}
                            autoComplete="name"
                        />
                        {hasSubmitted && errors.name && (
                            <p id="name-error" className="error" role="alert">{errors.name}</p>
                        )}
                    </label>

                    {/* Email */}
                    <label htmlFor="email">
                        Email *
                        <input
                            ref={emailRef}
                            type="email"
                            id="email"
                            name="email"
                            required
                            aria-invalid={hasSubmitted && !!errors.email}
                            aria-describedby={hasSubmitted && errors.email ? 'email-error' : undefined}
                            placeholder="email@example.com"
                            value={formData.email}
                            onChange={handleChange}
                            autoComplete="email"
                        />
                        {hasSubmitted && errors.email && (
                            <p id="email-error" className="error" role="alert">{errors.email}</p>
                        )}
                    </label>

                    {/* Téléphone */}
                    <label htmlFor="phone">
                        Téléphone (si vous souhaitez être rappelé)
                        <input
                            ref={phoneRef}
                            type="tel"
                            id="phone"
                            name="phone"
                            aria-invalid={hasSubmitted && !!errors.phone}
                            aria-describedby={hasSubmitted && errors.phone ? 'phone-error' : undefined}
                            placeholder="06 12 34 56 78"
                            value={formData.phone}
                            onChange={handleChange}
                            autoComplete="tel"
                        />
                        {hasSubmitted && errors.phone && (
                            <p id="phone-error" className="error" role="alert">{errors.phone}</p>
                        )}
                    </label>

                    {/* Objet */}
                    <label htmlFor="subject">
                        Objet *
                        <input
                            ref={subjectRef}
                            type="text"
                            id="subject"
                            name="subject"
                            required
                            aria-invalid={hasSubmitted && !!errors.subject}
                            aria-describedby={hasSubmitted && errors.subject ? 'subject-error' : undefined}
                            placeholder="Objet"
                            value={formData.subject}
                            onChange={handleChange}
                        />
                        {hasSubmitted && errors.subject && (
                            <p id="subject-error" className="error" role="alert">{errors.subject}</p>
                        )}
                    </label>

                    {/* Message */}
                    <label htmlFor="message">
                        Message *
                        <textarea
                            ref={(el) => {
                                textareaRef.current = el;
                                messageRef.current = el;
                            }}
                            id="message"
                            name="message"
                            required
                            aria-invalid={hasSubmitted && !!errors.message}
                            aria-describedby={hasSubmitted && errors.message ? 'message-error' : undefined}
                            placeholder="Votre message ici..."
                            rows={6}
                            value={formData.message}
                            onChange={handleChange}
                        />
                        {hasSubmitted && errors.message && (
                            <p id="message-error" className="error" role="alert">{errors.message}</p>
                        )}
                    </label>

                    <button type="submit" aria-label="Envoyer le message" disabled={loading}>
                        {loading ? 'Envoi...' : 'Envoyer le message'} <IoIosSend size={20} aria-hidden="true" />
                    </button>
                </form>
            ) : (
                <div className="confirmationMessage">
                    <p><span className="important">Merci</span> pour votre message ! Je vous répondrai rapidement.</p>
                    <p>Vous avez reçu une copie par mail.</p>
                </div>
            )}
        </article>
    );
}