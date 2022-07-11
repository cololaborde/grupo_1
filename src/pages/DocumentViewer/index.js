import React from "react";
import { useSelector } from "react-redux";
import BasicDocument from "../../components/PDF";
import { selectDataArray } from "../../store/DocumentViewer/selectors";

const DocumentViewer = () => {
  const data = useSelector(selectDataArray);
  return (
    <div>
      <BasicDocument data={data} />
    </div>
  );
};

export default DocumentViewer;
