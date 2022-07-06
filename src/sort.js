/* 
  플레이에서 추출해온 HashTag안에 들어있는 이름으로 구분해 선수별 영상링크를 나누는 js파일 입니다.
*/

import { createObject, snippets } from './search.js';


const btn = document.querySelector(".btn");

const Star_Names = ["손흥민", "김하성", "최지만", "박효준", "이강인", "황의조", "류현진"];

btn.addEventListener('click', (e) => {
  console.log(createObject());
  for (let i = 0; i < snippets.length; i++) {
    let idx = snippets[i].description.indexOf('\n');
    let substr = snippets[i].description.slice(0, idx);
    console.log(substr.split('#')); // 왜 빈문자열이 추가 되는거지?
  }

});
