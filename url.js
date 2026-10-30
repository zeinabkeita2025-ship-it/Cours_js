const formulaire = document.getElementById('formulaire');
const ChampUrl = document.getElementById('url');
const result = document.getElementById('resultat');

formulaire.addEventListener('submit', async(event) =>{
    event.preventDefault();

    const url = ChampUrl.value;
    try{
        const reponse = await fetch('http://localhost:3000/generer', {
            method : 'POST',
            headers :{
                'Content-Type' : 'application/json'},
                body : JSON.stringify({
                    url: url
            })
        });
    
        const donnees = await reponse.json();
        result.innerHTML = `<img src="${donnees.qrCode}" alt = "QR code">;`
    }catch(erreur){
        console.log(erreur);
        result.textContent = "Une erreur s'est produite"
    }
});

