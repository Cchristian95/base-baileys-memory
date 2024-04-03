const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')



const flowPrincipal = addKeyword(['hola', 'ole', 'alo','precio','valor','cuanto','que vale'])
    .addAnswer('¡Hola! 😊 ¡Bienvenido a TicketYa  ⭐')
    .addAnswer(
        [
            '¡Estamos aquí para ayudarte en todo lo que necesites!'])
    .addAnswer(
        [    
            '¡Haz clic en el enlace para descubrir nuestro amplio catálogo!', 
            
            '⭕Enlace 👉🏻 https://ticketya.com.co/',])
    .addAnswer(
        [
            '¡No te pierdas nuestras promociones y ofertas! Síguenos en Instagram y Facebook para estar al tanto de todo. 👇🏻',    
            '🔸Instagram: https://www.instagram.com/ticketyacol/',
            '🔹Facebook: https://www.facebook.com/ticketyacolombia',
            
            'EL PRODUCTO INCLUYEN ENVÍO Y PAGO CONTRAENTREGA',
        ],
        null,
        null,
        []
    )

    const contraEntrega = addKeyword(['pago contra entrega','contra entrega', 'contraentrega','contra reembolso','paga en casa'])
    .addAnswer(
        [
            '⭐Trapero Triangular 360 ⭐',

            'PRECIO: 💵 79.900💵 ENVIO INCLUIDO🚛',

            '📦 ¡DATOS DE ENVÍO A CONTRA ENTREGA!',

            'Nombre:',
            'Cédula:',
            'Ciudad:',
            'Departamento:',
            'Dirección:',
            'Barrio o referencia:',
            'Celular:',
            'Correo Electrónico:',

            'Características y especificaciones:👇',
            'https://www.spaceshopcolombia.com/producto/trapero-triangular-360',
        ],
        null,
        null,
        []
    )

    const pagoEnLinea = addKeyword(['pago en linea','pagar online', 'pagar en tienda','pago anticipado','pagar en tienda en linea'])
    .addAnswer(
        [
            '⭐Trapero Triangular 360 ⭐',
            'Precio: 💵 79.900💵 Envío incluido. 🚛',

            '⭕Dale Clic al Enlace para Comprar en Linea👉🏻',
            'www.spaceshopcolombia.com/producto/trapero-triangular-360/',

            'Al Finalizar tu compra uno de nuestros asesores se pondra en contacto contigo para anexar la guia de su pedido.',
        ],
        null,
        null,
        []
    )

    const hablarAsesor = addKeyword(['hablar con asesor', 'asesor', 'hablar con un asesor', 'hablar con alguien'])
    .addAnswer(
        [
            '​¡Hola ! 😊 ¡Mi nombre es Nathalia  🚀',])
    .addAnswer(
        [    
            '📍 Queremos conocerte mejor:',

            '¿Cuál es tu nombre y en qué puedo ayudarte? 📦 🏙️',
        ],
        null,
        null,
        []
    )


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, contraEntrega, pagoEnLinea, hablarAsesor])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
