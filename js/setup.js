async function fetchData(url) {
    try {
        const api = await fetch(url);
        var data = await api.json();
        chrome.storage.local.set({
            'blockingMethod': data
        });
        window.close();
    } catch (error) {
        alert("Can not get data!")
    }
}

function initData() {
    const url = document.getElementById("url").value;
    // https://api2.binance.com/api/v3/ticker/24hr
    fetchData(url);
}

document.getElementById("btn").addEventListener("click", initData);