
function explodeChungus() {
    document.getElementById('explode-hidden')
        .style.display = "block";
    document.getElementById('explode-button')
        .style.display = "none";
}

parent = document.getElementById('form');
form.addEventListener('submit', function(event) {
    event.preventDefault();
    add_guest();
  });

cuteEmoticons = [
    "(*^ω^*)", "( ́ ▽ ` )", "(o^▽^o)", "(≧◡≦)", "(^▽^)/", 
    "(o´▽`o)", "(っ˘ω˘ς)", "(*•̀ᴗ•́*)و", "(^. ^)", "(〃＾▽＾〃)",

    "(•ᴥ•)", "(=^･ω･^=)", "(=^･ｪ･^=)", "(￣(oo)￣)", "／(^ x ^)＼", 
    "(ˆ(oo)ˆ)", "(^･o･^)", "(V•ᴥ•V)", "(=^-ω-^=)", "(=; ゞ ;=)",

    "(♡μ_μ)", "(─‿‿─)♡", "(´｡• ᵕ •｡`) ♡", "( ́ ㄟ ̀ )♡", "(*♡∀♡)", 
    "(｡・//ε//・｡)", "(｡●́‿●̀｡)", "(♡-_-♡)", "(─‿‿─)♡", "(◕‿◕)♡",

    "(o_ _)o", "(◡‿◡ *)", "( ́ｪ` )", "(〃_ _〃)", "(*μ_μ)", 
    "(｡•́‿•̀｡)", "(ノ_<。)", "(^_ _^)", "(#^.^#)", "(＠_＠;)"
];
parent = document.getElementById('guestbook');
function add_guest() {
    let randomEmoticon1 = Math.floor(Math.random() * 40);
    let randomEmoticon2 = Math.floor(Math.random() * 40);
    const firstName = document.getElementById('fname').value;
    const lastName = document.getElementById('lname').value;
    const guest = document.createElement("li");
    guest.textContent = `${cuteEmoticons[randomEmoticon1]}${firstName} ${lastName} ${cuteEmoticons[randomEmoticon2]}`;
    parent.appendChild(guest)
}