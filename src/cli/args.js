const parseArgs = () => {
  const args = process.argv.slice(2);
  const parsedArgs = {};

  for (let i = 0; i < args.length; i += 2) {
    console.log(`${args[i].replace(/^--/, "")} is ${args[i + 1]}`);
  }
};
parseArgs();
