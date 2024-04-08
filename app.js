const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')



const flowPrincipal = addKeyword(['hola', 'ole', 'alo','precio','valor','cuanto','que vale'])
    .addAnswer('¡Hola! 😊 ¡Bienvenido a TicketYa ⭐! Estamos aquí para ayudarte en todo lo que necesites')
    
    .addAnswer('¡Tu satisfacción es nuestra prioridad,si el producto no cumple con tus expectativas te devolvemos tu dinero !')
    
    .addAnswer('Por favor indícame qué es lo que deseas hacer, Selecciona una opción (1, 2, o 3) y te ayudaré.')

    .addAnswer(
        [
            '1. 🛍️ Ver Productos Disponibles.',
            '2. 🚚 Envíos y Devoluciones.',
            '3. 💬 Hablar con un Asesor.'            

        ]
    )
const subFlujo1 = addKeyword(['1', 'uno', 'numero uno','numero 1','ver productos disponibles','productos disponibles'])
    .addAnswer('Por favor, selecciona la opción que más te interese:')
    
    .addAnswer('Por favor indícame qué es lo que deseas hacer, Selecciona una opción (1, 2, o 3) o escribe en nombre del producto.')

    .addAnswer(
        [
            '1. 👙 Kit glúteos.',
            '2. 🧹 Trapero.',
            '3. 🍽️ Escurridor.',            
            '4. 💬 Hablar con un asesor.'            
        ]
    )

    const contraEntrega = addKeyword(['pago contra entrega','contra entrega', 'contraentrega','contra reembolso','paga en casa'])
    .addAnswer(
        [

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
            'www.ticketya.com.co',
        ],
        null,
        null,
        []
    )

    const pagoEnLinea = addKeyword(['pago en linea','pagar online', 'pagar en tienda','pago anticipado','pagar en tienda en linea'])
    .addAnswer(
        [

            '⭕Dale Clic al Enlace para Comprar en Linea👉🏻',
            'www.ticketya.com.co',

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
    const adapterFlow = createFlow([flowPrincipal, contraEntrega, pagoEnLinea, hablarAsesor, subFlujo1])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
