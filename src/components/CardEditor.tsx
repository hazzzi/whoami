import React from 'react'
import { useCardStore } from '../store/useCardStore'

export const CardEditor: React.FC = () => {
  const { cardData, setCardData } = useCardStore()

  const handleInputChange = (field: string, value: string) => {
    if (field.startsWith('links.')) {
      const linkField = field.split('.')[1]
      setCardData({
        links: {
          ...cardData.links,
          [linkField]: value
        }
      })
    } else {
      setCardData({ [field]: value })
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">✏️ 명함 편집</h2>
      
      <div className="space-y-4">
        {/* 기본 정보 */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            이름
          </label>
          <input
            type="text"
            value={cardData.name}
            onChange={(e) => handleInputChange('name', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="당신의 이름을 입력하세요"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            직함/역할
          </label>
          <input
            type="text"
            value={cardData.title}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Frontend Engineer"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            소개글
          </label>
          <textarea
            value={cardData.description}
            onChange={(e) => handleInputChange('description', e.target.value)}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="자신을 소개해보세요..."
          />
        </div>

        {/* 링크 섹션 */}
        <div className="border-t pt-4">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">🔗 링크</h3>
          
          <div className="space-y-3">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                GitHub
              </label>
              <input
                type="url"
                value={cardData.links.github || ''}
                onChange={(e) => handleInputChange('links.github', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://github.com/username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                웹사이트
              </label>
              <input
                type="url"
                value={cardData.links.website || ''}
                onChange={(e) => handleInputChange('links.website', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://your-website.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                이메일
              </label>
              <input
                type="email"
                value={cardData.links.email || ''}
                onChange={(e) => handleInputChange('links.email', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="hello@example.com"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Twitter
              </label>
              <input
                type="url"
                value={cardData.links.twitter || ''}
                onChange={(e) => handleInputChange('links.twitter', e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://twitter.com/username"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 