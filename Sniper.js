fetch = require('node-fetch'),
chalk = require('chalk');
const fs = require('fs');
let reqs = 0
// Tool By Teams77

const { Webhook, MessageBuilder } = require('discord-webhook-node');
var setTitle = require('console-title');
setTitle('Turbo Tool');
// Tool By Teams77
// Tool By Teams77

function Webhookspeed(value,Link) {
    console.log(value,Link)
    const hook = new Webhook(Link);
    hook.send(value);
}
const webhook = "" 
const message = "Done Snip"  
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77

Data = {
    1: ['url','idserver','token'],
    2: ['url','idserver','token'],
    3: ['url','idserver','token'],

        }

    module.exports = class Sniper {
        constructor(options) {
            this.tokenPosition = 0;
            this.snipped = false
            this.interval = 600 
        // كلما زودت اختصار زود سرعة 200
        // سرعة لصيد مرة واحدة 200
            this.checkLisence();
        }
        checkLisence = async () => {
                    console.clear();
            

            this.start();

        }
// Tool By Teams77

start = async () => {
        console.clear();
      

    await this.sleep(2000);

    while (!this.snipped) {
        this.snipe();
        await this.sleep(this.interval);
    }

    process.exit();
}
// Tool By Teams77

snipe = async () => {
    const sleeeeep = async () => {
        await sleep(2000)
        }
        for (let [key, value] of Object.entries(Data)) {
    const response = await fetch(`https://discord.com/api/v9/guilds/${value[1]}/vanity-url`, {
        "credentials": "include",
        "headers": {
            "accept": "*/*",
            "authorization": value[2],
            "Content-Type": "application/json",
        },
        "referrerPolicy": "no-referrer-when-downgrade",
        "body": JSON.stringify({
            "code": value[0]
        }),
        "method": "PATCH",
        "mode": "cors"
    });
// Tool By Teams77

    const json = await response.json();
    if (json?.code === 50001) {
        return console.log(chalk.blue .bold("") + chalk.blue .bold + ' - ' + chalk.blue .bold('Vanity') + chalk.blue .bold("|") + " " + chalk.blue .bold(""));
    }

    if (json?.errors?.code?._errors[0]?.code === 'no bro') {
        return console.log(chalk.blue .bold("") + chalk.blue .bold + ' - ' + chalk.blue .bold('Vanity') + chalk.blue .bold("|") + " " + chalk.blue .bold(""));
    }

    if (json?.errors?.code?._errors[0]?.code) {
        return console.log(chalk.blue .bold("") + chalk.blue .bold + ' - ' + chalk.blue .bold('ERROR') + chalk.blue .bold("|") + " " + chalk.blue .bold());
    }

    if (json?.code === 0) {
        return console.log(chalk.blue .bold("") + chalk.blue .bold() + '' + chalk.blue .bold('FAILED TOKEN') + chalk.blue .bold("") + " " + chalk.blue .bold(''));
    }
    
    if (json.code === value[0]) {
        let date = Date.now()
	console.log(chalk.green .bold(chalk.red .bold`` +'Turbo Tool - Snipe The Vanity')+ ' || ' + '[' + chalk.green .bold(value[0]) + ']',chalk.blue .bold`Turbo Tool Accuracy : : ${(Date.now() - date) /1000 }s`);
        setTimeout(() => {
            return this.snipped = true;
        }, 100);
        if (json.retry_after) {
        }

        const hook = new Webhook(`${webhook}`);
        hook.send(`**${message}\n\nhttps://discord.gg/${value[0]}\n\n\n\nAccuracy Turbo Tool : ${(Date.now() - date) / 1000}s\n\n This Tool  \n\n||@everyone||**`); 
        return this.snipped = false;
    } else {
        if (json.retry_after) {
        } else if (json.code == 50020) {
			reqs++
            console.log(chalk.red `` + '' +  chalk.blue () +'' +  chalk.blue ``    +   '' +   chalk.blue  (' Request  : ' ) + '[' + chalk.white .bold (reqs ) + ']'   + ' || ' +chalk.green.bold("")  + '' + chalk.green.bold()+ chalk.red ('Predon#0004 Sniping : ') +'' + ''  + chalk.yellow (" Server Vanity : ")+ '[' +  chalk.green (value[0]) + ']'  +''  + chalk.blue ``+ ' || ' +  chalk.blue()  +chalk.red(" Server Id : "),  '[' + chalk.red(value[1])  +']' +' || ' +chalk.red(" Token : "),  '[' + chalk.red(value[2])  +']' 
            );
        }
    }
}}
reqs  
getCooldown = (cooldown) => {
    const time = parseInt(cooldown - Date.now());
    const pretty = this.prettyMs(time * 1000);

    return pretty;
}

pluralize = (word, count) => count === 1 ? word : `${word}s`;

prettyMs = (milliseconds, options = {}) => {
    if (!Number.isFinite(milliseconds)) {
        throw new TypeError('Expected a finite number');
    }

    if (options.colonNotation) {
        options.compact = false;
        options.formatSubMilliseconds = false;
        options.separateMilliseconds = false;
        options.verbose = false;
    }

    if (options.compact) {
        options.secondsDecimalDigits = 0;
        options.millisecondsDecimalDigits = 0;
    }

    const result = [];

    const floorDecimals = (value, decimalDigits) => {
        const floowhiteInterimValue = Math.floor((value * (10 ** decimalDigits)) + 0.0000001);
        const floowhiteValue = Math.round(floowhiteInterimValue) / (10 ** decimalDigits);
        return floowhiteValue.toFixed(decimalDigits);
    };

    const add = (value, long, short, valueString) => {
        if ((result.length === 0 || !options.colonNotation) && value === 0 && !(options.colonNotation && short === 'm')) {
            return;
        }

        valueString = (valueString || value || '0').toString();
        let prefix;
        let suffix;
        if (options.colonNotation) {
            prefix = result.length > 0 ? ':' : '';
            suffix = '';
            const wholeDigits = valueString.includes('.') ? valueString.split('.')[0].length : valueString.length;
            const minLength = result.length > 0 ? 2 : 1;
            valueString = '0'.repeat(Math.max(0, minLength - wholeDigits)) + valueString;
        } else {
            prefix = '';
            suffix = options.verbose ? ' ' + this.pluralize(long, value) : short;
        }

        result.push(prefix + valueString + suffix);
    };

    const parsed = parseMilliseconds(milliseconds);

    function parseMilliseconds(milliseconds) {
        if (typeof milliseconds !== 'number') {
            throw new TypeError('Expected a number');
        }

        const roundTowardsZero = milliseconds > 0 ? Math.floor : Math.ceil;

        return {
            days: roundTowardsZero(milliseconds / 86400000),
            hours: roundTowardsZero(milliseconds / 3600000) % 24,
            minutes: roundTowardsZero(milliseconds / 60000) % 60,
            seconds: roundTowardsZero(milliseconds / 1000) % 60,
            milliseconds: roundTowardsZero(milliseconds) % 1000,
            microseconds: roundTowardsZero(milliseconds * 1000) % 1000,
            nanoseconds: roundTowardsZero(milliseconds * 1e6) % 1000
        };
    }

    add(Math.trunc(parsed.days / 365), 'année', 'y');
    add(parsed.days % 365, 'jour', 'd');
    add(parsed.hours, 'heure', 'h');
    add(parsed.minutes, 'minute', 'm');

    if (
        options.separateMilliseconds ||
        options.formatSubMilliseconds ||
        (!options.colonNotation && milliseconds < 1000)
    ) {
        add(parsed.seconds, 'seconde', 's');
        if (options.formatSubMilliseconds) {
            add(parsed.milliseconds, 'milliseconde', 'ms');
            add(parsed.microseconds, 'microseconde', 'µs');
            add(parsed.nanoseconds, 'nanoseconde', 'ns');
        } else {
            const millisecondsAndBelow =
                parsed.milliseconds +
                (parsed.microseconds / 1000) +
                (parsed.nanoseconds / 1e6);

            const millisecondsDecimalDigits =
                typeof options.millisecondsDecimalDigits === 'number' ?
                    options.millisecondsDecimalDigits :
                    0;

            const roundedMiliseconds = millisecondsAndBelow >= 1 ?
                Math.round(millisecondsAndBelow) :
                Math.ceil(millisecondsAndBelow);

            const millisecondsString = millisecondsDecimalDigits ?
                millisecondsAndBelow.toFixed(millisecondsDecimalDigits) :
                roundedMiliseconds;

            add(
                Number.parseFloat(millisecondsString, 10),
                'millisecond',
                'ms',
                millisecondsString
            );
        }
    } else {
        const seconds = (milliseconds / 1000) % 60;
        const secondsDecimalDigits =
            typeof options.secondsDecimalDigits === 'number' ?
                options.secondsDecimalDigits :
                1;
        const secondsFixed = floorDecimals(seconds, secondsDecimalDigits);
        const secondsString = options.keepDecimalsOnWholeSeconds ?
            secondsFixed :
            secondsFixed.replace(/\.0+$/, '');
        add(Number.parseFloat(secondsString, 10), 'seconde', 's', secondsString);
    }

    if (result.length === 0) {
        return '0' + (options.verbose ? ' milliseconds' : 'ms');
    }

    if (options.compact) {
        if (result.length >= 3) return result.slice(0, 2).join(' et ');
        else return result[0];
    }

    if (typeof options.unitCount === 'number') {
        const separator = options.colonNotation ? '' : ' ';
        return result.slice(0, Math.max(options.unitCount, 1)).join(separator);
    }

    return options.colonNotation ? result.join('') : result.join(' ');
}

sleep = (interval) => {
    return new Promise(resolve => setTimeout(resolve, interval))
}

get token() {
    if (this.tokenPosition > this.tokens.length - 1) this.tokenPosition = 0;
    const token = this.tokens[this.tokenPosition];
    this.tokenPosition++;

    return token;
}

get time() {
    return require("moment-timezone").tz(Date.now(), "Europe/Paris").format("HH:mm:ss");
}

}

// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
// Tool By Teams77
