import React from 'react';
import postsdata from '../../../assets/api/postsdata';
import { RecentlyPostContainer, RecentlyPostDocSec, RecentlyPostWrap, RecentlyThumbnail } from '../styled';

const RecentlyPost = () => {
  return (
    <RecentlyPostContainer>
      <h2>최근 게시물</h2>
      {postsdata.map((item) => {
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
