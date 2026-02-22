import emailjs from '@emailjs/browser';

// Initialize EmailJS
// To set this up:
// 1. Sign up at https://www.emailjs.com/
// 2. Create a new service for Gmail
// 3. Create email templates for each form type
// 4. Replace SERVICE_ID and PUBLIC_KEY below with your credentials

const SERVICE_ID = 'service_pixeladvant'; // Replace with your EmailJS Service ID
const PUBLIC_KEY = 'h3q4k5j6m7n8p9q0r1s2t3u4v5w6x7'; // Replace with your EmailJS Public Key
const ADMIN_EMAIL = 'sonu.rahul4evr@gmail.com';

const TEMPLATE_CLIENT_REQUEST = 'template_client_request';
const TEMPLATE_DEMO_REQUEST = 'template_demo_request';
const TEMPLATE_JOB_APPLICATION = 'template_job_application';
const TEMPLATE_CONFIRMATION = 'template_confirmation';

// Initialize EmailJS with your public key
try {
    emailjs.init(PUBLIC_KEY);
} catch (error) {
    console.warn('EmailJS not properly configured. Please set up EmailJS credentials.');
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  subject: string;
}

export interface DemoRequestData {
  fullName: string;
  email: string;
  phone: string;
  companyName: string;
  serviceInterest: string;
  message?: string;
}

export interface JobApplicationData {
  fullName: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  linkedIn?: string;
  resume: string;
}

// Send Client Request Email
export const sendClientRequestEmail = async (data: ContactFormData) => {
  try {
    const templateParams = {
      to_email: ADMIN_EMAIL,
      from_name: data.name,
      from_email: data.email,
      phone: data.phone || 'Not provided',
      company: data.company || 'Not provided',
      message: data.message,
      subject: data.subject,
      reply_to: data.email,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_CLIENT_REQUEST,
      templateParams
    );

    // Send confirmation email to user
    const userTemplate = {
      to_email: data.email,
      user_name: data.name,
      subject: 'We received your request - PixelAdvant',
    };

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_CONFIRMATION,
      userTemplate
    );

    return response;
  } catch (error) {
    console.error('Error sending client request email:', error);
    throw error;
  }
};

// Send Demo Request Email
export const sendDemoRequestEmail = async (data: DemoRequestData) => {
  try {
    const templateParams = {
      to_email: ADMIN_EMAIL,
      full_name: data.fullName,
      user_email: data.email,
      phone: data.phone,
      company_name: data.companyName,
      service_interest: data.serviceInterest,
      message: data.message || 'No additional message',
      request_type: 'Product Demo Request',
      reply_to: data.email,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_DEMO_REQUEST,
      templateParams
    );

    // Send confirmation email to user
    const userTemplate = {
      to_email: data.email,
      user_name: data.fullName,
      subject: 'Demo Request Confirmation - PixelAdvant',
      request_type: 'Your demo request',
    };

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_CONFIRMATION,
      userTemplate
    );

    return response;
  } catch (error) {
    console.error('Error sending demo request email:', error);
    throw error;
  }
};

// Send Job Application Email
export const sendJobApplicationEmail = async (data: JobApplicationData) => {
  try {
    const templateParams = {
      to_email: ADMIN_EMAIL,
      full_name: data.fullName,
      applicant_email: data.email,
      phone: data.phone,
      position: data.position,
      experience: data.experience,
      linkedin: data.linkedIn || 'Not provided',
      resume: data.resume,
      request_type: 'Job Application',
      reply_to: data.email,
    };

    const response = await emailjs.send(
      SERVICE_ID,
      TEMPLATE_JOB_APPLICATION,
      templateParams
    );

    // Send confirmation email to applicant
    const userTemplate = {
      to_email: data.email,
      user_name: data.fullName,
      subject: 'Application Received - PixelAdvant',
      position: data.position,
    };

    await emailjs.send(
      SERVICE_ID,
      TEMPLATE_CONFIRMATION,
      userTemplate
    );

    return response;
  } catch (error) {
    console.error('Error sending job application email:', error);
    throw error;
  }
};
