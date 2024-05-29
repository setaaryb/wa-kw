async function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        displayMessage("user", userInput);
        document.getElementById("user-input").value = "";
        await fetchChatGPTResponse(userInput);
    }
}

function displayMessage(sender, message) {
    var chatBox = document.getElementById("chat-box");

    var messageContainer = document.createElement("div");
    messageContainer.className = "message-container " + sender;

    var profilePic = document.createElement("img");
    profilePic.className = "profile-pic";
    profilePic.src = sender === "user" ? "PP/user.jpg" : "PP/bot.jpg";

    var messageContent = document.createElement("div");
    messageContent.className = "message-content";
    messageContent.innerHTML = message;

    if (sender === "user") {
        messageContainer.appendChild(messageContent);
        messageContainer.appendChild(profilePic);
    } else {
        messageContainer.appendChild(profilePic);
        messageContainer.appendChild(messageContent);
    }

    chatBox.appendChild(messageContainer);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function clearMessages() {
    var chatBox = document.getElementById("chat-box");
    chatBox.innerHTML = '';
}

// Load the configuration when the page loads
window.onload = loadConfig;

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// Display message with a delay
async function dela(message) {
    for (let i = 0; i < message.length; i++) {
        await sleep(60000);
        displayMessage("bot", message.charAt(i));
    }
}

async function fetchChatGPTResponse(userInput) {
    const response = balasChat(userInput);
    displayMessage("bot", response);
}

function balasChat(pesan) {
    // Arrays of keywords for different categories
    const kataKunciManggil = ["ayang", "ayaang", "bubub", "bub", "p", "pe", "hai", "sayang", "syg", "dear", "love", "beb", "bebeb", "cinta", "kamu", "teman", "kawan"];
    const kataKunciGombal = ["mau", "ingin", "mau dong", "boleh", "bisa", "suka", "kamu", "boleh kah", "ingin tahu", "bahagia", "indah", "senang", "gembira", "berkawan", "menyenangkan"];
    const kataKunciKasar = ["kontol", "memek", "tolol", "goblok", "anjing", "bangsat", "bajingan", "tai", "asu", "jembut", "idiot", "brengsek", "sialan", "kampret", "babi", "bego", "tolol", "kampungan", "bodoh", "anjay"];
    const kataKunciBebas = ["gpp", "sumpah", "oke", "terserah", "yasudah", "gimana aja", "terserah kamu", "baiklah", "oh ya", "yaudah", "terserah deh", "ya ampun", "boleh lah", "tentu saja", "pasti", "siap", "sih"];

    // Arrays of responses for different categories
    const balasanManggil = [
        "Ada apa?",
        "Iya, kenapa sayang?",
        "Apa, ayaang?",
        "Ada masalah, beb?",
        "Ada yang bisa aku bantu, sayang?",
        "Ada yang ingin kamu bicarakan, sayang?",
        "Apa yang bisa kulakukan untukmu?",
        "Kamu kenapa?",
        "Aku di sini, ada yang bisa kubantu?",
        "Apa yang terjadi?",
        "Hai, ada yang bisa dibantu?",
        "Ayo, ceritain apa yang kamu rasain?",
        "Ada yang bisa aku dengerin?",
        "Aku mendengarkan, ada yang mau diceritakan?",
        "Apa kabar, sayang?",
        "Hai, apa yang kamu mau?",
        "Ada yang bisa aku lakukan?",
        "Aku selalu ada untukmu, ada apa?",
        "Ada yang ingin kamu bicarakan?",
        "Apa kabar?",
        "Ada yang mau kamu ceritakan?",
        "Ada yang bisa aku bantu?",
        "Apa yang terjadi?",
        "Hai, ada yang bisa dibantu?"
    ];

    const balasanGombal = [
        "Cerita apa nih?",
        "Tentang apa nih?",
        "Mau ngobrolin apa?",
        "Ada cerita seru apa?",
        "Ceritain dong!",
        "Cerita yuk!",
        "Ada cerita baru apa?",
        "Ceritain apa aja, aku siap dengerin",
        "Ceritain aja, aku di sini kok",
        "Mau cerita, boleh kok",
        "Cerita apa yang paling berkesan buatmu?",
        "Mau cerita tentang apa yang kamu sukai?",
        "Ceritain hal yang membuatmu tersenyum ya",
        "Ada cerita bahagia apa yang ingin kamu bagikan?",
        "Mau cerita tentang momen-momen menyenangkan?"
    ];

    const balasanKasar = [
        "Tolong jaga bahasamu ya!",
        "Santai aja, gak usah kasar",
        "Mending ngomong baik-baik ya",
        "Kita bisa bicara baik-baik kok",
        "Kasar itu gak baik loh",
        "Tenang aja, gak perlu kasar",
        "Bicara yang sopan ya",
        "Kalau ngomong baik-baik, aku lebih suka",
        "Kasar itu gak enak didengar",
        "Jangan marah, yuk kita tenang",
        "Sopan santun itu penting, ya",
        "Mending bicara dengan bahasa yang sopan"
    ];

    const balasanBebas = [
        "Oh",
        "Y",
        "Oke",
        "Baiklah",
        "Sip",
        "Terserah deh",
        "Gak masalah",
        "Ya udah",
        "Hmmm",
        "Terus?",
        "Dan?",
        "Ya",
        "Oke deh",
        "Yaudah",
        "Aku paham",
        "Begitu ya",
        "Hmm oke",
        "Pasti",
        "Tentu saja",
        "Yakin?",
        "Serius?",
        "Kalau begitu, oke",
        "Baiklah, gpp",
        "Baguslah",
        "Baik",
        "Yaampun",
        "Baiklah, mari kita melanjutkan",
        "Oke, kita bisa lanjutkan",
        "Jangan ragu untuk melanjutkan",
        "Silakan lanjutkan",
        "Ya, apa lagi?",
        "Sudahkah semuanya jelas?",
        "Jika tidak, tolong beri tahu saya",
        "Apa yang perlu kita bahas selanjutnya?",
        "Apa rencanamu?",
        "Ayo teruskan obrolannya",
        "Jangan ragu untuk bertanya jika ada yang tidak jelas",
        "Aku di sini untuk membantu",
        "Kamu bisa terus berbicara",
        "Jika kamu punya pertanyaan, jangan sungkan untuk bertanya",
        "Apa yang kamu pikirkan?",
        "Ada yang ingin kamu tambahkan?",
        "Apa yang ingin kamu sampaikan?",
        "Ada hal lain yang ingin kamu bicarakan?",
        "Aku mendengarkan",
        "Kamu bisa terus berbicara, aku di sini untukmu",
        "Jangan khawatir, aku di sini untuk membantumu",
        "Kamu bisa melanjutkan, aku sedang mendengarkan",
        "Kamu bisa teruskan, aku siap mendengarkan",
        "Apa yang ingin kamu lakukan selanjutnya?",
        "Apa yang kamu pikirkan tentang hal itu?",
        "Kamu bisa melanjutkan, aku sedang memperhatikan",
        "Sudahkah semuanya jelas? Aku siap mendengarkan",
        "Apa yang ingin kamu ceritakan?",
        "Apa yang ingin kamu bicarakan denganku?",
        "Kamu bisa teruskan, aku di sini untukmu",
        "Apa yang kamu harapkan?",
        "Apa yang kamu rencanakan selanjutnya?",
        "Jangan ragu untuk memberi tahu saya jika ada yang salah",
        "Sudahkah semuanya beres?",
        "Jika kamu membutuhkan bantuan lebih lanjut, tolong beri tahu saya",
        "Kamu bisa melanjutkan, aku di sini untuk mendengarkan",
        "Apa yang kamu pikirkan tentang ini?",
        "Jika kamu membutuhkan bantuan, aku di sini untuk membantu",
        "Jangan khawatir, aku di sini untuk membantu",
        "Jika kamu punya pertanyaan, jangan ragu untuk bertanya",
        "Apa yang ingin kamu lakukan selanjutnya?",
        "Sudahkah kamu mempertimbangkan semua opsi?",
        "Apa yang ingin kamu sampaikan?",
        "Jika kamu membutuhkan bantuan tambahan, tolong beri tahu saya",
        "Kamu bisa melanjutkan, aku di sini untukmu",
        "Apa yang bisa saya bantu?",
        "Sudahkah kamu memutuskan apa yang ingin kamu lakukan selanjutnya?",
        "Apa yang kamu rencanakan selanjutnya?",
        "Apa yang ingin kamu lakukan sekarang?",
        "Jika kamu membutuhkan bantuan, jangan sungkan untuk bertanya",
        "Apa yang bisa saya lakukan untukmu?",
        "Apa yang kamu butuhkan?",
        "Sudahkah kamu menentukan apa yang perlu dilakukan?",
        "Apa yang harus kita lakukan selanjutnya?",
        "Jika kamu membutuhkan saran, aku siap membantumu",
        "Jangan ragu untuk bertanya jika ada yang tidak jelas",
        "Kamu bisa melanjutkan, aku di sini untuk membantu",
        "Apa yang ingin kamu bicarakan?",
        "Apa yang ingin kamu sampaikan?",
        "Sudahkah kamu mempertimbangkan semua opsi?",
        "Jika kamu membutuhkan bantuan tambahan, tolong beri tahu saya",
        "Kamu bisa melanjutkan, aku di sini untukmu",
        "Apa yang bisa saya bantu?",
        "Sudahkah kamu memutuskan apa yang ingin kamu lakukan selanjutnya?",
        "Apa yang kamu rencanakan selanjutnya?",
        "Apa yang ingin kamu lakukan sekarang?",
        "Jika kamu membutuhkan bantuan, jangan sungkan untuk bertanya",
        "Apa yang bisa saya lakukan untukmu?",
        "Apa yang kamu butuhkan?",
        "Sudahkah kamu menentukan apa yang perlu dilakukan?",
        "Apa yang harus kita lakukan selanjutnya?",
        "Jika kamu membutuhkan saran, aku siap membantumu",
        "Jangan ragu untuk bertanya jika ada yang tidak jelas",
        "Apa yang ingin kamu bicarakan?",
        "Apa yang ingin kamu sampaikan?"
    ];

    const gantiname = "!gantinama";
    const gantipitch = "!gantipp";

    if (pesan === gantiname) {
        let namaBaru = prompt("Masukkan nama baru:");
        if (namaBaru !== null && namaBaru !== "") {
            const nameElements = document.getElementsByClassName('name');
            if (nameElements.length > 0) {
                for (let i = 0; i < nameElements.length; i++) {
                    nameElements[i].textContent = namaBaru;
                }
                alert("Nama berhasil diubah menjadi : " + namaBaru);
            } else {
                alert("Elemen dengan kelas 'name' tidak ditemukan.");
            }
        } else {
            alert("Nama tidak valid atau tidak dimasukkan.");
        }
    }

for (let i = 0; i < kataKunciManggil.length; i++) {
    if (pesan.includes(kataKunciManggil[i])) {
        return balasanManggil[Math.floor(Math.random() * balasanManggil.length)];
    }
}

for (let i = 0; i < kataKunciGombal.length; i++) {
    if (pesan.includes(kataKunciGombal[i])) {
        return balasanGombal[Math.floor(Math.random() * balasanGombal.length)];
    }
}

for (let i = 0; i < kataKunciKasar.length; i++) {
    if (pesan.includes(kataKunciKasar[i])) {
        return balasanKasar[Math.floor(Math.random() * balasanKasar.length)];
    }
}

for (let i = 0; i < kataKunciBebas.length; i++) {
    if (pesan.includes(kataKunciBebas[i])) {
        return balasanBebas[Math.floor(Math.random() * balasanBebas.length)];
    }
}

// Default response if no keywords match
return "Maaf, sepertinya aku tidak mengerti. Bisa kamu jelaskan lagi?";
}

function loadConfig() {
// Add any configuration setup here if needed
}
