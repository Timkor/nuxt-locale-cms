
import fs from 'fs';

const localeDir = 'C:/Users/Tim/Desktop/Projects/igiftcards-web-2/locales/fr';



export default {

    path: '/:scopeId',

    method: 'GET',

    call({scopeId}) {

        const file = localeDir + '/' + scopeId.split('.').join('/') + '.json';

        return JSON.parse(fs.readFileSync(file, 'utf8'));
    }
}