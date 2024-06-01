const Category = require(__dirname + '/../models/category.js');
const Product = require(__dirname + '/../models/product.js');
const Web = require(__dirname + '/../models/web.js');
const Country = require(__dirname + '/../models/country.js');

const countries = [
    { name: "Afganistán" },
    { name: "Albania" },
    { name: "Alemania" },
    { name: "Andorra" },
    { name: "Angola" },
    { name: "Antigua y Barbuda" },
    { name: "Arabia Saudita" },
    { name: "Argelia" },
    { name: "Argentina" },
    { name: "Armenia" },
    { name: "Australia" },
    { name: "Austria" },
    { name: "Azerbaiyán" },
    { name: "Bahamas" },
    { name: "Bangladés" },
    { name: "Baréin" },
    { name: "Barbados" },
    { name: "Bélgica" },
    { name: "Belice" },
    { name: "Benín" },
    { name: "Bielorrusia" },
    { name: "Birmania" },
    { name: "Bolivia" },
    { name: "Bosnia y Herzegovina" },
    { name: "Botsuana" },
    { name: "Brasil" },
    { name: "Brunéi" },
    { name: "Bulgaria" },
    { name: "Burkina Faso" },
    { name: "Burundi" },
    { name: "Bután" },
    { name: "Cabo Verde" },
    { name: "Camboya" },
    { name: "Camerún" },
    { name: "Canadá" },
    { name: "Catar" },
    { name: "Chad" },
    { name: "Chile" },
    { name: "China" },
    { name: "Chipre" },
    { name: "Ciudad del Vaticano" },
    { name: "Colombia" },
    { name: "Comoras" },
    { name: "Congo" },
    { name: "Corea del Norte" },
    { name: "Corea del Sur" },
    { name: "Costa Rica" },
    { name: "Croacia" },
    { name: "Cuba" },
    { name: "Dinamarca" },
    { name: "Dominica" },
    { name: "Ecuador" },
    { name: "Egipto" },
    { name: "El Salvador" },
    { name: "Emiratos Árabes Unidos" },
    { name: "Eritrea" },
    { name: "Eslovaquia" },
    { name: "Eslovenia" },
    { name: "España" },
    { name: "Estados Unidos" },
    { name: "Estonia" },
    { name: "Esuatini" },
    { name: "Etiopía" },
    { name: "Filipinas" },
    { name: "Finlandia" },
    { name: "Fiyi" },
    { name: "Francia" },
    { name: "Gabón" },
    { name: "Gambia" },
    { name: "Georgia" },
    { name: "Ghana" },
    { name: "Granada" },
    { name: "Grecia" },
    { name: "Guatemala" },
    { name: "Guinea" },
    { name: "Guinea-Bisáu" },
    { name: "Guinea Ecuatorial" },
    { name: "Guyana" },
    { name: "Haití" },
    { name: "Honduras" },
    { name: "Hungría" },
    { name: "India" },
    { name: "Indonesia" },
    { name: "Irak" },
    { name: "Irán" },
    { name: "Irlanda" },
    { name: "Islandia" },
    { name: "Islas Marshall" },
    { name: "Israel" },
    { name: "Italia" },
    { name: "Jamaica" },
    { name: "Japón" },
    { name: "Jordania" },
    { name: "Kazajistán" },
    { name: "Kenia" },
    { name: "Kirguistán" },
    { name: "Kiribati" },
    { name: "Kuwait" },
    { name: "Laos" },
    { name: "Lesoto" },
    { name: "Letonia" },
    { name: "Líbano" },
    { name: "Liberia" },
    { name: "Libia" },
    { name: "Liechtenstein" },
    { name: "Lituania" },
    { name: "Luxemburgo" },
    { name: "Madagascar" },
    { name: "Malasia" },
    { name: "Malaui" },
    { name: "Maldivas" },
    { name: "Malí" },
    { name: "Malta" },
    { name: "Marruecos" },
    { name: "Mauricio" },
    { name: "Mauritania" },
    { name: "México" },
    { name: "Micronesia" },
    { name: "Moldavia" },
    { name: "Mónaco" },
    { name: "Mongolia" },
    { name: "Montenegro" },
    { name: "Mozambique" },
    { name: "Namibia" },
    { name: "Nauru" },
    { name: "Nepal" },
    { name: "Nicaragua" },
    { name: "Níger" },
    { name: "Nigeria" },
    { name: "Noruega" },
    { name: "Nueva Zelanda" },
    { name: "Omán" },
    { name: "Países Bajos" },
    { name: "Pakistán" },
    { name: "Palaos" },
    { name: "Panamá" },
    { name: "Papúa Nueva Guinea" },
    { name: "Paraguay" },
    { name: "Perú" },
    { name: "Polonia" },
    { name: "Portugal" },
    { name: "Reino Unido" },
    { name: "República Centroafricana" },
    { name: "República Checa" },
    { name: "República Dominicana" },
    { name: "Ruanda" },
    { name: "Rumanía" },
    { name: "Rusia" },
    { name: "Samoa" },
    { name: "San Cristóbal y Nieves" },
    { name: "San Marino" },
    { name: "San Vicente y las Granadinas" },
    { name: "Santa Lucía" },
    { name: "Santo Tomé y Príncipe" },
    { name: "Senegal" },
    { name: "Serbia" },
    { name: "Seychelles" },
    { name: "Sierra Leona" },
    { name: "Singapur" },
    { name: "Siria" },
    { name: "Somalia" },
    { name: "Sri Lanka" },
    { name: "Sudáfrica" },
    { name: "Sudán" },
    { name: "Sudán del Sur" },
    { name: "Suecia" },
    { name: "Suiza" },
    { name: "Surinam" },
    { name: "Tailandia" },
    { name: "Tanzania" },
    { name: "Tayikistán" },
    { name: "Timor Oriental" },
    { name: "Togo" },
    { name: "Tonga" },
    { name: "Trinidad y Tobago" },
    { name: "Túnez" },
    { name: "Turkmenistán" },
    { name: "Turquía" },
    { name: "Tuvalu" },
    { name: "Ucrania" },
    { name: "Uganda" },
    { name: "Uruguay" },
    { name: "Uzbekistán" },
    { name: "Vanuatu" },
    { name: "Venezuela" },
    { name: "Vietnam" },
    { name: "Yemen" },
    { name: "Yibuti" },
    { name: "Zambia" },
    { name: "Zimbabue" }
];

//
let websData = [];
const websToInsert = [
    {
        name: "Amazon",
        url: "https://www.amazon.es",
        imageUrl: "data:image/png;base64,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"
    },
    {
        name: "Nike",
        url: "https://www.nike.com",
        imageUrl: "data:image/png;base64,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"

    },
    {
        name: "Adidas",
        url: "https://www.adidas.es/",
        imageUrl: "data:image/png;base64,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"

    }
];

