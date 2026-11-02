if (typeof baseDatosTemas === 'undefined') {
    var baseDatosTemas = {};
}

baseDatosTemas["tema8_redox"] = {
    id: "tema8_redox",
    titulo: "Tema 8: Reacciones Redox",
    deshabilitado: false,
    secciones: {
        "ajuste_redox": {
            nombre: "1. Ajuste de reacciones redox (ion-electrón)",
            problemas: [
                {
                    titulo: "Junio 2019 - Oxidación del estaño con ácido nítrico",
                    enunciado: "El estaño metálico es oxidado por el ácido nítrico a óxido de estaño (IV) obteniéndose además óxido de nitrógeno (IV) y agua.<br>a) Escriba y ajuste las semirreacciones de oxidación y reducción que tienen lugar.<br>b) Escriba la reacción iónica y la molecular global ajustadas por el método del ion electrón.<br>c) Calcule la masa obtenida de óxido de estaño (IV) si se hace reaccionar 100 g de estaño de riqueza 70 % en masa, sabiendo que el rendimiento de la reacción es del 90 %.<br>Datos: Masas atómicas: O = 16,0; Sn = 118,7. <br> <strong>Solución: a) Sn + 2 H₂O → SnO₂ + 4 H⁺ + 4 e⁻; NO₃⁻ + 2 H⁺ + e⁻ → NO₂ + H₂O; b) iónica: Sn + 4 NO₃⁻ + 4 H⁺ → SnO₂ + 4 NO₂ + 2 H₂O; molecular: Sn + 4 HNO₃ → SnO₂ + 4 NO₂ + 2 H₂O; c) m(SnO₂) ≈ 80,0 g.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Semirreacciones ajustadas:</strong><br>
                            Oxidación: \\[\\ce{Sn + 2 H2O -> SnO2 + 4 H+ + 4 e-}\\]<br>
                            Reducción: \\[\\ce{NO3- + 2 H+ + e- -> NO2 + H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Reacciones iónica y molecular globales:</strong><br>
                            Multiplicando la reducción por 4 y sumando:<br>
                            Iónica: \\[\\ce{Sn + 4 NO3- + 4 H+ -> SnO2 + 4 NO2 + 2 H2O}\\]<br>
                            Molecular: \\[\\ce{Sn + 4 HNO3 -> SnO2 + 4 NO2 + 2 H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Masa de SnO₂ obtenida:</strong><br>
                            Masa de Sn puro: \\(100 \\text{ g} \\cdot 0,70 = 70 \\text{ g}\\)<br>
                            Moles de Sn: \\(n = \\frac{70}{118,7} = 0,590 \\text{ mol}\\)<br>
                            Por estequiometría (1:1), se obtienen los mismos moles de SnO₂.<br>
                            Masa teórica de SnO₂: \\(m = 0,590 \\cdot (118,7 + 32) = 0,590 \\cdot 150,7 = 88,91 \\text{ g}\\)<br>
                            Masa real (rendimiento 90%): \\(m_{real} = 88,91 \\cdot 0,90 = \\boxed{80,02 \\text{ g}}\\) (aprox. 79,98 g).
                        </div>
                    `
                },
                {
                    titulo: "Julio 2019 - Reacción entre HNO₃ y Cl₂",
                    enunciado: "El HNO₃ reacciona con Cl₂, para dar HClO₃, NO₂ y H₂O.<br>a) Nombre todos los compuestos implicados en la reacción.<br>b) Escriba y ajuste las semirreacciones de oxidación y reducción que tienen lugar, por el método ion-electrón, indicando la especie que actúa como oxidante y la que actúa como reductora.<br>c) Escriba las reacciones iónica y molecular globales ajustadas.<br>d) Calcule cuántos gramos de HClO₃ se obtienen cuando se hacen reaccionar 15 g de Cl₂ del 80 % de riqueza en masa, con un exceso de HNO₃.<br>Datos: Masas atómicas: H = 1; O = 16; Cl = 35,5. <br> <strong>Solución: a) HNO₃ ácido nítrico, Cl₂ cloro, HClO₃ ácido clórico, NO₂ dióxido de nitrógeno, H₂O agua; b) oxidación: Cl₂ + 6 H₂O → 2 ClO₃⁻ + 12 H⁺ + 10 e⁻; reducción: NO₃⁻ + 2 H⁺ + e⁻ → NO₂ + H₂O; oxidante HNO₃, reductor Cl₂; c) iónica: Cl₂ + 10 NO₃⁻ + 8 H⁺ → 2 ClO₃⁻ + 10 NO₂ + 4 H₂O; molecular: Cl₂ + 10 HNO₃ → 2 HClO₃ + 10 NO₂ + 4 H₂O; d) m(HClO₃) ≈ 28,6 g.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Nombres de los compuestos:</strong><br>
                            HNO₃: ácido nítrico; Cl₂: cloro molecular; HClO₃: ácido clórico; NO₂: dióxido de nitrógeno; H₂O: agua.
                        </div>
                        <div class='paso'>
                            <strong>b) Semirreacciones, oxidante y reductor:</strong><br>
                            Oxidación (Cl₂): \\[\\ce{Cl2 + 6 H2O -> 2 ClO3- + 12 H+ + 10 e-}\\]<br>
                            Reducción (HNO₃): \\[\\ce{NO3- + 2 H+ + e- -> NO2 + H2O}\\]<br>
                            <strong>Oxidante:</strong> HNO₃ (se reduce). <strong>Reductor:</strong> Cl₂ (se oxida).
                        </div>
                        <div class='paso'>
                            <strong>c) Reacciones iónica y molecular globales:</strong><br>
                            Multiplicando la reducción por 10 y sumando:<br>
                            Iónica: \\[\\ce{Cl2 + 10 NO3- + 8 H+ -> 2 ClO3- + 10 NO2 + 4 H2O}\\]<br>
                            Molecular: \\[\\ce{Cl2 + 10 HNO3 -> 2 HClO3 + 10 NO2 + 4 H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>d) Gramos de HClO₃:</strong><br>
                            Masa de Cl₂ puro: \\(15 \\text{ g} \\cdot 0,80 = 12 \\text{ g}\\)<br>
                            Moles de Cl₂: \\(n = \\frac{12}{71} = 0,169 \\text{ mol}\\)<br>
                            Por estequiometría, se forman el doble de moles de HClO₃: \\(0,338 \\text{ mol}\\)<br>
                            Masa: \\(m = 0,338 \\cdot (1 + 35,5 + 48) = 0,338 \\cdot 84,5 = \\boxed{28,56 \\text{ g}}\\) (aprox. 28,6 g).
                        </div>
                    `
                },
                {
                    titulo: "Julio 2020 - NaCl con KMnO₄",
                    enunciado: "Se hace reaccionar una disolución de cloruro de sodio con permanganato de potasio en medio ácido sulfúrico obteniéndose sulfato de manganeso (II), cloro, sulfato de potasio, sulfato de sodio y agua.<br>a) Ajuste por el método del ion-electrón las semirreacciones de oxidación y reducción que tienen lugar, e indique las especies que actúan como oxidante y como reductora.<br>b) Ajuste las reacciones iónica y molecular global.<br>c) Calcule la masa, en kg, de cloruro de sodio necesaria para obtener 1 m³ de cloro, medido a 750 mm de Hg y 30 °C, sabiendo que el rendimiento de la reacción es del 80 %.<br>Datos: Masas atómicas: Na = 23,0; Cl = 35,5. R = 0,082 atm·L·mol⁻¹·K⁻¹. <br> <strong>Solución: a) oxidación: 2 Cl⁻ → Cl₂ + 2 e⁻; reducción: MnO₄⁻ + 8 H⁺ + 5 e⁻ → Mn²⁺ + 4 H₂O; oxidante KMnO₄, reductor NaCl; b) iónica: 10 Cl⁻ + 2 MnO₄⁻ + 16 H⁺ → 5 Cl₂ + 2 Mn²⁺ + 8 H₂O; molecular: 10 NaCl + 2 KMnO₄ + 8 H₂SO₄ → 5 Cl₂ + 2 MnSO₄ + K₂SO₄ + 5 Na₂SO₄ + 8 H₂O; c) m(NaCl) ≈ 5,8 kg.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Semirreacciones, oxidante y reductor:</strong><br>
                            Oxidación (NaCl): \\[\\ce{2 Cl- -> Cl2 + 2 e-}\\]<br>
                            Reducción (KMnO₄): \\[\\ce{MnO4- + 8 H+ + 5 e- -> Mn^{2+} + 4 H2O}\\]<br>
                            <strong>Oxidante:</strong> KMnO₄ (se reduce). <strong>Reductor:</strong> NaCl (se oxida).
                        </div>
                        <div class='paso'>
                            <strong>b) Reacciones iónica y molecular globales:</strong><br>
                            Multiplicando la oxidación por 5 y la reducción por 2:<br>
                            Iónica: \\[\\ce{10 Cl- + 2 MnO4- + 16 H+ -> 5 Cl2 + 2 Mn^{2+} + 8 H2O}\\]<br>
                            Molecular: \\[\\ce{10 NaCl + 2 KMnO4 + 8 H2SO4 -> 5 Cl2 + 2 MnSO4 + K2SO4 + 5 Na2SO4 + 8 H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Masa de NaCl necesaria:</strong><br>
                            Presión: \\(P = \\frac{750}{760} = 0,987 \\text{ atm}\\); Temperatura: \\(T = 303 \\text{ K}\\)<br>
                            Moles de Cl₂ a obtener: \\(n = \\frac{PV}{RT} = \\frac{0,987 \\cdot 1000}{0,082 \\cdot 303} = 39,72 \\text{ mol}\\)<br>
                            Moles teóricos (rendimiento 80%): \\(n_{teóricos} = \\frac{39,72}{0,80} = 49,65 \\text{ mol}\\)<br>
                            Por estequiometría (10 mol NaCl : 5 mol Cl₂ = 2:1): \\(n_{NaCl} = 2 \\cdot 49,65 = 99,3 \\text{ mol}\\)<br>
                            Masa: \\(m = 99,3 \\cdot 58,5 = 5809 \\text{ g} = \\boxed{5,8 \\text{ kg}}\\)
                        </div>
                    `
                },
                {
                    titulo: "Septiembre 2020 - Dicromato de potasio y sulfato de hierro(II)",
                    enunciado: "En medio ácido sulfúrico, reaccionan una disolución de dicromato de potasio con una disolución de sulfato de hierro (II), y se obtiene sulfato de cromo (III), sulfato de hierro (III), sulfato de potasio y agua.<br>a) Ajuste la reacción iónica global por el método del ion-electrón e indique cuál es la especie oxidante y cuál la reductora.<br>b) Ajuste la reacción molecular por el método del ion-electrón.<br>c) Calcule el rendimiento con el que transcurre esta reacción si a partir de 4,0 g de dicromato de potasio se obtienen 12,0 g de sulfato de hierro (III).<br>Datos: Masas atómicas: O = 16,0; S = 32,1; K = 39,1; Cr = 52,0; Fe = 55,8. <br> <strong>Solución: a) iónica: Cr₂O₇²⁻ + 6 Fe²⁺ + 14 H⁺ → 2 Cr³⁺ + 6 Fe³⁺ + 7 H₂O; oxidante K₂Cr₂O₇, reductor FeSO₄; b) molecular: K₂Cr₂O₇ + 6 FeSO₄ + 7 H₂SO₄ → Cr₂(SO₄)₃ + 3 Fe₂(SO₄)₃ + K₂SO₄ + 7 H₂O; c) rendimiento ≈ 73,5 %.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Reacción iónica global, oxidante y reductor:</strong><br>
                            Oxidación: \\[\\ce{Fe^{2+} -> Fe^{3+} + e-}\\]<br>
                            Reducción: \\[\\ce{Cr2O7^{2-} + 14 H+ + 6 e- -> 2 Cr^{3+} + 7 H2O}\\]<br>
                            Iónica global: \\[\\ce{Cr2O7^{2-} + 6 Fe^{2+} + 14 H+ -> 2 Cr^{3+} + 6 Fe^{3+} + 7 H2O}\\]<br>
                            <strong>Oxidante:</strong> K₂Cr₂O₇ (se reduce). <strong>Reductor:</strong> FeSO₄ (se oxida).
                        </div>
                        <div class='paso'>
                            <strong>b) Reacción molecular global:</strong><br>
                            \\[\\ce{K2Cr2O7 + 6 FeSO4 + 7 H2SO4 -> Cr2(SO4)3 + 3 Fe2(SO4)3 + K2SO4 + 7 H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Rendimiento:</strong><br>
                            Moles de K₂Cr₂O₇: \\(n = \\frac{4,0}{294,2} = 0,0136 \\text{ mol}\\)<br>
                            Moles teóricos de Fe₂(SO₄)₃ (relación 1:3): \\(0,0136 \\cdot 3 = 0,0408 \\text{ mol}\\)<br>
                            Masa teórica: \\(0,0408 \\cdot 400 = 16,32 \\text{ g}\\)<br>
                            Rendimiento: \\(\\frac{12,0}{16,32} \\cdot 100 = \\boxed{73,5\\%}\\) (aprox. 73%).
                        </div>
                    `
                },
                {
                    titulo: "Junio 2021 - Oxidación de HCl con HNO₃",
                    enunciado: "Se puede obtener cloro gaseoso en la oxidación del ácido clorhídrico con ácido nítrico, produciéndose también dióxido de nitrógeno y agua.<br>a) Indique cuál es la especie oxidante y cuál la reductora. Ajuste la reacción iónica global y la reacción molecular por el método del ion-electrón.<br>b) Sabiendo que el rendimiento de la reacción es del 82 %, calcule el volumen de cloro que se obtiene a 25 °C y 1,0 atm, cuando reaccionan 600 mL de una disolución 2,00 M de HCl con ácido nítrico en exceso.<br>Dato: R = 0,082 atm·L·mol⁻¹·K⁻¹. <br> <strong>Solución: a) oxidante HNO₃, reductor HCl; iónica: 2 Cl⁻ + 2 NO₃⁻ + 4 H⁺ → Cl₂ + 2 NO₂ + 2 H₂O; molecular: 2 HCl + 2 HNO₃ → Cl₂ + 2 NO₂ + 2 H₂O; b) V(Cl₂) ≈ 12,0 L.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Semirreacciones, oxidante, reductor y reacciones globales:</strong><br>
                            Oxidación (HCl): \\[\\ce{2 Cl- -> Cl2 + 2 e-}\\]<br>
                            Reducción (HNO₃): \\[\\ce{NO3- + 2 H+ + e- -> NO2 + H2O}\\]<br>
                            <strong>Oxidante:</strong> HNO₃. <strong>Reductor:</strong> HCl.<br>
                            Iónica: \\[\\ce{2 Cl- + 2 NO3- + 4 H+ -> Cl2 + 2 NO2 + 2 H2O}\\]<br>
                            Molecular: \\[\\ce{2 HCl + 2 HNO3 -> Cl2 + 2 NO2 + 2 H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Volumen de cloro:</strong><br>
                            Moles de HCl: \\(n = 0,600 \\cdot 2,00 = 1,20 \\text{ mol}\\)<br>
                            Moles teóricos de Cl₂ (relación 2:1): \\(0,60 \\text{ mol}\\)<br>
                            Moles reales (rendimiento 82%): \\(0,60 \\cdot 0,82 = 0,492 \\text{ mol}\\)<br>
                            Volumen: \\(V = \\frac{nRT}{P} = \\frac{0,492 \\cdot 0,082 \\cdot 298}{1,0} = \\boxed{12,0 \\text{ L}}\\)
                        </div>
                    `
                },
                {
                    titulo: "Julio 2021 - Dicromato de potasio y yoduro de potasio",
                    enunciado: "Se hacen reaccionar dicromato de potasio y yoduro de potasio en presencia de ácido sulfúrico, dando lugar a sulfato de cromo (III), yodo y sulfato de potasio.<br>a) Formule las semirreacciones de oxidación y reducción e indique las especies oxidante y reductora.<br>b) Ajuste la reacción iónica y molecular global por el método del ion-electrón.<br>c) Determine el volumen de una disolución 0,25 M de dicromato de potasio que se necesita para obtener 5,0 g de yodo.<br>Dato: Masa atómica: I = 127. <br> <strong>Solución: a) oxidación: 2 I⁻ → I₂ + 2 e⁻; reducción: Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O; oxidante K₂Cr₂O₇, reductor KI; b) iónica: Cr₂O₇²⁻ + 6 I⁻ + 14 H⁺ → 2 Cr³⁺ + 3 I₂ + 7 H₂O; molecular: K₂Cr₂O₇ + 6 KI + 7 H₂SO₄ → Cr₂(SO₄)₃ + 3 I₂ + 4 K₂SO₄ + 7 H₂O; c) V ≈ 0,0263 L.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Semirreacciones, oxidante y reductor:</strong><br>
                            Oxidación: \\[\\ce{2 I- -> I2 + 2 e-}\\]<br>
                            Reducción: \\[\\ce{Cr2O7^{2-} + 14 H+ + 6 e- -> 2 Cr^{3+} + 7 H2O}\\]<br>
                            <strong>Oxidante:</strong> K₂Cr₂O₇. <strong>Reductor:</strong> KI.
                        </div>
                        <div class='paso'>
                            <strong>b) Reacciones iónica y molecular globales:</strong><br>
                            Multiplicando la oxidación por 3:<br>
                            Iónica: \\[\\ce{Cr2O7^{2-} + 6 I- + 14 H+ -> 2 Cr^{3+} + 3 I2 + 7 H2O}\\]<br>
                            Molecular: \\[\\ce{K2Cr2O7 + 6 KI + 7 H2SO4 -> Cr2(SO4)3 + 3 I2 + 4 K2SO4 + 7 H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Volumen de K₂Cr₂O₇:</strong><br>
                            Moles de I₂: \\(n = \\frac{5,0}{254} = 0,0197 \\text{ mol}\\)<br>
                            Moles de K₂Cr₂O₇ (relación 1:3): \\(\\frac{0,0197}{3} = 0,00657 \\text{ mol}\\)<br>
                            Volumen: \\(V = \\frac{0,00657}{0,25} = \\boxed{0,0263 \\text{ L}}\\) (aprox. 0,027 L).
                        </div>
                    `
                },
                {
                    titulo: "Junio 2022 - Clorato de potasio y aluminio",
                    enunciado: "El clorato de potasio, en medio ácido, reacciona con aluminio formándose tricloruro de aluminio, cloro molecular, cloruro de potasio y agua.<br>a) Formule y ajuste las semirreacciones de oxidación y reducción que tienen lugar.<br>b) Ajuste las reacciones iónica y molecular por el método del ion-electrón.<br>c) Calcule el volumen de una disolución de clorato de potasio de concentración 1,67 g·L⁻¹ que se necesita para oxidar 0,54 g de aluminio.<br>Datos: Masas atómicas (u): O = 16,0; Al = 27,0; Cl = 35,5; K = 39,1. <br> <strong>Solución: a) oxidación: Al → Al³⁺ + 3 e⁻; reducción: ClO₃⁻ + 6 H⁺ + 6 e⁻ → Cl⁻ + 3 H₂O; b) iónica: 10 Al + 6 ClO₃⁻ + 36 H⁺ → 10 Al³⁺ + 3 Cl₂ + 18 H₂O; molecular: 10 Al + 6 KClO₃ + 18 H₂SO₄ → 5 Al₂(SO₄)₃ + 3 Cl₂ + 3 K₂SO₄ + 18 H₂O; c) V ≈ 0,88 L.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Semirreacciones:</strong><br>
                            Oxidación (Al): \\[\\ce{Al -> Al^{3+} + 3 e-}\\]<br>
                            Reducción (KClO₃): \\[\\ce{ClO3- + 6 H+ + 6 e- -> Cl- + 3 H2O}\\]<br>
                            (Nota: el problema también indica la formación de Cl₂, lo que implica una reducción parcial, pero el ajuste típico conduce a la formación de Cl⁻ y Cl₂. El proceso global suele ajustarse considerando la reducción a Cl⁻ y la oxidación del Cl⁻ a Cl₂).
                        </div>
                        <div class='paso'>
                            <strong>b) Reacciones iónica y molecular globales:</strong><br>
                            Iónica (simplificada a formación de Cl₂): \\[\\ce{2 ClO3- + 12 H+ + 10 e- -> Cl2 + 6 H2O}\\]<br>
                            Multiplicando la oxidación del Al por 10 y la reducción por 3:<br>
                            Iónica global: \\[\\ce{10 Al + 6 ClO3- + 36 H+ -> 10 Al^{3+} + 3 Cl2 + 18 H2O}\\]<br>
                            Molecular: \\[\\ce{10 Al + 6 KClO3 + 18 H2SO4 -> 5 Al2(SO4)3 + 3 Cl2 + 3 K2SO4 + 18 H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Volumen de disolución de KClO₃:</strong><br>
                            Moles de Al: \\(n = \\frac{0,54}{27} = 0,02 \\text{ mol}\\)<br>
                            Moles de KClO₃ necesarios (relación 10:6): \\(0,02 \\cdot \\frac{6}{10} = 0,012 \\text{ mol}\\)<br>
                            Masa de KClO₃: \\(0,012 \\cdot 122,6 = 1,471 \\text{ g}\\)<br>
                            Volumen: \\(V = \\frac{1,471 \\text{ g}}{1,67 \\text{ g/L}} = \\boxed{0,88 \\text{ L}}\\)
                        </div>
                    `
                },
                {
                    titulo: "Julio 2022 - KMnO₄ con HCl comercial",
                    enunciado: "El permanganato de potasio reacciona con el ácido clorhídrico produciendo cloruro de potasio, cloruro de manganeso (II), agua y cloro molecular.<br>a) Ajuste las reacciones iónica y molecular utilizando el método del ion-electrón. Indique las especies oxidante y reductora.<br>b) Determine el volumen de ácido clorhídrico comercial del 36 % de riqueza en peso y densidad 1,18 g·mL⁻¹ que se necesitará para que reaccionen completamente 5,00 g de permanganato de potasio.<br>Datos: Masas atómicas (u): H = 1,0; O = 16,0; Cl = 35,5; K = 39,1; Mn = 55,0. <br> <strong>Solución: a) oxidante KMnO₄, reductor HCl; iónica: 2 MnO₄⁻ + 16 H⁺ + 10 Cl⁻ → 2 Mn²⁺ + 5 Cl₂ + 8 H₂O; molecular: 2 KMnO₄ + 16 HCl → 2 KCl + 2 MnCl₂ + 5 Cl₂ + 8 H₂O; b) V ≈ 21,73 mL.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Semirreacciones, oxidante, reductor y reacciones globales:</strong><br>
                            Reducción: \\[\\ce{MnO4- + 8 H+ + 5 e- -> Mn^{2+} + 4 H2O}\\]<br>
                            Oxidación: \\[\\ce{2 Cl- -> Cl2 + 2 e-}\\]<br>
                            <strong>Oxidante:</strong> KMnO₄. <strong>Reductor:</strong> HCl.<br>
                            Iónica: \\[\\ce{2 MnO4- + 16 H+ + 10 Cl- -> 2 Mn^{2+} + 5 Cl2 + 8 H2O}\\]<br>
                            Molecular: \\[\\ce{2 KMnO4 + 16 HCl -> 2 KCl + 2 MnCl2 + 5 Cl2 + 8 H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Volumen de HCl comercial:</strong><br>
                            Moles de KMnO₄: \\(n = \\frac{5,00}{158} = 0,0316 \\text{ mol}\\)<br>
                            Moles de HCl necesarios (relación 2:16): \\(0,0316 \\cdot 8 = 0,253 \\text{ mol}\\)<br>
                            Masa de HCl puro: \\(0,253 \\cdot 36,5 = 9,23 \\text{ g}\\)<br>
                            Masa de disolución comercial: \\(\\frac{9,23}{0,36} = 25,64 \\text{ g}\\)<br>
                            Volumen: \\(V = \\frac{25,64}{1,18} = \\boxed{21,73 \\text{ mL}}\\)
                        </div>
                    `
                },
                {
                    titulo: "Junio 2023 - Sulfuro de calcio con ácido nítrico",
                    enunciado: "Una muestra que contiene sulfuro de calcio se trata con ácido nítrico concentrado hasta reacción completa, según: CaS + HNO₃ → NO + SO₂ + Ca(NO₃)₂ + H₂O<br>a) Escriba y ajuste por el método del ion electrón las reacciones de oxidación, reducción, iónica y molecular.<br>b) Sabiendo que al tratar 35 g de la muestra con exceso de ácido se obtienen 20,3 L de NO, medidos a 30 °C y 780 mm Hg, calcule la riqueza en CaS de la muestra.<br>Datos: Masas atómicas (u): S = 32; Ca = 40; R = 0,082 atm·L·mol⁻¹·K⁻¹. <br> <strong>Solución: a) oxidación: S²⁻ + 2 H₂O → SO₂ + 4 H⁺ + 6 e⁻; reducción: NO₃⁻ + 4 H⁺ + 3 e⁻ → NO + 2 H₂O; iónica: 3 S²⁻ + 2 NO₃⁻ + 8 H⁺ → 3 SO₂ + 2 NO + 4 H₂O; molecular: 3 CaS + 8 HNO₃ → 3 SO₂ + 8 NO + 3 Ca(NO₃)₂ + 4 H₂O; b) riqueza ≈ 64,6 %.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Semirreacciones y reacciones globales:</strong><br>
                            Oxidación (S²⁻): \\[\\ce{S^{2-} + 2 H2O -> SO2 + 4 H+ + 6 e-}\\]<br>
                            Reducción (NO₃⁻): \\[\\ce{NO3- + 4 H+ + 3 e- -> NO + 2 H2O}\\]<br>
                            Iónica: \\[\\ce{3 S^{2-} + 2 NO3- + 8 H+ -> 3 SO2 + 2 NO + 4 H2O}\\]<br>
                            Molecular: \\[\\ce{3 CaS + 8 HNO3 -> 3 SO2 + 8 NO + 3 Ca(NO3)2 + 4 H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Riqueza en CaS:</strong><br>
                            Presión: \\(P = \\frac{780}{760} = 1,026 \\text{ atm}\\); Temperatura: \\(T = 303 \\text{ K}\\)<br>
                            Moles de NO: \\(n = \\frac{PV}{RT} = \\frac{1,026 \\cdot 20,3}{0,082 \\cdot 303} = 0,838 \\text{ mol}\\)<br>
                            Moles de CaS (relación 8 NO : 3 CaS): \\(0,838 \\cdot \\frac{3}{8} = 0,314 \\text{ mol}\\)<br>
                            Masa de CaS puro: \\(m = 0,314 \\cdot 72 = 22,6 \\text{ g}\\)<br>
                            Riqueza: \\(\\frac{22,6}{35} \\cdot 100 = \\boxed{64,6\\%}\\) (Nota: La solución dada es 86%, lo que sugiere un ajuste alternativo donde la relación estequiométrica es 2 NO : 2 CaS, resultando en 0,838 mol de CaS y 60,3 g, es decir, 172% de riqueza, lo cual es inconsistente. Revisando la estequiometría de la reacción ajustada: 3 CaS + 8 HNO3 → 3 Ca(NO3)2 + 3 SO2 + 8 NO + 4 H2O, la relación es 3:8, por lo que 0,838 mol NO * (3/8) = 0,314 mol CaS. Masa = 0,314 * 72 = 22,6 g. Riqueza = 22,6/35 * 100 = 64,6%. La solución oficial de 86% sugiere un error en el enunciado o en la solución proporcionada).
                        </div>
                    `
                },
                {
                    titulo: "Julio 2023 - SO₂ con sulfato de cobre(II)",
                    enunciado: "La reacción entre dióxido de azufre y sulfato de cobre(II), en presencia de cloruro de sodio, permite preparar cloruro de cobre(I), produciéndose también sulfato de sodio y ácido sulfúrico.<br>a) Formule y ajuste por el método del ion electrón las semirreacciones de oxidación y reducción que tienen lugar. Indique las especies que actúan como oxidante y reductora.<br>b) Ajuste las reacciones iónica y molecular.<br>c) Calcule el volumen de SO₂ que reacciona con 7,0 g de sulfato de cobre(II), a 1,0 atm y 25 °C.<br>Datos: Masas atómicas (u): O = 16; S = 32; Cu = 63,5; R = 0,082 atm·L·mol⁻¹·K⁻¹. <br> <strong>Solución: a) reducción: Cu²⁺ + e⁻ → Cu⁺; oxidación: SO₂ + 2 H₂O → SO₄²⁻ + 4 H⁺ + 2 e⁻; oxidante CuSO₄, reductor SO₂; b) iónica: 2 Cu²⁺ + SO₂ + 2 H₂O → 2 Cu⁺ + SO₄²⁻ + 4 H⁺; molecular: 2 CuSO₄ + SO₂ + 2 H₂O + 2 NaCl → 2 CuCl + Na₂SO₄ + 2 H₂SO₄; c) V ≈ 0,54 L.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Semirreacciones, oxidante y reductor:</strong><br>
                            Reducción (Cu²⁺): \\[\\ce{Cu^{2+} + e- -> Cu+}\\]<br>
                            Oxidación (SO₂): \\[\\ce{SO2 + 2 H2O -> SO4^{2-} + 4 H+ + 2 e-}\\]<br>
                            <strong>Oxidante:</strong> CuSO₄ (Cu²⁺). <strong>Reductor:</strong> SO₂.
                        </div>
                        <div class='paso'>
                            <strong>b) Reacciones iónica y molecular globales:</strong><br>
                            Multiplicando la reducción por 2:<br>
                            Iónica: \\[\\ce{2 Cu^{2+} + SO2 + 2 H2O -> 2 Cu+ + SO4^{2-} + 4 H+}\\]<br>
                            Molecular: \\[\\ce{2 CuSO4 + SO2 + 2 H2O + 2 NaCl -> 2 CuCl + Na2SO4 + 2 H2SO4}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Volumen de SO₂:</strong><br>
                            Moles de CuSO₄: \\(n = \\frac{7,0}{159,5} = 0,0439 \\text{ mol}\\)<br>
                            Moles de SO₂ (relación 2:1): \\(0,0439 / 2 = 0,02195 \\text{ mol}\\)<br>
                            Volumen: \\(V = \\frac{nRT}{P} = \\frac{0,02195 \\cdot 0,082 \\cdot 298}{1,0} = \\boxed{0,536 \\text{ L}}\\) (aprox. 0,54 L).
                        </div>
                    `
                },
                {
                    titulo: "Junio 2024 - Dicromato de potasio y cloruro de hierro(II)",
                    enunciado: "El dicromato de potasio reacciona con el cloruro de hierro(II) en disolución de ácido clorhídrico, obteniéndose como productos: cloruro de cromo(III), cloruro de hierro(III), cloruro de potasio y agua.<br>a) Formule y ajuste por el método del ion electrón las semirreacciones de oxidación y reducción. Indique las especies oxidante y reductora. Ajuste la reacción iónica y la molecular.<br>b) Determine qué masa de dicromato de potasio se necesitará para que reaccione completamente con 50 mL de disolución de cloruro de hierro(II) 0,60 M.<br>Datos: Masas atómicas (u): O = 16,0; K = 39,1; Cr = 52,0. <br> <strong>Solución: a) oxidación: Fe²⁺ → Fe³⁺ + e⁻; reducción: Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O; oxidante K₂Cr₂O₇, reductor FeCl₂; iónica: Cr₂O₇²⁻ + 6 Fe²⁺ + 14 H⁺ → 2 Cr³⁺ + 6 Fe³⁺ + 7 H₂O; molecular: K₂Cr₂O₇ + 6 FeCl₂ + 14 HCl → 2 CrCl₃ + 6 FeCl₃ + 2 KCl + 7 H₂O; b) m ≈ 1,471 g.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Semirreacciones, oxidante, reductor y reacciones globales:</strong><br>
                            Oxidación: \\[\\ce{Fe^{2+} -> Fe^{3+} + e-}\\]<br>
                            Reducción: \\[\\ce{Cr2O7^{2-} + 14 H+ + 6 e- -> 2 Cr^{3+} + 7 H2O}\\]<br>
                            <strong>Oxidante:</strong> K₂Cr₂O₇. <strong>Reductor:</strong> FeCl₂.<br>
                            Iónica: \\[\\ce{Cr2O7^{2-} + 6 Fe^{2+} + 14 H+ -> 2 Cr^{3+} + 6 Fe^{3+} + 7 H2O}\\]<br>
                            Molecular: \\[\\ce{K2Cr2O7 + 6 FeCl2 + 14 HCl -> 2 CrCl3 + 6 FeCl3 + 2 KCl + 7 H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Masa de K₂Cr₂O₇:</strong><br>
                            Moles de FeCl₂: \\(n = 0,050 \\cdot 0,60 = 0,030 \\text{ mol}\\)<br>
                            Moles de K₂Cr₂O₇ (relación 6:1): \\(0,030 / 6 = 0,005 \\text{ mol}\\)<br>
                            Masa: \\(m = 0,005 \\cdot 294,2 = \\boxed{1,471 \\text{ g}}\\)
                        </div>
                    `
                },
                {
                    titulo: "Julio 2024 - Oxidación de sulfato de hierro(II) con dicromato de potasio",
                    enunciado: "La reacción de oxidación del sulfato de hierro(II) con el dicromato de potasio, en medio ácido sulfúrico, produce sulfato de hierro(III), sulfato de cromo(III), sulfato de potasio y agua.<br>a) Utilizando el método del ion electrón escriba ajustadas las semirreacciones de oxidación y reducción y las reacciones iónica y molecular.<br>b) Calcule los mL de disolución 0,050 M de K₂Cr₂O₇ que son necesarios para oxidar 50 mL de una disolución 0,30 M de sulfato de hierro(II). <br> <strong>Solución: a) oxidación: Fe²⁺ → Fe³⁺ + e⁻; reducción: Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O; iónica: Cr₂O₇²⁻ + 6 Fe²⁺ + 14 H⁺ → 2 Cr³⁺ + 6 Fe³⁺ + 7 H₂O; molecular: K₂Cr₂O₇ + 6 FeSO₄ + 7 H₂SO₄ → Cr₂(SO₄)₃ + 3 Fe₂(SO₄)₃ + K₂SO₄ + 7 H₂O; b) V = 50 mL.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Semirreacciones y reacciones globales:</strong><br>
                            Oxidación (Fe²⁺): \\[\\ce{Fe^{2+} -> Fe^{3+} + e-}\\]<br>
                            Reducción (Cr₂O₇²⁻): \\[\\ce{Cr2O7^{2-} + 14 H+ + 6 e- -> 2 Cr^{3+} + 7 H2O}\\]<br>
                            Iónica global: \\[\\ce{Cr2O7^{2-} + 6 Fe^{2+} + 14 H+ -> 2 Cr^{3+} + 6 Fe^{3+} + 7 H2O}\\]<br>
                            Molecular: \\[\\ce{K2Cr2O7 + 6 FeSO4 + 7 H2SO4 -> Cr2(SO4)3 + 3 Fe2(SO4)3 + K2SO4 + 7 H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Volumen de K₂Cr₂O₇:</strong><br>
                            Moles de FeSO₄: \\(n = 0,050 \\cdot 0,30 = 0,015\\ \\text{mol}\\)<br>
                            Moles de K₂Cr₂O₇ necesarios (relación 6:1): \\(n = \\frac{0,015}{6} = 2,5 \\cdot 10^{-3}\\ \\text{mol}\\)<br>
                            \\[V = \\frac{2,5 \\cdot 10^{-3}}{0,050} = \\boxed{0,050\\ \\text{L} = 50\\ \\text{mL}}\\]
                        </div>
                    `
                },
                {
                    titulo: "Julio 2025 - Eliminación de Cr(VI) con ácido etanodioico",
                    enunciado: "Para mitigar el daño ambiental de aguas residuales con Cr⁶⁺, se propone hacer reaccionar el dicromato de potasio con ácido etanodioico (H₂C₂O₄) dando lugar a Cr³⁺ y dióxido de carbono.<br>a) Formule y ajuste por el método del ion electrón las semirreacciones de oxidación y reducción, y la reacción iónica que tienen lugar. Indique las especies oxidante y reductora.<br>b) Justifique qué par o pares redox de la Tabla pueden producir también la eliminación de Cr⁶⁺ en medio ácido de manera espontánea. Calcule el potencial del/los sistema/s redox que proponga.<br>c) El Cr³⁺ se puede recuperar como hidróxido de cromo(III). Sabiendo que a 25 °C la solubilidad de dicho hidróxido es 0,0013 mg·L⁻¹:<br>i) Formule el equilibrio de solubilidad del hidróxido de cromo(III) en agua, indicando el estado de agregación de cada especie.<br>ii) Determine su producto de solubilidad.<br>Tabla: F₂/F⁻ (2,87 V); MnO₄⁻/Mn²⁺ (1,51 V); PbO₂/Pb²⁺ (1,46 V); Cr₂O₇²⁻/Cr³⁺ (1,33 V); Fe³⁺/Fe²⁺ (0,77 V).<br>Datos: Masas atómicas: H = 1; O = 16; Cr = 52. <br> <strong>Solución: a) reducción: Cr₂O₇²⁻ + 14 H⁺ + 6 e⁻ → 2 Cr³⁺ + 7 H₂O; oxidación: H₂C₂O₄ → 2 CO₂ + 2 H⁺ + 2 e⁻; oxidante Cr₂O₇²⁻, reductor H₂C₂O₄; iónica: Cr₂O₇²⁻ + 3 H₂C₂O₄ + 8 H⁺ → 2 Cr³⁺ + 6 CO₂ + 7 H₂O; b) F₂/F⁻ (E = 1,54 V), MnO₄⁻/Mn²⁺ (E = 0,18 V), PbO₂/Pb²⁺ (E = 0,13 V); c) i) Cr(OH)₃(s) ⇌ Cr³⁺(ac) + 3 OH⁻(ac); ii) Kps = 7,7·10⁻³¹.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Semirreacciones, oxidante, reductor y reacción iónica:</strong><br>
                            Reducción: \\[\\ce{Cr2O7^{2-} + 14 H+ + 6 e- -> 2 Cr^{3+} + 7 H2O}\\]
                            Oxidación: \\[\\ce{H2C2O4 -> 2 CO2 + 2 H+ + 2 e-}\\]
                            <strong>Oxidante:</strong> Cr₂O₇²⁻ (se reduce). <strong>Reductor:</strong> H₂C₂O₄ (se oxida).<br>
                            Multiplicando la oxidación por 3 y sumando:<br>
                            Iónica: \\[\\ce{Cr2O7^{2-} + 3 H2C2O4 + 8 H+ -> 2 Cr^{3+} + 6 CO2 + 7 H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Pares redox que eliminan Cr⁶⁺ espontáneamente:</strong><br>
                            Para que la reacción sea espontánea, el potencial de reducción del par oxidante (que reduce al Cr) debe ser mayor que el del par Cr₂O₇²⁻/Cr³⁺ (1,33 V).<br>
                            Los pares que cumplen esto son: F₂/F⁻ (2,87 V), MnO₄⁻/Mn²⁺ (1,51 V) y PbO₂/Pb²⁺ (1,46 V).<br>
                            Potencial del sistema con MnO₄⁻: \\[E^0 = 1,51 - 1,33 = \\boxed{0,18\\ \\text{V}}\\]<br>
                            Potencial del sistema con PbO₂: \\[E^0 = 1,46 - 1,33 = \\boxed{0,13\\ \\text{V}}\\]<br>
                            (Con F₂ el potencial es 2,87 - 1,33 = 1,54 V).
                        </div>
                        <div class='paso'>
                            <strong>c) Equilibrio de solubilidad y Kps:</strong><br>
                            i) \\[\\ce{Cr(OH)3 (s) <=> Cr^{3+} (ac) + 3 OH- (ac)}\\]
                            ii) Masa molar: \\(M = 52 + 3(17) = 103\\ \\text{g/mol}\\)<br>
                            \\[s = \\frac{0,0013 \\cdot 10^{-3}\\ \\text{g/L}}{103\\ \\text{g/mol}} = 1,26 \\cdot 10^{-8}\\ \\text{M}\\]
                            \\[K_{ps} = [\\ce{Cr^{3+}}][\\ce{OH-}]^3 = s \\cdot (3s)^3 = 27s^4 = 27(1,26 \\cdot 10^{-8})^4 = \\boxed{7,7 \\cdot 10^{-31}}\\]
                        </div>
                    `
                }
            ]
        },
        "pilas": {
            nombre: "2. Pilas galvánicas",
            problemas: [
                {
                    titulo: "Junio 2019 - Pila de hierro y plata",
                    enunciado: "Se forma una pila galvánica con un electrodo de hierro y otro de plata. Teniendo en cuenta los potenciales de reducción estándar que se adjuntan:<br>a) Escriba las semirreacciones que tienen lugar en el ánodo y en el cátodo de la pila galvánica e indique el sentido del movimiento de los iones metálicos de las disoluciones con respecto a los electrodos metálicos.<br>b) Calcule el potencial de la pila formada.<br>c) Dibuje un esquema de la pila indicando sus componentes.<br>d) Razone qué ocurriría si introdujéramos una cuchara de plata en una disolución de Fe²⁺.<br>Datos: E⁰(V): Ag⁺/Ag = 0,80 V; Fe²⁺/Fe = −0,44 V. <br> <strong>Solución: a) ánodo: Fe → Fe²⁺ + 2 e⁻; cátodo: Ag⁺ + e⁻ → Ag; los iones Fe²⁺ pasan a la disolución y los Ag⁺ se depositan como Ag; b) E⁰ = 1,24 V; c) esquema con puente salino y voltímetro; d) no ocurre nada, la reacción no es espontánea (E⁰ = −1,24 V).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Semirreacciones y movimiento de iones:</strong><br>
                            Ánodo (oxidación): \\[\\ce{Fe -> Fe^{2+} + 2 e-}\\]
                            Cátodo (reducción): \\[\\ce{Ag+ + e- -> Ag}\\]
                            Los iones Fe²⁺ pasan a la disolución (aumentando su concentración) y los iones Ag⁺ de la disolución se depositan como Ag sólida en el electrodo.
                        </div>
                        <div class='paso'>
                            <strong>b) Potencial de la pila:</strong><br>
                            \\[E^0_{pila} = E^0_{cátodo} - E^0_{ánodo} = 0,80 - (-0,44) = \\boxed{1,24\\ \\text{V}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Esquema de la pila:</strong><br>
                            (Esquema: Electrodo de Fe en disolución de Fe²⁺ como ánodo, electrodo de Ag en disolución de Ag⁺ como cátodo, unidos por un puente salino y un conductor externo con voltímetro).
                        </div>
                        <div class='paso'>
                            <strong>d) Cuchara de plata en disolución de Fe²⁺:</strong><br>
                            La reacción sería: \\[\\ce{2 Ag + Fe^{2+} -> 2 Ag+ + Fe}\\]
                            \\[E^0 = -0,44 - 0,80 = -1,24\\ \\text{V} < 0\\]
                            Al ser el potencial negativo, la reacción <strong>no es espontánea</strong>. La cuchara de plata no se disolverá.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2020 - Pila Zn/Fe y obtención de H₂",
                    enunciado: "Responda las siguientes cuestiones:<br>a) Se construye una pila galvánica con los electrodos Zn²⁺/Zn y Fe²⁺/Fe. Escriba las semirreacciones que tienen lugar en el ánodo y en el cátodo y calcule el potencial.<br>b) Se tratan 317,5 g de zinc, de 90 % de riqueza en masa, con una disolución de ácido nítrico diluido. Ajuste la reacción y calcule los litros de hidrógeno que se obtienen a 25 °C y 1 atm, si el rendimiento es del 80 %.<br>Datos: E⁰(V): Zn²⁺/Zn = −0,76; Fe²⁺/Fe = −0,44; R = 0,082 atm·L·mol⁻¹·K⁻¹; Masa atómica: Zn = 65,4. <br> <strong>Solución: a) ánodo: Zn → Zn²⁺ + 2 e⁻; cátodo: Fe²⁺ + 2 e⁻ → Fe; E⁰ = 0,32 V; b) Zn + 2 HNO₃ → Zn(NO₃)₂ + H₂; V(H₂) ≈ 85,5 L.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Pila Zn/Fe:</strong><br>
                            Ánodo (oxidación): \\[\\ce{Zn -> Zn^{2+} + 2 e-}\\]
                            Cátodo (reducción): \\[\\ce{Fe^{2+} + 2 e- -> Fe}\\]
                            \\[E^0_{pila} = E^0_{cátodo} - E^0_{ánodo} = -0,44 - (-0,76) = \\boxed{0,32\\ \\text{V}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Litros de H₂:</strong><br>
                            Reacción: \\[\\ce{Zn + 2 HNO3 -> Zn(NO3)2 + H2}\\] (con HNO₃ diluido)
                            Masa de Zn puro: \\(317,5 \\cdot 0,90 = 285,75\\ \\text{g}\\)<br>
                            Moles de Zn: \\(n = \\frac{285,75}{65,4} = 4,37\\ \\text{mol}\\)<br>
                            Moles de H₂ teóricos: 4,37 mol.<br>
                            Moles reales (rendimiento 80%): \\(4,37 \\cdot 0,80 = 3,496\\ \\text{mol}\\)<br>
                            \\[V = \\frac{nRT}{P} = \\frac{3,496 \\cdot 0,082 \\cdot 298}{1} = \\boxed{85,5\\ \\text{L}}\\]
                        </div>
                    `
                },
                {
                    titulo: "Septiembre 2020 - Elección de pila y corrosión del Zn",
                    enunciado: "Considere los electrodos: Sn²⁺/Sn, MnO₄⁻/Mn²⁺ (en medio ácido clorhídrico), Zn²⁺/Zn y Ce⁴⁺/Ce³⁺.<br>a) Razone qué dos electrodos forman la pila que corresponde al proceso con menor ΔG⁰.<br>b) Haga los cálculos pertinentes que le permitan razonar si un recipiente de zinc se deteriora al almacenar en él una disolución de KMnO₄ en medio ácido.<br>c) Ajuste por el método del ion-electrón la ecuación iónica y molecular del proceso redox del apartado b).<br>Datos: E⁰(V): Zn²⁺/Zn = −0,76; Sn²⁺/Sn = −0,14; MnO₄⁻/Mn²⁺ = 1,51; Ce⁴⁺/Ce³⁺ = 1,61. <br> <strong>Solución: a) cátodo Ce⁴⁺/Ce³⁺ y ánodo Zn²⁺/Zn, E⁰ = 2,37 V; b) sí se deteriora, E⁰ = 2,27 V > 0; c) iónica: 2 MnO₄⁻ + 16 H⁺ + 5 Zn → 2 Mn²⁺ + 8 H₂O + 5 Zn²⁺; molecular: 2 KMnO₄ + 16 HCl + 5 Zn → 2 MnCl₂ + 2 KCl + 8 H₂O + 5 ZnCl₂.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Pila con menor ΔG⁰:</strong><br>
                            El menor ΔG⁰ corresponde al mayor potencial de pila positivo. Se elige el cátodo con mayor E⁰ (Ce⁴⁺/Ce³⁺ = 1,61 V) y el ánodo con menor E⁰ (Zn²⁺/Zn = −0,76 V).<br>
                            \\[E^0 = 1,61 - (-0,76) = \\boxed{2,37\\ \\text{V}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Deterioro del recipiente de Zn:</strong><br>
                            El Zn puede ser oxidado por el MnO₄⁻ si el potencial de la reacción es positivo.<br>
                            \\[E^0 = 1,51 - (-0,76) = 2,27\\ \\text{V} > 0\\]
                            Sí es espontánea, por lo que el recipiente de zinc <strong>sí se deteriora</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Ajuste redox:</strong><br>
                            Reducción: \\[\\ce{MnO4- + 8 H+ + 5 e- -> Mn^{2+} + 4 H2O}\\]
                            Oxidación: \\[\\ce{Zn -> Zn^{2+} + 2 e-}\\]
                            Iónica: \\[\\ce{2 MnO4- + 16 H+ + 5 Zn -> 2 Mn^{2+} + 8 H2O + 5 Zn^{2+}}\\]
                            Molecular: \\[\\ce{2 KMnO4 + 16 HCl + 5 Zn -> 2 MnCl2 + 2 KCl + 8 H2O + 5 ZnCl2}\\]
                        </div>
                    `
                },
                {
                    titulo: "Junio 2021 - Pila de Zn y Cu",
                    enunciado: "Se construye una pila formada por un electrodo de zinc, sumergido en una disolución 1 M de Zn(NO₃)₂ y conectado por un puente salino con un electrodo de cobre, sumergido en una disolución 1 M de Cu(NO₃)₂.<br>a) Ajuste las reacciones que tienen lugar en el ánodo y en el cátodo, y la reacción iónica global.<br>b) Escriba la notación de la pila y detalle para qué sirve el puente salino.<br>c) Indique en qué sentido circula la corriente en el conductor eléctrico.<br>d) Indique en qué electrodo se deposita cobre.<br>Datos: E⁰(V): Zn²⁺/Zn = −0,76; Cu²⁺/Cu = 0,34. <br> <strong>Solución: a) ánodo: Zn → Zn²⁺ + 2 e⁻; cátodo: Cu²⁺ + 2 e⁻ → Cu; global: Zn + Cu²⁺ → Zn²⁺ + Cu; b) Zn(s)|Zn²⁺(1 M)||Cu²⁺(1 M)|Cu(s); el puente salino mantiene la electroneutralidad; c) del cátodo (Cu) al ánodo (Zn) por el conductor externo; d) en el cátodo (electrodo de Cu).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Reacciones:</strong><br>
                            Ánodo: \\[\\ce{Zn -> Zn^{2+} + 2 e-}\\]
                            Cátodo: \\[\\ce{Cu^{2+} + 2 e- -> Cu}\\]
                            Global: \\[\\ce{Zn + Cu^{2+} -> Zn^{2+} + Cu}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Notación y puente salino:</strong><br>
                            \\[\\ce{Zn (s) | Zn^{2+} (1 M) || Cu^{2+} (1 M) | Cu (s)}\\]
                            El puente salino permite el paso de iones para mantener la electroneutralidad de las disoluciones y cerrar el circuito.
                        </div>
                        <div class='paso'>
                            <strong>c) Sentido de la corriente:</strong><br>
                            Los electrones van del ánodo (Zn) al cátodo (Cu). La corriente eléctrica convencional circula en sentido contrario, es decir, <strong>del cátodo (Cu) al ánodo (Zn)</strong> por el conductor externo.
                        </div>
                        <div class='paso'>
                            <strong>d) Electrodo donde se deposita cobre:</strong><br>
                            El cobre se deposita en el <strong>cátodo</strong> (electrodo de Cu).
                        </div>
                    `
                },
                {
                    titulo: "Junio 2022 - Pila de cadmio y plata",
                    enunciado: "Responda las siguientes cuestiones:<br>a) Dibuje el esquema de una pila utilizando como electrodos una barra de cadmio y otra de plata. Identifique todos los elementos que la forman, e indique el sentido del movimiento de los electrones.<br>b) Escriba las reacciones que tienen lugar en el cátodo y en el ánodo, y calcule el potencial de la pila.<br>Datos: E⁰(V): Cd²⁺/Cd = −0,40; Ag⁺/Ag = 0,80. <br> <strong>Solución: a) esquema con ánodo de Cd, cátodo de Ag, puente salino y voltímetro; electrones del Cd al Ag; b) ánodo: Cd → Cd²⁺ + 2 e⁻; cátodo: 2 Ag⁺ + 2 e⁻ → 2 Ag; E⁰ = 1,20 V.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Esquema y movimiento de electrones:</strong><br>
                            (Esquema: Electrodo de Cd en disolución de Cd²⁺ como ánodo; electrodo de Ag en disolución de Ag⁺ como cátodo; puente salino; voltímetro).
                            Los electrones circulan del ánodo (Cd) al cátodo (Ag) por el conductor externo.
                        </div>
                        <div class='paso'>
                            <strong>b) Reacciones y potencial:</strong><br>
                            Ánodo (oxidación): \\[\\ce{Cd -> Cd^{2+} + 2 e-}\\]
                            Cátodo (reducción): \\[\\ce{2 Ag+ + 2 e- -> 2 Ag}\\]
                            \\[E^0_{pila} = 0,80 - (-0,40) = \\boxed{1,20\\ \\text{V}}\\]
                        </div>
                    `
                },
                {
                    titulo: "Julio 2024 - Pila con potencial más positivo y desplazamiento",
                    enunciado: "Considere los potenciales de reducción que se indican y conteste razonadamente:<br>a) Combinando dos electrodos de los especificados, justifique cuáles forman la pila con el potencial más positivo. Escriba las reacciones que tienen lugar en el ánodo y en el cátodo, y calcule el potencial de dicha pila.<br>b) Se dispone de dos recipientes con disoluciones de nitrato de plata y nitrato de manganeso(II) y en cada uno se introduce una barra de hierro. ¿En cuál de ellos se formará una capa del otro metal sobre la barra de hierro? Razone la respuesta.<br>Datos: E⁰(V): Mn²⁺/Mn = −1,18; Fe²⁺/Fe = −0,44; Pb²⁺/Pb = −0,125; Ag⁺/Ag = 0,80; Au³⁺/Au = 1,52. <br> <strong>Solución: a) cátodo Au³⁺/Au y ánodo Mn²⁺/Mn; ánodo: Mn → Mn²⁺ + 2 e⁻; cátodo: Au³⁺ + 3 e⁻ → Au; E⁰ = 2,70 V; b) en la disolución de nitrato de plata (Ag⁺/Ag > Fe²⁺/Fe).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Pila con potencial más positivo:</strong><br>
                            Se elige el cátodo con mayor E⁰ (Au³⁺/Au = 1,52 V) y el ánodo con menor E⁰ (Mn²⁺/Mn = −1,18 V).<br>
                            Ánodo: \\[\\ce{Mn -> Mn^{2+} + 2 e-}\\]
                            Cátodo: \\[\\ce{Au^{3+} + 3 e- -> Au}\\]
                            \\[E^0_{pila} = 1,52 - (-1,18) = \\boxed{2,70\\ \\text{V}}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Barra de hierro en disoluciones:</strong><br>
                            Para que se deposite el otro metal, el hierro debe oxidarse (ánodo) y el catión del otro metal reducirse. Esto ocurre si el potencial de reducción del catión es mayor que el del Fe²⁺/Fe.<br>
                            - Ag⁺/Ag (0,80 V) > Fe²⁺/Fe (−0,44 V): Sí se deposita plata.<br>
                            - Mn²⁺/Mn (−1,18 V) < Fe²⁺/Fe (−0,44 V): No se deposita manganeso.<br>
                            Por tanto, se formará una capa de <strong>plata</strong> en la disolución de nitrato de plata.
                        </div>
                    `
                }
            ]
        },
        "electrolisis": {
            nombre: "3. Electrólisis",
            problemas: [            
                {
                    titulo: "Julio 2021 - Electrólisis de Cu²⁺ y espontaneidad",
                    enunciado: "Responda las siguientes cuestiones a partir de la reacción de oxidación-reducción (no ajustada): Cu²⁺(ac) + H₂O → Cu(s) + O₂(g).<br>a) Razone si la reacción se produce de forma espontánea.<br>b) Escriba las semirreacciones de oxidación y reducción, indicando en qué electrodo se deposita el cobre y en cuál se desprende oxígeno.<br>c) Determine cuánto cobre se deposita si se hace pasar una corriente de 0,50 amperios a través de 1,0 L de disolución de CuSO₄ 0,2 M durante 4 horas.<br>Datos: E⁰(V): Cu²⁺/Cu = 0,34; O₂/H₂O = 1,23. F = 96485 C. Masa atómica: Cu = 63,5. <br> <strong>Solución: a) no espontánea (E⁰ = −0,89 V); b) cátodo: Cu²⁺ + 2 e⁻ → Cu (se deposita Cu); ánodo: 2 H₂O → O₂ + 4 H⁺ + 4 e⁻ (se desprende O₂); c) m(Cu) ≈ 2,37 g.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Espontaneidad:</strong><br>
                            La reducción del Cu²⁺ tiene un potencial de 0,34 V, mientras que la oxidación del agua a O₂ tiene un potencial de reducción de 1,23 V (por lo que su oxidación es −1,23 V).<br>
                            \\[E^0_{reacción} = 0,34 - 1,23 = -0,89\\ \\text{V}\\]
                            Al ser negativo, la reacción <strong>no es espontánea</strong>; requiere una fuente externa (electrólisis).
                        </div>
                        <div class='paso'>
                            <strong>b) Semirreacciones:</strong><br>
                            Cátodo (reducción): \\[\\ce{Cu^{2+} + 2 e- -> Cu}\\]. El cobre se deposita en el cátodo.
                            Ánodo (oxidación): \\[\\ce{2 H2O -> O2 + 4 H+ + 4 e-}\\]. El oxígeno se desprende en el ánodo.
                        </div>
                        <div class='paso'>
                            <strong>c) Masa de cobre depositada:</strong><br>
                            Carga total: \\(Q = I \\cdot t = 0,50 \\cdot (4 \\cdot 3600) = 7200\\ \\text{C}\\)<br>
                            Moles de electrones: \\(n_e = \\frac{7200}{96485} = 0,0746\\ \\text{mol}\\)<br>
                            Moles de Cu (2 e⁻ por Cu): \\(n_{Cu} = \\frac{0,0746}{2} = 0,0373\\ \\text{mol}\\)<br>
                            Masa: \\(m = 0,0373 \\cdot 63,5 = \\boxed{2,37\\ \\text{g}}\\) (aprox. 2,5 g según la solución, que redondea).
                        </div>
                    `
                },
                {
                    titulo: "Julio 2022 - Pila en medio básico (Mn y Au)",
                    enunciado: "Una pila en medio básico tiene la siguiente notación: Mn²⁺(ac, 1 M) | MnO₂(s) || Au³⁺(ac, 1 M) | Au(s)<br>a) Escriba ajustadas por el método ion-electrón las semirreacciones de oxidación y reducción, indicando el ánodo, el cátodo y qué especies actúan como oxidante y reductora.<br>b) Determine el potencial de la pila y prediga la espontaneidad del proceso redox.<br>Datos: E⁰(V): MnO₂/Mn²⁺ = 1,23; Au³⁺/Au = 1,50. <br> <strong>Solución: a) ánodo: Mn²⁺ + 2 H₂O → MnO₂ + 4 H⁺ + 2 e⁻; cátodo: Au³⁺ + 3 e⁻ → Au; oxidante Au³⁺, reductor Mn²⁺; b) E⁰ = 0,27 V, espontáneo.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Semirreacciones, ánodo, cátodo, oxidante y reductor:</strong><br>
                            Ánodo (oxidación): \\[\\ce{Mn^{2+} + 2 H2O -> MnO2 + 4 H+ + 2 e-}\\]
                            Cátodo (reducción): \\[\\ce{Au^{3+} + 3 e- -> Au}\\]
                            <strong>Oxidante:</strong> Au³⁺. <strong>Reductor:</strong> Mn²⁺.
                        </div>
                        <div class='paso'>
                            <strong>b) Potencial y espontaneidad:</strong><br>
                            \\[E^0_{pila} = E^0_{cátodo} - E^0_{ánodo} = 1,50 - 1,23 = \\boxed{0,27\\ \\text{V}}\\]
                            Como \\(E^0 > 0\\), el proceso es <strong>espontáneo</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2023 - Electrólisis de CuSO₄",
                    enunciado: "Para depositar totalmente el cobre en una célula electrolítica que contiene 800 mL de una disolución acuosa de sulfato de cobre(II), se hace pasar una corriente de 1,5 A durante 3 horas.<br>a) Escriba la reacción que tiene lugar en el cátodo.<br>b) Calcule la concentración inicial de la disolución de sulfato de cobre(II). Considere que la reacción global es: 2 Cu²⁺(ac) + 2 H₂O(l) → 2 Cu(s) + O₂(g) + 4 H⁺(ac). Suponga que al finalizar la electrólisis el volumen de la disolución se ha mantenido constante y que en el H₂SO₄ se disocian completamente los dos protones.<br>Datos: F = 96485 C·mol⁻¹. <br> <strong>Solución: a) Cu²⁺ + 2 e⁻ → Cu(s); b) [CuSO₄]₀ ≈ 0,105 M.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Reacción en el cátodo:</strong><br>
                            \\[\\ce{Cu^{2+} + 2 e- -> Cu (s)}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Concentración inicial de CuSO₄:</strong><br>
                            Carga total: \\(Q = I \\cdot t = 1,5 \\cdot (3 \\cdot 3600) = 16200\\ \\text{C}\\)<br>
                            Moles de electrones: \\(n_e = \\frac{16200}{96485} = 0,1679\\ \\text{mol}\\)<br>
                            Moles de Cu²⁺ (2 e⁻ por Cu): \\(n = \\frac{0,1679}{2} = 0,08395\\ \\text{mol}\\)<br>
                            \\[[\\ce{CuSO4}]_0 = \\frac{0,08395}{0,800} = \\boxed{0,105\\ \\text{M}}\\] (La solución dada es 0,210 M, lo que sugiere un error en la relación estequiométrica o en el cálculo de la carga, ya que 0,08395/0,8 = 0,105 M. Si se considera que se deposita todo el cobre, la concentración inicial sería 0,105 M. La solución de 0,210 M podría deberse a un error tipográfico o a un factor de 2 en la carga).
                        </div>
                    `
                },
                {
                    titulo: "Julio 2023 - Electrólisis de CdSO₄",
                    enunciado: "A través de una celda electrolítica que contiene una disolución acuosa de CdSO₄, se hace pasar una corriente de 2,50 A durante 90 minutos, observándose que se deposita Cd y se desprende oxígeno molecular.<br>a) Escriba las reacciones que se producen en el ánodo y en el cátodo, y la reacción iónica y molecular, ajustadas por el método del ion electrón, indicando el estado de las especies.<br>b) Calcule los gramos de Cd depositados.<br>Datos: E⁰(V): Cd²⁺/Cd = −0,40; O₂/H₂O = 1,23; F = 96485 C·mol⁻¹; Masa atómica (u): Cd = 112,4. <br> <strong>Solución: a) cátodo: Cd²⁺(ac) + 2 e⁻ → Cd(s); ánodo: 2 H₂O(l) → O₂(g) + 4 H⁺(ac) + 4 e⁻; iónica: 2 Cd²⁺(ac) + 2 H₂O(l) → 2 Cd(s) + O₂(g) + 4 H⁺(ac); molecular: 2 CdSO₄(ac) + 2 H₂O(l) → 2 Cd(s) + O₂(g) + 2 H₂SO₄(ac); b) m(Cd) ≈ 7,86 g.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Reacciones:</strong><br>
                            Cátodo (reducción): \\[\\ce{Cd^{2+} (ac) + 2 e- -> Cd (s)}\\]
                            Ánodo (oxidación): \\[\\ce{2 H2O (l) -> O2 (g) + 4 H+ (ac) + 4 e-}\\]
                            Iónica global: \\[\\ce{2 Cd^{2+} (ac) + 2 H2O (l) -> 2 Cd (s) + O2 (g) + 4 H+ (ac)}\\]
                            Molecular: \\[\\ce{2 CdSO4 (ac) + 2 H2O (l) -> 2 Cd (s) + O2 (g) + 2 H2SO4 (ac)}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Gramos de Cd depositados:</strong><br>
                            Tiempo: \\(t = 90 \\cdot 60 = 5400\\ \\text{s}\\)<br>
                            Carga: \\(Q = 2,50 \\cdot 5400 = 13500\\ \\text{C}\\)<br>
                            Moles de e⁻: \\(n_e = \\frac{13500}{96485} = 0,1399\\ \\text{mol}\\)<br>
                            Moles de Cd: \\(n = \\frac{0,1399}{2} = 0,06995\\ \\text{mol}\\)<br>
                            Masa: \\(m = 0,06995 \\cdot 112,4 = \\boxed{7,86\\ \\text{g}}\\)
                        </div>
                    `
                },
                {
                    titulo: "Julio 2024 - Electrólisis de nitrato de plata",
                    enunciado: "Se electroliza 1,0 L de disolución acuosa de nitrato de plata 0,10 M haciendo pasar, a través de ella, una corriente de 0,50 A y obteniéndose una masa de plata de 4,03 g, depositada en el cátodo.<br>a) Sabiendo que en el ánodo se desprende O₂, escriba las reacciones que tienen lugar en el cátodo y en el ánodo y la reacción molecular.<br>b) Calcule cuál ha sido el tiempo de duración de la electrólisis, expresado en horas, así como la concentración molar de iones plata que quedan en disolución, una vez finalizada la electrólisis. Suponga que el volumen de la disolución no varía durante la electrólisis.<br>c) Determine el volumen de oxígeno, en mL, obtenido en el ánodo, durante la electrólisis, medido en condiciones de presión y temperatura de 1,0 atm y 0 °C, respectivamente.<br>Datos: R = 0,082 atm·L·mol⁻¹·K⁻¹; F = 96485 C·mol⁻¹; Masa atómica (u): Ag = 108,0. <br> <strong>Solución: a) cátodo: Ag⁺ + e⁻ → Ag(s); ánodo: 2 H₂O → O₂(g) + 4 H⁺ + 4 e⁻; molecular: 4 AgNO₃ + 2 H₂O → 4 Ag + O₂ + 4 HNO₃; b) t ≈ 2,0 h, [Ag⁺] = 0,0627 M; c) V(O₂) ≈ 208,7 mL.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Reacciones:</strong><br>
                            Cátodo: \\[\\ce{Ag+ + e- -> Ag (s)}\\]
                            Ánodo: \\[\\ce{2 H2O -> O2 (g) + 4 H+ + 4 e-}\\]
                            Molecular: \\[\\ce{4 AgNO3 + 2 H2O -> 4 Ag + O2 + 4 HNO3}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Tiempo y concentración de Ag⁺:</strong><br>
                            Moles de Ag depositados: \\(n = \\frac{4,03}{108} = 0,0373\\ \\text{mol}\\)<br>
                            Carga: \\(Q = 0,0373 \\cdot 96485 = 3599\\ \\text{C}\\)<br>
                            Tiempo: \\(t = \\frac{Q}{I} = \\frac{3599}{0,50} = 7198\\ \\text{s} = \\boxed{2,0\\ \\text{h}}\\)<br>
                            Moles iniciales de Ag⁺: \\(n_0 = 1,0 \\cdot 0,10 = 0,10\\ \\text{mol}\\)<br>
                            Moles restantes: \\(n_f = 0,10 - 0,0373 = 0,0627\\ \\text{mol}\\)<br>
                            \\[[\\ce{Ag+}] = \\frac{0,0627}{1,0} = \\boxed{0,0627\\ \\text{M}}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Volumen de O₂:</strong><br>
                            Por cada 4 mol de Ag se produce 1 mol de O₂ (relación 4:1):<br>
                            \\[n_{\\ce{O2}} = \\frac{0,0373}{4} = 9,325 \\cdot 10^{-3}\\ \\text{mol}\\]
                            \\[V = \\frac{nRT}{P} = \\frac{9,325 \\cdot 10^{-3} \\cdot 0,082 \\cdot 273}{1,0} = 0,2087\\ \\text{L} = \\boxed{208,7\\ \\text{mL}}\\]
                        </div>
                    `
                }
            ]
        }
    }
};                    