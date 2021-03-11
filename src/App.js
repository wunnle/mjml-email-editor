import "./styles.css";
import mjml2html from "mjml-browser";
import { useEffect, useState } from "react";

const initialMJML = {};

initialMJML.imgURL = `https://images.unsplash.com/photo-1485217988980-11786ced9454?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80`;

initialMJML.mainText = `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia a assumenda nulla in quisquam optio quibusdam fugiat perspiciatis nobis, ad tempora culpa porro labore. Repudiandae accusamus obcaecati voluptatibus accusantium perspiciatis.`;

initialMJML.ctaText = "Click here to book";

export default function App() {
  const [source, setSource] = useState("");

  const [imgURL, setImgURL] = useState(initialMJML.imgURL);

  const [mainText, setMainText] = useState(initialMJML.mainText);

  const [ctaText, setCtaText] = useState(initialMJML.ctaText);

  useEffect(() => {
    setSource(`
<mjml>
  <mj-body>
    <mj-wrapper padding="0">
      <mj-section border="1px solid #dedede" padding="0">
        <mj-column width="100%">
          <mj-image src=${imgURL} width="600px" alt="" padding="0" />
        </mj-column>
        <mj-column width="100%" padding="20px 0">
          <mj-text color="#637381" font-size="16px">
            Hi Jane,
          </mj-text>
          <mj-text color="#637381" font-size="16px">
          ${mainText}
          </mj-text>
        </mj-column>
        <mj-column width="100%" padding-bottom="20px">
          <mj-button background-color="#5e6ebf" align="center" color="#ffffff" font-size="17px" font-weight="bold" href="https://google.com" width="300px">
            ${ctaText}
          </mj-button>
        </mj-column>
      </mj-section>
    </mj-wrapper>
  </mj-body>
</mjml>
    `);
  }, [imgURL, mainText, ctaText]);

  return (
    <>
      <div style={{ display: "flex", padding: 20 }}>
        <div>
          <p>Source</p>

          <textarea
            spellCheck="false"
            value={source}
            onChange={(e) => setSource(e.target.value)}
            style={{ width: 440, height: 800, fontSize: 12 }}
          />
        </div>
        <div style={{ width: 450, marginLeft: 20 }}>
          <p>Preview</p>
          {source && (
            <div dangerouslySetInnerHTML={{ __html: mjml2html(source).html }} />
          )}
          <p style={{ marginTop: 10 }}>Edit</p>
          <input
            value={imgURL}
            onChange={(e) => setImgURL(e.target.value)}
            style={{ width: "100%", fontFamily: "sans-serif" }}
          />
          <textarea
            style={{ width: "100%", height: 100, fontFamily: "sans-serif" }}
            value={mainText}
            onChange={(e) => setMainText(e.target.value)}
          />
          <input
            value={ctaText}
            onChange={(e) => setCtaText(e.target.value)}
            style={{ width: "100%", fontFamily: "sans-serif" }}
          />
        </div>
      </div>
    </>
  );
}
