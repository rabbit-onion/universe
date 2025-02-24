import React, { useEffect } from 'react';
import postsdata from '../../../assets/api/postsdata';
import {
  RecentlyPostContainer,
  RecentlyPostDocSec,
  RecentlyPostSelectWrap,
  RecentlyPostWrap,
  RecentlyThumbnail,
} from '../styled';
import { useDispatch, useSelector } from 'react-redux';
import { pagenationActions } from '../../../store/modules/paginationSlice';
import LikePost from './likePost';

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
      <RecentlyPostSelectWrap>
        <select>
          <option value="all" selected>
            전체
          </option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
        <div>
          <select>
            <option value="all" selected>
              최신순
            </option>
            <option value="1">제목순</option>
            <option value="2">좋아요 많은순</option>
            <option value="3">댓글 많은순</option>
          </select>
          <button>글쓰기</button>
        </div>
      </RecentlyPostSelectWrap>
      {currentPost.map((item) => {
        return (
          <>
            <RecentlyPostWrap>
              <RecentlyPostDocSec>
                <div>
                  <img src={item.usersrc}></img>
                  <p>{item.name}</p>
                </div>
                <h2>{item.title}</h2>
                <p>{item.doc}</p>
                <LikePost key={item.id} item={item} />
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
