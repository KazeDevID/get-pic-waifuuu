const fs = require('fs-extra')
const chalk = require('chalk')
const readlineSync = require('readline-sync')
const fetch = require('node-fetch')
const axios = require('axios')

const random = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ23456789'.split('');

function anunya(len) {
    const result = [];
    for (let i = 0; i < len; i++) result.push(random[Math.floor(Math.random() * random.length)]);
    return result.join('');
}

console.log(chalk.cyan(`${chalk.red('- - GET YOUR WAIFU - -')}\nAnime Picture\nCreated by KazeDevID\nYT : KAZEDEVID\n${chalk.red('- - GET YOUR WAIFU - -')}\n`))
console.log(`${chalk.cyan('TYPE')}\n1. Wallpaper\n2. Waifu\n3. Waifu (NSFW)\n`)

const type = readlineSync.questionInt(chalk.yellow("- Mau type nomor berapa?: "))
if (type > 3) return console.log('Pilihannya cuman 3 tolol')

const jml = readlineSync.questionInt(chalk.yellow("- Mau download berapa gambar? (max 50): "))
if (jml > 50) return console.log('Maksimal 50 image bodoh')


try {
    console.log(chalk.yellow('\nLagi proses download...\nNanti letak gambarnya ada di folder "Hasil-Get-Waifu"'))
    for (let i = 0; i < jml; i++) {
        if (type == '1') {
            axios.get(`https://nekos.life/api/v2/img/wallpaper`)
                .then(async (res) => {
                    const data = res.data.url
                    if (fs.existsSync('/sdcard/Hasil-Get-Waifu')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/Hasil-Get-Waifu/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/Hasil-Get-Waifu')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/Hasil-Get-Waifu/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
        } else if (type == '2') {
            axios.get(`https://api.waifu.pics/sfw/waifu`)
                .then(async (res) => {
                    const data = res.data.url
                    if (fs.existsSync('/sdcard/Hasil-Get-Waifu')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/Hasil-Get-Waifu/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/Hasil-Get-Waifu')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/Hasil-Get-Waifu/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
        } else if (type == '3') {
            axios.get(`https://api.waifu.pics/nsfw/waifu`)
                .then(async (res) => {
                    const data = res.data.url
                    if (fs.existsSync('/sdcard/Hasil-Get-Waifu')) {
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/Hasil-Get-Waifu/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    } else {
                        fs.mkdir('/sdcard/Hasil-Get-Waifu')
                        const response = await fetch(data);
                        const buffer = await response.buffer();
                        fs.writeFile(`/sdcard/Hasil-Get-Waifu/${anunya(5)}.jpg`, buffer, () =>
                            console.log(chalk.green('finished downloading!')))
                    }
                })
        } else {
            console.log(chalk.red('Pilihan hanya 1 - 3'))
        }
    }
} catch (err) {
    console.log(err)
}
