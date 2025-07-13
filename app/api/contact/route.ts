import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    console.log('[API] POST /api/contact appelé');

    try {
        const data = await request.json();
        console.log('✅ Super données reçues :', data);

        const { name, email, phone, subject, message } = data;

        const brevoApiKey = process.env.BREVO_API_KEY;
        if (!brevoApiKey) {
            return NextResponse.json({ error: 'Clé Brevo manquante.' }, { status: 500 });
        }

        const headers = {
            'api-key': brevoApiKey,
            'Content-Type': 'application/json',
            Accept: 'application/json',
        };

        // 1. Envoi à toi
        const payloadToYou = {
            sender: { name, email },
            to: [{ email: 'pierre.tondeux@gmail.com' }],
            subject: subject || 'Message via le formulaire de contact',
            htmlContent: `
                <h2>Nouveau message depuis le site alternance.ptdx.fr</h2>
                <p><strong>Nom :</strong> ${name}</p>
                <p><strong>Email :</strong> ${email}</p>
                <p><strong>Téléphone :</strong> ${phone || 'Non fourni'}</p>
                <p><strong>Message :</strong><br/>${message.replace(/\n/g, '<br/>')}</p>
            `,
            replyTo: { email },
        };

        const res1 = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers,
            body: JSON.stringify(payloadToYou),
        });

        if (!res1.ok) {
            const errorText = await res1.text();
            console.error('❌ Erreur envoi à toi :', errorText);
            return NextResponse.json({ error: 'Erreur lors de l’envoi du message.' }, { status: 500 });
        }

        // 2. Envoi à la personne qui a écrit
        const payloadToSender = {
            sender: {
                name: 'Pierre Tondeux',
                email: 'pierre.tondeux@gmail.com',
            },
            to: [{ email }],
            subject: 'Merci pour votre message !',
            htmlContent: `
        <p>Bonjour ${name},</p>
        <p>Merci pour votre message. Je l’ai bien reçu et je vous répondrai dans les plus brefs délais.</p>
        <p>Voici un rappel de votre message :</p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 1rem; color: #555;">
            ${message.replace(/\n/g, '<br/>')}
        </blockquote>
        <p style="margin-top: 2rem;">Cordialement,</p>
        <p><strong>Pierre Tondeux</strong><br/>
        Développeur Full Stack en alternance<br/>
        📱 06 64 19 94 27<br/>
        📧 pierre.tondeux@gmail.com<br/>
        🌐 <a href="https://alternance.ptdx.fr/">alternance.ptdx.fr</a>
        </p>
    `,
        };

        const res2 = await fetch('https://api.brevo.com/v3/smtp/email', {
            method: 'POST',
            headers,
            body: JSON.stringify(payloadToSender),
        });

        if (!res2.ok) {
            const errorText = await res2.text();
            console.error('❌ Erreur envoi au client :', errorText);
            // Pas besoin de bloquer si cette partie échoue
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error('Erreur serveur /api/contact:', error);
        return NextResponse.json({ error: 'Erreur interne du serveur.' }, { status: 500 });
    }
}