import React from "react";
import { View, Text, StyleSheet, Document, Page } from "@react-pdf/renderer";

const DocumentViewer = (props) => {
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

  console.log(props.data);

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

  const content = props.data.map((elem) => {
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
    <Document>
      {/*render a single page*/}
      <Page size="A4" style={styles.page}>
        {content}
      </Page>
    </Document>
  );
};

export default DocumentViewer;
