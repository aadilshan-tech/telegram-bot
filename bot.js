const TelegramBot = require('node-telegram-bot-api');

// 🔑 Replace with NEW token from BotFather
const TOKEN = '8203519807:AAFTfZYvfylbFnJ-4CUpM8U_D4pIVA29KzI';

// 👉 Your Telegram ID
const ADMIN_ID = 7416877364;

const bot = new TelegramBot(TOKEN, { polling: true });

console.log("🤖 Bot is running...");

// ✅ Detect new users joining group
bot.on('new_chat_members', (msg) => {
    const chatId = msg.chat.id;
    const users = msg.new_chat_members;

    users.forEach(user => {
        const name = user.first_name || "No name";
        const username = user.username ? "@" + user.username : "No username";
        const id = user.id;

        // ✅ Send welcome message in group
        bot.sendMessage(chatId, `👋 Welcome ${name}!\n🎉 Your 7-day trial starts now.`);

        // ✅ Send details to YOU (admin)
        bot.sendMessage(ADMIN_ID,
            `📥 New User Joined\n\n👤 Name: ${name}\n🔗 Username: ${username}\n🆔 ID: ${id}`
        );

        // ✅ Log in terminal
        console.log("New User:");
        console.log("Name:", name);
        console.log("Username:", username);
        console.log("ID:", id);
    });
});