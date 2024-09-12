const GetManagersMulti = async (query, expands) => {
    return new Promise(async (resolve) => {

    let url = 'http://apprunner.code-wizard.in:8160/petcarebefortesting/Managers';
    if (query) url = `http://apprunner.code-wizard.in:8160/petcarebefortesting/Managers?${query}`;

    if (expands && query) url = `${url}&$expand=${expands}`;
    if (expands && !query) url = `${url}?$expand=${expands}`;
    
    try {
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "Content-type": "application/json"
            }
        });

        const json = await res.json();
        if (res.status === 200) {
            return resolve({ status: res.ok, values: json.value || [] });
        }

        return resolve({ status: false, statusText: json.error.message });

    } catch (error) {
        console.log(error);
        return resolve({ status: false, statusText: error.message });
    }
});
}


export  {GetManagersMulti};