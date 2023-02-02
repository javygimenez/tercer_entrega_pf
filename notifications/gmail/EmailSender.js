require('dotenv').config();
const {log, logError, logWarn} = require('../../config/log.js')
const {createTransport} = require('nodemailer');


const transporter = createTransport({
    service: "gmail",
    port: 587,
    auth: {
        user: process.env.GMAIL_ACCOUNT,
        pass: process.env.GMAIL_PASSWORD
    }
});

const gmailOptions = (emailSubject, htmlTemplate) => {
    return {
        from: process.env.GMAIL_ACCOUNT,
        to: process.env.GMAIL_ACCOUNT,
        subject: emailSubject,
        html: htmlTemplate
    }
}

const htmlNewUserTemplate = (id, date) => {
    return `
    <h2>¡Nuevo usuario Creado!</h2>
    <p>Se ha creado un nuevo usuario a través de la API</p>
    <ul>
        <li><strong>UUID:</strong> ${id}</li>
        <li><strong>FECHA:</strong> ${date}</li>
    </ul>
    `
};

const sendGmail = async (subject, htmlTemplate) =>{
    try {
        const mailOptions = gmailOptions(
            subject,
            htmlTemplate
        );
        
        await transporter.sendMail(mailOptions);
        log.info(`Email sent`)
    } catch (error) {
        logError.error(error);
    }
}

module.exports = { htmlNewUserTemplate, sendGmail };