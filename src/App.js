import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";

function App() {
  let post = "강남 우동 맛집";
  let [글제목, b] = useState([
    "남자 코드 추천",
    "강남 우동 맛집",
    "파이썬독학",
  ]);
  let logo = "ReactBlog";
  let [like, setLike] = useState(0);
  let [modal, setModal] = useState(false); // switch 느낌

  return (
    <div className="App">
      <div className="black-nav">
        <h4>{logo}</h4>
      </div>
      <button
        onClick={() => {
          // b(["여자 코드 추천", "강남 우동 맛집", "파이썬독학"]);
          // 글제목[0] = '여자코트 추천';
          let copy = [...글제목];
          copy[0] = "여자코트 추천";
          b(copy);
        }}
      >
        글 수정
      </button>
      <div className="list">
        <h4>
          {글제목[0]}
          <span
            onClick={() => {
              setLike(like++);
            }}
          >
            👋
          </span>
          {like}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      <div className="list">
        <h4>{글제목[1]}</h4>
        <p>2월 17일 발행</p>
      </div>
      <div className="list">
        <h4
          onClick={() => {
            setModal(!modal);
          }}
        >
          {글제목[2]}
        </h4>
        <p>2월 17일 발행</p>
      </div>

      {modal == true ? <Modal /> : null}
    </div>
  );
}

function Modal() {
  return (
    <div className="modal">
      <h4>제목</h4>
      <p>날짜</p>
      <p>상세내용</p>
    </div>
  );
}

export default App;
