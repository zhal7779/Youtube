import React from 'react';
import { useEffect, useState } from 'react';
import './app.css';
import VideoList from './components/video_list/video_list';

function App() {
  const [videos, setVideos] = useState([]);//function컴포넌트에 state를 사용하려면 usestate사용
  useEffect(()=>{//데이터를 받아올때 마운트가 되었거나 업데이트가 될 때 쓸 수 있는 콜백 등록은 useEffect 사용
    const requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    
    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBjbz4cs_RWE0pEtT_rtgC4XOKjJjkVW9M\n",
      requestOptions
      )
      .then(response => response.json())//text가 아닌 json으로 변환해야 작업하기가 편하다
      .then(result => setVideos(result.items))//컴포넌트가 마운트 되면 videos를 받아와서 비동기적으로 setVideos라는 API를 이용해서 데이터를 업데이트 해준다.
      .catch(error => console.log('error', error));
  },[]);//빈배열을 추가로 전달해야 반복적으로 호출되지 않음 
  return <VideoList videos={videos} />;
}

export default App;
