const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock')

const contraEntrega = addKeyword(['1', 'pago contra entrega', 'contra entrega', 'contraentrega', 'contra reembolso', 'paga en casa'])

    .addAnswer(['💵Para procesar tu pedido, por favor, proporciona la siguiente información:',])
    .addAnswer(['📦 DATOS DE ENVÍO A CONTRA ENTREGA:',])
    .addAnswer(
        [
            '🔹 Nombre:',
            '🔹 Cédula:',
            '🔹 Ciudad:',
            '🔹 Departamento:',
            '🔹 Dirección:',
            '🔹 Barrio o referencia:',
            '🔹 Celular:',
            '🔹 Correo Electrónico:',
        ])
    .addAnswer(['Tus productos llegarán en un lapso de 2 a 6 días hábiles 📦 ',])

const pagoEnLinea = addKeyword(['2', 'pago en linea', 'pagar online', 'pagar en tienda', 'pago anticipado', 'pagar en tienda en linea'])
    .addAnswer(['💳Para realizar tu compra en línea, puedes hacerlo a través de nuestra página web.',])
    .addAnswer(['Recuerda que aceptamos cualquier medio de pago.',])
    .addAnswer(
        [

            '⭕ Dale Clic al Enlace para Comprar en Línea 👉🏻',
            'www.ticketya.com.co',

        ],
        null,
        null,
        []
    )
    .addAnswer(['Al finalizar tu compra, uno de nuestros asesores se pondrá en contacto contigo para adjuntar la guía de tu pedido.',])
    .addAnswer(['¡Gracias por elegirnos!',])

const verCatalogo = addKeyword(['4', 'ver catalogo', 'catalogo'])
    .addAnswer(['🎉 ¡Descubre todas nuestras ofertas! 🎉',])
    .addAnswer(
        [

            'Te invitamos a explorar nuestro catálogo completo en nuestra página web. ',

            '¡No te pierdas nuestras exclusivas promociones!',
        ],
        null,
        null,
        []
    )
    .addAnswer(['*www.ticketya.com.co/tienda*',])

const hablarAsesor = addKeyword(['3', 'hablar con asesor', 'asesor', 'hablar con un asesor', 'hablar con alguien'])
    .addAnswer(
        [
            'Hola, soy Nathalia, ¿cómo estás? 😊 Me encantaría conocerte mejor. ¿Cuál es tu nombre? ¿Y en qué puedo ayudarte hoy? 🌟',])
    .addAnswer(
        [
            'Estoy aquí para brindarte toda la ayuda que necesites y hacer que tu experiencia sea lo más fácil y agradable posible. 💬',
        ],
        null,
        null,
        []
    )

const hablarAsesor2 = addKeyword(['2', 'hablar con asesor', 'asesor', 'hablar con un asesor', 'hablar con alguien'])
    .addAnswer(
        [
            'Hola, soy Nathalia, ¿cómo estás? 😊 Me encantaría conocerte mejor. ¿Cuál es tu nombre? ¿Y en qué puedo ayudarte hoy? 🌟',])
    .addAnswer(
        [
            'Estoy aquí para brindarte toda la ayuda que necesites y hacer que tu experiencia sea lo más fácil y agradable posible. 💬',
        ],
        null,
        null,
        []
    )

const kitSolar = addKeyword('1', 'kit solar', 'kit solar de emergencia')
    .addAnswer(['⚡Kit Solar de Emergencia, a tan solo 💵 124.900💵',])
    .addAnswer(['Envío gratuito y pago contra entrega. 🛒 a toda Colombia 🇨🇴',])
    .addAnswer(['🔧 Características y Especificaciones: ',])
    .addAnswer(
        [
            '✅ 3 Bombillos de 3W',
            '✅ Puerto USB 5V 0.5A',
            '✅ Radio FM con USB para MP3',
            '✅ Autonomía aproximada de hasta 8 horas',
            '✅ Tiempo de carga estimado con panel solar 12 a 15 horas',
            '✅ Tiempo de carga estimado con adaptador de corriente 8 a 10 horas',
            '✅ Dimensiones aproximadas del panel: 25.5 x 15 x 1.5 cm',
        ],
        null,
        null,
        []
    )
    .addAnswer(['Puedes pagar en linea o tambien con pago contra entrega',])
    .addAnswer('Por favor, selecciona la opción de pago:')
    .addAnswer(['1. Pago contra entrega',])
    .addAnswer(['2. Pago en linea'], null, null, [pagoEnLinea, contraEntrega])

