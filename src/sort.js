/* 
  플레이에서 추출해온 HashTag안에 들어있는 이름으로 구분해 선수별 영상링크를 나누는 js파일 입니다.
*/

import { createObject, snippets } from './search.js';


const btn = document.querySelector(".btn");

const Star_Names = ["손흥민", "김하성", "최지만", "박효준", "이강인", "황의조", "류현진"];
const hashtags = [];

const Star_Obj = [];

btn.addEventListener('click', (e) => {
  const videos = createObject();
  console.log(videos);
  for (let i = 0; i < snippets.length; i++) {
    let idx = snippets[i].description.indexOf('\n');
    let substr = snippets[i].description.slice(0, idx);
    let hashtag = substr.split('#');

    hashtag.splice(0, 1);

    for (let i = 0; i < hashtag.length; i++) {
      hashtag[i] = hashtag[i].trim();
    }

    // console.log(hashtag); // 왜 빈문자열이 추가 되는거지?
    hashtags.push(hashtag);
  }


  for (let i = 0; i < hashtags.length; i++) {
    for (let j = 0; j < Star_Names.length; j++) {

      if (hashtags[i].includes(Star_Names[j])) {
        let obj = {};
        obj["name"] = Star_Names[j];
        obj["Title"] = Object.keys(videos)[i];
        obj["Link"] = Object.values(videos)[i];
        Star_Obj.push(obj);
        break;
      }

    }
  }
  console.log(Star_Obj);

});

