import type { NextApiRequest, NextApiResponse } from 'next';
import twilio from 'twilio';

const accountSid = 'AC0b077a09883015f99d299d3f6b6ec088';
const authToken = '73e00921b89734c59507de03d8702110';
const client = twilio(accountSid, authToken);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  try {
    const { username, latitude, longitude } = req.body;

    if (!username || !latitude || !longitude) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    const emergencyMessage = `Your Friend needs help reach out to them asap. Location: https://maps.google.com/?q=${latitude},${longitude}`;

    // Recipient numbers
    const recipients = [
      '+918788293663'
    ];

    // Send SMS to all recipients
    const smsPromises = recipients.map(to => 
      client.messages.create({
        body: emergencyMessage,
        from: '+17753681889',
        to
      })
    );
    const smsMessages = await Promise.all(smsPromises);

    // Send WhatsApp to all recipients
    const whatsappPromises = recipients.map(to => 
      client.messages.create({
        body: emergencyMessage,
        from: 'whatsapp:+14155238886',
        to: `whatsapp:${to}`
      })
    );
    const whatsappMessages = await Promise.all(whatsappPromises);

    return res.status(200).json({ 
      message: 'Crisis alerts sent successfully',
      smsMessageIds: smsMessages.map(msg => msg.sid),
      whatsappMessageIds: whatsappMessages.map(msg => msg.sid)
    });
  } catch (error) {
    console.error('Failed to send crisis alerts:', error);
    return res.status(500).json({ message: 'Failed to send crisis alerts' });
  }
} 