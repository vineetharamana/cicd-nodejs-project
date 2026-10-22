
const { test } = require("node:test");
const assert = require("node:assert/strict");
const app = require("./server");

test("home page returns the expected content", async () => {
  const server = app.listen(0);

  try {
    const address = server.address();
    const response = await fetch(
      `http://127.0.0.1:${address.port}/`
    );

    const body = await response.text();

    assert.equal(response.status, 200);
    assert.match(body, /Hello from Node\.js!/);
  } finally {
    await new Promise((resolve, reject) => {
      server.close((error) => {
        if (error) reject(error);
        else resolve();
      });
    });
  }
});

