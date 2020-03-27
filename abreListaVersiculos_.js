let Livro, script, txt, listaGarimpada, versiculosTexto, textoFinal

if (localStorage.getItem("listaVersiculos") == null || !localStorage.listaVersiculos) {
    localStorage.setItem("listaVersiculos", "[]")
}

let listaVersiculos = JSON.parse(localStorage.getItem("listaVersiculos"))

function mudaNomes() {
    txt = document.getElementById("areaTexto").value
    // https://medium.com/better-programming/working-with-regular-expressions-regex-in-javascript-6c7dd951574a
    // https://stackoverflow.com/questions/34510746/difference-between-1-and-in-regular-expressions

    // let listaNomesLivros = ["Gênesis", "Êxodo", "Levítico", "Números", "Deuteronômio", "Josué", "Juízes", "Rute", "Samuel", "Reis", "Crônicas", "Esdras", "Neemias", "Ester", "Jó", "Salmos", "Provérbios", "Eclesiastes", "Cantares", "Isaías", "Jeremias", "Lamentações", "Ezequiel", "Daniel", "Oséias", "Joel", "Amós", "Obadias", "Jonas", "Miquéias", "Naum", "Habacuque", "Sofonias", "Ageu", "Zacarias", "Malaquias", "Mateus", "Marcos", "Lucas", "João", "Atos", "Romanos", "Coríntios", "Gálatas", "Efésios", "Filipenses", "Colossenses", "Tessalonicenses", "Timóteo", "Tito", "Filemon" "Hebreus", "Tiago", "Pedro", "João", "Judas", "Apocalipse"]
    // let listaAbreviacoes = ["Gn", "Ex", "Lv", "Nm", "Dt", "Js", "Jz", "Rt", "Sm", "Rs", "Cr", "Ed", "Ne", "Et", "Jó", "Sl", "Pv", "Ec", "Ct", "Is", "Jr", "Lm", "Ez", "Dn", "Os", "Jl", "Am", "Ob", "Jn", "Mq", "Na", "Hc", "Sf", "Ag", "Zc", "Ml", "Mt", "Mc", "Lc", "Jo", "At", "Rm", "Co", "Gl", "Ef", "Fp", "Cl", "Ts", "Tm", "Tt", "Fm", "Hb", "Tg", "Pe", "Jo", "Jd", "Ap"]   

    // Se não escapa com \b o JS vai substituir toda palavra tb que tenha as tais letras dentro.
    // p.ex: "leva" por Lva - se não colocar \blev\b ...
    // n? - onde n é opcional. Seria o mesmo que [n], porém salmo[s] não funciona. ??
    // [óo] - ou o ou ó.

    // Texto antes de ser manipulado:
    console.log("Garimpando texto: ", txt)

    // teste - iico2:1 ico 1:10 1 ts 2:1 1 cor3:2  > erro: 1o. Sm 4:4 1°. Sm 2:2

    txt = txt.replace(/\b(1|2|3)[o°aª]\.?/gi, "$1")
        .replace(/(\d)([a-z])/gi, "$1 $2")
        .replace(/([a-z])(\d)/gi, "$1 $2")
        .replace(/\bii\ ?/gi, "2\ ")
        .replace(/\bi\ /gi, "1\ ")
        .replace(/  */g, "\ ")
        .replace(/\ ?:\ ?/gi, ":")
        .replace(/g[eê]nesis|\bg[eê]n\b|\bgn\b/gi, "Gn")
        .replace(/[eê]xodo|[eê]xo\b|[eê]x\b/gi, "Ex")
        .replace(/levítico|levitico|\bLev\b|\blv\b/gi, "Lv")
        .replace(/n[úu]meros|\bn[úu]m\b|\bnm\b/gi, "Nm")
        .replace(/deuteron[ôo]nomio|\bdeut\b|\bdt\b/gi, "Dt")
        .replace(/josu[ée]|\bJos\b|\bjs\b/gi, "Js")
        .replace(/ju[íi]zes|\bjz\b/gi, "Jz")
        .replace(/rute|\brut\b|\brt\b/gi, "Rt")
        .replace(/samuel|\bsam\b|\bsm\b/gi, "Sm")
        .replace(/\breis|\brs\b/gi, "Rs")
        .replace(/cr[ôo]nicas|cr[ôo]n\b|\bcr\b/gi, "Cr")
        .replace(/esdras|esd\b|\bed\b/gi, "Ed")
        .replace(/neemias|neem\b|\bne\b/gi, "Ne")
        .replace(/ester|est\b|\bet\b/gi, "Et")
        .replace(/\bjó\b/gi, "Jó")
        .replace(/salmos?|\bsl\b/gi, "Sl")
        .replace(/prov[ée]rbio[s]|prov\b|\bpv\b/gi, "Pv")
        .replace(/ecl[ei]siastes|ecl\b|\bec\b/gi, "Ec")
        .replace(/cantares|cant\b|c[âa]ntico[s]|\bct\b/gi, "Ct")
        .replace(/isa[íi]as|isa|\bis\b/gi, "Is")
        .replace(/jerem[íi]as|jer|\bjr\b/gi, "Jr")
        .replace(/lamenta[cç][õo]es|lamen\b|lam\b|\blm\b/gi, "Lm")
        .replace(/ezequiel|ezeq\b|eze\b|\bez\b/gi, "Ez")
        .replace(/daniel|dan\b|\bdn\b/gi, "Dn")
        .replace(/os[ée]ias|ose\b|\bos\b/gi, "Os")
        .replace(/joel|\bjl\b/gi, "Jl")
        .replace(/am[óo]s|\bam\b/gi, "Am")
        .replace(/obad[ií]as|obd[ií]as|obad?\b|\bob\b/gi, "Ob")
        .replace(/jonas|jon\b|\bjn\b/gi, "Jn")
        .replace(/miqu[ée]ias|miq\b|\bmq\b/gi, "Mq")
        .replace(/naum|\bna\b/gi, "Na")
        .replace(/habacuque|habacuc|hab\b|\bhc\b/gi, "Hc")
        .replace(/sofon[íi]as|sof\b|\bsf\b/gi, "Sf")
        .replace(/ageo|\bag\b/gi, "Ag")
        .replace(/zacar[ií]as|zaca?\b|\bzc\b/gi, "Zc")
        .replace(/malaqu[íi]as|mal\b|malaq\b|\bml\b/gi, "Ml")
        .replace(/mateus|mat\b|\bmt\b/gi, "Mt")
        .replace(/marcos|\bmc\b/gi, "Mc")
        .replace(/lucas|\blc\b/gi, "Lc")
        .replace(/jo[aã]o|\bjo\b/gi, "Jo")
        .replace(/atos|\bat\b/gi, "At")
        .replace(/romanos|rom\b|\brm\b/gi, "Rm")
        .replace(/cor[ií]ntios|cor\b|\bco\b/gi, "Co")
        .replace(/g[áa]latas|g[áa]l\b|\bgl\b/gi, "Gl")
        .replace(/ef[ée]sios|efe\b|\bef\b/gi, "Ef")
        .replace(/filipen[sc]es|fil\b|filip\b|\bfl\b|\bfp\b/gi, "Fp")
        .replace(/colossenses|colo[cs]en[cs]es|col\b|colos\b|col\b|\bcl\b/gi, "Cl")
        .replace(/tessalonicenses|tes?saloni[cs]s?en[cs]s?es|tess?a?\b|\bts\b/gi, "Ts")
        .replace(/tim[óo]t[ei]o|tim\b|tim[óo]t\b\btm\b/gi, "Tm")
        .replace(/tito|tit\b|\btt\b/gi, "Tt")
        .replace(/filemon|\bfm\b|\bflm\b/gi, "Fm")
        .replace(/[h]ebre[uo]s|\bheb[r]\b|\bhb\b/gi, "Hb")
        .replace(/tiago|\btg\b/gi, "Tg")
        .replace(/pedro|ped?r?\b|\bpe\b/gi, "Pe")
        .replace(/judas|jud\b|\bjd\b/gi, "Jd")
        .replace(/apocalipse|apo[c]\b|apocali?p?\b|\bap\b/gi, "Ap")
        .replace(/(1|2|3) (sm|rs|cr|co|ts|tm|pe|jo)/gi, "$1$2")
        .replace(/([\d]Gn|Ex|Lv|Nm|Dt|Js|Jz|Rt|Sm|Rs|Cr|Ed|Ne|Et|Jó|Sl|Pv|Ec|Ct|Is|Jr|Lm|Ez|Dn|Os|Jl|Am|Ob|Jn|Mq|Na|Hc|Sf|Ag|Zc|Ml|Mt|Mc|Lc|Jo|At|Rm|Co|Gl|Ef|Fp|Cl|Ts|Tm|Tt|Fm|Hb|Tg|Pe|Jd|Ap)\./gi, "$1\ ")
        .replace(/(\d)\.(\d)/gi, "$1:$2")
        .replace(/\ ?-\ ?|\ ?_\ ?/g, "-")

    //        .replace(/  */g, "\ ")
    garimpa()

    // teste - iico2:1 i co1:10 1 ts 2:1 1 cor3:2  > erro: 1o. Sm 4:4 1°. Sm 2:2

    //.replace(/(\bii ?|\b2[o°0a]\.? ?)(sm|rs|cr|co|ts|tm|pe|jo)/gi, "2$2")
    //.replace(/(\bi ?|\b1[o°0a]\.? ?)(sm|rs|cr|co|ts|tm|pe|jo)/gi, "1$2")
    //.replace(/(\bi ?|\b1o\.? ?|\b1°\.? ?\b1a\.? ?|\b1æ\.? ?)(sm|rs|cr|co|ts|tm|pe|jo)/gi, "1$2")
}

