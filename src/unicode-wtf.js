
import fs from "fs";
import {isEmoji, mapToUnicode} from "./emoji_mapper.js";

export default function(file, unicode, target, cure){

    unicode = isEmoji(unicode) ? mapToUnicode(unicode) : unicode;

    return new Promise(function(resolve, reject) {
        
        fs.readFile(file, 'utf8', function (err, fileContent) {
        
            if (err) return reject(err);

            const regex = new RegExp(cure ? unicode : target, "gi");
            const result = fileContent.replace(regex, cure ? target : unicode);

            fs.writeFile(file, result, 'utf8', function (err) {
                
                if (err) return reject(err);
            
                resolve();
            });
        
        });

    });
};



