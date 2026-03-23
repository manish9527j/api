// api/fakeuser.js
export default async function handler(req, res) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const fakeUser = {
        name: getRandomName(),
        gender: getRandomGender(),
        email: getRandomEmail(),
        phone: getRandomPhone(),
        country: getRandomCountry(),
        address: getRandomAddress(),
        dob: getRandomDOB()
    };

    res.json({
        success: true,
        data: fakeUser
    });
}

// Helper functions
function getRandomName() {
    const first = ['John', 'Jane', 'Alex', 'Sarah', 'Michael', 'Emma', 'Raj', 'Priya'];
    const last = ['Smith', 'Doe', 'Johnson', 'Kumar', 'Singh', 'Patel'];
    return `${first[Math.floor(Math.random() * first.length)]} ${last[Math.floor(Math.random() * last.length)]}`;
}

function getRandomGender() {
    const genders = ['Male', 'Female', 'Non-binary'];
    return genders[Math.floor(Math.random() * genders.length)];
}

function getRandomEmail() {
    const domains = ['gmail.com', 'yahoo.com', 'outlook.com', 'example.com'];
    return `user${Math.floor(Math.random() * 10000)}@${domains[Math.floor(Math.random() * domains.length)]}`;
}

function getRandomPhone() {
    return `+1${Math.floor(Math.random() * 900) + 100}${Math.floor(Math.random() * 900) + 100}${Math.floor(Math.random() * 9000) + 1000}`;
}

function getRandomCountry() {
    const countries = ['United States', 'India', 'United Kingdom', 'Canada', 'Australia'];
    return countries[Math.floor(Math.random() * countries.length)];
}

function getRandomAddress() {
    const streets = ['Main St', 'Park Ave', 'Oak St', 'Maple Dr', 'Church Rd'];
    return `${Math.floor(Math.random() * 9999) + 1} ${streets[Math.floor(Math.random() * streets.length)]}`;
}

function getRandomDOB() {
    const year = Math.floor(Math.random() * 30) + 1970;
    const month = Math.floor(Math.random() * 12) + 1;
    const day = Math.floor(Math.random() * 28) + 1;
    return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
}