// Converts an "am/pm" string to a 24 date object for easy comparrison
export const formatTo24h = (timestr) => {
    const [time, modifier] = timestr.split(' ');
    let [hours, minutes] = time.split(':');

    if (hours === '12') {
        hours = '00';
    }

    if (modifier === 'pm') {
        hours = parseInt(hours, 10) + 12;
    }

    return `${hours}:${minutes}`;
}

// Sort times
export const sortTimeList = (timeList) => {
    return timeList.sort((a, b) => {
        // get time time from string 
        // then get am or pm from string and append
        // both can be done using slice method
        // don't care much about date as only interested in the time
        return Date.parse('1970/01/01 ' + a.slice(0, -2) + ' ' + a.slice(-2)) - Date.parse('1970/01/01 ' + b.slice(0, -2) + ' ' + b.slice(-2))
    });
}

// Checks to see if dateTime obj has already passed timeB
export const timePassed = (dateTime, timestr) => {
    const [dateTimeH, dateTimeM] = [dateTime.getHours(), dateTime.getMinutes()];
    const [timestrh, timestrm] = timestr.split(':');

    if (dateTimeH > timestrh) {
        return true;
    }
    
    /* eslint eqeqeq: 0 */
    if (dateTimeH == timestrh && dateTimeM >= timestrm) {
        return true;
    }
    
    return false;
}
