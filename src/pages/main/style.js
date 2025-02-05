import styled from 'styled-components';

export const MainWrap = styled.div`
  .inner {
    padding-left: 100px;
  }
  .center_wrap {
    display: flex;
    justify-content: center;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
  }
  .bg-gr {
    background-color: #f5f5f5;
    padding: 100px;
  }
  .content_wrap {
    gap: 20px;
    display: flex;
    flex-direction: row;
  }
  .vertical_watching_content {
    width: 340px;
    height: 506px;
    display: flex;
    flex-direction: column;
    border-radius: 25px;
  }
  .vertical_watching_content_img {
    width: 340px;
    height: 406px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
  .vertical_watching_content_title {
    width: 340px;
    height: 100px;
    background-color: white;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
  }
  .hotpost_content {
    width: 513px;
    height: 562px;
    border-radius: 25px;
  }
  .hotpost_content_img {
    width: 513px;
    height: 322px;
    border-top-left-radius: 25px;
    border-top-right-radius: 25px;
  }
  .hotpost_content_title {
    width: 433px;
    height: 160px;
    background-color: white;
    border-bottom-left-radius: 25px;
    border-bottom-right-radius: 25px;
    padding: 40px;
  }
  .issue_content_wrap {
    display: flex;
    justify-content: flex-end;
  }
  .issueAnimation_img {
    width: 1500px;
    height: 800px;
    border-radius: 25px;
  }
  .black_ophalf {
    position: absolute;
    width: 1500px;
    height: 800px;
    background-color: black;
    opacity: 0.4;
    z-index: 5;
    border-radius: 25px;
  }

  .issue_right_blur {
    position: absolute;
    background-color: black;
    height: 800px;
    width: 500px;
    border-top-right-radius: 25px;
    border-bottom-right-radius: 25px;
    z-index: 15;
  }
`;
