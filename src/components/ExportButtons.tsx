import React from 'react'
import { useCardStore } from '../store/useCardStore'

export const ExportButtons: React.FC = () => {
  const { cardData } = useCardStore()

  const generateMarkdown = () => {
    return `# ${cardData.name}

**${cardData.title}**

${cardData.description}

## 🔗 Links

${cardData.links.github ? `- **GitHub:** ${cardData.links.github}` : ''}
${cardData.links.website ? `- **Website:** ${cardData.links.website}` : ''}
${cardData.links.email ? `- **Email:** ${cardData.links.email}` : ''}
${cardData.links.twitter ? `- **Twitter:** ${cardData.links.twitter}` : ''}

---
*Generated with whoami 🧑‍💻*`
  }

  const generatePlainText = () => {
    return `$ whoami
> ${cardData.name}
> ${cardData.title}

$ cat about.txt
${cardData.description}

$ ls -la links/
${cardData.links.github ? `📁 github    ${cardData.links.github}` : ''}
${cardData.links.website ? `📁 website   ${cardData.links.website}` : ''}
${cardData.links.email ? `📁 email     ${cardData.links.email}` : ''}
${cardData.links.twitter ? `📁 twitter   ${cardData.links.twitter}` : ''}

$ _`
  }

  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text)
      alert(`${type} 형식으로 클립보드에 복사되었습니다! 🎉`)
    } catch (err) {
      console.error('복사 실패:', err)
      alert('복사에 실패했습니다. 다시 시도해주세요.')
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">📋 내보내기</h2>
      
      <div className="space-y-3">
        <button
          onClick={() => copyToClipboard(generateMarkdown(), 'Markdown')}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <span>📝</span>
          <span>Markdown으로 복사</span>
        </button>

        <button
          onClick={() => copyToClipboard(generatePlainText(), 'Terminal')}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <span>💻</span>
          <span>Terminal 스타일로 복사</span>
        </button>

        <button
          onClick={() => {
            const url = window.location.href
            copyToClipboard(url, 'URL')
          }}
          className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors"
        >
          <span>🔗</span>
          <span>URL 복사</span>
        </button>
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded-md">
        <div className="text-sm text-gray-600">
          💡 복사된 내용을 GitHub README, Discord, Twitter 등 어디든 붙여넣기 할 수 있어요!
        </div>
      </div>
    </div>
  )
} 