import SearchMain from '../../components/search/searchMain';
import { SearchWrap } from './style';

const Search = () => {
  return (
    <>
      <SearchWrap>
        <h1>태그 검색</h1>
        <SearchMain />
      </SearchWrap>
    </>
  );
};

export default Search;
