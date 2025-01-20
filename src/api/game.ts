export interface Game {
    id: string;
    title: string;
    thumbnail: string;
    description: string;
    embedCode: string;
  }
  
  // Simulate API call to fetch game data
const Data: Game[] = [
    {
      id: '1',
      title: 'Summer Maze',
      thumbnail: 'https://source.unsplash.com/300x200/?game,videogame',
      description: 'An exciting adventure game',
      embedCode: '<iframe src="https://www.jopi.com/gam/summer-maze/" frameborder="0" scrolling="no" width="800px" height="600px"></iframe>',
    },
    {
      id: '2',
      title: 'Slope',
      thumbnail: 'https://source.unsplash.com/300x200/?arcade,game',
      description: 'A challenging speed game',
      embedCode: '<iframe src="https://www.jopi.com/embed.php?game=slope" frameborder="0" scrolling="no" width="800" height="600" ></iframe>',
    },
    {
        id: '3',
        title: 'Geometry Dash',
        thumbnail: 'https://source.unsplash.com/300x200/?arcade,game',
        description: 'A challenging geometry game',
        embedCode: '<iframe src="https://www.jopi.com/embed.php?game=geometry-dash" frameborder="0" scrolling="no" width="800" height="600" ></iframe>',
    },
  ];

  export async function fetchGames(): Promise<Game[]> {
    return new Promise((resolve) => {resolve(Data)});
  }
  