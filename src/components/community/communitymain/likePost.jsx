import React from 'react';

import { useDispatch } from 'react-redux';
import { BiLike, BiSolidLike } from 'react-icons/bi';
import { postActions } from '../../../store/modules/postSlice';

const LikePost = ({ item }) => {
  const { id, src, title, tag, doc, like, done } = item;
  const dispatch = useDispatch();
  return (
    <div>
      {' '}
      <i onClick={() => dispatch(postActions.onLike(id))}>{done ? <BiSolidLike /> : <BiLike />}</i>
      {like.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
    </div>
  );
};

export default LikePost;
