import React from 'react'
import { CardData } from '../store/useCardStore'

interface NotionCardProps {
  data: CardData
}

export const NotionCard: React.FC<NotionCardProps> = ({ data }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-8 font-notion shadow-lg max-w-md">
      {/* Notion Header */}
      <div className="mb-6">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center text-white text-xl font-bold">
            {data.name.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="text-2xl font-bold text-notion-gray">{data.name}</h1>
            <p className="text-gray-600">{data.title}</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-notion-gray mb-3 flex items-center">
          <span className="mr-2">📝</span>
          About
        </h2>
        <div className="text-gray-700 whitespace-pre-line leading-relaxed">
          {data.description}
        </div>
      </div>

      {/* Links Section */}
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-notion-gray mb-3 flex items-center">
          <span className="mr-2">🔗</span>
          Links
        </h2>
        <div className="space-y-2">
          {data.links.github && (
            <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors">
              <span className="mr-3">🐙</span>
              <a href={data.links.github} className="text-blue-600 hover:underline">
                GitHub
              </a>
            </div>
          )}
          {data.links.website && (
            <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors">
              <span className="mr-3">🌐</span>
              <a href={data.links.website} className="text-blue-600 hover:underline">
                Website
              </a>
            </div>
          )}
          {data.links.email && (
            <div className="flex items-center p-2 hover:bg-gray-50 rounded-md transition-colors">
              <span className="mr-3">✉️</span>
              <a href={`mailto:${data.links.email}`} className="text-blue-600 hover:underline">
                Email
              </a>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <div className="text-xs text-gray-400 text-center pt-4 border-t border-gray-100">
        Made with 💚 in Notion style
      </div>
    </div>
  )
} 