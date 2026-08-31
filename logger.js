// simple logger module

function log(msg) {
  let time = new Date().toLocaleTimeString();
  console.log("[" + time + "] " + msg);
}

function error(msg) {
  let time = new Date().toLocaleTimeString();
  console.log("[ERROR " + time + "] " + msg);
}

module.exports = { log, error };
