import React , { useRef, useState } from 'react'
import audioSource from '../assets/audio.mp3'
import videoSource from '../assets/video.mp4'

const Question10 = () => {
    // const [audioSource, setAudioSource] = useState('');
    // const [videoSource, setVideoSource] = useState('');
    const audioRef = useRef(null);
    const videoRef = useRef(null);
  
    const handleAudioChange = (event) => {
      setAudioSource(event.target.value);
    };
  
    const handleVideoChange = (event) => {
      setVideoSource(event.target.value);
    };
  
    return (
      <div>
        <h2>Media Player</h2>
        <div>
          <h3>Audio Player</h3>
          <input
            type="text"
            value={audioSource}
            onChange={handleAudioChange}
            placeholder="Enter audio source URL"
            className="border border-gray-400 p-2 mb-2"
          />
          <audio ref={audioRef} controls>
            <source src={audioSource} type="audio/mpeg" />
          </audio>
        </div>
        <div>
          <h3>Video Player</h3>
          <input
            type="text"
            value={videoSource}
            onChange={handleVideoChange}
            placeholder="Enter video source URL"
            className="border border-gray-400 p-2 mb-2"
          />
          <video ref={videoRef} width={200} height={200} controls>
            <source src={videoSource} type="video/mp4" />
          </video>
        </div>
      </div>
    );
}

export default Question10