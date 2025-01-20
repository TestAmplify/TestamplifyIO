import { Resend } from 'resend';

const resendApiKey = import.meta.env.VITE_RESEND_API_KEY;
const resend = new Resend(resendApiKey);

export const sendContactEmail = async (data: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    if (!resendApiKey) {
      console.error('Resend API key is missing');
      return { success: false, error: 'API key not configured' };
    }

    console.log('Sending email with data:', { ...data, email: '***' });
    
    const response = await resend.emails.send({
      from: 'TestAmplify <onboarding@resend.dev>',
      to: 'admin@testamplify.io',
      subject: `New Contact Form Submission from ${data.name}`,
      reply_to: data.email,
      text: `
Name: ${data.name}
Email: ${data.email}

Message:
${data.message}
      `,
    });

    console.log('Email sent successfully:', response);
    return { success: true, data: response };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error };
  }
};