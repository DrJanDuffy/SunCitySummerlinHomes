
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
import type { NextApiRequest, NextApiResponse } from 'next';
import { version as nextVersion } from 'next/package.json';

interface SystemInfo {
  memory: {
    total: number;
    free: number;
    used: number;
  };
  cpu: {
    usage: number;
  };
  uptime: number;
  nextVersion: string;
  nodeVersion: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<SystemInfo>
) {
  // This is a mock implementation since we can't access real system info in Replit
  // In a real environment, you would use something like os-utils or node-os-utils
  
  const mockMemoryTotal = 8 * 1024 * 1024 * 1024; // 8 GB
  const mockMemoryUsed = Math.random() * 4 * 1024 * 1024 * 1024; // 0-4 GB
  
  const systemInfo: SystemInfo = {
    memory: {
      total: mockMemoryTotal,
      free: mockMemoryTotal - mockMemoryUsed,
      used: mockMemoryUsed
    },
    cpu: {
      usage: Math.random() * 100
    },
    uptime: Math.floor(process.uptime()),
    nextVersion: nextVersion || '12.3.4',
    nodeVersion: process.version
  };

  // Add a small delay to simulate API call
  await new Promise(resolve => setTimeout(resolve, 300));
  
  res.status(200).json(systemInfo);
}
