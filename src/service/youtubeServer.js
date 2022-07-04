class Youtube {
    constructor(key) {
        this.key = key;
        this.getRequestOptions = {
            method: 'GET',
            redirect: 'follow'
          };
    }
    async mostPopular() {
          const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=${this.key}\n`,
            this.getRequestOptions
        );
        const result_1 = await response.json();
        return result_1.items;//컴포넌트가 마운트 되면 videos를 받아와서 비동기적으로 setVideos라는 API를 이용해서 데이터를 업데이트 해준다.
    }
    async search(query) {
        const response = await fetch(
            `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${query}&type=video&key=${this.key}\n`,
            this.getRequestOptions
        );
        const result_1 = await response.json();
        return result_1.items.map(item => ({ ...item, id: item.id.videoId }));
    }

}

export default Youtube;