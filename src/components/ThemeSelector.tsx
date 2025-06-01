import React from 'react'
import { useCardStore, CardData } from '../store/useCardStore'

const themes: Array<{
  id: CardData['theme']
  name: string
  description: string
  icon: string
}> = [
  {
    id: 'terminal',
    name: 'Terminal',
    description: '해커 감성의 터미널 스타일',
    icon: '💻'
  },
  {
    id: 'notion',
    name: 'Notion',
    description: '깔끔한 노션 문서 스타일',
    icon: '📝'
  },
  {
    id: 'vscode',
    name: 'VSCode',
    description: '개발자를 위한 VSCode 스타일',
    icon: '👨‍💻'
  },
  {
    id: 'web3',
    name: 'Web3',
    description: '미래지향적 블록체인 스타일',
    icon: '🔗'
  }
]

export const ThemeSelector: React.FC = () => {
  const { cardData, setTheme } = useCardStore()

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">🎨 테마 선택</h2>
      
      <div className="grid grid-cols-2 gap-3">
        {themes.map((theme) => (
          <button
            key={theme.id}
            onClick={() => setTheme(theme.id)}
            className={`p-4 rounded-lg border-2 transition-all duration-200 hover:scale-105 ${
              cardData.theme === theme.id
                ? 'border-blue-500 bg-blue-50 shadow-md'
                : 'border-gray-200 hover:border-gray-300'
            }`}
          >
            <div className="text-center">
              <div className="text-2xl mb-2">{theme.icon}</div>
              <div className="font-semibold text-gray-800">{theme.name}</div>
              <div className="text-xs text-gray-600 mt-1">{theme.description}</div>
            </div>
          </button>
        ))}
      </div>
      
      <div className="mt-4 p-3 bg-gray-50 rounded-md">
        <div className="text-sm text-gray-600">
          💡 <strong>팁:</strong> 각 테마를 클릭해서 다양한 스타일을 체험해보세요!
        </div>
      </div>
    </div>
  )
} 