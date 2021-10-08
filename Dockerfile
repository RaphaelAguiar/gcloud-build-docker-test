from node:alpine
WORKDIR /opt/
add ./* ./
run npm install
cmd [ "node", "index.js"]