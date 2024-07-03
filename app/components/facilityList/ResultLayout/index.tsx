import ResultHeader from "./ResultHeader";
import { FC } from "react";

interface Props {
  data?: any;
}

const ResultLayout: FC<Props> = (props) => {
  const { data } = props;
  const totalRecords = data.length;

  return <ResultHeader totalRecords={totalRecords} />;
};

export default ResultLayout;
