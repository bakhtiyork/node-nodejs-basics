const parseArgs = () => {
    let args = process.argv.slice(2);
    var output = [];
    for (let i = 0; i < args.length; i += 2) {
        output.push(`${args[i].substring(2)} is ${args[i + 1]}`);
    }
    console.log(output.join(", "));
};

parseArgs();