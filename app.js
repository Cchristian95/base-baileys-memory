const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot')

const QRPortalWeb = require('@bot-whatsapp/portal')
const BaileysProvider = require('@bot-whatsapp/provider/baileys')
const MockAdapter = require('@bot-whatsapp/database/mock');
const { mediaMessageSHA256B64 } = require('@whiskeysockets/baileys');

const opcionesValidas = ['1', '2', '3'];
const opcionesProductos = ['1', '2', '3', '4'];

const Gracias = addKeyword(['3', 'gracias', 'muchas gracias'])
    
    .addAnswer('¡Gracias por confiar en nosotros y formar parte de nuestra comunidad! 🛍️')
    .addAnswer('¡No olvides visitar nuestra tienda online!')

    .addAnswer(
        ['https://spaceshopcolombia.com/'],
        { },

        async (ctx, {endFlow }) => {
            if (ctx.body === '3')
            return endFlow({body: '❌ Su solicitud ha sido Finalizada ❌',    // Aquí terminamos el flow si la condicion se cumple        
        })}
    )
.addAnswer('Hasta pronto')

const pagoEnLinea = addKeyword(['2', 'pago en linea', 'pagar online', 'pagar en tienda', 'pago anticipado', 'pagar en tienda en linea'])
    .addAnswer(['💳Para realizar tu compra en línea, puedes hacerlo a través de nuestra página web.',])
    .addAnswer(['Recuerda que aceptamos cualquier medio de pago.',])
    .addAnswer(
        [

            '⭕ Dale Clic al Enlace para Comprar en Línea 👉🏻',
            'www.spaceshopcolombia.com',

        ],
        null,
        null,
        []
    )
    .addAnswer(['Al finalizar tu compra, uno de nuestros asesores se pondrá en contacto contigo para adjuntar la guía de tu pedido.',])
    .addAnswer(['¡Gracias por elegirnos!',])

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

const verCatalogo = addKeyword(['4', 'ver catalogo', 'catalogo'])
    .addAnswer(['🎉 ¡Descubre todas nuestras ofertas! 🎉',])
    .addAnswer(
        [

            'Te invitamos a explorar nuestro catálogo completo en nuestra página web. ',
            '¡No te pierdas nuestras exclusivas promociones!',
        ])
    .addAnswer(['*www.spaceshopcolombia.com/shop/*',])

const hablarAsesor = addKeyword(['3', 'hablar con asesor', 'asesor', 'hablar con un asesor', 'hablar con alguien'])
    .addAnswer(['Hola, soy Nathalia, ¿cómo estás? 😊 Me encantaría conocerte mejor.',])
    .addAnswer(['¿Cuál es tu nombre? ¿Y en qué puedo ayudarte hoy? 🌟',])

const kitSolar = addKeyword('1', 'kit solar', 'kit solar de emergencia')
    .addAnswer(['*⚡ KIT SOLAR DE EMERGENCIA*',])
    .addAnswer(['💵 124.900💵 Envío gratis y pago contra entrega. 🛒',])
    
    .addAnswer('🔧 *CARACTERISTICAS Y ESPECIFICACIONES* ',{
    })
    .addAnswer(
        [
            '✅ 3 Bombillos de 3W',
            '✅ Puerto USB 5V 0.5A',
            '✅ Radio FM con USB para MP3',
            '✅ Autonomía aproximada de hasta 8 horas',
            '✅ Tiempo de carga estimado con panel solar 12 a 15 horas'
        ]
    )
    .addAnswer('Por favor, selecciona la opción de pago:')
    .addAnswer([
        '*1. 🏠 Pago contra entrega*',
        '*2. 🌐 Pago en linea*',
        '*3. 💬 Hablar con un asesor*'

])
    .addAnswer('*Escribe un numero* 👇', { capture: true }, (ctx, { fallBack }) => {
        if (!opcionesValidas.includes(ctx.body)) {
            ctx.body = null
            return fallBack();
        }
    }, [pagoEnLinea, contraEntrega, hablarAsesor])

