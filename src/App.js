import { CKEditor } from "@ckeditor/ckeditor5-react";
import Editor from 'ckeditor5-custom-build/build/ckeditor'

import './App.css';
import { useState } from "react";

const editorConfiguration = {
  toolbar: {
    items: [
      'heading',
      '|',
      'bold',
      'italic',
      'underline',
      'alignment',
      '|',
      'fontColor',
      'fontBackgroundColor',
      'fontSize',
      '|',
      'link',
      'bulletedList',
      'numberedList',
      '|',
      'outdent',
      'indent',
      '|',
      'imageInsert',
      'blockQuote',
      'insertTable',
      'mediaEmbed',
      'undo',
      'redo',
      '|',
      'horizontalLine'
    ]
  },
  language: 'es',
  image: {
    toolbar: [
      'imageTextAlternative',
      'imageStyle:full',
      'imageStyle:side'
    ]
  },
  table: {
    contentToolbar: [
      'tableColumn',
      'tableRow',
      'mergeTableCells',
      'tableCellProperties',
      'tableProperties'
    ]
  },
  licenseKey: '',
};

function App() {
  const [data, setData] = useState("")
  return (
    <div>
      <h4 className="App">ENZIMER Editor v1</h4>
      <CKEditor
        editor={Editor}
        data=""
        config = { editorConfiguration }
        onReady={editor => {
          // You can store the "editor" and use when it is needed.
          console.log('Editor is ready to use!', editor);
        }}
        onChange={(event, editor) => {
          const data = editor.getData();
          setData(data);
          console.log({ event, editor, data });
        }}
        onBlur={(event, editor) => {
          console.log('Blur.', editor);
        }}
        onFocus={(event, editor) => {
          console.log('Focus.', editor);
        }}
      />
      <div>
        <h4 className="App">Visualidor de data</h4>
        <div className="view-data">
          <div>{data}</div>
          <div className="divider" />
          <div dangerouslySetInnerHTML={{ __html: data }} />
        </div>
      </div>
    </div>
  );
}

export default App;
