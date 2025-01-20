import { useState, useEffect } from 'react';
import { GamepadIcon } from 'lucide-react';
import { fetchGames } from '../api/game';

interface Game {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
  embedCode: string;
}

export function Game() {
  const [games, setGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);

  // Simulated API call - replace with actual API integration
  useEffect(() => {
    async function getGames() {
      const fetchedGames = await fetchGames();
      setGames(fetchedGames);
    }
    getGames();
  }, []);

  return (
    <div>
      {selectedGame ? (
        <div className="fixed inset-0 bg-black z-50 p-4">
          <button
            onClick={() => setSelectedGame(null)}
            className="text-white mb-4"
          >
            Back to Games
          </button>
          <div className="h-full flex items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-2xl font-bold mb-4">{selectedGame.title}</h2>
              <p>{selectedGame.description}</p>
              {/* Render embedCode as HTML */}
              <div
                dangerouslySetInnerHTML={{ __html: selectedGame.embedCode }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {games.map((game) => (
            <div
              key={game.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedGame(game)}
            >
              <img
                src={game.thumbnail}
                alt={game.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <div className="flex items-center gap-2">
                  <GamepadIcon className="h-5 w-5 text-gray-500" />
                  <h3 className="font-semibold">{game.title}</h3>
                </div>
                <p className="text-gray-600 mt-2">{game.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}