function garimpa() {
    let padrao = new RegExp("[1-3]?(Gn|Ex|Lv|Nm|Dt|Js|Jz|Rt|Sm|Rs|Cr|Ed|Ne|Et|Jó|Sl|Pv|Ec|Ct|Is|Jr|Lm|Ez|Dn|Os|Jl|Am|Ob|Jn|Mq|Na|Hc|Sf|Ag|Zc|Ml|Mt|Mc|Lc|Jo|At|Rm|Co|Gl|Ef|Fp|Cl|Ts|Tm|Tt|Fm|Hb|Tg|Pe|Jd|Ap) [0-9]+:?[0-9]*-?[0-9]*", "gi")

    //let padrao = new RegExp("[1-3]?(Gn|Ex|Lv|Nm|Dt|Js|Jz|Rt|Sm|Rs|Cr|Ed|Ne|Et|Jó|Sl|Pv|Ec|Ct|Is|Jr|Lm|Ez|Dn|Os|Jl|Am|Ob|Jn|Mq|Na|Hc|Sf|Ag|Zc|Ml|Mt|Mc|Lc|Jo|At|Rm|Co|Gl|Ef|Fp|Cl|Ts|Tm|Tt|Fm|Hb|Tg|Pe|Jd|Ap) [0-9]+:?[0-9]*", "gi")
    listaGarimpada = txt.match(padrao)


    versiculosTexto = listaGarimpada.toString().replace(/,/g, "\n")
    document.getElementById("areaTexto").value = versiculosTexto

    // para salvar em localStorage:
    versiculosTexto = versiculosTexto.split("\n")


    // listaGarimpadaUniq = new Set(listaGarimpada) // erro pq não retorna em array.
    // para tirar os repetidos (uniq):
    listaGarimpada = Array.from(new Set(listaGarimpada))
    console.log(listaGarimpada)
    mostraVs()
}


