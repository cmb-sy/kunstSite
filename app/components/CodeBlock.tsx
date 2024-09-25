"use client";

import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { atomDark } from "react-syntax-highlighter/dist/cjs/styles/prism";

type Props = {
  className?: string;
  children?: React.ReactNode;
};
const CodeBlock: React.FC<Props> = ({ className, children = "" }: Props) => {
  const match = /language-(\w+)(:?.*)/.exec(className || "");
  const language = match && match[1] ? match[1] : "";
  const fileName = match && match[2] ? match[2].slice(1) : "";
  const code = String(children).replace(/\n$/, "");
  const syntaxHighlighterClass = fileName
    ? "code-block-with-title"
    : "code-block";
  return (
    <>
      <div className="code-block-wrapper">
        {fileName && <div className="code-block-title">{fileName}</div>}
        <SyntaxHighlighter
          language={language}
          style={atomDark}
          className={syntaxHighlighterClass}
        >
          {code}
        </SyntaxHighlighter>
      </div>
      <style jsx>{`
        .code-block-wrapper {
          font-size: 0.9rem;
          margin-bottom: 2rem;
        }
        .code-block-title {
          display: inline-block;
          border-radius: 0.3rem 0.3rem 0 0;
          background-color: #323e52;
          padding: 0.55rem 1rem;
          margin-top: 25px;
          color: white;
          font-size: 0.8rem;
          font-family: Inconsolata, Monaco, Consolas, "Courier New", Courier,
            monospace;
        }
      `}</style>
      <style jsx global>{`
        .code-block {
          border-radius: 0.3rem !important;
          padding: 1.5rem !important;
        }
        .code-block-with-title {
          border-radius: 0 0.3rem 0.3rem 0.3rem !important;
          padding: 1.5rem !important;
          margin-top: 0 !important;
        }
      `}</style>
    </>
  );
};

export default CodeBlock;
