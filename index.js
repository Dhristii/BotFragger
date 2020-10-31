const Discord = require('discord.js');
const bot = new Discord.Client();
let fs = require('fs');

const prefix = '#';

const version = '1.0.0 (BETA)'

bot.on('ready', function(){
    console.log('pantekkk');
})

bot.on('message', function(message){
    if(!message.content.startsWith(prefix) || message.author.bot) return;
    
    let chat = message.content.substring(prefix.length).split(' ');
    
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
                    // let angka = {};

                    // for(let i = 0; i < array.length; i++){
                    //     // angka[i] = array[i].match(/(\d+)/);
                    //     if(array[i] == " "){
                    //         array[i] == "\n\n";
                    //     }
                    // }

                    array[1] = parseInt(array[1]) + 1;
                    array[12] = parseInt(array[12]) + 1;

                    
                    message.channel.send(array[0]);
                    message.channel.send('Dd ' + array[1]);
                    message.channel.send('Shouko ' + array[2]);
                    message.channel.send('Datonkun ' + array[3]);
                    message.channel.send('Kuhaku Desu ' + array[4] + '\n');
                    message.channel.send('================');
                    message.channel.send(array[6]);
                    message.channel.send('Dd ' + array[7]);
                    message.channel.send('Shouko ' + array[8]);
                    message.channel.send('Datonkun ' + array[9]);
                    message.channel.send('Kuhaku Desu ' + array[10] + '\n');
                    message.channel.send('================');
                    message.channel.send('Match : ' + array[12]);

                    // for(let i = 0; i < array.length; i++){
                    //     // angka[i] = array[i].match(/(\d+)/);
                    //     if(array[i] == "\n\n"){
                    //         array[i] == " ";
                    //     }
                    // }

                    // message.channel.send(array);

                    let toWrite = array;
                    fs.writeFile('botfrager.txt', toWrite, function(err){
                        if(err) throw err;
                    });
                
                });
            }else if(chat[1] === 'shouko'){
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

                    
                    message.channel.send(array[0]);
                    message.channel.send('Dd ' + array[1]);
                    message.channel.send('Shouko ' + array[2]);
                    message.channel.send('Datonkun ' + array[3]);
                    message.channel.send('Kuhaku Desu ' + array[4] + '\n');
                    message.channel.send('================');
                    message.channel.send(array[6]);
                    message.channel.send('Dd ' + array[7]);
                    message.channel.send('Shouko ' + array[8]);
                    message.channel.send('Datonkun ' + array[9]);
                    message.channel.send('Kuhaku Desu ' + array[10] + '\n');
                    message.channel.send('================');
                    message.channel.send('Match : ' + array[12]);

                    let toWrite = array;
                    fs.writeFile('botfrager.txt', toWrite, function(err){
                        if(err) throw err;
                    });
                });
            }else if(chat[1] === 'datonkun'){
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

                    
                    message.channel.send(array[0]);
                    message.channel.send('Dd ' + array[1]);
                    message.channel.send('Shouko ' + array[2]);
                    message.channel.send('Datonkun ' + array[3]);
                    message.channel.send('Kuhaku Desu ' + array[4] + '\n');
                    message.channel.send('================');
                    message.channel.send(array[6]);
                    message.channel.send('Dd ' + array[7]);
                    message.channel.send('Shouko ' + array[8]);
                    message.channel.send('Datonkun ' + array[9]);
                    message.channel.send('Kuhaku Desu ' + array[10] + '\n');
                    message.channel.send('================');
                    message.channel.send('Match : ' + array[12]);

                    let toWrite = array;
                    fs.writeFile('botfrager.txt', toWrite, function(err){
                        if(err) throw err;
                    });
                });
            }else if(chat[1] === 'kuhaku'){
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

                    
                    message.channel.send(array[0]);
                    message.channel.send('Dd ' + array[1]);
                    message.channel.send('Shouko ' + array[2]);
                    message.channel.send('Datonkun ' + array[3]);
                    message.channel.send('Kuhaku Desu ' + array[4] + '\n');
                    message.channel.send('================');
                    message.channel.send(array[6]);
                    message.channel.send('Dd ' + array[7]);
                    message.channel.send('Shouko ' + array[8]);
                    message.channel.send('Datonkun ' + array[9]);
                    message.channel.send('Kuhaku Desu ' + array[10] + '\n');
                    message.channel.send('================');
                    message.channel.send('Match : ' + array[12]);

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
            message.channel.send('Command:\n#display\n#update\n#version\n#help');
            break;

        case 'version' :
            message.channel.send(version);
            break;

        case 'display' :
            lineReader.on('line', function (line) {
                let array = line.split(',');
                
                message.channel.send(array[0]);
                message.channel.send('Dd ' + array[1]);
                message.channel.send('Shouko ' + array[2]);
                message.channel.send('Datonkun ' + array[3]);
                message.channel.send('Kuhaku Desu ' + array[4] + '\n');
                message.channel.send('================');
                message.channel.send(array[6]);
                message.channel.send('Dd ' + array[7]);
                message.channel.send('Shouko ' + array[8]);
                message.channel.send('Datonkun ' + array[9]);
                message.channel.send('Kuhaku Desu ' + array[10] + '\n');
                message.channel.send('================');
                message.channel.send('Match : ' + array[12]);
            });
            break;
    }
})


bot.login(process.env.TOKEN);