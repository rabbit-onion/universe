import { Editor } from '@toast-ui/react-editor';
import '@toast-ui/editor/toastui-editor.css';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { EditorContainer, PreviewBox, SubTitle, Title, TitleBox, WritBox, WriteWrap } from './style';
import { useEffect, useRef, useState } from 'react';

const WritePost = () => {
  const editorRef = useRef(null);
  const [titRows, setTitRows] = useState(1);
  const [subTitRows, setSubTitRows] = useState(1);
  const [preview, setPreview] = useState({
    title: '',
    subtitle: '',
    content: '',
  });

  const handleTitChange = (e) => {
    const { length } = e.target.value;
    if (length > 46) {
      setTitRows(3);
    } else if (length > 23) {
      setTitRows(2);
    } else {
      setTitRows(1);
    }
    setPreview({ ...preview, title: e.target.value });
  };

  const handleSubTitChange = (e) => {
    const { length } = e.target.value;
    if (length > 45) {
      setSubTitRows(2);
    } else {
      setSubTitRows(1);
    }
    setPreview({ ...preview, subtitle: e.target.value });
  };

  const handleEditorChange = () => {
    const editorInstance = editorRef.current.getInstance();
    const content = editorInstance.getHTML();
    setPreview({ ...preview, content: content });
  };

  return (
    <>
      <WriteWrap>
        <WritBox>
          <TitleBox>
            <Title placeholder="제목을 입력하세요" rows={titRows} maxLength={50} onChange={handleTitChange} />
            <hr />
            <SubTitle
              placeholder="부제목을 입력하세요"
              rows={subTitRows}
              maxLength={50}
              onChange={handleSubTitChange}
            ></SubTitle>
          </TitleBox>
          <EditorContainer>
            <Editor
              ref={editorRef}
              language="ko-KR"
              initialValue=" "
              previewStyle="vertical"
              height="auto"
              initialEditType="wysiwyg"
              hideModeSwitch={true}
              useCommandShortcut={true}
              placeholder={`"이건 안 보면 손해지!" 모두에게 공유하고 싶은 당신의 인생 애니는 무엇인가요?`}
              onChange={handleEditorChange}
            />
          </EditorContainer>
        </WritBox>

        <PreviewBox>
          <h1>{preview.title}</h1>
          <h2>{preview.subtitle}</h2>
          {preview && <div dangerouslySetInnerHTML={{ __html: preview.content }} />}
        </PreviewBox>
      </WriteWrap>
    </>
  );
};

export default WritePost;
