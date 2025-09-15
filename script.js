function search() {
    const input = document.getElementById("Celebrity Name").value;
    const url = "https://en.wikipedia.org/api/rest_v1/page/summary/" + encodeURIComponent(input);

    document.getElementById('Result').innerText = 'Searching...';

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.extract) {
                document.getElementById('Result').innerHTML = `
                    <h2>${data.title}</h2>
                    ${data.thumbnail ? `<img src="${data.thumbnail.source}" width="200"><br>` : ''}
                    <p>${data.extract}</p>
                    <a href="${data.content_urls.desktop.page}" target="_blank">Read more on Wikipedia</a>
                `;
            } else {
                document.getElementById('Result').innerText = 'No information found.';
            }
        })
        .catch(() => {
            document.getElementById('Result').innerText = 'Error fetching data.';
        });
}