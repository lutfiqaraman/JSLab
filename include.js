const carTypes = ['sedan', 'coupe', 'sports car', 'station wagon', 'hatchback',
    'convertible', 'sport-utility vehicle', 'minivan', 'pickup truck' ];

let isCar = false;
let customerCarType = 'Sedan';

if (carTypes.includes(customerCarType.toLowerCase())) {
    isCar = true;
}

if (isCar) {
    console.log('Kindly note that your car type is ' + customerCarType.toLowerCase());
} else {
    console.log('Kindly note that your car type is unknown');
}


