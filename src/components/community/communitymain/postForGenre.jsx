import React from 'react';
import { GenrePostWrap } from '../styled';

const PostForGenre = () => {
  const buttondata = [
    { src: '../public/images/pattern/genre_drama.png' },
    { src: '../public/images/pattern/genre_sf.png' },
    { src: '../public/images/pattern/genre_fantasy.png' },
    { src: '../public/images/pattern/genre_romance.png' },
    { src: '../public/images/pattern/genre_romance.png' },
    { src: '../public/images/pattern/genre_romance.png' },
  ];
  return (
    <div>
      <GenrePostWrap>
        <h2>장르별 게시글 모아보기</h2>
        <h3>우리 함께 덕질생활 토크해보자 !</h3>
        {buttondata.map((item) => {
          return (
            <button type="button">
              <img src={item.src}></img>
            </button>
          );
        })}
      </GenrePostWrap>
    </div>
  );
};

export default PostForGenre;
