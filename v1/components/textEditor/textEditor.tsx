import React, { Dispatch, SetStateAction } from 'react';
import 'react-quill/dist/quill.snow.css';
import 'react-day-picker/dist/style.css';

import dynamic from 'next/dynamic';
const QuillNoSSRWrapper = dynamic(import('react-quill'), {
  ssr: false,
  loading: () => <p>Loading ...</p>,
});

const modules = {
  toolbar: [
    [{ header: '1' }, { header: '2' }, { header: '3' }, { font: [] }],
    [{ size: [] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{ list: 'ordered' }, { list: 'bullet' }, { indent: '-1' }, { indent: '+1' }],
    ['link'],
  ],
  clipboard: {
    matchVisual: false,
  },
};

function TextEditor({
  descriptionContent,
  setDescriptionContent,
}: {
  descriptionContent: string;
  setDescriptionContent: Dispatch<SetStateAction<string>>;
}) {
  return (
    <div className="event-description w-full my-6 h-64">
      <QuillNoSSRWrapper
        value={descriptionContent}
        onChange={setDescriptionContent}
        modules={modules}
        theme="snow"
        className="h-[190px]"
      />
    </div>
  );
}

export default TextEditor;
