function excercise2() {
    let items = [
        { name: "alice", age: 53, hasInsurance: false, insuranceExpiresIn: -3 },
        { name: "bob", age: "35", hasInsurance: undefined, insuranceExpiresIn: 7 },
        { name: "charlie", age: 22, hasInsurance: "0", insuranceExpiresIn: undefined },
        { name: null, age: 19, hasInsurance: true, insuranceExpiresIn: 3 },
        { name: "sarah", age: "23", hasInsurance: 1, insuranceExpiresIn: "2"},
        { name: "charlotte", age: 35, hasInsurance: "true", insuranceExpiresIn: "5"}
    ];

    items.forEach(item => {
        item.name = (item?.name && item.name.charAt(0).toUpperCase() + item.name.slice(1)) || "Unknown";
        let ageWhenInsuranceExpires = +item.age + +item.insuranceExpiresIn;

        hasInsurance = !!Number(item.hasInsurance) || (!!item.insuranceExpiresIn && +item.insuranceExpiresIn > 0);

        let text = hasInsurance ?
            `insurance expires when this person is ${ageWhenInsuranceExpires} years old` :
            `doesn't have insurance, will be ${+item.age + 1} next year`;

        console.log(`${item.name}: ${text}`);
    });
}

function excercise3() {
    const a = {
        aux: 2,
        // valueOf: function() {
        //     return 5;
        // }
        valueOf: function() {
            return a.aux++;
        }
    }
    // console.log(a);
    // console.log(a.valueOf());
    // console.log(a == 5);
    if (a == 2 && a == 3) {
        console.log('How on earth did you get here?');
    }
}

// excercise2();
excercise3();