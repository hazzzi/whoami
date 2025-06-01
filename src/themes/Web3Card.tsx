import React from 'react'
import { CardData } from '../store/useCardStore'

interface Web3CardProps {
  data: CardData
}

export const Web3Card: React.FC<Web3CardProps> = ({ data }) => {
  return (
    <div className="bg-black border-2 border-purple-500 rounded-lg p-6 font-mono text-green-400 shadow-2xl max-w-md relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-rainbow opacity-20 animate-pulse"></div>
      
      {/* Matrix Effect */}
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-transparent via-green-400 to-transparent animate-pulse"></div>
      
      <div className="relative z-10">
        {/* Header */}
        <div className="mb-6 text-center">
          <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 mb-2">
            {data.name}
          </div>
          <div className="text-purple-300">{data.title}</div>
          <div className="text-xs text-gray-500 mt-1">
            👾 Web3 Hacker 🔗 Blockchain Native
          </div>
        </div>

        {/* System Info */}
        <div className="mb-4 text-xs">
          <div className="text-cyan-400">System Status: ONLINE</div>
          <div className="text-green-400">Encryption: AES-256</div>
          <div className="text-purple-400">Network: Decentralized</div>
        </div>

        {/* Bio Section */}
        <div className="mb-4">
          <div className="text-cyan-400 text-sm mb-2">
            {'>'} cat profile.bio
          </div>
          <div className="text-gray-300 text-sm whitespace-pre-line pl-4 border-l-2 border-purple-500">
            {data.description}
          </div>
        </div>

        {/* Wallet Addresses / Links */}
        <div className="mb-4">
          <div className="text-cyan-400 text-sm mb-2">
            {'>'} ls -la /connections/
          </div>
          <div className="space-y-1 text-xs">
            {data.links.github && (
              <div className="flex items-center">
                <span className="text-purple-400">💜</span>
                <span className="ml-2 text-gray-300">github:</span>
                <span className="ml-2 text-green-400">{data.links.github}</span>
              </div>
            )}
            {data.links.website && (
              <div className="flex items-center">
                <span className="text-cyan-400">🌐</span>
                <span className="ml-2 text-gray-300">website:</span>
                <span className="ml-2 text-green-400">{data.links.website}</span>
              </div>
            )}
            {data.links.email && (
              <div className="flex items-center">
                <span className="text-yellow-400">📡</span>
                <span className="ml-2 text-gray-300">contact:</span>
                <span className="ml-2 text-green-400">{data.links.email}</span>
              </div>
            )}
          </div>
        </div>

        {/* Hash Footer */}
        <div className="text-center pt-4 border-t border-purple-500">
          <div className="text-xs text-gray-500">
            Hash: 0x{Math.random().toString(16).substr(2, 8)}...
          </div>
          <div className="text-xs text-purple-400 mt-1">
            🔐 Secured by Blockchain Technology
          </div>
        </div>

        {/* Glitch Effect */}
        <div className="absolute bottom-2 right-2 text-xs text-cyan-400 animate-pulse">
          {'>'} _
        </div>
      </div>
    </div>
  )
} 