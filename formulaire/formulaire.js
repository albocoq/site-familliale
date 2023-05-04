document.addEventListener("DOMContentLoaded", () => {

    let buttonSuggestion = document.getElementById("suggestion")
    let month = document.getElementById("month")
    let file = document.getElementById("file")
    let commentImage = document.getElementById("comment-image")
    let name = document.getElementById("id")
    let prenom = document.getElementById("Statut")
    let email = document.getElementById("email")
    let submit = document.querySelector(".bouton")

    





    buttonSuggestion.addEventListener("click", () => {
        month.style.display = "flex"
        file.style.display = "flex"
        commentImage.style.display = "flex"
    })


    let isFirefox = typeof InstallTrigger !== 'undefined';

    if (isFirefox ) {
        let inputToRemove = document.querySelector(".file");
        let inputToRemove2 = document.querySelector(".comment-image");
        inputToRemove.parentNode.removeChild(inputToRemove);
        inputToRemove2.parentNode.removeChild(inputToRemove2);
    }

    let nameValue = '';
    let prenomValue = '';
    let emailValue = '';
    
    window.addEventListener('load', () => {
        name.addEventListener('input', getInput);
        prenom.addEventListener('input', getInput);
        email.addEventListener('input', getInput);
    }); 
    
    function getInput(e) {
        if (e.currentTarget.id === 'id') {
            nameValue = e.currentTarget.value;
        } else if (e.currentTarget.id === 'Statut') {
            prenomValue = e.currentTarget.value;
        } else if (e.currentTarget.id === 'email') {
            emailValue = e.currentTarget.value;
        }
    }
    
    submit.addEventListener('click', () => {
        sendEmail(emailValue, `Nouveau message de ${nameValue} ${prenomValue}`, `message`);     
    });

    let destinaire = "dgcoquelet@gmail.com"

    const API_KEY = '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';

    const sendEmail = async (destinataire, objet, message) => {
        const url = 'https://api.sendgrid.com/v3/mail/send';

        const body = {
            personalizations: [
                {
                    to: [{ email: destinaire }]
                }
            ],
            from: {
                email: emailValue
            },
            subject: objet,
            content: [
                {
                    type: 'text/plain',
                    value: message
                }
            ]
        };
    
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });
    
        if (response.ok) {
            console.log('Le courrier électronique a été envoyé avec succès !');
        } else {
            console.error('Une erreur est survenue lors de l\'envoi du courrier électronique.');
        }
    };
    

    
    
});


