# NumberToWord

This package provides a simple function to convert numbers into their word representation. For example, the number `1234` can be converted to `"One Thousand Two Hundred Thirty Four"`.

## Installation 


You can install this package using npm:

```bash
npm install numbertoword 
```



## Usage
To use the package, require it in your code and call the ConvertNumberToWord() function, passing in the number you want to convert as an argument:

```javascript 
const ConvertNumberToWord = require('numbertoword');

console.log(ConvertNumberToWord(123)); // One Hundred Twenty Three
```
## API
`ConvertNumberToWord(num)`
Converts a given number to its equivalent word representation in English.

Parameters
- `num` (number): The number to be converted.
Returns
- (string): The word representation of the given number.

```javascript
const ConvertNumberToWord = require('numbertoword');

console.log(ConvertNumberToWord(123)); // One Hundred Twenty Three
console.log(ConvertNumberToWord(999999999)); // Ninety Nine Crores Ninety Nine Lakhs Ninety Nine Thousand Nine Hundred Ninety Nine
```

## License
This package is licensed under the  [MIT license.](https://www.google.com)


## Contributing

If you encounter a bug or have a feature request, please open an issue on the [GitHub repository](https://www.google.com). Pull requests are also welcome!