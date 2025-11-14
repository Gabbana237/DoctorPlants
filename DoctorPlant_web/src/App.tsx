import { useState } from "react"
import reactLogo from "./assets/react.svg"
import viteLogo from "/vite.svg"

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
      {/* Logos */}
      <div className="flex gap-8 mb-8">
        <a href="https://vite.dev" target="_blank">
          <img
            src={viteLogo}
            alt="Vite logo"
            className="h-16 w-16 hover:drop-shadow-lg transition-transform hover:scale-110"
          />
        </a>

        <a href="https://react.dev" target="_blank">
          <img
            src={reactLogo}
            alt="React logo"
            className="h-16 w-16 animate-spin-slow hover:drop-shadow-lg transition-transform hover:scale-110"
          />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold mb-6">Vite + React</h1>

      {/* Card */}
      <div className="bg-gray-800 border border-gray-700 rounded-xl p-6 shadow-xl text-center">
        <button
          onClick={() => setCount((c) => c + 1)}
          className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg font-semibold transition"
        >
          count is {count}
        </button>

        <p className="mt-4 text-gray-300">
          Edit <code className="text-blue-400">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      {/* Footer */}
      <p className="mt-6 text-gray-400 text-sm">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}
