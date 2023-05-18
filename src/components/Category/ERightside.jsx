import "./Erightside.css";

export const ERightside = () => {
  function Text_Translate_Page() {
    window.location.href = 'https://translate.yandex.com/';
  }
  function Site_Translate_Page() {
    window.location.href = 'https://translate.yandex.com/translate';
  }
  function Document_Translate_Page() {
    window.location.href = 'https://translate.yandex.com/doc';
  }
  function Image_Translate_Page() {
    window.location.href = 'https://translate.yandex.com/ocr';
  }
  function Movie_Recommendor_Page() {
    window.location.href = 'https://super-app-movie-recommendor.vercel.app/';
  }
  function Bulk_Email_Page() {
    window.location.href = 'https://app.abstractapi.com/api/email-validation/bulk-upload';
  }
  function News_Page() {
    window.location.href = 'https://shreypatel-07.github.io/News_API/';
  }


  return (
    <div className="Rightside">
      <div className="containerR">
        <div className="slf-tested">COMBINE API</div>
        <div className="options">
        <button className="Movie_Recommendor" value="Movie_Recommendor" onClick={Movie_Recommendor_Page}>
            <p className="btn_text">Movie_Recommendor</p>
          </button>
          <button
            className="Text_Translate"
            value="Text_Translate"
            onClick={Text_Translate_Page}
          >
            <p className="btn_text">Text_Translator</p>
          </button>
          <button className="Site_Translate" value="Site_Translate" onClick={Site_Translate_Page}>
            <p className="btn_text">Site_Translator</p>
          </button>
        </div>
        <br />
        <div className="options">
        <button
            className="Image_Translate"
            value="Image_Translate"
            onClick={Image_Translate_Page}
          >
            <p className="btn_text">Image_Translator</p>
          </button>
          <button className="Document_Translate" value="Document_Translate" onClick={Document_Translate_Page}>
            <p className="btn_text">Doc_Translator</p>
          </button>
          <button className="Bulk_Email_Validator" value="Bulk_Email_Validator" onClick={Bulk_Email_Page}>
            <p className="btn_text">Bulk_Email_Validator</p>
          </button>
        </div>
        <br />
        <div className="options">
          <button className="News_Validator" value="News_Validator" onClick={News_Page}>
            <p className="btn_text">NEWS_Validator</p>
          </button>
        </div>
      </div>
    </div>
  );
};
