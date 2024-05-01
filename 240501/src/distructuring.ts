interface IPerson {
  name: string;
  age: number;
}

const printPerson = ({ name, age }: IPerson): void => {
  console.log(`name:${name},age: ${age}`);
};

printPerson({ name: "Kevin", age: 20 });
