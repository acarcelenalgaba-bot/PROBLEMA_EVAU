if (typeof baseDatosTemas === 'undefined') {
    var baseDatosTemas = {};
}

baseDatosTemas["tema4"] = {
    id: "tema4",
    titulo: "Tema 4: Termoquímica",
    deshabilitado: false,
    secciones: {
        "primera-ley": {
            nombre: "1. La Primera Ley de la Termodinámica",
            problemas: [
                {
                    titulo: "Problema 1",
                    enunciado: "Un sistema realiza un trabajo de 150 J sobre el entorno y absorbe 80 J de calor. Halla la variación de energía interna del sistema.",
                    solucion: `
                        <div class='paso'>
                            <strong>Resolución:</strong><br>
                            Criterio: \\(\\Delta U = Q - W\\), con \\(Q>0\\) si absorbe calor y \\(W>0\\) si el sistema realiza trabajo.<br>
                            \\(Q = 80\\ \\text{J}\\), \\(W = 150\\ \\text{J}\\).<br>
                            \\[\\Delta U = 80 - 150 = -70\\ \\text{J}\\]
                            <strong>Solución: \\(-70\\ \\text{J}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 2",
                    enunciado: "Calcula la variación de energía interna de un sistema que cede 24 J en forma de calor y realiza sobre el entorno un trabajo de 60 J.",
                    solucion: `
                        <div class='paso'>
                            <strong>Resolución:</strong><br>
                            \\(Q = -24\\ \\text{J}\\) (cede calor), \\(W = 60\\ \\text{J}\\) (realiza trabajo).<br>
                            \\[\\Delta U = Q - W = -24 - 60 = -84\\ \\text{J}\\]
                            <strong>Solución: \\(-84\\ \\text{J}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 3",
                    enunciado: "Un sistema absorbe una cantidad de calor de 500 calorías y a continuación realiza un trabajo de 3 kJ. ¿Cuánto ha variado su energía interna?",
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
                    titulo: "Problema 4",
                    enunciado: "Calcula: <br>a) La variación de energía interna de un gas que cede 45 J de calor y sobre el que se realiza un trabajo de 32 J. <br>b) El calor que intercambia un sistema con el entorno cuando dicho sistema realiza un trabajo de 62 J y su energía interna aumenta en 84 J.",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> \\(Q = -45\\ \\text{J}\\), \\(W = -32\\ \\text{J}\\) (trabajo sobre el sistema).<br>
                            \\[\\Delta U = Q - W = -45 - (-32) = -13\\ \\text{J}\\]
                            <strong>b)</strong> \\(\\Delta U = Q - W\\). Si \\(W = 62\\ \\text{J}\\) y \\(\\Delta U = 84\\ \\text{J}\\):<br>
                            \\[84 = Q - 62 \\Rightarrow Q = 146\\ \\text{J}\\]
                            <strong>Solución: a) \\(-13\\ \\text{J}\\); b) \\(146\\ \\text{J}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 5",
                    enunciado: "Considera la reacción entre disoluciones acuosas de bicarbonato de sodio, \\(\\ce{NaHCO3(aq)}\\) y ácido acético, \\(\\ce{HC2H3O2(aq)}\\): \\[\\ce{NaHCO3(aq) + HC2H3O2(aq) -> NaC2H3O2(aq) + H2O(l) + CO2(g)}\\] Si esta reacción ocurre a la presión constante de 1 atm, calcula el trabajo que hace el sistema para empujar a la atmósfera cuando un mol de \\(\\ce{NaHCO3}\\) reacciona a 25 ºC. Dato: \\(1\\ \\text{atm·l} = 101,3\\ \\text{J}\\).",
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
                    titulo: "Problema 6",
                    enunciado: "Determina la variación de energía interna que sufre un sistema cuando: <br>a) Realiza un trabajo de 400 J. <br>b) Cede 50 calorías al entorno. <br>c) Absorbe 300 J del entorno. <br>d) Se comprime 80 cm³ a una presión constante de 1,2 atm. <br>e) Cede 200 calorías al entorno y se realiza un trabajo de 1200 J sobre el sistema.",
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
            nombre: "2. Concepto de Entalpía",
            problemas: [
                {
                    titulo: "Problema 7",
                    enunciado: "Un sistema experimenta una transformación durante la cual se ceden al entorno 140 kJ mediante calor, manteniéndose constante la presión. Calcula la variación de entalpía del sistema.",
                    solucion: `
                        <div class='paso'>
                            A presión constante, \\(\\Delta H = Q_p\\).<br>
                            Como el sistema cede 140 kJ: \\(Q_p = -140\\ \\text{kJ}\\).<br>
                            <strong>Solución: \\(\\Delta H = -140\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 8",
                    enunciado: "Durante un proceso a presión constante, un sistema absorbe, mediante calor, 126 kJ. Calcula la variación de entalpía del sistema en dicho proceso.",
                    solucion: `
                        <div class='paso'>
                            A presión constante, \\(\\Delta H = Q_p\\).<br>
                            Como absorbe 126 kJ: \\(Q_p = +126\\ \\text{kJ}\\).<br>
                            <strong>Solución: \\(\\Delta H = 126\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                }
            ]
        },

        "entalpia-reaccion": {
            nombre: "3. Entalpía de Reacción",
            problemas: [
                {
                    titulo: "Problema 9",
                    enunciado: "Interpreta la ecuación termoquímica: \\[\\ce{CH4(g) + 2O2(g) -> CO2(g) + 2H2O(l)}\\qquad \\Delta H_r^\\circ = -894\\ \\text{kJ}\\]",
                    solucion: `
                        <div class='paso'>
                            La ecuación indica que la combustión de 1 mol de \\(\\ce{CH4(g)}\\) con 2 mol de \\(\\ce{O2(g)}\\) para formar 1 mol de \\(\\ce{CO2(g)}\\) y 2 mol de \\(\\ce{H2O(l)}\\) libera 894 kJ.<br>
                            Es una reacción exotérmica, ya que \\(\\Delta H_r^\\circ < 0\\).
                        </div>
                    `
                },
                {
                    titulo: "Problema 10",
                    enunciado: "Razona si la síntesis del amoniaco, a partir de sus elementos, es un proceso endotérmico o exotérmico, teniendo en cuenta la siguiente ecuación termoquímica: \\[\\ce{N2(g) + 3H2(g) -> 2NH3(g)}\\qquad \\Delta H_r^\\circ = -92,2\\ \\text{kJ}\\]",
                    solucion: `
                        <div class='paso'>
                            Como \\(\\Delta H_r^\\circ = -92,2\\ \\text{kJ} < 0\\), el proceso es <strong>exotérmico</strong>: se desprenden 92,2 kJ al formarse 2 mol de \\(\\ce{NH3(g)}\\).
                        </div>
                    `
                },
                {
                    titulo: "Problema 11",
                    enunciado: "Señala cuáles de las siguientes reacciones son endotérmicas: <br>a) \\(\\ce{H2(g) + 1/2O2(g) -> H2O(g)}\\ \\Delta H = -57,8\\ \\text{kcal}\\) <br>b) \\(\\ce{1/2N2(g) + 1/2O2(g) -> NO(g)}\\ \\Delta H = 21,6\\ \\text{kcal}\\) <br>c) \\(\\ce{1/2N2(g) + O2(g) + 8,1 kcal -> NO2(g)}\\) <br>d) \\(\\ce{1/2N2(g) + 3/2H2(g) -> NH3(g) + 11 kcal}\\) <br>e) \\(\\ce{NH3(g) -> 1/2N2(g) + 3/2H2(g)}\\ \\Delta H = 11\\ \\text{kcal}\\)",
                    solucion: `
                        <div class='paso'>
                            Son endotérmicas aquellas en las que \\(\\Delta H > 0\\) o que absorben calor.<br>
                            <strong>Solución: b), c), d) y e).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 12",
                    enunciado: "Utilizando el diagrama de entalpía, calcula el calor desprendido cuando el peróxido de hidrógeno se descompone, a presión constante, en agua y oxígeno según: \\[\\ce{H2O2(l) -> H2O(l) + 1/2O2(g)}\\]",
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
                    titulo: "Problema 13",
                    enunciado: "Un mol de carbonilo de níquel gaseoso, \\(\\ce{Ni(CO)4}\\), se descompone al calentarlo dando níquel y monóxido de carbono, absorbiéndose 160,7 kJ en forma de calor. <br>a) Escribe una ecuación termoquímica. <br>b) ¿Endotérmica o exotérmica? <br>c) Calcula cuántos gramos de \\(\\ce{Ni(CO)4}\\) se descomponen cuando el calor absorbido es de 10 kJ.",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> \\[\\ce{Ni(CO)4(g) -> Ni(s) + 4CO(g)}\\qquad \\Delta H = +160,7\\ \\text{kJ/mol}\\]<br>
                            <strong>b)</strong> Es <strong>endotérmica</strong>, pues absorbe calor (\\(\\Delta H>0\\)).<br>
                            <strong>c)</strong> Masa molar de \\(\\ce{Ni(CO)4}\\): \\(58,7 + 4(12+16) = 170,7\\ \\text{g/mol}\\).<br>
                            \\[n = \\frac{10}{160,7} = 0,0622\\ \\text{mol}\\]
                            \\[m = 0,0622 \\cdot 170,7 \\approx 10,62\\ \\text{g}\\]
                            <strong>Solución: a) \\(\\Delta H=+160,7\\ \\text{kJ/mol}\\); b) endotérmica; c) \\(10,62\\ \\text{g}\\).</strong>
                        </div>
                    `
                }
            ]
        },

        "entalpia-formacion": {
            nombre: "4. Entalpía de Formación",
            problemas: [
                {
                    titulo: "Problema 14",
                    enunciado: "¿Qué significado tiene el dato \\(\\Delta H_f^\\circ \\ce{NO(g)} = 90,2\\ \\text{kJ/mol}\\)? Escribe la ecuación termoquímica correspondiente.",
                    solucion: `
                        <div class='paso'>
                            Significa que la formación de 1 mol de \\(\\ce{NO(g)}\\) a partir de sus elementos en estado estándar absorbe 90,2 kJ.<br>
                            \\[\\ce{1/2N2(g) + 1/2O2(g) -> NO(g)}\\qquad \\Delta H_f^\\circ = +90,2\\ \\text{kJ/mol}\\]
                        </div>
                    `
                },
                {
                    titulo: "Problema 15",
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
                    titulo: "Problema 16",
                    enunciado: "Dadas las entalpías estándar de formación: \\(\\Delta H_f^\\circ \\ce{CO(g)} = -110,5\\ \\text{kJ/mol}\\) y \\(\\Delta H_f^\\circ \\ce{CO2(g)} = -393,5\\ \\text{kJ/mol}\\), halla \\(\\Delta H_r^\\circ\\) para la ecuación: \\[\\ce{CO(g) + 1/2O2(g) -> CO2(g)}\\]",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H_r^\\circ = \\Delta H_f^\\circ(\\ce{CO2}) - \\Delta H_f^\\circ(\\ce{CO}) = -393,5 - (-110,5) = -283\\ \\text{kJ}\\]
                            <strong>Solución: \\(-283\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 17",
                    enunciado: "Utilizando los datos \\(\\Delta H_f^\\circ \\ce{PCl3(l)} = -317,7\\ \\text{kJ/mol}\\); \\(\\Delta H_f^\\circ \\ce{PCl5(s)} = -454,8\\ \\text{kJ/mol}\\); calcula \\(\\Delta H_r^\\circ\\) para la reacción: \\[\\ce{PCl3(l) + Cl2(g) -> PCl5(s)}\\]",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H_r^\\circ = -454,8 - (-317,7) = -137,1\\ \\text{kJ}\\]
                            <strong>Solución: \\(-137,1\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 18",
                    enunciado: "Calcula la variación de entalpía estándar de las reacciones: \\[\\ce{2SO2(g) + O2(g) -> 2SO3(g)}\\] y \\[\\ce{N2O4(g) -> 2NO2(g)}\\] Datos: \\(\\Delta H_f^\\circ \\ce{SO2(g)} = -296,8\\ \\text{kJ/mol}\\); \\(\\Delta H_f^\\circ \\ce{SO3(g)} = -395,6\\ \\text{kJ/mol}\\); \\(\\Delta H_f^\\circ \\ce{NO2(g)} = 33,2\\ \\text{kJ/mol}\\); \\(\\Delta H_f^\\circ \\ce{N2O4(g)} = 9,2\\ \\text{kJ/mol}\\).",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H_1 = 2(-395,6) - 2(-296,8) = -197,6\\ \\text{kJ}\\]
                            \\[\\Delta H_2 = 2(33,2) - 9,2 = 57,2\\ \\text{kJ}\\]
                            <strong>Solución: \\(-197,6\\ \\text{kJ}\\); \\(57,2\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 19",
                    enunciado: "Halla en condiciones estándar la entalpía de la reacción: \\[\\ce{Zn(s) + 2HCl(aq) -> ZnCl2(s) + H2(g)}\\] Datos: \\(\\Delta H_f^\\circ \\ce{HCl(aq)} = -167,2\\ \\text{kJ/mol}\\); \\(\\Delta H_f^\\circ \\ce{ZnCl2(s)} = -415,9\\ \\text{kJ/mol}\\).",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H_r^\\circ = \\Delta H_f^\\circ(\\ce{ZnCl2}) - 2\\Delta H_f^\\circ(\\ce{HCl})\\]
                            \\[= -415,9 - 2(-167,2) = -81,5\\ \\text{kJ}\\]
                            <strong>Solución: \\(-81,5\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 20",
                    enunciado: "Considera: \\[\\ce{2Ag2O(s) -> 4Ag(s) + O2(g)}\\] Calcula el calor desprendido o absorbido cuando se descomponen 4,62 g de \\(\\ce{Ag2O}\\) a 25 ºC. Datos: \\(\\Delta H_f^\\circ \\ce{Ag2O(s)} = -30,6\\ \\text{kJ/mol}\\); \\(M(\\ce{Ag})=107,9\\); \\(M(\\ce{O})=16\\).",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H_r^\\circ = -2\\Delta H_f^\\circ(\\ce{Ag2O}) = -2(-30,6) = +61,2\\ \\text{kJ}\\]
                            para 2 mol de \\(\\ce{Ag2O}\\). Por mol: \\(30,6\\ \\text{kJ/mol}\\).<br>
                            \\(M(\\ce{Ag2O}) = 2(107,9)+16 = 231,8\\ \\text{g/mol}\\).<br>
                            \\[n = \\frac{4,62}{231,8} = 0,01993\\ \\text{mol}\\]
                            \\[Q = 0,01993 \\cdot 30,6 \\approx 0,61\\ \\text{kJ}\\]
                            <strong>Solución: se absorben \\(0,61\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 21",
                    enunciado: "Calcula cuánto calor se absorbe en la descomposición de 100 g de bicarbonato de sodio: \\[\\ce{2NaHCO3(s) -> Na2CO3(s) + H2O(l) + CO2(g)}\\] Datos: \\(\\Delta H_f^\\circ \\ce{Na2CO3(s)} = -1131\\); \\(\\ce{H2O(l)} = -285,9\\); \\(\\ce{CO2(g)} = -393,5\\); \\(\\ce{NaHCO3(s)} = -947,7\\ \\text{kJ/mol}\\).",
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
                    titulo: "Problema 22",
                    enunciado: "El sulfuro de hidrógeno reacciona con el oxígeno según: \\[\\ce{H2S(g) + 1/2O2(g) -> S(s) + H2O(l)}\\] Calcula la entalpía y el calor por cada kg de azufre obtenido. Datos: \\(\\Delta H_f^\\circ \\ce{H2S(g)} = -221\\ \\text{kJ/mol}\\); \\(\\Delta H_f^\\circ \\ce{H2O(l)} = -285,8\\ \\text{kJ/mol}\\).",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H_r^\\circ = (-285,8) - (-221) = -64,8\\ \\text{kJ/mol}\\]
                            Por kg de \\(\\ce{S}\\): \\(n = 1000/32 = 31,25\\ \\text{mol}\\).<br>
                            \\[Q = 31,25(-64,8) \\approx -2025\\ \\text{kJ}\\]
                            <strong>Solución: \\(\\Delta H_r^\\circ = -64,8\\ \\text{kJ}\\); se desprenden \\(2025\\ \\text{kJ/kg de S}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 23",
                    enunciado: "A partir de: \\(\\Delta H_f^\\circ \\ce{H2O(l)} = -285,8\\); \\(\\Delta H_f^\\circ \\ce{CO2(g)} = -393,5\\); \\(\\Delta H_f^\\circ \\ce{C4H10(l)} = -125\\ \\text{kJ/mol}\\). <br>a) Determina la entalpía de combustión del gas butano. <br>b) Calcula la energía desprendida al quemar el butano de una bombona de 20 litros a 25 ºC y 7,4 atm.",
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
                    titulo: "Problema 24",
                    enunciado: "Las entalpías normales de formación del butano, dióxido de carbono y agua líquida son \\(-126,1\\); \\(-393,5\\) y \\(-285,8\\ \\text{kJ/mol}\\). Calcula el calor desprendido en la combustión total de 3 kg de butano.",
                    solucion: `
                        <div class='paso'>
                            \\[\\ce{C4H10(l) + 13/2O2(g) -> 4CO2(g) + 5H2O(l)}\\]
                            \\[\\Delta H_c^\\circ = 4(-393,5)+5(-285,8)-(-126,1) = -2876,9\\ \\text{kJ/mol}\\]
                            \\[n = \\frac{3000}{58} = 51,724\\ \\text{mol}\\]
                            \\[Q = 51,724 \\cdot 2876,9 \\approx 148805,2\\ \\text{kJ}\\]
                            <strong>Solución: se desprenden \\(148805,2\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 25",
                    enunciado: "a) Calcula la variación de entalpía estándar de la reacción del carburo de calcio \\(\\ce{CaC2(s)}\\) con agua líquida para dar hidróxido de calcio sólido y acetileno \\(\\ce{C2H2(g)}\\). <br>b) Calcula la energía que se desprende mediante calor durante la combustión, a presión constante, de 50 dm³ de acetileno a 25 ºC y \\(1,01\\cdot10^5\\ \\text{Pa}\\). Datos: \\(\\Delta H_f^\\circ \\ce{CaC2(s)}=-62,7\\); \\(\\ce{H2O(l)}=-285,6\\); \\(\\ce{Ca(OH)2(s)}=-76,1\\); \\(\\ce{C2H2(g)}=-84,6\\); \\(\\ce{CO2(g)}=-393,5\\ \\text{kJ/mol}\\).",
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
                    titulo: "Problema 26",
                    enunciado: "Un proceso necesita 36200 kJ, que se obtienen quemando a 25 ºC y 1 atm, 422 L de una mezcla de etano y propano. Calcula: <br>a) El calor de combustión de ambos. <br>b) La composición molar del gas. Datos: \\(\\Delta H_f^\\circ \\ce{C2H6(g)}=-85\\); \\(\\ce{H2O(l)}=-285,6\\); \\(\\ce{C3H8(g)}=-104\\); \\(\\ce{CO2(g)}=-393,5\\).",
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
                    titulo: "Problema 27",
                    enunciado: "La entalpía de combustión de la sacarosa \\(\\ce{C12H22O11}\\) es \\(\\Delta H_r = -5644\\ \\text{kJ/mol}\\). Calcula su entalpía de formación. Datos: \\(\\Delta H_f^\\circ \\ce{H2O(l)}=-285,8\\); \\(\\ce{CO2(g)}=-393,5\\).",
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
                    titulo: "Problema 28",
                    enunciado: "Calcula la entalpía estándar de formación del ácido propanoico \\(\\ce{CH3-CH2-COOH}\\) si la combustión de 1 mol desprende 900 kJ. Datos: \\(\\Delta H_f^\\circ \\ce{CO2(g)}=-393,5\\); \\(\\ce{H2O(l)}=-285,8\\).",
                    solucion: `
                        <div class='paso'>
                            \\[\\ce{C3H6O2(l) + 7/2O2(g) -> 3CO2(g) + 3H2O(l)}\\]
                            \\[-900 = 3(-393,5)+3(-285,8)-\\Delta H_f^\\circ\\]
                            \\[-900 = -2037,9 - \\Delta H_f^\\circ\\]
                            \\[\\Delta H_f^\\circ = -1137,9\\ \\text{kJ/mol}\\]
                            <strong>Solución: \\(-1138\\ \\text{kJ/mol}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 29",
                    enunciado: "Durante la fotosíntesis: \\[\\ce{6CO2(g) + 6H2O(l) -> C6H12O6(s) + 6O2(g)}\\qquad \\Delta H_r = 2815\\ \\text{kJ/mol}\\] <br>a) ¿Cuál es la entalpía de formación de la glucosa? <br>b) ¿Qué energía se requiere para obtener 50 g? <br>c) ¿Cuántos litros de \\(\\ce{O2}\\) (C.N.) se desprenden por gramo de glucosa? Datos: \\(\\Delta H_f^\\circ \\ce{CO2(g)}=-393,5\\); \\(\\ce{H2O(l)}=-285,8\\).",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> \\[2815 = \\Delta H_f^\\circ(\\ce{C6H12O6}) + 6(393,5)+6(285,8)\\]
                            \\[\\Delta H_f^\\circ(\\ce{C6H12O6}) = -1260,8\\ \\text{kJ/mol}\\]
                            <strong>b)</strong> \\(n = 50/180 = 0,2778\\ \\text{mol}\\).<br>
                            \\[E = 0,2778 \\cdot 2815 \\approx 782\\ \\text{kJ}\\]
                            <strong>c)</strong> 1 mol de glucosa produce 6 mol de \\(\\ce{O2}\\).<br>
                            \\[\\frac{6 \\cdot 22,4}{180} \\approx 0,814\\ \\text{L/g}\\]
                            <strong>Solución: a) \\(-1260,8\\ \\text{kJ/mol}\\); b) \\(782\\ \\text{kJ}\\); c) \\(0,814\\ \\text{L/g}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 30",
                    enunciado: "En la combustión de 0,1 g de metanol a 298 K (p = cte), se liberan 2,26 kJ. Calcula la entalpía estándar de combustión y de formación del metanol. Datos: \\(\\Delta H_f^\\circ \\ce{CO2(g)}=-393,5\\); \\(\\ce{H2O(l)}=-285,8\\).",
                    solucion: `
                        <div class='paso'>
                            \\(M(\\ce{CH3OH}) = 32\\ \\text{g/mol}\\).<br>
                            \\[\\Delta H_c^\\circ = -2,26 \\cdot \\frac{32}{0,1} = -723,2\\ \\text{kJ/mol}\\]
                            \\[\\ce{CH3OH(l) + 3/2O2(g) -> CO2(g) + 2H2O(l)}\\]
                            \\[-723,2 = -393,5 + 2(-285,8) - \\Delta H_f^\\circ(\\ce{CH3OH})\\]
                            \\[\\Delta H_f^\\circ(\\ce{CH3OH}) = -241,9\\ \\text{kJ/mol}\\]
                            <strong>Solución: \\(-723,2\\ \\text{kJ/mol}\\) y \\(-241,9\\ \\text{kJ/mol}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 31",
                    enunciado: "Cuando se quema una muestra de 2,44 g de naftaleno sólido \\(\\ce{C10H8}\\) a volumen constante y 25 ºC, se desprenden 90,2 kJ. Calcula la variación de entalpía de la reacción de combustión.",
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
                    titulo: "Problema 32",
                    enunciado: "Compara las características energéticas de la miel (80% glucosa \\(\\ce{C6H12O6}\\)) y la ginebra (45% etanol \\(\\ce{C2H5OH}\\)). <br>a) Reacciones de combustión. <br>b) Entalpías estándar de combustión en kJ/mol. <br>c) Energía desprendida por kg de cada una. Datos: \\(\\Delta H_f^\\circ\\): \\(\\ce{C6H12O6(s)}=-1260\\); \\(\\ce{C2H5OH(l)}=-277,6\\); \\(\\ce{CO2(g)}=-393,5\\); \\(\\ce{H2O(l)}=-285,8\\).",
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
                }
            ]
        },

        "ley-hess": {
            nombre: "5. Reglas de la Termoquímica (Ley de Hess)",
            problemas: [
                {
                    titulo: "Problema 33",
                    enunciado: "Considera: \\[\\ce{C2H6(g) + 7/2O2(g) -> 2CO2(g) + 3H2O(l)}\\qquad \\Delta H = -1559,7\\ \\text{kJ}\\] Calcula \\(\\Delta H\\) para: \\[\\ce{2C2H6(g) + 7O2(g) -> 4CO2(g) + 6H2O(l)}\\] y para \\[\\ce{2CO2(g) + 3H2O(l) -> C2H6(g) + 7/2O2(g)}\\]",
                    solucion: `
                        <div class='paso'>
                            Al multiplicar por 2 la ecuación: \\(\\Delta H = 2(-1559,7) = -3119,4\\ \\text{kJ}\\).<br>
                            Al invertir la ecuación inicial: \\(\\Delta H = +1559,7\\ \\text{kJ}\\).<br>
                            <strong>Solución: \\(-3119,4\\ \\text{kJ}\\) y \\(+1559,7\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 34",
                    enunciado: "Considera: \\[\\ce{AgBr(s) -> Ag+(aq) + Br-(aq)}\\qquad \\Delta H = 84,4\\ \\text{kJ}\\] <br>a) Calcula \\(\\Delta H\\) para la precipitación de un mol de \\(\\ce{AgBr}\\). <br>b) ¿Cuánto vale \\(\\Delta H\\) para la precipitación de un gramo?",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> Proceso inverso: \\(\\ce{Ag+(aq) + Br-(aq) -> AgBr(s)}\\), \\(\\Delta H = -84,4\\ \\text{kJ}\\).<br>
                            <strong>b)</strong> \\(M(\\ce{AgBr}) = 107,9+79,9 = 187,8\\ \\text{g/mol}\\).<br>
                            \\[\\Delta H = \\frac{-84,4}{187,8} \\approx -0,45\\ \\text{kJ/g}\\]
                            <strong>Solución: a) \\(-84,4\\ \\text{kJ}\\); b) \\(-0,45\\ \\text{kJ/g}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 35",
                    enunciado: "La reacción termita: \\[\\ce{2Al + Fe2O3 -> 2Fe + Al2O3}\\qquad \\Delta H = -200\\ \\text{kcal}\\] <br>a) ¿Cuál es la entalpía de \\(\\ce{2Fe + Al2O3 -> 2Al + Fe2O3}\\)? <br>b) ¿Cuánto calor se desprende en la formación de 5 moles de \\(\\ce{Al2O3}\\)?",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> Proceso inverso: \\(\\Delta H = +200\\ \\text{kcal} = 836\\ \\text{kJ}\\).<br>
                            <strong>b)</strong> Por mol de \\(\\ce{Al2O3}\\): \\(-200\\ \\text{kcal}\\). Para 5 mol: \\(-1000\\ \\text{kcal} = -4180\\ \\text{kJ}\\).<br>
                            <strong>Solución: a) \\(+836\\ \\text{kJ}\\); b) \\(-4180\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 36",
                    enunciado: "Calcula la entalpía de formación del \\(\\ce{CO(g)}\\): \\[\\ce{C(s) + 1/2O2(g) -> CO(g)}\\] a partir de: <br>(1) \\(\\ce{C(s) + O2 -> CO2(g)}\\ \\Delta H_1 = -393,5\\ \\text{kJ}\\) <br>(2) \\(\\ce{2CO(g) + O2(g) -> 2CO2(g)}\\ \\Delta H_2 = -566\\ \\text{kJ}\\)",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H_f^\\circ(\\ce{CO}) = \\Delta H_1 - \\frac{1}{2}\\Delta H_2\\]
                            \\[= -393,5 - \\frac{1}{2}(-566) = -110,5\\ \\text{kJ/mol}\\]
                            <strong>Solución: \\(-110,5\\ \\text{kJ/mol}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 37",
                    enunciado: "Calcula la entalpía de la 1ª reacción conociendo: <br>\\[\\ce{CO2(aq) + 2NaOH(aq) -> Na2CO3(aq) + H2O(l)}\\ \\Delta H = -84,5\\ \\text{kJ}\\] <br>\\[\\ce{NaHCO3(aq) + NaOH(aq) -> Na2CO3(aq) + H2O(l)}\\ \\Delta H = -38,5\\ \\text{kJ}\\]",
                    solucion: `
                        <div class='paso'>
                            Restando la segunda ecuación de la primera se obtiene:<br>
                            \\[\\ce{CO2(aq) + NaOH(aq) -> NaHCO3(aq)}\\]
                            \\[\\Delta H = -84,5 - (-38,5) = -46\\ \\text{kJ}\\]
                            <strong>Solución: \\(-46\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 38",
                    enunciado: "El monóxido de carbono en metalurgia: \\[\\ce{Fe2O3(s) + 3CO(g) -> 2Fe(s) + 3CO2(g)}\\qquad \\Delta H^\\circ = -26,7\\ \\text{kcal}\\] Utiliza esta y la de combustión del \\(\\ce{CO}\\): \\[\\ce{CO(g) + 1/2O2(g) -> CO2(g)}\\qquad \\Delta H^\\circ = -283\\ \\text{kcal}\\] para calcular el valor de \\(\\Delta H^\\circ\\) de: \\[\\ce{2Fe(s) + 3/2O2(g) -> Fe2O3(s)}\\]",
                    solucion: `
                        <div class='paso'>
                            Invirtiendo la primera y sumando 3 veces la segunda:<br>
                            \\[\\Delta H^\\circ = +26,7 + 3(-283) = -822,3\\ \\text{kcal}\\]
                            <strong>Solución: \\(-822,3\\ \\text{kcal}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 39",
                    enunciado: "Calcula el calor de formación del \\(\\ce{PCl5(s)}\\): \\[\\ce{P4(s) + 6Cl2(g) -> 4PCl3(l)}\\ \\Delta H = -304\\ \\text{kcal}\\] \\[\\ce{PCl3(l) + Cl2(g) -> PCl5(s)}\\ \\Delta H = -32,8\\ \\text{kcal}\\]",
                    solucion: `
                        <div class='paso'>
                            Para 1 mol de \\(\\ce{PCl3}\\): \\(\\Delta H = -304/4 = -76\\ \\text{kcal}\\).<br>
                            Sumando la formación de \\(\\ce{PCl5}\\):<br>
                            \\[\\Delta H_f^\\circ(\\ce{PCl5}) = -76 + (-32,8) = -108,8\\ \\text{kcal/mol}\\]
                            <strong>Solución: \\(-108,8\\ \\text{kcal/mol}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 40",
                    enunciado: "Con los datos a 298 K: \\[\\ce{C(grafito) + O2(g) -> CO2(g)}\\ \\Delta H = -376,2\\ \\text{kJ}\\] \\[\\ce{H2(g) + 1/2O2(g) -> H2O(l)}\\ \\Delta H = -273,28\\ \\text{kJ}\\] \\[\\ce{C6H6(l) + 15/2O2(g) -> 3H2O(l) + 6CO2(g)}\\ \\Delta H = -3124\\ \\text{kJ}\\] Calcula el calor de formación del benceno (kJ/mol).",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H_f^\\circ(\\ce{C6H6}) = 6(-376,2)+3(-273,28)-(-3124) = 46,96\\ \\text{kJ/mol}\\]
                            <strong>Solución: \\(46,96\\ \\text{kJ/mol}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 41",
                    enunciado: "Las entalpías de combustión del etino, hidrógeno y etano son \\(-1297\\), \\(-285,8\\) y \\(-1550,2\\ \\text{kJ/mol}\\). Aplicando Hess, calcula la entalpía de hidrogenación de etino a etano.",
                    solucion: `
                        <div class='paso'>
                            \\[\\ce{C2H2(g) + 2H2(g) -> C2H6(g)}\\]
                            \\[\\Delta H = \\Delta H_c(\\ce{C2H2}) + 2\\Delta H_c(\\ce{H2}) - \\Delta H_c(\\ce{C2H6})\\]
                            \\[= -1297 + 2(-285,8) - (-1550,2) = -318,4\\ \\text{kJ}\\]
                            <strong>Solución: \\(-318,4\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 42",
                    enunciado: "Calores de combustión del 1,3-butadieno(g), \\(\\ce{H2(g)}\\) y butano(g): \\(-2540\\); \\(-285,8\\) y \\(-2880\\ \\text{kJ/mol}\\). Halla la variación de entalpía en la hidrogenación del 1,3-butadieno a butano.",
                    solucion: `
                        <div class='paso'>
                            \\[\\ce{C4H6(g) + 2H2(g) -> C4H10(g)}\\]
                            \\[\\Delta H = -2540 + 2(-285,8) - (-2880) = -231,6\\ \\text{kJ/mol}\\]
                            <strong>Solución: \\(-231,6\\ \\text{kJ/mol}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 43",
                    enunciado: "\\(\\ce{PbO(s) + C(grafito) -> Pb(s) + CO(g)}\\ \\Delta H^\\circ = 107\\ \\text{kJ/mol}\\). Por otra parte: \\(\\ce{C(grafito) + 1/2O2(g) -> CO(g)}\\ \\Delta H^\\circ = 155\\ \\text{kJ/mol}\\). <br>a) Calcula la entalpía de formación del \\(\\ce{PbO}\\). <br>b) ¿Cuánta energía se necesita para que 414 g de \\(\\ce{Pb}\\) reaccionen con \\(\\ce{O2}\\)? <br>c) Dibuja el diagrama entálpico.",
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
                }
            ]
        },

        "energia-enlace": {
            nombre: "6. Energía de Enlace",
            problemas: [
                {
                    titulo: "Problema 44",
                    enunciado: "En \\[\\ce{H2(g) + F(g) -> HF(g) + H(g)}\\qquad \\Delta H < 0\\] ¿Qué enlace es más fuerte, \\(\\ce{H-H}\\) o \\(\\ce{H-F}\\)?",
                    solucion: `
                        <div class='paso'>
                            Se rompe un enlace \\(\\ce{H-H}\\) y se forma un enlace \\(\\ce{H-F}\\). Como el proceso es exotérmico, la energía liberada al formar \\(\\ce{H-F}\\) es mayor que la necesaria para romper \\(\\ce{H-H}\\).<br>
                            <strong>El enlace \\(\\ce{H-F}\\) es más fuerte que el \\(\\ce{H-H}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 45",
                    enunciado: "Calcula \\(\\Delta H\\) para: \\[\\ce{CH2=CH2(g) + Cl-Cl(g) -> CH2Cl-CH2Cl(g)}\\] Datos: \\(E(\\ce{C=C})=612\\); \\(E(\\ce{Cl-Cl})=243\\); \\(E(\\ce{C-Cl})=347\\); \\(E(\\ce{C-C})=331\\ \\text{kJ/mol}\\).",
                    solucion: `
                        <div class='paso'>
                            Aplicando energías de enlace con los datos del enunciado:<br>
                            \\[\\Delta H \\approx -154\\ \\text{kJ}\\]
                            <strong>Solución: \\(-154\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 46",
                    enunciado: "Calcula \\(\\Delta H\\) de: \\[\\ce{CH2=CH2(g) + H2(g) -> CH3-CH3(g)}\\] Datos: \\(E(\\ce{C=C})=612\\); \\(E(\\ce{H-H})=436\\); \\(E(\\ce{C-C})=347\\); \\(E(\\ce{C-H})=414\\ \\text{kJ/mol}\\).",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H = [E(\\ce{C=C})+E(\\ce{H-H})] - [E(\\ce{C-C})+2E(\\ce{C-H})]\\]
                            \\[= (612+436) - (347+2\\cdot414) = -127\\ \\text{kJ}\\]
                            <strong>Solución: \\(-127\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 47",
                    enunciado: "Calcula la entalpía de formación de 2 moles de \\(\\ce{HBr(g)}\\): \\[\\ce{H2(g) + Br2(g) -> 2HBr(g)}\\] Datos: \\(E(\\ce{H-H})=436\\); \\(E(\\ce{Br-Br})=194\\); \\(E(\\ce{H-Br})=366\\ \\text{kJ/mol}\\).",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H = (436+194) - 2(366) = -102\\ \\text{kJ}\\]
                            <strong>Solución: \\(-102\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 48",
                    enunciado: "Halla la entalpía de formación del amoniaco: \\[\\ce{N2 + 3H2 -> 2NH3}\\] Datos: \\(E(\\ce{N≡N})=941\\); \\(E(\\ce{H-H})=436\\); \\(E(\\ce{N-H})=393\\ \\text{kJ/mol}\\).",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta H = [941+3(436)] - 6(393) = -109\\ \\text{kJ}\\]
                            <strong>Solución: \\(-109\\ \\text{kJ}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 49",
                    enunciado: "Calcula la entalpía de hidrogenación del 1,3-butadieno a butano. Datos: \\(E(\\ce{C=C})=613\\); \\(E(\\ce{H-H})=436\\); \\(E(\\ce{C-H})=414\\); \\(E(\\ce{C-C})=347\\ \\text{kJ/mol}\\). Compara con el ejercicio 42.",
                    solucion: `
                        <div class='paso'>
                            \\[\\ce{CH2=CH-CH=CH2 + 2H2 -> CH3-CH2-CH2-CH3}\\]
                            \\[\\Delta H = [2(613)+347+6(414)+2(436)] - [3(347)+10(414)]\\]
                            \\[= -252\\ \\text{kJ}\\]
                            <strong>Solución: \\(-252\\ \\text{kJ}\\). El valor del ejercicio 42 era \\(-231,6\\ \\text{kJ/mol}\\); la diferencia se debe a la aproximación de las energías de enlace.</strong>
                        </div>
                    `
                }
            ]
        },

        "entropia": {
            nombre: "7. Entropía y Segunda Ley",
            problemas: [
                {
                    titulo: "Problema 50",
                    enunciado: "Explica qué es la entropía y ordena de mayor a menor: 1 g de hielo, 1 g de vapor de agua, 1 g de agua líquida.",
                    solucion: `
                        <div class='paso'>
                            La entropía es una medida del desorden o de la dispersión de energía de un sistema.<br>
                            <strong>Orden de mayor a menor entropía: vapor de agua > agua líquida > hielo.</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 51",
                    enunciado: "Dadas \\(S^\\circ \\ce{NH3(g)} = 192,3\\ \\text{J/mol·K}\\); \\(S^\\circ \\ce{N2(g)} = 191\\ \\text{J/mol·K}\\) y \\(S^\\circ \\ce{H2(g)} = 130\\ \\text{J/mol·K}\\), calcula \\(\\Delta S^\\circ\\) para: \\[\\ce{N2(g) + 3H2(g) -> 2NH3(g)}\\]",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta S^\\circ = 2(192,3) - [191 + 3(130)] = -196,4\\ \\text{J/K}\\]
                            <strong>Solución: \\(-196,4\\ \\text{J/K}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 52",
                    enunciado: "Calcula \\(\\Delta S^\\circ\\) para la descomposición del amoniaco. Datos: \\(S^\\circ(\\ce{NH3})=192,3\\); \\(S^\\circ(\\ce{N2})=191,5\\); \\(S^\\circ(\\ce{H2})=130,7\\ \\text{J/K}\\).",
                    solucion: `
                        <div class='paso'>
                            \\[\\ce{2NH3(g) -> N2(g) + 3H2(g)}\\]
                            \\[\\Delta S^\\circ = 191,5 + 3(130,7) - 2(192,3) = 199\\ \\text{J/K}\\]
                            <strong>Solución: \\(199\\ \\text{J/K}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 53",
                    enunciado: "Halla \\(\\Delta S\\) en la combustión del metanol. Datos: \\(S^\\circ \\ce{CO2(g)}=213,8\\); \\(\\ce{O2(g)}=204,8\\); \\(\\ce{H2O(l)}=69,8\\); \\(\\ce{CH3OH(l)}=126,6\\ \\text{J/mol·K}\\).",
                    solucion: `
                        <div class='paso'>
                            \\[\\ce{CH3OH(l) + 3/2O2(g) -> CO2(g) + 2H2O(l)}\\]
                            \\[\\Delta S^\\circ = 213,8 + 2(69,8) - [126,6 + 1,5(204,8)] = -80,4\\ \\text{J/K}\\]
                            <strong>Solución: \\(-80,4\\ \\text{J/K}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 54",
                    enunciado: "Predice el signo de \\(\\Delta S\\): <br>a) \\(\\ce{N2(g)+3H2(g)->2NH3(g)}\\) <br>b) \\(\\ce{C(s)+H2O(g)->CO(g)+H2(g)}\\) <br>c) \\(\\ce{2H2(g)+O2(g)->2H2O(l)}\\) <br>d) \\(\\ce{S(s)+O2(g)->SO2(l)}\\)",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> 4 mol gas → 2 mol gas: \\(\\Delta S < 0\\).<br>
                            <strong>b)</strong> sólido + gas → 2 gases: \\(\\Delta S > 0\\).<br>
                            <strong>c)</strong> 3 gases → líquido: \\(\\Delta S < 0\\).<br>
                            <strong>d)</strong> sólido + gas → líquido: \\(\\Delta S < 0\\).
                        </div>
                    `
                },
                {
                    titulo: "Problema 55",
                    enunciado: "Indica el signo de \\(\\Delta S\\): <br>a) \\(\\ce{CaCO3(s)->CaO(s)+CO2(g)}\\) <br>b) \\(\\ce{HCl(g)+NH3(g)->NH4Cl(s)}\\) <br>c) \\(\\ce{2HCl(aq)+Zn(s)->ZnCl2(aq)+H2(g)}\\) <br>d) \\(\\ce{CuSO4·5H2O(s)->CuSO4(s)+5H2O(l)}\\)",
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
            nombre: "8. Energía Libre de Gibbs",
            problemas: [
                {
                    titulo: "Problema 56",
                    enunciado: "Dada la reacción exotérmica: \\[\\ce{C(s) + 2Cl2(g) -> CCl4(l)}\\] Indica razonadamente el signo de \\(\\Delta H\\), \\(\\Delta S\\) y \\(\\Delta G\\).",
                    solucion: `
                        <div class='paso'>
                            \\(\\Delta H < 0\\) por ser exotérmica.<br>
                            \\(\\Delta S < 0\\) porque se pasa de 2 mol de gas a un líquido.<br>
                            \\(\\Delta G = \\Delta H - T\\Delta S\\). A temperaturas bajas predominará el término negativo de \\(\\Delta H\\) y será espontánea (\\(\\Delta G<0\\)); a temperaturas altas puede dejar de serlo.
                        </div>
                    `
                },
                {
                    titulo: "Problema 57",
                    enunciado: "Discute el efecto de la temperatura en la espontaneidad: <br>a) \\(\\ce{2PbO(s)+2SO2(g)->2PbS(s)+3O2(g)}\\ (\\Delta H^\\circ=830,8\\ \\text{kJ}; \\Delta S^\\circ=168\\ \\text{J/K})\\) <br>b) \\(\\ce{2As(s)+3F2(g)->2AsF3(l)}\\ (\\Delta H^\\circ=-1643\\ \\text{kJ}; \\Delta S^\\circ=-0,316\\ \\text{kJ/K})\\) <br>c) \\(\\ce{CO(g)->C(s)+1/2O2(g)}\\ (\\Delta H^\\circ=110,5\\ \\text{kJ}; \\Delta S^\\circ=-89,4\\ \\text{J/K})\\)",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> \\(\\Delta H>0\\), \\(\\Delta S>0\\): espontánea a temperaturas altas, \\(T>\\Delta H/\\Delta S \\approx 4945\\ \\text{K}\\).<br>
                            <strong>b)</strong> \\(\\Delta H<0\\), \\(\\Delta S<0\\): espontánea a temperaturas bajas, \\(T<\\Delta H/\\Delta S \\approx 5,2\\cdot10^6\\ \\text{K}\\).<br>
                            <strong>c)</strong> \\(\\Delta H>0\\), \\(\\Delta S<0\\): no espontánea a ninguna temperatura.
                        </div>
                    `
                },
                {
                    titulo: "Problema 58",
                    enunciado: "Explica cómo varía con la temperatura la espontaneidad de una reacción exotérmica cuyos productos están más ordenados que los reactivos.",
                    solucion: `
                        <div class='paso'>
                            En ese caso \\(\\Delta H<0\\) y \\(\\Delta S<0\\).<br>
                            \\[\\Delta G = \\Delta H - T\\Delta S\\]
                            A temperaturas bajas domina \\(\\Delta H<0\\) y la reacción es espontánea; al aumentar la temperatura, el término \\(-T\\Delta S\\) se hace positivo y puede dejar de ser espontánea.
                        </div>
                    `
                },
                {
                    titulo: "Problema 59",
                    enunciado: "Deduce si será espontánea a 25 ºC: \\[\\ce{2As(s) + 3F2(g) -> 2AsF3(l)}\\qquad \\Delta H^\\circ = -1643\\ \\text{kJ}; \\Delta S^\\circ = -0,316\\ \\text{kJ/K}\\]",
                    solucion: `
                        <div class='paso'>
                            \\[\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ = -1643 - 298(-0,316) \\approx -1548,8\\ \\text{kJ}\\]
                            Como \\(\\Delta G^\\circ < 0\\), es espontánea a 25 ºC.<br>
                            <strong>Solución: espontánea.</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 60",
                    enunciado: "A 298 K: \\(\\ce{NO(g)}\\): \\(\\Delta H^\\circ=90,25\\), \\(\\Delta G^\\circ=86,57\\); \\(\\ce{NO2(g)}\\): \\(\\Delta H^\\circ=33,18\\), \\(\\Delta G^\\circ=51,30\\ \\text{kJ/mol}\\). Razona si la formación de \\(\\ce{NO2}\\) a partir de \\(\\ce{NO}\\) y \\(\\ce{O2}\\) es: a) Exotérmica; b) Espontánea.",
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
                    titulo: "Problema 61",
                    enunciado: "A 25 ºC y 1 atm, \\(\\Delta H=200\\ \\text{kJ}\\) y \\(\\Delta S=80\\ \\text{J/K}\\). Razona si será endotérmica y si será espontánea.",
                    solucion: `
                        <div class='paso'>
                            Es endotérmica porque \\(\\Delta H>0\\).<br>
                            \\[\\Delta G = 200 - 298(0,080) = 176,16\\ \\text{kJ}\\]
                            Como \\(\\Delta G>0\\), no es espontánea en condiciones estándar.
                        </div>
                    `
                },
                {
                    titulo: "Problema 62",
                    enunciado: "\\(\\ce{N2O(g) -> N2(g) + 1/2O2(g)}\\). Siendo \\(\\Delta H^\\circ=43,9\\ \\text{kJ}\\); \\(\\Delta S^\\circ=75,2\\ \\text{J/K}\\). <br>a) ¿Es espontánea en condiciones estándar? <br>b) ¿A partir de qué temperatura será espontánea?",
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
                    titulo: "Problema 63",
                    enunciado: "\\(\\ce{NO2(g) -> 1/2N2(g) + O2(g)}\\) con \\(\\Delta H^\\circ=-33,85\\ \\text{kJ}\\) y \\(\\Delta S^\\circ=59,3\\ \\text{J/K}\\). <br>a) ¿Espontánea a 25 ºC? <br>b) ¿A partir de qué temperatura se considera espontánea?",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> \\[\\Delta G^\\circ = -33,85 - 298(0,0593) \\approx -51,5\\ \\text{kJ}\\]
                            Sí es espontánea a 25 ºC.<br>
                            <strong>b)</strong> Como \\(\\Delta H<0\\) y \\(\\Delta S>0\\), es espontánea a cualquier temperatura.
                        </div>
                    `
                },
                {
                    titulo: "Problema 64",
                    enunciado: "\\(\\ce{2Cl2(g) + 2H2O(g) -> 4HCl(g) + O2(g)}\\). Calcula: <br>a) \\(\\Delta H\\) y \\(\\Delta S\\) estándar; <br>b) la temperatura a la cual empieza a ser espontánea. Datos: \\(\\Delta H_f^\\circ \\ce{H2O(g)}=-241,8\\), \\(\\ce{HCl(g)}=-92,3\\ \\text{kJ/mol}\\); \\(S^\\circ\\): \\(\\ce{Cl2(g)}=223,0\\); \\(\\ce{H2O(g)}=188,7\\); \\(\\ce{HCl(g)}=187\\); \\(\\ce{O2(g)}=205,0\\ \\text{J/mol·K}\\).",
                    solucion: `
                        <div class='paso'>
                            <strong>a)</strong> \\[\\Delta H^\\circ = 4(-92,3)-2(-241,8)=114,4\\ \\text{kJ}\\]
                            \\[\\Delta S^\\circ = [4(187)+205] - [2(223)+2(188,7)] = 129,6\\ \\text{J/K}\\]
                            <strong>b)</strong> \\[T = \\frac{114400}{129,6} \\approx 883\\ \\text{K}\\]
                            <strong>Solución: a) \\(114,4\\ \\text{kJ}\\) y \\(129,6\\ \\text{J/K}\\); b) \\(T \\approx 883\\ \\text{K}\\).</strong>
                        </div>
                    `
                },
                {
                    titulo: "Problema 65",
                    enunciado: "\"Peste del estaño\": \\(\\ce{Sn(blanco) -> Sn(gris)}\\). Datos: \\(\\ce{Sn(blanco)}\\): \\(\\Delta H_f^\\circ=0\\), \\(S^\\circ=51,55\\); \\(\\ce{Sn(gris)}\\): \\(\\Delta H_f^\\circ=-2,09\\ \\text{kJ/mol}\\), \\(S^\\circ=44,14\\ \\text{J/mol·K}\\). Determina por debajo de qué temperatura se produce.",
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
                    titulo: "Problema 66",
                    enunciado: "Datos: \\(\\ce{H2S(g)}\\): \\(\\Delta H^\\circ=-22,1\\); \\(S^\\circ=205,4\\) | \\(\\ce{SO2(g)}\\): \\(\\Delta H^\\circ=-296,4\\); \\(S^\\circ=247,6\\) | \\(\\ce{H2O(g)}\\): \\(\\Delta H^\\circ=-285,5\\); \\(S^\\circ=70,0\\) | \\(\\ce{S(g)}\\): \\(\\Delta H^\\circ=0\\); \\(S^\\circ=31,8\\). <br>a) Calcula \\(\\Delta H^\\circ\\) de: \\[\\ce{2H2S(g) + SO2(g) -> 2H2O(l) + 3S(s)}\\] <br>b) Calcula \\(\\Delta G^\\circ\\) y determina si es espontánea a 25 ºC. <br>c) Explica si se verá favorecida a altas temperaturas.",
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