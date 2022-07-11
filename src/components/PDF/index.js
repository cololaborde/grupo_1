/* eslint-disable react/react-in-jsx-scope */
import React from "react";
import { Document, Page, StyleSheet, PDFViewer } from "@react-pdf/renderer";
// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "white",
    color: "black",
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
});

// Create Document Component
const BasicDocument = (props) => {
  return (
    <PDFViewer style={styles.viewer}>
      {/* Start of the document*/}
      <Document>
        {/*render a single page*/}
        <Page size="A4" style={styles.page}>
          {props.data}
        </Page>
      </Document>
    </PDFViewer>
  );
};
export default BasicDocument;
