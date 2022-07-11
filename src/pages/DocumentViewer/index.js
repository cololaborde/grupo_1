import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BasicDocument from "../../components/PDF";
import { selectDataArray } from "../../store/DocumentViewer/selectors";
import { goToInformation } from "../../store/Home/actions";
import { View, Text, StyleSheet } from "@react-pdf/renderer";

const DocumentViewer = () => {
  const data = useSelector(selectDataArray);
  const dispatch = useDispatch();
  if (!data || data.length == 0) dispatch(goToInformation);

  const styles = StyleSheet.create({
    section: {
      margin: 10,
      padding: 10,
    },
  });

  const getFromContent = (elem) =>
    elem.content
      ? elem.content.map((content, index) => {
          return (
            <View key={index}>
              <Text>{content}</Text>
            </View>
          );
        })
      : null;

  console.log(data);
  const content = data.map((elem) => {
    switch (elem.type) {
      case "Section":
        return elem.pages.map((page, index) => {
          return (
            <View key={index}>
              <Text>{page.name}</Text>
              {getFromContent(page)}
            </View>
          );
        });
      case "Page":
        return getFromContent(elem);
    }
  });

  return (
    <div>
      <BasicDocument data={content} />
    </div>
  );
};

export default DocumentViewer;
