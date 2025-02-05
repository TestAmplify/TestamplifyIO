import { Resend } from 'resend';

const resend = new Resend(import.meta.env.VITE_RESEND_API_KEY);

export const sendContactEmail = async (formData: {
  name: string;
  email: string;
  message: string;
}) => {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',  // Use Resend's default sender or your verified domain
      to: [import.meta.env.VITE_TO_EMAIL],    // Your verified recipient email
      subject: `New Contact Form Submission from ${formData.name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${formData.name}</p>
        <p><strong>Email:</strong> ${formData.email}</p>
        <p><strong>Message:</strong> ${formData.message}</p>
      `
    });

    return { success: true, data };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error };
  }
};