const traperoTriangular = addKeyword('2', 'trapero triangular', 'trapeador', 'trapero', 'trapero 360')
    .addAnswer(['🍽 *TRAPERO TRIANGULAR*',])
    .addAnswer(['💵 69.900💵 Envío gratis y pago contra entrega. 🛒',])
    
    .addAnswer('🔧 *CARACTERISTICAS Y ESPECIFICACIONES* ',{
    })
    .addAnswer(
        [
            '✅ 3 Bombillos de 3W',
            '✅ Puerto USB 5V 0.5A',
            '✅ Radio FM con USB para MP3'
        ]
    )
    .addAnswer('Por favor, selecciona la opción de pago:')
    .addAnswer([
        '*1. 🏠 Pago contra entrega*',
        '*2. 🌐 Pago en linea*',
        '*3. 💬 Hablar con un asesor*'

])
    .addAnswer('*Escribe un numero* 👇', { capture: true }, (ctx, { fallBack }) => {
        if (!opcionesValidas.includes(ctx.body)) {
            ctx.body = null
            return fallBack();
        }
    }, [pagoEnLinea, contraEntrega, hablarAsesor])

const escurridorPlatos = addKeyword('3', 'escurridor de platos', 'Escurridor de platos', 'escurridor platos')
    .addAnswer(['🍽 *ESCURRIDOR DE PLATOS MULTIFUNCIONAL*',])
    .addAnswer(['💵 119.900💵 Envío gratis y pago contra entrega. 🛒',])
    
    .addAnswer('🔧 *CARACTERISTICAS Y ESPECIFICACIONES* ',{
    })
    .addAnswer(
        [
            '✅ 3 Bombillos de 3W',
            '✅ Puerto USB 5V 0.5A',
            '✅ Radio FM con USB para MP3',
            '✅ Autonomía aproximada de hasta 8 horas',
            '✅ Tiempo de carga estimado con panel solar 12 a 15 horas',
            '✅ Tiempo de carga estimado con adaptador de corriente 8 a 10 horas',
            '✅ Dimensiones aproximadas del panel: 25.5 x 15 x 1.5 cm',
        ]
    )
    .addAnswer('Por favor, selecciona la opción de pago:')
    .addAnswer([
        '*1. 🏠 Pago contra entrega*',
        '*2. 🌐 Pago en linea*',
        '*3. 💬 Hablar con un asesor*'

])
    .addAnswer('*Escribe un numero* 👇', { capture: true }, (ctx, { fallBack }) => {
        if (!opcionesValidas.includes(ctx.body)) {
            ctx.body = null
            return fallBack();
        }
    }, [pagoEnLinea, contraEntrega, hablarAsesor])

const estadoPedido = addKeyword(['1', 'uno', 'numero uno', 'numero 1', 'Envios', 'Envíos', 'pedido en transito', 'envio'])
    .addAnswer('Escribe por favor el número de guía y te ayudaremos a rastrear tu pedido.')

const estadoGarantia = addKeyword(['2', 'dos', 'numero dos', 'numero 2', 'estado garantia'])
    .addAnswer('Escribe por favor el número de guía para validar el estado de su garantia.')

const productoDefectuoso = addKeyword(['1', 'producto defectuoso', 'quiero garantia', 'defectuoso'])

    .addAnswer('Para continuar con el proceso de garantia, sigue estos pasos:')
    .addAnswer(
        [
            '1. 💥 Envíanos el número de guía de tu pedido junto con el número de cedúla.',
            '2. 📷 Anexa fotos y videos mostrando claramente el daño del producto.',
            '3. 👩‍💻 Un asesor se pondra en contacto contigo.',
            '4. 📦 Empaqueta el producto en su caja original con todos los accesorios.',
            '5. ✅ Asegúrate de que el producto esté en buenas condiciones.',
            '6. ✍ Haz una breve descripción de cómo llegó tu producto defectuoso.',
                        
        ])
    .addAnswer('Si todo está en orden, te enviaremos un producto nuevo en 3 días hábiles.')
        
const garantiaDevoluciones = addKeyword(['2', 'dos', 'numero dos', 'numero 2', 'Devoluciones', 'devoluciones'])

    .addAnswer('🕒Intentamos procesar tus garantías o devoluciones dentro de 3 días hábiles.')
    .addAnswer('Por favor selecciona una opción (1 o 2)')
    .addAnswer(
        [
            '*1. 📮 Solicitar garantia*',
            '*2. 📦 Estado de garantia*'

        ])

    .addAnswer('*Escribe un numero* 👇', { capture: true }, (ctx, { fallBack }) => {

        console.log("texto ingresado ", ctx.body)
        if (!opcionesValidas.includes(ctx.body)) {
            ctx.body = null
            return fallBack();
        }
    }, [productoDefectuoso, estadoGarantia])


