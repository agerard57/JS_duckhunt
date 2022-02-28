const scripts = ["countdown", "script"];

scripts.forEach((element) =>
  document.writeln(
    '<script type="text/javascript" src="src/scripts/' +
      element +
      '.js"></script>'
  )
);
