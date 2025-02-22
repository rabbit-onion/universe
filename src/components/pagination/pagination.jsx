import { useDispatch, useSelector } from 'react-redux';
import { PaginationWrap } from './style';
import { useEffect } from 'react';

import postsdata from '../../assets/api/postsdata';
import { pagenationActions } from '../../store/modules/paginationSlice';

const Pagination = () => {
  const { totalPage, currPage } = useSelector((state) => state.pagenationR);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pagenationActions.totalData());
  }, [postsdata]);

  //배열 , 공간을 개수만큼
  const arr = [...Array(totalPage)];

  const selectPage = (x) => {
    if (x >= 1 && x <= totalPage && x !== currPage) {
      dispatch(pagenationActions.currentPage(x));
    }
  };

  return (
    <PaginationWrap>
      <div>
        <button onClick={() => dispatch(pagenationActions.firstPage())}>{`<<`}</button>
        <button onClick={() => dispatch(pagenationActions.prevPage())}>{`<`}</button>

        {arr.map((_, idx) => (
          <button key={idx} className={currPage === idx + 1 ? 'on' : ''} onClick={() => selectPage(idx + 1)}>
            {idx + 1}
          </button>
        ))}

        <button onClick={() => dispatch(pagenationActions.nextPage())}>{`>`}</button>
        <button onClick={() => dispatch(pagenationActions.lastPage())}>{`>>`}</button>
      </div>
    </PaginationWrap>
  );
};

export default Pagination;
