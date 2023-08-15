import nodemailer from 'nodemailer';
import User from '../models/userSchema';
import bcryptjs from "bcryptjs";

export const sendmail = async ({ email, emailType, userId }) => {
    try {
        // create a hashed token
        const hashedToken = bcryptjs.hash(userId.toString(), 10)

        if (emailType === "VERIFY") {
            await User.findByIdAndUpdate(userId, {
                verifyToken: hashedToken,
                verifyTokenExpiry: Date.now() + 3600000,
            })
        } else if (emailType = 'RESET') {
            await User.findByIdAndUpdate(userId, {
                forgotPasswordToken: hashedToken,
                forgotPasswordTokenExpiry: Date.now() + 3600000,
            })
        }

        // create a transporter
        var transport = nodemailer.createTransport({
            host: "sandbox.smtp.mailtrap.io",
            port: 2525,
            auth: {
              user: process.env.MAIL_USER,
              pass: process.env.MAIL_USER_PASSWORD
            }
          });
        
        // mail body
        const mailOptions = {
            from: 'yashvdkd@gmail.com',
            to: email,
            subject: emailType === 'VERIFY' ? "Verify your email" : "Reset your password",
            html: `<p>Click <a href="${process.env.DOMAIN}/verifyemail?token=${hashedToken}">here</a> to ${emailType === "VERIFY" ? "verify your email" : "reset your password"}</p>`
        }

        // send email
        const mailresponse = await transport.sendMail(mailOptions);
        
        return mailresponse;
    } catch (error) {
        throw new Error(error.message);
    }
}