import React, { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-jsx";
import "prismjs/components/prism-java"
import "prismjs/components/prism-python"

export default function Code({ code, language }) {
  useEffect(() => {
    Prism.highlightAll();
    window.alert(language);
  }, []);
  return (
    <div className="Code">
      <pre>
        <code className={`language-${language}`}>{code}</code>
      </pre>
    </div>
  );
}