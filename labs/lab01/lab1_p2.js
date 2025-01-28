import http from "http";
import fs from "fs";
import path from "path";

const server = http.createServer((req, res) => {
  const {url} = req;

  // Handle different routes
  if (url === '/') {
    res.end("Homepage");
  } 
  else if(url === '/about'){
    const page = fs.readFileSync(path.join("html", "about.html"));
    res.end(page);
  }
  else if(url === "/contact"){
    res.end("Contact page");
  }
  else if(url === "/login"){
    res.end("Login page");
  }
  else if(url === "/register"){
    res.end("Register page");
  }
  else if(url === "/details"){
    res.end("Details page");
  }
  else if(url === "/search"){
    res.end("Search page");
  }
  else{
    res.end("Page not found");
  }
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
