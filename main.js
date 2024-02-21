import {sendEmail, buildEmailBody, verifyDayForEmail} from './emailUtils';


const listaClientes = [
    { email: "cliente1@example.com", receberMarketing: true },
    { email: "cliente2@example.com", receberMarketing: false },
];

async function sendEmailForClients(listaClientes) {
    if (!verificaDiaParaEnvio()) {
      console.log("Hoje não é dia de enviar e-mails.");
      return;
    }
  
    const corpoEmail = montaCorpoEmail();
    
    listaClientes.forEach(cliente => {
      if (cliente.receberMarketing) {
        enviarEmail(cliente.email, corpoEmail)
          .then(() => console.log(`E-mail enviado com sucesso para: ${cliente.email}`))
          .catch(erro => console.log(`Falha ao enviar e-mail para: ${cliente.email}. Erro: ${erro}`));
      }
    });
  }