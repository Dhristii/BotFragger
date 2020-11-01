const Discord = require('discord.js');
const bot = new Discord.Client();
let fs = require('fs');
const { deflate } = require('zlib');

const prefix = '#';

const version = '1.0.2'

bot.on('ready', function(){
    console.log('pantekkk');
})

bot.on('message', function(message){
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    let chat = message.content.slice(prefix.length).toLowerCase().split(' ');

    let lineReader = require('readline').createInterface({
        input: fs.createReadStream(__dirname + '/botfrager.txt')
    });

    switch(chat[0]){
        case 'update' : 
            if(chat[1] && chat[2])message.channel.send('UPDATE DULU GAN XIXIXI');

            if(chat[1] === 'dd' && chat[2] != null){
                lineReader.on('line', function (line) {
                    
                    let array = line.split(',');
                    
                    if(chat[2] === 'shouko'){
                        array[8] = parseInt(array[8]) + 1;
                    }else if(chat[2] === 'datonkun'){
                        array[9] = parseInt(array[9]) + 1;
                    }else if(chat[2] === 'kuhaku'){
                        array[10] = parseInt(array[10]) + 1;
                    }

                    array[1] = parseInt(array[1]) + 1;
                    array[12] = parseInt(array[12]) + 1;

                    let print = {};
                    print[0] = array[0];
                    print[1] = 'Dd ' + array[1];
                    print[2] = 'Shouko ' + array[2];
                    print[3] = 'Datonkun ' + array[3];
                    print[4] = 'Kuhaku Desu ' + array[4];
                    print[5] = '';
                    print[6] = array[6];
                    print[7] = 'Dd ' + array[7];
                    print[8] = 'Shouko ' + array[8];
                    print[9] = 'Datonkun ' + array[9];
                    print[10] = 'Kuhaku Desu ' + array[10];
                    print[11] = '';
                    print[12] = 'Match : ' + array[12];

                    let temp = Object.keys(print).map((key) => [print[key]]);
                    message.channel.send(temp);

                    let toWrite = array;
                    fs.writeFile('botfrager.txt', toWrite, function(err){
                        if(err) throw err;
                    });
                
                });
            }else if(chat[1] === 'shouko' && chat[2] != null){
                lineReader.on('line', function (line) {
                    let array = line.split(',');
                    
                    if(chat[2] === 'dd'){
                        array[7] = parseInt(array[7]) + 1;
                    }else if(chat[2] === 'datonkun'){
                        array[9] = parseInt(array[9]) + 1;
                    }else if(chat[2] === 'kuhaku'){
                        array[10] = parseInt(array[10]) + 1;
                    }

                    array[2] = parseInt(array[2]) + 1;
                    array[12] = parseInt(array[12]) + 1;

                    let print = {};
                    print[0] = array[0];
                    print[1] = 'Dd ' + array[1];
                    print[2] = 'Shouko ' + array[2];
                    print[3] = 'Datonkun ' + array[3];
                    print[4] = 'Kuhaku Desu ' + array[4];
                    print[5] = '';
                    print[6] = array[6];
                    print[7] = 'Dd ' + array[7];
                    print[8] = 'Shouko ' + array[8];
                    print[9] = 'Datonkun ' + array[9];
                    print[10] = 'Kuhaku Desu ' + array[10];
                    print[11] = '';
                    print[12] = 'Match : ' + array[12];

                    let temp = Object.keys(print).map((key) => [print[key]]);
                    message.channel.send(temp);

                    let toWrite = array;
                    fs.writeFile('botfrager.txt', toWrite, function(err){
                        if(err) throw err;
                    });
                });
            }else if(chat[1] === 'datonkun' && chat[2] != null){
                lineReader.on('line', function (line) {
                    let array = line.split(',');
                    
                    if(chat[2] === 'dd'){
                        array[7] = parseInt(array[7]) + 1;
                    }else if(chat[2] === 'shouko'){
                        array[8] = parseInt(array[8]) + 1;
                    }else if(chat[2] === 'kuhaku'){
                        array[10] = parseInt(array[10]) + 1;
                    }
                    
                    array[3] = parseInt(array[3]) + 1;
                    array[12] = parseInt(array[12]) + 1;

                    let print = {};
                    print[0] = array[0];
                    print[1] = 'Dd ' + array[1];
                    print[2] = 'Shouko ' + array[2];
                    print[3] = 'Datonkun ' + array[3];
                    print[4] = 'Kuhaku Desu ' + array[4];
                    print[5] = '';
                    print[6] = array[6];
                    print[7] = 'Dd ' + array[7];
                    print[8] = 'Shouko ' + array[8];
                    print[9] = 'Datonkun ' + array[9];
                    print[10] = 'Kuhaku Desu ' + array[10];
                    print[11] = '';
                    print[12] = 'Match : ' + array[12];

                    let temp = Object.keys(print).map((key) => [print[key]]);
                    message.channel.send(temp);

                    let toWrite = array;
                    fs.writeFile('botfrager.txt', toWrite, function(err){
                        if(err) throw err;
                    });
                });
            }else if(chat[1] === 'kuhaku' && chat[2] != null){
                lineReader.on('line', function (line) {
                    let array = line.split(',');
                    
                    if(chat[2] === 'dd'){
                        array[7] = parseInt(array[7]) + 1;
                    }else if(chat[2] === 'shouko'){
                        array[8] = parseInt(array[8]) + 1;
                    }else if(chat[2] === 'datonkun'){
                        array[9] = parseInt(array[9]) + 1;
                    }

                    array[4] = parseInt(array[4]) + 1;
                    array[12] = parseInt(array[12]) + 1;

                    let print = {};
                    print[0] = array[0];
                    print[1] = 'Dd ' + array[1];
                    print[2] = 'Shouko ' + array[2];
                    print[3] = 'Datonkun ' + array[3];
                    print[4] = 'Kuhaku Desu ' + array[4];
                    print[5] = '';
                    print[6] = array[6];
                    print[7] = 'Dd ' + array[7];
                    print[8] = 'Shouko ' + array[8];
                    print[9] = 'Datonkun ' + array[9];
                    print[10] = 'Kuhaku Desu ' + array[10];
                    print[11] = '';
                    print[12] = 'Match : ' + array[12];

                    let temp = Object.keys(print).map((key) => [print[key]]);
                    message.channel.send(temp);

                    let toWrite = array;
                    fs.writeFile('botfrager.txt', toWrite, function(err){
                        if(err) throw err;
                    });
                });
            }else{
                message.channel.send('Format salah\nlist nama: dd, shouko, datonkun, kuhaku.\nFormat : #update "nama botfrag" "nama topfrag"');
            }
            break;

        case 'help' :
            message.channel.send('Command:\n#display\n#update\n#manual\n#rollback\n#version\n#help');
            break;

        case 'version' :
            message.channel.send(version);
            break;

        case 'display' :
            lineReader.on('line', function (line) {
                let array = line.split(',');
                
                let print = {};
                print[0] = array[0];
                print[1] = 'Dd ' + array[1];
                print[2] = 'Shouko ' + array[2];
                print[3] = 'Datonkun ' + array[3];
                print[4] = 'Kuhaku Desu ' + array[4];
                print[5] = '';
                print[6] = array[6];
                print[7] = 'Dd ' + array[7];
                print[8] = 'Shouko ' + array[8];
                print[9] = 'Datonkun ' + array[9];
                print[10] = 'Kuhaku Desu ' + array[10];
                print[11] = '';
                print[12] = 'Match : ' + array[12];

                let temp = Object.keys(print).map((key) => [print[key]]);
                message.channel.send(temp);
                
            });
            break;

        case 'manual' :

            if(chat[1] === 'dd' && chat[2] != null){
                lineReader.on('line', function (line) {
                    
                    let array = line.split(',');

                    array[1] = parseInt(chat[2]);
                    
                    if(chat[3] === 'shouko' && chat[4] != null){
                        array[8] = parseInt(chat[4]);
                    }else if(chat[3] === 'datonkun' && chat[4] != null){
                        array[9] = parseInt(chat[4]);
                    }else if(chat[3] === 'kuhaku' && chat[4] != null){
                        array[10] = parseInt(chat[4]);
                    }else{
                        message.channel.send('Topfrag tidak di update!');
                    }
                    
                    if(chat[5] === 'match' || chat[5] === 'm' && chat[6] != null){
                        array[12] = parseInt(chat[6]);
                    }else{
                        message.channel.send('Match tidak di update!');
                    }

                    let print = {};
                    print[0] = array[0];
                    print[1] = 'Dd ' + array[1];
                    print[2] = 'Shouko ' + array[2];
                    print[3] = 'Datonkun ' + array[3];
                    print[4] = 'Kuhaku Desu ' + array[4];
                    print[5] = '';
                    print[6] = array[6];
                    print[7] = 'Dd ' + array[7];
                    print[8] = 'Shouko ' + array[8];
                    print[9] = 'Datonkun ' + array[9];
                    print[10] = 'Kuhaku Desu ' + array[10];
                    print[11] = '';
                    print[12] = 'Match : ' + array[12];

                    let temp = Object.keys(print).map((key) => [print[key]]);
                    message.channel.send(temp);

                    let toWrite = array;
                    fs.writeFile('botfrager.txt', toWrite, function(err){
                        if(err) throw err;
                    });
                
                });
            }else if(chat[1] === 'shouko' && chat[2] != null){
                lineReader.on('line', function (line) {
                    
                    let array = line.split(',');

                    array[2] = parseInt(chat[2]);
                    
                    if(chat[3] === 'dd' && chat[4] != null){
                        array[7] = parseInt(chat[4]);
                    }else if(chat[3] === 'datonkun' && chat[4] != null){
                        array[9] = parseInt(chat[4]);
                    }else if(chat[3] === 'kuhaku' && chat[4] != null){
                        array[10] = parseInt(chat[4]);
                    }else{
                        message.channel.send('Topfrag tidak di update!');
                    }
                    
                    if(chat[5] === 'match' || chat[5] === 'm' && chat[6] != null){
                        array[12] = parseInt(chat[6]);
                    }else{
                        message.channel.send('Match tidak di update!');
                    }

                    let print = {};
                    print[0] = array[0];
                    print[1] = 'Dd ' + array[1];
                    print[2] = 'Shouko ' + array[2];
                    print[3] = 'Datonkun ' + array[3];
                    print[4] = 'Kuhaku Desu ' + array[4];
                    print[5] = '';
                    print[6] = array[6];
                    print[7] = 'Dd ' + array[7];
                    print[8] = 'Shouko ' + array[8];
                    print[9] = 'Datonkun ' + array[9];
                    print[10] = 'Kuhaku Desu ' + array[10];
                    print[11] = '';
                    print[12] = 'Match : ' + array[12];

                    let temp = Object.keys(print).map((key) => [print[key]]);
                    message.channel.send(temp);

                    let toWrite = array;
                    fs.writeFile('botfrager.txt', toWrite, function(err){
                        if(err) throw err;
                    });
                
                });
            }else if(chat[1] === 'datonkun' && chat[2] != null){
                lineReader.on('line', function (line) {
                    
                    let array = line.split(',');

                    array[3] = parseInt(chat[2]);
                    
                    if(chat[3] === 'dd' && chat[4] != null){
                        array[7] = parseInt(chat[4]);
                    }else if(chat[3] === 'shouko' && chat[4] != null){
                        array[8] = parseInt(chat[4]);
                    }else if(chat[3] === 'kuhaku' && chat[4] != null){
                        array[10] = parseInt(chat[4]);
                    }else{
                        message.channel.send('Topfrag tidak di update!');
                    }
                    
                    if(chat[5] === 'match' || chat[5] === 'm' && chat[6] != null){
                        array[12] = parseInt(chat[6]);
                    }else{
                        message.channel.send('Match tidak di update!');
                    }

                    let print = {};
                    print[0] = array[0];
                    print[1] = 'Dd ' + array[1];
                    print[2] = 'Shouko ' + array[2];
                    print[3] = 'Datonkun ' + array[3];
                    print[4] = 'Kuhaku Desu ' + array[4];
                    print[5] = '';
                    print[6] = array[6];
                    print[7] = 'Dd ' + array[7];
                    print[8] = 'Shouko ' + array[8];
                    print[9] = 'Datonkun ' + array[9];
                    print[10] = 'Kuhaku Desu ' + array[10];
                    print[11] = '';
                    print[12] = 'Match : ' + array[12];

                    let temp = Object.keys(print).map((key) => [print[key]]);
                    message.channel.send(temp);

                    let toWrite = array;
                    fs.writeFile('botfrager.txt', toWrite, function(err){
                        if(err) throw err;
                    });
                
                });
            }else if(chat[1] === 'kuhaku' && chat[2] != null){
                lineReader.on('line', function (line) {
                    
                    let array = line.split(',');

                    array[4] = parseInt(chat[2]);
                    
                    if(chat[3] === 'dd' && chat[4] != null){
                        array[7] = parseInt(chat[4]);
                    }else if(chat[3] === 'shouko' && chat[4] != null){
                        array[8] = parseInt(chat[4]);
                    }else if(chat[3] === 'datonkun' && chat[4] != null){
                        array[9] = parseInt(chat[4]);
                    }else{
                        message.channel.send('Topfrag tidak di update!');
                    }
                    
                    if(chat[5] === 'match' || chat[5] === 'm' && chat[6] != null){
                        array[12] = parseInt(chat[6]);
                    }else{
                        message.channel.send('Match tidak di update!');
                    }

                    let print = {};
                    print[0] = array[0];
                    print[1] = 'Dd ' + array[1];
                    print[2] = 'Shouko ' + array[2];
                    print[3] = 'Datonkun ' + array[3];
                    print[4] = 'Kuhaku Desu ' + array[4];
                    print[5] = '';
                    print[6] = array[6];
                    print[7] = 'Dd ' + array[7];
                    print[8] = 'Shouko ' + array[8];
                    print[9] = 'Datonkun ' + array[9];
                    print[10] = 'Kuhaku Desu ' + array[10];
                    print[11] = '';
                    print[12] = 'Match : ' + array[12];

                    let temp = Object.keys(print).map((key) => [print[key]]);
                    message.channel.send(temp);

                    let toWrite = array;
                    fs.writeFile('botfrager.txt', toWrite, function(err){
                        if(err) throw err;
                    });

                });
            }else{
                message.channel.send('Format salah\nlist nama: dd, shouko, datonkun, kuhaku.\nFormat : #manual "nama botfrag" "nilai" "nama topfrag" "nilai" "match" "nilai"');
            }
            break;

        case 'rollback' :
            message.channel.send('Belum tersedia!');
            break;
        
        default :
            message.channel.send('Perintah tidak ditemukan!');
            break;
    }
})


bot.login(process.env.TOKEN);