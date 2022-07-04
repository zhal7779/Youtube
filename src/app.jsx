import React from 'react';
import { useEffect, useState } from 'react';
import styles from'./app.module.css';
import SearchHeader from './components/search_header/search_header';
import VideoList from './components/video_list/video_list';

function App({youtube}) {
  const [videos, setVideos] = useState([]);//function컴포넌트에 state를 사용하려면 usestate사용
  const search = query =>{
    youtube
    .search(query)
    .then(videos => setVideos(videos));
  }
  useEffect(()=>{//데이터를 받아올때 마운트가 되었거나 업데이트가 될 때 쓸 수 있는 콜백 등록은 useEffect 사용
    youtube
    .mostPopular()
    .then(videos => setVideos(videos));
  },[]);//빈배열을 추가로 전달해야 반복적으로 호출되지 않음 
  return (
    <div className={styles.app}>
      <SearchHeader onSearch={search}/>
      <VideoList videos={videos} />;
    </div>
  );
}

export default App;
