import emailjs from '@emailjs/browser';

// EmailJS configuration
const SERVICE_ID = 'service_6hpopna';
const TEMPLATE_ID = 'template_o3no75e';
const PUBLIC_KEY = 'bhRZBygt_Zd2C94EaLbr7';

// Initialize EmailJS
emailjs.init(PUBLIC_KEY);

interface EmailData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export async function sendEmail(data: EmailData): Promise<void> {
  try {
    const templateParams = {
      from_name: data.name,
      from_email: data.email,
      subject: data.subject,
      message: data.message,
    };

    const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams);
    
    if (response.status !== 200) {
      throw new Error('Failed to send email');
    }
  } catch (error) {
    console.error('EmailJS Error:', error);
    throw new Error('Failed to send email. Please try again.');
  }
}
