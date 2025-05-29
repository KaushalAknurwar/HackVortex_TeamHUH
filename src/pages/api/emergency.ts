import { Twilio } from 'twilio';
import type { Request, Response } from 'express';

const twilio = new Twilio(
	'YOUR_ACCOUNT_SID',
	'YOUR_AUTH_TOKEN'
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
			'YOUR_TWILLIO_VIRTUAL_NUMBER'
		];

		// Send SMS to all recipients
		const smsPromises = recipients.map(to => 
			twilio.messages.create({
				body: messageBody,
				from: 'YOUR_TWILLIO_VIRTUAL_NUMBER',
				to
			})
		);
		const smsMessages = await Promise.all(smsPromises);

		// Send WhatsApp to all recipients
		const whatsappPromises = recipients.map(to => 
			twilio.messages.create({
				body: messageBody,
				from: 'whatsapp:YOUR_TWILLIO_VIRTUAL_NUMBER',
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
