/*
        Using guard clauses in JS
 */

function getValidatecandidate(candidate, members) {
    if (!candidate)
        return;

    const member = members.find(
        (member) => member.name === candidate
    );

    if (!member)
        return;

    const hasLegalAge = member.age > 18;

    if (!hasLegalAge)
        return;

    return member;
}
