const times = process.argv.slice(2);

for (let time of times) {
  time = Number(time);
  if (time > 0 && typeof(time) === 'number') {
    setTimeout(() => {
      process.stderr.write("\007");
    }, time * 1000);
  }
}