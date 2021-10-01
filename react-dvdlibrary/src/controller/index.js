const apiUrl = "http://dvd-library.us-east-1.elasticbeanstalk.com/"

export const createDvd = async (Dvd) => {
    const body = {
        method: 'POST',
        mode: 'CORS',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(Dvd)
    }
    const response = await fetch(`${apiUrl}dvd`, body)
    console.log(response)
    return response;
}