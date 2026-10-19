const personal={
    name:"Arun"
};
const professional={
    role:"Developer",
    company: "ABC company"
};
const profile={...personal,...professional};
console.log(profile);