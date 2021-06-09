// Obtains all theatres
export const fetchAllTheatres = async () => {
    let info = {};
    try {
        const r = await fetch(`http://localhost:5000/get-all-theatres`, {
            method: 'GET',
            headers: {
                Accept: 'application/json', 
            },
            mode: 'cors',
        });
        const data = await r.json();
        // console.log(data)
        if (!r.ok) {
            throw Error(data.error);
        }
        info = data;
    }
    catch (e) {
        alert(e);
    }
    return info;
}

// Obtains theatre info from a theatre id (tid)
export const fetchTheatreInfo = async (tid) => {
    let info = {};
    try {
        const r = await fetch(`http://localhost:5000/theatre-info/${tid}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json', 
            },
            mode: 'cors',
        });
        const data = await r.json();
        // console.log(data)
        if (!r.ok) {
            throw Error(data.error);
        }
        info = data;
    }
    catch (e) {
        alert(e);
    }
    return info;
}

// Obtains movie info from a movie id (mid)
export const fetchMovieInfo = async (mid) => {
    let info = {};
    try {
        const r = await fetch(`http://localhost:5000/movie-info/${mid}`, {
            method: 'GET',
            headers: {
                Accept: 'application/json', 
            },
            mode: 'cors',
        });
        const data = await r.json();
        // console.log(data)
        if (!r.ok) {
            throw Error(data.error);
        }
        info = data;
    }
    catch (e) {
        alert(e);
    }
    return info;
}
