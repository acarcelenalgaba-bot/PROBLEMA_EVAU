if (typeof baseDatosTemas === 'undefined') {
    var baseDatosTemas = {};
}

baseDatosTemas["tema4"] = {
    id: "tema4",
    titulo: "Tema 4: Termoquímica",
    deshabilitado: false,
    secciones: {
        "primera-ley": {
            nombre: "1. Primera Ley de la Termodinámica",
            problemas: [
                {
                    titulo: "Sistema cerrado",
                    enunciado: "Un sistema absorbe una cantidad de calor de 500 calorías y a continuación realiza un trabajo de 3 kJ. ¿Cuánto ha variado su energía interna? <br> <strong>Solución: \\(-910\\ \\text{J}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>Resolución:</strong><br>
                            \\(Q = 500\\ \\text{cal} \\cdot 4,18\\ \\text{J/cal} = 2090\\ \\text{J}\\).<br>
                            \\(W = 3\\ \\text{kJ} = 3000\\ \\text{J}\\).<br>
                            \\[\\Delta U = Q - W = 2090 - 3000 = -910\\ \\text{J}\\]
                            <strong>Solución: \\(-910\\ \\text{J}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Trabajo de expansión",
                    enunciado: "Considera la reacción entre disoluciones acuosas de bicarbonato de sodio, \\(\\ce{NaHCO3(aq)}\\) y ácido acético, \\(\\ce{HC2H3O2(aq)}\\): \\[\\ce{NaHCO3(aq) + HC2H3O2(aq) -> NaC2H3O2(aq) + H2O(l) + CO2(g)}\\] Si esta reacción ocurre a la presión constante de 1 atm, calcula el trabajo que hace el sistema para empujar a la atmósfera cuando un mol de \\(\\ce{NaHCO3}\\) reacciona a 25 ºC. <br> Dato: \\(1\\ \\text{atm · l} = 101,3\\ \\text{J}\\). <br> <strong>Solución: \\(-2475\\ \\text{J}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>Resolución:</strong><br>
                            El trabajo de expansión frente a la atmósfera es \\(W = -P\\Delta V\\).<br>
                            A partir de la estequiometría, por cada mol de \\(\\ce{NaHCO3}\\) se forma 1 mol de \\(\\ce{CO2(g)}\\):<br>
                            \\[\\Delta n = 1\\ \\text{mol}\\]
                            \\[\\Delta V = \\frac{nRT}{P} = \\frac{1 \\cdot 0,082 \\cdot 298}{1} \\approx 24,44\\ \\text{L}\\]
                            \\[W = -P\\Delta V = -1\\ \\text{atm} \\cdot 24,44\\ \\text{L} = -24,44\\ \\text{atm·L}\\]
                            \\[W = -24,44 \\cdot 101,3 \\approx -2475\\ \\text{J}\\]
                            <strong>Solución: \\(-2475\\ \\text{J}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Energía interna",
                    enunciado: "Determina la variación de energía interna que sufre un sistema cuando: <br>a) Realiza un trabajo de 400 J. <br>b) Cede 50 calorías al entorno. <br>c) Absorbe 300 J del entorno. <br>d) Se comprime 80 cm³ a una presión constante de 1,2 atm. <br>e) Cede 200 calorías al entorno y se realiza un trabajo de 1200 J sobre el sistema. <br> <strong>Solución: a) \\(-400\\ \\text{J}\\); b) \\(-209\\ \\text{J}\\); c) \\(300\\ \\text{J}\\); d) \\(9,72\\ \\text{J}\\); e) \\(364\\ \\text{J}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> \\(Q=0\\), \\(W=400\\ \\text{J}\\): \\(\\Delta U = -400\\ \\text{J}\\).<br>
                            <strong>b)</strong> \\(Q=-50\\ \\text{cal} \\cdot 4,18 = -209\\ \\text{J}\\): \\(\\Delta U = -209\\ \\text{J}\\).<br>
                            <strong>c)</strong> \\(Q=300\\ \\text{J}\\), \\(W=0\\): \\(\\Delta U = 300\\ \\text{J}\\).<br>
                            <strong>d)</strong> Compresión: \\(W=-P\\Delta V\\).<br>
                            \\[\\Delta V = -80\\ \\text{cm}^3 = -80 \\cdot 10^{-6}\\ \\text{m}^3\\]
                            \\[W = -(1,2 \\cdot 101325)( -80 \\cdot 10^{-6}) \\approx 9,72\\ \\text{J}\\]
                            \\[\\Delta U = Q - W = 0 - (-9,72) = 9,72\\ \\text{J}\\]
                            <strong>e)</strong> \\(Q=-200\\ \\text{cal} = -836\\ \\text{J}\\); \\(W=-1200\\ \\text{J}\\) (trabajo sobre el sistema).<br>
                            \\[\\Delta U = -836 - (-1200) = 364\\ \\text{J}\\]
                            <strong>Solución: a) \\(-400\\ \\text{J}\\); b) \\(-209\\ \\text{J}\\); c) \\(300\\ \\text{J}\\); d) \\(9,72\\ \\text{J}\\); e) \\(364\\ \\text{J}\\).</strong>
                        </div>
                    `
                }
            ]
        },

        "entalpia-concepto": {
            nombre: "2. Entalpía",
            problemas: [
                {
                    titulo: "Reacciones endotérmicas",
                    enunciado: "Señala cuáles de las siguientes reacciones son endotérmicas: <br>a) \\(\\ce{H2(g) + 1/2O2(g) -> H2O(g)}\\ \\quad \\Delta H = -57,8\\ \\text{kcal}\\) <br>b) \\(\\ce{1/2N2(g) + 1/2O2(g) -> NO(g)}\\ \\quad \\Delta H = 21,6\\ \\text{kcal}\\) <br>c) \\(\\ce{1/2N2(g) + O2(g) + 8,1 kcal -> NO2(g)}\\) <br>d) \\(\\ce{1/2N2(g) + 3/2H2(g) -> NH3(g) + 11 kcal}\\) <br>e) \\(\\ce{NH3(g) -> 1/2N2(g) + 3/2H2(g)}\\ \\quad \\Delta H = 11\\ \\text{kcal}\\) <br> <strong>Solución: b), c), d) y e).</strong>",
                    solucion: `
                        <div class='paso'>
                            Son endotérmicas aquellas en las que \\(\\Delta H > 0\\) o que absorben calor.<br>
                            <strong>Solución: b), c), d) y e).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Calor desprendido",
                    enunciado: "Utilizando el diagrama de entalpía, calcula el calor desprendido cuando el peróxido de hidrógeno se descompone, a presión constante, en agua y oxígeno según: \\[\\ce{H2O2(l) -> H2O(l) + 1/2O2(g)}\\] <div style='text-align: center; margin-bottom: 20px;'> <img src='img/entalpia_agua.png' style='width: 25rem; max-width: 100%;height: auto; border-radius: 8px; box-shadow: 0px 4px 8px rgba(0,0,0,0.1);'> </div> <br><strong>Solución: se desprenden aproximadamente \\(98,0\\ \\text{kJ/mol}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            A partir del diagrama de entalpía y de las entalpías de formación:<br>
                            \\[\\Delta H_r^\\circ = \\Delta H_f^\\circ(\\ce{H2O(l)}) - \\Delta H_f^\\circ(\\ce{H2O2(l)})\\]
                            Con valores habituales: \\(\\Delta H_f^\\circ(\\ce{H2O(l)}) \\approx -285,8\\ \\text{kJ/mol}\\) y \\(\\Delta H_f^\\circ(\\ce{H2O2(l)}) \\approx -187,8\\ \\text{kJ/mol}\\).<br>
                            \\[\\Delta H_r^\\circ \\approx -285,8 - (-187,8) = -98,0\\ \\text{kJ/mol}\\]
                            <strong>Solución: se desprenden aproximadamente \\(98,0\\ \\text{kJ/mol}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Entalpía de formación",
                    enunciado: "¿Qué significado tiene el dato \\(\\Delta H_f^\\circ \\ce{NO(g)} = 90,2\\ \\text{kJ/mol}\\)? Escribe la ecuación termoquímica correspondiente.",
                    solucion: `
                        <div class='paso'>
                            Significa que la formación de 1 mol de \\(\\ce{NO(g)}\\) a partir de sus elementos en estado estándar absorbe 90,2 kJ.<br>
                            \\[\\ce{1/2N2(g) + 1/2O2(g) -> NO(g)}\\qquad \\Delta H_f^\\circ = +90,2\\ \\text{kJ/mol}\\]
                        </div>
                    `
                },
                {
                    titulo: "Ecuaciones de formación",
                    enunciado: "Escribe la ecuación correspondiente a la reacción de formación de las siguientes sustancias: <br>a) Glucosa (s) \\(\\ce{C6H12O6}\\); <br>b) Etanol (l) \\(\\ce{CH3-CH2OH}\\); <br>c) Ácido etanoico (l) \\(\\ce{CH3-COOH}\\); <br>d) Nitrato de zinc (s) \\(\\ce{Zn(NO3)2}\\).",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> \\[\\ce{6C(s, grafito) + 6H2(g) + 3O2(g) -> C6H12O6(s)}\\]<br>
                            <strong>b)</strong> \\[\\ce{2C(s, grafito) + 3H2(g) + 1/2O2(g) -> CH3-CH2OH(l)}\\]<br>
                            <strong>c)</strong> \\[\\ce{2C(s, grafito) + 2H2(g) + O2(g) -> CH3-COOH(l)}\\]<br>
                            <strong>d)</strong> \\[\\ce{Zn(s) + N2(g) + 3O2(g) -> Zn(NO3)2(s)}\\]
                        </div>
                    `
                },
                {
                    titulo: "Variación de entalpía estándar",
                    enunciado: "Calcula la variación de entalpía estándar de las reacciones: <br> a) \\(\\ce{2SO2(g) + O2(g) -> 2SO3(g)}\\) <br> b) \\(\\ce{N2O4(g) -> 2NO2(g)}\\) <br><br> Datos: \\(\\Delta H_f^\\circ \\ce{SO2(g)} = -296,8\\ \\text{kJ/mol}\\); \\(\\Delta H_f^\\circ \\ce{SO3(g)} = -395,6\\ \\text{kJ/mol}\\); \\(\\Delta H_f^\\circ \\ce{NO2(g)} = 33,2\\ \\text{kJ/mol}\\); \\(\\Delta H_f^\\circ \\ce{N2O4(g)} = 9,2\\ \\text{kJ/mol}\\).<br> <strong>Solución: \\(-197,6\\ \\text{kJ}\\); \\(57,2\\ \\text{kJ}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H_1 = 2(-395,6) - 2(-296,8) = -197,6\\ \\text{kJ}\\]
                            \\[\\Delta H_2 = 2(33,2) - 9,2 = 57,2\\ \\text{kJ}\\]
                            <strong>Solución: \\(-197,6\\ \\text{kJ}\\); \\(57,2\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Calor absorbido",
                    enunciado: "Calcula cuánto calor se absorbe en la descomposición de 100 g de bicarbonato de sodio: \\[\\ce{2NaHCO3(s) -> Na2CO3(s) + H2O(l) + CO2(g)}\\] Datos: \\(\\Delta H_f^\\circ \\ce{Na2CO3(s)} = -1131\\); \\(\\ce{H2O(l)} = -285,9\\); \\(\\ce{CO2(g)} = -393,5\\); \\(\\ce{NaHCO3(s)} = -947,7\\ \\text{kJ/mol}\\).<br><strong>Solución: se absorben \\(50,6\\ \\text{kJ}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H_r^\\circ = [(-1131)+(-285,9)+(-393,5)] - 2(-947,7) = 85,0\\ \\text{kJ}\\]
                            para 2 mol de \\(\\ce{NaHCO3}\\).<br>
                            \\(M(\\ce{NaHCO3}) = 84\\ \\text{g/mol}\\); \\(n = 100/84 = 1,1905\\ \\text{mol}\\).<br>
                            \\[Q = 1,1905 \\cdot \\frac{85,0}{2} \\approx 50,6\\ \\text{kJ}\\]
                            <strong>Solución: se absorben \\(50,6\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Entalpía de combustión",
                    enunciado: "A 298 K y 1,00 atm, la entalpía estándar de combustión del propano, \\(\\ce{C3H8 (g)}\\), es \\(\\ce{- 2219,2 kJ/mol}\\). <br> a) Escribe y ajusta la ecuación termoquímica de la combustión del propano expresando el estado de agregación de reactivos y productos.<br> b) Calcula la cantidad de calor que se desprende al quemar 15,0 L de propano medidos a 25 \\(\\ce{^\\circ C}\\) y 1,20 atm.<br> Dato: \\(\\ce{R = 0,082 \\ atm \\cdot L \\cdot mol^{-1} \\cdot K^{-1} } \\). <br> <strong>Solución: se desprende \\(1630\\ \\text{kJ}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> \\[\\ce{C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)}\\]\\[\\Delta H_c^\\circ = -2219,2\\ \\text{kJ/mol}\\]<br>
                            <strong>b)</strong> \\[n = \\frac{PV}{RT} = \\frac{1,20 \\cdot 15,0}{0,082 \\cdot 298} \\approx 0,736\\ \\text{mol}\\]<br>
                            \\[Q = 0,736 \\cdot 2219,2 \\approx 1630\\ \\text{kJ}\\]
                            <strong>Solución: se desprende \\(1630\\ \\text{kJ}\\).</strong>
                        </div>
                    `

                },
                {
                    titulo: "Entalpía de combustión",
                    enunciado: "A partir de: \\(\\Delta H_f^\\circ \\ce{H2O(l)} = -285,8\\); \\(\\Delta H_f^\\circ \\ce{CO2(g)} = -393,5\\); \\(\\Delta H_f^\\circ \\ce{C4H10(l)} = -125\\ \\text{kJ/mol}\\). <br>a) Determina la entalpía de combustión del gas butano. <br>b) Calcula la energía desprendida al quemar el butano de una bombona de 20 litros a 25 ºC y 7,4 atm. <br> <strong>Solución: a) \\(-2878\\ \\text{kJ/mol}\\); b) \\(17400\\ \\text{kJ}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> \\[\\ce{C4H10(l) + 13/2O2(g) -> 4CO2(g) + 5H2O(l)}\\]
                            \\[\\Delta H_c^\\circ = 4(-393,5)+5(-285,8)-(-125) = -2878\\ \\text{kJ/mol}\\]
                            <strong>b)</strong> \\[n = \\frac{PV}{RT} = \\frac{7,4 \\cdot 20}{0,082 \\cdot 298} \\approx 6,05\\ \\text{mol}\\]
                            \\[Q = 6,05 \\cdot 2878 \\approx 1,74 \\cdot 10^4\\ \\text{kJ}\\]
                            <strong>Solución: a) \\(-2878\\ \\text{kJ/mol}\\); b) \\(17400\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Variación de entalpía estándar",
                    enunciado: "a) Calcula la variación de entalpía estándar de la reacción del carburo de calcio \\(\\ce{CaC2(s)}\\) con agua líquida para dar hidróxido de calcio sólido y acetileno \\(\\ce{C2H2(g)}\\). <br>b) Calcula la energía que se desprende mediante calor durante la combustión, a presión constante, de 50 dm³ de acetileno a 25 ºC y \\(1,01\\cdot10^5\\ \\text{Pa}\\). <br><br> Datos: \\(\\Delta H_f^\\circ \\ce{CaC2(s)}=-62,7\\); \\(\\ce{H2O(l)}=-285,6\\); \\(\\ce{Ca(OH)2(s)}=-76,1\\); \\(\\ce{C2H2(g)}=-84,6\\); \\(\\ce{CO2(g)}=-393,5\\ \\text{kJ/mol}\\). <br> <strong>Solución: a) \\(473,2\\ \\text{kJ/mol}\\); b) \\(2015,52\\ \\text{kJ}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> \\[\\ce{CaC2(s) + 2H2O(l) -> Ca(OH)2(s) + C2H2(g)}\\]
                            \\[\\Delta H_r^\\circ = [(-76,1)+(-84,6)] - [(-62,7)+2(-285,6)] = 473,2\\ \\text{kJ/mol}\\]
                            <strong>b)</strong> \\[\\ce{C2H2(g) + 5/2O2(g) -> 2CO2(g) + H2O(l)}\\]
                            \\[\\Delta H_c^\\circ = 2(-393,5)+(-285,6)-(-84,6) = -988,0\\ \\text{kJ/mol}\\]
                            \\[n = \\frac{PV}{RT} = \\frac{1,01\\cdot10^5 \\cdot 0,050}{8,314 \\cdot 298} \\approx 2,04\\ \\text{mol}\\]
                            \\[Q = 2,04 \\cdot 988,0 \\approx 2015,52\\ \\text{kJ}\\]
                            <strong>Solución: a) \\(473,2\\ \\text{kJ/mol}\\); b) \\(2015,52\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Calor de combustión y composición molar",
                    enunciado: "Un proceso necesita 36200 kJ, que se obtienen quemando a 25 ºC y 1 atm, 422 L de una mezcla de etano y propano. Calcula: <br>a) El calor de combustión de ambos. <br>b) La composición molar del gas. <br><br> Datos: \\(\\Delta H_f^\\circ \\ce{C2H6(g)}=-85\\); \\(\\ce{H2O(l)}=-285,6\\); \\(\\ce{C3H8(g)}=-104\\); \\(\\ce{CO2(g)}=-393,5\\). <br> <strong>Solución: a) \\(-1558,5\\ \\text{kJ/mol}\\) y \\(-2218,5\\ \\text{kJ/mol}\\); b) 19% etano y 81% propano.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> Etano:<br>
                            \\[\\ce{C2H6(g) + 7/2O2(g) -> 2CO2(g) + 3H2O(l)}\\]
                            \\[\\Delta H_c^\\circ = 2(-393,5)+3(-285,6)-(-85) = -1558,5\\ \\text{kJ/mol}\\]
                            Propano:<br>
                            \\[\\ce{C3H8(g) + 5O2(g) -> 3CO2(g) + 4H2O(l)}\\]
                            \\[\\Delta H_c^\\circ = 3(-393,5)+4(-285,6)-(-104) = -2218,5\\ \\text{kJ/mol}\\]
                            <strong>b)</strong> Moles totales:<br>
                            \\[n = \\frac{PV}{RT} = \\frac{1 \\cdot 422}{0,082 \\cdot 298} \\approx 17,26\\ \\text{mol}\\]
                            Resolviendo para etano \\(x\\) y propano \\(y\\):<br>
                            \\[x+y=17,26\\]
                            \\[1558,5x+2218,5y=36200\\]
                            Resultado aproximado: \\(x \\approx 19\\%\\), \\(y \\approx 81\\%\\).<br>
                            <strong>Solución: a) \\(-1558,5\\ \\text{kJ/mol}\\) y \\(-2218,5\\ \\text{kJ/mol}\\); b) 19% etano y 81% propano.</strong>
                        </div>
                    `
                },
                {
                    titulo: "Entalpía de formación",
                    enunciado: "La entalpía de combustión de la sacarosa \\(\\ce{C12H22O11}\\) es \\(\\Delta H_r = -5644\\ \\text{kJ/mol}\\). Calcula su entalpía de formación. <br><br> Datos: \\(\\Delta H_f^\\circ \\ce{H2O(l)}=-285,8\\); \\(\\ce{CO2(g)}=-393,5\\). <br> <strong>Solución: \\(-2222\\ \\text{kJ/mol}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            \\[\\ce{C12H22O11(s) + 12O2(g) -> 12CO2(g) + 11H2O(l)}\\]
                            \\[\\Delta H_c^\\circ = 12(-393,5)+11(-285,8)-\\Delta H_f^\\circ(\\ce{C12H22O11})\\]
                            \\[-5644 = -7865,8 - \\Delta H_f^\\circ\\]
                            \\[\\Delta H_f^\\circ = -2221,8\\ \\text{kJ/mol}\\]
                            <strong>Solución: \\(-2222\\ \\text{kJ/mol}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Variación de entalpía de combustión",
                    enunciado: "Cuando se quema una muestra de 2,44 g de naftaleno sólido \\(\\ce{C10H8}\\) a volumen constante y 25 ºC, se desprenden 90,2 kJ. Calcula la variación de entalpía de la reacción de combustión. <br><br> Datos: \\(\\Delta H_f^\\circ \\ce{H2O(l)}=-285,8\\); \\(\\ce{CO2(g)}=-393,5\\). <br> <strong>Solución: aproximadamente \\(-4737\\ \\text{kJ/mol}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            \\(M(\\ce{C10H8}) = 128\\ \\text{g/mol}\\); \\(n = 2,44/128 = 0,01906\\ \\text{mol}\\).<br>
                            \\[\\Delta U_c = -\\frac{90,2}{0,01906} \\approx -4733\\ \\text{kJ/mol}\\]
                            \\[\\ce{C10H8(s) + 12O2(g) -> 10CO2(g) + 4H2O(l)}\\]
                            \\[\\Delta n_{gas} = 10-12 = -2\\]
                            \\[\\Delta H = \\Delta U + \\Delta nRT = -4733 + (-2)(8,314\\cdot10^{-3})(298) \\approx -4738\\ \\text{kJ/mol}\\]
                            <strong>Solución: aproximadamente \\(-4737\\ \\text{kJ/mol}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Entalpía de combustión",
                    enunciado: "Compara las características energéticas de la miel (80% glucosa \\(\\ce{C6H12O6}\\)) y la ginebra (45% etanol \\(\\ce{C2H5OH}\\)). <br>a) Reacciones de combustión. <br>b) Entalpías estándar de combustión en kJ/mol. <br>c) Energía desprendida por kg de cada una. <br><br> Datos: \\(\\Delta H_f^\\circ\\): \\(\\ce{C6H12O6(s)}=-1260\\); \\(\\ce{C2H5OH(l)}=-277,6\\); \\(\\ce{CO2(g)}=-393,5\\); \\(\\ce{H2O(l)}=-285,8\\). <br> <strong>Solución: la ginebra proporciona algo más de energía por kg en estas condiciones.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> Glucosa:<br>
                            \\[\\ce{C6H12O6(s) + 6O2(g) -> 6CO2(g) + 6H2O(l)}\\]
                            Etanol:<br>
                            \\[\\ce{C2H5OH(l) + 3O2(g) -> 2CO2(g) + 3H2O(l)}\\]
                            <strong>b)</strong> Glucosa:<br>
                            \\[\\Delta H_c^\\circ = 6(-393,5)+6(-285,8)-(-1260) = -2815,8\\ \\text{kJ/mol}\\]
                            Etanol:<br>
                            \\[\\Delta H_c^\\circ = 2(-393,5)+3(-285,8)-(-277,6) = -1366,8\\ \\text{kJ/mol}\\]
                            <strong>c)</strong> Miel (80% glucosa): \\(800/180 = 4,444\\ \\text{mol}\\).<br>
                            \\[E \\approx 4,444 \\cdot 2815,8 \\approx 1,25\\cdot10^4\\ \\text{kJ/kg}\\]
                            Ginebra (45% etanol): \\(450/46 = 9,783\\ \\text{mol}\\).<br>
                            \\[E \\approx 9,783 \\cdot 1366,8 \\approx 1,34\\cdot10^4\\ \\text{kJ/kg}\\]
                            <strong>Solución: la ginebra proporciona algo más de energía por kg en estas condiciones.</strong>
                        </div>
                    `
                },
                {
                    titulo: "Entalpía de formación",
                    enunciado: "Calcula la entalpía de formación del \\(\\ce{CO(g)}\\): \\[\\ce{C(s) + 1/2O2(g) -> CO(g)}\\] a partir de: <br>(1) \\(\\ce{C(s) + O2 -> CO2(g)}\\ \\Delta H_1 = -393,5\\ \\text{kJ}\\) <br>(2) \\(\\ce{2CO(g) + O2(g) -> 2CO2(g)}\\ \\Delta H_2 = -566\\ \\text{kJ}\\) <br> <strong>Solución: \\(-110,5\\ \\text{kJ/mol}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H_f^\\circ(\\ce{CO}) = \\Delta H_1 - \\frac{1}{2}\\Delta H_2\\]
                            \\[= -393,5 - \\frac{1}{2}(-566) = -110,5\\ \\text{kJ/mol}\\]
                            <strong>Solución: \\(-110,5\\ \\text{kJ/mol}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Entalpía de formación. Ley de Hess",
                    enunciado: "Con los datos a 298 K: \\[\\ce{C(grafito) + O2(g) -> CO2(g)}\\ \\quad\\quad \\Delta H = -376,2\\ \\text{kJ}\\] \\[\\ce{H2(g) + 1/2O2(g) -> H2O(l)}\\ \\quad\\quad \\Delta H = -273,28\\ \\text{kJ}\\] \\[\\ce{C6H6(l) + 15/2O2(g) -> 3H2O(l) + 6CO2(g)}\\ \\quad\\quad \\Delta H = -3124\\ \\text{kJ}\\] Calcula el calor de formación del benceno (kJ/mol).<br> <strong>Solución: \\(46,96\\ \\text{kJ/mol}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H_f^\\circ(\\ce{C6H6}) = 6(-376,2)+3(-273,28)-(-3124) = 46,96\\ \\text{kJ/mol}\\]
                            <strong>Solución: \\(46,96\\ \\text{kJ/mol}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Entalpía de reacción. Ley de Hess",
                    enunciado: "El monóxido de plomo, PbO, reacciona con carbono según la siguiente ecuación termoquímica: \\(\\ce{PbO(s) + C(grafito) -> Pb(s) + CO(g)}\\ \\Delta H^\\circ = 107\\ \\text{kJ/mol}\\). Por otra parte, el monóxido de carbono se puede obtener por oxidación del carbono, mediante la reacción: \\(\\ce{C(grafito) + 1/2O2(g) -> CO(g)}\\ \\Delta H^\\circ = 155\\ \\text{kJ/mol}\\). <br>a) Calcula la entalpía de formación del \\(\\ce{PbO}\\). <br>b) ¿Cuánta energía se necesita para que 414 g de \\(\\ce{Pb}\\) reaccionen con \\(\\ce{O2}\\)? <br>c) Dibuja el diagrama entálpico.<br> <strong>Solución: a) \\(48\\ \\text{kJ/mol}\\); b) \\(96\\ \\text{kJ}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> Invirtiendo la primera y sumando la segunda:<br>
                            \\[\\ce{Pb(s) + 1/2O2(g) -> PbO(s)}\\qquad \\Delta H_f^\\circ = -107 + 155 = 48\\ \\text{kJ/mol}\\]
                            <strong>b)</strong> \\(n(\\ce{Pb}) = 414/207 = 2\\ \\text{mol}\\).<br>
                            \\[E = 2 \\cdot 48 = 96\\ \\text{kJ}\\]
                            <strong>c)</strong> Diagrama: reactivos \\(\\ce{Pb + 1/2O2}\\) a mayor entalpía que \\(\\ce{PbO}\\), con diferencia \\(48\\ \\text{kJ/mol}\\).<br>
                            <strong>Solución: a) \\(48\\ \\text{kJ/mol}\\); b) \\(96\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Entalpía de reacción",
                    enunciado: "Halla la entalpía de formación del amoniaco: \\[\\ce{N2 + 3H2 -> 2NH3}\\] Datos: \\(E(\\ce{N≡N})=941\\); \\(E(\\ce{H-H})=436\\); \\(E(\\ce{N-H})=393\\ \\text{kJ/mol}\\). <br> <strong>Solución: \\(-109\\ \\text{kJ}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H = [941+3(436)] - 6(393) = -109\\ \\text{kJ}\\]
                            <strong>Solución: \\(-109\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Entalpía de hidrogenación",
                    enunciado: "Calcula la entalpía de hidrogenación del 1,3-butadieno a butano. <br><br> Datos: \\(E(\\ce{C=C})=613\\); \\(E(\\ce{H-H})=436\\); \\(E(\\ce{C-H})=414\\); \\(E(\\ce{C-C})=347\\ \\text{kJ/mol}\\).<br> <strong>Solución: \\(-252\\ \\text{kJ}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            \\[\\ce{CH2=CH-CH=CH2 + 2H2 -> CH3-CH2-CH2-CH3}\\]
                            \\[\\Delta H = [2(613)+347+6(414)+2(436)] - [3(347)+10(414)]\\]
                            \\[= -252\\ \\text{kJ}\\]
                            <strong>Solución: \\(-252\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                }
            ]
        },

        "entropia": {
            nombre: "3. Entropía y Segunda Ley",
            problemas: [
                {
                    titulo: "Entropía y orden",
                    enunciado: "Explica qué es la entropía y ordena de mayor a menor: 1 g de hielo, 1 g de vapor de agua, 1 g de agua líquida.<br> <strong>Solución: vapor de agua > agua líquida > hielo.</strong>",
                    solucion: `
                        <div class='paso'>
                            La entropía es una medida del desorden o de la dispersión de energía de un sistema.<br>
                            <strong>Orden de mayor a menor entropía: vapor de agua > agua líquida > hielo.</strong>
                        </div>
                    `
                },
                {
                    titulo: "Entropía y desorden",
                    enunciado: "Calcula \\(\\Delta S^\\circ\\) para la descomposición del amoniaco. <br><br> Datos: \\(S^\\circ(\\ce{NH3})=192,3\\); \\(S^\\circ(\\ce{N2})=191,5\\); \\(S^\\circ(\\ce{H2})=130,7\\ \\text{J/K}\\).<br> <strong>Solución: \\(199\\ \\text{J/K}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            \\[\\ce{2NH3(g) -> N2(g) + 3H2(g)}\\]
                            \\[\\Delta S^\\circ = 191,5 + 3(130,7) - 2(192,3) = 199\\ \\text{J/K}\\]
                            <strong>Solución: \\(199\\ \\text{J/K}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Entropía y desorden",
                    enunciado: "Indica el signo de \\(\\Delta S\\): <br>a) \\(\\ce{CaCO3 (s) -> CaO (s) + CO2 (g)}\\) <br>b) \\(\\ce{HCl (g) + NH3 (g) -> NH4Cl (s)}\\) <br>c) \\(\\ce{2 HCl (aq) + Zn (s) -> ZnCl2 (aq) + H2 (g)}\\) <br>d) \\(\\ce{CuSO4·5H2O (s) -> CuSO4 (s) + 5 H2O (l)}\\)<br> <strong>Solución: a) > 0; b) < 0; c) > 0; d) > 0.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> sólido → sólido + gas: \\(\\Delta S > 0\\).<br>
                            <strong>b)</strong> 2 gases → sólido: \\(\\Delta S < 0\\).<br>
                            <strong>c)</strong> sólido + disolución → disolución + gas: \\(\\Delta S > 0\\).<br>
                            <strong>d)</strong> sólido → sólido + líquido: \\(\\Delta S > 0\\).
                        </div>
                    `
                }
            ]
        },

        "gibbs": {
            nombre: "4. Energía Libre de Gibbs",
            problemas: [
                {
                    titulo: "Efecto de la temperatura en la espontaneidad",
                    enunciado: "Discute el efecto de la temperatura en la espontaneidad: <br>a) \\(\\ce{2 PbO (s) + 2 SO2 (g) -> 2 PbS (s) + 3 O2 (g)}\\ \\quad\\quad (\\Delta H^\\circ = 830,8\\ \\text{kJ}; \\Delta S^\\circ = 168\\ \\text{J/K})\\) <br>b) \\(\\ce{2 As (s) + 3 F2 (g) -> 2 AsF3 (l)}\\ \\quad\\quad (\\Delta H^\\circ = - 1643\\ \\text{kJ}; \\Delta S^\\circ = - 0,316\\ \\text{kJ/K})\\) <br>c) \\(\\ce{CO (g) -> C (s) + 1/2 O2 (g)}\\ \\quad\\quad (\\Delta H^\\circ = 110,5\\ \\text{kJ}; \\Delta S^\\circ = - 89,4\\ \\text{J/K})\\)<br> <strong>Solución: a) > 0; b) < 0; c) < 0.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> \\(\\Delta H>0\\), \\(\\Delta S>0\\): espontánea a temperaturas altas, \\(T>\\Delta H/\\Delta S \\approx 4945\\ \\text{K}\\).<br>
                            <strong>b)</strong> \\(\\Delta H<0\\), \\(\\Delta S<0\\): espontánea a temperaturas bajas, \\(T<\\Delta H/\\Delta S \\approx 5,2\\cdot10^6\\ \\text{K}\\).<br>
                            <strong>c)</strong> \\(\\Delta H>0\\), \\(\\Delta S<0\\): no espontánea a ninguna temperatura.
                        </div>
                    `
                },
                {
                    titulo: "Entalpía y energía libre de Gibbs",
                    enunciado: "A 298 K: \\(\\ce{NO(g)}\\): \\(\\Delta H^\\circ=90,25\\), \\(\\Delta G^\\circ=86,57\\); \\(\\ce{NO2(g)}\\): \\(\\Delta H^\\circ=33,18\\), \\(\\Delta G^\\circ=51,30\\ \\text{kJ/mol}\\). Razona si la formación de \\(\\ce{NO2}\\) a partir de \\(\\ce{NO}\\) y \\(\\ce{O2}\\) es: <br> a) Exotérmica; <br> b) Espontánea.",
                    solucion: `
                        <div class='paso'>
                            \\[\\ce{2NO(g) + O2(g) -> 2NO2(g)}\\]
                            <strong>a)</strong> \\[\\Delta H^\\circ = 2(33,18)-2(90,25) = -114,14\\ \\text{kJ}\\]
                            Es exotérmica.<br>
                            <strong>b)</strong> \\[\\Delta G^\\circ = 2(51,30)-2(86,57) = -70,54\\ \\text{kJ}\\]
                            Es espontánea.
                        </div>
                    `
                },
                {
                    titulo: "Entalpía y energía libre de Gibbs",
                    enunciado: "El óxido de dinitrógeno se descompone según la reacción: \\(\\ce{N2O(g) -> N2(g) + 1/2O2(g)}\\). Siendo \\(\\Delta H^\\circ=43,9\\ \\text{kJ}\\); \\(\\Delta S^\\circ=75,2\\ \\text{J/K}\\). <br>a) ¿Es espontánea la reacción en condiciones estándar? <br>b) ¿A partir de qué temperatura será espontánea?<br> <strong>Solución: a) no; b) \\(T > 584\\ \\text{K}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> \\[\\Delta G^\\circ = 43,9 - 298(0,0752) \\approx 21,5\\ \\text{kJ}\\]
                            No es espontánea a 25 ºC.<br>
                            <strong>b)</strong> \\[T = \\frac{\\Delta H^\\circ}{\\Delta S^\\circ} = \\frac{43900}{75,2} \\approx 584\\ \\text{K}\\]
                            Será espontánea por encima de 584 K.<br>
                            <strong>Solución: a) no; b) \\(T > 584\\ \\text{K}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Espontaneidad de reacciones",
                    enunciado: "La peste del estaño es un fenómeno químico real. A temperaturas bajas, el estaño blanco se transforma en estaño gris, quebradizo y pulverulento según la reacción:  \\(\\quad \\ce{Sn(blanco) -> Sn(gris)}\\). <br> Determina por debajo de qué temperatura se produce. <br><br> Datos: \\(\\ce{Sn(blanco)}\\): \\(\\Delta H_f^\\circ=0\\), \\(S^\\circ=51,55\\); \\(\\ce{Sn(gris)}\\): \\(\\Delta H_f^\\circ=-2,09\\ \\text{kJ/mol}\\), \\(S^\\circ=44,14\\ \\text{J/mol·K}\\).<br> <strong>Solución: por debajo de \\(282\\ \\text{K}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H = -2,09 - 0 = -2,09\\ \\text{kJ}\\]
                            \\[\\Delta S = 44,14 - 51,55 = -7,41\\ \\text{J/K}\\]
                            \\[T = \\frac{\\Delta H}{\\Delta S} = \\frac{-2090}{-7,41} \\approx 282\\ \\text{K}\\]
                            Como \\(\\Delta H<0\\) y \\(\\Delta S<0\\), es espontánea por debajo de 282 K.<br>
                            <strong>Solución: por debajo de \\(282\\ \\text{K}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Entalpía y energía libre de Gibbs",
                    enunciado: "a) Calcula la \\(\\Delta H^\\circ\\) de la siguiente reacción: \\(\\quad \\ce{2H2S(g) + SO2(g) -> 2H2O(l) + 3S(s)}\\) <br>b) Calcula la \\(\\Delta G^\\circ\\) de la reación anterior y determina si es espontánea a 25 ºC. <br>c) Explica si se verá favorecida a altas temperaturas. <br><br>Datos: \\(\\ce{H2S (g)}\\): \\(\\Delta H^\\circ = - 22,1\\); \\(S^\\circ = 205,4 \\quad\\) | \\(\\quad \\ce{SO2 (g)}\\): \\(\\Delta H^\\circ = - 296,4\\); \\(S^\\circ = 247,6 \\quad \\) | \\(\\quad \\ce{H2O (l)}\\): \\(\\Delta H^\\circ = - 285,5\\); \\(S^\\circ = 70,0 \\quad \\) | \\(\\quad \\ce{S (s)}\\): \\(\\Delta H^\\circ = 0\\); \\(S^\\circ = 31,8\\).<br> <strong>Solución: a) \\(-230,4\\ \\text{kJ}\\); b) \\(-104,3\\ \\text{kJ}\\); c) no.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> Usando los datos del enunciado:<br>
                            \\[\\Delta H^\\circ = 2(-285,5) - [2(-22,1)+(-296,4)] = -230,4\\ \\text{kJ}\\]
                            <strong>b)</strong><br>
                            \\[\\Delta S^\\circ = 2(70,0)+3(31,8) - [2(205,4)+247,6] = -423,0\\ \\text{J/K}\\]
                            \\[\\Delta G^\\circ = -230,4 - 298(-0,423) \\approx -104,3\\ \\text{kJ}\\]
                            Es espontánea a 25 ºC.<br>
                            <strong>c)</strong> Como \\(\\Delta H<0\\) y \\(\\Delta S<0\\), la reacción se ve favorecida a temperaturas bajas, no a altas temperaturas.
                        </div>
                    `
                }
            ]
        }
    }
};