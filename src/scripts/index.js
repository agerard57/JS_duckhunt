const scripts = ["bgm", "countdown", "duck"];

scripts.forEach((element) =>
    document.writeln(
        '<script type="text/javascript" src="src/scripts/' +
        element +
        '.js"></script>'
    )
);