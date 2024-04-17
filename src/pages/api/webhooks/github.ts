import type { NextApiRequest, NextApiResponse } from 'next';

async function sendToDiscordWebhook(message: string) {
  const webhookUrl =
    'https://discord.com/api/webhooks/1230077411354476565/JM4tFZJUpupnp1L-gdozsBtbLJ84061XJiTLfexezZONiThOjt6uJuh7u7jzb_Rc0hSo/github';

  try {
    // eslint-disable-next-line import/no-extraneous-dependencies, global-require
    const axios = require('axios');
    await axios.post(webhookUrl, { content: message });
  } catch (error) {
    //
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  if (req.method === 'POST') {
    const { body } = req;
    const eventType = req.headers['x-github-event'] as string;

    // Handle pull request events
    if (eventType === 'pull_request') {
      const action = body.action as string; // 'opened', 'closed', 'merged'
      const prTitle = body.pull_request.title as string;
      const prUrl = body.pull_request.html_url as string;

      // Notify Discord based on pull request action
      if (action === 'opened') {
        await sendToDiscordWebhook(
          `New pull request opened: ${prTitle} (${prUrl})`,
        );
      } else if (action === 'closed' && body.pull_request.merged) {
        await sendToDiscordWebhook(
          `Pull request merged: ${prTitle} (${prUrl})`,
        );
      }
    }

    // Handle status events (pipeline status changes)
    if (eventType === 'status') {
      const state = body.state as string; // 'success', 'failure'
      const commitUrl = body.target_url as string;

      // Notify Discord based on pipeline status
      if (state === 'success' || state === 'failure') {
        await sendToDiscordWebhook(
          `Pipeline status changed: ${state.toUpperCase()} (${commitUrl})`,
        );
      }
    }

    res.status(200).json({ message: 'Webhook received successfully' });
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
