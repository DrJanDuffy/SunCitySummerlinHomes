
import { NextApiRequest, NextApiResponse } from 'next';
import { execSync } from 'child_process';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Get Node.js version
    const nodeVersion = process.version;
    
    // Get last build time from filesystem
    let lastBuild = 'Unknown';
    try {
      // Get last modification time of the .next directory
      const stats = execSync('stat -c %y .next 2>/dev/null || echo "Not built yet"').toString().trim();
      lastBuild = stats;
    } catch (error) {
      console.error('Failed to get build time:', error);
    }
    
    res.status(200).json({
      nodeVersion,
      lastBuild,
      uptime: process.uptime(),
      environment: process.env.NODE_ENV || 'development'
    });
  } catch (error) {
    console.error('Error in system-info API:', error);
    res.status(500).json({ error: 'Failed to get system information' });
  }
}
