// 태그검색에 필요한 것

// 배열에 태그를 추가한 뒤 그 태그에 맞는 필터를 가능하게 해준다
import React, { useState } from 'react';
import { CheckBoxWrap, CheckLabel, ImgWrap, TagButtonWrap, TagContentWrap, TagWrap } from './style';
import animationData from '../../assets/api/animationdata';
import {
  checkboxStreamList,
  checkboxYearList,
  checkboxTagList,
  checkboxGenreList,
} from '../../assets/api/searchtagdata';

const SearchMain = () => {
  const [checkedList, setCheckedList] = useState([]);
  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };
  const filteredImages = animationData.filter(
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
      <TagButtonWrap>
        <div>
          <h2>필터</h2>
          <button onClick={() => onClear()}>전체 초기화</button>
        </div>
        <p>총 {filteredImages.length}개 입니다.</p>
      </TagButtonWrap>
      <TagWrap>
        <TagContentWrap>
          <CheckBoxWrap>
            <hr></hr>
            <h2>장르</h2>
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
            <hr></hr>
            <h2>태그</h2>
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
            <hr></hr>
            <h2>년도</h2>
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
            <hr></hr>
            <h2>방영</h2>
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
