import React from 'react'
import { CardData } from '../store/useCardStore'

interface VSCodeCardProps {
  data: CardData
}

export const VSCodeCard: React.FC<VSCodeCardProps> = ({ data }) => {
  return (
    <div className="bg-vscode-bg border border-gray-700 rounded-lg overflow-hidden shadow-2xl font-mono max-w-lg">
      {/* VSCode Title Bar */}
      <div className="bg-vscode-sidebar flex items-center justify-between px-4 py-2 border-b border-gray-700">
        <div className="flex items-center gap-2">
          <div className="flex gap-1">
            <div className="w-3 h-3 bg-red-500 rounded-full"></div>
            <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
          <span className="text-gray-300 text-sm ml-2">profile.ts</span>
        </div>
        <div className="text-gray-400 text-xs">Visual Studio Code</div>
      </div>

      {/* VSCode Sidebar + Editor */}
      <div className="flex">
        {/* Sidebar */}
        <div className="bg-vscode-sidebar w-12 p-2 border-r border-gray-700">
          <div className="space-y-3 text-gray-400">
            <div className="text-vscode-blue">📁</div>
            <div>🔍</div>
            <div>🎛️</div>
            <div>🐛</div>
          </div>
        </div>

        {/* Editor Content */}
        <div className="flex-1 p-4">
          <div className="text-gray-300 space-y-2">
            {/* Line numbers and code */}
            <div className="flex">
              <span className="text-gray-600 w-6 text-right mr-4">1</span>
              <span className="text-purple-400">interface</span>
              <span className="text-yellow-300 ml-2 mr-2">Developer</span>
              <span className="text-gray-300"> {'{'}</span>
            </div>
            
            <div className="flex">
              <span className="text-gray-600 w-6 text-right mr-4">2</span>
              <span className="text-blue-400 ml-4">name</span>
              <span className="text-gray-300">: </span>
              <span className="text-green-400">"{data.name}"</span>
            </div>
            
            <div className="flex">
              <span className="text-gray-600 w-6 text-right mr-4">3</span>
              <span className="text-blue-400 ml-4">title</span>
              <span className="text-gray-300">: </span>
              <span className="text-green-400">"{data.title}"</span>
            </div>
            
            <div className="flex">
              <span className="text-gray-600 w-6 text-right mr-4">4</span>
              <span className="text-blue-400 ml-4">description</span>
              <span className="text-gray-300">: </span>
              <span className="text-green-400">"{data.description.split('\n')[0]}"</span>
            </div>
            
            <div className="flex">
              <span className="text-gray-600 w-6 text-right mr-4">5</span>
              <span className="text-blue-400 ml-4">skills</span>
              <span className="text-gray-300">: [</span>
            </div>
            
            <div className="flex">
              <span className="text-gray-600 w-6 text-right mr-4">6</span>
              <span className="text-green-400 ml-8">"React"</span>
              <span className="text-gray-300">, </span>
              <span className="text-green-400">"TypeScript"</span>
              <span className="text-gray-300">, </span>
              <span className="text-green-400">"Tailwind"</span>
            </div>
            
            <div className="flex">
              <span className="text-gray-600 w-6 text-right mr-4">7</span>
              <span className="text-gray-300 ml-4">]</span>
            </div>
            
            <div className="flex">
              <span className="text-gray-600 w-6 text-right mr-4">8</span>
              <span className="text-blue-400 ml-4">contact</span>
              <span className="text-gray-300">: {'{'}</span>
            </div>
            
            {data.links.github && (
              <div className="flex">
                <span className="text-gray-600 w-6 text-right mr-4">9</span>
                <span className="text-blue-400 ml-8">github</span>
                <span className="text-gray-300">: </span>
                <span className="text-green-400">"{data.links.github}"</span>
              </div>
            )}
            
            {data.links.website && (
              <div className="flex">
                <span className="text-gray-600 w-6 text-right mr-4">10</span>
                <span className="text-blue-400 ml-8">website</span>
                <span className="text-gray-300">: </span>
                <span className="text-green-400">"{data.links.website}"</span>
              </div>
            )}
            
            <div className="flex">
              <span className="text-gray-600 w-6 text-right mr-4">11</span>
              <span className="text-gray-300 ml-4">{'}'}</span>
            </div>
            
            <div className="flex">
              <span className="text-gray-600 w-6 text-right mr-4">12</span>
              <span className="text-gray-300">{'}'}</span>
            </div>
          </div>

          {/* Status Bar */}
          <div className="mt-6 pt-2 border-t border-gray-700">
            <div className="text-xs text-gray-400 flex justify-between">
              <span>TypeScript React</span>
              <span>UTF-8</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 