// 1

let baseInfo = {
    name: "ანი",
    email: "ani@example.com"
};

let additionalInfo = {
    role: "admin",
    status: "active"
};


// 2

let userProfile = Object.assign({}, baseInfo, additionalInfo);
// 3

for (let key in userProfile) {
    console.log(`${key}: ${userProfile[key]}`);
}