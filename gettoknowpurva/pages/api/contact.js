require('dotenv').config()

export default function handler(req, res) {
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: process.env.user,
            pass: process.env.password,
        },
        secure: true,
    })
    const message = req.body.message.toString()
    const maildata = {
        from: req.body.email,
        to: process.env.user,
        subject: req.body.subject,
        text: message,
        html: `<div>${req.body.message}</div><p><b>Sent by: </b>${req.body.name} <br/> <b>Email: </b>${req.body.email}</p>`
    }
    transporter.sendMail(maildata, function (err, info) {
        if (err)
            console.log(err)
        else
            console.log(info)
    })
    res.status(200).json({ message: 'Form data received!' })
}