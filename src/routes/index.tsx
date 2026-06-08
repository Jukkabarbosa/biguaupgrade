import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({ 
  component: HomePage,
})

function HomePage() {
  const [files, setFiles] = useState<{ name: string; url: string }[]>([])

  useEffect(() => {
    const assetFiles = [
      { name: 'news-accident.jpg', url: '/src/assets/news-accident.jpg' },
      { name: 'news-festival.jpg', url: '/src/assets/news-festival.jpg' },
      { name: 'news-fire.jpg', url: '/src/assets/news-fire.jpg' },
      { name: 'news-lages.jpg', url: '/src/assets/news-lages.jpg' },
      { name: 'news-police.jpg', url: '/src/assets/news-police.jpg' },
      { name: 'news-politics.jpg', url: '/src/assets/news-politics.jpg' },
      { name: 'news-sports.jpg', url: '/src/assets/news-sports.jpg' },
    ]
    setFiles(assetFiles)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-white mb-2">Bigua Upgrade</h1>
        <p className="text-slate-400 mb-8">📁 Galeria de Arquivos</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.map((file) => (
            <div
              key={file.name}
              className="bg-slate-700 rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="aspect-video bg-slate-600 flex items-center justify-center">
                <img
                  src={file.url}
                  alt={file.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.src = 'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3Crect fill="%23475569" width="400" height="300"/%3E%3Ctext x="50%25" y="50%25" dominant-baseline="middle" text-anchor="middle" font-family="Arial" font-size="20" fill="%239ca3af"%3EImagem não carregada%3C/text%3E%3C/svg%3E'
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-white font-semibold truncate">{file.name}</h3>
                <p className="text-slate-400 text-sm mb-3">JPG Image</p>
                <a
                  href={file.url}
                  download
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded text-sm transition-colors"
                >
                  📥 Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
