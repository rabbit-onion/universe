// 태그검색에 필요한 것

// 배열에 태그를 추가한 뒤 그 태그에 맞는 필터를 가능하게 해준다
import React, { useState } from 'react';
import { CheckBoxWrap, CheckLabel, ImgWrap, TagContentWrap, TagWrap } from './style';

const SearchMain = () => {
  const thumarray = [
    {
      src: '../public/images/pattern/horizon/blackmaid.webp',
      alt: 'thumbnail 1',
      genre: '로맨스',
      tag: '가족',
      year: '2025년 1분기',
    },
    {
      src: '../public/images/pattern/horizon/blade.webp',
      alt: 'thumbnail 2',
      genre: '판타지',
      tag: '감동',
      stream: '방영중',
    },
    { src: '../public/images/pattern/horizon/bleach.webp', alt: 'thumbnail 3', genre: '드라마', tag: '게임' },
    { src: '../public/images/pattern/horizon/chainsawman.webp', alt: 'thumbnail 4', tag: '동물' },
    { src: '../public/images/pattern/horizon/blackmaid.webp', alt: 'thumbnail 1', genre: '로맨스', tag: '가족' },
    { src: '../public/images/pattern/horizon/blade.webp', alt: 'thumbnail 2', genre: '판타지', tag: '감동' },
    { src: '../public/images/pattern/horizon/bleach.webp', alt: 'thumbnail 3', genre: '드라마', tag: '게임' },
    { src: '../public/images/pattern/horizon/chainsawman.webp', alt: 'thumbnail 4', tag: '동물' },
    { src: '../public/images/pattern/horizon/blackmaid.webp', alt: 'thumbnail 1', genre: '로맨스', tag: '가족' },
    { src: '../public/images/pattern/horizon/blade.webp', alt: 'thumbnail 2', genre: '판타지', tag: '감동' },
    { src: '../public/images/pattern/horizon/bleach.webp', alt: 'thumbnail 3', genre: '드라마', tag: '게임' },
    { src: '../public/images/pattern/horizon/chainsawman.webp', alt: 'thumbnail 4', tag: '동물' },
    { src: '../public/images/pattern/horizon/blackmaid.webp', alt: 'thumbnail 1', genre: '로맨스', tag: '가족' },
    { src: '../public/images/pattern/horizon/blade.webp', alt: 'thumbnail 2', genre: '판타지', tag: '감동' },
    { src: '../public/images/pattern/horizon/bleach.webp', alt: 'thumbnail 3', genre: '드라마', tag: '게임' },
    { src: '../public/images/pattern/horizon/chainsawman.webp', alt: 'thumbnail 4', tag: '동물' },
  ];
  const checkboxGenreList = [
    { id: 1, data: '로맨스' },
    { id: 2, data: '판타지' },
    { id: 3, data: '드라마' },
    { id: 4, data: '로맨스 판타지' },
    { id: 5, data: '모험' },
    { id: 6, data: '무협' },
    { id: 7, data: '미스테리' },
    { id: 8, data: 'SF' },
    { id: 9, data: 'GL' },
    { id: 10, data: 'BL' },
  ];
  const checkboxTagList = [
    { id: 1, data: '가족' },
    { id: 2, data: '감동' },
    { id: 3, data: '게임' },
    { id: 4, data: '동물' },
    { id: 5, data: '동양풍' },
    { id: 6, data: '두뇌싸움' },
    { id: 7, data: '루프물' },
    { id: 8, data: '마법소녀' },
    { id: 9, data: '먼치킨' },
  ];
  const checkboxYearList = [
    { id: 1, data: '2025년 1분기' },
    { id: 2, data: '2024년 4분기' },
    { id: 3, data: '2024년 3분기' },
    { id: 4, data: '2024년 2분기' },
    { id: 5, data: '2024년 1분기' },
  ];

  const checkboxStreamList = [
    { id: 1, data: '방영중' },
    { id: 2, data: '완결' },
  ];

  const [checkedList, setCheckedList] = useState([]);
  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };
  const filteredImages = thumarray.filter(
    (image) =>
      checkedList.length === 0 ||
      checkedList.includes(image.genre) ||
      checkedList.includes(image.tag) ||
      checkedList.includes(image.year) ||
      checkedList.includes(image.stream)
  );
  const onClear = () => {
    setCheckedList([]);
  };

  return (
    <>
      <TagWrap>
        <TagContentWrap>
          <button onClick={() => onClear()}>전체 초기화</button>
          <p>총 {filteredImages.length}개 입니다.</p>
          <CheckBoxWrap>
            {checkboxGenreList.map((item) => {
              return (
                <>
                  <CheckLabel key={item.id}>
                    <input
                      type="checkbox"
                      value={item.data}
                      onChange={(e) => {
                        onCheckedElement(e.target.checked, e.target.value);
                      }}
                      checked={checkedList.includes(item.data) ? true : false}
                    ></input>
                    <p>{item.data}</p>
                  </CheckLabel>
                </>
              );
            })}
          </CheckBoxWrap>

          <CheckBoxWrap>
            {checkboxTagList.map((item) => {
              return (
                <>
                  <CheckLabel key={item.id}>
                    <input
                      type="checkbox"
                      value={item.data}
                      onChange={(e) => {
                        onCheckedElement(e.target.checked, e.target.value);
                      }}
                      checked={checkedList.includes(item.data) ? true : false}
                    ></input>
                    <p>{item.data}</p>
                  </CheckLabel>
                </>
              );
            })}
          </CheckBoxWrap>
          <CheckBoxWrap>
            {checkboxYearList.map((item) => {
              return (
                <>
                  <CheckLabel key={item.id}>
                    <input
                      type="checkbox"
                      value={item.data}
                      onChange={(e) => {
                        onCheckedElement(e.target.checked, e.target.value);
                      }}
                      checked={checkedList.includes(item.data) ? true : false}
                    ></input>
                    <p>{item.data}</p>
                  </CheckLabel>
                </>
              );
            })}
          </CheckBoxWrap>
          <CheckBoxWrap>
            {checkboxStreamList.map((item) => {
              return (
                <>
                  <CheckLabel key={item.id}>
                    <input
                      type="checkbox"
                      value={item.data}
                      onChange={(e) => {
                        onCheckedElement(e.target.checked, e.target.value);
                      }}
                      checked={checkedList.includes(item.data) ? true : false}
                    ></input>
                    <p>{item.data}</p>
                  </CheckLabel>
                </>
              );
            })}
          </CheckBoxWrap>
        </TagContentWrap>
        <ImgWrap>
          {filteredImages.map((image, index) => (
            <div key={index}>
              <img src={image.src} alt={image.alt} />
            </div>
          ))}
        </ImgWrap>
      </TagWrap>
    </>
  );
};

export default SearchMain;
