const links = {
    'lk': "https://www.linkedin.com/in/bernardo-domingues-7a48311a1/",
    'wpp': "http://api.whatsapp.com/send?1=pt_BR&phone=5503187208710",
    'wiki': "https://pt.wikipedia.org/wiki/Universidade_Federal_de_Itajub%C3%A1",
    'unifei': "https://unifei.edu.br/extensao/",
    'rede': 'https://www.redemelhorcompra.com.br/',
    'map': 'https://www.google.com/maps/place/Rede+Melhor+Compra/@-19.4823096,-42.5553946,15z/data=!4m5!3m4!1s0x0:0xf0e66425e8ce9d47!8m2!3d-19.4823096!4d-42.5553946'
};

const redirecionaPagina = (parameters) => {
    return window.open(links[parameters]);
}

export { redirecionaPagina };