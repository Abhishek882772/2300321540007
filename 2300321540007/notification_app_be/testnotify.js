const axios = require("axios");

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJhYmhpc2hlay4yM2IxNTQxMDc1QGFiZXMuYWMuaW4iLCJleHAiOjE3ODA5OTI5NTEsImlhdCI6MTc4MDk5MjA1MSwiaXNzIjoiQWZmb3JkIE1lZGljYWwgVGVjaG5vbG9naWVzIFByaXZhdGUgTGltaXRlZCIsImp0aSI6ImI3M2UzYjVhLTcxNTMtNDFiNy1hMThlLTNjZDc3ZDkzOTEwZiIsImxvY2FsZSI6ImVuLUlOIiwibmFtZSI6ImFiaGlzaGVrIHRyaXBhdGhpIiwic3ViIjoiZGQyOWRlMDctYWM3Yi00MDk3LWI1NGItMzg2YmE3MjA4NjMxIn0sImVtYWlsIjoiYWJoaXNoZWsuMjNiMTU0MTA3NUBhYmVzLmFjLmluIiwibmFtZSI6ImFiaGlzaGVrIHRyaXBhdGhpIiwicm9sbE5vIjoiMjMwMDMyMTU0MDAwNyIsImFjY2Vzc0NvZGUiOiJjWHVxaHQiLCJjbGllbnRJRCI6ImRkMjlkZTA3LWFjN2ItNDA5Ny1iNTRiLTM4NmJhNzIwODYzMSIsImNsaWVudFNlY3JldCI6ImpxQURTTlpCeW5OZkN5eEIifQ.EV8UqEw7p1PEaFRtCgVg2gL7lUMSXSkhRolPSY-LpsU";

async function test() {
  try {
    const res = await axios.get(
      "http://4.224.186.213/evaluation-service/notifications",
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`
        }
      }
    );

    console.log(res.data);
  } catch (err) {
    console.log(err.response?.status);
    console.log(err.response?.data);
  }
}

test();