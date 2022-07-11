import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicDocument from "../../components/PDF";
import { selectDataArray } from "../../store/DocumentViewer/selectors";
import { goToInformation } from "../../store/Home/actions";

const DocumentViewer = () => {
  const data = useSelector(selectDataArray);
  const dispatch = useDispatch();
  if (!data || data.length == 0) dispatch(goToInformation);
  return (
    <div>
      <BasicDocument data={data} />
    </div>
  );
};

export default DocumentViewer;
