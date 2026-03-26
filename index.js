import fetch from "node-fetch";

const SPACE_URL = "https://flixnettv-mygost.hf.space";

async function runTask(task) {
  const res = await fetch(`${SPACE_URL}/run/predict`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      data: [task]
    })
  });

  const json = await res.json();
  return json.data[0];
}

async function main() {
  const result = await runTask("ping");
  console.log("Response:", result);
}

main();