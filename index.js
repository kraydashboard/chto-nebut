const http = require('http');

const port = process.env.PORT || 3000;

const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Chto-nebut App</title>
  <style>
    body {
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      font-family: 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
    }
    .card {
      background: rgba(255, 255, 255, 0.95);
      padding: 40px 60px;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
      text-align: center;
    }
    h1 {
      margin: 0 0 10px 0;
      color: #333;
      font-size: 2.5rem;
    }
    p {
      margin: 0;
      color: #666;
      font-size: 1.2rem;
    }
    .emoji {
      font-size: 3rem;
      margin-bottom: 15px;
      display: inline-block;
    }
  </style>
</head>
<body>
  <div class="card">
    <div class="emoji">🚀</div>
    <h1>Hi!</h1>
    <p><strong>chto-nebut</strong> is working beautifully.</p>
  </div>
</body>
</html>
`;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.end(htmlContent);
});

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
