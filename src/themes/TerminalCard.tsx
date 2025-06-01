import React from 'react'
import { CardData } from '../store/useCardStore'

interface TerminalCardProps {
  data: CardData
}

export const TerminalCard: React.FC<TerminalCardProps> = ({ data }) => {
  return (
    <div className="bg-terminal-bg border border-gray-700 rounded-lg p-6 font-mono text-green-400 shadow-2xl max-w-md">
      {/* Terminal Header */}
      <div className="flex items-center gap-2 mb-4 pb-2 border-b border-gray-700">
        <div className="flex gap-1">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="text-gray-400 text-sm ml-2">terminal</span>
      </div>

      {/* Terminal Content */}
      <div className="space-y-2">
        <div className="flex">
          <span className="text-terminal-green">$</span>
          <span className="ml-2 typing-effect">whoami</span>
        </div>
        
        <div className="text-white">
          <div className="text-xl font-bold">{data.name}</div>
          <div className="text-terminal-green">{data.title}</div>
        </div>

        <div className="mt-4">
          <span className="text-terminal-green">$</span>
          <span className="ml-2">cat about.txt</span>
        </div>
        
        <div className="text-gray-300 whitespace-pre-line pl-4">
          {data.description}
        </div>

        <div className="mt-4">
          <span className="text-terminal-green">$</span>
          <span className="ml-2">ls -la links/</span>
        </div>
        
        <div className="pl-4 space-y-1">
          {data.links.github && (
            <div className="flex items-center">
              <span className="text-blue-400">📁 github</span>
              <span className="ml-2 text-gray-300">{data.links.github}</span>
            </div>
          )}
          {data.links.website && (
            <div className="flex items-center">
              <span className="text-blue-400">📁 website</span>
              <span className="ml-2 text-gray-300">{data.links.website}</span>
            </div>
          )}
          {data.links.email && (
            <div className="flex items-center">
              <span className="text-blue-400">📁 email</span>
              <span className="ml-2 text-gray-300">{data.links.email}</span>
            </div>
          )}
        </div>

        <div className="mt-4 flex items-center">
          <span className="text-terminal-green">$</span>
          <span className="ml-2 animate-pulse">_</span>
        </div>
      </div>
    </div>
  )
} 