// Datos de categorías y productos
const categoriesData = [
    {
        name: "Zapatos",
        products: [
            {
                title: "Skechers Skech-Air Dynamight Venturik, Zapatillas de Deporte Hombre ",
                description: 'Añade un cojín de aire a tu rutina de entrenamiento con el zapato Skechers Skech-Air® Dynamight. Estos tenis con cordones cuentan con una parte superior de malla y sintética con plantilla acolchada de espuma viscoelástica y entresuela acolchada de aire Skech-Air®.',
                price: 47,
                imageUrl: 'https://m.media-amazon.com/images/I/51ngaXQv1+L._AC_SY695_.jpg',
                webUrl: 'https://www.amazon.es/Skechers-Skech-Air-Dynamight-Tuned-Zapatillas-Engineered/dp/B08DW74Z62/ref=sr_1_11?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30VL30GVW15AX&dib=eyJ2IjoiMSJ9.teCHVKBru8WPwFfC5uY-NoKG0SGBk5cuCxIXDpNh0GdnfQ7soi53H-Ui-kJzrS45ixKgR774UA4U9DqhFexkI0t6BbfMx6sGjiYGoA3ZTHV7D33klEkIDoJjI8BqWCZpyGbD1j1W7aaMgA79yohsHmLNijn2DSy484KGNMUt8Nox9E9Lgsom-1q-KQ6ooGsH30ek7lWqggX_oK750MnWWnhoa7PEN-KDMVA1ytVI-HPk20nzHPUKErxH66Wdz2pR7UqPt0JJTjC9sDdl9bBc3-es3Pp6g84p0w-L3gYXvFg.pSROemyVbp0GDTDlFYwGcF_THOF3FWSrrPkrxLIC1B4&dib_tag=se&keywords=zapatos+deportivos&qid=1712493348&sprefix=zapatos+deportivos%2Caps%2C137&sr=8-11',
                rating: 5,
                web: 0,
                qty: 400
            },
            {
                title: "Hitmars Zapatillas Deportivas Hombre Mujer Zapatillas de Running Ligero Transpirables Zapatos para Correr Fitness Casual Sneakers Negro Azul Gris Rojo EU 36-48",
                description: "ULTRAL LIGHT y TRANSPIRABLE: Con el material liviano que usamos, los elegantes zapatos deportivos se vuelven livianos, lo que es excelente para caminar y correr durante mucho tiempo. Y el diseño de malla transpirable permite que tus pies respiren. Flexible y Suave: la suela es realmente flexible y suave. Definitivamente, te sentirás cómodo todo el día con esta fabulosa zapatilla, incluso de pie todo el día. Simple y Cómodo: las zapatillas se cierran con cordones, cordones anchos de algodón, los cordones flexibles y resistentes a los tirones están diseñados para ser simples y casuales, es más fácil de poner y quitar. Antideslizante y Durabilidad: la suela de goma antideslizante y la entresuela de espuma de densidad le dan a la zapatilla de carretera suficiente agarre y durabilidad, proporciona tracción en pisos resbaladizos. Excelente soporte para los pies y efecto antideslizante, protege durante todo el día de caminata. Ampliamente utilizado: los zapatos deportivos son perfectos para trotar, caminar, bádminton, tenis, fitness y uso diario. Decentemente elegante va bien con la mayoría de los conjuntos.",
                price: 30,
                imageUrl: 'https://m.media-amazon.com/images/I/81s0EveMNwL._AC_SY695_.jpg',
                webUrl: 'https://www.amazon.es/Hitmars-Zapatillas-Deportivas-Transpirables-Sneakers/dp/B0CJFFHHGH/ref=sr_1_12?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30VL30GVW15AX&dib=eyJ2IjoiMSJ9.teCHVKBru8WPwFfC5uY-NoKG0SGBk5cuCxIXDpNh0GdnfQ7soi53H-Ui-kJzrS45ixKgR774UA4U9DqhFexkI0t6BbfMx6sGjiYGoA3ZTHV7D33klEkIDoJjI8BqWCZpyGbD1j1W7aaMgA79yohsHmLNijn2DSy484KGNMUt8Nox9E9Lgsom-1q-KQ6ooGsH30ek7lWqggX_oK750MnWWnhoa7PEN-KDMVA1ytVI-HPk20nzHPUKErxH66Wdz2pR7UqPt0JJTjC9sDdl9bBc3-es3Pp6g84p0w-L3gYXvFg.pSROemyVbp0GDTDlFYwGcF_THOF3FWSrrPkrxLIC1B4&dib_tag=se&keywords=zapatos+deportivos&qid=1712493348&sprefix=zapatos+deportivos%2Caps%2C137&sr=8-12',
                rating: 4,
                web: 0,
                qty: 3500
            },
            {
                title: "PUMA St Runner V3 NL, Trainers & Sneakers Unisex Adulto ",
                description: 'Las zapatillas ST Runner v3 actualizan un modelo familiar con pequeñas modificaciones en el exterior y ajustes en el refuerzo del talón para rendir homenaje a nuestros archivos y hacerte destacar. Su diseño atemporal y legendario nunca pasará de moda, mientras que la plantilla SoftFoam+ garantiza tu comodidad durante todo el día.',
                price: 40,
                imageUrl: 'https://m.media-amazon.com/images/I/51vjdCq8huL._AC_SY695_.jpg',
                webUrl: 'https://www.amazon.es/Unisex-Adults-Runner-Sneakers-Black-Puma/dp/B097C9P15F/ref=sr_1_15?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30VL30GVW15AX&dib=eyJ2IjoiMSJ9.teCHVKBru8WPwFfC5uY-NoKG0SGBk5cuCxIXDpNh0GdnfQ7soi53H-Ui-kJzrS45ixKgR774UA4U9DqhFexkI0t6BbfMx6sGjiYGoA3ZTHV7D33klEkIDoJjI8BqWCZpyGbD1j1W7aaMgA79yohsHmLNijn2DSy484KGNMUt8Nox9E9Lgsom-1q-KQ6ooGsH30ek7lWqggX_oK750MnWWnhoa7PEN-KDMVA1ytVI-HPk20nzHPUKErxH66Wdz2pR7UqPt0JJTjC9sDdl9bBc3-es3Pp6g84p0w-L3gYXvFg.pSROemyVbp0GDTDlFYwGcF_THOF3FWSrrPkrxLIC1B4&dib_tag=se&keywords=zapatos+deportivos&qid=1712493348&sprefix=zapatos+deportivos%2Caps%2C137&sr=8-15',
                rating: 5,
                web: 0,
                qty: 235
            },
            {
                title: "Zapatillas Deportivas Hombre Zapatillas Running Zapatos Deportivos Deporte Correr cojín de Aire Ligero Malla Transpirable Atlético Sneakers EU 39-48 ",
                description: 'Malla Transpirable: Los zapatillas running están fabricados con tejido de punto, lo que no solo asegura su ligereza y moda, sino que también asegura la comodidad del producto, manteniendo tus pies secos en todo momento y sin sentirte pesado después de trabajar cansadamente',
                price: 30,
                imageUrl: 'https://m.media-amazon.com/images/I/71na8t3Q9LL._AC_SY695_.jpg',
                webUrl: 'https://www.amazon.es/Zapatillas-Deportivas-Deportivos-Transpirable-Atl%C3%A9tico/dp/B0CZ38T6QB/ref=sr_1_13?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30VL30GVW15AX&dib=eyJ2IjoiMSJ9.teCHVKBru8WPwFfC5uY-NoKG0SGBk5cuCxIXDpNh0GdnfQ7soi53H-Ui-kJzrS45ixKgR774UA4U9DqhFexkI0t6BbfMx6sGjiYGoA3ZTHV7D33klEkIDoJjI8BqWCZpyGbD1j1W7aaMgA79yohsHmLNijn2DSy484KGNMUt8Nox9E9Lgsom-1q-KQ6ooGsH30ek7lWqggX_oK750MnWWnhoa7PEN-KDMVA1ytVI-HPk20nzHPUKErxH66Wdz2pR7UqPt0JJTjC9sDdl9bBc3-es3Pp6g84p0w-L3gYXvFg.pSROemyVbp0GDTDlFYwGcF_THOF3FWSrrPkrxLIC1B4&dib_tag=se&keywords=zapatos+deportivos&qid=1712493348&sprefix=zapatos+deportivos%2Caps%2C137&sr=8-13',
                rating: 3,
                web: 0,
                qty: 126
            },
            {
                title: "Nike Air Force 1 LE",
                description: 'Las AF1 son unas zapatillas clásicas con las que siempre puedes contar: son tan geniales ahora como cuando se lanzaron por primera vez hace más de 40 años. Su diseño duradero y su patrón adherente es perfecto para las aventuras de los más peques en el recreo. Son una pasada recién sacadas de la caja, pero siguen manteniendo el estilo de siempre hasta cuando están cubiertas de rasguños. De hecho, puede que con el uso se vean todavía mejor.',
                price: 94,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e380b4ea-ec2c-4ee6-8acd-10b338a954fe/air-force-1-le-zapatillas-nino-a-5Dhtnr.png',
                webUrl: 'https://www.nike.com/es/t/air-force-1-le-zapatillas-nino-a-5Dhtnr/FV5951-001',
                rating: 5,
                web: 1,
                qty: 246
            },
            {
                title: "Nike Air Max Dn",
                description: 'Presentamos la nueva generación de tecnología Air. Las Air Max Dn cuentan con nuestro sistema de unidades Dynamic Air de tubos de presión dual para ofrecer reactividad en cada pisada. El resultado es un diseño futurista lo suficientemente cómodo para llevarlo de día o de noche. Adelante, Feel the Unreal.',
                price: 168,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eb0ab02c-ba01-4953-9e45-8c18b2f03659/air-max-dn-zapatillas-dCTQrV.png',
                webUrl: 'https://www.nike.com/es/t/air-max-dn-zapatillas-dCTQrV/FJ3145-100',
                rating: 5,
                web: 1,
                qty: 142
            },
            {
                title: "Nike Go FlyEase",
                description: 'Olvídate de los cordones y sal a la calle. Estas zapatillas cuentan con la revolucionaria tecnología FlyEase de Nike para que puedas ponértelas y quitártelas fácilmente. Con un talón que se abre para que puedas calzarte y descalzarte sin manos, son perfectas para personas con movilidad reducida o que quieran ponerse rápidamente en marcha.',
                price: 129,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3251a6d3-13bd-4fc1-8874-272b554f44a1/go-flyease-zapatillas-faciles-de-poner-y-quitar-nfbRvV.png',
                webUrl: 'https://www.nike.com/es/t/go-flyease-zapatillas-faciles-de-poner-y-quitar-nfbRvV/DR5540-102',
                rating: 5,
                web: 1,
                qty: 326
            },
            {
                title: "Zapatilla Samba OG",
                description: 'A este producto no se le aplican descuentos ni ofertas promocionales.',
                price: 120,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Zapatilla_Samba_OG_Blanco_B75806_01_standard.jpg',
                webUrl: 'https://www.adidas.es/zapatilla-samba-og/B75806.html',
                rating: 5,
                web: 2,
                qty: 141
            },
            {
                title: "Zapatilla Galaxy 6",
                description: 'Este producto está incluido en las ofertas Mid Season, donde podrás ahorrar hasta un 40% en tus favoritos. Esta oferta no se puede combinar con otras promociones.',
                price: 36,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/63c77c04dc6448548ccbae880189e107_9366/Zapatilla_Galaxy_6_Negro_GW3848_01_standard.jpg',
                webUrl: 'https://www.adidas.es/zapatilla-galaxy-6/GW3848.html',
                rating: 5,
                web: 2,
                qty: 369
            },
            {
                title: "Zapatilla Retropy F2 (Adolescentes)",
                description: 'Este producto está incluido en las ofertas Mid Season, donde podrás ahorrar hasta un 40% en tus favoritos. Esta oferta no se puede combinar con otras promociones.',
                price: 63,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a1c8190636b24eefaec7130b3d4898db_9366/Zapatilla_Retropy_F2_Adolescentes_Verde_IG5127_01_standard.jpg',
                webUrl: 'https://www.adidas.es/zapatilla-retropy-f2-adolescentes/IG5127.html',
                rating: 4,
                web: 2,
                qty: 135
            }
        ]
    },
    {
        name: "Camisetas",
        products: [
            {
                title: "Nike M Nk Dry Park Vii Jsy Ss - Camiseta De Manga Corta Hombre ",
                description: 'TODOS LOS DÍAS. Cada equipo La camiseta Nike Team Club 19 es un clásico de todos los días para cada miembro del equipo. El ajuste estándar y la tela de mezcla suave te permiten enfocarte en tu próxima victoria. BENEFICIOS DEL PRODUCTO: La mezcla de algodón y poliéster tiene un tacto suave. Las costuras de los hombros están selladas para una sensación de suavidad. El ajuste estándar sigue la forma de tu cuerpo. Las mangas ajustadas y el cuello acanalado brindan un aspecto clásico. El diseño de la marca Swoosh está bordado en el pecho derecho.',
                price: 17,
                imageUrl: 'https://m.media-amazon.com/images/I/51cOzA1S8TL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/NIKE-Camiseta-Manga-Corta-Hombre/dp/B07W5Y15KW/ref=sr_1_11?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2P0ZAJZ7H4KUH&dib=eyJ2IjoiMSJ9.k6YbZwZDxLsXK03u1u6wvwOwXScP4dPNYS3NS2noi6AUmEmfD2JO4SScPtDVi-D00azxxvmtwHHN0k_pecr1W-3vHxHMFVODJFn3vv7dhymqmUyhP7w48XCoQe0n9yDYJVaJ9Dt5BkFL5nfqApv_uEhQPCislMYc2eZuY-rdhA2JHBO2ytve7jmSPVwk1l0GlJ7pl7e6Bno5aWO6F9viTiRI_IiATBhu00EEn9yC68Ueb6X_zTEa9ImWROd2B8tCgP4DC_DyPrfBQi7_-o_inPmSVK-Zrb-iD3QQHqQVWGs.KecOTMiDYwPiPShydRSUJfsLjoAUN4yT_cUy3CZxhuA&dib_tag=se&keywords=camisetas%2Bdeportivas&qid=1712494051&sprefix=camisetas%2Bdeportivas%2Caps%2C121&sr=8-11&th=1',
                rating: 5,
                web: 0,
                qty: 61
            },
            {
                title: "PUMA ESS Logo tee Camiseta de Deporte Hombre ",
                description: 'Ess Logo Tee.',
                price: 20,
                imageUrl: 'https://m.media-amazon.com/images/I/61Yqhpg-YSL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/PUMA-Logo-Camiseta-Hombre-Black/dp/B089Z5GVVL/ref=sr_1_12?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2P0ZAJZ7H4KUH&dib=eyJ2IjoiMSJ9.k6YbZwZDxLsXK03u1u6wvwOwXScP4dPNYS3NS2noi6AUmEmfD2JO4SScPtDVi-D00azxxvmtwHHN0k_pecr1W-3vHxHMFVODJFn3vv7dhymqmUyhP7w48XCoQe0n9yDYJVaJ9Dt5BkFL5nfqApv_uEhQPCislMYc2eZuY-rdhA2JHBO2ytve7jmSPVwk1l0GlJ7pl7e6Bno5aWO6F9viTiRI_IiATBhu00EEn9yC68Ueb6X_zTEa9ImWROd2B8tCgP4DC_DyPrfBQi7_-o_inPmSVK-Zrb-iD3QQHqQVWGs.KecOTMiDYwPiPShydRSUJfsLjoAUN4yT_cUy3CZxhuA&dib_tag=se&keywords=camisetas+deportivas&qid=1712494051&sprefix=camisetas+deportivas%2Caps%2C121&sr=8-12',
                rating: 5,
                web: 0,
                qty: 105
            },
            {
                title: "Under Armour UA GL Foundation Short Sleeve Tee, camiseta Hombre ",
                description: 'Práctica – La camiseta para gimnasio es cómoda, está hecha de un tejido suave y se seca muy rápidamente, así que es ideal para entrenar o correr ',
                price: 21,
                imageUrl: 'https://m.media-amazon.com/images/I/612gtxmjwdL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/Under-Armour-Foundation-Camisa-Hombre/dp/B07DY72P78/ref=sr_1_13?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2P0ZAJZ7H4KUH&dib=eyJ2IjoiMSJ9.k6YbZwZDxLsXK03u1u6wvwOwXScP4dPNYS3NS2noi6AUmEmfD2JO4SScPtDVi-D00azxxvmtwHHN0k_pecr1W-3vHxHMFVODJFn3vv7dhymqmUyhP7w48XCoQe0n9yDYJVaJ9Dt5BkFL5nfqApv_uEhQPCislMYc2eZuY-rdhA2JHBO2ytve7jmSPVwk1l0GlJ7pl7e6Bno5aWO6F9viTiRI_IiATBhu00EEn9yC68Ueb6X_zTEa9ImWROd2B8tCgP4DC_DyPrfBQi7_-o_inPmSVK-Zrb-iD3QQHqQVWGs.KecOTMiDYwPiPShydRSUJfsLjoAUN4yT_cUy3CZxhuA&dib_tag=se&keywords=camisetas+deportivas&qid=1712494051&sprefix=camisetas+deportivas%2Caps%2C121&sr=8-13',
                rating: 4,
                web: 0,
                qty: 137
            },
            {
                title: "CIMIC 3 o 5 Piezas Camiseta Deporte Hombre, Camisetas Manga Corta Hombre, Secado Rápido Respirable para Running Gimnasio ",
                description: 'Confeccionada con un exclusivo tejido elástico en 4 direcciones, esta camiseta deporte hombre se puede lavar a máquina. Ligero, flexible, absorbe el sudor y se seca rápidamente, puede prevenir eficazmente que los olores extraños permanezcan en la tela, que mantendrá su forma después de repetidos lavados.',
                price: 39,
                imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c2643901-9e8c-41b5-b17d-36802f3102e9/dunk-low-retro-zapatillas-p6gmkm.png',
                webUrl: 'https://www.amazon.es/CIMIC-Camisetas-Deportiva-Transpirable-510-Black/dp/B09VK5K8RR/ref=sr_1_14?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2P0ZAJZ7H4KUH&dib=eyJ2IjoiMSJ9.k6YbZwZDxLsXK03u1u6wvwOwXScP4dPNYS3NS2noi6AUmEmfD2JO4SScPtDVi-D00azxxvmtwHHN0k_pecr1W-3vHxHMFVODJFn3vv7dhymqmUyhP7w48XCoQe0n9yDYJVaJ9Dt5BkFL5nfqApv_uEhQPCislMYc2eZuY-rdhA2JHBO2ytve7jmSPVwk1l0GlJ7pl7e6Bno5aWO6F9viTiRI_IiATBhu00EEn9yC68Ueb6X_zTEa9ImWROd2B8tCgP4DC_DyPrfBQi7_-o_inPmSVK-Zrb-iD3QQHqQVWGs.KecOTMiDYwPiPShydRSUJfsLjoAUN4yT_cUy3CZxhuA&dib_tag=se&keywords=camisetas+deportivas&qid=1712494051&sprefix=camisetas+deportivas%2Caps%2C121&sr=8-14',
                rating: 3,
                web: 0,
                qty: 66
            },
            {
                title: "PUMA Performance Cat tee Camiseta para Hombre ",
                description: 'El diseño minimalista se une con el máximo rendimiento en esta camiseta sencilla, pero muy funcional. Incluye la tecnología dryCELL repelente de la humedad, líneas de corte ergonómicas, para una mayor libertad de movimiento, costuras planas, para reducir la fricción, y un material ultraligero.',
                price: 11,
                imageUrl: 'https://m.media-amazon.com/images/I/511Tx181fEL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/PUMA-Performance-Camiseta-Hombre-Black/dp/B089Z7P6BN/ref=sr_1_15?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2P0ZAJZ7H4KUH&dib=eyJ2IjoiMSJ9.k6YbZwZDxLsXK03u1u6wvwOwXScP4dPNYS3NS2noi6AUmEmfD2JO4SScPtDVi-D00azxxvmtwHHN0k_pecr1W-3vHxHMFVODJFn3vv7dhymqmUyhP7w48XCoQe0n9yDYJVaJ9Dt5BkFL5nfqApv_uEhQPCislMYc2eZuY-rdhA2JHBO2ytve7jmSPVwk1l0GlJ7pl7e6Bno5aWO6F9viTiRI_IiATBhu00EEn9yC68Ueb6X_zTEa9ImWROd2B8tCgP4DC_DyPrfBQi7_-o_inPmSVK-Zrb-iD3QQHqQVWGs.KecOTMiDYwPiPShydRSUJfsLjoAUN4yT_cUy3CZxhuA&dib_tag=se&keywords=camisetas+deportivas&qid=1712494051&sprefix=camisetas+deportivas%2Caps%2C121&sr=8-15',
                rating: 4,
                web: 0,
                qty: 86
            },
            {
                title: "Nike Sportswear",
                description: 'El tejido de algodón suave y ligero se combina con un ajuste holgado para aportar una comodidad clásica y un estilo urbano a esta camiseta para el día a día.',
                price: 30,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/32eefe8d-b60b-41ca-a7ce-f91e1c28f141/sportswear-camiseta-con-estampado-FnmDQS.png',
                webUrl: 'https://www.nike.com/es/t/sportswear-camiseta-con-estampado-FnmDQS/HF0557-010',
                rating: 4,
                web: 1,
                qty: 65
            },
            {
                title: "Primera equipación Stadium Inter de Milán 2023/24",
                description: 'Las rayas negras y azules del Inter de Milán se renuevan en la camiseta de la primera equipación 2023/24. Las icónicas rayas cuentan con un patrón de mosaicos digitales que rinden homenaje al ambiente clásico y a la arquitectura moderna de esta antigua ciudad. El estampado del interior rinde homenaje a la conexión entre el Inter de Milán y su ciudad natal. La colección Stadium combina detalles de diseño tipo réplica con una tecnología que capilariza el sudor para ofrecer un look pensado para jugar e inspirado en tu equipo favorito.',
                price: 95,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e20130da-ca1b-44e6-8c6c-1c67f865ea09/primera-equipacion-stadium-inter-de-milan-2023-24-camiseta-de-futbol-dri-fit-Thnf3z.png',
                webUrl: 'https://www.nike.com/es/t/primera-equipacion-stadium-inter-de-milan-2023-24-camiseta-de-futbol-dri-fit-Thnf3z/DX2689-409',
                rating: 5,
                web: 1,
                qty: 654
            },
            {
                title: "Camiseta primera equipación Argentina 24",
                description: 'A este producto no se le aplican descuentos ni ofertas promocionales.',
                price: 95,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/05596cc5f7724da8946f5362652319d0_9366/Camiseta_primera_equipacion_Argentina_24_Blanco_IP8409_21_model.jpg',
                webUrl: 'https://www.adidas.es/camiseta-primera-equipacion-argentina-24/IP8409.html',
                rating: 5,
                web: 2,
                qty: 547
            },
            {
                title: "Camiseta primera equipación España 24 (Adolescentes)",
                description: 'A este producto no se le aplican descuentos ni ofertas promocionales.',
                price: 75,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/eb28d02c163841b0b5de4d2fbbd7c296_9366/Camiseta_primera_equipacion_Espana_24_Adolescentes_Rojo_IP9351_01_laydown.jpg',
                webUrl: 'https://www.adidas.es/camiseta-primera-equipacion-espana-24-adolescentes/IP9351.html',
                rating: 5,
                web: 2,
                qty: 478
            }
        ]
    },
    {
        name: "Pantalones",
        products: [
            {
                title: "Pantalones de Sauna Adelgazantes",
                description: 'Pantalones de yoga: los pantalones de neopreno están hechos de tela compuesta de 3 capas con una compresión apretada pero cómoda que brinda un buen soporte para la parte inferior del abdomen. El tejido único calienta tu cuerpo, atrapa el calor y te hace sudar mientras corres y haces ejercicio.',
                price: 19,
                imageUrl: 'https://m.media-amazon.com/images/I/61YpxnWfQDL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/Litthing-Pantalones-Adelgazar-Deportivos-Sudoraci%C3%B3n/dp/B089KJP4T6/ref=sr_1_3_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1XNIG2POW1RWI&dib=eyJ2IjoiMSJ9.Yb5MBQl-Bj3nWALwTvjabkAiq3Wb3U1eiJZfrDE3owvBRM4sEWjeO7teDzuzSYyrEYg0E4WyHaZuFY4tpX10znfrxmzaWx00cQZmFDcleds-qJhaoItgj_evXpkQVHRznFLaMXrvRYrSQG_HgIE2DP4F7rc3gG3OzlIjtfv2M93cnD2b-kgkHaKBCaIEbGx43faBGCEKGarioGdirI2BoopXYai7OEOvo2DhaK2ZPJzhTsHsfA2Geegi6uoqrhKgeTdQqzjiE5PU2exlyCamX0GiPA3JGLpma5Zo3WFz2fs.0P5fenBAYN-z_HqsF_eTjviA6V9aTsbek6vTzZx0j0w&dib_tag=se&keywords=pantalones%2By%2Bmallas&qid=1713617234&s=sports&sprefix=%2Csporting%2C632&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1',
                rating: 4,
                web: 0,
                qty: 123
            },
            {
                title: "Adidas W 3s Leg - Leggings Mujer",
                description: 'Corte entallado. Tela impermeable. Tejido transpirable',
                price: 20,
                imageUrl: 'https://m.media-amazon.com/images/I/51NtaEq+ejL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/adidas-GL0723-Leggings-Womens-Black/dp/B08LD1V45X/ref=sr_1_10?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1XNIG2POW1RWI&dib=eyJ2IjoiMSJ9.Yb5MBQl-Bj3nWALwTvjabkAiq3Wb3U1eiJZfrDE3owvBRM4sEWjeO7teDzuzSYyrEYg0E4WyHaZuFY4tpX10znfrxmzaWx00cQZmFDcleds-qJhaoItgj_evXpkQVHRznFLaMXrvRYrSQG_HgIE2DP4F7rc3gG3OzlIjtfv2M93cnD2b-kgkHaKBCaIEbGx43faBGCEKGarioGdirI2BoopXYai7OEOvo2DhaK2ZPJzhTsHsfA2Geegi6uoqrhKgeTdQqzjiE5PU2exlyCamX0GiPA3JGLpma5Zo3WFz2fs.0P5fenBAYN-z_HqsF_eTjviA6V9aTsbek6vTzZx0j0w&dib_tag=se&keywords=pantalones+y+mallas&qid=1713617234&s=sports&sprefix=%2Csporting%2C632&sr=1-10',
                rating: 5,
                web: 0,
                qty: 109
            },
            {
                title: "Bañadores Hombres",
                description: 'Material:85% poliéster, 15% spandex. Repelente al agua, secado rápido, de alta elasticidad, apropiado a todas las actividades acuáticas y deportes de playa.',
                price: 17,
                imageUrl: 'https://m.media-amazon.com/images/I/610gBjbMDhL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/Arcweg-Ba%C3%B1adores-Pantalones-Ajustable-Cremallera/dp/B07Z1ZDQ1R/ref=sr_1_14_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1XNIG2POW1RWI&dib=eyJ2IjoiMSJ9.Yb5MBQl-Bj3nWALwTvjabkAiq3Wb3U1eiJZfrDE3owvBRM4sEWjeO7teDzuzSYyrEYg0E4WyHaZuFY4tpX10znfrxmzaWx00cQZmFDcleds-qJhaoItgj_evXpkQVHRznFLaMXrvRYrSQG_HgIE2DP4F7rc3gG3OzlIjtfv2M93cnD2b-kgkHaKBCaIEbGx43faBGCEKGarioGdirI2BoopXYai7OEOvo2DhaK2ZPJzhTsHsfA2Geegi6uoqrhKgeTdQqzjiE5PU2exlyCamX0GiPA3JGLpma5Zo3WFz2fs.0P5fenBAYN-z_HqsF_eTjviA6V9aTsbek6vTzZx0j0w&dib_tag=se&keywords=pantalones+y+mallas&qid=1713617234&s=sports&sprefix=%2Csporting%2C632&sr=1-14-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1',
                rating: 4,
                web: 0,
                qty: 58
            },
            {
                title: "Leggins Mujer Pantalon Deporte Mallas ",
                description: 'Cintura Alta y Vientre Control: DDOBB leggings mujer son opaca,sinvisibles, no transparentes, bien cosidas y el diseño de cintura alta resalta la cintura sexy de las mujeres. Nuestras mallas reductoras mujer tienen una suave banda de compresión de cintura alta que puede ayudar a aplanar la barriga y dar forma a la cintura para una figura de reloj de arena.',
                price: 17,
                imageUrl: 'https://m.media-amazon.com/images/I/71FGAr5zecL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/DDOBB-Leggings-Estampado-Colorido-Pantalones/dp/B0BC2447RW/ref=sr_1_22?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1XNIG2POW1RWI&dib=eyJ2IjoiMSJ9.Yb5MBQl-Bj3nWALwTvjabkAiq3Wb3U1eiJZfrDE3owvBRM4sEWjeO7teDzuzSYyrEYg0E4WyHaZuFY4tpX10znfrxmzaWx00cQZmFDcleds-qJhaoItgj_evXpkQVHRznFLaMXrvRYrSQG_HgIE2DP4F7rc3gG3OzlIjtfv2M93cnD2b-kgkHaKBCaIEbGx43faBGCEKGarioGdirI2BoopXYai7OEOvo2DhaK2ZPJzhTsHsfA2Geegi6uoqrhKgeTdQqzjiE5PU2exlyCamX0GiPA3JGLpma5Zo3WFz2fs.0P5fenBAYN-z_HqsF_eTjviA6V9aTsbek6vTzZx0j0w&dib_tag=se&keywords=pantalones+y+mallas&qid=1713617234&s=sports&sprefix=%2Csporting%2C632&sr=1-22',
                rating: 5,
                web: 0,
                qty: 99
            },
            {
                title: "Bañador Hombre Pantalones Cortos de Natación Secado Rápido",
                description: '2 en 1 Baños Pantalones Cortos desde 92% poliéster + 8% elastano para ubicación externa, 85% poliéster + 15% elastano para ubicación interna, que es más duradera y más cómoda y mantiene realmente fresco cuando se usa . Nuestros hombres de troncos de natación con costuras dobles reforzadas aseguran el mejor rendimiento y durabilidad.',
                price: 17,
                imageUrl: 'https://m.media-amazon.com/images/I/61-eGtG0mBL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/Pantalones-Bolsillos-Ajustable-Vacaciones-Gradiente/dp/B0BR9V7KXY/ref=sr_1_26_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1XNIG2POW1RWI&dib=eyJ2IjoiMSJ9.Yb5MBQl-Bj3nWALwTvjabkAiq3Wb3U1eiJZfrDE3owvBRM4sEWjeO7teDzuzSYyrEYg0E4WyHaZuFY4tpX10znfrxmzaWx00cQZmFDcleds-qJhaoItgj_evXpkQVHRznFLaMXrvRYrSQG_HgIE2DP4F7rc3gG3OzlIjtfv2M93cnD2b-kgkHaKBCaIEbGx43faBGCEKGarioGdirI2BoopXYai7OEOvo2DhaK2ZPJzhTsHsfA2Geegi6uoqrhKgeTdQqzjiE5PU2exlyCamX0GiPA3JGLpma5Zo3WFz2fs.0P5fenBAYN-z_HqsF_eTjviA6V9aTsbek6vTzZx0j0w&dib_tag=se&keywords=pantalones+y+mallas&qid=1713617234&s=sports&sprefix=%2Csporting%2C632&sr=1-26-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1',
                rating: 4,
                web: 0,
                qty: 86
            },
            {
                title: "Nike Universa",
                description: 'Leggings de longitud completa, talle alto y sujeción media con bolsillos - Mujer',
                price: 99,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/49a9eaa0-a74f-4251-8b6a-51fe1e8a5013/universa-leggings-de-longitud-completa-talle-alto-y-sujecion-media-con-bolsillos-dbz7fN.png',
                webUrl: 'https://www.nike.com/es/t/universa-leggings-de-longitud-completa-talle-alto-y-sujecion-media-con-bolsillos-dbz7fN/DQ5996-208',
                rating: 4,
                web: 1,
                qty: 65
            },
            {
                title: "Nike ACG UV Hike",
                description: 'Pantalón de talle medio - Mujer',
                price: 125,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e368bbd8-0c9f-4e4e-9014-5588412add30/acg-uv-hike-pantalon-de-talle-medio-T98Dbp.png',
                webUrl: 'https://www.nike.com/es/t/acg-uv-hike-pantalon-de-talle-medio-T98Dbp/FQ3058-020',
                rating: 5,
                web: 1,
                qty: 254
            },
            {
                title: "Nike Go",
                description: 'Leggings de longitud completa, talle alto y sujeción firme con bolsillos - Mujer',
                price: 99,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c9c38b2-f137-4ecc-aa1f-acc51af187eb/go-leggings-de-longitud-completa-talle-alto-y-sujecion-firme-con-bolsillos-pjFt88.png',
                webUrl: 'https://www.nike.com/es/t/go-leggings-de-longitud-completa-talle-alto-y-sujecion-firme-con-bolsillos-pjFt88/DQ5668-237',
                rating: 5,
                web: 1,
                qty: 47
            },
            {
                title: "Nike Dri-FIT Fast",
                description: 'Pantalón de running de calentamiento y talle medio con diseño 7/8 - Mujer',
                price: 95,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af524639-6b19-449b-8360-a5efd62bee2b/dri-fit-fast-pantalon-de-running-de-calentamiento-y-talle-medio-con-diseno-7-8-Stl9Zn.png',
                webUrl: 'https://www.nike.com/es/t/dri-fit-fast-pantalon-de-running-de-calentamiento-y-talle-medio-con-diseno-7-8-Stl9Zn/FB7730-010',
                rating: 5,
                web: 1,
                qty: 78
            },
            {
                title: "Pantalón corto Marathon 20 Running",
                description: 'Este producto se ha fabricado con un 100% de material reciclado. Su objetivo es plantear otra solución más que ayude a eliminar los residuos plásticos.',
                price: 35,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/158456882e4141059998af1d009f6689_9366/Pantalon_corto_Marathon_20_Running_Tallas_grandes_Negro_HS2048_21_model.jpg',
                webUrl: 'https://www.adidas.es/pantalon-corto-marathon-20-running-tallas-grandes/HS2048.html',
                rating: 5,
                web: 2,
                qty: 78
            },
            {
                title: "Pantalón corto Own The Run",
                description: 'Este pantalón corto de running adidas te ofrece la comodidad y confianza que necesitas en tus entrenamientos de intervalos, tus tiradas de ritmo constante o tus carreras de larga distancia.',
                price: 40,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4267024cc0464d8f9d301aa6de270c93_9366/Pantalon_corto_Own_The_Run_Negro_IY0704_21_model.jpg',
                webUrl: 'https://www.adidas.es/pantalon-corto-own-the-run/IY0704.html',
                rating: 5,
                web: 2,
                qty: 76
            },
            {
                title: "Pantalón corto Made to Be Remade Running",
                description: 'Luce un estilo deportivo femenino cada vez que salgas a correr con este pantalón corto de running adidas. Los volantes en las pernera aportan un toque original, mientras que la tecnología transpirable AEROREADY mantiene la piel seca en todo momento.',
                price: 45,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/efa4f520670847c492ceaefc00f26202_9366/Pantalon_corto_Made_to_Be_Remade_Running_Verde_HR5729_21_model.jpg',
                webUrl: 'https://www.adidas.es/pantalon-corto-made-to-be-remade-running/HR5729.html',
                rating: 4,
                web: 2,
                qty: 76
            },
            {
                title: "Pantalón corto Ultimateadidas 2-in-1",
                description: 'Lleva tu carrera al siguiente nivel con este pantalón corto adidas. Los detalles reflectantes te hacen más visible en condiciones de poca luz para que puedas correr al amanecer o a última hora de la tarde.',
                price: 60,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/273b1136e4f74429abcd6f222e5832de_9366/Pantalon_corto_Ultimateadidas_2-in-1_Negro_IL7186_HM1.jpg',
                webUrl: 'https://www.adidas.es/pantalon-corto-ultimateadidas-2-in-1/IL7186.html',
                rating: 4,
                web: 2,
                qty: 98
            }
        ]
    }, {
        name: "Calzado",
        products: [
            {
                title: "Skechers Skech-Air Dynamight Venturik, Zapatillas de Deporte Hombre ",
                description: 'Añade un cojín de aire a tu rutina de entrenamiento con el zapato Skechers Skech-Air® Dynamight. Estos tenis con cordones cuentan con una parte superior de malla y sintética con plantilla acolchada de espuma viscoelástica y entresuela acolchada de aire Skech-Air®.',
                price: 47,
                imageUrl: 'https://m.media-amazon.com/images/I/51ngaXQv1+L._AC_SY695_.jpg',
                webUrl: 'https://www.amazon.es/Skechers-Skech-Air-Dynamight-Tuned-Zapatillas-Engineered/dp/B08DW74Z62/ref=sr_1_11?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30VL30GVW15AX&dib=eyJ2IjoiMSJ9.teCHVKBru8WPwFfC5uY-NoKG0SGBk5cuCxIXDpNh0GdnfQ7soi53H-Ui-kJzrS45ixKgR774UA4U9DqhFexkI0t6BbfMx6sGjiYGoA3ZTHV7D33klEkIDoJjI8BqWCZpyGbD1j1W7aaMgA79yohsHmLNijn2DSy484KGNMUt8Nox9E9Lgsom-1q-KQ6ooGsH30ek7lWqggX_oK750MnWWnhoa7PEN-KDMVA1ytVI-HPk20nzHPUKErxH66Wdz2pR7UqPt0JJTjC9sDdl9bBc3-es3Pp6g84p0w-L3gYXvFg.pSROemyVbp0GDTDlFYwGcF_THOF3FWSrrPkrxLIC1B4&dib_tag=se&keywords=zapatos+deportivos&qid=1712493348&sprefix=zapatos+deportivos%2Caps%2C137&sr=8-11',
                rating: 5,
                web: 0,
                qty: 400
            },
            {
                title: "Hitmars Zapatillas Deportivas Hombre Mujer Zapatillas de Running Ligero Transpirables Zapatos para Correr Fitness Casual Sneakers Negro Azul Gris Rojo EU 36-48",
                description: "ULTRAL LIGHT y TRANSPIRABLE: Con el material liviano que usamos, los elegantes zapatos deportivos se vuelven livianos, lo que es excelente para caminar y correr durante mucho tiempo. Y el diseño de malla transpirable permite que tus pies respiren. Flexible y Suave: la suela es realmente flexible y suave. Definitivamente, te sentirás cómodo todo el día con esta fabulosa zapatilla, incluso de pie todo el día. Simple y Cómodo: las zapatillas se cierran con cordones, cordones anchos de algodón, los cordones flexibles y resistentes a los tirones están diseñados para ser simples y casuales, es más fácil de poner y quitar. Antideslizante y Durabilidad: la suela de goma antideslizante y la entresuela de espuma de densidad le dan a la zapatilla de carretera suficiente agarre y durabilidad, proporciona tracción en pisos resbaladizos. Excelente soporte para los pies y efecto antideslizante, protege durante todo el día de caminata. Ampliamente utilizado: los zapatos deportivos son perfectos para trotar, caminar, bádminton, tenis, fitness y uso diario. Decentemente elegante va bien con la mayoría de los conjuntos.",
                price: 30,
                imageUrl: 'https://m.media-amazon.com/images/I/81s0EveMNwL._AC_SY695_.jpg',
                webUrl: 'https://www.amazon.es/Hitmars-Zapatillas-Deportivas-Transpirables-Sneakers/dp/B0CJFFHHGH/ref=sr_1_12?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30VL30GVW15AX&dib=eyJ2IjoiMSJ9.teCHVKBru8WPwFfC5uY-NoKG0SGBk5cuCxIXDpNh0GdnfQ7soi53H-Ui-kJzrS45ixKgR774UA4U9DqhFexkI0t6BbfMx6sGjiYGoA3ZTHV7D33klEkIDoJjI8BqWCZpyGbD1j1W7aaMgA79yohsHmLNijn2DSy484KGNMUt8Nox9E9Lgsom-1q-KQ6ooGsH30ek7lWqggX_oK750MnWWnhoa7PEN-KDMVA1ytVI-HPk20nzHPUKErxH66Wdz2pR7UqPt0JJTjC9sDdl9bBc3-es3Pp6g84p0w-L3gYXvFg.pSROemyVbp0GDTDlFYwGcF_THOF3FWSrrPkrxLIC1B4&dib_tag=se&keywords=zapatos+deportivos&qid=1712493348&sprefix=zapatos+deportivos%2Caps%2C137&sr=8-12',
                rating: 4,
                web: 0,
                qty: 3500
            },
            {
                title: "PUMA St Runner V3 NL, Trainers & Sneakers Unisex Adulto ",
                description: 'Las zapatillas ST Runner v3 actualizan un modelo familiar con pequeñas modificaciones en el exterior y ajustes en el refuerzo del talón para rendir homenaje a nuestros archivos y hacerte destacar. Su diseño atemporal y legendario nunca pasará de moda, mientras que la plantilla SoftFoam+ garantiza tu comodidad durante todo el día.',
                price: 40,
                imageUrl: 'https://m.media-amazon.com/images/I/51vjdCq8huL._AC_SY695_.jpg',
                webUrl: 'https://www.amazon.es/Unisex-Adults-Runner-Sneakers-Black-Puma/dp/B097C9P15F/ref=sr_1_15?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30VL30GVW15AX&dib=eyJ2IjoiMSJ9.teCHVKBru8WPwFfC5uY-NoKG0SGBk5cuCxIXDpNh0GdnfQ7soi53H-Ui-kJzrS45ixKgR774UA4U9DqhFexkI0t6BbfMx6sGjiYGoA3ZTHV7D33klEkIDoJjI8BqWCZpyGbD1j1W7aaMgA79yohsHmLNijn2DSy484KGNMUt8Nox9E9Lgsom-1q-KQ6ooGsH30ek7lWqggX_oK750MnWWnhoa7PEN-KDMVA1ytVI-HPk20nzHPUKErxH66Wdz2pR7UqPt0JJTjC9sDdl9bBc3-es3Pp6g84p0w-L3gYXvFg.pSROemyVbp0GDTDlFYwGcF_THOF3FWSrrPkrxLIC1B4&dib_tag=se&keywords=zapatos+deportivos&qid=1712493348&sprefix=zapatos+deportivos%2Caps%2C137&sr=8-15',
                rating: 5,
                web: 0,
                qty: 235
            },
            {
                title: "Zapatillas Deportivas Hombre Zapatillas Running Zapatos Deportivos Deporte Correr cojín de Aire Ligero Malla Transpirable Atlético Sneakers EU 39-48 ",
                description: 'Malla Transpirable: Los zapatillas running están fabricados con tejido de punto, lo que no solo asegura su ligereza y moda, sino que también asegura la comodidad del producto, manteniendo tus pies secos en todo momento y sin sentirte pesado después de trabajar cansadamente',
                price: 30,
                imageUrl: 'https://m.media-amazon.com/images/I/71na8t3Q9LL._AC_SY695_.jpg',
                webUrl: 'https://www.amazon.es/Zapatillas-Deportivas-Deportivos-Transpirable-Atl%C3%A9tico/dp/B0CZ38T6QB/ref=sr_1_13?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=30VL30GVW15AX&dib=eyJ2IjoiMSJ9.teCHVKBru8WPwFfC5uY-NoKG0SGBk5cuCxIXDpNh0GdnfQ7soi53H-Ui-kJzrS45ixKgR774UA4U9DqhFexkI0t6BbfMx6sGjiYGoA3ZTHV7D33klEkIDoJjI8BqWCZpyGbD1j1W7aaMgA79yohsHmLNijn2DSy484KGNMUt8Nox9E9Lgsom-1q-KQ6ooGsH30ek7lWqggX_oK750MnWWnhoa7PEN-KDMVA1ytVI-HPk20nzHPUKErxH66Wdz2pR7UqPt0JJTjC9sDdl9bBc3-es3Pp6g84p0w-L3gYXvFg.pSROemyVbp0GDTDlFYwGcF_THOF3FWSrrPkrxLIC1B4&dib_tag=se&keywords=zapatos+deportivos&qid=1712493348&sprefix=zapatos+deportivos%2Caps%2C137&sr=8-13',
                rating: 3,
                web: 0,
                qty: 126
            },
            {
                title: "Nike Air Force 1 LE",
                description: 'Las AF1 son unas zapatillas clásicas con las que siempre puedes contar: son tan geniales ahora como cuando se lanzaron por primera vez hace más de 40 años. Su diseño duradero y su patrón adherente es perfecto para las aventuras de los más peques en el recreo. Son una pasada recién sacadas de la caja, pero siguen manteniendo el estilo de siempre hasta cuando están cubiertas de rasguños. De hecho, puede que con el uso se vean todavía mejor.',
                price: 94,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e380b4ea-ec2c-4ee6-8acd-10b338a954fe/air-force-1-le-zapatillas-nino-a-5Dhtnr.png',
                webUrl: 'https://www.nike.com/es/t/air-force-1-le-zapatillas-nino-a-5Dhtnr/FV5951-001',
                rating: 5,
                web: 1,
                qty: 246
            },
            {
                title: "Nike Air Max Dn",
                description: 'Presentamos la nueva generación de tecnología Air. Las Air Max Dn cuentan con nuestro sistema de unidades Dynamic Air de tubos de presión dual para ofrecer reactividad en cada pisada. El resultado es un diseño futurista lo suficientemente cómodo para llevarlo de día o de noche. Adelante, Feel the Unreal.',
                price: 168,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/eb0ab02c-ba01-4953-9e45-8c18b2f03659/air-max-dn-zapatillas-dCTQrV.png',
                webUrl: 'https://www.nike.com/es/t/air-max-dn-zapatillas-dCTQrV/FJ3145-100',
                rating: 5,
                web: 1,
                qty: 142
            },
            {
                title: "Nike Go FlyEase",
                description: 'Olvídate de los cordones y sal a la calle. Estas zapatillas cuentan con la revolucionaria tecnología FlyEase de Nike para que puedas ponértelas y quitártelas fácilmente. Con un talón que se abre para que puedas calzarte y descalzarte sin manos, son perfectas para personas con movilidad reducida o que quieran ponerse rápidamente en marcha.',
                price: 129,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3251a6d3-13bd-4fc1-8874-272b554f44a1/go-flyease-zapatillas-faciles-de-poner-y-quitar-nfbRvV.png',
                webUrl: 'https://www.nike.com/es/t/go-flyease-zapatillas-faciles-de-poner-y-quitar-nfbRvV/DR5540-102',
                rating: 5,
                web: 1,
                qty: 326
            },
            {
                title: "Zapatilla Samba OG",
                description: 'A este producto no se le aplican descuentos ni ofertas promocionales.',
                price: 120,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/3bbecbdf584e40398446a8bf0117cf62_9366/Zapatilla_Samba_OG_Blanco_B75806_01_standard.jpg',
                webUrl: 'https://www.adidas.es/zapatilla-samba-og/B75806.html',
                rating: 5,
                web: 2,
                qty: 141
            },
            {
                title: "Zapatilla Galaxy 6",
                description: 'Este producto está incluido en las ofertas Mid Season, donde podrás ahorrar hasta un 40% en tus favoritos. Esta oferta no se puede combinar con otras promociones.',
                price: 36,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/63c77c04dc6448548ccbae880189e107_9366/Zapatilla_Galaxy_6_Negro_GW3848_01_standard.jpg',
                webUrl: 'https://www.adidas.es/zapatilla-galaxy-6/GW3848.html',
                rating: 5,
                web: 2,
                qty: 369
            },
            {
                title: "Zapatilla Retropy F2 (Adolescentes)",
                description: 'Este producto está incluido en las ofertas Mid Season, donde podrás ahorrar hasta un 40% en tus favoritos. Esta oferta no se puede combinar con otras promociones.',
                price: 63,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/a1c8190636b24eefaec7130b3d4898db_9366/Zapatilla_Retropy_F2_Adolescentes_Verde_IG5127_01_standard.jpg',
                webUrl: 'https://www.adidas.es/zapatilla-retropy-f2-adolescentes/IG5127.html',
                rating: 4,
                web: 2,
                qty: 135
            }
        ]
    },
    {
        name: "Tops",
        products: [
            {
                title: "Nike M Nk Dry Park Vii Jsy Ss - Camiseta De Manga Corta Hombre ",
                description: 'TODOS LOS DÍAS. Cada equipo La camiseta Nike Team Club 19 es un clásico de todos los días para cada miembro del equipo. El ajuste estándar y la tela de mezcla suave te permiten enfocarte en tu próxima victoria. BENEFICIOS DEL PRODUCTO: La mezcla de algodón y poliéster tiene un tacto suave. Las costuras de los hombros están selladas para una sensación de suavidad. El ajuste estándar sigue la forma de tu cuerpo. Las mangas ajustadas y el cuello acanalado brindan un aspecto clásico. El diseño de la marca Swoosh está bordado en el pecho derecho.',
                price: 17,
                imageUrl: 'https://m.media-amazon.com/images/I/51cOzA1S8TL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/NIKE-Camiseta-Manga-Corta-Hombre/dp/B07W5Y15KW/ref=sr_1_11?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2P0ZAJZ7H4KUH&dib=eyJ2IjoiMSJ9.k6YbZwZDxLsXK03u1u6wvwOwXScP4dPNYS3NS2noi6AUmEmfD2JO4SScPtDVi-D00azxxvmtwHHN0k_pecr1W-3vHxHMFVODJFn3vv7dhymqmUyhP7w48XCoQe0n9yDYJVaJ9Dt5BkFL5nfqApv_uEhQPCislMYc2eZuY-rdhA2JHBO2ytve7jmSPVwk1l0GlJ7pl7e6Bno5aWO6F9viTiRI_IiATBhu00EEn9yC68Ueb6X_zTEa9ImWROd2B8tCgP4DC_DyPrfBQi7_-o_inPmSVK-Zrb-iD3QQHqQVWGs.KecOTMiDYwPiPShydRSUJfsLjoAUN4yT_cUy3CZxhuA&dib_tag=se&keywords=camisetas%2Bdeportivas&qid=1712494051&sprefix=camisetas%2Bdeportivas%2Caps%2C121&sr=8-11&th=1',
                rating: 5,
                web: 0,
                qty: 61
            },
            {
                title: "PUMA ESS Logo tee Camiseta de Deporte Hombre ",
                description: 'Ess Logo Tee.',
                price: 20,
                imageUrl: 'https://m.media-amazon.com/images/I/61Yqhpg-YSL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/PUMA-Logo-Camiseta-Hombre-Black/dp/B089Z5GVVL/ref=sr_1_12?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2P0ZAJZ7H4KUH&dib=eyJ2IjoiMSJ9.k6YbZwZDxLsXK03u1u6wvwOwXScP4dPNYS3NS2noi6AUmEmfD2JO4SScPtDVi-D00azxxvmtwHHN0k_pecr1W-3vHxHMFVODJFn3vv7dhymqmUyhP7w48XCoQe0n9yDYJVaJ9Dt5BkFL5nfqApv_uEhQPCislMYc2eZuY-rdhA2JHBO2ytve7jmSPVwk1l0GlJ7pl7e6Bno5aWO6F9viTiRI_IiATBhu00EEn9yC68Ueb6X_zTEa9ImWROd2B8tCgP4DC_DyPrfBQi7_-o_inPmSVK-Zrb-iD3QQHqQVWGs.KecOTMiDYwPiPShydRSUJfsLjoAUN4yT_cUy3CZxhuA&dib_tag=se&keywords=camisetas+deportivas&qid=1712494051&sprefix=camisetas+deportivas%2Caps%2C121&sr=8-12',
                rating: 5,
                web: 0,
                qty: 105
            },
            {
                title: "Under Armour UA GL Foundation Short Sleeve Tee, camiseta Hombre ",
                description: 'Práctica – La camiseta para gimnasio es cómoda, está hecha de un tejido suave y se seca muy rápidamente, así que es ideal para entrenar o correr ',
                price: 21,
                imageUrl: 'https://m.media-amazon.com/images/I/612gtxmjwdL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/Under-Armour-Foundation-Camisa-Hombre/dp/B07DY72P78/ref=sr_1_13?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2P0ZAJZ7H4KUH&dib=eyJ2IjoiMSJ9.k6YbZwZDxLsXK03u1u6wvwOwXScP4dPNYS3NS2noi6AUmEmfD2JO4SScPtDVi-D00azxxvmtwHHN0k_pecr1W-3vHxHMFVODJFn3vv7dhymqmUyhP7w48XCoQe0n9yDYJVaJ9Dt5BkFL5nfqApv_uEhQPCislMYc2eZuY-rdhA2JHBO2ytve7jmSPVwk1l0GlJ7pl7e6Bno5aWO6F9viTiRI_IiATBhu00EEn9yC68Ueb6X_zTEa9ImWROd2B8tCgP4DC_DyPrfBQi7_-o_inPmSVK-Zrb-iD3QQHqQVWGs.KecOTMiDYwPiPShydRSUJfsLjoAUN4yT_cUy3CZxhuA&dib_tag=se&keywords=camisetas+deportivas&qid=1712494051&sprefix=camisetas+deportivas%2Caps%2C121&sr=8-13',
                rating: 4,
                web: 0,
                qty: 137
            },
            {
                title: "CIMIC 3 o 5 Piezas Camiseta Deporte Hombre, Camisetas Manga Corta Hombre, Secado Rápido Respirable para Running Gimnasio ",
                description: 'Confeccionada con un exclusivo tejido elástico en 4 direcciones, esta camiseta deporte hombre se puede lavar a máquina. Ligero, flexible, absorbe el sudor y se seca rápidamente, puede prevenir eficazmente que los olores extraños permanezcan en la tela, que mantendrá su forma después de repetidos lavados.',
                price: 39,
                imageUrl: 'https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c2643901-9e8c-41b5-b17d-36802f3102e9/dunk-low-retro-zapatillas-p6gmkm.png',
                webUrl: 'https://www.amazon.es/CIMIC-Camisetas-Deportiva-Transpirable-510-Black/dp/B09VK5K8RR/ref=sr_1_14?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2P0ZAJZ7H4KUH&dib=eyJ2IjoiMSJ9.k6YbZwZDxLsXK03u1u6wvwOwXScP4dPNYS3NS2noi6AUmEmfD2JO4SScPtDVi-D00azxxvmtwHHN0k_pecr1W-3vHxHMFVODJFn3vv7dhymqmUyhP7w48XCoQe0n9yDYJVaJ9Dt5BkFL5nfqApv_uEhQPCislMYc2eZuY-rdhA2JHBO2ytve7jmSPVwk1l0GlJ7pl7e6Bno5aWO6F9viTiRI_IiATBhu00EEn9yC68Ueb6X_zTEa9ImWROd2B8tCgP4DC_DyPrfBQi7_-o_inPmSVK-Zrb-iD3QQHqQVWGs.KecOTMiDYwPiPShydRSUJfsLjoAUN4yT_cUy3CZxhuA&dib_tag=se&keywords=camisetas+deportivas&qid=1712494051&sprefix=camisetas+deportivas%2Caps%2C121&sr=8-14',
                rating: 3,
                web: 0,
                qty: 66
            },
            {
                title: "PUMA Performance Cat tee Camiseta para Hombre ",
                description: 'El diseño minimalista se une con el máximo rendimiento en esta camiseta sencilla, pero muy funcional. Incluye la tecnología dryCELL repelente de la humedad, líneas de corte ergonómicas, para una mayor libertad de movimiento, costuras planas, para reducir la fricción, y un material ultraligero.',
                price: 11,
                imageUrl: 'https://m.media-amazon.com/images/I/511Tx181fEL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/PUMA-Performance-Camiseta-Hombre-Black/dp/B089Z7P6BN/ref=sr_1_15?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=2P0ZAJZ7H4KUH&dib=eyJ2IjoiMSJ9.k6YbZwZDxLsXK03u1u6wvwOwXScP4dPNYS3NS2noi6AUmEmfD2JO4SScPtDVi-D00azxxvmtwHHN0k_pecr1W-3vHxHMFVODJFn3vv7dhymqmUyhP7w48XCoQe0n9yDYJVaJ9Dt5BkFL5nfqApv_uEhQPCislMYc2eZuY-rdhA2JHBO2ytve7jmSPVwk1l0GlJ7pl7e6Bno5aWO6F9viTiRI_IiATBhu00EEn9yC68Ueb6X_zTEa9ImWROd2B8tCgP4DC_DyPrfBQi7_-o_inPmSVK-Zrb-iD3QQHqQVWGs.KecOTMiDYwPiPShydRSUJfsLjoAUN4yT_cUy3CZxhuA&dib_tag=se&keywords=camisetas+deportivas&qid=1712494051&sprefix=camisetas+deportivas%2Caps%2C121&sr=8-15',
                rating: 4,
                web: 0,
                qty: 86
            },
            {
                title: "Nike Sportswear",
                description: 'El tejido de algodón suave y ligero se combina con un ajuste holgado para aportar una comodidad clásica y un estilo urbano a esta camiseta para el día a día.',
                price: 30,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/32eefe8d-b60b-41ca-a7ce-f91e1c28f141/sportswear-camiseta-con-estampado-FnmDQS.png',
                webUrl: 'https://www.nike.com/es/t/sportswear-camiseta-con-estampado-FnmDQS/HF0557-010',
                rating: 4,
                web: 1,
                qty: 65
            },
            {
                title: "Primera equipación Stadium Inter de Milán 2023/24",
                description: 'Las rayas negras y azules del Inter de Milán se renuevan en la camiseta de la primera equipación 2023/24. Las icónicas rayas cuentan con un patrón de mosaicos digitales que rinden homenaje al ambiente clásico y a la arquitectura moderna de esta antigua ciudad. El estampado del interior rinde homenaje a la conexión entre el Inter de Milán y su ciudad natal. La colección Stadium combina detalles de diseño tipo réplica con una tecnología que capilariza el sudor para ofrecer un look pensado para jugar e inspirado en tu equipo favorito.',
                price: 95,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e20130da-ca1b-44e6-8c6c-1c67f865ea09/primera-equipacion-stadium-inter-de-milan-2023-24-camiseta-de-futbol-dri-fit-Thnf3z.png',
                webUrl: 'https://www.nike.com/es/t/primera-equipacion-stadium-inter-de-milan-2023-24-camiseta-de-futbol-dri-fit-Thnf3z/DX2689-409',
                rating: 5,
                web: 1,
                qty: 654
            },
            {
                title: "Camiseta primera equipación Argentina 24",
                description: 'A este producto no se le aplican descuentos ni ofertas promocionales.',
                price: 95,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/05596cc5f7724da8946f5362652319d0_9366/Camiseta_primera_equipacion_Argentina_24_Blanco_IP8409_21_model.jpg',
                webUrl: 'https://www.adidas.es/camiseta-primera-equipacion-argentina-24/IP8409.html',
                rating: 5,
                web: 2,
                qty: 547
            },
            {
                title: "Camiseta primera equipación España 24 (Adolescentes)",
                description: 'A este producto no se le aplican descuentos ni ofertas promocionales.',
                price: 75,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/eb28d02c163841b0b5de4d2fbbd7c296_9366/Camiseta_primera_equipacion_Espana_24_Adolescentes_Rojo_IP9351_01_laydown.jpg',
                webUrl: 'https://www.adidas.es/camiseta-primera-equipacion-espana-24-adolescentes/IP9351.html',
                rating: 5,
                web: 2,
                qty: 478
            }
        ]
    },
    {
        name: "Mallas",
        products: [
            {
                title: "Pantalones de Sauna Adelgazantes",
                description: 'Pantalones de yoga: los pantalones de neopreno están hechos de tela compuesta de 3 capas con una compresión apretada pero cómoda que brinda un buen soporte para la parte inferior del abdomen. El tejido único calienta tu cuerpo, atrapa el calor y te hace sudar mientras corres y haces ejercicio.',
                price: 19,
                imageUrl: 'https://m.media-amazon.com/images/I/61YpxnWfQDL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/Litthing-Pantalones-Adelgazar-Deportivos-Sudoraci%C3%B3n/dp/B089KJP4T6/ref=sr_1_3_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1XNIG2POW1RWI&dib=eyJ2IjoiMSJ9.Yb5MBQl-Bj3nWALwTvjabkAiq3Wb3U1eiJZfrDE3owvBRM4sEWjeO7teDzuzSYyrEYg0E4WyHaZuFY4tpX10znfrxmzaWx00cQZmFDcleds-qJhaoItgj_evXpkQVHRznFLaMXrvRYrSQG_HgIE2DP4F7rc3gG3OzlIjtfv2M93cnD2b-kgkHaKBCaIEbGx43faBGCEKGarioGdirI2BoopXYai7OEOvo2DhaK2ZPJzhTsHsfA2Geegi6uoqrhKgeTdQqzjiE5PU2exlyCamX0GiPA3JGLpma5Zo3WFz2fs.0P5fenBAYN-z_HqsF_eTjviA6V9aTsbek6vTzZx0j0w&dib_tag=se&keywords=pantalones%2By%2Bmallas&qid=1713617234&s=sports&sprefix=%2Csporting%2C632&sr=1-3-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&th=1&psc=1',
                rating: 4,
                web: 0,
                qty: 123
            },
            {
                title: "Adidas W 3s Leg - Leggings Mujer",
                description: 'Corte entallado. Tela impermeable. Tejido transpirable',
                price: 20,
                imageUrl: 'https://m.media-amazon.com/images/I/51NtaEq+ejL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/adidas-GL0723-Leggings-Womens-Black/dp/B08LD1V45X/ref=sr_1_10?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1XNIG2POW1RWI&dib=eyJ2IjoiMSJ9.Yb5MBQl-Bj3nWALwTvjabkAiq3Wb3U1eiJZfrDE3owvBRM4sEWjeO7teDzuzSYyrEYg0E4WyHaZuFY4tpX10znfrxmzaWx00cQZmFDcleds-qJhaoItgj_evXpkQVHRznFLaMXrvRYrSQG_HgIE2DP4F7rc3gG3OzlIjtfv2M93cnD2b-kgkHaKBCaIEbGx43faBGCEKGarioGdirI2BoopXYai7OEOvo2DhaK2ZPJzhTsHsfA2Geegi6uoqrhKgeTdQqzjiE5PU2exlyCamX0GiPA3JGLpma5Zo3WFz2fs.0P5fenBAYN-z_HqsF_eTjviA6V9aTsbek6vTzZx0j0w&dib_tag=se&keywords=pantalones+y+mallas&qid=1713617234&s=sports&sprefix=%2Csporting%2C632&sr=1-10',
                rating: 5,
                web: 0,
                qty: 109
            },
            {
                title: "Bañadores Hombres",
                description: 'Material:85% poliéster, 15% spandex. Repelente al agua, secado rápido, de alta elasticidad, apropiado a todas las actividades acuáticas y deportes de playa.',
                price: 17,
                imageUrl: 'https://m.media-amazon.com/images/I/610gBjbMDhL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/Arcweg-Ba%C3%B1adores-Pantalones-Ajustable-Cremallera/dp/B07Z1ZDQ1R/ref=sr_1_14_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1XNIG2POW1RWI&dib=eyJ2IjoiMSJ9.Yb5MBQl-Bj3nWALwTvjabkAiq3Wb3U1eiJZfrDE3owvBRM4sEWjeO7teDzuzSYyrEYg0E4WyHaZuFY4tpX10znfrxmzaWx00cQZmFDcleds-qJhaoItgj_evXpkQVHRznFLaMXrvRYrSQG_HgIE2DP4F7rc3gG3OzlIjtfv2M93cnD2b-kgkHaKBCaIEbGx43faBGCEKGarioGdirI2BoopXYai7OEOvo2DhaK2ZPJzhTsHsfA2Geegi6uoqrhKgeTdQqzjiE5PU2exlyCamX0GiPA3JGLpma5Zo3WFz2fs.0P5fenBAYN-z_HqsF_eTjviA6V9aTsbek6vTzZx0j0w&dib_tag=se&keywords=pantalones+y+mallas&qid=1713617234&s=sports&sprefix=%2Csporting%2C632&sr=1-14-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1',
                rating: 4,
                web: 0,
                qty: 58
            },
            {
                title: "Leggins Mujer Pantalon Deporte Mallas ",
                description: 'Cintura Alta y Vientre Control: DDOBB leggings mujer son opaca,sinvisibles, no transparentes, bien cosidas y el diseño de cintura alta resalta la cintura sexy de las mujeres. Nuestras mallas reductoras mujer tienen una suave banda de compresión de cintura alta que puede ayudar a aplanar la barriga y dar forma a la cintura para una figura de reloj de arena.',
                price: 17,
                imageUrl: 'https://m.media-amazon.com/images/I/71FGAr5zecL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/DDOBB-Leggings-Estampado-Colorido-Pantalones/dp/B0BC2447RW/ref=sr_1_22?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1XNIG2POW1RWI&dib=eyJ2IjoiMSJ9.Yb5MBQl-Bj3nWALwTvjabkAiq3Wb3U1eiJZfrDE3owvBRM4sEWjeO7teDzuzSYyrEYg0E4WyHaZuFY4tpX10znfrxmzaWx00cQZmFDcleds-qJhaoItgj_evXpkQVHRznFLaMXrvRYrSQG_HgIE2DP4F7rc3gG3OzlIjtfv2M93cnD2b-kgkHaKBCaIEbGx43faBGCEKGarioGdirI2BoopXYai7OEOvo2DhaK2ZPJzhTsHsfA2Geegi6uoqrhKgeTdQqzjiE5PU2exlyCamX0GiPA3JGLpma5Zo3WFz2fs.0P5fenBAYN-z_HqsF_eTjviA6V9aTsbek6vTzZx0j0w&dib_tag=se&keywords=pantalones+y+mallas&qid=1713617234&s=sports&sprefix=%2Csporting%2C632&sr=1-22',
                rating: 5,
                web: 0,
                qty: 99
            },
            {
                title: "Bañador Hombre Pantalones Cortos de Natación Secado Rápido",
                description: '2 en 1 Baños Pantalones Cortos desde 92% poliéster + 8% elastano para ubicación externa, 85% poliéster + 15% elastano para ubicación interna, que es más duradera y más cómoda y mantiene realmente fresco cuando se usa . Nuestros hombres de troncos de natación con costuras dobles reforzadas aseguran el mejor rendimiento y durabilidad.',
                price: 17,
                imageUrl: 'https://m.media-amazon.com/images/I/61-eGtG0mBL._AC_SX679_.jpg',
                webUrl: 'https://www.amazon.es/Pantalones-Bolsillos-Ajustable-Vacaciones-Gradiente/dp/B0BR9V7KXY/ref=sr_1_26_sspa?__mk_es_ES=%C3%85M%C3%85%C5%BD%C3%95%C3%91&crid=1XNIG2POW1RWI&dib=eyJ2IjoiMSJ9.Yb5MBQl-Bj3nWALwTvjabkAiq3Wb3U1eiJZfrDE3owvBRM4sEWjeO7teDzuzSYyrEYg0E4WyHaZuFY4tpX10znfrxmzaWx00cQZmFDcleds-qJhaoItgj_evXpkQVHRznFLaMXrvRYrSQG_HgIE2DP4F7rc3gG3OzlIjtfv2M93cnD2b-kgkHaKBCaIEbGx43faBGCEKGarioGdirI2BoopXYai7OEOvo2DhaK2ZPJzhTsHsfA2Geegi6uoqrhKgeTdQqzjiE5PU2exlyCamX0GiPA3JGLpma5Zo3WFz2fs.0P5fenBAYN-z_HqsF_eTjviA6V9aTsbek6vTzZx0j0w&dib_tag=se&keywords=pantalones+y+mallas&qid=1713617234&s=sports&sprefix=%2Csporting%2C632&sr=1-26-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9tdGY&psc=1',
                rating: 4,
                web: 0,
                qty: 86
            },
            {
                title: "Nike Universa",
                description: 'Leggings de longitud completa, talle alto y sujeción media con bolsillos - Mujer',
                price: 99,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/49a9eaa0-a74f-4251-8b6a-51fe1e8a5013/universa-leggings-de-longitud-completa-talle-alto-y-sujecion-media-con-bolsillos-dbz7fN.png',
                webUrl: 'https://www.nike.com/es/t/universa-leggings-de-longitud-completa-talle-alto-y-sujecion-media-con-bolsillos-dbz7fN/DQ5996-208',
                rating: 4,
                web: 1,
                qty: 65
            },
            {
                title: "Nike ACG UV Hike",
                description: 'Pantalón de talle medio - Mujer',
                price: 125,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/e368bbd8-0c9f-4e4e-9014-5588412add30/acg-uv-hike-pantalon-de-talle-medio-T98Dbp.png',
                webUrl: 'https://www.nike.com/es/t/acg-uv-hike-pantalon-de-talle-medio-T98Dbp/FQ3058-020',
                rating: 5,
                web: 1,
                qty: 254
            },
            {
                title: "Nike Go",
                description: 'Leggings de longitud completa, talle alto y sujeción firme con bolsillos - Mujer',
                price: 99,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7c9c38b2-f137-4ecc-aa1f-acc51af187eb/go-leggings-de-longitud-completa-talle-alto-y-sujecion-firme-con-bolsillos-pjFt88.png',
                webUrl: 'https://www.nike.com/es/t/go-leggings-de-longitud-completa-talle-alto-y-sujecion-firme-con-bolsillos-pjFt88/DQ5668-237',
                rating: 5,
                web: 1,
                qty: 47
            },
            {
                title: "Nike Dri-FIT Fast",
                description: 'Pantalón de running de calentamiento y talle medio con diseño 7/8 - Mujer',
                price: 95,
                imageUrl: 'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/af524639-6b19-449b-8360-a5efd62bee2b/dri-fit-fast-pantalon-de-running-de-calentamiento-y-talle-medio-con-diseno-7-8-Stl9Zn.png',
                webUrl: 'https://www.nike.com/es/t/dri-fit-fast-pantalon-de-running-de-calentamiento-y-talle-medio-con-diseno-7-8-Stl9Zn/FB7730-010',
                rating: 5,
                web: 1,
                qty: 78
            },
            {
                title: "Pantalón corto Marathon 20 Running",
                description: 'Este producto se ha fabricado con un 100% de material reciclado. Su objetivo es plantear otra solución más que ayude a eliminar los residuos plásticos.',
                price: 35,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/158456882e4141059998af1d009f6689_9366/Pantalon_corto_Marathon_20_Running_Tallas_grandes_Negro_HS2048_21_model.jpg',
                webUrl: 'https://www.adidas.es/pantalon-corto-marathon-20-running-tallas-grandes/HS2048.html',
                rating: 5,
                web: 2,
                qty: 78
            },
            {
                title: "Pantalón corto Own The Run",
                description: 'Este pantalón corto de running adidas te ofrece la comodidad y confianza que necesitas en tus entrenamientos de intervalos, tus tiradas de ritmo constante o tus carreras de larga distancia.',
                price: 40,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/4267024cc0464d8f9d301aa6de270c93_9366/Pantalon_corto_Own_The_Run_Negro_IY0704_21_model.jpg',
                webUrl: 'https://www.adidas.es/pantalon-corto-own-the-run/IY0704.html',
                rating: 5,
                web: 2,
                qty: 76
            },
            {
                title: "Pantalón corto Made to Be Remade Running",
                description: 'Luce un estilo deportivo femenino cada vez que salgas a correr con este pantalón corto de running adidas. Los volantes en las pernera aportan un toque original, mientras que la tecnología transpirable AEROREADY mantiene la piel seca en todo momento.',
                price: 45,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/efa4f520670847c492ceaefc00f26202_9366/Pantalon_corto_Made_to_Be_Remade_Running_Verde_HR5729_21_model.jpg',
                webUrl: 'https://www.adidas.es/pantalon-corto-made-to-be-remade-running/HR5729.html',
                rating: 4,
                web: 2,
                qty: 76
            },
            {
                title: "Pantalón corto Ultimateadidas 2-in-1",
                description: 'Lleva tu carrera al siguiente nivel con este pantalón corto adidas. Los detalles reflectantes te hacen más visible en condiciones de poca luz para que puedas correr al amanecer o a última hora de la tarde.',
                price: 60,
                imageUrl: 'https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/273b1136e4f74429abcd6f222e5832de_9366/Pantalon_corto_Ultimateadidas_2-in-1_Negro_IL7186_HM1.jpg',
                webUrl: 'https://www.adidas.es/pantalon-corto-ultimateadidas-2-in-1/IL7186.html',
                rating: 4,
                web: 2,
                qty: 98
            }
        ]
    }
];

