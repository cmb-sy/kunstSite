import { NextPageContext } from "next";

type ErrorProps = {
  statusCode: number;
  message?: string;
};

function Error({ statusCode, message }: ErrorProps) {
  return (
    <p>
      {statusCode
        ? `An error ${statusCode} occurred on server: ${message}`
        : `An error occurred on client: ${message}`}
    </p>
  );
}

Error.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  const message = err ? err.message : "Unknown error";
  return { statusCode, message };
};

export default Error;
