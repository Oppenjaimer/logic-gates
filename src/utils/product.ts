export default function product(iterables: boolean[], repeat: number) {
  var argv = Array.prototype.slice.call(arguments),
    argc = argv.length;
  if (argc === 2 && !isNaN(argv[argc - 1])) {
    var copies = [];
    for (var i = 0; i < argv[argc - 1]; i++) {
      copies.push(argv[0].slice());
    }
    argv = copies;
  }
  return argv.reduce(
    function tl(accumulator, value) {
      var tmp: any = [];
      accumulator.forEach(function (a0: any) {
        value.forEach(function (a1: any) {
          tmp.push(a0.concat(a1));
        });
      });
      return tmp;
    },
    [[]]
  );
}
