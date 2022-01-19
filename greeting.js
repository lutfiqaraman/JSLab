class NameBuilder {
    static capitalize(name) {
        return name.split('').map(s => s.charAt(0).toUpperCase() + s.substring(1)).join('');
    }

    static createGreeting(name) {
        return `Hello, ${name}`;
    }
}

const name = NameBuilder.capitalize('david man');
const greeting = NameBuilder.createGreeting(name);

console.log(greeting);
