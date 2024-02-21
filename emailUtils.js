export const sendEmail = (addressee, subject, body) => {
    if (!addressee) {
        return {
        status: "Error",
        message: "Um destinatário precisa ser fornecido ao enviar um e-mail.",
        };
    }

    if (!subject) {
        return {
        status: "Error",
        message:
            "O campo de assunto não deveria estar vazio ao enviar um e-mail.",
        };
    }

    if (!body) {
        return {
        status: "Error",
        message: "O corpo da mensagem precisa ser fornecido ao enviar um e-mail.",
        };
    }

    console.log(
        `
        De: news@carstore.com
        Para: ${addressee}
        Assunto: ${subject}
        
        ${body}
        
        CarStore - Aqui você encontra o seu carro novo
        `
    );

    return { status: "Sucess", message: "E-mail enviado com sucesso!" };
}

export const verifyDayForEmail = () => {
    const today = new Date();
    const dayOfTheWeek = today.getDay();
    return dayOfTheWeek === 1;
}

export const buildEmailBody = () => {
    const emailBody = `
        Caro cliente,
    
        Confira os últimos lançamentos e os veículos mais vendidos na CarStore!
    
        [Inserir informações sobre os veículos]
    
        Não perca as condições especiais de aquisição disponíveis por tempo limitado!
    
        Atenciosamente,
        Equipe CarStore
    `;
    return emailBody;
}