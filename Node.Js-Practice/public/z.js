
const url = "/";
async function getData() {
    const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      };
    const res = await fetch("/", options);
    const data = await res.json();
    console.log(data);
    console.log("ankur ")
}
getData();
