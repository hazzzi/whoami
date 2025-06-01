import React from 'react'
import { useCardStore } from './store/useCardStore'
import { TerminalCard } from './themes/TerminalCard'
import { NotionCard } from './themes/NotionCard'
import { VSCodeCard } from './themes/VSCodeCard'
import { Web3Card } from './themes/Web3Card'
import { CardEditor } from './components/CardEditor'
import { ThemeSelector } from './components/ThemeSelector'
import { ExportButtons } from './components/ExportButtons'

function App() {
  const { cardData } = useCardStore()

  const renderCard = () => {
    switch (cardData.theme) {
      case 'terminal':
        return <TerminalCard data={cardData} />
      case 'notion':
        return <NotionCard data={cardData} />
      case 'vscode':
        return <VSCodeCard data={cardData} />
      case 'web3':
        return <Web3Card data={cardData} />
      default:
        return <TerminalCard data={cardData} />
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              🧑‍💻 whoami
            </h1>
            <p className="text-gray-600 text-lg">
              감성 있는 웹 명함 생성기
            </p>
            <p className="text-gray-500 text-sm mt-1">
              "명함 하나에도, 정체성이 담긴다."
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Side - Controls */}
          <div className="space-y-6">
            <CardEditor />
            <ThemeSelector />
            <ExportButtons />
          </div>

          {/* Right Side - Preview */}
          <div className="lg:sticky lg:top-8 lg:self-start">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                ✨ 미리보기
              </h2>
              <p className="text-gray-600">
                실시간으로 변경사항을 확인하세요
              </p>
            </div>
            
            <div className="flex justify-center">
              {renderCard()}
            </div>

            {/* Tips */}
            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h3 className="font-semibold text-blue-800 mb-2">💡 사용 팁</h3>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>• 테마를 바꿔가며 다양한 스타일을 체험해보세요</li>
                <li>• 복사 버튼으로 GitHub README나 SNS에 붙여넣기 가능</li>
                <li>• 이모지를 활용해서 더 감성적으로 꾸며보세요</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t mt-12">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="text-center text-gray-600">
            <p>
              Made with 💚 by{' '}
              <a 
                href="https://github.com" 
                className="text-blue-600 hover:underline"
                target="_blank" 
                rel="noopener noreferrer"
              >
                whoami team
              </a>
            </p>
            <p className="text-sm mt-1">
              오픈소스 프로젝트입니다. GitHub에서 기여해주세요! 🚀
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App 