const subFlujo1 = addKeyword(['1', 'uno', 'numero uno', 'numero 1', 'Ver productos disponibles', 'ver productos disponibles', 'catalogo'])
    .addAnswer('✨Recuerda que ¡todos nuestros productos tienen envío gratis a cualquier parte de Colombia! 🚚 ')
    .addAnswer('Puedes realizar pago contra entrega o pago en línea 💳')
    .addAnswer('Por favor selecciona una opción (1, 2, 3...).')

    .addAnswer(
        [
            '*1. 🌞 Kit Solar de emergencia*',
            '*2. 🧹 Trapero triangular 360*',
            '*3. 🍽️ Escurridor de platos*',
            '*4. 📖 Ver catalogo completo*'
        ])
    .addAnswer('*Escribe un numero* 👇', { capture: true }, (ctx, { fallBack }) => {

        console.log("texto ingresado ", ctx.body)
        if (!opcionesProductos.includes(ctx.body)) {
            ctx.body = null
            return fallBack();
        }

    }, [kitSolar, traperoTriangular, escurridorPlatos, verCatalogo])



const subFlujo2 = addKeyword(['2', 'dos', 'numero dos', 'numero 2', 'Envíos y Devoluciones', 'envios y devoluciones'])
    .addAnswer(
        '¡En Ticketya, nos esforzamos por ofrecerte una experiencia de compra sin problemas!',
        'Nuestros pedidos suelen tardar entre 2 a 6 días hábiles en ser entregados y el tipo de envío seleccionado.📮')

    .addAnswer('Por favor selecciona una opción (1 o 2)')

    .addAnswer(
        [
            '*1. 🚚 Estado del pedido*',
            '*2. 📦 Garantias*'
        ])
    .addAnswer('*Escribe un numero* 👇', { capture: true }, (ctx, { fallBack }) => {

        console.log("texto ingresado ", ctx.body)
        if (!opcionesValidas.includes(ctx.body)) {
            ctx.body = null
            return fallBack();
        }
        console.log("texto de salida ", ctx.body)
        console.log("Opcion Valida")
    }, [estadoPedido, garantiaDevoluciones, hablarAsesor])

const flowPrincipal = addKeyword(['hola', 'hol', 'ola', 'ole', 'alo', 'buenos dias', 'buenas tardes', 'buenas noches'])
    .addAnswer('¡Hola! 😊 ¡Bienvenido a *Space Shop Colombia* ⭐!')
    .addAnswer('¡ *Tu satisfacción es nuestra prioridad*, recuerda que todos nuestros productos tienen *garantia*!')
    .addAnswer('Por favor selecciona una opción (1, 2, o 3).')

    .addAnswer(
        [
            '*1. ⭐ Ver Productos Estrella*',
            '*2. 🚚 Estado de pedido y Garantias*',
            '*3. 💬 Hablar con un asesor*'
            
        ])
    .addAnswer('*Escribe un numero 👇, o deja tu mensaje*', { capture: true }, (ctx, { fallBack }) => {

        console.log("texto ingresado ", ctx.body)
        if (!opcionesValidas.includes(ctx.body)) {
            ctx.body = null
            return fallBack();
        }
        console.log("Opcion Valida")
    }, [subFlujo1, subFlujo2, hablarAsesor, Gracias])

    
    // Codigo para enviar mensajes depues de cierto tiempo
    
    // .addAnswer(
    //     'Debes de responder antes de que transcurran 2 segundos',
    //     { capture: true, idle: 2000 }, // idle: 2000 = 2 segundos
    //     async (ctx, { gotoFlow, inRef }) => {
    //         if (ctx?.idleFallBack) {
    //             return gotoFlow(flujoFinal)
    //         }
    //     }
    // )
    // .addAnswer('gracias!')





const main = async () => {
    const adapterDB = new MockAdapter()
    const adapterFlow = createFlow([flowPrincipal])
    const adapterProvider = createProvider(BaileysProvider)

    createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    QRPortalWeb()
}

main()
