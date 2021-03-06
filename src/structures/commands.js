import prefix from './commands/prefix';
import help from './commands/help';
import ping from './commands/ping';
import news from './commands/news';
import sub from './commands/sub';
import item from './commands/item';
import career from './commands/career';
import hero from './commands/hero';
import config from './commands/config';

export default {

    'prefix': (tokens, message) => {
        return prefix(tokens, message);
    },
    'help': (tokens, message) => {
        return help(message);
    },
    'ping': (tokens, message) => {
        return ping(message);
    },
    'news': (tokens, message) => {
        return news(tokens, message);
    },
    'sub': (tokens, message) => {
        return sub(message);
    },
    'item': (tokens, message) => {
        return item(tokens, message);
    },
    'career': (tokens, message) => {
        return career(tokens, message);
    },
    'hero': (tokens, message) => {
        return hero(tokens, message);
    },
    'config': (tokens, message) => {
        return config(message);
    }

};