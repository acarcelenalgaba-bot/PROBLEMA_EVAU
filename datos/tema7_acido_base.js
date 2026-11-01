if (typeof baseDatosTemas === 'undefined') {
    var baseDatosTemas = {};
}

baseDatosTemas["tema7_acidobase"] = {
    id: "tema7_acidobase",
    titulo: "Tema 7: Equilibrio Ácido-Base",
    deshabilitado: false,
    secciones: {
        "acidos_bases_debiles": {
            nombre: "1. Ácidos y bases débiles (pH, Ka, Kb y grado de disociación)",
            problemas: [
                {
                    titulo: "Junio 2018 - Ácido débil HA",
                    enunciado: "El pH de una disolución de concentración 0,5 M de un ácido débil HA es 3,0.<br>a) Calcule el valor de la constante Ka del ácido.<br>b) Calcule el grado de disociación de una disolución 0,1 M del mismo ácido.<br>c) Calcule los moles de una base fuerte, BOH, necesarios para neutralizar 250 mL de una disolución 0,1 M de un ácido fuerte monoprotótico.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Constante Ka:</strong><br>
                            \\[\\ce{HA + H2O <=> A- + H3O+}\\]
                            \\[[\\ce{H3O+}] = 10^{-3}\\ \\text{M}\\]
                            \\[K_a = \\frac{[\\ce{A-}][\\ce{H3O+}]}{[\\ce{HA}]} = \\frac{(10^{-3})^2}{0,5 - 10^{-3}} \\approx \\boxed{2 \\cdot 10^{-6}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Grado de disociación en disolución 0,1 M:</strong><br>
                            \\[K_a = \\frac{c\\alpha^2}{1-\\alpha} \\approx c\\alpha^2 \\Rightarrow \\alpha = \\sqrt{\\frac{2 \\cdot 10^{-6}}{0,1}} = \\boxed{3,16 \\cdot 10^{-3}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Moles de BOH para neutralizar:</strong><br>
                            \\[n_{\\ce{BOH}} = n_{\\ce{HA}} = 0,250 \\cdot 0,1 = \\boxed{2,5 \\cdot 10^{-2}\\ \\text{mol}}\\]
                        </div>
                    `
                },
                {
                    titulo: "Junio 2018 - Ácidos y bases: HNO₂, NH₃ y HSO₄⁻",
                    enunciado: "Responda a las siguientes cuestiones:<br>a) Escriba los equilibrios de disociación en agua de HNO₂, NH₃ y HSO₄⁻ e indique si actúan como ácido o como base.<br>b) Se dispone de una disolución de ácido acético 0,2 M y otra de igual concentración de ácido salicílico. Justifique cuál de las dos tiene menor pH.<br>c) Calcule el pH de una disolución de amoniaco 0,45 M.<br>Datos: Ka(HNO₂) = 5,6·10⁻⁴; Ka(HSO₄⁻) = 1,0·10⁻²; Ka(ácido acético) = 1,8·10⁻⁵; Ka(ácido salicílico) = 1,1·10⁻³; Kb(amoniaco) = 1,8·10⁻⁵.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Equilibrios de disociación:</strong><br>
                            \\[\\ce{HNO2 + H2O <=> NO2- + H3O+}\\]
                            El HNO₂ actúa como <strong>ácido</strong>.<br>
                            \\[\\ce{NH3 + H2O <=> NH4+ + OH-}\\]
                            El NH₃ actúa como <strong>base</strong>.<br>
                            \\[\\ce{HSO4- + H2O <=> SO4^{2-} + H3O+}\\]
                            \\[\\ce{HSO4- + H2O <=> H2SO4 + OH-}\\]
                            El HSO₄⁻ actúa como <strong>anfótero</strong> (puede ceder o captar protones), aunque predomina su carácter ácido (Ka = 10⁻²).
                        </div>
                        <div class='paso'>
                            <strong>b) Menor pH:</strong><br>
                            A igual concentración, el ácido con mayor Ka se disocia más y produce mayor [H₃O⁺], por lo que tendrá menor pH. Como \\(K_a(\\text{salicílico}) = 1,1 \\cdot 10^{-3} > K_a(\\text{acético}) = 1,8 \\cdot 10^{-5}\\), el <strong>ácido salicílico</strong> tiene menor pH.
                        </div>
                        <div class='paso'>
                            <strong>c) pH de amoniaco 0,45 M:</strong><br>
                            \\[\\ce{NH3 + H2O <=> NH4+ + OH-}\\]
                            \\[K_b = \\frac{[\\ce{NH4+}][\\ce{OH-}]}{[\\ce{NH3}]} \\approx \\frac{[\\ce{OH-}]^2}{c} \\Rightarrow [\\ce{OH-}] = \\sqrt{K_b \\cdot c} = \\sqrt{1,8 \\cdot 10^{-5} \\cdot 0,45} = 2,85 \\cdot 10^{-3}\\ \\text{M}\\]
                            \\[pOH = -\\log(2,85 \\cdot 10^{-3}) = 2,54 \\Rightarrow pH = 14 - 2,54 = \\boxed{11,46}\\]
                        </div>
                    `
                },
                {
                    titulo: "Julio 2018 - Ácido cianhídrico",
                    enunciado: "Se disuelven 0,675 gramos de ácido cianhídrico en agua hasta completar 500 mL de disolución.<br>a) Determine su concentración molar.<br>b) Calcule su pH.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Concentración molar:</strong><br>
                            Masa molar HCN: \\(M = 1 + 12 + 14 = 27\\ \\text{g/mol}\\)<br>
                            \\[[\\ce{HCN}] = \\frac{0,675}{27 \\cdot 0,500} = \\boxed{0,05\\ \\text{M}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) pH:</strong><br>
                            \\[\\ce{HCN + H2O <=> CN- + H3O+}\\]
                            \\[[\\ce{H3O+}] = \\sqrt{K_a \\cdot c} = \\sqrt{4,9 \\cdot 10^{-10} \\cdot 0,05} = 4,95 \\cdot 10^{-6}\\ \\text{M}\\]
                            \\[pH = -\\log(4,95 \\cdot 10^{-6}) = \\boxed{5,31}\\]
                        </div>
                    `
                },
                {
                    titulo: "Julio 2019 - Ácido acético pH 2,9",
                    enunciado: "Se preparan 250 mL de una disolución acuosa de ácido acético cuyo pH es 2,9.<br>a) Calcule la concentración inicial del ácido acético.<br>b) Obtenga el grado de disociación del ácido acético.<br>c) Determine el volumen de ácido acético de densidad 1,15 g·mL⁻¹ que se han necesitado para preparar 250 mL de la disolución inicial.<br>d) Si a la disolución inicialmente preparada se adicionan otros 250 mL de agua, calcule el nuevo valor de pH. Suponga volúmenes aditivos.<br>Datos: Masas atómicas: H = 1; C = 12; O = 16; Ka(CH₃COOH) = 1,8·10⁻⁵.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Concentración inicial:</strong><br>
                            \\[[\\ce{H3O+}] = 10^{-2,9} = 1,26 \\cdot 10^{-3}\\ \\text{M}\\]
                            \\[K_a = \\frac{[\\ce{H3O+}]^2}{c - [\\ce{H3O+}]} \\Rightarrow 1,8 \\cdot 10^{-5} = \\frac{(1,26 \\cdot 10^{-3})^2}{c - 1,26 \\cdot 10^{-3}}\\]
                            \\[c = \\boxed{8,9 \\cdot 10^{-2}\\ \\text{M}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Grado de disociación:</strong><br>
                            \\[\\alpha = \\frac{[\\ce{H3O+}]}{c} = \\frac{1,26 \\cdot 10^{-3}}{8,9 \\cdot 10^{-2}} = \\boxed{0,014}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Volumen de ácido acético comercial:</strong><br>
                            Moles: \\(n = 0,250 \\cdot 8,9 \\cdot 10^{-2} = 0,0223\\ \\text{mol}\\)<br>
                            Masa: \\(m = 0,0223 \\cdot 60 = 1,336\\ \\text{g}\\)<br>
                            \\[V = \\frac{1,336}{1,15} = \\boxed{1,16\\ \\text{mL}}\\]
                        </div>
                        <div class='paso'>
                            <strong>d) Nuevo pH tras diluir a 500 mL:</strong><br>
                            Nueva concentración: \\(c' = \\frac{0,0223}{0,500} = 0,0446\\ \\text{M}\\)<br>
                            \\[[\\ce{H3O+}] = \\sqrt{K_a \\cdot c'} = \\sqrt{1,8 \\cdot 10^{-5} \\cdot 0,0446} = 8,96 \\cdot 10^{-4}\\ \\text{M}\\]
                            \\[pH = -\\log(8,96 \\cdot 10^{-4}) = \\boxed{3,05}\\]
                        </div>
                    `
                },
                {
                    titulo: "Junio 2021 - HNO₂, HF y HCN",
                    enunciado: "Conteste razonadamente las siguientes preguntas para los siguientes ácidos: HNO₂, HF y HCN.<br>a) Suponiendo disoluciones acuosas de igual concentración de cada uno de ellos, explique cuál presenta menor pH.<br>b) Justifique y ordene de mayor a menor basicidad las bases conjugadas.<br>c) Obtenga el pH de una disolución acuosa 0,2 M de HCN.<br>Datos: Ka(HNO₂) = 4,5·10⁻⁴; Ka(HF) = 7,1·10⁻⁴; Ka(HCN) = 4,9·10⁻¹⁰.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Menor pH:</strong><br>
                            A igual concentración, el ácido más fuerte (mayor Ka) produce mayor [H₃O⁺] y menor pH. Como \\(K_a(\\ce{HF}) = 7,1 \\cdot 10^{-4}\\) es la mayor, el <strong>HF</strong> presenta menor pH.
                        </div>
                        <div class='paso'>
                            <strong>b) Orden de basicidad de las bases conjugadas:</strong><br>
                            Cuanto menor es la Ka del ácido, más fuerte es su base conjugada. Orden de Ka: HF > HNO₂ > HCN. Por tanto, orden de basicidad:<br>
                            \\[\\boxed{\\ce{CN-} > \\ce{NO2-} > \\ce{F-}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) pH de HCN 0,2 M:</strong><br>
                            \\[[\\ce{H3O+}] = \\sqrt{K_a \\cdot c} = \\sqrt{4,9 \\cdot 10^{-10} \\cdot 0,2} = 9,9 \\cdot 10^{-6}\\ \\text{M}\\]
                            \\[pH = -\\log(9,9 \\cdot 10^{-6}) = \\boxed{5,0}\\]
                        </div>
                    `
                },
                {
                    titulo: "Julio 2021 - Ácido nitroso pH 2,42",
                    enunciado: "Se prepara una disolución de ácido nitroso de pH = 2,42.<br>a) Determine la concentración inicial del ácido.<br>b) Calcule el grado de disociación del ácido.<br>c) A 200 mL de la disolución del enunciado se le adicionan 500 mg de NaOH. Escriba la reacción que transcurre y justifique si el pH de la disolución resultante es ácido, básico o neutro.<br>Datos: Ka(ácido nitroso) = 4,5·10⁻⁴. Masas atómicas: H = 1; O = 16; Na = 23.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Concentración inicial:</strong><br>
                            \\[[\\ce{H3O+}] = 10^{-2,42} = 3,80 \\cdot 10^{-3}\\ \\text{M}\\]
                            \\[K_a = \\frac{[\\ce{H3O+}]^2}{c - [\\ce{H3O+}]} \\Rightarrow 4,5 \\cdot 10^{-4} = \\frac{(3,80 \\cdot 10^{-3})^2}{c - 3,80 \\cdot 10^{-3}}\\]
                            \\[c = \\boxed{0,036\\ \\text{M}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Grado de disociación:</strong><br>
                            \\[\\alpha = \\frac{[\\ce{H3O+}]}{c} = \\frac{3,80 \\cdot 10^{-3}}{0,036} = \\boxed{0,11}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) pH tras añadir 500 mg de NaOH:</strong><br>
                            Moles de HNO₂: \\(0,200 \\cdot 0,036 = 7,2 \\cdot 10^{-3}\\ \\text{mol}\\)<br>
                            Moles de NaOH: \\(\\frac{0,500}{40} = 1,25 \\cdot 10^{-2}\\ \\text{mol}\\)<br>
                            Reacción: \\[\\ce{HNO2 + NaOH -> NaNO2 + H2O}\\]
                            El NaOH está en exceso (\\(1,25 \\cdot 10^{-2} > 7,2 \\cdot 10^{-3}\\)), por lo que queda base fuerte sin neutralizar. El pH resultante es <strong>básico</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2022 - Ácido benzoico",
                    enunciado: "Una disolución acuosa de ácido benzoico (C₆H₅-COOH) 0,100 M tiene un grado de disociación del 2,5 %.<br>a) Determine la constante de disociación del ácido y la constante de basicidad de su base conjugada.<br>b) Calcule el pH de la disolución.<br>c) Determine el volumen de disolución de NaOH 0,0500 M que habría que añadir a 50,0 mL de la disolución del ácido para neutralizarlo completamente. Razone si el pH final será ácido, básico o neutro.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Ka y Kb de la base conjugada:</strong><br>
                            \\[\\ce{C6H5COOH + H2O <=> C6H5COO- + H3O+}\\]
                            \\[[\\ce{H3O+}] = c\\alpha = 0,100 \\cdot 0,025 = 2,5 \\cdot 10^{-3}\\ \\text{M}\\]
                            \\[K_a = \\frac{(c\\alpha)^2}{c(1-\\alpha)} = \\frac{(2,5 \\cdot 10^{-3})^2}{0,100 \\cdot 0,975} = \\boxed{6,45 \\cdot 10^{-5}}\\]
                            \\[K_b = \\frac{K_w}{K_a} = \\frac{10^{-14}}{6,45 \\cdot 10^{-5}} = \\boxed{1,56 \\cdot 10^{-10}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) pH de la disolución:</strong><br>
                            \\[pH = -\\log(2,5 \\cdot 10^{-3}) = \\boxed{2,6}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Volumen de NaOH y pH final:</strong><br>
                            Moles de ácido: \\(0,0500 \\cdot 0,100 = 5,0 \\cdot 10^{-3}\\ \\text{mol}\\)<br>
                            \\[V_{\\ce{NaOH}} = \\frac{5,0 \\cdot 10^{-3}}{0,0500} = \\boxed{0,1\\ \\text{L} = 100\\ \\text{mL}}\\]
                            Se forma benzoato de sodio, cuya base conjugada se hidroliza:<br>
                            \\[\\ce{C6H5COO- + H2O <=> C6H5COOH + OH-}\\]
                            El pH final será <strong>básico</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2022 - Neutralización y ácido láctico",
                    enunciado: "Responda razonadamente a las siguientes cuestiones:<br>a) Tras la adición de hidróxido de sodio 0,20 M a 100 mL de ácido nítrico 0,050 M se obtiene una disolución de pH neutro. Escriba la reacción que tiene lugar y calcule el volumen que se añade de la base.<br>b) El ácido láctico (HA) es un compuesto orgánico con una constante de acidez de 1,38·10⁻⁴ y masa molecular 90,0 g·mol⁻¹. Se preparan 100 mL de una disolución de ácido láctico cuyo pH es el mismo que el de otra disolución de HCl 0,0200 M. Determine los gramos de ácido láctico necesarios para preparar la disolución.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Reacción y volumen de NaOH:</strong><br>
                            \\[\\ce{HNO3 + NaOH -> NaNO3 + H2O}\\]
                            Para pH neutro, neutralización exacta:<br>
                            Moles de HNO₃: \\(0,100 \\cdot 0,050 = 5,0 \\cdot 10^{-3}\\ \\text{mol}\\)<br>
                            \\[V_{\\ce{NaOH}} = \\frac{5,0 \\cdot 10^{-3}}{0,20} = \\boxed{2,5 \\cdot 10^{-2}\\ \\text{L} = 25\\ \\text{mL}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Gramos de ácido láctico:</strong><br>
                            El pH del HCl 0,0200 M es: \\(pH = -\\log(0,0200) = 1,70\\)<br>
                            Para el ácido láctico: \\([\\ce{H3O+}] = 10^{-1,70} = 0,0200\\ \\text{M}\\)<br>
                            \\[K_a = \\frac{[\\ce{H3O+}]^2}{c - [\\ce{H3O+}]} \\Rightarrow 1,38 \\cdot 10^{-4} = \\frac{(0,0200)^2}{c - 0,0200}\\]
                            \\[c = 2,92\\ \\text{M}\\]
                            Moles en 100 mL: \\(n = 0,100 \\cdot 2,92 = 0,292\\ \\text{mol}\\)<br>
                            \\[m = 0,292 \\cdot 90,0 = \\boxed{26,26\\ \\text{g}}\\]
                        </div>
                    `
                },
                {
                    titulo: "Julio 2023 - Biotina",
                    enunciado: "Responda a las siguientes cuestiones:<br>a) La biotina es un ácido monoprotóico, HA. Una disolución de biotina 0,010 M tiene un pH de 3,3. Determine la constante de disociación y el grado de disociación.<br>b) Determine el volumen de una disolución de hidróxido de sodio 0,050 M necesario para neutralizar 100 mL de la disolución de HA.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Ka y grado de disociación:</strong><br>
                            \\[[\\ce{H3O+}] = 10^{-3,3} = 5,01 \\cdot 10^{-4}\\ \\text{M}\\]
                            \\[K_a = \\frac{(5,01 \\cdot 10^{-4})^2}{0,010 - 5,01 \\cdot 10^{-4}} = \\boxed{2,6 \\cdot 10^{-5}}\\]
                            \\[\\alpha = \\frac{5,01 \\cdot 10^{-4}}{0,010} = \\boxed{0,05}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Volumen de NaOH para neutralizar:</strong><br>
                            Moles de HA: \\(0,100 \\cdot 0,010 = 1,0 \\cdot 10^{-3}\\ \\text{mol}\\)<br>
                            \\[V_{\\ce{NaOH}} = \\frac{1,0 \\cdot 10^{-3}}{0,050} = \\boxed{0,020\\ \\text{L} = 20\\ \\text{mL}}\\]
                        </div>
                    `
                },
                {
                    titulo: "Junio 2025 - Ácido butanoico y butanoato de sodio",
                    enunciado: "El ácido butanoico (C₃H₇COOH) es un ácido monoprotóico débil que se utiliza en muchas aplicaciones de la vida cotidiana, por ejemplo para mantener la frescura del pan, como aromatizante en jarabes o para mejorar la jugosidad de la carne, entre otras. A 25 °C se preparan 250 mL de una disolución 0,250 M de este ácido con pH = 2,72.<br>a) Escriba ajustada la reacción de disociación en agua y calcule el porcentaje de disociación del ácido y el pKa.<br>b) A 25 °C se prepara una disolución de butanoato de sodio (C₃H₇COONa). Razone si su pH será mayor, menor o igual que el de la disolución del enunciado.<br>c) Justifique si se formaría una disolución reguladora al mezclar la disolución del enunciado con una disolución de butanoato de sodio.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Reacción de disociación, porcentaje de disociación y pKa:</strong><br>
                            \\[\\ce{C3H7COOH + H2O <=> C3H7COO- + H3O+}\\]
                            \\[[\\ce{H3O+}] = 10^{-2,72} = 1,91 \\cdot 10^{-3}\\ \\text{M}\\]
                            \\[\\alpha = \\frac{1,91 \\cdot 10^{-3}}{0,250} = 7,62 \\cdot 10^{-3} \\Rightarrow \\boxed{\\%\\text{ disociación} = 0,762\\ \\%}\\]
                            \\[K_a = \\frac{(1,91 \\cdot 10^{-3})^2}{0,250 - 1,91 \\cdot 10^{-3}} = 1,47 \\cdot 10^{-5}\\]
                            \\[pK_a = -\\log(1,47 \\cdot 10^{-5}) = \\boxed{4,83}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) pH del butanoato de sodio:</strong><br>
                            El butanoato de sodio se disocia en Na⁺ (neutro) y C₃H₇COO⁻ (base conjugada del ácido butanoico), que se hidroliza:<br>
                            \\[\\ce{C3H7COO- + H2O <=> C3H7COOH + OH-}\\]
                            Al generarse OH⁻, el pH será <strong>mayor</strong> (más básico) que el de la disolución del ácido butanoico.
                        </div>
                        <div class='paso'>
                            <strong>c) ¿Se forma disolución reguladora?</strong><br>
                            Sí. Una disolución reguladora está formada por un ácido débil y su base conjugada en concentraciones comparables. Al mezclar ácido butanoico con butanoato de sodio se obtiene el par ácido/base conjugada, por lo que <strong>sí se formaría una disolución reguladora</strong>.
                        </div>
                    `
                }
            ]
        },
        "neutralizacion_estequiometria": {
            nombre: "2. Reacciones de neutralización, riqueza y volumetría",
            problemas: [
                {
                    titulo: "Junio 2018 - H₂SO₄ comercial y neutralización",
                    enunciado: "Se dispone de H₂SO₄ comercial de 96,4 % de riqueza en masa y densidad 1,84 g·mL⁻¹. Calcule:<br>a) El volumen de ácido comercial que se necesita para preparar 200 mL de disolución 0,5 M.<br>b) El pH de la disolución resultante de mezclar 25 mL de disolución 0,1 M de H₂SO₄ con 50 mL de disolución 0,5 M de NaOH. Suponga los volúmenes aditivos.<br>Datos: Masas atómicas: H = 1; O = 16; S = 32.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Volumen de ácido comercial:</strong><br>
                            Moles necesarios: \\(n = 0,200 \\cdot 0,5 = 0,100\\ \\text{mol}\\)<br>
                            Masa de H₂SO₄ puro: \\(m = 0,100 \\cdot 98 = 9,8\\ \\text{g}\\)<br>
                            Masa de disolución comercial: \\(m_{\\text{dis}} = \\frac{9,8}{0,964} = 10,17\\ \\text{g}\\)<br>
                            \\[V = \\frac{10,17}{1,84} = \\boxed{5,5\\ \\text{mL}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) pH tras la mezcla:</strong><br>
                            Moles de H₂SO₄: \\(0,025 \\cdot 0,1 = 2,5 \\cdot 10^{-3}\\ \\text{mol}\\) (aportan \\(5,0 \\cdot 10^{-3}\\) mol H⁺)<br>
                            Moles de NaOH: \\(0,050 \\cdot 0,5 = 2,5 \\cdot 10^{-2}\\ \\text{mol}\\) de OH⁻<br>
                            OH⁻ en exceso: \\(2,5 \\cdot 10^{-2} - 5,0 \\cdot 10^{-3} = 2,0 \\cdot 10^{-2}\\ \\text{mol}\\)<br>
                            Volumen total: \\(0,075\\ \\text{L}\\)<br>
                            \\[[\\ce{OH-}] = \\frac{2,0 \\cdot 10^{-2}}{0,075} = 0,267\\ \\text{M}\\]
                            \\[pOH = -\\log(0,267) = 0,57 \\Rightarrow pH = 14 - 0,57 = \\boxed{13,43}\\]
                        </div>
                    `
                },
                {
                    titulo: "Junio 2018 - Ácido metanoico y base BOH",
                    enunciado: "Se dispone de una disolución de ácido metanoico 0,5 M. Calcule:<br>a) El pH de la disolución.<br>b) El grado de disociación de la base BOH 0,3 M que presenta un pOH igual que el pH de la disolución de ácido metanoico.<br>c) El volumen de base BOH 0,3 M necesario para neutralizar una disolución de ácido metanoico obtenida al mezclar 50 mL de la disolución del enunciado con 150 mL de agua.<br>Dato: Ka = 1,85·10⁻⁵.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) pH de la disolución de ácido metanoico:</strong><br>
                            \\[\\ce{HCOOH + H2O <=> HCOO- + H3O+}\\]
                            \\[[\\ce{H3O+}] = \\sqrt{K_a \\cdot c} = \\sqrt{1,85 \\cdot 10^{-5} \\cdot 0,5} = 3,04 \\cdot 10^{-3}\\ \\text{M}\\]
                            \\[pH = -\\log(3,04 \\cdot 10^{-3}) = \\boxed{2,52}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Grado de disociación de BOH:</strong><br>
                            El pOH de la base es igual al pH del ácido: \\(pOH = 2,52 \\Rightarrow [\\ce{OH-}] = 10^{-2,52} = 3,02 \\cdot 10^{-3}\\ \\text{M}\\)<br>
                            \\[K_b = \\frac{[\\ce{OH-}]^2}{c} = \\frac{(3,02 \\cdot 10^{-3})^2}{0,3} = 3,04 \\cdot 10^{-5}\\]
                            \\[\\alpha = \\sqrt{\\frac{K_b}{c}} = \\sqrt{\\frac{3,04 \\cdot 10^{-5}}{0,3}} = \\boxed{0,01}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Volumen de BOH para neutralizar:</strong><br>
                            Moles de ácido metanoico tras diluir: \\(n = 0,050 \\cdot 0,5 = 0,025\\ \\text{mol}\\)<br>
                            \\[V_{\\ce{BOH}} = \\frac{0,025}{0,3} = \\boxed{0,083\\ \\text{L}}\\]
                        </div>
                    `
                },
                {
                    titulo: "Junio 2019 - Amoniaco comercial",
                    enunciado: "Se quiere preparar 500 mL de disolución acuosa de amoniaco 0,1 M a partir de 1 L de amoniaco comercial de 25 % de riqueza en masa con una densidad del 0,9 g·cm⁻³.<br>a) Determine el volumen de amoniaco comercial necesario para preparar dicha disolución.<br>b) Calcule el pH de la disolución de 500 mL de amoniaco 0,1 M inicial.<br>c) Justifique con las reacciones adecuadas el pH resultante (ácido, básico o neutro) al añadir 250 mL de ácido clorhídrico 0,2 M a la disolución de 500 mL de amoniaco 0,1 M. Considere volúmenes aditivos.<br>Datos: Kb(amoniaco) = 1,8·10⁻⁵. Masas atómicas: H = 1; N = 14.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Volumen de amoniaco comercial:</strong><br>
                            Moles necesarios: \\(n = 0,500 \\cdot 0,1 = 0,05\\ \\text{mol}\\)<br>
                            Masa de NH₃ puro: \\(m = 0,05 \\cdot 17 = 0,85\\ \\text{g}\\)<br>
                            Masa de disolución comercial: \\(m_{\\text{dis}} = \\frac{0,85}{0,25} = 3,40\\ \\text{g}\\)<br>
                            \\[V = \\frac{3,40}{0,9} = \\boxed{3,78\\ \\text{mL}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) pH de la disolución 0,1 M:</strong><br>
                            \\[\\ce{NH3 + H2O <=> NH4+ + OH-}\\]
                            \\[[\\ce{OH-}] = \\sqrt{K_b \\cdot c} = \\sqrt{1,8 \\cdot 10^{-5} \\cdot 0,1} = 1,34 \\cdot 10^{-3}\\ \\text{M}\\]
                            \\[pOH = 2,87 \\Rightarrow pH = 14 - 2,87 = \\boxed{11,13}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) pH tras añadir HCl:</strong><br>
                            Moles NH₃: \\(0,500 \\cdot 0,1 = 0,050\\) mol<br>
                            Moles HCl: \\(0,250 \\cdot 0,2 = 0,050\\) mol<br>
                            \\[\\ce{NH3 + HCl -> NH4Cl}\\]
                            Se neutraliza todo el amoniaco formándose cloruro de amonio. El ion amonio se hidroliza:<br>
                            \\[\\ce{NH4+ + H2O <=> NH3 + H3O+}\\]
                            El pH resultante es <strong>ácido</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2020 - Ácido peryódico",
                    enunciado: "Se tiene una disolución de ácido peryódico 0,10 M.<br>a) Calcule el pH de la disolución.<br>b) Determine el volumen de la disolución del enunciado necesario para preparar 250 mL de disolución de ácido peryódico 0,02 M.<br>c) A 200 mL de la disolución del enunciado se le añaden 125 mL de hidróxido de sodio 0,16 M. Justifique si el pH resultante es ácido, básico o neutro.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) pH de la disolución 0,10 M:</strong><br>
                            El ácido peryódico (HIO₄) es un ácido fuerte, por lo que se disocia completamente:<br>
                            \\[[\\ce{H3O+}] = 0,10\\ \\text{M} \\Rightarrow pH = -\\log(0,10) = \\boxed{1,0}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Volumen para preparar 250 mL de disolución 0,02 M:</strong><br>
                            \\[V_1 \\cdot 0,10 = 0,250 \\cdot 0,02 \\Rightarrow V_1 = \\boxed{0,05\\ \\text{L} = 50\\ \\text{mL}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) pH tras añadir NaOH:</strong><br>
                            Moles HIO₄: \\(0,200 \\cdot 0,10 = 0,020\\) mol<br>
                            Moles NaOH: \\(0,125 \\cdot 0,16 = 0,020\\) mol<br>
                            Neutralización exacta (ácido fuerte + base fuerte). pH <strong>neutro</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2021 - Orden de pH y neutralización",
                    enunciado: "Responda las siguientes cuestiones:<br>a) Ordene por orden creciente de pH las disoluciones acuosas de igual concentración de los siguientes compuestos: HF, NH₃, HCN y NaCl. Razone la respuesta.<br>b) Calcule la concentración de una disolución de ácido acético sabiendo que 75 mL de esta disolución se neutralizan con 100 mL de una disolución de hidróxido de potasio 0,15 M.<br>Datos: Ka(HF) = 1,4·10⁻⁴; Kb(NH₃) = 1,8·10⁻⁵; Ka(HCN) = 4,9·10⁻¹⁰.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Orden creciente de pH:</strong><br>
                            - HF: ácido débil (Ka = 1,4·10⁻⁴) → pH ácido.<br>
                            - HCN: ácido muy débil (Ka = 4,9·10⁻¹⁰) → pH ligeramente ácido (más alto que HF).<br>
                            - NaCl: sal de ácido fuerte y base fuerte → pH neutro.<br>
                            - NH₃: base débil (Kb = 1,8·10⁻⁵) → pH básico.<br>
                            \\[\\boxed{\\ce{HF} < \\ce{HCN} < \\ce{NaCl} < \\ce{NH3}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Concentración de ácido acético:</strong><br>
                            Moles de KOH: \\(0,100 \\cdot 0,15 = 0,015\\ \\text{mol}\\)<br>
                            En la neutralización: \\(n_{\\ce{CH3COOH}} = n_{\\ce{KOH}} = 0,015\\ \\text{mol}\\)<br>
                            \\[[\\ce{CH3COOH}] = \\frac{0,015}{0,075} = \\boxed{0,20\\ \\text{M}}\\]
                        </div>
                    `
                },
                {
                    titulo: "Julio 2023 - HCl vs ácido acético",
                    enunciado: "En un laboratorio se tiene un matraz A, que contiene 15 mL de una disolución acuosa de ácido clorhídrico 0,05 M, y otro matraz B, que contiene 15 mL de una disolución acuosa de ácido acético 0,05 M.<br>a) Determine el pH de cada disolución por separado.<br>b) Calcule la cantidad de agua que se debe añadir a la disolución más ácida para que el pH de las dos disoluciones sea el mismo. Suponga volúmenes aditivos.<br>Dato: Ka(ácido acético) = 1,8·10⁻⁵.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) pH de cada disolución:</strong><br>
                            HCl (ácido fuerte): \\[[\\ce{H3O+}] = 0,05\\ \\text{M} \\Rightarrow pH = -\\log(0,05) = \\boxed{1,3}\\]
                            CH₃COOH (ácido débil):<br>
                            \\[[\\ce{H3O+}] = \\sqrt{K_a \\cdot c} = \\sqrt{1,8 \\cdot 10^{-5} \\cdot 0,05} = 9,49 \\cdot 10^{-4}\\ \\text{M}\\]
                            \\[pH = -\\log(9,49 \\cdot 10^{-4}) = \\boxed{3,02}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Agua a añadir al HCl para igualar el pH:</strong><br>
                            Hay que diluir el HCl hasta que su pH sea 3,02, es decir, \\([\\ce{H3O+}] = 9,49 \\cdot 10^{-4}\\ \\text{M}\\).<br>
                            Moles de HCl: \\(0,015 \\cdot 0,05 = 7,5 \\cdot 10^{-4}\\ \\text{mol}\\)<br>
                            \\[V_{\\text{final}} = \\frac{7,5 \\cdot 10^{-4}}{9,49 \\cdot 10^{-4}} = 0,790\\ \\text{L}\\]
                            \\[V_{\\text{agua}} = 0,790 - 0,015 = \\boxed{0,771\\ \\text{L} = 771\\ \\text{mL}}\\]
                        </div>
                    `
                },
                {
                    titulo: "Julio 2024 - Ácido hipobromoso y H₂SO₄",
                    enunciado: "Responda a las siguientes cuestiones:<br>a) Calcule el grado de disociación y el pH de una disolución 0,10 M de ácido hipobromoso, a 25 °C, si su constante de disociación, a dicha temperatura, vale 2,3·10⁻⁹.<br>b) Calcule la molaridad que debería tener una disolución de ácido sulfúrico para que su pH fuera igual al de la disolución anterior de ácido hipobromoso. Considere disociación completa del H₂SO₄.<br>c) Dados los siguientes ácidos: ácido hipobromoso (Ka = 2,3·10⁻⁹) y ácido fluorhídrico (Ka = 7·10⁻⁴), escriba la fórmula y el nombre de sus respectivas bases conjugadas, ordenándolas justificadamente según su fuerza creciente como bases.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Grado de disociación y pH del HBrO 0,10 M:</strong><br>
                            \\[\\ce{HBrO + H2O <=> BrO- + H3O+}\\]
                            \\[[\\ce{H3O+}] = \\sqrt{K_a \\cdot c} = \\sqrt{2,3 \\cdot 10^{-9} \\cdot 0,10} = 1,51 \\cdot 10^{-5}\\ \\text{M}\\]
                            \\[pH = -\\log(1,51 \\cdot 10^{-5}) = \\boxed{4,82}\\]
                            \\[\\alpha = \\frac{1,51 \\cdot 10^{-5}}{0,10} = \\boxed{1,51 \\cdot 10^{-4}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Molaridad de H₂SO₄ para el mismo pH:</strong><br>
                            Para pH = 4,82: \\([\\ce{H3O+}] = 1,51 \\cdot 10^{-5}\\ \\text{M}\\)<br>
                            Como el H₂SO₄ se disocia completamente y es diprótico: \\([\\ce{H3O+}] = 2c\\)<br>
                            \\[c = \\frac{1,51 \\cdot 10^{-5}}{2} = \\boxed{7,5 \\cdot 10^{-6}\\ \\text{M}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Bases conjugadas y orden de fuerza:</strong><br>
                            - Base conjugada del HBrO: ion hipobromito, \\(\\ce{BrO-}\\).<br>
                            - Base conjugada del HF: ion fluoruro, \\(\\ce{F-}\\).<br>
                            Cuanto menor es la Ka del ácido, más fuerte es su base conjugada. Como \\(K_a(\\ce{HBrO}) = 2,3 \\cdot 10^{-9} \\ll K_a(\\ce{HF}) = 7 \\cdot 10^{-4}\\), el BrO⁻ es más fuerte que el F⁻.<br>
                            Orden creciente de fuerza como bases: \\[\\boxed{\\ce{F-} < \\ce{BrO-}}\\]
                        </div>
                    `
                }
            ]
        },
        "hidrolisis_sales_mezclas": {
            nombre: "3. Hidrólisis de sales y carácter ácido-base de disoluciones",
            problemas: [
                {
                    titulo: "Julio 2018 - pH de mezclas",
                    enunciado: "Razone si el pH que resulta al mezclar las disoluciones indicadas es ácido, básico o neutro.<br>a) 50 mL de ácido acético 0,1 M + 50 mL de hidróxido de sodio 0,1 M.<br>b) 50 mL de ácido clorhídrico 0,1 M + 100 mL de hidróxido de sodio 0,05 M.<br>c) 50 mL de ácido clorhídrico 0,1 M + 50 mL de hidróxido de sodio 0,05 M.<br>d) 50 mL de ácido clorhídrico 0,1 M + 50 mL de amoniaco 0,1 M.<br>Datos: pKa(ácido acético) = 5; pKb(amoniaco) = 5.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) CH₃COOH 0,1 M + NaOH 0,1 M (iguales volúmenes):</strong><br>
                            Se neutraliza todo el ácido acético formándose acetato de sodio. El ion acetato se hidroliza:<br>
                            \\[\\ce{CH3COO- + H2O <=> CH3COOH + OH-}\\]
                            El pH resultante es <strong>básico</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) HCl 0,1 M + NaOH 0,05 M:</strong><br>
                            Moles de HCl: \\(0,050 \\cdot 0,1 = 5,0 \\cdot 10^{-3}\\) mol<br>
                            Moles de NaOH: \\(0,100 \\cdot 0,05 = 5,0 \\cdot 10^{-3}\\) mol<br>
                            Se neutralizan exactamente (ácido fuerte + base fuerte), por lo que el pH es <strong>neutro</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) HCl 0,1 M + NaOH 0,05 M (iguales volúmenes):</strong><br>
                            Moles de HCl: \\(0,050 \\cdot 0,1 = 5,0 \\cdot 10^{-3}\\) mol<br>
                            Moles de NaOH: \\(0,050 \\cdot 0,05 = 2,5 \\cdot 10^{-3}\\) mol<br>
                            Hay exceso de ácido fuerte, por lo que el pH es <strong>ácido</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) HCl 0,1 M + NH₃ 0,1 M (iguales volúmenes):</strong><br>
                            Se forma cloruro de amonio. El ion amonio se hidroliza:<br>
                            \\[\\ce{NH4+ + H2O <=> NH3 + H3O+}\\]
                            El pH resultante es <strong>ácido</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2019 - Carácter ácido/básico de disoluciones",
                    enunciado: "Justifique si el pH de las siguientes disoluciones es ácido, básico o neutro:<br>a) Cloruro de amonio 0,1 M.<br>b) Acetato de sodio 0,1 M.<br>c) 50 mL de ácido clorhídrico 0,2 M + 200 mL de hidróxido de sodio 0,05 M.<br>d) Hidróxido de bario 0,1 M.<br>Datos: Ka(ácido acético) = 1,8·10⁻⁵; Kb(amoniaco) = 1,8·10⁻⁵.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Cloruro de amonio 0,1 M:</strong><br>
                            \\[\\ce{NH4+ + H2O <=> NH3 + H3O+}\\]
                            El ion amonio (ácido conjugado de base débil) se hidroliza generando H₃O⁺. pH <strong>ácido</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) Acetato de sodio 0,1 M:</strong><br>
                            \\[\\ce{CH3COO- + H2O <=> CH3COOH + OH-}\\]
                            El ion acetato (base conjugada de ácido débil) se hidroliza generando OH⁻. pH <strong>básico</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) HCl 0,2 M + NaOH 0,05 M:</strong><br>
                            Moles HCl: \\(0,050 \\cdot 0,2 = 1,0 \\cdot 10^{-2}\\) mol<br>
                            Moles NaOH: \\(0,200 \\cdot 0,05 = 1,0 \\cdot 10^{-2}\\) mol<br>
                            Neutralización exacta (ácido fuerte + base fuerte). pH <strong>neutro</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Hidróxido de bario 0,1 M:</strong><br>
                            \\[\\ce{Ba(OH)2 -> Ba^{2+} + 2 OH-}\\]
                            Es una base fuerte, produce OH⁻. pH <strong>básico</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2020 - Carácter ácido/básico (varias disoluciones)",
                    enunciado: "Justifique si el pH de las siguientes disoluciones acuosas es ácido, básico o neutro. Escriba las reacciones correspondientes y realice cálculos sólo cuando lo considere necesario.<br>a) 100 mL de ácido acético 0,2 M + 200 mL de hidróxido de sodio 0,1 M.<br>b) Amoniaco.<br>c) 100 mL de ácido clorhídrico 0,2 M + 150 mL de hidróxido de sodio 0,2 M.<br>d) Hipobromito de sodio.<br>Datos: Ka(ácido acético) = 1,8·10⁻⁵; Ka(ácido hipobromoso) = 2,3·10⁻⁹; Kb(amoniaco) = 1,8·10⁻⁵.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) CH₃COOH 0,2 M + NaOH 0,1 M:</strong><br>
                            Moles ácido: \\(0,100 \\cdot 0,2 = 0,020\\) mol<br>
                            Moles base: \\(0,200 \\cdot 0,1 = 0,020\\) mol<br>
                            Neutralización exacta: se forma acetato de sodio, que se hidroliza:<br>
                            \\[\\ce{CH3COO- + H2O <=> CH3COOH + OH-}\\]
                            pH <strong>básico</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) Amoniaco:</strong><br>
                            \\[\\ce{NH3 + H2O <=> NH4+ + OH-}\\]
                            Es una base débil. pH <strong>básico</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) HCl 0,2 M + NaOH 0,2 M:</strong><br>
                            Moles HCl: \\(0,100 \\cdot 0,2 = 0,020\\) mol<br>
                            Moles NaOH: \\(0,150 \\cdot 0,2 = 0,030\\) mol<br>
                            Exceso de base fuerte (0,010 mol OH⁻). pH <strong>básico</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Hipobromito de sodio:</strong><br>
                            \\[\\ce{BrO- + H2O <=> HBrO + OH-}\\]
                            El ion hipobromito (base conjugada de ácido débil) se hidroliza generando OH⁻. pH <strong>básico</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Septiembre 2020 - NH₄⁺, CH₃COO⁻, HClO₄ y KCN",
                    enunciado: "Se preparan las siguientes disoluciones acuosas: NH₄⁺, CH₃COO⁻, HClO₄ y KCN.<br>a) Escriba las reacciones de disociación en agua de cada una de las especies.<br>b) Justifique sin hacer cálculos si el pH de cada disolución es ácido, básico o neutro.<br>c) Si se parte de la misma concentración inicial, explique cuál de las disoluciones tiene mayor basicidad.<br>Datos: Ka(ácido acético) = 1,8·10⁻⁵; Ka(ácido cianhídrico) = 4,9·10⁻¹⁰; Kb(amoniaco) = 1,8·10⁻⁵.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Reacciones de disociación:</strong><br>
                            \\[\\ce{NH4+ + H2O <=> NH3 + H3O+}\\]
                            \\[\\ce{CH3COO- + H2O <=> CH3COOH + OH-}\\]
                            \\[\\ce{HClO4 + H2O -> ClO4- + H3O+}\\]
                            \\[\\ce{KCN -> K+ + CN-}\\]
                            \\[\\ce{CN- + H2O <=> HCN + OH-}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Carácter del pH:</strong><br>
                            - NH₄⁺: ácido conjugado de base débil → pH <strong>ácido</strong>.<br>
                            - CH₃COO⁻: base conjugada de ácido débil → pH <strong>básico</strong>.<br>
                            - HClO₄: ácido fuerte → pH <strong>ácido</strong>.<br>
                            - KCN (CN⁻): base conjugada de ácido muy débil → pH <strong>básico</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Mayor basicidad:</strong><br>
                            La basicidad depende de la Kb de la base conjugada. Como \\(K_a(\\ce{HCN}) = 4,9 \\cdot 10^{-10} \\ll K_a(\\ce{CH3COOH}) = 1,8 \\cdot 10^{-5}\\), la base conjugada CN⁻ es mucho más fuerte que CH₃COO⁻. Por tanto, la disolución de <strong>KCN</strong> tiene mayor basicidad.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2022 - Ácido hipocloroso en piscina",
                    enunciado: "El agua de una piscina a la que se ha añadido ácido hipocloroso tiene un pH = 7,5.<br>a) Escriba la reacción y calcule la concentración inicial del ácido hipocloroso en la piscina.<br>b) Si observamos que el pH de la piscina ha aumentado hasta 7,8, justifique con las reacciones adecuadas y sin hacer cálculos, cuál de los siguientes reactivos debemos añadir para restablecer el pH a 7,5: NaOH; HCl; NaCl.<br>Dato: Ka(ácido hipocloroso) = 3,2·10⁻⁸.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Reacción y concentración inicial:</strong><br>
                            \\[\\ce{HClO + H2O <=> ClO- + H3O+}\\]
                            \\[[\\ce{H3O+}] = 10^{-7,5} = 3,16 \\cdot 10^{-8}\\ \\text{M}\\]
                            \\[K_a = \\frac{[\\ce{H3O+}]^2}{c - [\\ce{H3O+}]} \\Rightarrow 3,2 \\cdot 10^{-8} = \\frac{(3,16 \\cdot 10^{-8})^2}{c - 3,16 \\cdot 10^{-8}}\\]
                            \\[c = \\boxed{6,29 \\cdot 10^{-8}\\ \\text{M}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Reactivo para restablecer el pH:</strong><br>
                            El pH ha aumentado (la disolución se ha vuelto más básica), por lo que hay que añadir un ácido para bajarlo de nuevo a 7,5. Entre las opciones, el <strong>HCl</strong> es el ácido. El NaOH aumentaría aún más el pH y el NaCl no lo modificaría significativamente.<br>
                            \\[\\ce{HCl + H2O -> Cl- + H3O+}\\]
                        </div>
                    `
                },
                {
                    titulo: "Julio 2023 - HNO₃, KCl, NH₄Cl y KOH",
                    enunciado: "Se preparan disoluciones acuosas de igual concentración de las especies: ácido nítrico, cloruro de potasio, cloruro de amonio e hidróxido de potasio. Responda razonadamente a las siguientes cuestiones:<br>a) ¿Qué disolución tiene mayor pH?<br>b) ¿Qué disolución no cambia su pH al diluirla con agua?<br>c) ¿Qué reacción se producirá al mezclar volúmenes iguales de las disoluciones de cloruro de amonio y de hidróxido de potasio?<br>d) El pH de la disolución formada en el apartado c), ¿será ácido, básico o neutro?<br>Dato: Ka(NH₄⁺) = 6,7·10⁻¹⁰.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Mayor pH:</strong><br>
                            El KOH es una base fuerte, por lo que su disolución tendrá el pH más alto (básico). El <strong>KOH</strong> tiene mayor pH.
                        </div>
                        <div class='paso'>
                            <strong>b) Disolución que no cambia su pH al diluir:</strong><br>
                            El <strong>KCl</strong> es una sal de ácido fuerte y base fuerte; su disolución es neutra (pH = 7) y al diluirla sigue siendo neutra.
                        </div>
                        <div class='paso'>
                            <strong>c) Reacción al mezclar NH₄Cl y KOH:</strong><br>
                            \\[\\ce{NH4Cl + KOH -> NH3 + KCl + H2O}\\]
                            (o iónicamente: \\[\\ce{NH4+ + OH- -> NH3 + H2O}\\])
                        </div>
                        <div class='paso'>
                            <strong>d) pH de la disolución resultante:</strong><br>
                            Al mezclar volúmenes iguales de igual concentración se neutraliza todo el NH₄⁺ formándose NH₃ (base débil) y KCl (neutro). La presencia de NH₃ hace que el pH sea <strong>básico</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2024 - NaOH, ácido propanoico, NH₄Cl, KCl y etanoato de sodio",
                    enunciado: "Se han preparado disoluciones acuosas 0,20 M de los siguientes compuestos a 25 °C: hidróxido de sodio, ácido propanoico, cloruro de amonio, cloruro de potasio y etanoato de sodio.<br>a) Calcule el pH de las disoluciones de hidróxido de sodio y ácido propanoico.<br>b) Ordene las disoluciones de cloruro de amonio, cloruro de potasio y etanoato de sodio de mayor a menor carácter ácido. Justifique la respuesta formulando las reacciones de ionización de cada especie, y las de hidrólisis del ion que lo requiera.<br>Datos: pKa(ácido propanoico) = 4,9; pKa(ácido acético) = 4,75; pKb(amoniaco) = 4,75.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) pH de NaOH y ácido propanoico:</strong><br>
                            NaOH (base fuerte): \\[[\\ce{OH-}] = 0,20\\ \\text{M} \\Rightarrow pOH = 0,70 \\Rightarrow pH = \\boxed{13,3}\\]
                            Ácido propanoico (ácido débil): \\(K_a = 10^{-4,9} = 1,26 \\cdot 10^{-5}\\)<br>
                            \\[[\\ce{H3O+}] = \\sqrt{K_a \\cdot c} = \\sqrt{1,26 \\cdot 10^{-5} \\cdot 0,20} = 1,59 \\cdot 10^{-3}\\ \\text{M}\\]
                            \\[pH = -\\log(1,59 \\cdot 10^{-3}) = \\boxed{2,8}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Orden de carácter ácido (mayor a menor):</strong><br>
                            - NH₄Cl: \\[\\ce{NH4+ + H2O <=> NH3 + H3O+}\\] (pH ácido)<br>
                            - KCl: \\[\\ce{K+ + Cl-}\\]: iones de ácido y base fuertes, no se hidrolizan (pH neutro).<br>
                            - CH₃COONa: \\[\\ce{CH3COO- + H2O <=> CH3COOH + OH-}\\] (pH básico).<br>
                            \\[\\boxed{\\ce{NH4Cl} > \\ce{KCl} > \\ce{CH3COONa}}\\]
                        </div>
                    `
                },
                {
                    titulo: "Julio 2025 - Verdadero o falso: HNO₂ + NaOH y fenilamina",
                    enunciado: "Razone si las siguientes afirmaciones son verdaderas o falsas. Escriba las reacciones que tienen lugar para justificar su respuesta y realice, en su caso, los cálculos necesarios.<br>a) \"El pH a 25 °C de la disolución resultante de mezclar 50 mL de una disolución 0,5 M de ácido nitroso con 50 mL de una disolución de hidróxido de sodio de igual concentración es neutro\".<br>b) \"La cantidad de fenilamina (C₆H₅-NH₂) necesaria para preparar una disolución de 100 mL de pH = 9, es mayor de 1 g\".<br>Datos: pKa(ácido nitroso) = 3,3; pKb(fenilamina) = 9,13; Masas atómicas: H = 1; C = 12; N = 14.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Afirmación: el pH es neutro. FALSA.</strong><br>
                            Al mezclar volúmenes e igual concentración de HNO₂ y NaOH, se neutraliza todo el ácido formándose nitrito de sodio:<br>
                            \\[\\ce{HNO2 + NaOH -> NaNO2 + H2O}\\]
                            El ion nitrito es la base conjugada de un ácido débil y se hidroliza:<br>
                            \\[\\ce{NO2- + H2O <=> HNO2 + OH-}\\]
                            Se genera OH⁻, por lo que el pH resultante es <strong>básico</strong>, no neutro.
                        </div>
                        <div class='paso'>
                            <strong>b) Afirmación: se necesita más de 1 g de fenilamina. VERDADERA.</strong><br>
                            \\[\\ce{C6H5NH2 + H2O <=> C6H5NH3+ + OH-}\\]
                            \\(pK_b = 9,13 \\Rightarrow K_b = 10^{-9,13} = 7,41 \\cdot 10^{-10}\\)<br>
                            Para pH = 9: \\(pOH = 5 \\Rightarrow [\\ce{OH-}] = 10^{-5}\\ \\text{M}\\)<br>
                            \\[K_b = \\frac{[\\ce{OH-}]^2}{c} \\Rightarrow c = \\frac{(10^{-5})^2}{7,41 \\cdot 10^{-10}} = 0,135\\ \\text{M}\\]
                            Moles en 100 mL: \\(n = 0,100 \\cdot 0,135 = 1,35 \\cdot 10^{-2}\\ \\text{mol}\\)<br>
                            Masa molar de la fenilamina: \\(M = 6(12) + 7(1) + 14 = 93\\ \\text{g/mol}\\)<br>
                            \\[m = 1,35 \\cdot 10^{-2} \\cdot 93 = 1,26\\ \\text{g} > 1\\ \\text{g}\\]
                            Por tanto, la afirmación es <strong>verdadera</strong>.
                        </div>
                    `
                }
            ]
        }
    }
};                    