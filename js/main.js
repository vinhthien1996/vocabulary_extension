async function fetchData() {
    chrome.storage.local.get('blockingMethod', function (result) {
        try {
            let num = Math.floor(Math.random() * result['blockingMethod'].length);
            const voc = result['blockingMethod'][num];
            document.getElementById("eng").innerText = voc.eng + ` (${voc.type})`;
            document.getElementById("vi").innerText = voc.vi;
        } catch (error) {
            document.getElementById("container").innerText = "Chưa có dữ liệu!";
        }
    });
}

fetchData();

document.body.onkeydown = function (e) {
    if (e.code === "Space" || e.code === "Enter") {
        fetchData();
    } else {
        window.close();
    }
};