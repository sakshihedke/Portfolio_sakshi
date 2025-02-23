const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// Serve static files correctly
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/download-cv", (req, res) => {
  const filePath = path.join(__dirname, "public", "CV.pdf");

  // Debugging: Check if the file exists
  console.log("File Path:", filePath);

  res.download(filePath, "Sakshi_Hedke_CV.pdf", (err) => {
    if (err) {
      console.error("Error sending file:", err);
      res.status(500).send("Error downloading file.");
    }
  });
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
