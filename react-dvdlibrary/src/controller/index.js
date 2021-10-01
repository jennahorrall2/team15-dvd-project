const apiUrl = "http://dvd-library.us-east-1.elasticbeanstalk.com/"

export const createDvd = async (Dvd) => {
    console.log(JSON.stringify(Dvd))
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
    }
    const response = await fetch(`${apiUrl}dvd`, body)
    return response;
}