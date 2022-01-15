/*
    filter a list of candidates to only include candidates who are also active members
    in declarative way instead. (exists in the activeMembers array).
    The output [ 'David' ]
 */

const activeMembers = ['David', 'Dow', 'John', 'Lawrence', 'Michael'];
const candidates = ['David', 'Hanna', 'Melania'];

const activeCandidates = candidates.filter(
    (candidate) => activeMembers.includes(candidate)
);

console.log(activeCandidates);
