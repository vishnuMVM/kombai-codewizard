const serverApi="http://apprunner.code-wizard.in:8200/petcarebefortesting/"

const GetManagersMulti = async (query, expands) => {
    return new Promise(async (resolve) => {

    let url = `${serverApi}Managers`;
    if (query) url = `${serverApi}Managers?${query}`;

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


const SetManagerSingle = async (input) => {     return new Promise(async (resolve) => {
    let id = input.MId;
    let method = "POST";
    let url = `${serverApi}Managers`;
    if (input.MId && !input.Deleted) {
        method = "PATCH";
        url = `${serverApi}Managers(${input.MId})`;
    } else if (input.MId && input.Deleted) {
        method = "DELETE";
        url = `${serverApi}Managers(${input.MId})`;
    }

    delete input['MId'];
    delete input['Deleted'];

    try {
        const res = await fetch(url, {
            method, body: JSON.stringify(input),
            headers: {
                "Content-type": "application/json"
            }
        });

        if (res.status === 201) {
            const json = await res.json();
            return resolve({ status: res.ok, id: json.MId });
        } else if (res.status === 200 || res.status === 204) {
            return resolve({ status: res.ok, id });
        } else {
            const json = await res.json();
            return resolve({ status: false, statusText: json.error.message });
        }

    } catch (error) {
        console.log(error);
        return resolve({ status: false, statusText: error.message });
    }
});
}

export  {GetManagersMulti,SetManagerSingle};