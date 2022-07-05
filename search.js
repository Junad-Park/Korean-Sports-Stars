import user from './config.js';

const btn = document.querySelector(".btn");

let channelId;

const listTitle = [];
const listId = [];
const videoId = [];
const koreanTimeTitle = [];
const videoLinks = [];

btn.addEventListener('click', (e) => {
  console.log(e.currentTarget.innerHTML);
  let channelName = e.currentTarget.innerHTML;

  getChannelId(channelName, user.YOUTUBE_API_KEY);
})

// 
function getChannelId(name, APIKey) {
  $.ajax({
    type: "GET",
    url: "https://www.googleapis.com/youtube/v3/search?",
    data: { part: "snippet", key: APIKey, type: "video", q: name },
    success: function (response) {
      channelId = response.items[0].snippet.channelId;
      getChannelLists(channelId, user.YOUTUBE_API_KEY, getVideos);
    },
  });
}

// 해당 채널의 플레이리스트를 가져오는 함수
function getChannelLists(channelId, APIKey) {
  $.ajax({
    type: "GET",
    url: "https://www.googleapis.com/youtube/v3/playlists?",
    data: {
      part: "snippet",
      channelId: channelId,
      key: APIKey,
      type: "playlist",
      maxResults: 100,
    },
    success: function (response) {
      let playListLength = response.pageInfo.totalResults;
      for (let i = 0; i < playListLength; i++) {
        listTitle.push(response.items[i].snippet.title);
        listId.push(response.items[i].id);
      }
      getVideos(APIKey);
    },
  });
  // console.log(listTitle);
  // console.log(listId);

}

// 플레이 리스트의 영상 링크를 가져오는 함수
function getVideos(APIKey) {

  $.ajax({
    type: "GET",
    url: "https://www.googleapis.com/youtube/v3/playlistItems?",
    data: {
      part: "snippet",
      playlistId: listId[1], // 1번째 플레이리스트가 '코리안타임'이라서 임시로 1로 설정 해놨는데 수정 해야됨
      key: APIKey,
      maxResults: 100,
    },

    success: function (response) {
      let temp_listTitle = listTitle[1];
      console.log("플레이 리스트 제목 : ", temp_listTitle);
      // console.log(response.items);

      for (let j = 0; j < response.items.length; j++) {
        // videoId.push(response.items[j].snippet.resourceId.videoId);
        koreanTimeTitle.push(response.items[j].snippet.title);
        videoLinks.push("https://www.youtube.com/watch?v=" + response.items[j].snippet.resourceId.videoId);
      }
      console.log(koreanTimeTitle);
      // console.log(videoId);
      console.log(videoLinks);

      const videos = koreanTimeTitle.reduce((acc, curr, idx) => {
        acc[curr] = videoLinks[idx];
        return acc;
      }, new Object);

      console.log(videos);
    }
  });

};

