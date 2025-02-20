import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const SearchContList = ({ searchTxt }) => {
  const rankingNow = [
    { id: 1, title: '블리치' },
    { id: 2, title: '도망을 잘 치는 도련님' },
    { id: 3, title: '모브사이코 100' },
    { id: 4, title: '괴수 8호' },
    { id: 5, title: '펭귄 하이웨이' },
    { id: 6, title: '장송의 프리렌' },
    { id: 7, title: '지옥락' },
    { id: 8, title: '체인소맨' },
    { id: 9, title: '그를 너무너무 좋아하는 100명의 그녀' },
    { id: 10, title: '에반게리온 극장판' },
  ];

  const navigate = useNavigate();
  const { searchResults } = useSelector((state) => state.videoR);

  const handleGoto = (e) => {
    e.preventDefault();
    e.stopPropagation();
    navigate('/videoinfo');
  };

  return (
    <>
      <ul>
        {!searchTxt && (
          <>
            <strong className="nowTitle">지금 사람들이 많이 보는 작품</strong>
            <ul>
              {rankingNow.map((item) => (
                <li key={item.id} onClick={handleGoto}>
                  <span>{item.id}</span>
                  <strong>{item.title}</strong>
                </li>
              ))}
            </ul>
          </>
        )}
        {searchTxt &&
          searchResults.length > 0 &&
          searchResults.map((result) => (
            <li key={result.id} onClick={handleGoto}>
              <strong>{result.title || result.name}</strong>
            </li>
          ))}
        {searchTxt && searchResults.length === 0 && (
          <li>
            <strong>검색 결과가 없습니다.</strong>
          </li>
        )}
      </ul>
    </>
  );
};

export default SearchContList;
