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
    Prezado cliente,

    Temos o prazer de apresentar os novíssimos lançamentos e os modelos mais cobiçados da CarStore, selecionados especialmente para você!
    
    Destaques da Semana:
    
    SUV Xplorer 3000: Conquiste novos terrenos com tecnologia de ponta e conforto excepcional. Agora disponível com taxa de financiamento especial de apenas 0.99% ao mês.
    EcoHatch 2024: Um avanço em eficiência energética e design sustentável. Receba até R$5.000 de bônus na troca pelo seu carro antigo.
    Luxury Sedan Prime Edition: Elegância e performance se encontram. Beneficie-se de um pacote de serviços exclusivo gratuito pelo primeiro ano.
    Oferta Especial por Tempo Limitado:
    Aproveite as condições imperdíveis de aquisição válidas até o final do mês! Consulte detalhes na loja ou em nosso site.
    
    Não deixe de visitar a CarStore mais próxima para um test drive ou fale com um de nossos consultores especializados para mais informações.
    
    Agradecemos a sua confiança na CarStore. Estamos ansiosos para ajudá-lo a encontrar o veículo perfeito para suas necessidades e desejos.
    
    Cordialmente,
    
    Equipe CarStore
    `;
    return emailBody;
}