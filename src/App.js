import "./styles.css";
import VideoThumbnail from "react-video-thumbnail";

export default function App() {
  return (
    <div className="App">
      <h1>Example Thumbnail</h1>
      <VideoThumbnail
        videoUrl="https://dl.dropboxusercontent.com/s/7b21gtvsvicavoh/statue-of-admiral-yi-no-audio.mp4?dl=1"
        thumbnailHandler={(thumbnail) => console.log(thumbnail)}
        width={360}
        height={240}
        snapshotAtTime={1}
      />
    </div>
  );
}
