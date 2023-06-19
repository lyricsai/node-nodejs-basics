const parseArgs = () => {
  try {
    let allArguments = [];
    process.argv.slice(2).forEach((arg, index, array) => {
      if (arg.startsWith("--")) {
        allArguments.push(`${arg.substring(2)} is ${array[index + 1]}`);
      }
    });
    console.log(allArguments.join(", "));
  } catch (error) {}
};

parseArgs();
