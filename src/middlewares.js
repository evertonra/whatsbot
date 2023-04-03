const { BOT_EMOJI } = require("./config");
const { isCommand, extractDataFromMessage } = require("./utils");
const Action = require("./actions");
const { menuMessage } = require("./utils/messages");

async function middlewares(bot) {
  bot.ev.on("messages.upsert", async ({ messages }) => {
    const baileysMessage = messages[0];

    if (!baileysMessage?.message || !isCommand(baileysMessage)) {
      return;
    }

    const action = new Action(bot, baileysMessage);

    const { command, remoteJid } = extractDataFromMessage(baileysMessage);

    switch (command) {
      case "Olá":
        await bot.sendMessage(remoteJid, { text: '👋 Olá! Tudo bem? Aqui é a Farmacêutica Bibiana. \n\nRealizo aplicação de brincos de forma humanizada em bebês, crianças, jovens e adultos. \nSei o quanto esse momento é delicado e estou aqui para te esclarecer tudo! \nVocê gostaria de saber sobre a aplicação em bebês, crianças, jovens ou adultos? \n\n1️⃣ - Bebês\n2️⃣ - Crianças\n3️⃣ - Jovens até 18 anos\n4️⃣ - Adultos\n5️⃣ - Outras dúvidas' });
        break;
      case "1":
        await bot.sendMessage(remoteJid, { text: '👶🏻 Bebês\n\nOs bebês, principalmente recém-nascidos, têm a pele muito sensível e o contato com alguns materiais (como o níquel, que pode ser encontrado inclusive em brincos de ouro) pode resultar em alergias e inflamações.\nPor isso, visando a saúde e o bem estar da sua bebê, utilizo brincos hipoalergênicos feitos em aço cirúrgico, esterilizados e folheados a ouro 24k. A aplicação é silenciosa, sem sustos e sem traumas.\n\nEsses brincos têm a haste adequada para a perfuração e para o cuidado pós-procedimento, permitindo a limpeza do local. São embalados em cartuchos individuais e descartáveis, ou seja: sem risco de contaminação.\n\nTudo será realizado no tempo da sua bebê.\n\nPara ver outra opção digite:\n1️⃣ - Bebês\n2️⃣ - Crianças\n3️⃣ - Jovens até 18 anos\n4️⃣ - Adultos\n5️⃣ - Outras dúvidas' });
        break;
      case "2":
        await bot.sendMessage(remoteJid, { text: '👧🏼 Crianças\n\nCom o meu método de aplicação de brinco de forma humanizada, meu objetivo é realizar o procedimento respeitando o tempo da sua filha para não causar nenhum trauma. Utilizo técnicas para minimizar a dor e um aplicador silencioso para um procedimento saudável.\nVisando a saúde e o bem estar da sua filha, utilizo brincos hipoalergênicos feitos em aço cirúrgico, esterilizados e folheados a ouro 24k.\n\nEsses brincos têm a haste adequada para a perfuração e para o cuidado pós-procedimento, permitindo a limpeza do local. São embalados em cartuchos individuais e descartáveis, ou seja: sem risco de contaminação.\n\nPara ver outra opção digite:\n1️⃣ - Bebês\n2️⃣ - Crianças\n3️⃣ - Jovens até 18 anos\n4️⃣ - Adultos\n5️⃣ - Outras dúvidas' });
        break;
      case "3":
        await bot.sendMessage(remoteJid, { text: '🙍🏼 Jovens até 18 anos\n\nRealizo aplicação de brinco de forma humanizada em todas as idades. Para jovens até 18 anos, é necessário a assinatura do termo de consentimento pelo responsável legal.\n\nVisando a saúde e o bem estar dos meus clientes, utilizo apenas brincos hipoalergênicos feitos em aço cirúrgico, esterilizados e folheados a ouro 24k.\n\nEsses brincos têm a haste adequada para a perfuração e para o cuidado pós-procedimento, permitindo a limpeza do local. São embalados em cartuchos individuais e descartáveis, ou seja: sem risco de contaminação.\n\nÉ possível fazer até o 4º furo no lóbulo, caso haja espaço suficiente. Para fazer essa avaliação, peço que me mande uma foto nítida da sua orelha.\n\nPara ver outra opção digite:\n1️⃣ - Bebês\n2️⃣ - Crianças\n3️⃣ - Jovens até 18 anos\n4️⃣ - Adultos\n5️⃣ - Outras dúvidas' });
        break;
      case "4":
        await bot.sendMessage(remoteJid, { text: '💃🏻 Adultos\n\nRealizo aplicação de brinco de forma humanizada em todas as idades.\n\nVisando a saúde e o bem estar dos meus clientes, utilizo apenas brincos hipoalergênicos feitos em aço cirúrgico, esterilizados e folheados a ouro 24k.\n\nEsses brincos têm a haste adequada para a perfuração e para o cuidado pós-procedimento, permitindo a limpeza do local. São embalados em cartuchos individuais e descartáveis, ou seja: sem risco de contaminação.\n\nÉ possível fazer até o 4º furo no lóbulo, caso haja espaço suficiente. Para fazer essa avaliação, peço que me mande uma foto nítida da sua orelha.\n\nPara ver outra opção digite:\n1️⃣ - Bebês\n2️⃣ - Crianças\n3️⃣ - Jovens até 18 anos\n4️⃣ - Adultos\n5️⃣ - Outras dúvidas' });
        break;
      case "5":
        await bot.sendMessage(remoteJid, { text: '🔃 Encaminhando você para um atendente. \n⏳ *Aguarde um instante*.' });
        break;
    }
  });
}

module.exports = middlewares;