// Función para insertar una categoría si no existe
async function insertWebsIfNotExists(webToInsert) {
    try {
        const existingWeb = await Web.findOne({ name: webToInsert.name });

        if (!existingWeb) {
            const newWeb = new Web(webToInsert);
            const savedWeb = await newWeb.save();

            websData.push(savedWeb._id)
        } else {
            console.log("La web", webToInsert.name, "ya existe en la base de datos.");
        }
    } catch (error) {
        console.log("ERROR añadiendo web:", error);
    }
};

// Función para insertar una categoría si no existe
async function insertCategoryIfNotExists(categoryData) {
    try {
        const existingCategory = await Category.findOne({ name: categoryData.name });

        if (!existingCategory) {
            const newCategory = new Category(categoryData);
            const savedCategory = await newCategory.save();

            await insertProducts(categoryData, savedCategory._id)
        } else {
            console.log("La categoría ", categoryData.name, " ya existe en la base de datos.");
        }
    } catch (error) {
        console.log("ERROR añadiendo categoría:", error);
    }
};

// Función para insertar un producto si no existe
async function insertProducts(categoryData, id) {
    try {
        categoryData.products.forEach(async (productData) => {
            const web = websData[productData.web];
            const newProduct = new Product({
                ...productData,
                category: id,
                web: web
            });

            await newProduct.save();
        });

    } catch (error) {
        console.log("ERROR añadiendo productos:", error);
    }
};

// Función para insertar una categoría si no existe
async function insertCountryIfNotExists(country) {
    try {
        const existingCountry = await Country.findOne({ name: country.name });

        if (!existingCountry) {
            const newCountry = new Country(country);
            await newCountry.save();
        } else {
            console.log("El país ", existingCountry.name, " ya existe en la base de datos.");
        }
    } catch (error) {
        console.log("ERROR añadiendo web:", error);
    }
};

// Insertar categorías y productos

async function setData() {
    for await (const web of websToInsert) {
        await insertWebsIfNotExists(web);
    }

    for await (const categories of categoriesData) {
        await insertCategoryIfNotExists(categories);
    }

    for await (const country of countries) {
        await insertCountryIfNotExists(country);
    }
}

setData();