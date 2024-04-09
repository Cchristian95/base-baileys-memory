const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const contraEntrega = addKeyword(['pago contra entrega', 'contra entrega', 'contraentrega', 'contra reembolso', 'paga en casa'])
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

const pagoEnLinea = addKeyword(['pago en linea', 'pagar online', 'pagar en tienda', 'pago anticipado', 'pagar en tienda en linea'])
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
    
    const kitSolar = addKeyword('a','kit solar','kit solar de emergencia')
    .addAnswer(['⚡Kit Solar de Emergencia, a tan solo 💵 124.900💵',])
    .addAnswer(['Envío gratuito y pago contra entrega. 🛒 a toda Colombia 🇨🇴',])
    .addAnswer(['🔧 Características y Especificaciones: ',])
    .addAnswer(
        [
            '3 Bombillos de 3W',
            'Puerto USB 5V 0.5A',
            'Radio FM con USB para MP3',
            'Autonomía aproximada de hasta 8 horas',
            'Tiempo de carga estimado con panel solar 12 a 15 horas',
            'Tiempo de carga estimado con adaptador de corriente 8 a 10 horas',
            'Dimensiones aproximadas del panel: 25.5 x 15 x 1.5 cm',
        ],
        null,
        null,
        []
    )
    .addAnswer(['Selecciona la opcion de pago',
    'Puedes pagar en linea o tambien con pago contra entrega',] ,
    null,
    null,
    []
)
.addAnswer(['Pago contra entrega',])
.addAnswer(['Pago en linea'], null, null, [pagoEnLinea, contraEntrega])

const subFlujo1 = addKeyword(['1', 'uno', 'numero uno', 'numero 1', 'Ver productos disponibles', 'ver productos disponibles','catalogo'])
    .addAnswer('Por favor, selecciona la opción que más te interese:')

    .addAnswer('Selecciona una opción (a, b, ...) o escribe en nombre del producto.')

    .addAnswer(
        [
            'a. 🌞 Kit Solar de emergencia.',
            'b. 🧹 Trapero triangular 360.',
            'c. 🍽️ Escurridor de platos.',
            'd. 📖 Ver catalogo completo.'
        ],
        null,
        null,
        [kitSolar]
    )

const subFlujo2 = addKeyword(['2', 'dos', 'numero dos', 'numero 2', 'Envíos y Devoluciones', 'envios y devoluciones'])
.addAnswer('¡Entendido! ¿Qué información necesitas?')

.addAnswer('Por favor indícame qué es lo que deseas hacer, Selecciona una opción (1, 2, o 3) o escribe en nombre del producto.')

.addAnswer(
    [
        '1. 🚚 Envíos',
        '2. 📦 Devoluciones',
        '3. 💬Hablar con un asesor.'
    ],
    null,
    null,
    []
)

const flowPrincipal = addKeyword(['hola', 'hol','ola', 'ole', 'alo', 'precio', 'valor', 'cuanto', 'que vale'])
    .addAnswer('¡Hola! 😊 ¡Bienvenido a TicketYa ⭐! Estamos aquí para ayudarte en todo lo que necesites')

    .addAnswer('¡Tu satisfacción es nuestra prioridad,si el producto no cumple con tus expectativas te devolvemos tu dinero !')

    .addAnswer('Por favor indícame qué es lo que deseas hacer, Selecciona una opción (1, 2, o 3) y te ayudaré.')

    .addAnswer(
        [
            '1. 🛍️ Ver Productos Disponibles.',
            '2. 🚚 Envíos y Devoluciones.',
            '3. 💬 Hablar con un Asesor.'

        ],
        null,
        null,
        [subFlujo1,subFlujo2]
    )
const Gracias = addKeyword(['gracias','muchas gracias'])
    .addAnswer('¡Te agradecemos por elegirnos! Esperamos tener la oportunidad de atenderte nuevamente. 🤝👊')
    .addAnswer('¡Gracias por confiar en nosotros! 🌟🛍️')
    .addAnswer('Visita nuestra tienda online.')
    .addAnswer('https://spaceshopcolombia.com/')


const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal, contraEntrega, pagoEnLinea, hablarAsesor, Gracias])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
