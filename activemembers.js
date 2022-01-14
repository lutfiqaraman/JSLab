/*
    filter a list of candidates to only include candidates who are also active members
    (exists in the activeMembers array).
 */

const activeMembers = ['David', 'Dow', 'John', 'Lawrence', 'Michael'];
const candidates = ['David', 'Hanna', 'Melania'];
const activeCandidates = [];


for (const candidate of candidates ) {
    if (activeMembers.includes(candidate)) {
        activeCandidates.push(candidate);
    }
}

console.log(activeCandidates);
// Result will be ["David"]
