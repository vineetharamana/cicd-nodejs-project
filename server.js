
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <html>
      <head>
        <title>CI/CD Demo</title>
      </head>
      <body>
        <h1>Hello from Node.js!</h1>
        <p>GitHub Actions CI/CD pipeline is ready.</p>
      </body>
    </html>
  `);
});

if (require.main === module) {
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`App running on port ${PORT}`);
  });
}

module.exports = app;

