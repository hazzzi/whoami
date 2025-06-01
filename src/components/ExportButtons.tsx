import React, { useState } from 'react'
import { useCardStore } from '../store/useCardStore'
import { downloadCardAsPNG, downloadCardAsJPG } from '../utils/downloadUtils'

export const ExportButtons: React.FC = () => {
  const { cardData } = useCardStore()
  const [isDownloading, setIsDownloading] = useState(false)
  const [downloadSuccess, setDownloadSuccess] = useState<string>('')

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

  const handleDownloadPNG = async () => {
    setIsDownloading(true)
    try {
      const filename = `${cardData.name.replace(/\s+/g, '-')}-whoami-card`
      await downloadCardAsPNG('card-preview', filename)
      setDownloadSuccess('PNG')
      setTimeout(() => setDownloadSuccess(''), 3000)
    } catch (error) {
      console.error('PNG 다운로드 실패:', error)
      alert('PNG 다운로드에 실패했습니다. 다시 시도해주세요.')
    } finally {
      setIsDownloading(false)
    }
  }

  const handleDownloadJPG = async () => {
    setIsDownloading(true)
    try {
      const filename = `${cardData.name.replace(/\s+/g, '-')}-whoami-card`
      await downloadCardAsJPG('card-preview', filename)
      setDownloadSuccess('JPG')
      setTimeout(() => setDownloadSuccess(''), 3000)
    } catch (error) {
      console.error('JPG 다운로드 실패:', error)
      alert('JPG 다운로드에 실패했습니다. 다시 시도해주세요.')
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-md">
      <h2 className="text-xl font-bold mb-4 text-gray-800">📋 내보내기</h2>
      
      <div className="space-y-3">
        {/* 이미지 다운로드 섹션 */}
        <div className="border-b pb-3 mb-3">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">🖼️ 이미지 다운로드</h3>
          <div className="grid grid-cols-2 gap-2">
            <button
              onClick={handleDownloadPNG}
              disabled={isDownloading}
              className={`flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm transition-colors ${
                downloadSuccess === 'PNG'
                  ? 'bg-green-500 text-white'
                  : isDownloading
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-pink-500 text-white hover:bg-pink-600'
              }`}
            >
              <span>🖼️</span>
              <span>
                {isDownloading ? '처리중...' : downloadSuccess === 'PNG' ? '완료!' : 'PNG'}
              </span>
            </button>
            
            <button
              onClick={handleDownloadJPG}
              disabled={isDownloading}
              className={`flex items-center justify-center gap-1 px-3 py-2 rounded-lg text-sm transition-colors ${
                downloadSuccess === 'JPG'
                  ? 'bg-green-500 text-white'
                  : isDownloading
                  ? 'bg-gray-400 text-white cursor-not-allowed'
                  : 'bg-orange-500 text-white hover:bg-orange-600'
              }`}
            >
              <span>📸</span>
              <span>
                {isDownloading ? '처리중...' : downloadSuccess === 'JPG' ? '완료!' : 'JPG'}
              </span>
            </button>
          </div>
        </div>

        {/* 텍스트 복사 섹션 */}
        <div>
          <h3 className="text-sm font-semibold text-gray-700 mb-2">📝 텍스트 복사</h3>
          <div className="space-y-2">
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
          </div>
        </div>
      </div>

      <div className="mt-4 p-3 bg-gray-50 rounded-md">
        <div className="text-sm text-gray-600">
          💡 <strong>팁:</strong>
          <ul className="mt-1 space-y-1 text-xs">
            <li>• PNG: 투명 배경, 높은 품질</li>
            <li>• JPG: 흰색 배경, 작은 용량</li>
            <li>• 텍스트는 GitHub README, SNS 등에 활용</li>
          </ul>
        </div>
      </div>
    </div>
  )
} 