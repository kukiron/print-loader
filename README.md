# print-loader

Webpack loader that prints to the console the filename being processed by another loader (for debugging purposes).

By chaining `print-loader` to the existing loaders, you can print a message that tells you which files are being processed by which loaders.

### Example

A config that prints the filenames being processed by ts-loader:

```
/* ... */
{
  test: /\.tsx?$/,
  exclude: /node_modules/,
  use: [
    { loader: "echo-loader" },
    { loader: "ts-loader" }, // <-- or your loader of choice
  ]
}
/* ... */
```
