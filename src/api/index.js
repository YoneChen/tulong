import config from '../../config';
const $$ = config[NODE_ENV].api
export default {
    POST_UPLOAD: $$ + '/upload',
    POST_EXTRACT: $$ + '/extract',
};