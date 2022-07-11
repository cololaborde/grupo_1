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
    sectionTitle: {
      textAlign: "center",
      color: "#005eff",
      fontWeight: "bold",
      fontSize: "22px",
      marginBottom: 20,
    },
    pageTitle: {
      textDecoration: "underline",
      color: "red",
      marginBottom: 15,
    },
  });

  const getFromContent = (elem) => (
    <View style={{ marginBottom: 20 }}>
      <Text style={styles.pageTitle}>{elem.name}</Text>
      {elem.content
        ? elem.content.map((content, index) => {
            return (
              <View key={index} style={{ marginBottom: 10 }}>
                <Text>{content}</Text>
              </View>
            );
          })
        : null}
    </View>
  );

  console.log(data);
  const content = data.map((elem) => {
    switch (elem.type) {
      case "Section":
        return (
          <View style={{ padding: 15 }}>
            <Text style={styles.sectionTitle}>{elem.name}</Text>
            {elem.pages.map((page, index) => {
              return <View key={index}>{getFromContent(page)}</View>;
            })}
          </View>
        );
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
