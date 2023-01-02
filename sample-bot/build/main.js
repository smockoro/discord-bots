"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const discord_js_1 = require("discord.js");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const client = new discord_js_1.Client({
    intents: [
        discord_js_1.IntentsBitField.Flags.Guilds,
        discord_js_1.IntentsBitField.Flags.GuildMessages,
        discord_js_1.IntentsBitField.Flags.GuildMembers,
        //IntentsBitField.Flags.DirectMessages,
    ],
});
client.once('ready', () => {
    var _a;
    console.log('Bot start up and Ready!');
    console.log((_a = client.user) === null || _a === void 0 ? void 0 : _a.tag);
});
client.on('messageCreate', (message) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("get message");
    //if (message.author.bot) return;
    yield message.fetch(true);
    if (message.content === 'Hello') {
        console.log("before send");
        message.channel.send('World');
        console.log("after send");
    }
}));
client.login(process.env.TOKEN);
