import React from 'react';
import { HotpostContent, HotpostContentCover, HotpostContentTitle } from '../../pages/main/style';
import postsdata from '../../assets/api/postsdata';

const HotPost = () => {
  return (
    <>
      <div className="bg-gr div_top_margin">
        <h2>오늘 HOT한 게시물</h2>
        <div className="content_wrap">
          {postsdata.map((item) => {
            return (
              <>
                <HotpostContent>
                  <HotpostContentCover />
                  <img src={item.src}></img>
                  <HotpostContentTitle key={item.id}>
                    <div>
                      <label>HOT</label>
                      <label>TOP3</label>
                    </div>
                    <h2>{item.title}</h2>
                    <p>{item.tag}</p>
                  </HotpostContentTitle>
                </HotpostContent>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default HotPost;
