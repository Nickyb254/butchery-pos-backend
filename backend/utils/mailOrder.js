import nodemailer from 'nodemailer'

const mailOrder = async (option)=>{
//create transporter to send the email
const transport = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: process.env.EMAIL_PORT,
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD
    }
});

    const emailOptions = {
        from: '<bomabutcherycares@gmail.com>',
        to: option.email,
        subject: option.subject,
        text: option.message,
    }

    await transport.mailOrder(emailOptions);
}

export default mailOrder