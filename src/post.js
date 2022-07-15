import { createObject, snippets } from './search.js';

const btn = document.querySelector(".kkk");

// 버튼을 누르면 그에 맞는 값을 가져오는 함수
$('.name').bind('click', function (e) {
  const name = {};
  name["name"] = e.target.innerHTML;
  postElement(name);
});


function postElement(name) {
  fetch("/getDb", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(name)
  }).then((res) => res.json())
    .then((res) => {
      if (res.success) {
        console.log("success");
      } else {
        console.log("Failed");
      }
    })
    .catch((err) => {
      console.log(err);
    });
}


btn.addEventListener('click', (e) => {
  const videos = createObject();
  postsnippet(snippets);
  postVideos(videos);
});

function postsnippet(snippets) {
  fetch("/snippets", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(snippets)
  }).then((res) => res.json())
    .then((res) => {
      if (res.success) {
        console.log("success");
      } else {
        console.log("Failed");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

function postVideos(videos) {
  // console.log(videos);
  fetch("/search", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(videos)
  }).then((res) => res.json())
    .then((res) => {
      if (res.success) {
        console.log("success");
      } else {
        console.log("Failed");
      }
    })
    .catch((err) => {
      console.log(err);
    });
};