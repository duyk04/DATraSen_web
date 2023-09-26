// Tải header và footer bằng fetch
fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('headerContainer').innerHTML = data;
    });

fetch('footer.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('footerContainer').innerHTML = data;
    });