function mostraVs() {
    textoFinal = "" // sem esta linha sairia 1a/e. "undefined" no resultado final.
    // a variável abaixo servirá quando se faça map na listaGarimpada.
    let nroVersiculosExtras

    // se no item há um hífen cap:vers a-b (devem ser mostrados os (b-a) versiculos seguintes de b)
    // a array: "versiculos" pertence a acf.js!:
    listaGarimpada.map(cadaVs => {
        // A cada passagem da lista, verifica se a passagem tenha um intervalo de versículos, i.é: Sl 23:1-4 ...
        if (cadaVs.match("-")) {
            // se sim:
            // pega a parte Sl 23: <1-4>
            let parteVersiculos = cadaVs.split(":")[1]
            // o versiculo final seria no exemplo = 4.
            let versFinal = parteVersiculos.split("-")[1]
            // o vers. inicial seria no exemplo = 1.
            let versInicial = parteVersiculos.split("-")[0]
            // abaixo seria o resultado de 3 (3 a mais).
            nroVersiculosExtras = Number(versFinal) - Number(versInicial)
            // acima: ALÉM do versInicial tem mais nroVersiculosExtras. (Ex.: 15-17 = 15, 16, 17)
        }else{
            // Caso não haja tracinho na passagem de listaGarimpada (indicando que é só 1 versículo):
            nroVersiculosExtras = 0
        }
        // retira tudo o que pode existir depois de hífem (incluindo o hífem). Caso contr. não acharia em acf.js a passagem.
        cadaVs = cadaVs.replace(/-.*/, "")
        // percorre "versiculos" (variável do arq acf.js que contém toda a Bíblia em array)
        bibliaACF.map((a, b) => {
            // encontrando o versículo pedido pelo usuário dentro de acf.js...
            if (a[0] === cadaVs) {
                // executará a repetição (se houver) de nro de Vers. Extras:
                // caso não o nroVersiculosExtras for 0, somente imprimirá o único vers. pedido pelo usuário:
                for(rep=0; rep <= nroVersiculosExtras; rep++){
                    // b+rep = representa o index (b de map) do vs encontrado em acf.js + nro de iterações (rep) dos próx. versículos solicitados (ex: 15-17):
                    textoFinal += `<br><strong>${bibliaACF[b+rep][0]}:</strong> "${bibliaACF[b+rep][1]}"<br>`
                }
            }
        })
    })

    document.getElementById("resultado").innerHTML = textoFinal
    document.querySelectorAll(".oculta").forEach(a => a.style.display = "block")
}


