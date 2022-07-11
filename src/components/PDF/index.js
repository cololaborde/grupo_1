/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
  },
  section: {
    margin: 10,
    padding: 10,
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// Create Document Component
const BasicDocument = (props) => {
  console.log(props.data);
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          {props.data.map((elem, index) => {
            return (
              <View key={index} style={styles.section}>
                <Text style={{ color: "red" }}>{elem.name}</Text>
                {elem.pages
                  ? elem.pages.map((page, index) => {
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
                    })
                  : null}
              </View>
            );
          })}
        </Page>
      </Document>
    </PDFViewer>
  );
};
export default BasicDocument;
