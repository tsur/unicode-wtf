

## Install

```
npm install unicode-wtf --global
```

## What's unicode-wtf ?

> This is a just a little toy for having fun with your workmates and friends. Look at their faces after opening its code editor !!

By defaul, unicode-wtf replaces all semicolons with unicode greek question mark, which is pretty similar to the actual semicolon, only that javascript interprets will complaint about it (o-O) !

![Example1](assets/1.gif?raw=true)

You can simply copy & paste the unicode right as an input parameter and will work

![Example2](assets/2.gif?raw=true)

You can also use globs and if not sure what unicode to use, type some of those from the available catalog

![Example3](assets/3.gif?raw=true)

![Example4](assets/4.gif?raw=true)

This is just for fun, so please, do not forget to cure your targets back !!!!, just run the command again with the `--cure` option to restore it  

## Usage

After it is installed, use  ```unicode-wtf <target> <unicode> <string_in_target> ``` as in the examples below.

```bash
# running with no parameters, it replaces semicolons in all .js files in current dir (*.js) with greek question marks 
$> unicode-wtf
```

```bash
# replaces myfile.js semicolons with monkey faces
$> unicode-wtf myfile.js 🐵 
# cure it back
$> unicode-wtf myfile.js 🐵  --cure
```

```bash
# replaces "var" string in all files within src folder with bugs 
$> unicode-wtf "src/*.js" :bug: var
#cure it back
$> unicode-wtf "src/*.js" :bug: var --cure
```

```bash
# display unicode catalog list available if not sure what to use
$> unicode-wtf --list
```

## Disclaimer

User assumes sole responsibility for the use and possible consequences of this tool.

