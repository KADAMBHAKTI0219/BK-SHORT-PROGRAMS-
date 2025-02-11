import React, { useState } from "react";
import jsPDF from "jspdf";

const App = () => {
  const [title, setTitle] = useState("PDF Generator App");
  const [content, setContent] = useState("This is a simple PDF document generated using React and jsPDF.");

  const generatePDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    const margin = 20;
    const maxWidth = pageWidth - margin * 2; 
  
    doc.setFontSize(20);
    doc.text(title, margin, 20);
  
    doc.setFontSize(14);
    const splitContent = doc.splitTextToSize(content, maxWidth);
    doc.text(splitContent, margin, 40);
  
    doc.save("generated.pdf");
  };
  

  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "90vh",
      padding: "20px",
      background: "#121212",
      color: "#ffffff",
      fontFamily: "Arial, sans-serif",
    },
    heading: {
      fontSize: "26px",
      fontWeight: "bold",
      marginBottom: "20px",
      padding: "12px 20px",
      background: "linear-gradient(45deg, #ff8c00, #ff0080)",
      color: "white",
      borderRadius: "10px",
      textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)",
    },
    input: {
      border: "2px solid #ff0080",
      backgroundColor: "#1e1e1e",
      padding: "12px",
      marginBottom: "15px",
      width: "100%",
      maxWidth: "400px",
      borderRadius: "8px",
      color: "#ffffff",
      outline: "none",
      fontSize: "16px",
    },
    button: {
      background: "linear-gradient(45deg, #ff8c00, #ff0080)",
      color: "white",
      padding: "12px 20px",
      borderRadius: "30px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "all 0.3s ease-in-out",
      border: "none",
      boxShadow: "0 4px 10px rgba(255, 140, 0, 0.5)",
    },
    buttonHover: {
      transform: "scale(1.1)",
      boxShadow: "0 6px 15px rgba(255, 140, 0, 0.7)",
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>PDF Generator</h1>
      <input
        type="text"
        style={styles.input}
        placeholder="Enter PDF Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        style={styles.input}
        placeholder="Enter PDF Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button
        style={styles.button}
        onMouseOver={(e) => {
          e.target.style.transform = styles.buttonHover.transform;
          e.target.style.boxShadow = styles.buttonHover.boxShadow;
        }}
        onMouseOut={(e) => {
          e.target.style.transform = "none";
          e.target.style.boxShadow = "0 4px 10px rgba(255, 140, 0, 0.5)";
        }}
        onClick={generatePDF}
      >
        Download PDF
      </button>
    </div>
  );
};

export default App;
