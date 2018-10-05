import fs from 'fs';
import path from 'path';

const localeDir = 'C:/Users/Tim/Desktop/Projects/igiftcards-web-2/locales/fr';

function walkSync(dir, filelist = []) {
    fs.readdirSync(dir).forEach(file => {
        const dirFile = path.join(dir, file);
        try {
            filelist = walkSync(dirFile, filelist);
        }
        catch (err) {
            if (err.code === 'ENOTDIR' || err.code === 'EBUSY') 
                filelist = [...filelist, dirFile];
            else throw err;
        }
    });
    return filelist;
}

function getScopes() {
    return walkSync(localeDir).map(file => 
        path.relative(localeDir, file).replace('\\', '.').replace(/\.json$/, '')
    )
}

export default {

    path: '/',

    method: 'GET',

    call() {
        return getScopes();
    }
}