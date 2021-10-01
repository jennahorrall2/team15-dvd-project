const url = "http://dvd-library.us-east-1.elasticbeanstalk.com/";

export const createDvd = async (Dvd) => {
    console.log(JSON.stringify(Dvd));
    const body = {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Dvd),
        cache: 'no-cache',
        credentials: 'same-origin',
        redirect: 'follow',
        referrerPolicy: 'no-referrer',
    };
    const response = await fetch(`${url}dvd`, body);
    return response;
}

export const getDvds = async () => {
    const response = await fetch(`${url}dvds`);
    return response;
}
