import { Twilio } from 'twilio';
import type { Request, Response } from 'express';

const twilio = new Twilio(
	'AC0b077a09883015f99d299d3f6b6ec088',
	'73e00921b89734c59507de03d8702110'
);

export default async function handler(req: Request, res: Response) {
	if (req.method !== 'POST') {
		return res.status(405).json({ error: 'Method not allowed' });
	}

	const { name, phone, situation } = req.body;

	try {
		const messageBody = `Your Friend needs help reach out to them asap. Details:\nName: ${name}\nPhone: ${phone}\nSituation: ${situation}`;

		// Recipient numbers
		const recipients = [
			'+918788293663'
		];

		// Send SMS to all recipients
		const smsPromises = recipients.map(to => 
			twilio.messages.create({
				body: messageBody,
				from: '+17753681889',
				to
			})
		);
		const smsMessages = await Promise.all(smsPromises);

		// Send WhatsApp to all recipients
		const whatsappPromises = recipients.map(to => 
			twilio.messages.create({
				body: messageBody,
				from: 'whatsapp:+14155238886',
				to: `whatsapp:${to}`
			})
		);
		const whatsappMessages = await Promise.all(whatsappPromises);

		return res.status(200).json({ 
			success: true, 
			smsMessageIds: smsMessages.map(msg => msg.sid),
			whatsappMessageIds: whatsappMessages.map(msg => msg.sid)
		});
	} catch (error) {
		console.error('Twilio error:', error);
		return res.status(500).json({ error: 'Failed to send emergency notifications' });
	}
}