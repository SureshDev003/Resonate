import { useState, useEffect } from 'react';
// import { Video as VideoIcon } from 'lucide-react';
import { fetchVideos } from '../api/video';

interface Video {
  id: string;
  title: string;
  embedCode: string;
}

export function Video() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

  // Simulated API call - replace with actual API integration
  useEffect(() => {
    async function getVideos() {
      const fetchedVideos = await fetchVideos();
      setVideos(fetchedVideos);
    }
    getVideos();
  }, []);

  return (
    <div>
      {selectedVideo ? (
        <div className="fixed inset-0 bg-black z-50 p-4">
          <button
            onClick={() => setSelectedVideo(null)}
            className="text-white mb-4"
          >
            Back to Videos
          </button>
          <div className="h-full flex items-center justify-center">
            <div className="text-white text-center">
              <h2 className="text-2xl font-bold mb-4">{selectedVideo.title}</h2>
              {/* <p>{selectedVideo.description}</p> */}
              {/* Add video player component here */}
              <div
                dangerouslySetInnerHTML={{ __html: selectedVideo.embedCode }}
              ></div>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {videos.map((video) => (
            <div
              key={video.id}
              className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
              onClick={() => setSelectedVideo(video)}
            >
              {/* <img
                // src={video.thumbnail}
                alt={video.title}
                className="w-full h-48 object-cover"
              /> */}
              <div>
                <div className="flex items-center gap-2">
                  {/* <VideoIcon className="h-5 w-5 text-gray-500" /> */}
                  <div
                    dangerouslySetInnerHTML={{ __html: video.embedCode }}
                  ></div>
                  <h3 className="font-semibold">{video.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}