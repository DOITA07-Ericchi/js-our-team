const membri = [ {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg"
}, {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg"
}, {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg"
}, {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg"
}, {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg"
}, {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg"
} ]

function stampaMembro(membro){
    console.log(`Nome:  ${membro.nome}
Ruolo: ${membro.ruolo}
Foto:  ${membro.foto}`)
}

function renderizzaMembro(membro){
    let codice = document.getElementById("biglietti");
    codice.innerHTML += '<div class="col-12 col-md-6 col-lg-4 col-xl-4"><div class="card mb-3"><div class="row g-0"><div class="col-md-12 text-center"><img src="img/' + membro.foto + '" class="img-fluid rounded-start" alt="'+ membro.nome+'"></div><div class="col-md-12"><div class="card-body"><h5 class="card-title text-center">' + membro.nome +'</h5><h6 class="card-title text-center">' + membro.ruolo +'</h6></div></div></div></div>';
}

for (let membro of membri) {
    stampaMembro(membro);
    renderizzaMembro(membro);
}