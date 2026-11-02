if (typeof baseDatosTemas === 'undefined') {
    var baseDatosTemas = {};
}

baseDatosTemas["tema5"] = {
    id: "tema5",
    titulo: "Tema 5: Cinética Química",
    deshabilitado: false,
    secciones: {
        "ley_velocidad": {
            nombre: "1. Ley de velocidad y órdenes de reacción",
            problemas: [
                {
                    titulo: "Junio 2017 - Órdenes de reacción y ley de velocidad",
                    enunciado: "Se ha encontrado que la velocidad de la reacción A (g) + 2 B (g) → C (g) solo depende de la temperatura y de la concentración de A, de manera que si ésta se triplica, también se triplica la velocidad de reacción.<br>a) Indique los órdenes de reacción parciales respecto de A y B, así como el orden total.<br>b) Escriba la ley de velocidad.<br>c) Justifique si para el reactivo A cambia más deprisa la concentración que para el reactivo B.<br>d) Explique cómo afecta a la velocidad de reacción una disminución de volumen a temperatura constante. <br> <strong>Solución: a) orden parcial A = 1, orden parcial B = 0, orden total = 1; b) \\(v = k \\cdot [A]\\); c) falso, B disminuye más rápidamente; d) aumenta la velocidad.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Órdenes de reacción:</strong><br>
                            Como la velocidad solo depende de la concentración de A y al triplicar [A] se triplica la velocidad, el orden parcial respecto de A es 1. Respecto de B, la velocidad no depende de su concentración, por lo que el orden parcial es 0.<br>
                            <strong>Orden total = 1 + 0 = 1</strong>
                        </div>
                        <div class='paso'>
                            <strong>b) Ley de velocidad:</strong><br>
                            \\[ v = k \\cdot [A] \\]
                        </div>
                        <div class='paso'>
                            <strong>c) Variación de concentración de A frente a B:</strong><br>
                            Falso. Según la estequiometría, por cada mol de A que se consume se consumen 2 moles de B, por lo que la concentración de B disminuye más rápidamente que la de A.
                        </div>
                        <div class='paso'>
                            <strong>d) Efecto de una disminución de volumen a T constante:</strong><br>
                            Al disminuir el volumen, aumenta la concentración de A (mayor número de moles por unidad de volumen), por lo que <strong>aumenta la velocidad de reacción</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2017 - Verdadero o falso sobre ley de velocidad",
                    enunciado: "A 28 °C, una reacción del tipo 3 A (g) + 2 B (g) → C (g) presenta la ley de velocidad: v = k · [A]. Justifique si los siguientes enunciados son verdaderos o falsos.<br>a) Se trata de una reacción elemental.<br>b) El reactivo A se consume a mayor velocidad que el reactivo B.<br>c) Las unidades de la constante cinética son L² · mol⁻² · s⁻¹.<br>d) Un aumento de la temperatura no afecta a la velocidad de la reacción. <br> <strong>Solución: a) falso; b) verdadero; c) falso, son s⁻¹; d) falso, aumenta la velocidad.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Falso.</strong> En una reacción elemental, los órdenes parciales coinciden con los coeficientes estequiométricos. Aquí la ley de velocidad es v = k·[A], con orden 0 respecto de B, lo que no coincide con la estequiometría (3A + 2B).
                        </div>
                        <div class='paso'>
                            <strong>b) Verdadero.</strong> Por estequiometría, por cada 3 moles de A que desaparecen se consumen 2 moles de B. La velocidad de desaparición de A es (3/2) veces la de B, es decir, A se consume más rápido que B.
                        </div>
                        <div class='paso'>
                            <strong>c) Falso.</strong> Como el orden total es 1: \\(k = v/[A]\\), las unidades son \\(\\text{s}^{-1}\\) (o \\(\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1} / (\\text{mol}\\cdot\\text{L}^{-1}) = \\text{s}^{-1}\\)).
                        </div>
                        <div class='paso'>
                            <strong>d) Falso.</strong> Un aumento de temperatura aumenta la constante de velocidad (ecuación de Arrhenius) y, por tanto, <strong>aumenta la velocidad de reacción</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Septiembre 2017 - Ley de velocidad v = k·[A]²",
                    enunciado: "Sabiendo que la ecuación cinética v = k · [A]² corresponde a la reacción ajustada: A + 2 B → C + D, conteste razonadamente:<br>a) ¿Cuáles son los órdenes parciales de reacción respecto a ambos reactivos? ¿Se trata de una reacción elemental?<br>b) ¿Cuáles son las unidades de la constante cinética?<br>c) ¿Cómo se modifica la velocidad de la reacción al duplicar la concentración de B?<br>d) ¿Cómo afecta a la velocidad de la reacción una disminución de la temperatura? <br> <strong>Solución: a) orden A = 2, orden B = 0, no elemental; b) mol⁻¹·L·s⁻¹; c) no se modifica; d) disminuye la velocidad.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Órdenes parciales y tipo de reacción:</strong><br>
                            Orden parcial respecto de A = 2. Orden parcial respecto de B = 0. Orden total = 2.<br>
                            No es una reacción elemental, porque los órdenes parciales no coinciden con los coeficientes estequiométricos (1 para A, 2 para B).
                        </div>
                        <div class='paso'>
                            <strong>b) Unidades de k:</strong><br>
                            \\[ k = \\frac{v}{[A]^2} \\Rightarrow \\frac{\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}}{(\\text{mol}\\cdot\\text{L}^{-1})^2} = \\text{mol}^{-1}\\cdot\\text{L}\\cdot\\text{s}^{-1} \\]
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de duplicar [B]:</strong><br>
                            Como el orden respecto de B es 0, la velocidad <strong>no se modifica</strong> al duplicar la concentración de B.
                        </div>
                        <div class='paso'>
                            <strong>d) Efecto de disminuir la temperatura:</strong><br>
                            Al disminuir la temperatura disminuye la constante de velocidad (Arrhenius) y, por tanto, <strong>disminuye la velocidad de reacción</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2018 - Orden 1 en A y orden 2 en B",
                    enunciado: "La reacción 3 A (g) + B (g) → 2 C (g) + D (g) es de orden 1 respecto de A y de orden 2 respecto de B.<br>a) Escriba la velocidad de la reacción en función de cada especie y justifique si la velocidad de desaparición de B es doble de la velocidad de desaparición de A.<br>b) Obtenga las unidades de la constante de velocidad.<br>c) Razone si la reacción directa es endotérmica sabiendo que la energía de activación es 35 kJ y la de la reacción inversa es 62 kJ.<br>d) Explique cómo afecta a la velocidad de reacción un aumento de volumen a temperatura constante. <br> <strong>Solución: a) \\(v = -\\frac{1}{3}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = \\frac{1}{2}\\frac{d[C]}{dt} = \\frac{d[D]}{dt}\\), falso; b) mol⁻²·L²·s⁻¹; c) exotérmica (ΔH = -27 kJ); d) disminuye la velocidad.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Velocidad en función de cada especie:</strong><br>
                            \\[ v = -\\frac{1}{3}\\frac{d[A]}{dt} = -\\frac{d[B]}{dt} = \\frac{1}{2}\\frac{d[C]}{dt} = \\frac{d[D]}{dt} \\]
                            La ley de velocidad es \\(v = k\\cdot[A]\\cdot[B]^2\\).<br>
                            <strong>Falso</strong> que la velocidad de desaparición de B sea el doble de la de A: por estequiometría, \\(-\\frac{d[B]}{dt} = \\frac{1}{3}\\left(-\\frac{d[A]}{dt}\\right)\\), es decir, B desaparece a un tercio de la velocidad de A.
                        </div>
                        <div class='paso'>
                            <strong>b) Unidades de k:</strong><br>
                            \\[ k = \\frac{v}{[A][B]^2} \\Rightarrow \\frac{\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}}{(\\text{mol}\\cdot\\text{L}^{-1})^3} = \\text{mol}^{-2}\\cdot\\text{L}^{2}\\cdot\\text{s}^{-1} \\]
                        </div>
                        <div class='paso'>
                            <strong>c) Carácter endotérmico:</strong><br>
                            \\[ \\Delta H = E_{a,directa} - E_{a,inversa} = 35 - 62 = -27\\ \\text{kJ} \\]
                            Como \\(\\Delta H < 0\\), la reacción directa es <strong>exotérmica</strong>, no endotérmica.
                        </div>
                        <div class='paso'>
                            <strong>d) Efecto de aumentar el volumen a T constante:</strong><br>
                            Al aumentar el volumen disminuyen las concentraciones de los reactivos, por lo que <strong>disminuye la velocidad de reacción</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2018 - Reacción elemental 2 NO + O₂",
                    enunciado: "A 25 °C, transcurre la reacción elemental 2 NO(g) + O₂(g) → 2 NO₂(g).<br>a) Escriba la expresión de velocidad de reacción referida tanto a reactivos como a productos.<br>b) Formule la ecuación de velocidad de la reacción e indique el orden global de reacción.<br>c) Calcule la constante de velocidad si la velocidad de reacción es de 0,024 mol·L⁻¹·s⁻¹ para [NO] = [O₂] = 0,1 M. <br> <strong>Solución: a) \\(v = -\\frac{1}{2}\\frac{d[NO]}{dt} = -\\frac{d[O_2]}{dt} = \\frac{1}{2}\\frac{d[NO_2]}{dt}\\); b) \\(v = k[NO]^2[O_2]\\), orden 3; c) \\(k = 24\\ \\text{mol}^{-2}\\cdot\\text{L}^{2}\\cdot\\text{s}^{-1}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Expresión de velocidad:</strong><br>
                            \\[ v = -\\frac{1}{2}\\frac{d[NO]}{dt} = -\\frac{d[O_2]}{dt} = \\frac{1}{2}\\frac{d[NO_2]}{dt} \\]
                        </div>
                        <div class='paso'>
                            <strong>b) Ecuación de velocidad:</strong><br>
                            Al ser una reacción elemental, los órdenes coinciden con los coeficientes estequiométricos:<br>
                            \\[ v = k\\cdot[NO]^2\\cdot[O_2] \\]
                            Orden global = 2 + 1 = <strong>3</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Cálculo de k:</strong><br>
                            \\[ k = \\frac{v}{[NO]^2[O_2]} = \\frac{0,024}{(0,1)^2 \\cdot 0,1} = \\frac{0,024}{0,001} = \\boxed{24\\ \\text{mol}^{-2}\\cdot\\text{L}^{2}\\cdot\\text{s}^{-1}} \\]
                        </div>
                    `
                },
                {
                    titulo: "Junio 2019 - Descomposición de N₂O₅",
                    enunciado: "Para la descomposición de N₂O₅ a una temperatura dada, la velocidad de reacción se duplica cuando la concentración de N₂O₅ se duplica.<br>a) Escriba la ley de velocidad e indique el orden de reacción.<br>b) Calcule la constante de velocidad sabiendo que cuando se introducen 3,5 g de N₂O₅ en un recipiente de 0,750 L sellado, la velocidad de reacción es 2,2·10⁻⁴ mol·L⁻¹·s⁻¹. <br> <strong>Solución: a) \\(v = k[N_2O_5]\\), orden 1; b) \\(k = 5,09\\cdot10^{-3}\\ \\text{s}^{-1}\\).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Ley de velocidad:</strong><br>
                            Como al duplicar [N₂O₅] se duplica la velocidad, el orden es 1:<br>
                            \\[ v = k\\cdot[N_2O_5] \\]
                            Orden de reacción = <strong>1</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) Cálculo de k:</strong><br>
                            Masa molar de N₂O₅ = 2·14 + 5·16 = 108 g/mol.<br>
                            \\[ [N_2O_5] = \\frac{3,5\\ \\text{g} / 108\\ \\text{g/mol}}{0,750\\ \\text{L}} = \\frac{0,0324\\ \\text{mol}}{0,750\\ \\text{L}} = 0,0432\\ \\text{mol}\\cdot\\text{L}^{-1} \\]
                            \\[ k = \\frac{v}{[N_2O_5]} = \\frac{2,2\\cdot10^{-4}}{0,0432} = \\boxed{5,09\\cdot10^{-3}\\ \\text{s}^{-1}} \\]
                        </div>
                    `
                },
                {
                    titulo: "Julio 2019 - Ley de velocidad v = k·[A]²",
                    enunciado: "Sabiendo que la ecuación de velocidad v = k · [A]² corresponde a la reacción ajustada: A + 2 B → C, conteste razonadamente.<br>a) ¿Cuáles son los órdenes parciales de reacción respecto a cada reactivo? ¿Y el orden total de la reacción?<br>b) Deduzca las unidades de la constante de velocidad.<br>c) Indique cómo se modifica la velocidad de la reacción al duplicar la concentración inicial de B.<br>d) Explique cómo afecta a la velocidad de la reacción una disminución de la temperatura. <br> <strong>Solución: a) orden A = 2, orden B = 0, orden total = 2; b) mol⁻¹·L·s⁻¹; c) no se modifica; d) disminuye la velocidad.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Órdenes parciales y total:</strong><br>
                            Orden parcial respecto de A = 2. Orden parcial respecto de B = 0. Orden total = <strong>2</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) Unidades de k:</strong><br>
                            \\[ k = \\frac{v}{[A]^2} \\Rightarrow \\text{mol}^{-1}\\cdot\\text{L}\\cdot\\text{s}^{-1} \\]
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de duplicar [B]:</strong><br>
                            Al ser el orden respecto de B cero, la velocidad <strong>no se modifica</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Efecto de disminuir la temperatura:</strong><br>
                            Disminuye la constante de velocidad y, por tanto, <strong>disminuye la velocidad de reacción</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Septiembre 2020 - Dos condiciones experimentales",
                    enunciado: "Se ha llevado a cabo la reacción: A (g) + 2 B (g) → 2 C (g) en dos condiciones experimentales diferentes, obteniéndose la ecuación de velocidad v = k · [B] y los siguientes valores de energías:<br><table border='1' style='border-collapse: collapse; text-align: center; margin: 10px auto; width: fit-content;'><tr><th style='padding: 6px 12px;'>Experimento</th><th style='padding: 6px 12px;'>Ea / kJ·mol⁻¹</th><th style='padding: 6px 12px;'>ΔH / kJ·mol⁻¹</th></tr><tr><td style='padding: 6px 12px;'>1</td><td style='padding: 6px 12px;'>2</td><td style='padding: 6px 12px;'>-0,3</td></tr><tr><td style='padding: 6px 12px;'>2</td><td style='padding: 6px 12px;'>0,5</td><td style='padding: 6px 12px;'>-0,3</td></tr></table><br>a) Justifique en cuál de los experimentos la reacción es más lenta.<br>b) Explique cómo se modifica la velocidad de la reacción al duplicar la concentración inicial de A.<br>c) Determine el orden total de la reacción y las unidades de la constante de velocidad.<br>d) Justifique cómo afecta a la velocidad de reacción un aumento de temperatura. <br> <strong>Solución: a) experimento 1; b) no se modifica; c) orden total = 1, k en s⁻¹; d) aumenta la velocidad.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Experimento más lento:</strong><br>
                            Según la ecuación de Arrhenius, \\(k = A\\cdot e^{-E_a/RT}\\). A mayor energía de activación, menor constante de velocidad y reacción más lenta. El experimento 1 tiene mayor Ea (2 kJ/mol frente a 0,5 kJ/mol), por lo que <strong>la reacción es más lenta en el experimento 1</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) Efecto de duplicar [A]:</strong><br>
                            Como la ley de velocidad es v = k·[B], el orden respecto de A es 0. Al duplicar [A], <strong>la velocidad no cambia</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Orden total y unidades de k:</strong><br>
                            Orden total = 1 (respecto de B).<br>
                            \\[ k = \\frac{v}{[B]} \\Rightarrow \\text{s}^{-1} \\]
                        </div>
                        <div class='paso'>
                            <strong>d) Efecto de aumentar la temperatura:</strong><br>
                            Un aumento de temperatura aumenta la constante de velocidad (Arrhenius), por lo que <strong>aumenta la velocidad de reacción</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2021 - Verdadero o falso sobre v = k·[NO₂]²",
                    enunciado: "La ecuación de velocidad de la reacción CO (g) + NO₂ (g) → CO₂ (g) + NO (g) es v = k · [NO₂]². Justifique si son verdaderas o falsas las siguientes afirmaciones:<br>a) La velocidad de desaparición de ambos reactivos es la misma.<br>b) Las unidades de la constante de velocidad son: mol·L·s⁻¹.<br>c) La velocidad de la reacción aumenta al duplicar la concentración inicial de CO (g).<br>d) En esta reacción en particular, la constante de velocidad no depende de la temperatura, porque la reacción se produce en fase gaseosa. <br> <strong>Solución: a) verdadera; b) falsa, son mol⁻¹·L·s⁻¹; c) falsa, no se modifica; d) falsa, depende de T.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Verdadera.</strong> Por estequiometría, ambos reactivos tienen coeficiente 1, por lo que sus velocidades de desaparición son iguales: \\(-d[CO]/dt = -d[NO_2]/dt\\).
                        </div>
                        <div class='paso'>
                            <strong>b) Falsa.</strong> Como el orden total es 2: \\(k = v/[NO_2]^2 \\Rightarrow \\text{mol}^{-1}\\cdot\\text{L}\\cdot\\text{s}^{-1}\\), no mol·L·s⁻¹.
                        </div>
                        <div class='paso'>
                            <strong>c) Falsa.</strong> El orden respecto de CO es 0 (no aparece en la ley de velocidad), por lo que duplicar [CO] <strong>no modifica la velocidad</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Falsa.</strong> La constante de velocidad siempre depende de la temperatura según la ecuación de Arrhenius, independientemente del estado físico.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2021 - Reacción 2 NO₂ + F₂",
                    enunciado: "Para la reacción en fase gaseosa 2 NO₂ (g) + F₂ (g) → 2 NO₂F (g) la ecuación de velocidad es v = k · [NO₂] · [F₂]. Responda las siguientes cuestiones:<br>a) Indique los órdenes parciales respecto de los reactivos y el orden total de la reacción.<br>b) Razone si es una reacción elemental.<br>c) Determine las unidades de la constante de velocidad.<br>d) Justifique, mediante la ecuación de Arrhenius, cómo afecta un aumento de temperatura a la velocidad de reacción. <br> <strong>Solución: a) orden NO₂ = 1, orden F₂ = 1, orden total = 2; b) no elemental; c) mol⁻¹·L·s⁻¹; d) aumenta la velocidad.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Órdenes:</strong><br>
                            Orden parcial respecto de NO₂ = 1. Orden parcial respecto de F₂ = 1. Orden total = <strong>2</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) ¿Reacción elemental?</strong><br>
                            Los órdenes parciales (1 y 1) coinciden con los coeficientes estequiométricos (2 y 1)? No: el coeficiente de NO₂ es 2 y su orden es 1. Por tanto, <strong>no es una reacción elemental</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Unidades de k:</strong><br>
                            \\[ k = \\frac{v}{[NO_2][F_2]} \\Rightarrow \\text{mol}^{-1}\\cdot\\text{L}\\cdot\\text{s}^{-1} \\]
                        </div>
                        <div class='paso'>
                            <strong>d) Efecto de aumentar T (Arrhenius):</strong><br>
                            \\[ k = A\\cdot e^{-E_a/RT} \\]
                            Al aumentar T, el exponente se hace menos negativo, \\(e^{-E_a/RT}\\) aumenta y, por tanto, <strong>aumenta k y la velocidad de reacción</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2022 - Orden 1 en CHCl₃ y orden 1/2 en Cl₂",
                    enunciado: "La reacción CHCl₃ (g) + Cl₂ (g) → CCl₄ (g) + HCl (g) es de primer orden con respecto a CHCl₃ y de orden 1/2 con respecto a Cl₂.<br>a) Escriba la ecuación de velocidad y determine el orden total de la reacción.<br>b) Deduzca las unidades de la constante de velocidad.<br>c) Justifique cómo afecta a la velocidad de reacción un aumento de volumen a temperatura constante.<br>d) Justifique cómo afecta a la velocidad de reacción un aumento de temperatura. <br> <strong>Solución: a) \\(v = k[CHCl_3][Cl_2]^{1/2}\\), orden total = 1,5; b) mol⁻⁰·⁵·L⁰·⁵·s⁻¹; c) disminuye la velocidad; d) aumenta la velocidad.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Ecuación de velocidad:</strong><br>
                            \\[ v = k\\cdot[CHCl_3]\\cdot[Cl_2]^{1/2} \\]
                            Orden total = 1 + 1/2 = <strong>1,5</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) Unidades de k:</strong><br>
                            \\[ k = \\frac{v}{[CHCl_3][Cl_2]^{1/2}} \\Rightarrow \\frac{\\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}}{(\\text{mol}\\cdot\\text{L}^{-1})^{1,5}} = \\text{mol}^{-0,5}\\cdot\\text{L}^{0,5}\\cdot\\text{s}^{-1} \\]
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de aumentar el volumen a T constante:</strong><br>
                            Al aumentar el volumen disminuyen las concentraciones de los reactivos, por lo que <strong>disminuye la velocidad de reacción</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Efecto de aumentar la temperatura:</strong><br>
                            Aumenta la constante de velocidad (Arrhenius), por lo que <strong>aumenta la velocidad de reacción</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2022 - Reacción 2 NO + 2 H₂",
                    enunciado: "Para la reacción 2 NO (g) + 2 H₂ (g) → N₂ (g) + 2 H₂O (g) el orden parcial de cada reactivo es uno.<br>a) Escriba una expresión para su ecuación de velocidad y calcule el orden total de la reacción.<br>b) Para un valor inicial de [NO] y [H₂] de 0,0025 mol·L⁻¹ y 0,075 mol·L⁻¹, respectivamente, la velocidad es 4,5·10⁻⁴ mol·L⁻¹·s⁻¹. Determine la constante de velocidad y sus unidades.<br>c) Razone cómo afectará la presencia de un catalizador a la velocidad de la reacción, la energía de activación, ΔH, ΔS y ΔG. <br> <strong>Solución: a) \\(v = k[NO][H_2]\\), orden total = 2; b) \\(k = 2,4\\ \\text{mol}^{-1}\\cdot\\text{L}\\cdot\\text{s}^{-1}\\); c) aumenta la velocidad, disminuye Ea, ΔH, ΔS y ΔG no cambian.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Ecuación de velocidad:</strong><br>
                            \\[ v = k\\cdot[NO]\\cdot[H_2] \\]
                            Orden total = 1 + 1 = <strong>2</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) Cálculo de k:</strong><br>
                            \\[ k = \\frac{v}{[NO][H_2]} = \\frac{4,5\\cdot10^{-4}}{0,0025 \\cdot 0,075} = \\frac{4,5\\cdot10^{-4}}{1,875\\cdot10^{-4}} = \\boxed{2,4\\ \\text{mol}^{-1}\\cdot\\text{L}\\cdot\\text{s}^{-1}} \\]
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de un catalizador:</strong><br>
                            - <strong>Velocidad:</strong> aumenta (proporciona un camino de reacción con menor Ea).<br>
                            - <strong>Energía de activación (Ea):</strong> disminuye.<br>
                            - <strong>ΔH, ΔS y ΔG:</strong> no se modifican, ya que son funciones de estado que dependen solo de reactivos y productos, no del camino seguido.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2023 - Reacción de segundo orden 2 A → 2 B + C",
                    enunciado: "La reacción en fase gaseosa 2 A → 2 B + C es de segundo orden. Cuando la concentración de A es 0,050 M presenta una velocidad de 7,8·10⁻⁴ mol·L⁻¹·s⁻¹.<br>a) Escriba la ecuación de velocidad y deduzca las unidades de la constante de velocidad.<br>b) Determine la constante de velocidad y calcule la velocidad cuando la concentración de A sea 0,090 M.<br>c) Justifique cómo afecta a la velocidad de la reacción la presencia de un catalizador.<br>d) Justifique, mediante la ecuación de Arrhenius, cómo afecta a la constante de velocidad un aumento de la temperatura. <br> <strong>Solución: a) \\(v = k[A]^2\\), k en mol⁻¹·L·s⁻¹; b) \\(k = 0,312\\ \\text{mol}^{-1}\\cdot\\text{L}\\cdot\\text{s}^{-1}\\), \\(v = 2,53\\cdot10^{-3}\\ \\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}\\); c) aumenta la velocidad; d) aumenta k.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Ecuación de velocidad y unidades de k:</strong><br>
                            \\[ v = k\\cdot[A]^2 \\]
                            \\[ k = \\frac{v}{[A]^2} \\Rightarrow \\text{mol}^{-1}\\cdot\\text{L}\\cdot\\text{s}^{-1} \\]
                        </div>
                        <div class='paso'>
                            <strong>b) Cálculo de k y nueva velocidad:</strong><br>
                            \\[ k = \\frac{7,8\\cdot10^{-4}}{(0,050)^2} = \\frac{7,8\\cdot10^{-4}}{2,5\\cdot10^{-3}} = \\boxed{0,312\\ \\text{mol}^{-1}\\cdot\\text{L}\\cdot\\text{s}^{-1}} \\]
                            Para [A] = 0,090 M:<br>
                            \\[ v = 0,312 \\cdot (0,090)^2 = 0,312 \\cdot 0,0081 = \\boxed{2,53\\cdot10^{-3}\\ \\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}} \\]
                        </div>
                        <div class='paso'>
                            <strong>c) Efecto de un catalizador:</strong><br>
                            El catalizador proporciona un mecanismo alternativo con menor energía de activación, por lo que <strong>aumenta la velocidad de reacción</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Efecto de aumentar T (Arrhenius):</strong><br>
                            \\[ k = A\\cdot e^{-E_a/RT} \\]
                            Al aumentar T, \\(e^{-E_a/RT}\\) aumenta, por lo que <strong>aumenta la constante de velocidad k</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2024 - Orden 2 en NO y orden 1 en Cl₂",
                    enunciado: "La siguiente reacción es de orden 2 respecto al monóxido de nitrógeno y de orden 1 respecto al cloro:<br>\\[2\\ \\text{NO (g)} + \\text{Cl}_2\\ \\text{(g)} \\rightarrow 2\\ \\text{NOCl (g)}\\]<br>a) Escriba la ecuación de velocidad para dicha reacción, y deduzca las unidades de la constante de velocidad si las concentraciones se miden en mol·L⁻¹ y el tiempo en s.<br>b) A partir de la ecuación de Arrhenius, explique cómo afecta a la velocidad de la reacción un aumento de temperatura. <br> <strong>Solución: a) \\(v = k[NO]^2[Cl_2]\\), k en mol⁻²·L²·s⁻¹; b) aumenta la velocidad.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Ecuación de velocidad y unidades de k:</strong><br>
                            \\[ v = k\\cdot[NO]^2\\cdot[Cl_2] \\]
                            Orden total = 3.<br>
                            \\[ k = \\frac{v}{[NO]^2[Cl_2]} \\Rightarrow \\text{mol}^{-2}\\cdot\\text{L}^{2}\\cdot\\text{s}^{-1} \\]
                        </div>
                        <div class='paso'>
                            <strong>b) Efecto de aumentar T (Arrhenius):</strong><br>
                            \\[ k = A\\cdot e^{-E_a/RT} \\]
                            Al aumentar T, el término \\(e^{-E_a/RT}\\) aumenta, por lo que <strong>aumenta k y la velocidad de reacción</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2024 - Descomposición de N₂O₅ a 45 °C",
                    enunciado: "A la temperatura de 45 °C se produce la reacción: 2 N₂O₅ (g) → 4 NO₂ (g) + O₂ (g), con una velocidad de descomposición del N₂O₅ de 2,5·10⁻⁶ mol·L⁻¹·s⁻¹.<br>a) Determine, en esas mismas condiciones, la velocidad a la que se forma el NO₂ y el O₂.<br>b) Sabiendo que la constante de velocidad a 45 °C es 6,08·10⁻⁴ s⁻¹, escriba justificadamente la ecuación de velocidad de la reacción y calcule la velocidad de reacción cuando la concentración de N₂O₅ es 0,10 mol·L⁻¹.<br>c) Utilizando la ecuación de Arrhenius, justifique si es verdadera la siguiente afirmación: \"La velocidad de una reacción puede aumentar si se lleva a cabo por un mecanismo diferente en el que se rebaje su energía de activación, por el uso de un catalizador adecuado\". <br> <strong>Solución: a) v(NO₂) = 5·10⁻⁶ mol·L⁻¹·s⁻¹, v(O₂) = 1,25·10⁻⁶ mol·L⁻¹·s⁻¹; b) \\(v = k[N_2O_5]\\), \\(v = 6,08·10^{-5}\\ \\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}\\); c) verdadera.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Velocidad de formación de NO₂ y O₂:</strong><br>
                            \\[ v = -\\frac{1}{2}\\frac{d[N_2O_5]}{dt} = \\frac{1}{4}\\frac{d[NO_2]}{dt} = \\frac{d[O_2]}{dt} \\]
                            Velocidad de desaparición de N₂O₅ = 2,5·10⁻⁶ mol·L⁻¹·s⁻¹.<br>
                            \\[ \\frac{d[NO_2]}{dt} = \\frac{4}{2}\\cdot 2,5\\cdot10^{-6} = \\boxed{5\\cdot10^{-6}\\ \\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}} \\]
                            \\[ \\frac{d[O_2]}{dt} = \\frac{1}{2}\\cdot 2,5\\cdot10^{-6} = \\boxed{1,25\\cdot10^{-6}\\ \\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}} \\]
                        </div>
                        <div class='paso'>
                            <strong>b) Ecuación de velocidad y velocidad a [N₂O₅] = 0,10 M:</strong><br>
                            Las unidades de k son s⁻¹, lo que indica orden total 1. La ecuación es:<br>
                            \\[ v = k\\cdot[N_2O_5] \\]
                            \\[ v = 6,08\\cdot10^{-4}\\cdot 0,10 = \\boxed{6,08\\cdot10^{-5}\\ \\text{mol}\\cdot\\text{L}^{-1}\\cdot\\text{s}^{-1}} \\]
                        </div>
                        <div class='paso'>
                            <strong>c) Afirmación sobre el catalizador:</strong><br>
                            <strong>Verdadera.</strong> Según Arrhenius, \\(k = A\\cdot e^{-E_a/RT}\\). Si un catalizador proporciona un mecanismo con menor Ea, el término exponencial aumenta y, por tanto, aumenta k y la velocidad de reacción.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2025 - Nitrato de amonio: síntesis y descomposición",
                    enunciado: "Responda a las siguientes preguntas:<br>a) El nitrato de amonio es un compuesto con muchas aplicaciones, cuya síntesis se realiza por reacción directa de ácido nítrico y amoniaco. Escriba la reacción ajustada que se produce y, haciendo uso de la Tabla, calcule ΔG⁰r a 300 K. Justifique la espontaneidad de la reacción.<br>b) Una de las aplicaciones del nitrato de amonio es como explosivo, ya que en ciertas condiciones (temperaturas por encima de 175 °C) se produce de forma explosiva la reacción de descomposición que da lugar a óxido de dinitrógeno y agua. Escriba la reacción ajustada y con los datos de la Tabla calcule ΔH⁰r y ΔS⁰r. Determine ΔG⁰r a 450 K para dicha reacción. Considere que ΔH⁰r y ΔS⁰r no cambian con la temperatura. Justifique si la reacción es exotérmica y espontánea.<br>c) Escriba la ley de velocidad de la reacción de descomposición del nitrato de amonio considerando que las unidades de su constante de velocidad son s⁻¹, e indique el orden de la reacción.<br>d) Explique cómo afecta a la velocidad de la reacción de descomposición del nitrato de amonio una disminución de la temperatura.<br><br><strong>Tabla. Datos termodinámicos a 300 K.</strong><br><table border='1' style='border-collapse: collapse; text-align: center; margin: 10px auto; width: fit-content;'><tr><th style='padding: 6px 12px;'>Compuesto</th><th style='padding: 6px 12px;'>ΔGf⁰ (kJ·mol⁻¹)</th><th style='padding: 6px 12px;'>ΔHf⁰ (kJ·mol⁻¹)</th><th style='padding: 6px 12px;'>S⁰ (J·K⁻¹·mol⁻¹)</th></tr><tr><td style='padding: 6px 12px;'>NH₄NO₃</td><td style='padding: 6px 12px;'>-184</td><td style='padding: 6px 12px;'>-366</td><td style='padding: 6px 12px;'>151</td></tr><tr><td style='padding: 6px 12px;'>HNO₃</td><td style='padding: 6px 12px;'>-81</td><td style='padding: 6px 12px;'>—</td><td style='padding: 6px 12px;'>—</td></tr><tr><td style='padding: 6px 12px;'>NH₃</td><td style='padding: 6px 12px;'>-17</td><td style='padding: 6px 12px;'>—</td><td style='padding: 6px 12px;'>—</td></tr><tr><td style='padding: 6px 12px;'>N₂O</td><td style='padding: 6px 12px;'>82</td><td style='padding: 6px 12px;'>22</td><td style='padding: 6px 12px;'>0</td></tr><tr><td style='padding: 6px 12px;'>H₂O</td><td style='padding: 6px 12px;'>—</td><td style='padding: 6px 12px;'>-241</td><td style='padding: 6px 12px;'>189</td></tr></table> <br> <strong>Solución: a) ΔG⁰r = -86 kJ·mol⁻¹, espontánea; b) ΔH⁰r = -34 kJ·mol⁻¹ (exotérmica), ΔS⁰r = 447 J·K⁻¹·mol⁻¹, ΔG⁰r(450 K) = -235 kJ·mol⁻¹ (espontánea); c) \\(v = k[NH_4NO_3]\\), orden 1; d) disminuye la velocidad.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Síntesis del nitrato de amonio:</strong><br>
                            Reacción ajustada:<br>
                            \\[ \\ce{HNO3 (aq) + NH3 (aq) -> NH4NO3 (aq)} \\]
                            Cálculo de \\(\\Delta G^0_r\\) a 300 K:<br>
                            \\[ \\Delta G^0_r = \\Delta G^0_f(\\ce{NH4NO3}) - \\left[ \\Delta G^0_f(\\ce{HNO3}) + \\Delta G^0_f(\\ce{NH3}) \\right] \\]
                            \\[ \\Delta G^0_r = (-184) - [(-81) + (-17)] = -184 - (-98) = \\boxed{-86\\ \\text{kJ}\\cdot\\text{mol}^{-1}} \\]
                            Como \\(\\Delta G^0_r < 0\\), la reacción es <strong>espontánea</strong> en las condiciones indicadas.
                        </div>
                        <div class='paso'>
                            <strong>b) Descomposición del nitrato de amonio:</strong><br>
                            Reacción ajustada:<br>
                            \\[ \\ce{NH4NO3 (s) -> N2O (g) + 2 H2O (g)} \\]
                            Cálculo de \\(\\Delta H^0_r\\):<br>
                            \\[ \\Delta H^0_r = \\Delta H^0_f(\\ce{N2O}) + 2\\Delta H^0_f(\\ce{H2O}) - \\Delta H^0_f(\\ce{NH4NO3}) \\]
                            \\[ \\Delta H^0_r = 22 + 2(-241) - (-366) = 22 - 482 + 366 = \\boxed{-34\\ \\text{kJ}\\cdot\\text{mol}^{-1}} \\]
                            Cálculo de \\(\\Delta S^0_r\\):<br>
                            \\[ \\Delta S^0_r = S^0(\\ce{N2O}) + 2S^0(\\ce{H2O}) - S^0(\\ce{NH4NO3}) \\]
                            \\[ \\Delta S^0_r = 0 + 2(189) - 151 = 378 - 151 = \\boxed{447\\ \\text{J}\\cdot\\text{K}^{-1}\\cdot\\text{mol}^{-1}} \\]
                            Cálculo de \\(\\Delta G^0_r\\) a 450 K:<br>
                            \\[ \\Delta G^0_r = \\Delta H^0_r - T\\Delta S^0_r = -34\\ \\text{kJ} - 450\\ \\text{K}\\cdot 0,447\\ \\text{kJ}\\cdot\\text{K}^{-1} \\]
                            \\[ \\Delta G^0_r = -34 - 201,15 = \\boxed{-235\\ \\text{kJ}\\cdot\\text{mol}^{-1}} \\]
                            Como \\(\\Delta H^0_r < 0\\), la reacción es <strong>exotérmica</strong>. Como \\(\\Delta G^0_r < 0\\), es <strong>espontánea</strong> a 450 K.
                        </div>
                        <div class='paso'>
                            <strong>c) Ley de velocidad:</strong><br>
                            Si las unidades de k son s⁻¹, el orden total de la reacción es 1. La ley de velocidad es:<br>
                            \\[ v = k\\cdot[\\ce{NH4NO3}] \\]
                            Orden de la reacción = <strong>1</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Efecto de disminuir la temperatura:</strong><br>
                            Según la ecuación de Arrhenius, \\(k = A\\cdot e^{-E_a/RT}\\). Al disminuir la temperatura, el exponente se hace más negativo, \\(e^{-E_a/RT}\\) disminuye y, por tanto, disminuye k. En consecuencia, <strong>disminuye la velocidad de reacción</strong>.
                        </div>
                    `
                }
            ]
        },
        "mecanismos_catalizadores": {
            nombre: "2. Mecanismos de reacción y catalizadores",
            problemas: [
                {
                    titulo: "Julio 2022 - Efecto de un catalizador sobre magnitudes termodinámicas",
                    enunciado: "Para la reacción 2 NO (g) + 2 H₂ (g) → N₂ (g) + 2 H₂O (g) el orden parcial de cada reactivo es uno.<br>c) Razone cómo afectará la presencia de un catalizador a la velocidad de la reacción, la energía de activación, ΔH, ΔS y ΔG. <br> <strong>Solución: aumenta la velocidad, disminuye Ea, ΔH, ΔS y ΔG no cambian.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>Efecto de un catalizador:</strong><br>
                            - <strong>Velocidad de reacción:</strong> aumenta, ya que el catalizador proporciona un mecanismo alternativo con menor energía de activación.<br>
                            - <strong>Energía de activación (Ea):</strong> disminuye.<br>
                            - <strong>ΔH, ΔS y ΔG:</strong> no se modifican, porque son funciones de estado que dependen únicamente de los estados inicial (reactivos) y final (productos), no del camino de reacción seguido.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2024 - Catalizador y ecuación de Arrhenius",
                    enunciado: "Utilizando la ecuación de Arrhenius, justifique si es verdadera la siguiente afirmación: \"La velocidad de una reacción puede aumentar si se lleva a cabo por un mecanismo diferente en el que se rebaje su energía de activación, por el uso de un catalizador adecuado\". <br> <strong>Solución: verdadera.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>Justificación mediante la ecuación de Arrhenius:</strong><br>
                            La ecuación de Arrhenius es:<br>
                            \\[ k = A\\cdot e^{-E_a/RT} \\]
                            Si un catalizador proporciona un mecanismo alternativo con una energía de activación (Ea) menor, el exponente \\(-E_a/RT\\) se hace menos negativo (más próximo a cero), por lo que el factor \\(e^{-E_a/RT}\\) aumenta. Como consecuencia, la constante de velocidad k aumenta y, por tanto, la velocidad de reacción también aumenta.<br><br>
                            Por tanto, <strong>la afirmación es verdadera</strong>.
                        </div>
                    `
                }
            ]
        },
        "ecuacion_arrhenius": {
            nombre: "3. Ecuación de Arrhenius y efecto de la temperatura",
            problemas: [
                {
                    titulo: "Julio 2021 - Efecto de la temperatura mediante Arrhenius",
                    enunciado: "Para la reacción en fase gaseosa 2 NO₂ (g) + F₂ (g) → 2 NO₂F (g) la ecuación de velocidad es v = k · [NO₂] · [F₂].<br>d) Justifique, mediante la ecuación de Arrhenius, cómo afecta un aumento de temperatura a la velocidad de reacción. <br> <strong>Solución: aumenta la velocidad.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>Efecto de un aumento de temperatura (Arrhenius):</strong><br>
                            La ecuación de Arrhenius es:<br>
                            \\[ k = A\\cdot e^{-E_a/RT} \\]
                            Al aumentar la temperatura T, el término \\(E_a/RT\\) disminuye, por lo que el exponente \\(-E_a/RT\\) se hace menos negativo y \\(e^{-E_a/RT}\\) aumenta. En consecuencia, la constante de velocidad k aumenta y, como \\(v = k\\cdot[NO_2]\\cdot[F_2]\\), <strong>la velocidad de reacción aumenta</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2023 - Efecto de la temperatura sobre k",
                    enunciado: "La reacción en fase gaseosa 2 A → 2 B + C es de segundo orden. Cuando la concentración de A es 0,050 M presenta una velocidad de 7,8·10⁻⁴ mol·L⁻¹·s⁻¹.<br>d) Justifique, mediante la ecuación de Arrhenius, cómo afecta a la constante de velocidad un aumento de la temperatura. <br> <strong>Solución: aumenta k.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>Efecto de un aumento de temperatura sobre k (Arrhenius):</strong><br>
                            \\[ k = A\\cdot e^{-E_a/RT} \\]
                            Al aumentar T, el cociente \\(E_a/RT\\) disminuye, el exponente \\(-E_a/RT\\) se hace menos negativo y el factor exponencial \\(e^{-E_a/RT}\\) aumenta. Por tanto, <strong>la constante de velocidad k aumenta</strong> con la temperatura.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2024 - Efecto de la temperatura en 2 NO + Cl₂",
                    enunciado: "La siguiente reacción es de orden 2 respecto al monóxido de nitrógeno y de orden 1 respecto al cloro:<br>\\[2\\ \\text{NO (g)} + \\text{Cl}_2\\ \\text{(g)} \\rightarrow 2\\ \\text{NOCl (g)}\\]<br>b) A partir de la ecuación de Arrhenius, explique cómo afecta a la velocidad de la reacción un aumento de temperatura. <br> <strong>Solución: aumenta la velocidad.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>Efecto de un aumento de temperatura (Arrhenius):</strong><br>
                            \\[ k = A\\cdot e^{-E_a/RT} \\]
                            Al aumentar T, el exponente \\(-E_a/RT\\) se hace menos negativo, por lo que \\(e^{-E_a/RT}\\) aumenta. Así, k aumenta y, dado que \\(v = k\\cdot[NO]^2\\cdot[Cl_2]\\), <strong>la velocidad de reacción aumenta</strong>.
                        </div>
                    `
                }
            ]
        }
    }
};                            