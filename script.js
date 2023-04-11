let pizzeria = {
    pizzeria: "Otello",
    indirizzo: "Via tal dei Tali, 1 - Firenze",
    recensioni: [
        { nome: "Mario", descrizione: "Pizza buonissima" },
        { nome: "Sara", descrizione: "Pizza ottima ma tempi di attesa troppo lunghi" },
        { nome: "Mario", descrizione: "Non fanno pizza senza glutine " }
    ]
}

let div = document.querySelector("div")
let buttonR = document.createElement("button")
let recensioni = document.createElement("div")
let isHidden = false

function load() {
    

    let nome = document.createElement("h1")
    nome.textContent = pizzeria.pizzeria;
    div.appendChild(nome);

    let indirizzo = document.createElement("h2")
    indirizzo.textContent = pizzeria.indirizzo;
    div.appendChild(indirizzo);

    
    buttonR.textContent = "Mostra recensioni"
    buttonR.setAttribute("onclick", "mostraRecensioni()")
    div.appendChild(buttonR)

}

function mostraRecensioni() {
    
    let recensioneP = document.createElement("p")

    if (isHidden)   {
        recensioni.setAttribute("style", "display: block")
        buttonR.innerHTML = "Nascondi recensioni"
        buttonR.setAttribute("onclick", "nascondiRecensioni()")
        isHidden = false
        return
    }

    pizzeria.recensioni.forEach(function (r) {
        let text = document.createTextNode("Nome:" + r.nome + " Descrizione: " + r.descrizione + " ")
        
        recensioneP.appendChild(text)
        recensioneP.innerHTML += "<br>"
        
    });
    recensioni.appendChild(recensioneP)
    div.appendChild(recensioni)


    buttonR.innerHTML = "Nascondi recensioni"
    buttonR.setAttribute("onclick", "nascondiRecensioni()")
    isHidden=false
}

function nascondiRecensioni() {
    recensioni.setAttribute("style", "display: none")
    buttonR.innerHTML = "Mostra recensioni"
    buttonR.setAttribute("onclick", "mostraRecensioni()")
    isHidden = true
}