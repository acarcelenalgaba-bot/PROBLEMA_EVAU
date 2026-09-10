if (typeof baseDatosTemas === 'undefined') {
    var baseDatosTemas = {};
}


baseDatosTemas["tema1"] = {
    id: "tema1",
    titulo: "Tema 1: Estructura de la Materia",
    deshabilitado: false,
    secciones: {
        "estructura": {
            nombre: "1. Estructura de la materia",
            problemas: [
                {
                    titulo: "Cuántica de Planck y Energía de Ionización",
                    enunciado: "La primera energía de ionización de un elemento gaseoso es de \\(450 \\text{ kJ}\\cdot\\text{mol}^{-1}\\). <br>a) Calcule la energía mínima (en Julios) que se requiere para ionizar un único átomo de este elemento. <br>b) Determine si un fotón de radiación ultravioleta con una longitud de onda de \\(\\lambda = 200 \\text{ nm}\\) posee energía suficiente para provocar la ionización de dicho átomo. <br>c) Explique brevemente en qué consiste la hipótesis de cuantización de la energía propuesta por Max Planck.<br>Datos: Número de Avogadro, N<sub>A</sub> = 6,022 · 10<sup>23</sup> mol<sup>-1</sup>; Constante de Planck, h = 6,63·10<sup>-34</sup> J · s; Velocidad de la luz, c = 3,0 · 10<sup>8</sup> m/s.",
                    solucion: `
                <div class='paso'>
                    <strong>a) Energía mínima para ionizar un átomo:</strong><br>
                    La energía de ionización por átomo se calcula dividiendo la energía de ionización por mol entre el número de Avogadro:<br>
                    \\[\\ce{ E_{ionizacion} = \\frac{450 \\cdot 10^3 \\, \\text{J}}{1 \\ mol} \\cdot \\frac{1 mol}{6,022 \\cdot 10^{23} \\, \\text{átomos}} \\approx 7,48 \\cdot 10^{-19} \\, \\text{J/átomo} }\\]
                </div>
                <div class='paso'>
                    <strong>b) Energía del fotón de radiación ultravioleta:</strong><br>
                    La energía de un fotón se calcula usando la fórmula \\(\\ce{ E = \\dfrac{\\ce{h \\cdot c}}{\\lambda} }\\):<br>
                    \\[\\ce{ E_{fotón} = \\frac{6,63 \\cdot 10^{-34} \\, \\text{J·s} \\cdot 3,0 \\cdot 10^8 \\, \\text{m/s}}{200 \\cdot 10^{-9} \\, \\text{m}} \\approx 9,945 \\cdot 10^{-19} \\, \\text{J} }\\]<br>
                    Comparando con la energía de ionización por átomo, \\(\\ce{ E_{fotón} > E_{ionizacion} }\\), por lo que el fotón tiene suficiente energía para ionizar el átomo.
                </div>
                <div class='paso'>
                    <strong>c) Hipótesis de cuantización de la energía:</strong><br>
                    La hipótesis de cuantización de la energía propuesta por Max Planck establece que la energía no se emite ni se absorbe de manera continua, sino en cantidades discretas llamadas "cuantos". Esto significa que los átomos y moléculas solo pueden intercambiar energía en múltiplos enteros de una cantidad mínima de energía, lo que explica fenómenos como el espectro de radiación del cuerpo negro y la emisión de luz en líneas espectrales.
                </div>
            `
                },
                {
                    titulo: "Efecto Fotoeléctrico I",
                    enunciado: "Al iluminar la superficie de un metal con radiación de longitud de onda \\(\\lambda = 300 \\text{ nm}\\), los electrones son emitidos con una energía cinética máxima de 1,2·10<sup>-19</sup> J. <br>a) Calcule el trabajo de extracción (o función de trabajo) de dicho metal en Julios y en eV. <br> b) Determine la frecuencia umbral por debajo de la cual no se producirá efecto fotoeléctrico.<br> Datos: h = 6,63·10<sup>-34</sup> J·s; c = 3,0·10<sup>8</sup> m/s; 1 eV = 1,6 · 10<sup>-19</sup> J.",
                    solucion: `
                <div class='paso'>
                <strong>a) Trabajo de extracción:</strong><br>
                El trabajo de extracción se calcula como la ecuación de Einstein del efecto fotoeléctrico: \\( W_0 = E_{cinética} + hf \\), donde \\( hf \\) es la energía del fotón incidente. <br>

                La energía del fotón incidente se calcula mediante la relación \\( E = \\frac{hc}{\\lambda} \\):<br>
                \\[ E_{fotón} = \\frac{6,63 \\cdot 10^{-34} \\, \\text{J·s} \\cdot 3,0 \\cdot 10^8 \\, \\text{m/s}}{300 \\cdot 10^{-9} \\, \\text{m}} \\approx 6,63 \\cdot 10^{-19} \\, \\text{J} \\]<br>
                Por lo tanto, el trabajo de extracción es:<br>
                \\[ W_0 = 6,63 \\cdot 10^{-19} + 1,2 \\cdot 10^{-19} \\approx 7,83 \\cdot 10^{-19} \\, \\text{J} \\]<br>

                </div>
                <div class='paso'>
                    <strong>b) Frecuencia umbral:</strong><br>
                    La frecuencia umbral se calcula a partir de la ecuación \\( W_0 = hf_0 \\), donde \\( f_0 \\) es la frecuencia umbral.    <br>
                    \\[ f_0 = \\frac{W_0}{h} = \\frac{7,83 \\cdot 10^{-19}}{6,63 \\cdot 10^{-34}} \\approx 1,18 \\cdot 10^{15} \\, \\text{Hz} \\]
                </div>
                
            `
                },
                {
                    titulo: "Efecto Fotoeléctrico II",
                    enunciado: "Un fotocátodo de potasio tiene un trabajo de extracción (o función de trabajo) de W<sub>0</sub> = 2,2 eV. Sobre su superficie incide un haz de luz monocromática de longitud de onda \\(\\lambda = 380 \\ nm\\).<br>a) Determine si se produce efecto fotoeléctrico. En caso afirmativo, calcule la energía cinética máxima de los fotoelectrones emitidos (expresada en eV) y el potencial de frenado (V<sub>s</sub>) necesario para anular la corriente eléctrica. <br> b) Calcule la velocidad máxima (v<sub>máx</sub>) con la que son expulsados dichos electrones.<br> c) Justifique razonadamente qué ocurriría con la energía cinética máxima de los electrones y con el número de electrones emitidos por segundo si se duplica la intensidad de la luz incidente sin modificar su frecuencia. <br>Datos: Constante de Planck: h = 6,63 · 10<sup>-34</sup> J·s; Velocidad de la luz: c = 3,0 · 10<sup>8</sup> m/s; Carga del electrón: e = 1,6 · 10<sup>-19</sup> C; Masa del electrón: m<sub>e</sub> = 9,1 · 10<sup>-31</sup> kg; 1 eV = 1,6 · 10<sup>-19</sup> J.",
                    solucion: `
                <div class='paso'>
                <strong>a) Determinación del efecto fotoeléctrico y energía cinética máxima:</strong><br>
                La energía del fotón incidente se calcula mediante la relación \\( E = \\frac{hc}{\\lambda} \\):<br>
                \\[ E_{fotón} = \\frac{6,63 \\cdot 10^{-34} \\, \\text{J·s} \\cdot 3,0 \\cdot 10^8 \\, \\text{m/s}}{380 \\cdot 10^{-9} \\, \\text{m}} \\approx 5,23 \\cdot 10^{-19} \\, \\text{J} \\]
                Convertimos la función de trabajo a Julios: \\( W_0 = 2,2 \\, \\text{eV} \\cdot 1,6 \\cdot 10^{-19} \\, \\text{J/eV} \\approx 3,52 \\cdot 10^{-19} \\, \\text{J} \\)<br>
                La energía cinética máxima de los fotoelectrones se calcula con la ecuación de Einstein para el efecto fotoeléctrico:<br>
                \\[ E_{cinética} = E_{fotón} - W_0 \\approx 5,23 \\cdot 10^{-19} - 3,52 \\cdot 10^{-19} \\approx 1,71 \\cdot 10^{-19} \\, \\text{J} \\]
                Convertimos la energía cinética máxima a eV: \\( E_{cinética} \\approx \\frac{1,71 \\cdot 10^{-19}}{1,6 \\cdot 10^{-19}} \\approx 1,07 \\, \\text{eV} \\)<br>
                El potencial de frenado necesario para anular la corriente eléctrica se calcula mediante \\( V_s = \\frac{E_{cinética}}{e} \\approx 1,07 \\, \\text{V} \\).
                </div>
                <div class='paso'>
                <strong>b) Cálculo de la velocidad máxima de los electrones:</strong><br>
                La velocidad máxima de los electrones se calcula usando la relación \\( E_{cinética} = \\frac{1}{2} m_e v_{máx}^2 \\):<br>
                \\[ v_{máx} = \\sqrt{\\frac{2 E_{cinética}}{m_e}} \\approx \\sqrt{\\frac{2 \\cdot 1,71 \\cdot 10^{-19}}{9,1 \\cdot 10^{-31}}} \\approx 6,12 \\cdot 10^5 \\, \\text{m/s} \\]
                </div>
                <div class='paso'>
                <strong>c) Efecto de duplicar la intensidad de la luz:</strong><br>
                Si se duplica la intensidad de la luz incidente sin modificar su frecuencia, la energía cinética máxima de los electrones no cambiará, ya que depende únicamente de la frecuencia de la luz y de la función de trabajo del metal. Sin embargo, el número de electrones emitidos por segundo aumentará proporcionalmente a la intensidad de la luz, ya que habrá más fotones incidentes interactuando con el metal.
                </div>
            `
                },
                {
                    titulo: "Modelo de Bohr",
                    enunciado: "Según el modelo atómico de Bohr, la energía de un electrón en una órbita n del átomo de hidrógeno se puede calcular mediante la expresión \\(\\ce{ E_n = \\frac{- 2,18 \\cdot 10^{-18}}{n^2} \\text{ J}} \\). <br> a) Calcule la energía (en Julios) que debe absorber un electrón para realizar la transición desde el estado fundamental n = 1 hasta el nivel de energía n = 3. <br>b) Determine la frecuencia y la longitud de onda de la radiación electromagnética que causaría dicha transición. <br>c) Explique razonadamente cuál fue la principal limitación del modelo de Bohr que impulsó el desarrollo del modelo mecano-cuántico actual. <br> Datos: Constante de Planck, h = 6,63 · 10<sup>-34</sup> J · s; Velocidad de la luz, c = 3,0·10<sup>8</sup> m/s",
                    solucion: `
            <div class='paso'>
                <strong>a) Energía absorbida para la transición de n = 1 a n = 3:</strong><br>
                La energía del nivel n = 1 es:<br>
                \\[ E_1 = \\frac{-2,18 \\cdot 10^{-18}}{1^2} = -2,18 \\cdot 10^{-18} \\, \\text{J} \\]<br>
                La energía del nivel n = 3 es:<br>
                \\[ E_3 = \\frac{-2,18 \\cdot 10^{-18}}{3^2} = -2,42 \\cdot 10^{-19} \\, \\text{J} \\]<br>
                La energía absorbida para la transición es la diferencia entre los niveles:<br>
                \\[ \\Delta E = E_3 - E_1 = (-2,42 \\cdot 10^{-19}) - (-2,18 \\cdot 10^{-18}) \\approx 1,94 \\cdot 10^{-18} \\, \\text{J} \\]
            </div>
            <div class='paso'>
                <strong>b) Frecuencia y longitud de onda de la radiación:</strong><br>
                La frecuencia de la radiación se calcula mediante la relación \\( f = \\frac{\\Delta E}{h} \\):<br>
                \\[ f = \\frac{1,94 \\cdot 10^{-18}}{6,63 \\cdot 10^{-34}} \\approx 2,93 \\cdot 10^{15} \\, \\text{Hz} \\]<br>
                La longitud de onda se calcula mediante \\( \\lambda = \\frac{c}{f} \\):<br>
                \\[ \\lambda = \\frac{3,0 \\cdot 10^8}{2,93 \\cdot 10^{15}} \\approx 1,02 \\cdot 10^{-7} \\, \\text{m} = 102 \\, \\text{nm} \\]
            </div>
            <div class='paso'>
                <strong>c) Limitación del modelo de Bohr:</strong><br>
                La principal limitación del modelo de Bohr es que solo puede explicar el espectro de emisión del átomo de hidrógeno y no puede aplicarse a átomos con más de un electrón. Además, el modelo no considera la naturaleza ondulatoria de los electrones ni la incertidumbre en la posición y el momento de las partículas, lo que llevó al desarrollo del modelo mecano-cuántico actual, que describe los electrones como ondas de probabilidad y utiliza funciones de onda para determinar la distribución espacial de los electrones en los átomos.
            </div>
            `
                },
                {
                    titulo: "Espectro de Emisión del Hidrógeno y Modelo de Bohr",
                    enunciado: "En el átomo de hidrógeno, un electrón experimenta una transición electrónica descendente desde el nivel de energía de la órbita n = 4 hasta el nivel n = 2. <br>a) Calcule la energía emitida en este proceso de relajación cuántica. <br>b) Determine la longitud de onda (en nm) de la radiación emitida. <br>c) Indique razonadamente a qué región del espectro electromagnético pertenece la radiación y si será visible para el ojo humano. <br> Datos: Constante de Planck, \\(h = 6,63 \\cdot 10^{-34} \\text{ J}\\cdot\\text{s}\\); Velocidad de la luz, \\(c = 3,0 \\cdot 10^8 \\text{ m/s}\\); Expresión de la energía de las órbitas de Bohr para el hidrógeno: \\(E_n = \\frac{-2,18 \\cdot 10^{-18}}{n^2} \\text{ J}\\).",
                    solucion: `
            <div class='paso'>
                <strong>a) Energía emitida en la transición de n=4 a n=2:</strong><br>
                La energía del nivel n=4 es:<br>
                \\[ E_4 = \\frac{-2,18 \\cdot 10^{-18}}{4^2} = -1,36 \\cdot 10^{-19} \\, \\text{J} \\]<br>
                La energía del nivel n=2 es:<br>
                \\[ E_2 = \\frac{-2,18 \\cdot 10^{-18}}{2^2} = -5,45 \\cdot 10^{-19} \\, \\text{J} \\]<br>
                La energía emitida es la diferencia entre los niveles:<br>
                \\[ \\Delta E = E_2 - E_4 = (-5,45 \\cdot 10^{-19}) - (-1,36 \\cdot 10^{-19}) \\approx -4,09 \\cdot 10^{-19} \\, \\text{J} \\]
            </div>
            <div class='paso'>
                <strong>b) Longitud de onda de la radiación emitida:</strong><br>
                La longitud de onda se calcula mediante la relación \\( \\lambda = \\frac{hc}{|\\Delta E|} \\):<br>
                \\[ \\lambda = \\frac{6,63 \\cdot 10^{-34} \\, \\text{J·s} \\cdot 3,0 \\cdot 10^8 \\, \\text{m/s}}{4,09 \\cdot 10^{-19} \\, \\text{J}} \\approx 4,86 \\cdot 10^{-7} \\, \\text{m} = 486 \\, \\text{nm} \\]
            </div>
            <div class='paso'>
                <strong>c) Región del espectro electromagnético y visibilidad:</strong><br>
                La longitud de onda de 486 nm se encuentra en la región del espectro visible, específicamente en el rango del color azul-verde. Por lo tanto, la radiación emitida será visible para el ojo humano.
            </div>
            `
                },
                {
                    titulo: "Junio 2016",
                    enunciado: "Conteste cada una de las siguientes preguntas, justificando la respuesta.<br> a) Determine para el átomo de hidrógeno, según el modelo de Bohr, qué transición electrónica requiere una mayor absorción de energía, la de n = 2 a n = 3, la de n = 5 a n = 6 o la de n = 9 a n = 2.",
                    solucion: `
                <div class='paso'>
                    <strong>a) Transición electrónica con mayor absorción de energía:</strong><br>
                    La energía absorbida en una transición electrónica se calcula como la diferencia de energía entre los niveles inicial y final. Para el átomo de hidrógeno, la energía de un nivel n se da por \\( E_n = \\frac{-2,18 \\cdot 10^{-18}}{n^2} \\text{ J} \\).<br>
                    Calculamos la energía absorbida para cada transición:<br>
                    1. Transición de n=2 a n=3:<br>
                    \\[ E_2 = \\frac{-2,18 \\cdot 10^{-18}}{2^2} = -5,45 \\cdot 10^{-19} \\, \\text{J} \\]<br>
                    \\[ E_3 = \\frac{-2,18 \\cdot 10^{-18}}{3^2} = -2,42 \\cdot 10^{-19} \\, \\text{J} \\]<br>
                    \\[ \\Delta E_{2\\to3} = E_3 - E_2 = (-2,42 \\cdot 10^{-19}) - (-5,45 \\cdot 10^{-19}) \\approx 3,03 \\cdot 10^{-19} \\, \\text{J} \\]<br>
                    2. Transición de n=5 a n=6:<br>
                    \\[ E_5 = \\frac{-2,18 \\cdot 10^{-18}}{5^2} = -8,72 \\cdot 10^{-20} \\, \\text{J} \\]<br>
                    \\[ E_6 = \\frac{-2,18 \\cdot 10^{-18}}{6^2} = -6,05 \\cdot 10^{-20} \\, \\text{J} \\]<br>
                    \\[ \\Delta E_{5\\to6} = E_6 - E_5 = (-6,05 \\cdot 10^{-20}) - (-8,72 \\cdot 10^{-20}) \\approx 2,67 \\cdot 10^{-20} \\, \\text{J} \\]<br>
                    3. Transición de n=9 a n=2:<br>
                    \\[ E_9 = \\frac{-2,18 \\cdot 10^{-18}}{9^2} = -2,69 \\cdot 10^{-20} \\, \\text{J} \\]<br>
                    \\[ \\Delta E_{9\\to2} = E_2 - E_9 = (-5,45 \\cdot 10^{-19}) - (-2,69 \\cdot 10^{-20}) \\approx 5,18 \\cdot 10^{-19} \\, \\text{J} \\]<br>
                    Comparando las energías absorbidas, la transición de n=9 a n=2 requiere la mayor absorción de energía (\\(5,18 \\cdot 10^{-19} \\, \\text{J}\\)).
                </div>
            `
                },
                {
                    titulo: "Julio 2018",
                    enunciado: "Responda justificadamente a las siguientes preguntas:<br>c) Calcule la menor longitud de onda en nm de la radiación absorbida del espectro de hidrógeno.<br> Datos. R<sub>H</sub> = 1,097 · 10<sup>7</sup> m<sup>&minus;1</sup> .",
                    solucion: `
                <div class='paso'>
                    <strong>c) Menor longitud de onda en el espectro de hidrógeno:</strong><br>
                    La menor longitud de onda corresponde a la transición desde el nivel n=∞ al nivel n=1 (serie de Lyman). La longitud de onda se calcula mediante la fórmula de Rydberg:<br>
                    \\[ \\frac{1}{\\lambda} = R_H \\left( \\frac{1}{n_1^2} - \\frac{1}{n_2^2} \\right) \\]<br>
                    Para la transición n=∞ a n=1:<br>
                    \\[ \\frac{1}{\\lambda} = R_H \\left( \\frac{1}{1^2} - \\frac{1}{\\infty^2} \\right) = R_H \\]<br>
                    Por lo tanto, la longitud de onda es:<br>
                    \\[ \\lambda = \\frac{1}{R_H} = \\frac{1}{1,097 \\cdot 10^7} \\approx 9,11 \\cdot 10^{-8} \\, \\text{m} = 91,1 \\, \\text{nm} \\]
                </div>
            `
                },
                {
                    titulo: "Dualidad Onda-Corpúsculo de de Broglie",
                    enunciado: "Para estudiar la naturaleza ondulatoria de la materia propuesta por de Broglie, un laboratorio compara dos sistemas en movimiento:<br><ul><li>Sistema A: &nbsp; Un electrón (\\(m_e = 9.11 \\cdot 10^{-31} \\text{ kg}\\)) que se desplaza a una velocidad de \\(1,5 \\cdot 10^6 \\text{ m/s}\\).<br></li><li>Sistema B: &nbsp; Una pelota de tenis (\\(m = 60 \\text{ g}\\)) servida a una velocidad de \\(150 \\text{ km/h}\\).<br></li></ul>a) Calcule la longitud de onda asociada (en metros) para ambos sistemas. <br> b) Justifique razonadamente, a partir de los resultados obtenidos, por qué las propiedades ondulatorias son determinantes en el estudio de los electrones pero pasan totalmente desapercibidas en los objetos de nuestra vida cotidiana.<br>Dato: Constante de Planck, \\(h = 6,63 \\cdot 10^{-34} \\text{ J}\\cdot\\text{s}\\).",
                    solucion: `
                <div class='paso'>
                    <strong>a) Cálculo de la longitud de onda asociada:</strong><br>
                    La longitud de onda asociada a una partícula se calcula mediante la relación de de Broglie: \\( \\lambda = \\frac{h}{p} \\), donde \\( p = mv \\) es el momento lineal de la partícula.<br>
                    Para el Sistema A (electrón):<br>
                    \\[ p_A = m_e v_A = (9,11 \\cdot 10^{-31} \\, \\text{kg}) (1,5 \\cdot 10^6 \\, \\text{m/s}) \\approx 1,37 \\cdot 10^{-24} \\, \\text{kg·m/s} \\]<br>
                    \\[ \\lambda_A = \\frac{6,63 \\cdot 10^{-34}}{1,37 \\cdot 10^{-24}} \\approx 4,84 \\cdot 10^{-10} \\, \\text{m} \\]<br>
                    Para el Sistema B (pelota de tenis):<br>
                    Convertimos la masa a kg y la velocidad a m/s:<br>
                    \\[ m_B = 60 \\, \\text{g} = 0,06 \\, \\text{kg}, \\quad v_B = 150 \\, \\text{km/h} = 41,67 \\, \\text{m/s} \\]<br>
                    \\[ p_B = m_B v_B = (0,06 \\, \\text{kg}) (41,67 \\, \\text{m/s}) \\approx 2,50 \\, \\text{kg·m/s} \\]<br>
                    \\[ \\lambda_B = \\frac{6,63 \\cdot 10^{-34}}{2,50} \\approx 2,65 \\cdot 10^{-34} \\, \\text{m} \\]
                </div>
                <div class='paso'>
                    <strong>b) Justificación de la relevancia de las propiedades ondulatorias:</strong><br>
                    La longitud de onda asociada al electrón (\\( \\lambda_A \\approx 4,84 \\cdot 10^{-10} \\, \\text{m} \\)) es comparable con las dimensiones atómicas y moleculares, lo que significa que las propiedades ondulatorias del electrón son significativas y deben considerarse en el estudio de fenómenos a nivel microscópico. En cambio, la longitud de onda asociada a la pelota de tenis (\\( \\lambda_B \\approx 2,65 \\cdot 10^{-34} \\, \\text{m} \\)) es extremadamente pequeña en comparación con cualquier escala macroscópica, lo que hace que las propiedades ondulatorias sean completamente despreciables y no observables en objetos de nuestra vida cotidiana.
                </div>
            `
                },
                {
                    titulo: "Dualidad de de Broglie y Principio de Incertidumbre",
                    enunciado: "Un electrón en un microscopio electrónico de alta resolución se desplaza a una velocidad de \\( 2,0 \\cdot 10^6 \\text{ m/s} \\). <br>a) Calcule la longitud de onda asociada a dicho electrón según la hipótesis de de Broglie. <br>b) Si la incertidumbre en la determinación de la posición de este electrón es de \\( 1,0 \\cdot 10^{-10} \\text{ m} \\) (aproximadamente el tamaño de un átomo de hidrógeno), determine la incertidumbre mínima en la medida de su velocidad. <br> Datos: Masa del electrón, \\( m_e = 9.1 \\cdot 10^{-31} \\text{ kg} \\); Constante de Planck, \\( h = 6.63 \\cdot 10^{-34} \\text{ J}\\cdot\\text{s} \\).",
                    solucion: `
            <div class='paso'>
                <strong>a) Cálculo de la longitud de onda asociada al electrón:</strong><br>
                La longitud de onda asociada a una partícula se calcula mediante la relación de de Broglie: \\( \\lambda = \\frac{h}{p} \\), donde \\( p = mv \\) es el momento lineal de la partícula.<br>
                Calculamos el momento del electrón:<br>
                \\[ p = m_e v = (9,1 \\cdot 10^{-31} \\, \\text{kg}) (2,0 \\cdot 10^6 \\, \\text{m/s}) \\approx 1,82 \\cdot 10^{-24} \\, \\text{kg·m/s} \\]<br>
                Por lo tanto, la longitud de onda es:<br>
                \\[ \\lambda = \\frac{6,63 \\cdot 10^{-34}}{1,82 \\cdot 10^{-24}} \\approx 3,64 \\cdot 10^{-10} \\, \\text{m} \\]
            </div>
            <div class='paso'>
                <strong>b) Determinación de la incertidumbre mínima en la velocidad:</strong><br>
                Según el principio de incertidumbre de Heisenberg, la relación entre la incertidumbre en la posición (\\( \\Delta x \\)) y la incertidumbre en el momento (\\( \\Delta p \\)) está dada por:<br>
                \\[ \\Delta x \\cdot \\Delta p \\geq \\frac{h}{4\\pi} \\]<br>
                Dado que \\( \\Delta p = m_e \\cdot \\Delta v \\), podemos expresar la incertidumbre en la velocidad como:<br>
                \\[ \\Delta v = \\frac{\\Delta p}{m_e} = \\frac{h}{4\\pi m_e \\Delta x} \\]<br>
                Sustituyendo los valores:<br>
                \\[ \\Delta v = \\frac{6,63 \\cdot 10^{-34}}{4\\pi (9,1 \\cdot 10^{-31}) (1,0 \\cdot 10^{-10})} \\approx 5,78 \\cdot 10^5 \\, \\text{m/s} \\]
            </div>
            `
                },
                {
                    titulo: "Principio de Incertidumbre de Heisenberg y Orbitales",
                    enunciado: "En física de partículas se acelera un protón (\\(m_p = 1,67 \\cdot 10^{-27} \\text{ kg}\\)) hasta que se conoce su velocidad con una incertidumbre de apenas \\(1,0 \\text{ m/s}\\).<br> a) Calcule la incertidumbre mínima en la determinación de la posición de dicho protón. <br> b) Justifique detalladamente cómo este principio físico de indeterminación obligó a sustituir el concepto determinista de \"órbita\" del modelo de Bohr por el concepto probabilístico de \"orbital\" en el modelo mecano-cuántico actual. <br>Dato: Constante de Planck, \\(h = 6,63 \\cdot 10^{-34} \\text{ J}\\cdot\\text{s}\\).",
                    solucion: `
            <div class='paso'>
                <strong>a) Cálculo de la incertidumbre mínima en la posición:</strong><br>
                Según el principio de incertidumbre de Heisenberg, la relación entre la incertidumbre en la posición (\\( \\Delta x \\)) y la incertidumbre en el momento (\\( \\Delta p \\)) está dada por:<br>
                \\[ \\Delta x \\cdot \\Delta p \\geq \\frac{h}{4\\pi} \\]<br>
                Dado que \\( \\Delta p = m_p \\cdot \\Delta v \\), podemos expresar la incertidumbre en la posición como:<br>
                \\[ \\Delta x = \\frac{h}{4\\pi m_p \\Delta v} \\]<br>
                Sustituyendo los valores:<br>
                \\[ \\Delta x = \\frac{6,63 \\cdot 10^{-34}}{4\\pi (1,67 \\cdot 10^{-27}) (1,0)} \\approx 3,18 \\cdot 10^{-8} \\, \\text{m} \\]
            </div>
            <div class='paso'>
                <strong>b) Justificación de la relevancia del principio de indeterminación:</strong><br>
                El principio de indeterminación de Heisenberg establece que no se pueden conocer simultáneamente con precisión arbitraria tanto la posición como el momento de una partícula. Esta limitación fundamental implica que no se puede hablar de trayectorias deterministas para las partículas a nivel cuántico. En lugar de órbitas definidas como en el modelo de Bohr, los electrones se describen mediante funciones de onda que dan lugar a orbitales, que representan regiones donde es más probable encontrar un electrón.
            </div>
            `
                },
                {
                    titulo: "Anomalías en Configuraciones Electrónicas y Números Cuánticos",
                    enunciado: "Considere los elementos químicos Cromo (\\(Z = 24\\)) y Cobre (\\(Z = 29\\)). <br>a) Escriba su configuración electrónica fundamental, justificando detalladamente por qué se desvían del orden teórico establecido por el diagrama de Moeller. <br>b) Indique los números cuánticos posibles para el electrón más externo (electrón de valencia) de cada átomo en su estado fundamental. <br>c) Justifique la estabilidad adicional asociada a las capas y subcapas semillenas.<br>d) Enuncie el Principio de Exclusión de Pauli y utilícelo para justificar por qué un orbital atómico tipo d no puede albergar más de 10 electrones.",
                    solucion: `
                <div class='paso'>
                    <strong>a) Configuración electrónica fundamental:</strong><br>
                    La configuración electrónica fundamental del cromo (Z = 24) es \\( \\mathrm{[Ar] \\: 4s^1 \\: 3d^5} \\) y la del cobre (Z = 29) es \\( \\mathrm{[Ar] \\: 4s^1 \\: 3d^{10}} \\). Estas configuraciones se desvían del orden teórico debido a la estabilidad adicional que se obtiene al tener subcapas semillenas o llenas. En el caso del cromo, tener una subcapa d semillena (3d<sup>5</sup>) proporciona una mayor estabilidad que tener una subcapa d parcialmente llena (3d<sup>4</sup>). De manera similar, en el cobre, tener una subcapa d completamente llena (3d<sup>10</sup>) es más estable que tener una subcapa d parcialmente llena (3d<sup>9</sup>).
                </div>

                <div class='paso'>
                    <strong>b) Números cuánticos para el electrón de valencia:</strong><br>
                    El electrón de valencia del tanto en el cromo como en el cobre es el que ocupa el orbital 4s. Los números cuánticos posibles son:
                    <ul>
                        <li>\\(n = 4\\)</li>
                        <li>\\(l = 0\\)</li>
                        <li>\\(m_l = 0\\)</li>
                        <li>\\(m_s = +\\frac{1}{2}\\) o \\(-\\frac{1}{2}\\)</li>
                    </ul>
                </div>
                <div class='paso'>
                    <strong>c) Estabilidad adicional de capas y subcapas semillenas:</strong><br>
                    Las subcapas semillenas y llenas proporcionan estabilidad adicional debido a la simetría y al emparejamiento de electrones. En una subcapa semillena, todos los orbitales están ocupados por un solo electrón con espines paralelos, lo que minimiza la repulsión entre electrones y maximiza la estabilidad del átomo. En una subcapa llena, todos los orbitales están completamente ocupados, lo que también reduce la repulsión y proporciona una configuración más estable.
                </div>
                <div class='paso'>
                    <strong>d) Principio de Exclusión de Pauli:</strong><br>
                    El Principio de Exclusión de Pauli establece que no pueden existir dos electrones en un mismo átomo con los cuatro números cuánticos iguales. Por lo tanto, un orbital atómico tipo d (con \\(l = 2\\)) puede albergar un máximo de 10 electrones, ya que tiene cinco orbitales (con \\(m_l = -2, -1, 0, +1, +2\\) ), y cada uno puede contener dos electrones con espines opuestos.
                </div>
            `
                },
                {
                    titulo: "Junio 2015",
                    enunciado: "El uranio es un elemento con Z = 92. En la naturaleza se encuentra mayoritariamente como <sup>238</sup>U, con una pequeña cantidad de <sup>235</sup>U,que es el que se emplea en reactores nucleares. <br>  a) Explique la diferencia entre las configuraciones electrónicas del <sup>238</sup>U y el <sup>235</sup>U. <br> b) Calcule el número de neutrones en un núcleo de <sup>235</sup>U. <br>  c) Escriba la configuración electrónica del <sup>235</sup>U. <br> d) Escriba los números cuánticos posibles para los electrones más externos del <sup>235</sup>U.",
                    solucion: `
                <div class='paso'> 
                    <strong>a) Diferencia entre <sup>238</sup>U y <sup>235</sup>U:</strong><br>
                    La diferencia radica en el número de neutrones: el <sup>238</sup>U tiene 146 neutrones, mientras que el <sup>235</sup>U tiene 143 neutrones. Esta diferencia afecta sus propiedades físicas y químicas.
                </div>
                <div class='paso'> 
                    <strong>b) Número de neutrones en <sup>235</sup>U:</strong><br>
                    El número de neutrones se calcula restando el número atómico (Z) al número de masa (A):<br>
                    \\[ N = A - Z = 235 - 92 = 143 \\]
                </div>
                <div class='paso'>
                    <strong>c) Configuración electrónica del <sup>235</sup>U:</strong><br>
                    La configuración electrónica del <sup>235</sup>U es la misma que la del <sup>238</sup>U, ya que ambos tienen el mismo número de protones (92) y, por tanto, el mismo número de electrones. La configuración electrónica es:<br>
                    \\[\\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6 \\: 4s^2 \\: 3d^{10} \\: 4p^6 \\: 5s^2 \\: 4d^{10} \\: 5p^6 \\: 6s^2 \\: 4f^{14} \\: 5d^{10} \\: 6p^6 \\: 7s^2 \\: 5f^3 \\: 6d^1} \\] 
                    El uranio es una excepción a la regla de Moeller. En lugar de que los últimos electrones llenen únicamente el orbital 5f, un electrón se posiciona en el orbital 6d (6d<sup>1</sup>). Esto ocurre porque los niveles de energía de los orbitales 5f y 6d están extremadamente juntos en los actínidos, lo que hace que esta distribución sea energéticamente más estable. <br>
                    <div style='text-align: center; margin-bottom: 20px;'> <img src='img/moeller.png' style='width: 25rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div>
                </div>  
                <div class='paso'>
                    <strong>d) Números cuánticos para los electrones más externos del <sup>235</sup>U:</strong><br>
                    Los electrones más externos del <sup>235</sup>U son los del subnivel 5f, que tiene 3 electrones. Para cada uno de estos electrones, los números cuánticos posibles son:<br>
                    - Para el primer electrón: \\( n = 5, l = 3, m_l = -3, m_s = +\\frac{1}{2} \\) <br>
                    - Para el segundo electrón: \\( n = 5, l = 3, m_l = -2, m_s = +\\frac{1}{2} \\) <br>
                    - Para el tercer electrón: \\( n = 5, l = 3, m_l = -1, m_s = +\\frac{1}{2} \\) <br>
                        (Nota: los números cuánticos pueden variar dependiendo de cómo se distribuyan los electrones en el subnivel 5f, pero estos son ejemplos de configuraciones posibles).
                </div>
            `
                },
                {
                    titulo: "Junio 2017",
                    enunciado: "Responda justificadamente las siguientes preguntas:<br> a) Para el elemento con Z = 7 indique cuántos electrones tiene con número cuántico m = 0 y detalle en qué orbitales.",
                    solucion: `<div class='paso'>
                <strong>a) Número de electrones con m = 0 para el elemento con Z = 7:</strong><br>
                El elemento con Z = 7 es el nitrógeno (N). Su configuración electrónica es \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^3} \\).<br>
                - En el subnivel 1s, hay 2 electrones, ambos con m = 0 (ya que l = 0 para s).<br>
                - En el subnivel 2s, hay 2 electrones, ambos con m = 0 (ya que l = 0 para s).<br>
                - En el subnivel 2p, hay 3 electrones. Los valores posibles de m para p son -1, 0 y +1. Por lo tanto, según la regla de Hund, uno de los electrones en el subnivel 2p tiene m = 0.<br>
                En total, hay 2 (de 1s) + 2 (de 2s) + 1 (de 2p) = 5 electrones con m = 0. <br>
                Orbitales: Los electrones con m = 0 se encuentran en los orbitales 1s, 2s y uno de los orbitales 2p.
            </div>
            `
                },
                {
                    titulo: "Junio 2018",
                    enunciado: "Un elemento químico posee una configuración electrónica \\( \\mathrm{1s^2 \\: 2s^2 \\:  2p^6 \\: 3s^2 \\: 3p^6 \\: 4s^2 \\: 3d^6} \\) . Justifique si son verdaderas o falsas las siguientes afirmaciones:<br>c) Los números cuánticos (3, 1, &minus;2, +½) corresponden a un electrón de este elemento.",
                    solucion: `
            <div class='paso'>
                <strong>c) Veracidad de los números cuánticos (3, 1, &minus;2, +½):</strong><br>
                Los números cuánticos dados corresponden a un electrón en el nivel n=3, subnivel l=1 (p), con m=-2 y spin +½. Sin embargo, para un subnivel p (l=1), los valores posibles de m son -1, 0 y +1. Por lo tanto, m=-2 no es un valor permitido para un orbital p. <br>
                Conclusión: La afirmación es falsa.
            </div>
            `
                },
                {
                    titulo: "Julio 2018",
                    enunciado: "Responda justificadamente a las siguientes preguntas:<br>a) Para los átomos A (Z = 7) y B (Z = 26) escriba la configuración electrónica, indique el número de electrones desapareados y los<br>orbitales en los que se encuentran.",
                    solucion: `
            <div class='paso'>
                <strong>a) Configuración electrónica, número de electrones desapareados y orbitales:</strong><br>
                - Para el átomo A (Z=7, Nitrógeno):<br>
                Configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^3} \\)<br>
                Número de electrones desapareados: 3<br>
                Orbitales con electrones desapareados: Los tres electrones se encuentran en los orbitales 2p (uno en cada uno de los tres orbitales p disponibles).<br><br>
                - Para el átomo B (Z=26, Hierro):<br>
                Configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6 \\: 4s^2 \\: 3d^6} \\)<br>
                Número de electrones desapareados: 4<br>
                Orbitales con electrones desapareados: Los cuatro electrones desapareados se encuentran en los orbitales 3d (ocupando cuatro de los cinco orbitales d disponibles).
            </div>
            `
                },
                {
                    titulo: "Junio 2025",
                    enunciado: "2A. Dadas las configuraciones electrónicas de tres elementos en estado fundamental X: \\( \\mathrm{[Ar] \\: 4s^2 }\\), Y: \\( \\mathrm{[Ne] \\: 3s^2 \\: 3p^2 }\\) y Z: \\( \\mathrm{[He] \\: 2s^2 \\: 2p^5 }\\):<br> a) Determine su posición en la tabla periódica (periodo y grupo).<br> b) Indique nombre y símbolo de los elementos Y y Z. <br>c) Justifique si es posible o no cada una de las siguientes combinaciones de números cuánticos. En los casos afirmativos, razone si puede corresponder al electrón más externo de alguno de los elementos del enunciado, indicando a cuál: (2, 1, 0, +1/2); (3, 0, 1, &minus;1/2); (3, 2, 0, +1/2); (4, 4, 0, +1/2).",
                    solucion: `
                <div class='paso'>
                    <strong>a) Posición en la tabla periódica:</strong><br>
                    - Elemento X: Configuración \\( \\mathrm{[Ar] \\: 4s^2 }\\) corresponde al calcio (Ca), que se encuentra en el periodo 4, grupo 2 (metales alcalinotérreos).<br>
                    - Elemento Y: Configuración \\( \\mathrm{[Ne] \\: 3s^2 \\: 3p^2 }\\) corresponde al silicio (Si), que se encuentra en el periodo 3, grupo 14 (metaloides).<br>
                    - Elemento Z: Configuración \\( \\mathrm{[He] \\: 2s^2 \\: 2p^5 }\\) corresponde al flúor (F), que se encuentra en el periodo 2, grupo 17 (halógenos).
                </div>
                <div class='paso'>
                    <strong>b) Nombre y símbolo de los elementos Y y Z:</strong><br>
                    - Elemento Y: Silicio (Si)<br>
                    - Elemento Z: Flúor (F)
                </div>
                <div class='paso'>
                    <strong>c) Combinaciones de números cuánticos:</strong><br>
                    - (2, 1, 0, +1/2): Posible. Corresponde a un electrón en el subnivel 2p (l=1), m=0, spin +1/2. Puede ser el electrón más externo del flúor (Z).<br>
                    - (3, 0, 1, &minus;1/2): No posible. Para l=0 (subnivel s), m debe ser 0. Por lo tanto, m=1 no es válido.<br>
                    - (3, 2, 0, +1/2): Posible. Corresponde a un electrón en el subnivel 3d (l=2), m=0, spin +1/2. Puede ser el electrón más externo del silicio (Y) si consideramos excitación, pero no en estado fundamental.<br>
                    - (4, 4, 0, +1/2): No posible. Para l=4 (subnivel g), m puede variar entre -4 y +4, pero el subnivel g no está ocupado en los elementos mencionados, por lo que no corresponde a ninguno de ellos.
                </div>
            `
                },
                {
                    titulo: "Teoria: Orbita frente a orbital",
                    enunciado: "¿Cuál es la diferencia fundamental entre el concepto de 'órbita' en el modelo de Bohr y el de 'orbital' en el modelo mecano-cuántico actual? <br> a) Una órbita es una región tridimensional de alta probabilidad, mientras que un orbital es la trayectoria elíptica exacta que describe el electrón. <br> b) Una órbita define una trayectoria circular exacta y predecible para el electrón, mientras que un orbital es una zona del espacio donde existe una probabilidad muy alta (superior al 90 %) de encontrarlo. <br> c) No existe ninguna diferencia física; ambos términos describen exactamente el mismo comportamiento matemático del electrón.",
                    solucion: `
            <div class='paso'>
                b) En el modelo de Bohr, el electrón se describe como una partícula que sigue una trayectoria circular fija alrededor del núcleo, lo que implica que su posición y velocidad pueden conocerse simultáneamente con precisión. En cambio, en el modelo mecano-cuántico, el electrón se describe mediante funciones de onda que generan orbitales, los cuales representan regiones tridimensionales donde es más probable encontrar al electrón. Esto refleja la naturaleza probabilística de la mecánica cuántica y la imposibilidad de determinar con exactitud la posición y el momento del electrón al mismo tiempo.
            </div>
            `
                },
                {
                    titulo: "Teoria: Cuantización de la Energía",
                    enunciado: "¿Qué fenómeno físico sirvió como prueba experimental directa para que Max Planck y Niels Bohr propusieran que la energía en los átomos está cuantizada? <br>a) El descubrimiento de que los electrones tienen carga eléctrica negativa y masa.<br> b) La existencia de espectros atómicos de líneas discontinuas en lugar de espectros continuos de luz. <br> c) El comportamiento de los gases nobles, que no reaccionan con ningún otro elemento de la tabla periódica. ",

                    solucion: `
                <div class='paso'> 
                b) Si la energía de los átomos fuera continua, al excitar un gas este emitiría luz en todas las longitudes de onda posibles (un espectro continuo como el arcoíris). Al observarse únicamente líneas de colores muy concretas y separadas (espectros de líneas), se demostró que los electrones solo realizan saltos entre niveles de energía específicos y discretos.
                </div>
            `
                },
                {
                    titulo: "Teoria: Principios de Configuración Electrónica",
                    enunciado: "Al escribir la configuración electrónica del átomo de carbono (\\(Z = 6\\)), distribuimos sus dos últimos electrones en los orbitales 2p colocándolos en orbitales separados con espines paralelos ( \\(1s^2 \\ 2s^2 \\ 2p_x^1 \\ 2p_y^1 \\) ). ¿Qué principio o regla justifica esta distribución? <br>a) El Principio de Exclusión de Pauli. <br>b) El Principio de Construcción Progresiva (Aufbau).<br> c) La Regla de Máxima Multiplicidad de Hund. ",

                    solucion: `
                <div class='paso'> 
                c) La Regla de Hund establece que, para orbitales de la misma energía (degenerados, como los $2p$), la configuración más estable es aquella que maximiza el número de electrones desapareados con espines paralelos (el mismo sentido de giro), ya que esto reduce las repulsiones interelectrónicas.
                </div>
            `
                },
                {
                    titulo: "Junio 2026",
                    enunciado: "La configuración electrónica de un elemento X es [Ne]ns<sup>1</sup>. <br> c) Si el electrón más externo del elemento X es excitado del orbital ns al orbital np, ¿cómo cambian sus números cuánticos? Explique si se trata de una absorción o de una emisión. <br> d) Calcule la energía, en electronvoltios, asociada a la transición electrónica anterior, sabiendo que la longitud de onda de la radiación implicada es de 766,5 nm. <br> Datos. h = 6,626·10<sup>-34</sup> J·s<sup>-1</sup>; c = 3,00·10<sup>8</sup> m·s<sup>-1</sup>; 1 eV = 1,602·10<sup>-19</sup> J.",
                    solucion: `
                <div class='paso'>
                    <strong>c) Cambio en los números cuánticos y tipo de transición:</strong><br>
                    Cuando el electrón más externo del elemento X es excitado del orbital ns al orbital np, los números cuánticos cambian de la siguiente manera:<br>
                    - Número cuántico principal (n): Permanece igual, ya que ambos orbitales están en el mismo nivel de energía (n).<br>
                    - Número cuántico azimutal (\\(l\\)): Cambia de 0 (para el orbital s) a 1 (para el orbital p).<br>
                    - Número cuántico magnético (\\(\\ce{m_l}\\)): Puede variar entre -1, 0 y +1 para el orbital p, mientras que para el orbital s es siempre 0.<br>
                    - Número cuántico de espín (\\(\\ce{m_s}\\)): Permanece igual, ya que el espín del electrón no cambia durante la excitación.<br>
                    Esta transición corresponde a una absorción de energía, ya que el electrón está pasando a un nivel de energía más alto.
                </div>
                <div class='paso'>
                    <strong>d) Cálculo de la energía asociada a la transición:</strong><br>
                    La energía de la radiación asociada a la transición se puede calcular usando la ecuación de Planck:<br>
                    \\[ E = \\frac{h·c}{\\lambda} \\]<br>
                    Sustituyendo los valores:<br>
                    \\[ E = \\frac{(6,626 \\cdot 10^{-34} \\, \\text{J·s})(3,00 \\cdot 10^8 \\, \\text{m/s})}{766,5 \\cdot 10^{-9} \\, \\text{m}} \\approx 2,59 \\cdot 10^{-19} \\, \\text{J} \\]<br>
                    Para convertir a electronvoltios (eV):<br>
                    \\[ E_{eV} = \\frac{2,59 \\cdot 10^{-19} \\, \\text{J}}{1,602 \\cdot 10^{-19} \\, \\text{J/eV}} \\approx 1,62 \\, \\text{eV} \\]
                </div>
            
            `
                }

            ]

        },

        "propiedades": {
            nombre: "2. Propiedades Periódicas",
            problemas: [
                {
                    titulo: "Junio 2015",
                    enunciado: "Considere los átomos X e Y, cuyas configuraciones electrónicas fundamentales terminan en 3s<sup>1</sup> y 4p<sup>4</sup>, respectivamente: <br> a) Escriba sus configuraciones electrónicas y razone cuáles son sus iones más estables. <br> b) Determine la longitud de onda máxima (en nm) de la radiación necesaria para ionizar un átomo del elemento X, sabiendo que su primer potencial de ionización es 419 kJ · mol<sup>-1</sup>. <br> Datos. h = 6,626 · 10 <sup>-34</sup>J · s; c = 3 · 10 <sup>8</sup> m · s<sup>-1</sup>; 1 nm = 10<sup>-9</sup> m; N<sub>A</sub> = 6,022 · 10<sup>23</sup> mol<sup>-1</sup> .",
                    solucion: `               
                    <div class='paso'>
                        <strong>a) Configuraciones electrónicas y iones más estables:</strong><br>
                        - Para el átomo X (3s<sup>1</sup>): La configuración electrónica es \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^1} \\). El ion más estable para este átomo sería X<sup>+</sup>, con configuración electrónica \\( \\ce{1s^2 \\: 2s^2 \\: 2p^6} \\), que es un gas noble (neón). <br>
                        - Para el átomo Y (4p<sup>4</sup>): La configuración electrónica es \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6 \\: 4s^2 \\: 4p^4} \\). El ion más estable para este átomo sería Y<sup>2-</sup>, con configuración electrónica \\( \\ce{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6 \\: 4s^2 \\: 4p^6} \\), que también es un gas noble (argón).
                    </div>
                    <div class='paso'>
                        <strong>b) Longitud de onda máxima para ionizar el átomo X:</strong><br>
                        Para calcular la longitud de onda máxima, primero convertimos el potencial de ionización a energía por átomo:<br>
                        \\[ E = \\frac{419000 \\, \\text{J/mol}}{6,022 \\cdot 10^{23} \\, \\text{mol}^{-1}} = 6,96 \\cdot 10^{-19} \\, \\text{J} \\]<br>
                        Luego, usamos la relación entre energía y longitud de onda:<br>
                        \\[ E = \\frac{hc}{\\lambda} \\Rightarrow \\lambda = \\frac{hc}{E} \\]<br>
                        Sustituyendo los valores:<br>
                        \\[ \\lambda = \\frac{(6,626 \\cdot 10^{-34} \\, \\text{J} \\cdot \\text{s})(3 \\cdot 10^8 \\, \\text{m/s})}{6,96 \\cdot 10^{-19} \\, \\text{J}} = 2,85 \\cdot 10^{-7} \\, \\text{m} = 285 \\, \\text{nm} \\]
                    </div>
                `
                },
                {
                    titulo: "Septiembre 2015",
                    enunciado: "Un elemento tiene como número atómico Z = 26.<br> a) Escriba su configuración electrónica.<br> b) Indique el grupo y el periodo al que pertenece.<br> c) Se sabe que una muestra de 7,00 g de este elemento puro contiene 7,55 · 10<sup>22</sup> átomos de dicho elemento. Calcule su masa atómica. <br> Dato: N<sub>A</sub> = 6,022 · 10<sup>23</sup> mol<sup>-1</sup>.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Configuración electrónica:</strong><br>
                        El elemento con Z = 26 es el hierro (Fe). Su configuración electrónica es \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6 \\: 4s^2 \\: 3d^6} \\).
                    </div>
                    <div class='paso'>
                        <strong>b) Grupo y periodo:</strong><br>
                        El hierro pertenece al grupo 8 (o grupo VIIIB en la clasificación tradicional) y al periodo 4.
                    </div>
                    <div class='paso'>
                        <strong>c) Masa atómica:</strong><br>
                        Primero calculamos el número de moles:<br>
                        \\[ n = \\frac{7,55 \\cdot 10^{22}}{6,022 \\cdot 10^{23}} = 0,1254 \\, \\text{mol} \\]<br>
                        Luego, la masa atómica es:<br>
                        \\[ M = \\frac{7,00 \\, \\text{g}}{0,1254 \\, \\text{mol}} = 55,83 \\, \\text{g/mol} \\]
                    </div>
                `
                },
                {
                    titulo: "Junio 2016",
                    enunciado: "Conteste cada una de las siguientes preguntas, justificando la respuesta.<br> b) Indique el grupo al que pertenece el elemento X si la especie X<sup>2&minus;</sup> tiene 8 electrones externos. <br> d) En el sistema periódico los elementos Z = 25 y Z = 30 se encuentran en el mismo periodo. Explique cuál de ellos tiene un proceso de ionización más endotérmico.",
                    solucion: `
                    <div class='paso'>
                        <strong>b) Grupo del elemento X:</strong><br>
                        El elemento X pertenece al grupo 16 (o grupo VIA en la clasificación tradicional).
                    </div>
                    <div class='paso'>
                        <strong>d) Proceso de ionización más endotérmico:</strong><br>
                        El elemento Z = 30 tiene un proceso de ionización más endotérmico que el elemento Z = 25, debido a que Z = 30 tiene una configuración electrónica más estable (con un subnivel d completo) en comparación con Z = 25, lo que hace que sea más difícil remover un electrón.
                    </div>  
                `
                },
                {
                    titulo: "Junio 2016",
                    enunciado: "Para los elementos A (Z = 6), B (Z = 10), C (Z = 16), D (Z = 20) y E (Z = 26), conteste razonadamente:<br> a) ¿Cuál de ellos presenta electrones desapareados?<br> b) De los elementos B, C y D, ¿cuál da lugar a un ion estable con menor radio?<br> c) ¿Es la energía de ionización de C mayor que la de D?",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Elemento con electrones desapareados:</strong><br>
                        El elemento A (Z = 6) presenta electrones desapareados. Su configuración electrónica es \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^2} \\), lo que significa que tiene dos electrones en el subnivel 2p, y estos electrones no están apareados. Los demás elementos tienen configuraciones electrónicas que resultan en todos los electrones apareados.
                    </div>
                    <div class='paso'>
                        <strong>b) Ion estable con menor radio:</strong><br>
                        El elemento D (Z = 20) da lugar a un ion estable con menor radio. El ion más estable de D es D<sup>2+</sup>, que tiene una configuración electrónica similar a la de un gas noble (con 18 electrones), lo que resulta en un radio iónico más pequeño en comparación con los iones de B y C. El ion más estable de B es B<sup>2&minus;</sup> y el de C es C<sup>2&minus;</sup>, ambos con configuraciones electrónicas que no alcanzan la estabilidad de un gas noble, lo que hace que sus radios iónicos sean mayores que el de D<sup>2+</sup>.
                    </div>
                    <div class='paso'>
                        <strong>c) Energía de ionización:</strong><br>
                        La energía de ionización de C (Z = 16) es mayor que la de D (Z = 20). Esto se debe a que el elemento C tiene una configuración electrónica más estable (con un subnivel p completo) en comparación con D, lo que hace que sea más difícil remover un electrón de C que de D. Además, D tiene un número atómico mayor, lo que significa que sus electrones están más fuertemente atraídos por el núcleo, pero la configuración electrónica de C le confiere una mayor estabilidad, aumentando su energía de ionización. 
                    </div>
                `
                },
                {
                    titulo: "Septiembre 2016",
                    enunciado: "Los números atómicos de los elementos A, B y C son Z, Z+1 y Z+2, respectivamente. Si B es el gas noble que se encuentra en el tercer<br>periodo, conteste razonadamente a las siguientes cuestiones:<br> a) Identifique dichos elementos con el nombre y el símbolo.<br> b) Escriba sus configuraciones electrónicas e indique en qué grupo y periodo se encuentran A y C.<br> c) ¿Cuál es el elemento más electronegativo de los tres y cuál es el ion más estable que forma cada uno de ellos?",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Identificación de los elementos:</strong><br> 
                        A: Carbono (C)<br> 
                        B: Neón (Ne)<br> 
                        C: Oxígeno (O) 

                    </div>
                    <div class='paso'>
                        <strong>b) Configuraciones electrónicas:</strong><br>
                        A: 1s² 2s² 2p²<br> 
                        C: 1s² 2s² 2p⁴ 
                    </div>
                    <div class='paso'>
                        <strong>c) Elemento más electronegativo y iones más estables:</strong><br>
                        El elemento más electronegativo es C (oxígeno).<br>
                        Los iones más estables son: A⁻ (carbono), B (neón) y C²⁻ (oxígeno).     
                    </div>
                `
                },
                {
                    titulo: "Junio 2017",
                    enunciado: "Responda justificadamente las siguientes preguntas:b) Para cada uno de los elementos X (Z = 17), Y (Z = 19) y Z (Z = 35) indique cuál es su ion más estable y explique cuál de esos iones tiene menor radio.",
                    solucion: `
                    <div class='paso'>
                        <strong>b) Iones más estables y radio:</strong><br>
                        - Para el elemento X (Z = 17, cloro), el ion más estable es X⁻ (Cl⁻), con configuración electrónica de gas noble similar a la del argón. <br> - Para el elemento Y (Z = 19, potasio), el ion más estable es Y⁺ (K⁺), con configuración electrónica de gas noble similar a la del argón. <br>        - Para el elemento Z (Z = 35, bromo), el ion más estable es Z⁻ (Br⁻), con configuración electrónica de gas noble similar a la del kriptón. <br> El ion con menor radio es Y⁺ (K⁺), ya que al perder un electrón, el número de protones supera al número de electrones, lo que resulta en una mayor atracción nuclear y, por lo tanto, un radio más pequeño en comparación con los iones X⁻ y Z⁻, que tienen un exceso de electrones y una menor carga nuclear efectiva (Z<sup>*</sup>) y en consecuencia una menor atracción nuclear.
                    </div>         
                
                `
                },
                {
                    titulo: "Junio 2017",
                    enunciado: "Considere los elementos X (Z = 12), Y (Z = 13) y Z (Z = 16).<br>a) Escriba sus configuraciones electrónicas e identifique los tres elementos (nombre y símbolo).<br>b) Formule y razone cuál es el ion más estable para cada uno de estos elementos. ¿Cuáles son isoelectrónicos?<br>c) Razone cuál de los iones del apartado b) presenta el menor radio.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Configuraciones electrónicas e identificación de los elementos:</strong><br>
                        - X (Z = 12): Magnesio (Mg), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2} \\).<br> - Y (Z = 13): Aluminio (Al), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^1} \\).<br> - Z (Z = 16): Azufre (S), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^4} \\). 
                    </div>
                    <div class='paso'>
                        <strong>b) Iones más estables e isoelectrónicos:</strong><br>
                        - Para el elemento X (Z = 12, magnesio), el ion más estable es X<sup>2+</sup> (Mg<sup>2+</sup>), con configuración electrónica similar a la del neon. <br> - Para el elemento Y (Z = 13, aluminio), el ion más estable es Y<sup>3+</sup> (Al<sup>3+</sup>), con configuración electrónica similar a la del neon. <br> - Para el elemento Z (Z = 16, azufre), el ion más estable es Z<sup>2-</sup> (S<sup>2-</sup>), con configuración electrónica similar a la del argón. <br>
                        Los iones X<sup>2+</sup>, Y<sup>3+</sup> y Z<sup>2-</sup> son isoelectrónicos, ya que todos tienen la misma configuración electrónica que el neon.
                    </div>
                    <div class='paso'>
                        <strong>c) Radio de los iones:</strong><br>
                        El ion con menor radio es Y<sup>3+</sup> (Al<sup>3+</sup>), ya que al perder tres electrones, el número de protones supera al número de electrones, lo que resulta en una mayor atracción nuclear y, por lo tanto, un radio más pequeño en comparación con los iones X<sup>2+</sup> y Z<sup>2-</sup>, que tienen un exceso de electrones y una menor atracción nuclear.
                    </div>

                `
                },
                {
                    titulo: "Septiembre 2017",
                    enunciado: "Dados los siguientes elementos: A (Z = 11), B (Z = 17) y C (Z = 20).<br>a) Para cada uno de ellos, escriba su configuración electrónica e indique el nombre y el símbolo del elemento que está situado en el mismo<br>grupo y en el periodo anterior.<br>b) Justifique qué ion, B<sup>&minus;</sup> o C<sup>2+</sup> , tiene menor radio.<br>c) Indique razonadamente cuántos electrones con m = 0 (número cuántico magnético) tiene el elemento A.<br>d) ¿Cuál de los elementos dados necesita más energía para convertirse en un ion monopositivo? Razone su respuesta.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Configuraciones electrónicas e identificación de elementos:</strong><br>
                        - A (Z = 11): Sodio (Na), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^1} \\). El elemento situado en el mismo grupo y periodo anterior es el litio (Li, Z = 3).<br> - B (Z = 17): Cloro (Cl), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^5} \\). El elemento situado en el mismo grupo y periodo anterior es el flúor (F, Z = 9).<br> - C (Z = 20): Calcio (Ca), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6 \\: 4s^2} \\). El elemento situado en el mismo grupo y periodo anterior es el magnesio (Mg, Z = 12).    
                    </div>
                    <div class='paso'>
                        <strong>b) Ion con menor radio:</strong><br>
                        El ion C<sup>2+</sup> (Ca<sup>2+</sup>) tiene menor radio que el ion B<sup>&minus;</sup> (Cl<sup>&minus;</sup>). Esto se debe a que el ion C<sup>2+</sup> ha perdido dos electrones, lo que resulta en una mayor atracción nuclear sobre los electrones restantes, reduciendo su radio. En cambio, el ion B<sup>&minus;</sup> ha ganado un electrón, lo que aumenta la repulsión entre los electrones y reduce la atracción nuclear efectiva, aumentando su radio.
                    </div>
                    <div class='paso'>
                        <strong>c) Número de electrones con m = 0 para el elemento A:</strong><br>
                        El elemento A (Z = 11) tiene la configuración electrónica \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^1} \\). Los electrones con m = 0 son aquellos que se encuentran en orbitales s y p con m = 0. En este caso, los electrones con m = 0 son: 2 electrones en el orbital 1s, 2 electrones en el orbital 2s, y 3 electrones en el orbital 2p. Por lo tanto, el elemento A tiene un total de 7 electrones con m = 0.
                    </div>
                    <div class='paso'>
                        <strong>d) Elemento que necesita más energía para convertirse en un ion monopositivo:</strong><br>
                        El elemento C (calcio) necesita más energía para convertirse en un ion monopositivo (Ca<sup>+</sup>) que el elemento A (sodio) para convertirse en Na<sup>+</sup>. Esto se debe a que el calcio tiene una configuración electrónica más estable (con un subnivel s completo) en comparación con el sodio, lo que hace que sea más difícil remover un electrón del calcio que del sodio. Además, el calcio tiene un número atómico mayor, lo que significa que sus electrones están más fuertemente atraídos por el núcleo, aumentando la energía necesaria para ionizarlo.
                    </div>
                `
                },
                {
                    titulo: "Septiembre 2017",
                    enunciado: "Para los tres elementos con números atómicos Z = 6, Z = 11 y Z = 14:<br>a) Escriba sus configuraciones electrónicas e identifíquelos con su nombre y su símbolo.<br>b) Determine el grupo y el periodo de cada elemento.<br>c) Para el elemento con Z = 14 detalle los posibles números cuánticos de su último electrón.<br>d) Justifique cómo varía en la tabla periódica el radio atómico y ordene los elementos del enunciado en orden decreciente de radio<br>atómico.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Configuraciones electrónicas e identificación de elementos:</strong><br>
                        - Z = 6: Carbono (C), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^2} \\).<br>
                        - Z = 11: Sodio (Na), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^1} \\).<br>
                        - Z = 14: Silicio (Si), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^2} \\).
                    </div>
                    <div class='paso'>
                        <strong>b) Grupo y periodo:</strong><br>
                        - Carbono (Z = 6): Grupo 14, Periodo 2.<br>
                        - Sodio (Z = 11): Grupo 1, Periodo 3.<br>
                        - Silicio (Z = 14): Grupo 14, Periodo 3.
                    </div>
                    <div class='paso'>
                        <strong>c) Números cuánticos del último electrón del elemento con Z = 14:</strong><br>
                        Para el silicio (Si), el último electrón se encuentra en el orbital 3p. Los posibles números cuánticos son:<br>
                        - Número cuántico principal (n): 3<br>
                        - Número cuántico azimutal (l): 1 (ya que es un orbital p)<br>
                        - Número cuántico magnético (m): -1, 0, +1 (tres posibles valores para l=1)<br>
                        - Número cuántico de spin (s): +½ o &minus;½ (puede ser cualquiera de los dos)
                    </div>
                    <div class='paso'>
                        <strong>d) Variación del radio atómico y orden decreciente:</strong><br>
                        En la tabla periódica, el radio atómico disminuye de izquierda a derecha a lo largo de un periodo debido al aumento de la carga nuclear efectiva, que atrae los electrones más cerca del núcleo. Por otro lado, el radio atómico aumenta de arriba hacia abajo en un grupo debido a la adición de capas electrónicas. Por lo tanto, el orden decreciente de radio atómico para los elementos dados es: Na > Si > C.
                    </div>
                `
                },
                {
                    titulo: "Junio 2018",
                    enunciado: "Un elemento químico posee una configuración electrónica \\( \\mathrm{1s^2 \\: 2s^2 \\:  2p^6 \\: 3s^2 \\: 3p^6 \\: 4s^2 \\: 3d^6} \\). Justifique si son verdaderas o falsas las<br>siguientes afirmaciones:<br>a) Pertenece al grupo 17 del Sistema Periódico.<br>b) Se encuentra situado en el tercer periodo.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Pertenece al grupo 17:</strong><br>
                        Falso. La configuración electrónica dada corresponde al elemento con Z = 26, que es el hierro (Fe). El hierro pertenece al grupo 8 del Sistema Periódico, no al grupo 17.
                    </div>
                    <div class='paso'>
                        <strong>b) Se encuentra situado en el tercer periodo:</strong><br>
                        Falso. El hierro (Z = 26) se encuentra en el cuarto periodo del Sistema Periódico, ya que su configuración electrónica incluye electrones en el nivel n = 4 (4s^2).
                    </div>
                `
                },
                {
                    titulo: "Junio 2018",
                    enunciado: "Considere los elementos Mg y Cl:<br>a) Escriba la configuración electrónica de Mg<sup>2+</sup> y Cl<sup>&minus;</sup>.<br>b) Indique los números cuánticos del electrón más externo del Mg.<br>c) Ordene los elementos por orden creciente de tamaño y justifique la respuesta.<br>d) Ordene los elementos por orden creciente de primera energía de ionización y justifique la respuesta.",
                    solucion: `
                <div class='paso'>
                    <strong>a) Configuración electrónica de Mg<sup>2+</sup>y Cl<sup>&minus;</sup>:</strong><br>
                    - Para Mg (Z=12), la configuración electrónica es \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2} \\). Al perder dos electrones para formar Mg<sup>2+</sup>, la configuración se convierte en \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6} \\). <br>
                    - Para Cl (Z=17), la configuración electrónica es \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^5} \\). Al ganar un electrón para formar Cl<sup>&minus;</sup>, la configuración se convierte en \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6} \\).
                </div>
                <div class='paso'>
                    <strong>b) Números cuánticos del electrón más externo del Mg:</strong><br>
                    El electrón más externo de Mg se encuentra en el orbital 3s. Los números cuánticos para este electrón son:<br>
                    - Número cuántico principal (n): 3<br>
                    - Número cuántico azimutal (l): 0 (ya que es un orbital s)<br>
                    - Número cuántico magnético (m): 0 (único valor posible para l=0)<br>
                    - Número cuántico de spin (s): +½ o &minus;½ (puede ser cualquiera de los dos)
                </div>
                <div class='paso'>
                    <strong>c) Orden de tamaño:</strong><br>
                    El orden creciente de tamaño es: Mg<sup>2+</sup> < Cl<sup>&minus;</sup> < Mg. Esto se debe a que Mg<sup>2+</sup> ha perdido dos electrones, lo que reduce su radio debido a la mayor atracción nuclear sobre los electrones restantes. Cl<sup>&minus;</sup> ha ganado un electrón, aumentando la repulsión entre los electrones y aumentando su radio. Mg, en estado neutro, tiene un radio intermedio.
                </div>
                <div class='paso'>
                    <strong>d) Orden de primera energía de ionización:</strong><br>
                    El orden creciente de primera energía de ionización es: Cl < Mg. Esto se debe a que Cl tiene una mayor afinidad electrónica y es más fácil remover un electrón de Cl que de Mg, que tiene una configuración más estable con un subnivel completo en 3s. Por lo tanto, la energía necesaria para ionizar Cl es menor que la de Mg.
                </div>
            `
                },
                {
                    titulo: "Julio 2018",
                    enunciado: "Responda justificadamente a las siguientes preguntas:<br>a) Para los átomos A (Z = 7) y B (Z = 26) escriba la configuración electrónica, indique el número de electrones desapareados y los<br>orbitales en los que se encuentran.<br>b) Los iones K<sup>+</sup> y Cl<sup>&minus;</sup> tienen aproximadamente el mismo valor de sus radios iónicos, alrededor de 0,134 nm. Justifique si sus radios atómicos serán mayores, menores o iguales a 0,134 nm. <br> Datos. R<sub>H</sub> = 1,097 · 10<sup>7</sup> m<sup>&minus;1</sup> .",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Configuración electrónica y electrones desapareados:</strong><br>
                        - Para el átomo A (Z = 7, nitrógeno), la configuración electrónica es \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^3} \\). Tiene 3 electrones desapareados, que se encuentran en los orbitales 2p. <br>
                        - Para el átomo B (Z = 26, hierro), la configuración electrónica es \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6 \\: 4s^2 \\: 3d^6} \\). Tiene 4 electrones desapareados, que se encuentran en los orbitales 3d.
                    </div>
                    <div class='paso'>
                        <strong>b) Radios atómicos de K y Cl:</strong><br>
                        Los radios atómicos de K y Cl serán mayores que 0,134 nm. Esto se debe a que K<sup>+</sup> y Cl<sup>&minus;</sup> son iones, y al formar iones, los átomos pierden o ganan electrones, lo que afecta su tamaño. El radio atómico de K es mayor que el radio iónico de K<sup>+</sup>, y el radio atómico de Cl es mayor que el radio iónico de Cl<sup>&minus;</sup>. Por lo tanto, ambos radios atómicos serán mayores que 0,134 nm.
                    </div>
                `
                },
                {
                    titulo: "Junio 2019",
                    enunciado: "Considere los átomos: A (Z = 11), B (Z = 14) y C (Z = 17) y responda las siguientes preguntas:<br>a) Para cada uno de ellos, escriba la configuración electrónica, especifique el grupo y periodo del sistema periódico al que pertenece e<br>identifique con nombre y símbolo cada elemento.<br>b) Ordene los elementos en orden creciente de su afinidad electrónica. Razone la respuesta.<br>c) ¿Por qué los átomos presentan espectros de líneas y no continuos?",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Configuración electrónica, grupo y periodo:</strong><br>
                        - A (Z = 11): Sodio (Na), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^1} \\). Grupo 1, Periodo 3.<br>
                        - B (Z = 14): Silicio (Si), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^2} \\). Grupo 14, Periodo 3.<br>
                        - C (Z = 17): Cloro (Cl), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^5} \\). Grupo 17, Periodo 3.
                    </div>
                    <div class='paso'>
                        <strong>b) Orden creciente de afinidad electrónica:</strong><br>
                        El orden creciente de afinidad electrónica es: A (Na) < B (Si) < C (Cl). Esto se debe a que la afinidad electrónica aumenta a medida que nos movemos de izquierda a derecha en un periodo del sistema periódico. El sodio tiene una baja afinidad electrónica, el silicio tiene una afinidad intermedia y el cloro tiene una alta afinidad electrónica debido a su tendencia a ganar un electrón para completar su capa de valencia.
                    </div>
                    <div class='paso'>
                        <strong>c) Espectros de líneas:</strong><br>
                        Los átomos presentan espectros de líneas y no continuos porque los electrones en un átomo solo pueden ocupar niveles de energía discretos. Cuando un electrón salta entre estos niveles, emite o absorbe fotones con energías específicas, lo que resulta en líneas espectrales en lugar de un espectro continuo. Cada línea corresponde a una transición específica entre niveles de energía, lo que da lugar a un patrón único para cada elemento.
                    </div>
                `
                },
                {
                    titulo: "Julio 2019",
                    enunciado: "Considere los elementos con números atómicos: Z = 4, Z = 8 y Z = 13. <br> a) Escriba sus configuraciones electrónicas e identifíquelos con su nombre y su símbolo. <br> b) Razone para cada uno de los elementos cuál es su ion más estable. <br> c) Justifique si el ion más estable del elemento Z = 4 tendrá mayor o menor radio que el de su átomo.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Configuraciones electrónicas e identificación de elementos:</strong><br>
                        - Z = 4: Berilio (Be), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2} \\).<br>
                        - Z = 8: Oxígeno (O), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^4} \\).<br>
                        - Z = 13: Aluminio (Al), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^1} \\).
                    </div>
                    <div class='paso'>
                        <strong>b) Iones más estables:</strong><br>
                        - Para el berilio (Be), el ion más estable es Be<sup>2+</sup>, ya que pierde dos electrones para alcanzar la configuración de gas noble (1s²).<br>
                        - Para el oxígeno (O), el ion más estable es O<sup>2-</sup>, ya que gana dos electrones para alcanzar la configuración de gas noble (1s² 2s² 2p⁶).<br>
                        - Para el aluminio (Al), el ion más estable es Al<sup>3+</sup>, ya que pierde tres electrones para alcanzar la configuración de gas noble (1s² 2s² 2p⁶).
                    </div>
                    <div class='paso'>
                        <strong>c) Radio del ion más estable del elemento Z = 4:</strong><br>
                        El ion Be<sup>2+</sup> tendrá un radio menor que el del átomo de berilio. Esto se debe a que al perder dos electrones, el número de protones en el núcleo supera al número de electrones, lo que aumenta la atracción nuclear sobre los electrones restantes y reduce el tamaño del ion en comparación con el átomo neutro.
                    </div>
                `
                },
                {
                    titulo: "Junio 2020",
                    enunciado: "Considere los elementos aluminio y magnesio.<br> a) Escriba la configuración electrónica de cada elemento.<br> b) Justifique qué elemento presenta mayor radio atómico. <br> c) Explique si la segunda energía de ionización del aluminio es mayor, igual o menor que la primera. <br> d) Sabiendo que la primera energía de ionización del magnesio es 738,1 kJ · mol<sup>&minus;1</sup> , razone si es posible ionizar un mol de átomos de magnesio gaseosos con una energía de 500 kJ.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Configuración electrónica:</strong><br>
                        - Aluminio (Al, Z = 13): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^1} \\)<br>
                        - Magnesio (Mg, Z = 12): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2} \\)
                    </div>
                    <div class='paso'>
                        <strong>b) Mayor radio atómico:</strong><br>
                        El magnesio presenta un mayor radio atómico que el aluminio. Esto se debe a que el magnesio tiene menos protones en su núcleo (Z = 12) en comparación con el aluminio (Z = 13), lo que resulta en una menor atracción nuclear sobre los electrones y, por lo tanto, un radio más grande.
                    </div>
                    <div class='paso'>
                        <strong>c) Segunda energía de ionización del aluminio:</strong><br>
                        La segunda energía de ionización del aluminio es mayor que la primera. Esto se debe a que después de perder un electrón, el aluminio se convierte en Al<sup>+</sup>, que tiene una configuración electrónica más estable (1s² 2s² 2p⁶ 3s²). Remover un segundo electrón requiere romper esta estabilidad, lo que requiere más energía.
                    </div>
                    <div class='paso'>
                        <strong>d) Ionización del magnesio con 500 kJ:</strong><br>
                        No es posible ionizar un mol de átomos de magnesio gaseosos con una energía de 500 kJ, ya que la primera energía de ionización del magnesio es 738,1 kJ · mol<sup>&minus;1</sup>.
                    </div>
                `
                },
                {
                    titulo: "Septiembre 2020",
                    enunciado: "Considere los siguientes elementos: A (nitrogenoide del periodo 3), B (Z = 11), C (subnivel 3p con solo dos electrones) y D (periodo 2, grupo 15).<br>a) Identifique cada elemento con su nombre y símbolo.<br>b) Determine la configuración electrónica de cada elemento. <br>c) Justifique si la segunda energía de ionización del elemento A es menor que la del B.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Identificación de los elementos:</strong><br>
                        - A: Fósforo (P)<br>
                        - B: Sodio (Na)<br>
                        - C: Azufre (S)<br>
                        - D: Nitrógeno (N)
                    </div>
                    <div class='paso'>
                        <strong>b) Configuración electrónica:</strong><br>
                        - A (P, Z = 15): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^3} \\)<br>
                        - B (Na, Z = 11): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^1} \\)<br>
                        - C (S, Z = 16): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^4} \\)<br>
                        - D (N, Z = 7): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^3} \\)
                    </div>
                    <div class='paso'>
                        <strong>c) Comparación de la segunda energía de ionización:</strong><br>
                        La segunda energía de ionización del elemento A (fósforo) es menor que la del elemento B (sodio). Esto se debe a que después de perder un electrón, el fósforo se convierte en P<sup>+</sup>, que aún tiene una configuración electrónica relativamente estable. En cambio, el sodio, al perder su único electrón de valencia, se convierte en Na<sup>+</sup>, que tiene una configuración de gas noble (1s² 2s² 2p⁶), lo que hace que la segunda ionización requiera romper esta estabilidad, resultando en una mayor energía de ionización.
                    </div>
                `
                },
                {
                    titulo: "Junio 2021",
                    enunciado: "A.1. Dados los elementos A (Z = 17), B (Z = 35), C (Z = 19) y D (Z = 11):<br>a) Escriba la configuración electrónica de cada uno de ellos.<br>b) Justifique cuáles se encuentran en el mismo periodo.<br>c) Razone si el elemento D (Z = 11) presenta mayor afinidad electrónica que el A (Z = 17).",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Configuración electrónica:</strong><br>
                        - A (Z = 17, Cl): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^5} \\)<br>
                        - B (Z = 35, Br): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6 \\: 4s^2 \\: 3d^{10} \\: 4p^5} \\)<br>
                        - C (Z = 19, K): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6 \\: 4s^1} \\)<br>
                        - D (Z = 11, Na): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^1} \\)
                    </div>
                    <div class='paso'>
                        <strong>b) Elementos en el mismo periodo:</strong><br>
                        Los elementos A (Cl) y C (K) se encuentran en el mismo periodo (periodo 3), mientras que B (Br) está en el periodo 4 y D (Na) también está en el periodo 3.
                    </div>
                    <div class='paso'>
                        <strong>c) Comparación de afinidad electrónica:</strong><br>
                        El elemento A (Cl) presenta mayor afinidad electrónica que el elemento D (Na). Esto se debe a que el cloro es un halógeno con una alta tendencia a ganar un electrón para completar su capa de valencia, mientras que el sodio es un metal alcalino que tiende a perder un electrón. Por lo tanto, la afinidad electrónica del cloro es significativamente mayor que la del sodio.
                    </div>
                `
                },
                {
                    titulo: "Julio 2021",
                    enunciado: "A.1. Responda las siguientes cuestiones:<br>a) Considere los elementos: A (\\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 }\\)), B (\\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^2}\\)  ) y C (\\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^4}\\) ). Identifique cada elemento y especifique el grupo y el periodo al que pertenece.<br> b) Considere los elementos D (\\( \\mathrm{1s^2 \\: 2s^1 }\\) ) y E (\\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6}\\) ). La primera energía de ionización de uno de ellos es 2080,7 kJ · mol<sup>&minus;1</sup> y la del otro 520,2 kJ · mol<sup>&minus;1</sup> . Justifique qué valor de la energía de ionización corresponde a cada uno.<br>c) ¿Cuántos electrones desapareados existen en los átomos de Na, N y Ne?",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Identificación de elementos, grupo y periodo:</strong><br>
                        - A: Magnesio (Mg), Grupo 2, Periodo 3.<br>
                        - B: Carbono (C), Grupo 14, Periodo 2.<br>
                        - C: Azufre (S), Grupo 16, Periodo 3.
                    </div>
                    <div class='paso'>
                        <strong>b) Energía de ionización:</strong><br>
                        - D: Litio (Li), primera energía de ionización = 520,2 kJ · mol<sup>&minus;1</sup>.<br>
                        - E: Neón (Ne), primera energía de ionización = 2080,7 kJ · mol<sup>&minus;1</sup>.<br>
                        Justificación: El neón es un gas noble con una configuración electrónica estable, por lo que requiere más energía para remover un electrón. En cambio, el litio tiene un electrón de valencia menos estable, por lo que requiere menos energía para ionizarlo.
                    </div>
                    <div class='paso'>
                        <strong>c) Electrones desapareados:</strong><br>
                        - Na (Sodio): 1 electrón desapareado (en el orbital 3s).<br>
                        - N (Nitrógeno): 3 electrones desapareados (en los orbitales 2p).<br>
                        - Ne (Neón): 0 electrones desapareados (configuración completa).
                    </div>
                `
                },
                {
                    titulo: "Junio 2022",
                    enunciado: "A.1. Considere los elementos: A (Z = 9) y B (Z = 13).<br> a) Escriba la configuración electrónica de cada uno. <br>b) Identifique el nombre, símbolo, grupo y periodo de cada elemento. <br>c) Justifique cuál es el elemento de menor energía de ionización.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Configuración electrónica:</strong><br>
                        - A (Z = 9, Flúor): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^5} \\)<br>
                        - B (Z = 13, Aluminio): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^1} \\)
                    </div>
                    <div class='paso'>
                        <strong>b) Identificación de elementos, grupo y periodo:</strong><br>
                        - A: Flúor (F), Grupo 17, Periodo 2.<br>
                        - B: Aluminio (Al), Grupo 13, Periodo 3.
                    </div>
                    <div class='paso'>
                        <strong>c) Elemento de menor energía de ionización:</strong><br>
                        El elemento B (Aluminio) tiene menor energía de ionización que el elemento A (Flúor). Esto se debe a que el aluminio es un metal con un electrón de valencia más alejado del núcleo y menos fuertemente atraído, lo que facilita su remoción. En cambio, el flúor es un no metal con una alta afinidad electrónica y una fuerte atracción nuclear sobre sus electrones, lo que hace que sea más difícil remover un electrón de él.
                    </div>
                `

                },
                {
                    titulo: "Julio 2022",
                    enunciado: "A.1. Considere los elementos A (un halógeno cuyo anión contiene 18 e<sup>&minus;</sup> ), B (un metal alcalinotérreo del tercer periodo) y C (un elemento del grupo 16 que contiene 16 e<sup>&minus;</sup> ). <br> a) Identifique los elementos A, B y C con su nombre y símbolo, y escriba la configuración electrónica de cada uno de ellos en su estado fundamental. <br>b) Justifique si las siguientes afirmaciones son verdaderas o falsas: <br> &nbsp; &nbsp; b.1. El elemento C es el que presenta una mayor energía de ionización. <br> &nbsp; &nbsp; b.2. El elemento con mayor radio atómico es el B.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Identificación de elementos y configuración electrónica:</strong><br>
                        - A: Cloro (Cl), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^5} \\)<br>
                        - B: Magnesio (Mg), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2} \\)<br>
                        - C: Azufre (S), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^4} \\)
                    </div>
                    <div class='paso'>
                        <strong>b) Justificación de afirmaciones:</strong><br>
                        - b.1. Verdadero. El elemento C (Azufre) tiene una mayor energía de ionización que el elemento B (Magnesio) debido a que el azufre es un no metal con una mayor atracción nuclear sobre sus electrones, lo que hace más difícil remover un electrón.<br>
                        - b.2. Verdadero. El elemento B (Magnesio) tiene un mayor radio atómico que el elemento A (Cloro) y el elemento C (Azufre). Esto se debe a que el magnesio es un metal alcalinotérreo con menos protones en su núcleo en comparación con los no metales, lo que resulta en una menor atracción nuclear sobre sus electrones y, por lo tanto, un radio más grande.
                    </div>
                `
                },
                {
                    titulo: "Junio 2023",
                    enunciado: "A.1. Los iones X<sup>2+</sup> e Y<sup>-</sup> presentan las siguientes configuraciones electrónicas: X<sup>2+</sup> (\\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6 }\\) ) e Y<sup>&minus;</sup> (\\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6 }\\) ). Responda a las siguientes cuestiones. <br>a) Justifique el número atómico de los elementos X e Y, e indique su posición (periodo y grupo) en el sistema periódico. <br>b) Razone qué elemento, X o Y, tiene mayor radio atómico.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Número atómico y posición en el sistema periódico:</strong><br>
                        - Para el ion X<sup>2+</sup>, la configuración electrónica indica que ha perdido 2 electrones. La configuración de X<sup>2+</sup> es \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6 }\\), lo que corresponde a un total de 18 electrones. Por lo tanto, el número atómico de X es Z = 20 (ya que ha perdido 2 electrones). El elemento con Z = 20 es el Calcio (Ca), que se encuentra en el Grupo 2 y Periodo 4 del sistema periódico.<br>
                        - Para el ion Y<sup>-</sup>, la configuración electrónica indica que ha ganado 1 electrón. La configuración de Y<sup>-</sup> es \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6 }\\), lo que corresponde a un total de 18 electrones. Por lo tanto, el número atómico de Y es Z = 17 (ya que ha ganado 1 electrón). El elemento con Z = 17 es el Cloro (Cl), que se encuentra en el Grupo 17 y Periodo 3 del sistema periódico.
                    </div>
                    <div class='paso'>
                        <strong>b) Comparación de radios atómicos:</strong><br>
                        El elemento Y (Cloro) tiene un mayor radio atómico que el elemento X (Calcio). Esto se debe a que el calcio es un metal alcalinotérreo con una mayor carga nuclear efectiva, lo que atrae más fuertemente a sus electrones y reduce su tamaño. En cambio, el cloro es un no metal con menos protones en su núcleo, lo que resulta en una menor atracción sobre sus electrones y, por lo tanto, un radio atómico más grande.
                    </div>
                `
                },
                {
                    titulo: "Julio 2023",
                    enunciado: "A.1. Considere los elementos: A (Z = 17) y B (Z = 12). <br>a) Escriba la configuración electrónica e indique el nombre, símbolo, grupo y periodo de ambos. <br>b) Justifique cuál es el elemento de mayor energía de ionización. <br>c) Justifique cuál es el ion más estable de cada elemento y escriba sus configuraciones electrónicas. <br>d) Explique si el radio del ion más estable de cada elemento es mayor o menor que el de su respectivo átomo neutro.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Configuración electrónica e identificación de elementos:</strong><br>
                        - A (Z = 17, Cloro): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^5} \\), Grupo 17, Periodo 3.<br>
                        - B (Z = 12, Magnesio): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2} \\), Grupo 2, Periodo 3.
                    </div>
                    <div class='paso'>
                        <strong>b) Mayor energía de ionización:</strong><br>
                        El elemento A (Cloro) tiene mayor energía de ionización que el elemento B (Magnesio). Esto se debe a que el cloro es un no metal con una alta afinidad electrónica y una fuerte atracción nuclear sobre sus electrones, lo que hace más difícil remover un electrón. En cambio, el magnesio es un metal con un electrón de valencia más alejado del núcleo y menos fuertemente atraído, lo que facilita su remoción.
                    </div>
                    <div class='paso'>
                        <strong>c) Iones más estables y configuraciones electrónicas:</strong><br>
                        - El ion más estable del cloro es Cl<sup>-</sup>, con configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6} \\).<br>
                        - El ion más estable del magnesio es Mg<sup>2+</sup>, con configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6} \\).
                    </div>
                    <div class='paso'>
                        <strong>d) Comparación de radios:</strong><br>
                        - El radio del ion Cl<sup>-</sup> es mayor que el del átomo neutro de cloro. Esto se debe a que al ganar un electrón, la repulsión entre los electrones aumenta, lo que expande el tamaño del ion.<br>
                        - El radio del ion Mg<sup>2+</sup> es menor que el del átomo neutro de magnesio. Esto se debe a que al perder dos electrones, la carga nuclear efectiva sobre los electrones restantes aumenta, lo que atrae más fuertemente a los electrones y reduce el tamaño del ion.
                    </div>
                `

                },
                {
                    titulo: "Junio 2024",
                    enunciado: "A.1. Considere los elementos A, B y C, con números atómicos Z, Z+1 y Z+2, respectivamente. Sabiendo que B es el gas noble del segundo periodo, responda a las siguientes preguntas: <br>a) Para cada elemento identifique su nombre y símbolo, escriba su configuración electrónica, e indique cuántos electrones desapareados tiene. <br>b) Justifique cuál es el ion más estable de los elementos A y C, indicando el tipo de ion y el símbolo. <br>c) Razone cuál de ellos tiene el mayor radio iónico.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Identificación de elementos, configuración electrónica y electrones desapareados:</strong><br>
                        - A (Z = 8, Oxígeno): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^4} \\), 2 electrones desapareados.<br>
                        - B (Z = 9, Flúor): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^5} \\), 1 electrón desapareado.<br>
                        - C (Z = 10, Neón): \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6} \\), 0 electrones desapareados.
                    </div>
                    <div class='paso'>
                        <strong>b) Iones más estables:</strong><br>
                        - El ion más estable del oxígeno (A) es O<sup>2-</sup>, ya que gana dos electrones para completar su capa de valencia.<br>
                        - El ion más estable del neón (C) es Ne, ya que es un gas noble y no forma iones en condiciones normales.
                    </div>
                    <div class='paso'>
                        <strong>c) Comparación de radios iónicos:</strong><br>
                        El oxígeno (O<sup>2-</sup>) tiene un mayor radio iónico que el neón (Ne). Esto se debe a que al ganar electrones, la repulsión entre los electrones aumenta, lo que expande el tamaño del ion. En cambio, el neón no forma iones y mantiene su radio atómico relativamente pequeño.
                    </div>
                `

                },
                {
                    titulo: "Julio 2024",
                    enunciado: "A.1. Dados cuatro elementos: A, B, C y D, cuyos electrones de mayor energía poseen una configuración en su estado fundamental de: \\( \\mathrm{3s^1 }\\), \\( \\mathrm{3p^1 }\\), \\( \\mathrm{3p^4 }\\) y \\( \\mathrm{3p^5 }\\), respectivamente: <br>a) Identifique cada elemento con su configuración electrónica, nombre, símbolo, grupo y periodo. <br>b) Justifique cuál presenta mayor energía de ionización. <br>c) Escriba el símbolo de sus iones más estables y ordene esos iones en orden decreciente de su tamaño, justificando la respuesta. <br>d) Indique qué tipo de enlace se establece entre A y C y entre D con D. Escriba las fórmulas de las especies formadas.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Identificación de elementos:</strong><br>
                        - A: Sodio (Na), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^1} \\), Grupo 1, Periodo 3.<br>
                        - B: Aluminio (Al), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^1} \\), Grupo 13, Periodo 3.<br>
                        - C: Azufre (S), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^4} \\), Grupo 16, Periodo 3.<br>
                        - D: Cloro (Cl), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^5} \\), Grupo 17, Periodo 3.
                    </div>
                    <div class='paso'>
                        <strong>b) Mayor energía de ionización:</strong><br>
                        El elemento D (Cloro) presenta la mayor energía de ionización debido a que es un halógeno con una alta afinidad electrónica y una fuerte atracción nuclear sobre sus electrones, lo que hace más difícil remover un electrón.
                    </div>
                    <div class='paso'>
                        <strong>c) Iones más estables y orden de tamaño:</strong><br>
                        - A: Na<sup>+</sup>, configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6} \\)<br>
                        - B: Al<sup>3+</sup>, configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6} \\)<br>
                        - C: S<sup>2-</sup>, configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6} \\)<br>
                        - D: Cl<sup>-</sup>, configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^6} \\)<br>
                        Orden decreciente de tamaño de los iones: S<sup>2-</sup> > Cl<sup>-</sup> > Na<sup>+</sup> > Al<sup>3+</sup>. Esto se debe a que los aniones (S<sup>2-</sup> y Cl<sup>-</sup>) tienen más electrones que protones, lo que aumenta la repulsión entre electrones y expande el tamaño del ion. Los cationes (Na<sup>+</sup> y Al<sup>3+</sup>) tienen menos electrones que protones, lo que aumenta la atracción nuclear sobre los electrones restantes y reduce el tamaño del ion.
                    </div>
                    <div class='paso'>
                        <strong>d) Tipo de enlace y fórmulas de las especies formadas:</strong><br>
                        - Entre A (Na) y C (S): Se establece un enlace iónico, formando el compuesto Na<sub>2</sub>S.<br>
                        - Entre D (Cl) y D (Cl): Se establece un enlace covalente, formando la molécula Cl<sub>2</sub>.
                    </div>
                `
                },
                {
                    titulo: "Julio 2025",
                    enunciado: "2A. Considere los elementos X (el metal alcalino cuyo monocatión contiene 10 e<sup>&minus;</sup>), Y (el elemento del grupo 14 del segundo periodo) y Z (el halógeno del tercer periodo). Responda a las siguientes cuestiones: <br>a) Identifique los elementos X, Y y Z con nombre y símbolo, y escriba la configuración electrónica de cada uno de ellos en su estado fundamental. <br>b) Razone si las siguientes afirmaciones son verdaderas o falsas: <br> &nbsp; &nbsp; i) El elemento Z es el que presenta el mayor radio atómico. <br> &nbsp; &nbsp; ii) El elemento X es el que posee una menor afinidad electrónica.",
                    solucion: `
                    <div class='paso'>
                        <strong>a) Identificación de elementos y configuración electrónica:</strong><br>
                        - X: Sodio (Na), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^1} \\)<br>
                        - Y: Carbono (C), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^2} \\)<br>
                        - Z: Cloro (Cl), configuración electrónica: \\( \\mathrm{1s^2 \\: 2s^2 \\: 2p^6 \\: 3s^2 \\: 3p^5} \\)
                    </div>
                    <div class='paso'>
                        <strong>b) Justificación de afirmaciones:</strong><br>
                        - i) Falso. El elemento Z (Cloro) no presenta el mayor radio atómico. El elemento X (Sodio) tiene un mayor radio atómico debido a que es un metal alcalino con menos protones en su núcleo, lo que resulta en una menor atracción nuclear sobre sus electrones y, por lo tanto, un radio más grande.<br>
                        - ii) Verdadero. El elemento X (Sodio) posee una menor afinidad electrónica en comparación con el elemento Z (Cloro). Esto se debe a que el sodio tiende a perder un electrón para formar un catión estable, mientras que el cloro tiende a ganar un electrón para completar su capa de valencia, lo que le confiere una mayor afinidad electrónica.
                    </div>
                `
                },
                {
                    titulo: "Junio 2026",
                    enunciado: "La configuración electrónica de un elemento X es [Ne]ns<sup>1</sup>. <br>a) Indique el valor de “n”, el nombre y símbolo del elemento X, así como el grupo y el período a los que pertenece. Razone cómo varía la energía de ionización a lo largo de un grupo de la tabla periódica. <br> b) Justifique cuál es el catión más estable que puede formar el elemento X. Indique un catión divalente, un elemento neutro y un anión monovalente que sean isoelectrónicos con el catión más estable del elemento X.",
                    solucion: `
                
            `
                }
            ]
        }
    }
};