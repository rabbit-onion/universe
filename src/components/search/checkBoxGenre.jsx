import { CheckBoxWrap, CheckLabel, ImgWrap, TagContentWrap, TagWrap } from './style';

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

import React from 'react';

const CheckBoxGenre = () => {
  const [checkedList, setCheckedList] = useState([]);

  const onCheckedElement = (checked, item) => {
    if (checked) {
      setCheckedList([...checkedList, item]);
    } else if (!checked) {
      setCheckedList(checkedList.filter((el) => el !== item));
    }
  };
  return (
    <div>
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
    </div>
  );
};

export default CheckBoxGenre;
