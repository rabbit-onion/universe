import React, { useEffect } from 'react';
import postsdata from '../../../assets/api/postsdata';
import { RecentlyPostContainer, RecentlyPostDocSec, RecentlyPostWrap, RecentlyThumbnail } from '../styled';
import { useDispatch, useSelector } from 'react-redux';
import { pagenationActions } from '../../../store/modules/paginationSlice';

const RecentlyPost = () => {
  const { postsPerPage, currPage } = useSelector((state) => state.pagenationR);
  const lastPost = currPage * postsPerPage;
  const firstPost = lastPost - postsPerPage;
  const currentPost = postsdata.slice(firstPost, lastPost);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(pagenationActions.addData(postsdata));
  }, [postsdata]);
  return (
    <RecentlyPostContainer>
      <h2>최근 게시물</h2>
      {currentPost.map((item) => {
        return (
          <>
            <RecentlyPostWrap>
              <RecentlyPostDocSec>
                <div>
                  <img src="../public/images/pattern/horizon/moruka.webp"></img>
                  <p>박준용</p>
                </div>
                <h2>{item.title}</h2>
                <p>{item.doc}</p>
              </RecentlyPostDocSec>
              <RecentlyThumbnail src={item.src}></RecentlyThumbnail>
            </RecentlyPostWrap>
            <hr></hr>
          </>
        );
      })}
    </RecentlyPostContainer>
  );
};

export default RecentlyPost;
