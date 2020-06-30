const faker = require('faker');
const fs = require("fs");

const number = +(process.argv[2] || 1000);

const data = [];

for (let i = 0;i < number; i++) {
    data.push({
      id: `${i}`,
      jobTitle: faker.name.jobTitle(),
      emailAddress: faker.internet.email(),
      firstNameLastName: faker.fake(
        "{{name.firstName}}, {{name.lastName}}"
      ),
    });
}
fs.writeFile("mockData.json", JSON.stringify(data), () => {});