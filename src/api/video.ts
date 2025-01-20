export interface Video {
    id: string;
    title: string;
    embedCode: string;
}

const Data: Video[] = [
    {
        id: '1',
        title: 'Where do genes come from?',
        embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/1k8craCGpgs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>',
    },
    {
        id: '2',
        title: 'What happens when your DNA is damaged?',
        embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/vP8-5Bhd2ag?si=FZUJrih2tDbo5q1s" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id: '3',
        title: 'How tsunamis work',
        embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/Wx9vPv-T51I?si=6TTwOjF-S88STrvq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    },
    {
        id: '4',
        title: 'Why are earthquakes so hard to predict?',
        embedCode: '<iframe width="560" height="315" src="https://www.youtube.com/embed/jhRuUoTnA6g?si=P7AHhbNFfciX6ywY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>',
    }
]

export async function fetchVideos(): Promise<Video[]> {
    return new Promise((resolve) => {resolve(Data)});
  }