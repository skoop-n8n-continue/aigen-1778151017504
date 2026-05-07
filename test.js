const fs = require('fs');
const html = fs.readFileSync('index.html', 'utf8');
const script = html.match(/<script>([\s\S]*?)<\/script>/)[1];
try {
  new Function(script);
  console.log("Syntax OK");
} catch(e) {
  console.error(e);
}
