document.addEventListener("DOMContentLoaded", () => { 
    getMethodFetch('/api/allfoods')
    .then((data) => {
        console.log("Fetch eredménye:", data);
       
        niggerKiller(data.results)
    })
    .catch((error) => {
        console.error("Hiba a fetch során:", error);
    });

    document.getElementById('submitButton').addEventListener('click', async () => {
        const formData = new FormData(document.getElementById('foodForm'));

    try{
        const response = await postMethodFetch('/api/addfood', formData);
        niggerKiller(await getMethodFetch('/api/allfoods'));

        console.log("Étel hozzáadva:", response);
    } catch (error) {
        console.error('Hiba az étel hozzáadásakor:', error);
    }
    })

});

const getMethodFetch = async (url) => {
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json(); 
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const postMethodFetch = async (url, data) => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            body: data
        });
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error posting data:", error);
    }
};

function niggerKiller(data) {
    const container = document.getElementById('foodTable');
    if(container.children.length > 0) {
        container.replaceChildren();
    }


    const thead = document.createElement('thead');
    const headerRow = document.createElement('tr');

    const headers = ['ID', 'Étel neve', 'Ár', 'Finom', 'Lejárat', 'Mennyiség'];

    headers.forEach(headerText => {
        const th = document.createElement('th');
        th.textContent = headerText;
        headerRow.appendChild(th);
    });

    thead.appendChild(headerRow);
    container.appendChild(thead);

    const tbody = document.createElement('tbody');

    data.forEach(item => {
        const row = document.createElement('tr');

        const id = document.createElement('td');
        id.textContent = item.id;
        row.appendChild(id);

        const name = document.createElement('td');
        name.textContent = item.nev;
        row.appendChild(name);

        const price = document.createElement('td');
        price.textContent = item.ar;
        row.appendChild(price);

        const taste = document.createElement('td');
        taste.textContent = item.finom;
        row.appendChild(taste);

        const expiration = document.createElement('td');
        expiration.textContent = item.lejarat;
        row.appendChild(expiration);

        const quantity = document.createElement('td');
        quantity.textContent = item.mennyiseg;
        row.appendChild(quantity);

        tbody.appendChild(row);
    });

    container.appendChild(tbody);
}