import { createObject, snippets } from './search.js';

const btn = document.querySelector(".kkk");

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