function salvaLista() {
    let data = new Date()
    let dia = data.toDateString().split(" ")[2]
    let mes = data.getMonth() + 1
    if (mes < 10) {
        mes = "0" + mes.toString()
    }
    let ano = data.toDateString().split(" ")[3]
    let hoje = `${ano}${mes}${dia}`
    let hora = data.toTimeString().split(" ")[0]
    let nomeLista = document.querySelector("#nomeLista").value
    let listaObj = {}
    listaObj.data = hoje
    listaObj.hora = hora
    listaObj.nomeLista = nomeLista
    listaObj.versiculos = versiculosTexto
    listaVersiculos.push(listaObj)
    localStorage.listaVersiculos = JSON.stringify(listaVersiculos)
}

function limpaInput() {
    this.placeholder = ""
}

document.getElementById("bt").addEventListener("click", mudaNomes)
document.getElementById("btSalva").addEventListener("click", salvaLista)
document.getElementById("nomeLista").addEventListener("focus", limpaInput)


// let listaLivros = ["Gn", "Ex", "Lv", "Nm", "Dt", "Js", "Jz", "Rt", "1Sm", "2Sm", "1Rs", "2Rs", "1Cr", "2Cr", "Ed", "Ne", "Et", "Jó", "Sl", "Pv", "Ec", "Ct", "Is", "Jr", "Lm", "Ez", "Dn", "Os", "Jl", "Am", "Ob", "Jn", "Mq", "Na", "Hc", "Sf", "Ag", "Zc", "Ml", "Mt", "Mc", "Lc", "Jo", "At", "Rm", "1Co", "2Co", "Gl", "Ef", "Fp", "Cl", "1Ts", "2Ts", "1Tm", "2Tm", "Tt", "Fm", "Hb", "Tg", "1Pe", "2Pe", "1Jo", "2Jo", "3Jo", "Jd", "Ap"]

// =========================================================
