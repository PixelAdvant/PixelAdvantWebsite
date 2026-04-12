const nodemailer = require('nodemailer')

// Reusable transporter – mirrors the Django SMTP config in pixel_advant_be:
//   EMAIL_HOST = smtp.gmail.com, PORT = 587, TLS = true
//   EMAIL_HOST_USER = pixeladvant@gmail.com
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST || 'smtp.gmail.com',
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false,   // STARTTLS on port 587
    auth: {
        user: process.env.EMAIL_HOST_USER,
        pass: process.env.EMAIL_HOST_PASSWORD,
    },
})

const DEFAULT_FROM = process.env.EMAIL_FROM
    || process.env.EMAIL_HOST_USER
    || 'pixeladvant@gmail.com'

/**
 * Send an email via the configured SMTP transport.
 * @param {object} opts
 * @param {string|string[]} opts.to        – recipient(s)
 * @param {string}          opts.subject
 * @param {string}          opts.text      – plain-text body
 * @param {string}          [opts.html]    – HTML body (optional)
 * @param {string|string[]} [opts.cc]      – CC address(es) (optional)
 */
async function sendMail({ to, subject, text, html, cc }) {
    const message = {
        from: DEFAULT_FROM,
        to,
        subject,
        text,
    }
    if (html) message.html = html
    if (cc)   message.cc  = cc

    return transporter.sendMail(message)
}

/**
 * Send the admin notification when a new contact form is submitted.
 * Mirrors the Django send_mail pattern used in views.py.
 */
async function sendContactNotification({ name, email, phone, company, subject, message }) {
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL
        || process.env.EMAIL_HOST_USER
        || 'pixeladvant@gmail.com'

    const mailSubject = subject || `New Contact Form Submission from ${name}`

    const text = [
        `New contact form submission received on the PixelAdvant website.`,
        ``,
        `Name:    ${name}`,
        `Email:   ${email}`,
        `Phone:   ${phone || 'Not provided'}`,
        `Company: ${company || 'Not provided'}`,
        ``,
        `Message:`,
        message,
    ].join('\n')

    const html = `
        <h2 style="color:#5b47e0;">New Contact Form Submission</h2>
        <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px;">
            <tr><td><strong>Name</strong></td><td>${name}</td></tr>
            <tr><td><strong>Email</strong></td><td><a href="mailto:${email}">${email}</a></td></tr>
            <tr><td><strong>Phone</strong></td><td>${phone || 'Not provided'}</td></tr>
            <tr><td><strong>Company</strong></td><td>${company || 'Not provided'}</td></tr>
        </table>
        <h3 style="margin-top:16px;">Message</h3>
        <p style="font-family:sans-serif;font-size:14px;line-height:1.6;">${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p style="font-size:12px;color:#999;">Submitted via pixeladvant.com contact form</p>
    `

    // Notify admin, CC the sender so they have a record
    await sendMail({
        to: adminEmail,
        cc: email,
        subject: mailSubject,
        text,
        html,
    })
}

/**
 * Send a confirmation email to the person who filled the form.
 * Mirrors the "Form invite sent successfully" pattern from views.py.
 */
async function sendContactConfirmation({ name, email }) {
    const text = [
        `Hi ${name},`,
        ``,
        `Thank you for reaching out to PixelAdvant!`,
        `We have received your message and our team will get back to you`,
        `within 1–2 business days.`,
        ``,
        `In the meantime, feel free to explore our website:`,
        `https://www.pixeladvant.com`,
        ``,
        `Support Hours: Mon–Fri  9:00 AM – 5:00 PM IST  (*Excludes Holidays)`,
        ``,
        `Best regards,`,
        `The PixelAdvant Team`,
    ].join('\n')

    const html = `
        <div style="font-family:sans-serif;font-size:14px;line-height:1.7;color:#333;">
            <h2 style="color:#5b47e0;">Thank you for contacting PixelAdvant!</h2>
            <p>Hi <strong>${name}</strong>,</p>
            <p>We have received your message and our team will get back to you within <strong>1–2 business days</strong>.</p>
            <p>In the meantime, feel free to explore our website:
                <a href="https://www.pixeladvant.com">www.pixeladvant.com</a>
            </p>
            <p style="color:#666;font-size:12px;">Support Hours: Mon–Fri  9:00 AM – 5:00 PM IST  (*Excludes Holidays)</p>
            <hr style="border:none;border-top:1px solid #eee;margin:20px 0;">
            <p style="font-size:12px;color:#999;">Best regards,<br>The PixelAdvant Team</p>
        </div>
    `

    await sendMail({ to: email, subject: 'We received your message – PixelAdvant', text, html })
}

module.exports = { sendMail, sendContactNotification, sendContactConfirmation }
