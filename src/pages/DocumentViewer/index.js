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
  console.log(data);
  const content = data.map((elem) => {
    switch (elem.type) {
      case "Section":
        return elem.pages.map((page, index) => {
          return (
            <View key={index}>
              <Text>{page.name}</Text>
              {page.content
                ? page.content.map((content, index) => {
                    return (
                      <View key={index}>
                        <Text>{content}</Text>
                      </View>
                    );
                  })
                : null}
            </View>
          );
        });
      case "Page":
        return elem.content
          ? elem.content.map((content, index) => {
              return (
                <View key={index}>
                  <Text>{content}</Text>
                </View>
              );
            })
          : null;
    }
  });

  return (
    <div>
      <BasicDocument data={content} />
    </div>
  );
};

export default DocumentViewer;
