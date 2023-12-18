// import nodemailer from 'nodemailer';

// const transporter = nodemailer.createTransport({
//   service: 'gmail',
//   auth: {
//     user: '',
//     pass: '',
//   },
// });

// const sendEmail = async (to: string, subject: string, html: string) => {
//   try {
//     await transporter.sendMail({
//       from: '',
//       to,
//       subject,
//       html,
//     });
//     console.log('Email sent successfully');
//   } catch (error) {
//     console.error('Error sending email:', error);
//   }
// };

// export default sendEmail;
// SendGrid

import axios, { AxiosError } from 'axios';
import fs from 'fs';

const EmailServiceBaseUrl = ''; // Todo Api url
const SendGridApiKey = '';

const $SendEmailHttp = axios.create({
  baseURL: EmailServiceBaseUrl,
  headers: {
    Authorization: `Bearer ${SendGridApiKey}`,
    'Content-Type': 'application/json',
  },
});
// add path to html file

const htmlTemplate = fs.readFileSync('/', 'utf-8');

export const sendTicketEmail = async (email: string, ticketDetails: any) => {
  try {
    const formattedHtml = htmlTemplate
      .replace('${event}', ticketDetails.event)
      .replace('${date}', ticketDetails.date)
      .replace('${ticketNumber}', ticketDetails.ticketNumber);

    const res = await $SendEmailHttp.post('/send-ticket-email', {
      email,
      subject: 'Your Event Ticket',
      html: formattedHtml,
    });

    if (res?.status === 200) {
      console.log('Ticket email sent successfully!');
    }
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error);
    } else {
      console.error('Error sending ticket email:', error);
    }
    throw (error as AxiosError)?.response?.data || { message: error.message };
  }
};