const traperoTriangular = addKeyword('2', 'trapero triangular', 'trapeador', 'trapero', 'trapero 360')
    .addAnswer(['Trapero triangular 360, a tan solo 💵 79.900💵',])
    .addAnswer(['Envío gratuito y pago contra entrega. 🛒 a toda Colombia 🇨🇴',])
    .addAnswer(['🔧 Características y Especificaciones: ',])
    .addAnswer(
        [
            '✅ 3 Bombillos de 3W',
            '✅ Puerto USB 5V 0.5A',
            '✅ Radio FM con USB para MP3',
            '✅ Autonomía aproximada de hasta 8 horas',
            '✅ Tiempo de carga estimado con panel solar 12 a 15 horas',
            '✅ Tiempo de carga estimado con adaptador de corriente 8 a 10 horas',
            '✅ Dimensiones aproximadas del panel: 25.5 x 15 x 1.5 cm',
        ],
        null,
        null,
        []
    )
    .addAnswer(['Puedes pagar en linea o tambien con pago contra entrega',])
    .addAnswer('Por favor, selecciona la opción de pago:')
    .addAnswer(['1. Pago contra entrega',])
    .addAnswer(['2. Pago en linea'], null, null, [pagoEnLinea, contraEntrega])

const escurridorPlatos = addKeyword('3', 'escurridor de platos', 'Escurridor de platos', 'escurridor platos')
    .addAnswer(['🍽 Escurridor de platos, a tan solo 💵 119.900💵',])
    .addAnswer(['Envío gratuito y pago contra entrega. 🛒 a toda Colombia 🇨🇴',])
    .addAnswer(['🔧 Características y Especificaciones: ',])
    .addAnswer(
        [
            '✅ 3 Bombillos de 3W',
            '✅ Puerto USB 5V 0.5A',
            '✅ Radio FM con USB para MP3',
            '✅ Autonomía aproximada de hasta 8 horas',
            '✅ Tiempo de carga estimado con panel solar 12 a 15 horas',
            '✅ Tiempo de carga estimado con adaptador de corriente 8 a 10 horas',
            '✅ Dimensiones aproximadas del panel: 25.5 x 15 x 1.5 cm',
        ],
        null,
        null,
        []
    )
    .addAnswer(['Puedes pagar en linea o tambien con pago contra entrega',])
    .addAnswer('Por favor, selecciona la opción de pago:')
    .addAnswer(['1. Pago contra entrega',])
    .addAnswer(['2. Pago en linea'], null, null, [pagoEnLinea, contraEntrega])


const subFlujo1 = addKeyword(['1', 'uno', 'numero uno', 'numero 1', 'Ver productos disponibles', 'ver productos disponibles', 'catalogo'])
    .addAnswer('✨Recuerda que ¡todos nuestros productos tienen envío gratis a cualquier parte de Colombia! 🚚 ')
    .addAnswer('Puedes realizar pago contra entrega o pago en línea 💳')
    .addAnswer('Por favor selecciona una opción (1, 2, o 3).')

    .addAnswer(
        [
            '1. 🌞 *Kit Solar de emergencia*',
            '2. 🧹 *Trapero triangular 360*',
            '3. 🍽️ *Escurridor de platos*',
            '4. 📖 *Ver catalogo completo*'
        ],
        null,
        null,
        [kitSolar, traperoTriangular, escurridorPlatos, verCatalogo]
    )

const numeroGuia = addKeyword(['1', 'numero guia'])
    .addAnswer('Puedes proporcionarnos tu número de guía y te ayudaremos a rastrear tu pedido.')


const estadoPedido = addKeyword(['1', 'uno', 'numero uno', 'numero 1', 'Envios', 'Envíos', 'pedido en transito', 'envio'])
    .addAnswer('En caso de problemas o inconvenientes con tu guía, no dudes en comunicarte con un asesor. Estamos aquí para ayudarte en todo lo que necesites.')

    .addAnswer([
        '1. 🕒 *Seguimiento con número de guía*',
        '2. 💬 *Hablar con un asesor*',

    ],
        null,
        null,
        [numeroGuia,hablarAsesor2])


