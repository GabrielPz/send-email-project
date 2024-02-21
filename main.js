import {sendEmail, buildEmailBody, verifyDayForEmail} from './emailUtils.js';


const listaClientes = [
    { email: "cliente1@example.com", receiveMarketing: true },
    { email: "cliente2@example.com", receiveMarketing: false },
    { email: "cliente3@example.com", receiveMarketing: true },
];

const sendEmailForClients = (listaClientes) => {
    if (!verifyDayForEmail()) {
        console.log("Hoje não é dia de enviar e-mails.");
        return;
    }

    const emailBody = buildEmailBody();
    
    listaClientes.forEach(cliente => {
        if (cliente.receiveMarketing) {
            const response = sendEmail(cliente.email, 'Promoções', emailBody);
            console.log(`Status: ${response.status} \nMensagem do sistema: ${response.message}`);
        }
        });
}


sendEmailForClients(listaClientes);