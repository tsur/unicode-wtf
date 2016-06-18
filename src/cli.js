#!/usr/bin/env node

import minimist from "minimist";
import glob from 'glob';
import {getMapper} from './emoji_mapper.js';
import evilunicode from "./evilunicode.js";

function getArgs(cli){

    if(cli.list || cli._[0] === 'ls')
        return ["list", null, null, null];

    const files = glob.sync(cli._[0] || '*.js');
    const unicode = cli._[1] || '\u037E';
    const target = cli._[2] || ';';

    return cli.cure ? [true, files, unicode, target] : [false, files, unicode, target];

}

function execList(){

    const mapper = getMapper();

    Object.keys(mapper).forEach(emoji => console.log(emoji, '=>', mapper[emoji]));

}

function isError(error){

    console.error(error);
}

function isDone(){

    console.log('done!');
}

(function(cli){

    const [command, files, unicode, target] = getArgs(cli);
    
    if(command === "list") return execList();
    if(command === "help") return execHelp();

    const taskFuture = files.map(file => evilunicode(file, unicode, target, command));
    
    Promise.all(taskFuture).then(isDone).catch(isError);

})(minimist(process.argv.slice(2)));
