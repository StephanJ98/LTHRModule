exports.TheoricalMaxHeartRate = (age, gender) => {
    switch (String(gender).toLocaleLowerCase()) {
        case 'm':
            return 220 - age
        case 'f':
            return 226 - age
        default:
            return 223 - age
    }
}

exports.FTPZones = (age, gender) => {
    let maxHeartRate = this.TheoricalMaxHeartRate(age, gender)
    let zones = {
        "zone1": (maxHeartRate * 0.75).toFixed(0),
        "zone2": (maxHeartRate * 0.85).toFixed(0),
        "zone3": (maxHeartRate * 0.92).toFixed(0),
        "zone4": (maxHeartRate * 0.96).toFixed(0),
        "zone5": (maxHeartRate * 1.05).toFixed(0),
        "zone6": (maxHeartRate * 1.2).toFixed(0),
        "zone7": (maxHeartRate * 1.5).toFixed(0),
    }
    return zones
}