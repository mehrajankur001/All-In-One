const productReceived = document.getElementById('productReceived');
const picked = document.getElementById('picked');
const outForDelevery = document.getElementById('outForDelevery');
const delevired = document.getElementById('delevired');

const getProducts = async () => {
    const homeUrl = await fetch('/currentStatus');
    const json = await homeUrl.json();
    console.log(json);

    if (json.data.length != 0) {
        console.log(json.data[0].currentStatus)

        if (json.data[0].currentStatus === "Product Received") {
            productReceived.classList.add('show');
        } else if (json.data[0].currentStatus === "picked") {
            productReceived.classList.add('show');
            picked.classList.add('show');
        } else if (json.data[0].currentStatus === "out for delevery") {
            productReceived.classList.add('show');
            picked.classList.add('show');
            outForDelevery.classList.add('show');
        } else if (json.data[0].currentStatus === "delevired") {
            productReceived.classList.add('show');
            outForDelevery.classList.add('show');
            picked.classList.add('show');
            delevired.classList.add('show');
        }
    }

}
getProducts();