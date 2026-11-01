if (typeof baseDatosTemas === 'undefined') {
    var baseDatosTemas = {};
}

baseDatosTemas["tema5_equilibrio"] = {
    id: "tema5_equilibrio",
    titulo: "Tema 5: Equilibrio Químico y Solubilidad",
    deshabilitado: false,
    secciones: {
        "equilibrio_homogeneo": {
            nombre: "Equilibrio Químico (Kp, Kc, grado de disociación)",
            problemas: [
                {
                    titulo: "Junio 2019 - Disociación del SbCl₅",
                    enunciado: "En un reactor químico a 182 °C y 1 atm de presión el SbCl₅ está disociado en un 29,2 % según la reacción: SbCl₅ (g) ⇌ SbCl₃ (g) + Cl₂ (g).<br>a) Calcule las presiones parciales de cada gas en el equilibrio.<br>b) Calcule las constantes de equilibrio Kp y Kc.<br>c) Justifique si se modifica el equilibrio al realizar la reacción a la misma temperatura y a una presión menor de 1 atm.<br>d) Indique si se modifica el equilibrio al añadir un catalizador. Justifique la respuesta.<br>Datos: R = 0,082 atm·L·mol⁻¹·K⁻¹.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Presiones parciales en el equilibrio:</strong><br>
                            Grado de disociación: \\(\\alpha = 0,292\\).<br>
                            Tabla de moles (base 1 mol inicial de SbCl₅):<br>
                            - SbCl₅: \\(1 - \\alpha = 0,708\\) mol<br>
                            - SbCl₃: \\(\\alpha = 0,292\\) mol<br>
                            - Cl₂: \\(\\alpha = 0,292\\) mol<br>
                            Moles totales: \\(n_T = 1 + \\alpha = 1,292\\) mol<br>
                            Presión total: \\(P_T = 1\\ \\text{atm}\\)<br>
                            \\[P(\\ce{SbCl5}) = \\frac{0,708}{1,292} \\cdot 1 = \\boxed{0,547\\ \\text{atm}}\\]
                            \\[P(\\ce{SbCl3}) = P(\\ce{Cl2}) = \\frac{0,292}{1,292} \\cdot 1 = \\boxed{0,226\\ \\text{atm}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Constantes de equilibrio:</strong><br>
                            \\[K_p = \\frac{P(\\ce{SbCl3}) \\cdot P(\\ce{Cl2})}{P(\\ce{SbCl5})} = \\frac{0,226 \\cdot 0,226}{0,547} = \\boxed{0,093}\\]
                            \\[K_c = K_p \\cdot (RT)^{-\\Delta n} = 0,093 \\cdot (0,082 \\cdot 455)^{-1} = \\boxed{2,49 \\cdot 10^{-3}}\\]
                            (siendo \\(T = 182 + 273 = 455\\ \\text{K}\\) y \\(\\Delta n = 1\\)).
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de una presión menor de 1 atm:</strong><br>
                            Al disminuir la presión (aumento de volumen), el sistema evoluciona según el principio de Le Chatelier hacia el lado con mayor número de moles gaseosos para contrarrestar el cambio. Como \\(\\Delta n = 1 > 0\\), el equilibrio se desplaza hacia la <strong>formación de productos</strong> (SbCl₃ y Cl₂).
                        </div>
                        <div class='paso'>
                            <strong>d) Efecto de un catalizador:</strong><br>
                            Un catalizador acelera la velocidad de las reacciones directa e inversa por igual, disminuyendo la energía de activación. <strong>No modifica el equilibrio</strong> (ni la composición ni las constantes Kp y Kc), solo hace que se alcance antes.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2020 - Descomposición del agua",
                    enunciado: "A 2600 K se introduce 1 mol de agua en un recipiente vacío de 100 L, alcanzándose el siguiente equilibrio: 2 H₂O (g) ⇌ 2 H₂ (g) + O₂ (g), con Kp = 4,2·10⁻⁵.<br>a) Calcule Kc.<br>b) Calcule el número de moles de O₂ en el equilibrio.<br>c) Justifique cómo se modifica el equilibrio al aumentar la presión total por disminución de volumen.<br>Dato: R = 0,082 atm·L·mol⁻¹·K⁻¹.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Cálculo de Kc:</strong><br>
                            \\[\\Delta n = 3 - 2 = 1\\]
                            \\[K_c = K_p \\cdot (RT)^{-\\Delta n} = 4,2 \\cdot 10^{-5} \\cdot (0,082 \\cdot 2600)^{-1} = \\boxed{2,0 \\cdot 10^{-7}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Moles de O₂ en el equilibrio:</strong><br>
                            Tabla de moles (base 1 mol inicial de H₂O, grado de disociación \\(\\alpha\\)):<br>
                            - H₂O: \\(1 - 2\\alpha\\)<br>
                            - H₂: \\(2\\alpha\\)<br>
                            - O₂: \\(\\alpha\\)<br>
                            Moles totales: \\(n_T = 1 + \\alpha\\)<br>
                            \\[K_p = \\frac{(P_{\\ce{H2}})^2 \\cdot P_{\\ce{O2}}}{(P_{\\ce{H2O}})^2} = \\frac{\\left(\\frac{2\\alpha}{1+\\alpha}P_T\\right)^2 \\cdot \\left(\\frac{\\alpha}{1+\\alpha}P_T\\right)}{\\left(\\frac{1-2\\alpha}{1+\\alpha}P_T\\right)^2} = \\frac{4\\alpha^3 \\cdot P_T}{(1+\\alpha)(1-2\\alpha)^2}\\]
                            \\[P_T = \\frac{n_T RT}{V} = \\frac{(1+\\alpha) \\cdot 0,082 \\cdot 2600}{100} = 2,132(1+\\alpha)\\ \\text{atm}\\]
                            Sustituyendo y resolviendo (aproximando \\(\\alpha\\) pequeño): \\(\\alpha \\approx 0,017\\).<br>
                            \\[n_{\\ce{O2}} = \\alpha \\approx \\boxed{0,017\\ \\text{mol}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de aumentar la presión (disminuir volumen):</strong><br>
                            Al aumentar la presión, el equilibrio se desplaza hacia el lado con menor número de moles gaseosos. Como \\(\\Delta n = 1 > 0\\), se desplaza hacia la <strong>formación de reactivos</strong> (H₂O).
                        </div>
                    `
                },
                {
                    titulo: "Septiembre 2020 - Disociación del N₂O₄",
                    enunciado: "A 30 °C se introducen 138 g de N₂O₄ en un matraz de 50,0 L, transcurriendo la siguiente reacción: N₂O₄ (g) ⇌ 2 NO₂ (g), con Kp = 0,21.<br>a) Escriba el equilibrio y exprese el número de moles en equilibrio de cada compuesto en función del grado de disociación.<br>b) Obtenga el grado de disociación.<br>c) Justifique, sin realizar cálculos, si el grado de disociación aumenta, disminuye o permanece constante cuando la reacción tiene lugar a la misma temperatura, pero a menor presión.<br>Datos: Masas atómicas N = 14, O = 16; R = 0,082 atm·L·mol⁻¹·K⁻¹.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Moles en equilibrio en función de \\(\\alpha\\):</strong><br>
                            Moles iniciales de N₂O₄: \\(n_0 = \\frac{138}{92} = 1,50\\ \\text{mol}\\)<br>
                            - \\(n_{\\ce{N2O4}} = 1,50(1 - \\alpha)\\)<br>
                            - \\(n_{\\ce{NO2}} = 3\\alpha\\)<br>
                            Moles totales: \\(n_T = 1,50(1 + \\alpha)\\)
                        </div>
                        <div class='paso'>
                            <strong>b) Grado de disociación:</strong><br>
                            \\[K_p = \\frac{(P_{\\ce{NO2}})^2}{P_{\\ce{N2O4}}} = \\frac{\\left(\\frac{3\\alpha}{1,50(1+\\alpha)}P_T\\right)^2}{\\frac{1,50(1-\\alpha)}{1,50(1+\\alpha)}P_T} = \\frac{4\\alpha^2 \\cdot P_T}{1 - \\alpha^2}\\]
                            \\[P_T = \\frac{n_T RT}{V} = \\frac{1,50(1+\\alpha) \\cdot 0,082 \\cdot 303}{50} = 0,745(1+\\alpha)\\ \\text{atm}\\]
                            Sustituyendo \\(K_p = 0,21\\) y resolviendo: \\(\\alpha \\approx \\boxed{0,23}\\).
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de menor presión:</strong><br>
                            Al disminuir la presión, el equilibrio se desplaza hacia el lado con mayor número de moles gaseosos (\\(\\Delta n = 1 > 0\\)), es decir, hacia la formación de NO₂. Por tanto, el grado de disociación <strong>aumenta</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2021 - Síntesis de amoniaco",
                    enunciado: "En un reactor de 25,00 L a 440 °C, se introducen 5,00 mol de hidrógeno y 2,00 mol de nitrógeno, obteniendo 50,0 g de NH₃ (g) cuando se alcanza el equilibrio 3 H₂ (g) + N₂ (g) ⇌ 2 NH₃(g).<br>a) Exprese el número de moles en equilibrio de los reactivos y del producto, en función de x (cambio de concentración en mol), y calcule sus valores.<br>b) Obtenga Kc y Kp.<br>c) Razone cómo se modifica el equilibrio si la reacción transcurre a la misma temperatura, pero aumenta la presión total.<br>Datos: R = 0,082 atm·L·mol⁻¹·K⁻¹; Masas atómicas: H = 1,0; N = 14,0.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Moles en equilibrio:</strong><br>
                            Moles de NH₃ formados: \\(n_{\\ce{NH3}} = \\frac{50,0}{17} = 2,94\\ \\text{mol}\\)<br>
                            Si reaccionan \\(x\\) mol de N₂:<br>
                            - \\(n_{\\ce{N2}} = 2,00 - x\\)<br>
                            - \\(n_{\\ce{H2}} = 5,00 - 3x\\)<br>
                            - \\(n_{\\ce{NH3}} = 2x = 2,94 \\Rightarrow x = 1,47\\ \\text{mol}\\)<br>
                            \\[n_{\\ce{N2}} = 2,00 - 1,47 = \\boxed{0,53\\ \\text{mol}}\\]
                            \\[n_{\\ce{H2}} = 5,00 - 3(1,47) = \\boxed{0,59\\ \\text{mol}}\\]
                            \\[n_{\\ce{NH3}} = \\boxed{2,94\\ \\text{mol}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Kc y Kp:</strong><br>
                            Concentraciones: \\([\\ce{N2}] = 0,0212\\ \\text{M}\\); \\([\\ce{H2}] = 0,0236\\ \\text{M}\\); \\([\\ce{NH3}] = 0,1176\\ \\text{M}\\)<br>
                            \\[K_c = \\frac{[\\ce{NH3}]^2}{[\\ce{N2}][\\ce{H2}]^3} = \\frac{(0,1176)^2}{0,0212 \\cdot (0,0236)^3} = \\boxed{5,0 \\cdot 10^{-4}}\\]
                            \\[K_p = K_c \\cdot (RT)^{\\Delta n} = 5,0 \\cdot 10^{-4} \\cdot (0,082 \\cdot 713)^{-2} = \\boxed{15}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de aumentar la presión:</strong><br>
                            Al aumentar la presión, el equilibrio se desplaza hacia el lado con menor número de moles gaseosos (\\(\\Delta n = 2 - 4 = -2\\)). Por tanto, evoluciona hacia la <strong>formación de productos</strong> (NH₃).
                        </div>
                    `
                },
                {
                    titulo: "Julio 2021 - Disociación del PCl₅",
                    enunciado: "En un recipiente de 1,0 L a 300 °C se introducen 5,0 g de PCl₅. La presión final cuando se alcanza el equilibrio PCl₅ (g) ⇌ PCl₃ (g) + Cl₂ (g) es de 2,0 atm.<br>a) Calcule el grado de disociación del PCl₅.<br>b) Determine la presión parcial de cada uno de los gases en el equilibrio.<br>c) Calcule Kc y Kp.<br>Datos: R = 0,082 atm·L·K⁻¹·mol⁻¹; Masas atómicas: P = 31,0; Cl = 35,5.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Grado de disociación:</strong><br>
                            Moles iniciales de PCl₅: \\(n_0 = \\frac{5,0}{208,5} = 0,024\\ \\text{mol}\\)<br>
                            En el equilibrio: \\(n_T = n_0(1 + \\alpha)\\)<br>
                            \\[P_T = \\frac{n_T RT}{V} \\Rightarrow 2,0 = \\frac{0,024(1+\\alpha) \\cdot 0,082 \\cdot 573}{1,0}\\]
                            \\[1 + \\alpha = 1,774 \\Rightarrow \\alpha = \\boxed{0,75}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Presiones parciales:</strong><br>
                            Fracciones molares: \\(\\chi_{\\ce{PCl5}} = \\frac{1-\\alpha}{1+\\alpha} = \\frac{0,25}{1,75} = 0,143\\); \\(\\chi_{\\ce{PCl3}} = \\chi_{\\ce{Cl2}} = \\frac{\\alpha}{1+\\alpha} = 0,429\\)<br>
                            \\[P_{\\ce{PCl5}} = 0,143 \\cdot 2,0 = \\boxed{0,28\\ \\text{atm}}\\]
                            \\[P_{\\ce{PCl3}} = P_{\\ce{Cl2}} = 0,429 \\cdot 2,0 = \\boxed{0,86\\ \\text{atm}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Kc y Kp:</strong><br>
                            \\[K_p = \\frac{P_{\\ce{PCl3}} \\cdot P_{\\ce{Cl2}}}{P_{\\ce{PCl5}}} = \\frac{0,86 \\cdot 0,86}{0,28} = \\boxed{2,6}\\]
                            \\[K_c = K_p \\cdot (RT)^{-1} = 2,6 \\cdot (0,082 \\cdot 573)^{-1} = \\boxed{0,055}\\]
                        </div>
                    `
                },
                {
                    titulo: "Junio 2022 - Descomposición del NOBr",
                    enunciado: "El compuesto NOBr (g) descompone según la reacción: 2 NOBr (g) ⇌ 2 NO (g) + Br₂ (g) (ΔH = +16,3 kJ/mol). En un matraz de 1,0 L se introducen 2,0 mol de NOBr. Cuando se alcanza el equilibrio a 25 °C, se observa que se han formado 0,050 mol de Br₂. Calcule:<br>a) Las concentraciones de cada especie en el equilibrio.<br>b) Kc y Kp.<br>c) La presión total.<br>d) Justifique dos formas de favorecer la descomposición del NOBr.<br>Dato: R = 0,082 atm·L·mol⁻¹·K⁻¹.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Concentraciones en el equilibrio:</strong><br>
                            Si se forman 0,050 mol de Br₂, reaccionan 0,10 mol de NOBr y se forman 0,10 mol de NO.<br>
                            - \\([\\ce{NOBr}] = 2,0 - 0,10 = \\boxed{1,9\\ \\text{M}}\\)<br>
                            - \\([\\ce{NO}] = \\boxed{0,1\\ \\text{M}}\\)<br>
                            - \\([\\ce{Br2}] = \\boxed{0,05\\ \\text{M}}\\)
                        </div>
                        <div class='paso'>
                            <strong>b) Kc y Kp:</strong><br>
                            \\[K_c = \\frac{[\\ce{NO}]^2[\\ce{Br2}]}{[\\ce{NOBr}]^2} = \\frac{(0,1)^2 \\cdot 0,05}{(1,9)^2} = \\boxed{1,385 \\cdot 10^{-4}}\\]
                            \\[K_p = K_c \\cdot (RT)^{\\Delta n} = 1,385 \\cdot 10^{-4} \\cdot (0,082 \\cdot 298)^{1} = \\boxed{3,384 \\cdot 10^{-3}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Presión total:</strong><br>
                            Moles totales: \\(n_T = 1,9 + 0,1 + 0,05 = 2,05\\ \\text{mol}\\)<br>
                            \\[P_T = \\frac{n_T RT}{V} = \\frac{2,05 \\cdot 0,082 \\cdot 298}{1,0} = \\boxed{50,1\\ \\text{atm}}\\]
                        </div>
                        <div class='paso'>
                            <strong>d) Formas de favorecer la descomposición:</strong><br>
                            1. <strong>Aumentar la temperatura</strong>: la reacción es endotérmica (\\(\\Delta H > 0\\)), por lo que al calentar el equilibrio se desplaza hacia productos.<br>
                            2. <strong>Disminuir la presión</strong> (aumentar el volumen): \\(\\Delta n = 3 - 2 = 1 > 0\\), por lo que al bajar la presión el equilibrio se desplaza hacia el lado con más moles gaseosos (productos).
                        </div>
                    `
                },
                {
                    titulo: "Julio 2022 - Síntesis de amoniaco a 800 K",
                    enunciado: "En un reactor se introducen 0,46 mol de N₂ y 0,77 mol de H₂. Cuando se alcanza el equilibrio a 800 K: N₂(g) + 3 H₂(g) ⇌ 2 NH₃(g) (ΔH = -107,2 kJ), se han formado 0,012 mol de amoniaco y la presión total del recipiente es 13,1 atm.<br>a) Calcule el valor de Kc.<br>b) Determine el valor de Kp.<br>c) Razone cómo se modificaría el rendimiento de la reacción si se realiza a 1200 K.<br>Dato: R = 0,082 atm·L·K⁻¹·mol⁻¹.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Kc:</strong><br>
                            Si se forman 0,012 mol de NH₃, reaccionan 0,006 mol de N₂ y 0,018 mol de H₂.<br>
                            - \\(n_{\\ce{N2}} = 0,46 - 0,006 = 0,454\\ \\text{mol}\\)<br>
                            - \\(n_{\\ce{H2}} = 0,77 - 0,018 = 0,752\\ \\text{mol}\\)<br>
                            - \\(n_{\\ce{NH3}} = 0,012\\ \\text{mol}\\)<br>
                            Moles totales: \\(n_T = 1,218\\ \\text{mol}\\)<br>
                            Volumen: \\(V = \\frac{n_T RT}{P_T} = \\frac{1,218 \\cdot 0,082 \\cdot 800}{13,1} = 6,10\\ \\text{L}\\)<br>
                            Concentraciones: \\([\\ce{N2}] = 0,0744\\ \\text{M}\\); \\([\\ce{H2}] = 0,1233\\ \\text{M}\\); \\([\\ce{NH3}] = 0,00197\\ \\text{M}\\)<br>
                            \\[K_c = \\frac{[\\ce{NH3}]^2}{[\\ce{N2}][\\ce{H2}]^3} = \\boxed{2,68 \\cdot 10^{-2}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Kp:</strong><br>
                            \\[K_p = K_c \\cdot (RT)^{\\Delta n} = 2,68 \\cdot 10^{-2} \\cdot (0,082 \\cdot 800)^{-2} = \\boxed{6,22 \\cdot 10^{-6}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de aumentar la temperatura a 1200 K:</strong><br>
                            La reacción es exotérmica (\\(\\Delta H < 0\\)). Al aumentar la temperatura, el equilibrio se desplaza hacia el lado endotérmico (reactivos) según Le Chatelier. Por tanto, el rendimiento <strong>disminuye</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2023 - Descomposición del etano",
                    enunciado: "En un matraz de 3 L se introducen 4,38 g de C₂H₆. Se calienta a 627 °C y se da el proceso: C₂H₆ (g) ⇌ C₂H₄ (g) + H₂ (g), cuya Kp vale 0,05. Calcule:<br>a) La presión inicial de C₂H₆.<br>b) El valor de Kc.<br>c) Las concentraciones de todos los gases en el equilibrio.<br>Datos: R = 0,082 atm·L·mol⁻¹·K⁻¹; Masas atómicas: H = 1,0; C = 12,0.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Presión inicial de C₂H₆:</strong><br>
                            Moles: \\(n_0 = \\frac{4,38}{30} = 0,146\\ \\text{mol}\\)<br>
                            \\[P_0 = \\frac{n_0 RT}{V} = \\frac{0,146 \\cdot 0,082 \\cdot 900}{3} = \\boxed{3,59\\ \\text{atm}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Kc:</strong><br>
                            \\[K_c = K_p \\cdot (RT)^{-\\Delta n} = 0,05 \\cdot (0,082 \\cdot 900)^{-1} = \\boxed{6,77 \\cdot 10^{-4}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Concentraciones en el equilibrio:</strong><br>
                            Sea \\(x\\) la concentración de C₂H₆ que reacciona:<br>
                            \\[K_c = \\frac{x \\cdot x}{0,0487 - x} = 6,77 \\cdot 10^{-4}\\]
                            Resolviendo: \\(x = 5,4 \\cdot 10^{-3}\\ \\text{M}\\)<br>
                            - \\([\\ce{C2H6}] = 0,0487 - 0,0054 = \\boxed{0,0432\\ \\text{M}}\\)<br>
                            - \\([\\ce{C2H4}] = [\\ce{H2}] = \\boxed{5,4 \\cdot 10^{-3}\\ \\text{M}}\\)
                        </div>
                    `
                },
                {
                    titulo: "Julio 2023 - Descomposición de la formamida",
                    enunciado: "Cuando se calientan 0,20 mol de HCONH₂ a 127 °C en un reactor de 5,0 L, tiene lugar la reacción: HCONH₂ (g) ⇌ NH₃ (g) + CO (g) (ΔH = +29,4 kJ·mol⁻¹), alcanzándose en el equilibrio una presión total de 1,6 atm.<br>a) Calcule las concentraciones de cada especie en el equilibrio.<br>b) Calcule Kc, Kp y la fracción molar del reactivo que queda sin descomponer.<br>c) Justifique lo que ocurrirá en el equilibrio al aumentar la temperatura.<br>Dato: R = 0,082 atm·L·mol⁻¹·K⁻¹.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Concentraciones en el equilibrio:</strong><br>
                            Sea \\(x\\) el número de moles de HCONH₂ que se descomponen:<br>
                            - \\(n_{\\ce{HCONH2}} = 0,20 - x\\)<br>
                            - \\(n_{\\ce{NH3}} = x\\)<br>
                            - \\(n_{\\ce{CO}} = x\\)<br>
                            Moles totales: \\(n_T = 0,20 + x\\)<br>
                            \\[P_T = \\frac{n_T RT}{V} \\Rightarrow 1,6 = \\frac{(0,20+x) \\cdot 0,082 \\cdot 400}{5,0}\\]
                            \\[0,20 + x = 0,244 \\Rightarrow x = 0,044\\ \\text{mol}\\]
                            Concentraciones:<br>
                            - \\([\\ce{HCONH2}] = \\frac{0,156}{5,0} = \\boxed{0,032\\ \\text{M}}\\)<br>
                            - \\([\\ce{NH3}] = [\\ce{CO}] = \\frac{0,044}{5,0} = \\boxed{0,0080\\ \\text{M}}\\)
                        </div>
                        <div class='paso'>
                            <strong>b) Kc, Kp y fracción molar:</strong><br>
                            \\[K_c = \\frac{[\\ce{NH3}][\\ce{CO}]}{[\\ce{HCONH2}]} = \\frac{0,0080 \\cdot 0,0080}{0,032} = \\boxed{2,0 \\cdot 10^{-3}}\\]
                            \\[K_p = K_c \\cdot (RT)^{\\Delta n} = 2,0 \\cdot 10^{-3} \\cdot (0,082 \\cdot 400)^{1} = \\boxed{0,066}\\]
                            \\[\\chi_{\\ce{HCONH2}} = \\frac{0,156}{0,244} = \\boxed{0,67}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de aumentar la temperatura:</strong><br>
                            La reacción es endotérmica (\\(\\Delta H > 0\\)). Al aumentar la temperatura, el equilibrio se desplaza hacia productos según Le Chatelier, favoreciendo la descomposición del HCONH₂.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2024 - Descomposición del COCl₂",
                    enunciado: "Se introduce cierta cantidad de COCl₂ en un recipiente de 1,0 L a 500 K y 0,94 atm, produciéndose su descomposición según la reacción: COCl₂ (g) ⇌ CO (g) + Cl₂ (g). Sabiendo que a dicha temperatura el valor de Kp es 0,19, calcule:<br>a) La concentración molar inicial de COCl₂.<br>b) Las concentraciones molares de cada especie en el equilibrio.<br>c) La presión parcial de cada uno de los gases en el equilibrio.<br>Dato: R = 0,082 atm·L·mol⁻¹·K⁻¹.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Concentración inicial de COCl₂:</strong><br>
                            \\[[\\ce{COCl2}]_0 = \\frac{P_0}{RT} = \\frac{0,94}{0,082 \\cdot 500} = \\boxed{0,023\\ \\text{M}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Concentraciones en el equilibrio:</strong><br>
                            Sea \\(x\\) la concentración de COCl₂ que se descompone:<br>
                            - \\([\\ce{COCl2}] = 0,023 - x\\)<br>
                            - \\([\\ce{CO}] = [\\ce{Cl2}] = x\\)<br>
                            \\[K_p = K_c(RT)^{\\Delta n} \\Rightarrow K_c = \\frac{0,19}{0,082 \\cdot 500} = 4,63 \\cdot 10^{-3}\\]
                            \\[\\frac{x^2}{0,023 - x} = 4,63 \\cdot 10^{-3} \\Rightarrow x = 8,2 \\cdot 10^{-3}\\ \\text{M}\\]
                            - \\([\\ce{COCl2}] = 0,023 - 0,0082 = \\boxed{0,015\\ \\text{M}}\\)<br>
                            - \\([\\ce{CO}] = [\\ce{Cl2}] = \\boxed{8,2 \\cdot 10^{-3}\\ \\text{M}}\\)
                        </div>
                        <div class='paso'>
                            <strong>c) Presiones parciales:</strong><br>
                            \\[P_{\\ce{COCl2}} = 0,015 \\cdot 0,082 \\cdot 500 = \\boxed{0,62\\ \\text{atm}}\\]
                            \\[P_{\\ce{CO}} = P_{\\ce{Cl2}} = 8,2 \\cdot 10^{-3} \\cdot 0,082 \\cdot 500 = \\boxed{0,34\\ \\text{atm}}\\]
                        </div>
                    `
                },
                {
                    titulo: "Julio 2024 - Síntesis de metanol",
                    enunciado: "La síntesis industrial del metanol viene dada por: CO (g) + 2 H₂ (g) ⇌ CH₃OH (g). La reacción tiene lugar en un recipiente de 5,0 L y a 510 °C se alcanza el equilibrio, obteniéndose 0,78 mol de metanol. Calcule:<br>a) Las concentraciones de cada especie en el equilibrio, si se ha partido de 1,0 mol de CO y 2,0 mol de H₂.<br>b) Las constantes de equilibrio, Kc y Kp.<br>Datos: R = 0,082 atm·L·mol⁻¹·K⁻¹. Entalpías de formación estándar a 25°C (kJ·mol⁻¹): CO (g) = −110,5; CH₃OH (g) = −238,7.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Concentraciones en el equilibrio:</strong><br>
                            Si se forman 0,78 mol de CH₃OH, reaccionan 0,78 mol de CO y 1,56 mol de H₂.<br>
                            - \\(n_{\\ce{CO}} = 1,0 - 0,78 = 0,22\\ \\text{mol} \\Rightarrow [\\ce{CO}] = \\frac{0,22}{5,0} = \\boxed{0,044\\ \\text{M}}\\)<br>
                            - \\(n_{\\ce{H2}} = 2,0 - 1,56 = 0,44\\ \\text{mol} \\Rightarrow [\\ce{H2}] = \\frac{0,44}{5,0} = \\boxed{0,088\\ \\text{M}}\\)<br>
                            - \\(n_{\\ce{CH3OH}} = 0,78\\ \\text{mol} \\Rightarrow [\\ce{CH3OH}] = \\frac{0,78}{5,0} = \\boxed{0,156\\ \\text{M}}\\)
                        </div>
                        <div class='paso'>
                            <strong>b) Kc y Kp:</strong><br>
                            \\[K_c = \\frac{[\\ce{CH3OH}]}{[\\ce{CO}][\\ce{H2}]^2} = \\frac{0,156}{0,044 \\cdot (0,088)^2} = \\boxed{4,57 \\cdot 10^{2}}\\]
                            \\[K_p = K_c \\cdot (RT)^{\\Delta n} = 4,57 \\cdot 10^{2} \\cdot (0,082 \\cdot 783)^{-2} = \\boxed{0,11}\\]
                            (siendo \\(T = 510 + 273 = 783\\ \\text{K}\\) y \\(\\Delta n = 1 - 3 = -2\\)).
                        </div>
                    `
                },
                {
                    titulo: "Junio 2025 - Equilibrio del amoniaco",
                    enunciado: "En un recipiente de 2,50 L se introducen 0,0200 mol de N₂ y 0,0300 mol de H₂. Se eleva la temperatura hasta 400 °C, y la reacción N₂ (g) + 3 H₂ (g) ⇌ 2 NH₃ (g) alcanza el equilibrio, obteniéndose ΔH < 0 y una concentración de NH₃ (g) de 0,00375 mol·L⁻¹.<br>a) Calcule las presiones parciales de cada sustancia en el equilibrio y la presión total.<br>b) Obtenga Kp y Kc.<br>c) Justifique si el rendimiento del proceso aumenta realizándolo a menor temperatura.<br>d) Razone cómo varía la concentración de N₂ cuando se añade al equilibrio un gas inerte como el Ar a volumen y temperatura constantes.<br>Dato: R = 0,0820 atm·L·mol⁻¹·K⁻¹.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Presiones parciales y presión total:</strong><br>
                            Moles de NH₃ en el equilibrio: \\(n_{\\ce{NH3}} = 0,00375 \\cdot 2,50 = 0,009375\\ \\text{mol}\\)<br>
                            Si se forman 0,009375 mol de NH₃, reaccionan 0,0046875 mol de N₂ y 0,0140625 mol de H₂.<br>
                            - \\(n_{\\ce{N2}} = 0,0200 - 0,0046875 = 0,01531\\ \\text{mol}\\)<br>
                            - \\(n_{\\ce{H2}} = 0,0300 - 0,0140625 = 0,01594\\ \\text{mol}\\)<br>
                            - \\(n_{\\ce{NH3}} = 0,009375\\ \\text{mol}\\)<br>
                            Moles totales: \\(n_T = 0,04063\\ \\text{mol}\\)<br>
                            \\[P_{\\ce{N2}} = \\frac{0,01531 \\cdot 0,0820 \\cdot 673}{2,50} = \\boxed{0,338\\ \\text{atm}}\\]
                            \\[P_{\\ce{H2}} = \\frac{0,01594 \\cdot 0,0820 \\cdot 673}{2,50} = \\boxed{0,351\\ \\text{atm}}\\]
                            \\[P_{\\ce{NH3}} = \\frac{0,009375 \\cdot 0,0820 \\cdot 673}{2,50} = \\boxed{0,206\\ \\text{atm}}\\]
                            \\[P_T = 0,338 + 0,351 + 0,206 = \\boxed{0,895\\ \\text{atm}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Kp y Kc:</strong><br>
                            \\[K_p = \\frac{(P_{\\ce{NH3}})^2}{P_{\\ce{N2}} \\cdot (P_{\\ce{H2}})^3} = \\frac{(0,206)^2}{0,338 \\cdot (0,351)^3} = \\boxed{2,9}\\]
                            \\[K_c = K_p \\cdot (RT)^{-\\Delta n} = 2,9 \\cdot (0,0820 \\cdot 673)^{2} = \\boxed{8,83 \\cdot 10^{-3}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de menor temperatura:</strong><br>
                            La reacción es exotérmica (\\(\\Delta H < 0\\)). Al disminuir la temperatura, el equilibrio se desplaza hacia el lado que desprende calor (productos) según Le Chatelier. Por tanto, el rendimiento <strong>aumenta</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Efecto de añadir un gas inerte a V y T constantes:</strong><br>
                            Al añadir Ar a volumen y temperatura constantes, las presiones parciales de los gases reactivos no cambian (sus moles y el volumen son los mismos). El equilibrio <strong>no se modifica</strong>, por lo que la concentración de N₂ <strong>no varía</strong>.
                        </div>
                    `
                }
            ]
        },
        "equilibrio_solubilidad": {
            nombre: "Equilibrio de Solubilidad (Kps)",
            problemas: [
                {
                    titulo: "Julio 2019 - Cromato de plata",
                    enunciado: "Se dispone de 100 mL de una disolución que contiene 0,194 g de K₂CrO₄ a la que se añade 100 mL de otra disolución que contiene iones Ag⁺. Considere que los volúmenes son aditivos.<br>a) Calcule la concentración inicial, expresada en molaridad, de iones cromato, presentes en la disolución antes de que se alcance el equilibrio de precipitación. Escriba el equilibrio de precipitación.<br>b) Determine la solubilidad de la sal formada en mol·L⁻¹ y g·L⁻¹.<br>c) Calcule la concentración mínima de iones Ag⁺ necesaria para que precipite la sal.<br>d) Si a una disolución que contiene la misma concentración de iones SO₄²⁻ e iones CrO₄²⁻ se le añaden iones Ag⁺, justifique, sin hacer cálculos, qué sal precipitará primero.<br>Datos: Ks(Ag₂CrO₄) = 1,9·10⁻¹²; Ks(Ag₂SO₄) = 1,6·10⁻⁵. Masas atómicas: O = 16; K = 39; Cr = 52; Ag = 108.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Concentración inicial de cromato y equilibrio de precipitación:</strong><br>
                            Moles de K₂CrO₄: \\(n = \\frac{0,194}{194} = 1,0 \\cdot 10^{-3}\\ \\text{mol}\\)<br>
                            Volumen total: \\(V = 0,100 + 0,100 = 0,200\\ \\text{L}\\)<br>
                            \\[[\\ce{CrO4^{2-}}]_0 = \\frac{1,0 \\cdot 10^{-3}}{0,200} = \\boxed{0,005\\ \\text{M}}\\]
                            Equilibrio de precipitación:<br>
                            \\[\\ce{Ag2CrO4 (s) <=> 2 Ag+ (ac) + CrO4^{2-} (ac)}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Solubilidad de la sal:</strong><br>
                            \\[K_s = [\\ce{Ag+}]^2[\\ce{CrO4^{2-}}] = (2s)^2 \\cdot s = 4s^3\\]
                            \\[s = \\sqrt[3]{\\frac{1,9 \\cdot 10^{-12}}{4}} = \\boxed{7,8 \\cdot 10^{-5}\\ \\text{mol}\\cdot\\text{L}^{-1}}\\]
                            \\[s = 7,8 \\cdot 10^{-5} \\cdot 332 = \\boxed{0,0259\\ \\text{g}\\cdot\\text{L}^{-1}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Concentración mínima de Ag⁺ para precipitar:</strong><br>
                            \\[[\\ce{Ag+}] = \\sqrt{\\frac{K_s}{[\\ce{CrO4^{2-}}]}} = \\sqrt{\\frac{1,9 \\cdot 10^{-12}}{0,005}} = \\boxed{1,95 \\cdot 10^{-5}\\ \\text{M}}\\]
                        </div>
                        <div class='paso'>
                            <strong>d) Sal que precipita primero:</strong><br>
                            Precipita primero la sal que necesite <strong>menor concentración de Ag⁺</strong> para alcanzar su Ks. Como \\(K_s(\\ce{Ag2CrO4}) \\ll K_s(\\ce{Ag2SO4})\\), se necesita mucha menos [Ag⁺] para precipitar el cromato. Por tanto, precipita primero el <strong>Ag₂CrO₄</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2020 - Hidróxido de calcio",
                    enunciado: "Una disolución saturada de hidróxido de calcio presenta una solubilidad de 0,96 g·L⁻¹.<br>a) Formule el equilibrio de solubilidad, indicando el estado de cada especie.<br>b) Calcule el producto de solubilidad del hidróxido de calcio.<br>Datos: Masas atómicas: H = 1,0; O = 16,0; Ca = 40,1.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Equilibrio de solubilidad:</strong><br>
                            \\[\\ce{Ca(OH)2 (s) <=> Ca^{2+} (ac) + 2 OH- (ac)}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Producto de solubilidad:</strong><br>
                            Masa molar: \\(M = 40,1 + 2(16,0 + 1,0) = 74,1\\ \\text{g/mol}\\)<br>
                            \\[s = \\frac{0,96}{74,1} = 1,30 \\cdot 10^{-2}\\ \\text{mol/L}\\]
                            \\[[\\ce{Ca^{2+}}] = s\\ ;\\ [\\ce{OH-}] = 2s\\]
                            \\[K_{ps} = [\\ce{Ca^{2+}}][\\ce{OH-}]^2 = s \\cdot (2s)^2 = 4s^3 = 4(1,30 \\cdot 10^{-2})^3 = \\boxed{8,8 \\cdot 10^{-6}}\\]
                        </div>
                    `
                },
                {
                    titulo: "Septiembre 2020 - Sulfato de bario",
                    enunciado: "Se mezclan 0,250 L de disolución de sulfato de potasio 3,00·10⁻² M con 0,250 L de disolución de nitrato de bario 2,00·10⁻³ M. Considere los volúmenes aditivos.<br>a) Escriba el equilibrio de solubilidad que tiene lugar.<br>b) Justifique numéricamente si se forma algún precipitado.<br>c) Explique cómo varía la solubilidad del sulfato de bario cuando se le añade una disolución de sulfato de amonio.<br>Dato: Ks(sulfato de bario) = 1,1·10⁻¹⁰.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Equilibrio de solubilidad:</strong><br>
                            \\[\\ce{BaSO4 (s) <=> Ba^{2+} (ac) + SO4^{2-} (ac)}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) ¿Se forma precipitado?</strong><br>
                            Volumen total: \\(V = 0,500\\ \\text{L}\\)<br>
                            \\[[\\ce{SO4^{2-}}] = \\frac{0,250 \\cdot 3,00 \\cdot 10^{-2}}{0,500} = 1,50 \\cdot 10^{-2}\\ \\text{M}\\]
                            \\[[\\ce{Ba^{2+}}] = \\frac{0,250 \\cdot 2,00 \\cdot 10^{-3}}{0,500} = 1,00 \\cdot 10^{-3}\\ \\text{M}\\]
                            \\[Q = [\\ce{Ba^{2+}}][\\ce{SO4^{2-}}] = (1,00 \\cdot 10^{-3})(1,50 \\cdot 10^{-2}) = 1,50 \\cdot 10^{-5}\\]
                            Como \\(Q = 1,50 \\cdot 10^{-5} > K_s = 1,1 \\cdot 10^{-10}\\), <strong>sí precipita</strong> BaSO₄.
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de añadir sulfato de amonio:</strong><br>
                            El sulfato de amonio aporta iones SO₄²⁻ (ion común). Según el principio de Le Chatelier, el equilibrio de solubilidad se desplaza hacia la izquierda (formación de sólido), por lo que la solubilidad del BaSO₄ <strong>disminuye</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2021 - Fluoruro de bario",
                    enunciado: "Se mezclan 0,200 L de disolución de nitrato de bario 0,100 M con 0,100 L de disolución de fluoruro de potasio 0,400 M. Considere los volúmenes aditivos.<br>a) Escriba el equilibrio de solubilidad que tiene lugar, detallando el estado de todas las especies.<br>b) Justifique numéricamente la precipitación del fluoruro de bario.<br>c) Explique si aumenta, disminuye o no varía la solubilidad del fluoruro de bario cuando se le añade una disolución de ácido fluorhídrico.<br>Dato: Ks(fluoruro de bario) = 1,0·10⁻⁶.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Equilibrio de solubilidad:</strong><br>
                            \\[\\ce{BaF2 (s) <=> Ba^{2+} (ac) + 2 F- (ac)}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) ¿Precipita el BaF₂?</strong><br>
                            Volumen total: \\(V = 0,300\\ \\text{L}\\)<br>
                            \\[[\\ce{Ba^{2+}}] = \\frac{0,200 \\cdot 0,100}{0,300} = 6,67 \\cdot 10^{-2}\\ \\text{M}\\]
                            \\[[\\ce{F-}] = \\frac{0,100 \\cdot 0,400}{0,300} = 0,133\\ \\text{M}\\]
                            \\[Q = [\\ce{Ba^{2+}}][\\ce{F-}]^2 = (6,67 \\cdot 10^{-2})(0,133)^2 = 1,18 \\cdot 10^{-3}\\]
                            Como \\(Q = 1,18 \\cdot 10^{-3} > K_s = 1,0 \\cdot 10^{-6}\\), <strong>sí precipita</strong> BaF₂.
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de añadir ácido fluorhídrico:</strong><br>
                            El HF aporta iones F⁻ (ion común), lo que desplaza el equilibrio de solubilidad hacia la formación de sólido. Además, el HF es un ácido débil y en disolución genera F⁻, reforzando el efecto del ion común. Por tanto, la solubilidad del BaF₂ <strong>disminuye</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2022 - Yodatos de mercurio y plata",
                    enunciado: "Sobre una disolución que contiene iones Hg²⁺ 0,010 M y Ag⁺ 0,020 M se va añadiendo gota a gota otra disolución con iones IO₃⁻. Considere que la adición de las gotas de IO₃⁻ no produce cambio de volumen.<br>a) Escriba los equilibrios de solubilidad ajustados de las dos sales de IO₃⁻, detallando el estado de todas las especies.<br>b) Escriba la expresión de Ks en función de la solubilidad y calcule la solubilidad molar de Hg(IO₃)₂ y AgIO₃.<br>c) ¿Cómo varía la solubilidad de los yodatos de mercurio y plata al añadir un exceso de yodato a la disolución?<br>Datos: Ks(Hg(IO₃)₂) = 2,0·10⁻¹⁹; Ks(AgIO₃) = 3,0·10⁻⁸.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Equilibrios de solubilidad:</strong><br>
                            \\[\\ce{Hg(IO3)2 (s) <=> Hg^{2+} (ac) + 2 IO3- (ac)}\\]
                            \\[\\ce{AgIO3 (s) <=> Ag+ (ac) + IO3- (ac)}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Expresiones de Ks y solubilidades molares:</strong><br>
                            Para \\(\\ce{Hg(IO3)2}\\): \\(K_s = [\\ce{Hg^{2+}}][\\ce{IO3-}]^2 = s \\cdot (2s)^2 = 4s^3\\)<br>
                            \\[s = \\sqrt[3]{\\frac{2,0 \\cdot 10^{-19}}{4}} = \\boxed{3,68 \\cdot 10^{-7}\\ \\text{M}}\\]
                            Para \\(\\ce{AgIO3}\\): \\(K_s = [\\ce{Ag+}][\\ce{IO3-}] = s^2\\)<br>
                            \\[s = \\sqrt{3,0 \\cdot 10^{-8}} = \\boxed{1,73 \\cdot 10^{-9}\\ \\text{M}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de añadir un exceso de yodato:</strong><br>
                            El exceso de IO₃⁻ actúa como ion común, desplazando ambos equilibrios de solubilidad hacia la formación de sólido. Por tanto, la solubilidad de ambas sales <strong>disminuye</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2023 - Hidróxido de calcio (pH)",
                    enunciado: "El pH de una disolución saturada de Ca(OH)₂ en agua pura, a una cierta temperatura, es 9,36.<br>a) Escriba el equilibrio de solubilidad ajustado, detallando el estado de todas las especies.<br>c) Si sobre la disolución saturada de Ca(OH)₂ en agua pura se adiciona nitrato de calcio, razone el efecto que produce sobre el equilibrio, la solubilidad y la cantidad de Ca(OH)₂.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Equilibrio de solubilidad:</strong><br>
                            \\[\\ce{Ca(OH)2 (s) <=> Ca^{2+} (ac) + 2 OH- (ac)}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de añadir nitrato de calcio:</strong><br>
                            El nitrato de calcio aporta iones Ca²⁺ (ion común). Según el principio de Le Chatelier, el equilibrio de solubilidad se desplaza hacia la izquierda (formación de sólido). Por tanto:<br>
                            - El equilibrio se desplaza hacia <strong>formación de reactivos</strong> (Ca(OH)₂ sólido).<br>
                            - La <strong>solubilidad disminuye</strong>.<br>
                            - La <strong>cantidad de Ca(OH)₂ sólido aumenta</strong> (precipita más).
                        </div>
                    `
                },
                {
                    titulo: "Julio 2023 - Fluoruro de magnesio",
                    enunciado: "Responda a las siguientes cuestiones:<br>a) Formule el equilibrio de solubilidad del fluoruro de magnesio, indicando el estado de cada especie. Escriba la expresión para Ks en función de la solubilidad.<br>b) Determine el valor de la solubilidad del fluoruro de magnesio en mol·L⁻¹ y en g·L⁻¹.<br>c) Determine la concentración de ion fluoruro en una disolución saturada de fluoruro de magnesio.<br>d) Justifique cómo varía la solubilidad del fluoruro de magnesio al añadirle un exceso de ácido fluorhídrico.<br>Datos: Ks(fluoruro de magnesio) = 5,2·10⁻¹¹; Masas atómicas: F = 19,0; Mg = 24,3.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Equilibrio de solubilidad y expresión de Ks:</strong><br>
                            \\[\\ce{MgF2 (s) <=> Mg^{2+} (ac) + 2 F- (ac)}\\]
                            \\[K_s = [\\ce{Mg^{2+}}][\\ce{F-}]^2 = s \\cdot (2s)^2 = 4s^3\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Solubilidad en mol·L⁻¹ y g·L⁻¹:</strong><br>
                            \\[s = \\sqrt[3]{\\frac{5,2 \\cdot 10^{-11}}{4}} = \\boxed{2,4 \\cdot 10^{-4}\\ \\text{mol}\\cdot\\text{L}^{-1}}\\]
                            Masa molar: \\(M = 24,3 + 2(19,0) = 62,3\\ \\text{g/mol}\\)<br>
                            \\[s = 2,4 \\cdot 10^{-4} \\cdot 62,3 = \\boxed{0,015\\ \\text{g}\\cdot\\text{L}^{-1}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Concentración de F⁻:</strong><br>
                            \\[[\\ce{F-}] = 2s = 2(2,4 \\cdot 10^{-4}) = \\boxed{4,8 \\cdot 10^{-4}\\ \\text{M}}\\]
                        </div>
                        <div class='paso'>
                            <strong>d) Efecto de añadir exceso de HF:</strong><br>
                            El HF aporta iones F⁻ (ion común), desplazando el equilibrio de solubilidad hacia la formación de sólido. Por tanto, la solubilidad del MgF₂ <strong>disminuye</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2024 - Hidróxido de cadmio",
                    enunciado: "Una muestra que está contaminada con 8,3·10⁻⁴ mg·L⁻¹ de Cd²⁺, se hace reaccionar con un hidróxido para eliminar parte del Cd²⁺, precipitándolo en forma de hidróxido de cadmio.<br>a) Formule el equilibrio de solubilidad del hidróxido de cadmio en agua, detallando el estado de agregación de cada especie. Escriba la expresión de la Ks.<br>b) Calcule el pH mínimo necesario para que se inicie la precipitación del hidróxido.<br>c) Tras la precipitación de cierta cantidad de hidróxido de cadmio, se añade cloruro de cadmio a la disolución. Razone qué efecto tiene lugar y cómo afecta a la solubilidad del hidróxido.<br>Datos: Ks(hidróxido de cadmio) = 1,2·10⁻¹⁴; Masa atómica: Cd = 112,4.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Equilibrio de solubilidad y Ks:</strong><br>
                            \\[\\ce{Cd(OH)2 (s) <=> Cd^{2+} (ac) + 2 OH- (ac)}\\]
                            \\[K_s = [\\ce{Cd^{2+}}][\\ce{OH-}]^2\\]
                        </div>
                        <div class='paso'>
                            <strong>b) pH mínimo para iniciar la precipitación:</strong><br>
                            \\[[\\ce{Cd^{2+}}] = \\frac{8,3 \\cdot 10^{-4}\\ \\text{mg/L}}{112,4\\ \\text{g/mol}} = \\frac{8,3 \\cdot 10^{-7}\\ \\text{g/L}}{112,4} = 7,38 \\cdot 10^{-9}\\ \\text{M}\\]
                            \\[[\\ce{OH-}] = \\sqrt{\\frac{K_s}{[\\ce{Cd^{2+}}]}} = \\sqrt{\\frac{1,2 \\cdot 10^{-14}}{7,38 \\cdot 10^{-9}}} = 1,28 \\cdot 10^{-3}\\ \\text{M}\\]
                            \\[pOH = -\\log(1,28 \\cdot 10^{-3}) = 2,89 \\Rightarrow pH = 14 - 2,89 = \\boxed{11,1}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de añadir cloruro de cadmio:</strong><br>
                            El cloruro de cadmio aporta iones Cd²⁺ (ion común). Según Le Chatelier, el equilibrio de solubilidad se desplaza hacia la formación de sólido. Se produce el <strong>efecto del ion común</strong> y la solubilidad del hidróxido de cadmio <strong>disminuye</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2024 - Sulfato de bario (precipitación)",
                    enunciado: "Se mezclan 10 mL de cloruro de bario 0,10 M con 40 mL de sulfato de sodio 0,10 M.<br>a) Escriba la ecuación de la reacción entre ambas sales y la del equilibrio de solubilidad de la sal precipitante, detallando el estado de todas las especies. Calcule si precipitará sulfato de bario. Suponga volúmenes aditivos.<br>b) Calcule la concentración, en g·mL⁻¹, de SO₄²⁻, una vez alcanzado el equilibrio de precipitación.<br>c) Razone cómo varía la solubilidad de una disolución saturada de sulfato de bario en agua, si se le adicionan unas gotas de disolución acuosa diluida de ácido sulfúrico.<br>Datos: Ks(BaSO₄) = 1,5·10⁻⁹. Masas atómicas: O = 16,0; S = 32,0.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Reacción y equilibrio de solubilidad:</strong><br>
                            \\[\\ce{BaCl2 (ac) + Na2SO4 (ac) -> BaSO4 (s) + 2 NaCl (ac)}\\]
                            \\[\\ce{BaSO4 (s) <=> Ba^{2+} (ac) + SO4^{2-} (ac)}\\]
                            Volumen total: \\(V = 0,050\\ \\text{L}\\)<br>
                            \\[[\\ce{Ba^{2+}}] = \\frac{0,010 \\cdot 0,10}{0,050} = 0,020\\ \\text{M}\\]
                            \\[[\\ce{SO4^{2-}}] = \\frac{0,040 \\cdot 0,10}{0,050} = 0,080\\ \\text{M}\\]
                            \\[Q = [\\ce{Ba^{2+}}][\\ce{SO4^{2-}}] = 0,020 \\cdot 0,080 = 1,6 \\cdot 10^{-3}\\]
                            Como \\(Q = 1,6 \\cdot 10^{-3} > K_s = 1,5 \\cdot 10^{-9}\\), <strong>sí precipita</strong> BaSO₄.
                        </div>
                        <div class='paso'>
                            <strong>b) Concentración de SO₄²⁻ en el equilibrio:</strong><br>
                            Como precipita casi todo el Ba²⁺ (reactivo limitante), la concentración de SO₄²⁻ en exceso es:<br>
                            \\[[\\ce{SO4^{2-}}] \\approx 0,080 - 0,020 = 0,060\\ \\text{M}\\]
                            (ajustando con la solubilidad residual: \\([\\ce{SO4^{2-}}] = 0,060\\ \\text{M}\\) aproximadamente).<br>
                            \\[[\\ce{SO4^{2-}}] = 0,060\\ \\text{mol/L} \\cdot 96\\ \\text{g/mol} = 5,76\\ \\text{g/L} = \\boxed{5,76 \\cdot 10^{-3}\\ \\text{g}\\cdot\\text{mL}^{-1}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de añadir ácido sulfúrico:</strong><br>
                            El ácido sulfúrico aporta iones SO₄²⁻ (ion común), desplazando el equilibrio de solubilidad hacia la formación de sólido. Por tanto, la solubilidad del BaSO₄ <strong>disminuye</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2025 - Hidróxido de cromo(III)",
                    enunciado: "El Cr³⁺ y otros cationes metálicos se pueden recuperar de los vertidos del proceso industrial mediante precipitación y decantación en medio básico, por ejemplo, como hidróxido de cromo(III). Sabiendo que a 25 °C la solubilidad de dicho hidróxido es 0,0013 mg·L⁻¹:<br>i) Formule el equilibrio de solubilidad del hidróxido de cromo(III) en agua, indicando el estado de agregación de cada especie.<br>ii) Determine su producto de solubilidad.<br>Datos: Masas atómicas: H = 1; O = 16; Cr = 52.",
                    solucion: `
                        <div class='paso'>
                            <strong>i) Equilibrio de solubilidad:</strong><br>
                            \\[\\ce{Cr(OH)3 (s) <=> Cr^{3+} (ac) + 3 OH- (ac)}\\]
                        </div>
                        <div class='paso'>
                            <strong>ii) Producto de solubilidad:</strong><br>
                            Masa molar: \\(M = 52 + 3(16 + 1) = 103\\ \\text{g/mol}\\)<br>
                            \\[s = \\frac{0,0013 \\cdot 10^{-3}\\ \\text{g/L}}{103\\ \\text{g/mol}} = 1,26 \\cdot 10^{-8}\\ \\text{mol/L}\\]
                            \\[K_s = [\\ce{Cr^{3+}}][\\ce{OH-}]^3 = s \\cdot (3s)^3 = 27s^4 = 27(1,26 \\cdot 10^{-8})^4 = \\boxed{7,7 \\cdot 10^{-31}}\\]
                        </div>
                    `
                }
            ]
        }
    }
};                            