import { z } from 'zod';
import nodemailer from 'nodemailer';
import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from '@/server/api/trpc';

export const emailRouter = createTRPCRouter({
  contact: publicProcedure
    .input(
      z.object({
        name: z.string(),
        email: z.string(),
        phone: z.string(),
        services: z.string(),
      })
    )
    .mutation(async ({ input }) => {

      try {
        const { name, email, phone, services } = input;

        const transporter = nodemailer.createTransport({
          name: 'My-Webpage',
          host: process.env.CONTACT_FORM_HOST,
          port: 465,
          secure: true,
          auth: {
            user: process.env.CONTACT_FORM_SEND_EMAIL,
            pass: process.env.CONTACT_FORM_PASS,
          },
        });

        console.log(transporter);

        transporter.verify(function (error, success) {
          if (error) {
            console.log(error);
            return;
          } else {
            console.log('Server is ready to take our messages');
          }
        });

        const clientMail = await transporter.sendMail({
          from: process.env.CONTACT_FORM_SEND_EMAIL,
          to: `${name} ${email}`,
          subject: 'Contact | Grand Digits',
          text: `Name: ${name}\nPhone number: ${phone}\nE-mail: ${email}\nService: ${services}\n`,
        });

        console.log('Message sent: %s', clientMail.messageId);

        const ServerMail = await transporter.sendMail({
          from: process.env.CONTACT_FORM_SEND_EMAIL,
          to: `${name} ${process.env.CONTACT_FORM_RECEIVE_EMAIL}`,
          subject: 'Contact | Grand Digits',
          text: `Name: ${name}\nPhone number: ${phone}\nE-mail: ${email}\nService: ${services}\n`,
        });

        console.log('Message sent: %s', ServerMail.messageId);

        return true;
      } catch (err) {
        return false;
      }
    }),
});