const productoDefectuoso = addKeyword(['1', 'productos defectuoso'])

    .addAnswer('Por favor, proporciona el número de guía de tu envío 💥')
    .addAnswer('✍ Haz una breve descripción de cómo llegó tu producto defectuoso')
    .addAnswer('Anexa fotos o videos 📷')
    

const procesoDevoluciones = addKeyword(['2', 'proceso de devolucion','devoluciones','devolucion'])

    .addAnswer('Para hacer una devolución, sigue estos pasos:')
    .addAnswer(
        [
            '⭕ Envíanos el número de guía de tu pedido junto con el número de cedúla.',
            '⭕ Envía un video mostrando claramente el daño del producto.',
            '⭕ Un asesor se pondra en contacto contigo.',
            '⭕ Empaqueta el producto en su caja original con todos los accesorios.',
            '⭕ Asegúrate de que el producto esté en buenas condiciones.',
            '⭕ Si todo está en orden, te enviaremos un producto nuevo en 3 días hábiles.'

        ])

const garantiaDevoluciones = addKeyword(['2', 'dos', 'numero dos', 'numero 2', 'Devoluciones', 'devoluciones'])

    .addAnswer('🕒Intentamos procesar tus garantías o devoluciones dentro de 3 días hábiles.')
    .addAnswer(
        [
            '1. 📮 *Producto defectuoso*',
            '2. 📦 *Proceso de devolución*',
            '3. 💬 *Hablar con un asesor*',

        ],
        null,
        null,
        [productoDefectuoso, procesoDevoluciones, hablarAsesor]
    )






const subFlujo2 = addKeyword(['2', 'dos', 'numero dos', 'numero 2', 'Envíos y Devoluciones', 'envios y devoluciones'])
    .addAnswer(
        '¡En Ticketya, nos esforzamos por ofrecerte una experiencia de compra sin problemas!',
        'Nuestros pedidos suelen tardar entre 2 a 6 días hábiles en ser entregados y el tipo de envío seleccionado.📮')

    .addAnswer('Por favor selecciona una opción (1, 2, o 3)')

    .addAnswer(
        [
            '1. 🚚 *Estado del pedido*',
            '2. 📦 *Garantias y Devoluciones*',
            '3. 💬 *Hablar con un asesor*'
        ],
        null,
        null,
        [estadoPedido, garantiaDevoluciones, hablarAsesor]
    )

const opcionesValidas = ['1', '2', '3'];
const flowPrincipal = addKeyword(['hola', 'hol', 'ola', 'ole', 'alo', 'precio', 'valor', 'cuanto', 'que vale', 'buenos dias', 'buenas tardes', 'buenas noches'])
    .addAnswer('¡Hola! 😊 ¡Bienvenido a TicketYa ⭐! Estamos aquí para ayudarte en todo lo que necesites')

    .addAnswer('¡Tu satisfacción es nuestra prioridad,si el producto no cumple con tus expectativas te devolvemos tu dinero!')
    .addAnswer('Por favor selecciona una opción (1, 2, o 3).')

    .addAnswer(
        [
            '1. 🛍️ *Ver Productos Disponibles*',
            '2. 🚚 *Envíos, Garantias y Devoluciones*',
            '3. 💬 *Hablar con un Asesor*'

        ]
    )
    .addAnswer('Estamos aqui para ayudarte', { capture: true }, (ctx, { fallBack }) => {

        console.log("texto ingresado ", ctx.body)
        if (!opcionesValidas.includes(ctx.body)) {
            ctx.body = null
            return fallBack();
        }
        console.log("texto de salida ", ctx.body)
        console.log("Opcion Valida")
    }, [subFlujo1, subFlujo2, hablarAsesor])


const Gracias = addKeyword(['gracias', 'muchas gracias'])
    .addAnswer('¡Gracias por confiar en nosotros y formar parte de nuestra comunidad! 🛍️')
    .addAnswer('¡No olvides visitar nuestra tienda online!')
    .addAnswer('https://spaceshopcolombia.com/')
    .addAnswer('Descubre productos increíbles!🌟')


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
