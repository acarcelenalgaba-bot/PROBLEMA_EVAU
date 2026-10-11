if (typeof baseDatosTemas === 'undefined') {
    var baseDatosTemas = {};
}

baseDatosTemas["tema8"] = {
    id: "tema8",
    titulo: "Tema 8: Química Orgánica",
    deshabilitado: false,
    secciones: {
        "reacciones_organicas": {
            nombre: "Reacciones Orgánicas y Síntesis",
            problemas: [
                {
                    titulo: "Junio 2019 - Reacciones Orgánicas I",
                    enunciado: "Formule las reacciones propuestas, indicando de qué tipo son y nombrando los productos mayoritarios obtenidos:<br>a) 2-metilbut-2-eno + HBr →<br>b) Etanol + \\(\\ce{H2SO4}\\) / calor →<br>c) Butan-1-ol + HCl →<br>d) Ácido etanoico + Propan-1-ol →",
                    solucion: `
                        <div class='paso'>
                            <strong>a) 2-metilbut-2-eno + HBr:</strong><br>
                            Reacción de <strong>adición electrófila</strong> al doble enlace. Sigue la regla de Markovnikov, adiccionando el protón al carbono del doble enlace con más hidrógenos (C3) y el bromo al más sustituido (C2):<br><br>
                            \\[\\ce{CH3-C(CH3)=CH-CH3 + HBr -> CH3-C(Br)(CH3)-CH2-CH3}\\]<br>
                            Producto mayoritario: <strong>2-bromo-2-metilbutano</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) Etanol + \\(\\ce{H2SO4}\\) / calor:</strong><br>
                            Reacción de <strong>eliminación (deshidratación intramolecular)</strong> catalizada por ácido:<br><br>
                            \\[\\ce{CH3-CH2-OH ->[H2SO4, \\Delta] CH2=CH2 + H2O}\\]<br>
                            Producto mayoritario: <strong>eteno</strong> (y agua).
                        </div>
                        <div class='paso'>
                            <strong>c) Butan-1-ol + HCl:</strong><br>
                            Reacción de <strong>sustitución nucleófila</strong> del grupo hidroxilo por el halógeno:<br><br>
                            \\[\\ce{CH3-CH2-CH2-CH2-OH + HCl -> CH3-CH2-CH2-CH2-Cl + H2O}\\]<br>
                            Producto mayoritario: <strong>1-clorobutano</strong> (y agua).
                        </div>
                        <div class='paso'>
                            <strong>d) Ácido etanoico + Propan-1-ol:</strong><br>
                            Reacción de <strong>esterificación (condensación/sustitución en acilo)</strong> catalizada por ácido:<br><br>
                            \\[\\ce{CH3-COOH + CH3-CH2-CH2-OH <=> CH3-COO-CH2-CH2-CH3 + H2O}\\]<br>
                            Producto mayoritario: <strong>etanoato de propilo</strong> (y agua).
                        </div>
                    `
                },
                {
                    titulo: "Junio 2019 - Reacciones Orgánicas II",
                    enunciado: "Formule y nombre los productos mayoritarios de las siguientes reacciones. Indique el tipo de reacción en cada caso:<br>a) \\(\\ce{CH3-CHOH-CH2-CH3 + H2SO4/calor}\\)<br>b) \\(\\ce{CH3-CH2-OH + KMnO4 ->}\\)<br>c) \\(\\ce{CH3-CH=C(CH3)-CH2-CH2-CH3 + HCl ->}\\)<br>d) \\(\\ce{CH3-CH2-CO-CH3 + LiAlH4 \\text{ (reductor)} ->}\\)",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Deshidratación de butan-2-ol:</strong><br>
                            Reacción de <strong>eliminación</strong>. Según la regla de Zaítsev, se abstrae preferentemente el hidrógeno del carbono adyacente menos hidrogenado (C3):<br><br>
                            \\[\\ce{CH3-CHOH-CH2-CH3 ->[H2SO4, \\Delta] CH3-CH=CH-CH3 + H2O}\\]<br>
                            Producto mayoritario: <strong>but-2-eno</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) Oxidación de etanol:</strong><br>
                            Reacción de <strong>oxidación</strong> con un oxidante fuerte (\\(\\ce{KMnO4}\\)), transformando el alcohol primario directamente en ácido carboxílico:<br><br>
                            \\[\\ce{CH3-CH2-OH + KMnO4 -> CH3-COOH}\\]<br>
                            Producto mayoritario: <strong>ácido etanoico</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Adición de HCl a 2-metilhex-2-eno:</strong><br>
                            Reacción de <strong>adición electrófila</strong>. Aplicando la regla de Markovnikov, el \\(\\ce{H+}\\) se une a C2 (1 H) y el \\(\\ce{Cl-}\\) a C3 (0 H):<br><br>
                            \\[\\ce{CH3-CH=C(CH3)-CH2-CH2-CH3 + HCl -> CH3-CH2-C(Cl)(CH3)-CH2-CH2-CH3}\\]<br>
                            Producto mayoritario: <strong>3-cloro-3-metilhexano</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Reducción de butanona:</strong><br>
                            Reacción de <strong>reducción</strong>. El hidruro de litio y aluminio reduce la cetona a un alcohol secundario:<br><br>
                            \\[\\ce{CH3-CH2-CO-CH3 + LiAlH4 -> CH3-CH2-CHOH-CH3}\\]<br>
                            Producto mayoritario: <strong>butan-2-ol</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2019 - Reacciones Orgánicas III",
                    enunciado: "Formule la reacción química, nombre todos los productos orgánicos e indique el tipo de reacción:<br>a) Ácido benzoico + etanol (en medio ácido) →<br>b) Propeno + HCl →<br>c) 3-Metilbutan-2-ol + \\(\\ce{H2SO4}\\) (caliente) →<br>d) 1-Bromobutano + NaOH →",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Ácido benzoico + etanol:</strong><br>
                            Reacción de <strong>esterificación (condensación)</strong>:<br><br>
                            \\[\\ce{C6H5-COOH + CH3-CH2-OH <=> C6H5-COO-CH2-CH3 + H2O}\\]<br>
                            Producto orgánico: <strong>benzoato de etilo</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) Propeno + HCl:</strong><br>
                            Reacción de <strong>adición electrófila</strong> (Regla de Markovnikov):<br><br>
                            \\[\\ce{CH3-CH=CH2 + HCl -> CH3-CH(Cl)-CH3}\\]<br>
                            Producto orgánico: <strong>2-cloropropano</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Deshidratación de 3-metilbutan-2-ol:</strong><br>
                            Reacción de <strong>eliminación</strong> (Regla de Zaítsev, produciendo el alqueno más sustituido):<br><br>
                            \\[\\ce{CH3-CH(CH3)-CHOH-CH3 ->[H2SO4, \\Delta] CH3-C(CH3)=CH-CH3 + H2O}\\]<br>
                            Producto orgánico mayoritario: <strong>2-metilbut-2-eno</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) 1-Bromobutano + NaOH:</strong><br>
                            Reacción de <strong>sustitución nucleófila</strong>:<br><br>
                            \\[\\ce{CH3-CH2-CH2-CH2-Br + NaOH -> CH3-CH2-CH2-CH2-OH + NaBr}\\]<br>
                            Producto orgánico: <strong>butan-1-ol</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2020 - Reacciones Orgánicas A.3",
                    enunciado: "Formule las reacciones propuestas, indique de qué tipo son y nombre los productos orgánicos obtenidos:<br>a) But-2-eno + \\(\\ce{H2}\\)/catalizador →<br>b) Pentan-1-ol + \\(\\ce{KMnO4}\\) (oxidante fuerte) →<br>c) 2-clorobutano + hidróxido de sodio (medio acuoso) →<br>d) Ácido propanoico + metanol (medio ácido) →",
                    solucion: `
                        <div class='paso'>
                            <strong>a) But-2-eno + \\(\\ce{H2}\\)/catalizador:</strong><br>
                            Reacción de <strong>adición (hidrogenación catalítica)</strong>:<br><br>
                            \\[\\ce{CH3-CH=CH-CH3 + H2 ->[Ni/Pt] CH3-CH2-CH2-CH3}\\]<br>
                            Producto orgánico: <strong>butano</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) Pentan-1-ol + \\(\\ce{KMnO4}\\):</strong><br>
                            Reacción de <strong>oxidación</strong> fuerte de alcohol primario a ácido carboxílico:<br><br>
                            \\[\\ce{CH3-CH2-CH2-CH2-CH2-OH + KMnO4 -> CH3-CH2-CH2-CH2-COOH}\\]<br>
                            Producto orgánico: <strong>ácido pentanoico</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) 2-clorobutano + NaOH(ac):</strong><br>
                            Reacción de <strong>sustitución nucleófila</strong>:<br><br>
                            \\[\\ce{CH3-CH(Cl)-CH2-CH3 + NaOH -> CH3-CH(OH)-CH2-CH3 + NaCl}\\]<br>
                            Producto orgánico: <strong>butan-2-ol</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Ácido propanoico + metanol:</strong><br>
                            Reacción de <strong>esterificación (condensación)</strong>:<br><br>
                            \\[\\ce{CH3-CH2-COOH + CH3-OH <=> CH3-CH2-COO-CH3 + H2O}\\]<br>
                            Producto orgánico: <strong>propanoato de metilo</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2020 - Reacciones Orgánicas B.2",
                    enunciado: "Formule y nombre los reactivos y todos los productos orgánicos de las siguientes reacciones:<br>a) Deshidratación de pentan-2-ol con ácido sulfúrico y calor.<br>b) Reducción de propanona.<br>c) \\(\\ce{CH3-CHOH-CH3 + CH3-COOH ->}\\)<br>d) \\(\\ce{CH3-CH=C(CH3)-CH2-CH3 + HCl ->}\\)",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Deshidratación de pentan-2-ol:</strong><br>
                            Reacción de <strong>eliminación</strong>. Reactivo: pentan-2-ol (\\(\\ce{CH3-CHOH-CH2-CH2-CH3}\\)).<br>
                            Sigue la regla de Zaítsev obteniéndose como producto mayoritario el <strong>pent-2-eno</strong> (\\(\\ce{CH3-CH=CH-CH2-CH3}\\)) y como minoritario el <strong>pent-1-eno</strong> (\\(\\ce{CH2=CH-CH2-CH2-CH3}\\)).
                        </div>
                        <div class='paso'>
                            <strong>b) Reducción de propanona:</strong><br>
                            Reacción de <strong>reducción</strong>. Reactivo: propanona (\\(\\ce{CH3-CO-CH3}\\)).<br>
                            Producto orgánico: <strong>propan-2-ol</strong> (\\(\\ce{CH3-CHOH-CH3}\\)).
                        </div>
                        <div class='paso'>
                            <strong>c) Esterificación de propan-2-ol con ácido etanoico:</strong><br>
                            Reacción de <strong>esterificación</strong>. Reactivos: propan-2-ol y ácido etanoico (ácido acético).<br>
                            Producto orgánico: <strong>etanoato de isopropilo</strong> (o etanoato de 1-metiletilo, \\(\\ce{CH3-COO-CH(CH3)2}\\)).
                        </div>
                        <div class='paso'>
                            <strong>d) Adición de HCl a 3-metilpent-2-eno:</strong><br>
                            Reacción de <strong>adición electrófila</strong>. Reactivos: 3-metilpent-2-eno (\\(\\ce{CH3-CH=C(CH3)-CH2-CH3}\\)) y cloruro de hidrógeno (\\(\\ce{HCl}\\)).<br>
                            Por regla de Markovnikov, el producto mayoritario es el <strong>3-cloro-3-metilpentano</strong> (\\(\\ce{CH3-CH2-C(Cl)(CH3)-CH2-CH3}\\)).
                        </div>
                    `
                },
                {
                    titulo: "Junio 2021 - Reacciones Orgánicas A.5 (b, c, d)",
                    enunciado: "Formule la reacción, indique de qué tipo es, y nombre los compuestos orgánicos implicados:<br>b) propan-2-ol + \\(\\ce{H2SO4}\\)/calor →<br>c) pent-2-eno + \\(\\ce{H2O/H+} ->\\)<br>d) 3-metilpentan-1-ol + HBr →",
                    solucion: `
                        <div class='paso'>
                            <strong>b) Deshidratación de propan-2-ol:</strong><br>
                            Reacción de <strong>eliminación</strong>:<br><br>
                            \\[\\ce{CH3-CHOH-CH3 ->[H2SO4, \\Delta] CH3-CH=CH2 + H2O}\\]<br>
                            Reactivo: propan-2-ol. Producto orgánico: <strong>propeno</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Hidratación de pent-2-eno:</strong><br>
                            Reacción de <strong>adición electrófila</strong>:<br><br>
                            \\[\\ce{CH3-CH=CH-CH2-CH3 + H2O ->[H+] CH3-CHOH-CH2-CH2-CH3 + CH3-CH2-CHOH-CH2-CH3}\\]<br>
                            Reactivo: pent-2-eno. Productos orgánicos (en proporción similar por estabilidad iónica simétrica): <strong>pentan-2-ol</strong> y <strong>pentan-3-ol</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Bromación de 3-metilpentan-1-ol:</strong><br>
                            Reacción de <strong>sustitución nucleófila</strong>:<br><br>
                            \\[\\ce{CH3-CH2-CH(CH3)-CH2-CH2-OH + HBr -> CH3-CH2-CH(CH3)-CH2-CH2-Br + H2O}\\]<br>
                            Reactivo: 3-metilpentan-1-ol. Producto orgánico: <strong>1-bromo-3-metilpentano</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2022 - Reacciones Orgánicas Generales B.2",
                    enunciado: "Complete y ajuste las siguientes reacciones, formule y nombre todos los compuestos orgánicos que intervienen e indique el tipo de reacción:<br>a) Propano + oxígeno →<br>b) Ácido butanoico + propan-1-amina →<br>c) n \\(\\ce{CH2=CH2}\\) + catalizador →<br>d) \\(\\ce{CH3-CHOH-CH3 + H2SO4 \\text{ (concentrado)} ->}\\)",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Combustión del propano:</strong><br>
                            Reacción de <strong>combustión (oxidación total)</strong>:<br><br>
                            \\[\\ce{C3H8 + 5 O2 -> 3 CO2 + 4 H2O}\\]<br>
                            Reactivo orgánico: propano (\\(\\ce{CH3-CH2-CH3}\\)).
                        </div>
                        <div class='paso'>
                            <strong>b) Ácido propanoico + propan-1-amina:</strong><br>
                            Reacción de <strong>condensación (amidación)</strong>:<br><br>
                            \\[\\ce{CH3-CH2-CH2-COOH + CH3-CH2-CH2-NH2 -> CH3-CH2-CH2-CO-NH-CH2-CH2-CH3 + H2O}\\]<br>
                            Reactivos: ácido butanoico y propan-1-amina. Producto orgánico: <strong>N-propilbutanamida</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Polimerización del eteno:</strong><br>
                            Reacción de <strong>polimerización por adición</strong>:<br><br>
                            \\[\\ce{n CH2=CH2 ->[cat] -[CH2-CH2]_n-}\\]<br>
                            Reactivo: eteno (o etileno). Producto: <strong>polietileno</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Deshidratación del propan-2-ol:</strong><br>
                            Reacción de <strong>eliminación</strong>:<br><br>
                            \\[\\ce{CH3-CHOH-CH3 ->[H2SO4, \\Delta] CH3-CH=CH2 + H2O}\\]<br>
                            Reactivo: propan-2-ol. Producto orgánico: <strong>propeno</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2022 - Productos y Tipos de Reacciones B.2",
                    enunciado: "Escriba todos los productos de las siguientes reacciones orgánicas, indique el tipo de reacción y nombre los compuestos orgánicos implicados:<br>a) \\(\\ce{CH3-CH2-CH2-CH2-Cl + NaOH ->}\\)<br>b) \\(\\ce{CH3-CHO + H2 ->}\\)<br>c) \\(\\ce{CH3-COOH + CH3-CH2-OH ->}\\)<br>d) \\(\\ce{CH3-C(OH)(CH3)-CH2-CH2-CH3 + H2SO4/calor ->}\\)",
                    solucion: `
                        <div class='paso'>
                            <strong>a) 1-clorobutano + NaOH:</strong><br>
                            Reacción de <strong>sustitución nucleófila</strong>. Reactivo: 1-clorobutano. Productos: <strong>butan-1-ol</strong> (\\(\\ce{CH3-CH2-CH2-CH2-OH}\\)) y \\(\\ce{NaCl}\\).
                        </div>
                        <div class='paso'>
                            <strong>b) Hidrogenación de etanal:</strong><br>
                            Reacción de <strong>reducción (o adición)</strong>. Reactivo: etanal. Producto orgánico: <strong>etanol</strong> (\\(\\ce{CH3-CH2-OH}\\)).
                        </div>
                        <div class='paso'>
                            <strong>c) Ácido etanoico + etanol:</strong><br>
                            Reacción de <strong>esterificación (condensación)</strong>. Reactivos: ácido etanoico y etanol. Productos: <strong>etanoato de etilo</strong> (\\(\\ce{CH3-COO-CH2-CH3}\\)) y agua.
                        </div>
                        <div class='paso'>
                            <strong>d) Deshidratación de 2-metilpentan-2-ol:</strong><br>
                            Reacción de <strong>eliminación</strong>. Reactivo: 2-metilpentan-2-ol.<br>
                            Por regla de Zaítsev, los productos orgánicos son: mayoritario <strong>2-metilpent-2-eno</strong> (\\(\\ce{CH3-C(CH3)=CH-CH2-CH3}\\)), minoritario 2-metilpent-1-eno y agua.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2023 - Deducción de Esquema Reaccional A.2",
                    enunciado: "A, B, C, D y E son compuestos orgánicos que reaccionan de acuerdo a los siguientes procesos:<br>i) A + HBr → 2-bromopropano<br>ii) B + C → propanoato de etilo + agua<br>iii) D + oxidante → propanona<br>iv) E + \\(\\ce{H2SO4}\\) (concentrado) → but-2-eno<br>a) Escriba las fórmulas semidesarrolladas de los productos orgánicos de cada reacción.<br>b) Identifique, con sus fórmulas semidesarrolladas y su nombre, los compuestos A, B, C, D y E.<br>c) Indique de qué tipo es cada reacción.<br>d) Diga si en alguna de estas reacciones se puede obtener más de un producto.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Productos orgánicos:</strong><br>
                            - i) 2-bromopropano: \\(\\ce{CH3-CH(Br)-CH3}\\)<br>
                            - ii) propanoato de etilo: \\(\\ce{CH3-CH2-COO-CH2-CH3}\\)<br>
                            - iii) propanona: \\(\\ce{CH3-CO-CH3}\\)<br>
                            - iv) but-2-eno: \\(\\ce{CH3-CH=CH-CH3}\\)
                        </div>
                        <div class='paso'>
                            <strong>b) Identificación de A, B, C, D y E:</strong><br>
                            - <strong>A:</strong> propeno (\\(\\ce{CH3-CH=CH2}\\))<br>
                            - <strong>B y C:</strong> ácido propanoico (\\(\\ce{CH3-CH2-COOH}\\)) y etanol (\\(\\ce{CH3-CH2-OH}\\))<br>
                            - <strong>D:</strong> propan-2-ol (\\(\\ce{CH3-CHOH-CH3}\\))<br>
                            - <strong>E:</strong> butan-2-ol (\\(\\ce{CH3-CHOH-CH2-CH3}\\))
                        </div>
                        <div class='paso'>
                            <strong>c) Tipo de reacción:</strong><br>
                            - i) Adición electrófila.<br>
                            - ii) Condensación / Esterificación.<br>
                            - iii) Oxidación.<br>
                            - iv) Eliminación (deshidratación).
                        </div>
                        <div class='paso'>
                            <strong>d) Formación de mezclas de productos:</strong><br>
                            Sí, en la reacción iv) (deshidratación del butan-2-ol) se aplica la regla de Zaítsev, obteniéndose dos productos regioselectivos:<br>
                            - Producto mayoritario: <strong>but-2-eno</strong> (\\(\\ce{CH3-CH=CH-CH3}\\))<br>
                            - Producto minoritario: <strong>but-1-eno</strong> (\\(\\ce{CH2=CH-CH2-CH3}\\))<br>
                            <em>(Nota: En la adición i) también se forma como minoritario el 1-bromopropano).</em>
                        </div>
                    `
                },
                {
                    titulo: "Julio 2023 - Reacciones con Reglas de Markovnikov y Zaítsev B.2",
                    enunciado: "Formule los reactivos y el producto mayoritario de las siguientes reacciones. Indique el tipo de reacción, la regla que sigue si es el caso, y nombre los productos:<br>a) 3-metilpent-2-eno + HCl →<br>b) 3-metilpentan-2-ol + \\(\\ce{H2SO4}\\) (concentrado) →<br>c) Ácido pentanoico + etanol →",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Adición de HCl a 3-metilpent-2-eno:</strong><br>
                            Reacción de <strong>adición electrófila</strong>. Sigue la <strong>regla de Markovnikov</strong> (el \\(\\ce{H+}\\) se adiciona al C2 que tiene 1 H, y el \\(\\ce{Cl-}\\) al C3 que no tiene ningún H):<br><br>
                            \\[\\ce{CH3-CH=C(CH3)-CH2-CH3 + HCl -> CH3-CH2-C(Cl)(CH3)-CH2-CH3}\\]<br>
                            Producto mayoritario: <strong>3-cloro-3-metilpentano</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) Deshidratación de 3-metilpentan-2-ol:</strong><br>
                            Reacción de <strong>eliminación</strong>. Sigue la <strong>regla de Zaítsev</strong> (se elimina el H del C3 por ser el carbono adyacente menos hidrogenado, dando el alqueno más sustituido):<br><br>
                            \\[\\ce{CH3-CHOH-CH(CH3)-CH2-CH3 ->[H2SO4, \\Delta] CH3-CH=C(CH3)-CH2-CH3 + H2O}\\]<br>
                            Producto mayoritario: <strong>3-metilpent-2-eno</strong> (y agua).
                        </div>
                        <div class='paso'>
                            <strong>c) Ácido pentanoico + etanol:</strong><br>
                            Reacción de <strong>esterificación (condensación/sustitución en acilo)</strong>:<br><br>
                            \\[\\ce{CH3-CH2-CH2-CH2-COOH + CH3-CH2-OH <=> CH3-(CH2)3-COO-CH2-CH3 + H2O}\\]<br>
                            Producto orgánico: <strong>pentanoato de etilo</strong> (y agua).
                        </div>
                    `
                },
                {
                    titulo: "Julio 2024 - Secuencia de Reacciones Orgánicas A.2",
                    enunciado: "Se lleva a cabo la siguiente secuencia de reacciones:<br>2-bromopropano + KOH/EtOH → A (alqueno); A + \\(\\ce{H2O/H+} ->\\) B; B + oxidante (\\(\\ce{Cr2O7^2-}\\))/\\(\\ce{H+} ->\\) C<br>a) Formule y nombre los compuestos orgánicos mayoritarios A, B y C, indique el tipo de reacción y la regla aplicable.<br>b) ¿Son isómeros B y C? ¿A podría presentar isomería geométrica? Justifique.<br>c) Formule y nombre la reacción en medio ácido: B + ácido etanoico →",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Identificación de la secuencia reaccional:</strong><br>
                            - <strong>1ª reacción (Eliminación / deshidrohalogenación):</strong><br>
                              \\(\\ce{CH3-CH(Br)-CH3 + KOH ->[EtOH] CH3-CH=CH2 + KBr + H2O}\\)<br>
                              <strong>A:</strong> <strong>propeno</strong>.<br>
                            - <strong>2ª reacción (Adición electrófila / hidratación):</strong><br>
                              \\(\\ce{CH3-CH=CH2 + H2O ->[H+] CH3-CHOH-CH3}\\)<br>
                              Sigue la <strong>regla de Markovnikov</strong> (el \\(\\ce{H+}\\) al C1 y el \\(\\ce{-OH}\\) al C2).<br>
                              <strong>B:</strong> <strong>propan-2-ol</strong>.<br>
                            - <strong>3ª reacción (Oxidación):</strong><br>
                              \\(\\ce{CH3-CHOH-CH3 + Cr2O7^2-/H+ -> CH3-CO-CH3}\\)<br>
                              <strong>C:</strong> <strong>propanona</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) Isomería:</strong><br>
                            - <strong>B y C:</strong> No son isómeros. B (propan-2-ol) tiene fórmula \\(\\ce{C3H8O}\\) y C (propanona) \\(\\ce{C3H6O}\\) (difieren en dos hidrógenos).<br>
                            - <strong>A (propeno):</strong> No presenta isomería geométrica porque el C1 tiene dos átomos de H idénticos.
                        </div>
                        <div class='paso'>
                            <strong>c) Reacción de B + ácido etanoico:</strong><br>
                            Reacción de <strong>esterificación (condensación)</strong>:<br><br>
                            \\[\\ce{CH3-COOH + CH3-CHOH-CH3 <=> CH3-COO-CH(CH3)2 + H2O}\\]<br>
                            Reactivos: ácido etanoico y propan-2-ol. Productos: <strong>etanoato de isopropilo</strong> y agua.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2025 - Reacciones Generales 3A",
                    enunciado: "Complete las siguientes reacciones. Formule y nombre todos los compuestos orgánicos. Indique el tipo de reacción y, si procede, el producto mayoritario y la regla que sigue. Dibuje los posibles isómeros geométricos que se formen:<br>a) Metilbutano + \\(\\ce{O2}\\) →<br>b) Ácido propanoico + NaOH (ac) →<br>c) Metilpropeno + HBr →<br>d) Pentan-2-ol + \\(\\ce{H2SO4}\\)/calor →",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Combustión del metilbutano:</strong><br>
                            Reacción de <strong>combustión (oxidación total)</strong>:<br><br>
                            \\[\\ce{C5H12 + 8 O2 -> 5 CO2 + 6 H2O}\\]<br>
                            Reactivo orgánico: metilbutano (\\(\\ce{CH3-CH(CH3)-CH2-CH3}\\)).
                        </div>
                        <div class='paso'>
                            <strong>b) Ácido propanoico + NaOH(ac):</strong><br>
                            Reacción de <strong>neutralización (ácido-base)</strong>:<br><br>
                            \\[\\ce{CH3-CH2-COOH + NaOH -> CH3-CH2-COONa + H2O}\\]<br>
                            Reactivo: ácido propanoico. Producto orgánico: <strong>propanoato de sodio</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Metilpropeno + HBr:</strong><br>
                            Reacción de <strong>adición electrófila</strong>. Sigue la <strong>regla de Markovnikov</strong>:<br><br>
                            \\[\\ce{CH2=C(CH3)2 + HBr -> CH3-C(Br)(CH3)2}\\]<br>
                            Producto mayoritario: <strong>2-bromo-2-metilpropano</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Deshidratación de pentan-2-ol:</strong><br>
                            Reacción de <strong>eliminación</strong>. Sigue la <strong>regla de Zaítsev</strong>:<br><br>
                            \\[\\ce{CH3-CHOH-CH2-CH2-CH3 ->[H2SO4, \\Delta] CH3-CH=CH-CH2-CH3 + H2O}\\]<br>
                            Producto mayoritario: <strong>pent-2-eno</strong>.<br>
                            Presenta isomería geométrica con dos estereoisómeros: <strong><em>cis</em>-pent-2-eno</strong> y <strong><em>trans</em>-pent-2-eno</strong>.
                        </div>
                    `
                }
            ]
        },
        "formulacion_isomeria": {
            nombre: "Formulación, Nomenclatura e Isomería",
            problemas: [
                {
                    titulo: "Junio 2019 - Cloropropano e Isómeros de Posición",
                    enunciado: "Responda las siguientes cuestiones:<br>a) Formule el 1-cloropropano y nombre los isómeros de posición posibles.<br>b) Escriba la reacción de sustitución de cada uno de los isómeros del apartado a) con NaOH. Nombre los productos obtenidos.<br>c) Escriba las fórmulas semidesarrolladas de los compuestos orgánicos: 2-metilbutilamina, etanoato de metilo y ácido 2,3-dihidroxibutanoico.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Formulación e isomería de posición:</strong><br>
                            - 1-cloropropano: \\(\\ce{CH3-CH2-CH2-Cl}\\)<br>
                            - Isómero de posición: <strong>2-cloropropano</strong> (\\(\\ce{CH3-CH(Cl)-CH3}\\)).
                        </div>
                        <div class='paso'>
                            <strong>b) Reacciones de sustitución con NaOH(ac):</strong><br>
                            - Con 1-cloropropano:<br>
                              \\[\\ce{CH3-CH2-CH2-Cl + NaOH -> CH3-CH2-CH2-OH + NaCl}\\]<br>
                              Producto obtenido: <strong>propan-1-ol</strong>.<br><br>
                            - Con 2-cloropropano:<br>
                              \\[\\ce{CH3-CH(Cl)-CH3 + NaOH -> CH3-CH(OH)-CH3 + NaCl}\\]<br>
                              Producto obtenido: <strong>propan-2-ol</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Fórmulas semidesarrolladas:</strong><br>
                            - 2-metilbutilamina: \\(\\ce{CH3-CH2-CH(CH3)-CH2-NH2}\\)<br>
                            - etanoato de metilo: \\(\\ce{CH3-COO-CH3}\\)<br>
                            - ácido 2,3-dihidroxibutanoico: \\(\\ce{CH3-CH(OH)-CH(OH)-COOH}\\)
                        </div>
                    `
                },
                {
                    titulo: "Julio 2019 - Isomería de Diversas Familias",
                    enunciado: "Formule y nombre los siguientes compuestos orgánicos:<br>a) Dos hidrocarburos saturados, isómeros de cadena, de fórmula molecular \\(\\ce{C4H10}\\).<br>b) Dos aminas primarias, isómeras de posición, de fórmula molecular \\(\\ce{C3H9N}\\).<br>c) Dos compuestos, isómeros de función (monofuncional), de fórmula molecular \\(\\ce{C3H6O2}\\).<br>d) Un hidrocarburo aromático de fórmula molecular \\(\\ce{C7H8}\\).",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Isómeros de cadena de \\(\\ce{C4H10}\\):</strong><br>
                            - <strong>Butano:</strong> \\(\\ce{CH3-CH2-CH2-CH3}\\)<br>
                            - <strong>2-metilpropano:</strong> \\(\\ce{CH3-CH(CH3)-CH3}\\)
                        </div>
                        <div class='paso'>
                            <strong>b) Aminas primarias isómeras de posición de \\(\\ce{C3H9N}\\):</strong><br>
                            - <strong>Propan-1-amina:</strong> \\(\\ce{CH3-CH2-CH2-NH2}\\)<br>
                            - <strong>Propan-2-amina:</strong> \\(\\ce{CH3-CH(NH2)-CH3}\\)
                        </div>
                        <div class='paso'>
                            <strong>c) Isómeros de función de \\(\\ce{C3H6O2}\\):</strong><br>
                            - <strong>Ácido propanoico:</strong> \\(\\ce{CH3-CH2-COOH}\\) (ácido carboxílico)<br>
                            - <strong>Etanoato de metilo:</strong> \\(\\ce{CH3-COO-CH3}\\) (éster)
                        </div>
                        <div class='paso'>
                            <strong>d) Hidrocarburo aromático de \\(\\ce{C7H8}\\):</strong><br>
                            - <strong>Metilbenceno</strong> (tolueno): \\(\\ce{C6H5-CH3}\\)
                        </div>
                    `
                },
                {
                    titulo: "Septiembre 2020 - Compuestos Oxigenados A.5",
                    enunciado: "Considere los compuestos propan-2-ol, propanal, etil metil éter y ácido propanoico:<br>a) Formúlelos con su fórmula semidesarrollada.<br>b) Escriba la reacción de formación de un éster a partir de compuesto(s) del enunciado y nombre el producto.<br>c) Escriba la reacción de formación de un alqueno a partir de un compuesto del enunciado y \\(\\ce{H2SO4}\\) en caliente. Nombre el alqueno y el tipo de reacción.<br>d) Indique cuáles son isómeros de función.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Fórmulas semidesarrolladas:</strong><br>
                            - propan-2-ol: \\(\\ce{CH3-CHOH-CH3}\\)<br>
                            - propanal: \\(\\ce{CH3-CH2-CHO}\\)<br>
                            - etil metil éter: \\(\\ce{CH3-O-CH2-CH3}\\)<br>
                            - ácido propanoico: \\(\\ce{CH3-CH2-COOH}\\)
                        </div>
                        <div class='paso'>
                            <strong>b) Formación de un éster:</strong><br>
                            Reacción de esterificación entre el ácido propanoico y el propan-2-ol:<br><br>
                            \\[\\ce{CH3-CH2-COOH + CH3-CHOH-CH3 <=> CH3-CH2-COO-CH(CH3)2 + H2O}\\]<br>
                            Producto: <strong>propanoato de isopropilo</strong> (o propanoato de 1-metiletilo).
                        </div>
                        <div class='paso'>
                            <strong>c) Formación de un alqueno:</strong><br>
                            Deshidratación del propan-2-ol (reacción de <strong>eliminación</strong>):<br><br>
                            \\[\\ce{CH3-CHOH-CH3 ->[H2SO4, \\Delta] CH3-CH=CH2 + H2O}\\]<br>
                            Alqueno formado: <strong>propeno</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Isómeros de función:</strong><br>
                            El <strong>propan-2-ol</strong> y el <strong>etil metil éter</strong> tienen ambos fórmula molecular \\(\\ce{C3H8O}\\), constituyendo un par de isómeros de función (alcohol y éter).
                        </div>
                    `
                },
                {
                    titulo: "Septiembre 2020 - Formulación y Reacciones B.5",
                    enunciado: "a) Formule o nombre los compuestos: \\(\\ce{CH3-CHOH-C\\equiv C-CH3}\\); 1,3-pentanodiamina; ácido propanodioico.<br>b) Formule la reacción, indique tipo y nombre compuestos: \\(\\ce{CH3-CH2-CHO + \\text{oxidante} ->}\\)<br>c) Formule la reacción, indique tipo y nombre compuestos: \\(\\ce{CH3-CH2-CH2OH + CH3-COOH \\text{ (medio ácido)} ->}\\)",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Nomenclatura y formulación:</strong><br>
                            - \\(\\ce{CH3-CHOH-C\\equiv C-CH3}\\): <strong>pent-3-in-2-ol</strong>.<br>
                            - 1,3-pentanodiamina: \\(\\ce{H2N-CH2-CH2-CH(NH2)-CH2-CH3}\\).<br>
                            - ácido propanodioico: \\(\\ce{HOOC-CH2-COOH}\\).
                        </div>
                        <div class='paso'>
                            <strong>b) Oxidación de propanal:</strong><br>
                            Reacción de <strong>oxidación</strong>:<br><br>
                            \\[\\ce{CH3-CH2-CHO + \\text{oxidante} -> CH3-CH2-COOH}\\]<br>
                            Reactivo: propanal. Producto: <strong>ácido propanoico</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Esterificación de propan-1-ol y ácido etanoico:</strong><br>
                            Reacción de <strong>esterificación (condensación)</strong>:<br><br>
                            \\[\\ce{CH3-CH2-CH2-OH + CH3-COOH <=> CH3-COO-CH2-CH2-CH3 + H2O}\\]<br>
                            Reactivos: propan-1-ol y ácido etanoico. Productos: <strong>etanoato de propilo</strong> y agua.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2021 - Isómeros de Fórmula C₄H₈O₂ B.5",
                    enunciado: "La fórmula molecular \\(\\ce{C4H8O2}\\), ¿a qué sustancia o sustancias de las propuestas a continuación corresponde? Justifique la respuesta escribiendo en cada caso su fórmula semidesarrollada y molecular:<br>a) Ácido butanoico.<br>b) Butanodial.<br>c) Propanoato de metilo.<br>d) Ácido metilpropanoico.",
                    solucion: `
                        <div class='paso'>
                            <strong>Análisis de fórmulas moleculares:</strong><br>
                            - <strong>a) Ácido butanoico:</strong> \\(\\ce{CH3-CH2-CH2-COOH}\\). Fórmula molecular: \\(\\ce{C4H8O2}\\). <strong>Sí corresponde.</strong><br>
                            - <strong>b) Butanodial:</strong> \\(\\ce{OHC-CH2-CH2-CHO}\\). Fórmula molecular: \\(\\ce{C4H6O2}\\). <strong>No corresponde</strong> (presenta dos insaturaciones aldehídicas).<br>
                            - <strong>c) Propanoato de metilo:</strong> \\(\\ce{CH3-CH2-COO-CH3}\\). Fórmula molecular: \\(\\ce{C4H8O2}\\). <strong>Sí corresponde.</strong><br>
                            - <strong>d) Ácido metilpropanoico:</strong> \\(\\ce{CH3-CH(CH3)-COOH}\\). Fórmula molecular: \\(\\ce{C4H8O2}\\). <strong>Sí corresponde.</strong><br><br>
                            Por tanto, corresponde a las sustancias <strong>a), c) y d)</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2021 - Cuestiones V/F en Orgánica A.4",
                    enunciado: "Justifique si las siguientes afirmaciones son verdaderas o falsas:<br>a) El propanoato de metilo se obtiene mediante una reacción de esterificación a partir de ácido propanoico y etanol.<br>b) En la reacción de eliminación del compuesto butan-2-ol se obtiene como producto mayoritario but-1-eno.<br>c) El compuesto prop-2-en-1-ol es un isómero de función de la propanona.<br>d) El compuesto pent-2-eno en presencia de \\(\\ce{Br2}\\) da lugar a 2,3-dibromopentano.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Falso.</strong> El propanoato de metilo se obtiene a partir de ácido propanoico y <strong>metanol</strong> (\\(\\ce{CH3OH}\\)). La reacción con etanol produciría propanoato de etilo.
                        </div>
                        <div class='paso'>
                            <strong>b) Falso.</strong> Según la regla de Zaítsev, en la deshidratación del butan-2-ol se abstrae preferentemente el hidrógeno del carbono adyacente menos hidrogenado (C3), dando como producto mayoritario el <strong>but-2-eno</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Verdadero.</strong> Ambos poseen la misma fórmula molecular (\\(\\ce{C3H6O}\\)). El prop-2-en-1-ol (\\(\\ce{CH2=CH-CH2OH}\\)) es un alcohol insaturado y la propanona (\\(\\ce{CH3-CO-CH3}\\)) una cetona, por lo que son isómeros de función.
                        </div>
                        <div class='paso'>
                            <strong>d) Verdadero.</strong> Es una reacción de adición de halógeno al doble enlace:<br><br>
                            \\[\\ce{CH3-CH=CH-CH2-CH3 + Br2 -> CH3-CH(Br)-CH(Br)-CH2-CH3}\\]<br>
                            Obteniéndose 2,3-dibromopentano.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2021 - Síntesis de Tolueno y Formulación B.2",
                    enunciado: "a) Formule la reacción que permite obtener metilbenceno (tolueno) a partir de clorometano e indique de qué tipo es.<br>b) Formule: penta-2,4-dien-1,4-diol, but-3-in-2-ona y 4-fenil-2-metilpentan-1-ol.<br>c) Nombre y formule dos compuestos, isómeros de función, de fórmula molecular \\(\\ce{C3H6O}\\).",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Obtención de metilbenceno (tolueno):</strong><br>
                            Reacción de <strong>Alquilación de Friedel-Crafts (Sustitución electrofílica aromática)</strong> entre benceno y clorometano catalizada por un ácido de Lewis:<br><br>
                            \\[\\ce{C6H6 + CH3Cl ->[AlCl3] C6H5-CH3 + HCl}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) Formulación:</strong><br>
                            - penta-2,4-dien-1,4-diol: \\(\\ce{HO-CH2-CH=CH-C(OH)=CH2}\\)<br>
                            - but-3-in-2-ona: \\(\\ce{CH3-CO-C\\equiv CH}\\)<br>
                            - 4-fenil-2-metilpentan-1-ol: \\(\\ce{HO-CH2-CH(CH3)-CH2-CH(C6H5)-CH3}\\)
                        </div>
                        <div class='paso'>
                            <strong>c) Isómeros de función de \\(\\ce{C3H6O}\\):</strong><br>
                            - <strong>Propanal</strong> (aldehído): \\(\\ce{CH3-CH2-CHO}\\)<br>
                            - <strong>Propanona</strong> (cetona): \\(\\ce{CH3-CO-CH3}\\)
                        </div>
                    `
                },
                {
                    titulo: "Junio 2022 - Isomería y Síntesis de 3-bromohexano A.2",
                    enunciado: "a) Nombre los compuestos, escriba su fórmula molecular e indique los tipos de isomería entre ellos:<br>a1) \\(\\ce{CH3-CO-CH2-CH(CH3)2}\\)<br>a2) \\(\\ce{CH3-CHOH-CH(CH3)-CH2-CH3}\\)<br>a3) \\(\\ce{CH3-C(CH3)2-CH2-CHO}\\)<br>a4) \\(\\ce{CH3-(CH2)2-O-(CH2)2-CH3}\\)<br>b) Se quiere sintetizar 3-bromohexano como único producto a partir de un alqueno. Formule la reacción, tipo, regla y nombre el alqueno.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Nomenclatura e Isomería:</strong><br>
                            - <strong>a1:</strong> 4-metilpentan-2-ona (\\(\\ce{C6H12O}\\)).<br>
                            - <strong>a2:</strong> 3-metilpentan-2-ol (\\(\\ce{C6H14O}\\)).<br>
                            - <strong>a3:</strong> 3,3-dimetilbutanal (\\(\\ce{C6H12O}\\)).<br>
                            - <strong>a4:</strong> dipropil éter (\\(\\ce{C6H14O}\\)).<br>
                            <strong>Relaciones de isomería:</strong><br>
                            - <strong>a1 y a3</strong> son <strong>isómeros de función</strong> (cetona y aldehído) y de cadena.<br>
                            - <strong>a2 y a4</strong> son <strong>isómeros de función</strong> (alcohol y éter).
                        </div>
                        <div class='paso'>
                            <strong>b) Síntesis regioselectiva de 3-bromohexano:</strong><br>
                            Para obtener únicamente 3-bromohexano sin mezcla de regioselectividad se debe emplear un alqueno simétrico, el <strong>hex-3-eno</strong>.<br>
                            Reacción de <strong>adición electrófila</strong>:<br><br>
                            \\[\\ce{CH3-CH2-CH=CH-CH2-CH3 + HBr -> CH3-CH2-CH(Br)-CH2-CH2-CH3}\\]<br>
                            Al ser un alqueno simétrico, la adición por ambos carbonos del doble enlace da lugar al mismo compuesto (3-bromohexano).
                        </div>
                    `
                },
                {
                    titulo: "Junio 2023 - Pares de Compuestos e Isomería B.2",
                    enunciado: "Considere los pares de compuestos siguientes:<br>(i) etanoato de etilo y ácido butanoico;<br>(ii) pent-1-eno y ciclopentano;<br>(iii) but-1-eno y but-2-ino.<br>a) Escriba sus fórmulas semidesarrolladas.<br>b) Razone si corresponden a compuestos isómeros e indique el tipo.<br>c) Indique si los compuestos del par (ii) reaccionan con agua en medio ácido y formule el producto mayoritario.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Fórmulas semidesarrolladas:</strong><br>
                            - (i) etanoato de etilo: \\(\\ce{CH3-COO-CH2-CH3}\\); ácido butanoico: \\(\\ce{CH3-CH2-CH2-COOH}\\).<br>
                            - (ii) pent-1-eno: \\(\\ce{CH2=CH-CH2-CH2-CH3}\\); ciclopentano: \\(\\ce{C5H10}\\) (anillo pentagonal).<br>
                            - (iii) but-1-eno: \\(\\ce{CH2=CH-CH2-CH3}\\); but-2-ino: \\(\\ce{CH3-C\\equiv C-CH3}\\).
                        </div>
                        <div class='paso'>
                            <strong>b) Análisis de isomería:</strong><br>
                            - <strong>Par (i):</strong> Ambos corresponden a \\(\\ce{C4H8O2}\\). Son <strong>isómeros de función</strong> (éster y ácido carboxílico).<br>
                            - <strong>Par (ii):</strong> Ambos corresponden a \\(\\ce{C5H10}\\). Son <strong>isómeros de función</strong> (alqueno y cicloalcano).<br>
                            - <strong>Par (iii):</strong> But-1-eno (\\(\\ce{C4H8}\\)) y but-2-ino (\\(\\ce{C4H6}\\)). <strong>No son isómeros</strong> (tienen distinta fórmula molecular).
                        </div>
                        <div class='paso'>
                            <strong>c) Reacción de hidratación (par ii):</strong><br>
                            - <strong>pent-1-eno:</strong> Sí reacciona mediante adición electrófila. Por regla de Markovnikov forma <strong>pentan-2-ol</strong> (\\(\\ce{CH3-CHOH-CH2-CH2-CH3}\\)).<br>
                            - <strong>ciclopentano:</strong> No reacciona por ser un alcano cíclico saturado con alta estabilidad en sus enlaces C-C y C-H.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2023 - Isomería, Éteres y Combustión A.2",
                    enunciado: "a) Formule el 3-bromo-4-metilpentanal y un isómero de función.<br>b) Formule y nombre dos isómeros de posición del éter con fórmula \\(\\ce{C4H10O}\\).<br>c) Escriba y ajuste la reacción de combustión del etino.<br>d) Escriba la reacción de obtención del ácido 2-metilbutanoico a partir del aldehído correspondiente, indicando el tipo de reacción.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) 3-bromo-4-metilpentanal e isómero de función:</strong><br>
                            - Estructura: \\(\\ce{CH3-CH(CH3)-CH(Br)-CH2-CHO}\\) (\\(\\ce{C6H11BrO}\\)).<br>
                            - Isómero de función (cetona): <strong>4-bromo-5-metilhexan-2-ona</strong> (\\(\\ce{CH3-CO-CH2-CH(Br)-CH(CH3)-CH3}\\)).
                        </div>
                        <div class='paso'>
                            <strong>b) Isómeros de posición de éter (\\(\\ce{C4H10O}\\)):</strong><br>
                            - <strong>1-metoxipropano:</strong> \\(\\ce{CH3-O-CH2-CH2-CH3}\\)<br>
                            - <strong>2-metoxipropano:</strong> \\(\\ce{CH3-O-CH(CH3)2}\\)
                        </div>
                        <div class='paso'>
                            <strong>c) Combustión del etino:</strong><br>
                            \\[\\ce{2 C2H2 + 5 O2 -> 4 CO2 + 2 H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>d) Obtención de ácido 2-metilbutanoico:</strong><br>
                            Reacción de <strong>oxidación</strong> del aldehído <strong>2-metilbutanal</strong>:<br><br>
                            \\[\\ce{CH3-CH2-CH(CH3)-CHO + [O] -> CH3-CH2-CH(CH3)-COOH}\\]
                        </div>
                    `
                },
                {
                    titulo: "Junio 2024 - Isomería Geométrica y Reacciones A.2",
                    enunciado: "a) Indique cuál de los compuestos presenta isomería geométrica y dibuje los isómeros: i) Propeno ii) But-1-eno iii) Pent-2-eno iv) Propen-2-ol.<br>b) Complete y nombre: i) Hex-1-eno + HCl → ii) Propan-2-ol + oxidante →<br>c) Nombre e indique el grupo principal de: i) \\(\\ce{CH3-CH=CH-CHO}\\) ii) \\(\\ce{H-COO-CH(CH3)-CH2-CH3}\\)",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Isomería geométrica:</strong><br>
                            Sólo el <strong>pent-2-eno</strong> (\\(\\ce{CH3-CH=CH-CH2-CH3}\\)) presenta isomería geométrica, al tener dos sustituyentes distintos en cada carbono del doble enlace (H y metilo en C2; H y etilo en C3):<br>
                            - <strong><em>cis</em>-pent-2-eno</strong> (o (Z)-pent-2-eno)<br>
                            - <strong><em>trans</em>-pent-2-eno</strong> (o (E)-pent-2-eno)<br>
                            <em>(Los demás tienen dos hidrógenos sobre el C1 terminal, impidiendo esta isomería).</em>
                        </div>
                        <div class='paso'>
                            <strong>b) Reacciones químicas:</strong><br>
                            - i) Adición electrófila (Markovnikov):<br>
                              \\[\\ce{CH2=CH-CH2-CH2-CH2-CH3 + HCl -> CH3-CH(Cl)-CH2-CH2-CH2-CH3}\\]<br>
                              Producto: <strong>2-clorohexano</strong>.<br><br>
                            - ii) Reacción de oxidación:<br>
                              \\[\\ce{CH3-CHOH-CH3 + [O] -> CH3-CO-CH3}\\]<br>
                              Producto: <strong>propanona</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Nomenclatura y grupos funcionales:</strong><br>
                            - i) \\(\\ce{CH3-CH=CH-CHO}\\): <strong>but-2-enal</strong>. Grupo principal: <strong>aldehído</strong> (\\(\\ce{-CHO}\\)).<br>
                            - ii) \\(\\ce{H-COO-CH(CH3)-CH2-CH3}\\): <strong>metanoato de sec-butilo</strong> (o metanoato de 1-metilpropilo). Grupo principal: <strong>éster</strong> (\\(\\ce{-COO-}\\)).
                        </div>
                    `
                },
                {
                    titulo: "Junio 2024 - Esterificación y Estequiometría de Gases B.2",
                    enunciado: "a) Formule: i) Ácido etanodioico ii) 2-Metilbutanoato de propilo iii) 2,3,3-Trimetilpentanal.<br>b) Formule la esterificación para obtener 2-metilbutanoato de propilo.<br>c) Formule la combustión de etanol. Determine la riqueza en etanol de una muestra de 17 g sabiendo que al reaccionar con exceso de \\(\\ce{O2}\\) produce 14,2 L de \\(\\ce{CO2}\\) medidos a 25 °C y 785 mmHg.<br><em>Datos: \\(R=0,082 \\text{ atm}\\cdot\\text{L}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}\\); M.A.(u): H=1,0; C=12,0; O=16,0.</em>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Formulación:</strong><br>
                            - i) Ácido etanodioico: \\(\\ce{HOOC-COOH}\\)<br>
                            - ii) 2-Metilbutanoato de propilo: \\(\\ce{CH3-CH2-CH(CH3)-COO-CH2-CH2-CH3}\\)<br>
                            - iii) 2,3,3-Trimetilpentanal: \\(\\ce{CH3-CH2-C(CH3)2-CH(CH3)-CHO}\\)
                        </div>
                        <div class='paso'>
                            <strong>b) Reacción de esterificación:</strong><br>
                            \\[\\ce{CH3-CH2-CH(CH3)-COOH + CH3-CH2-CH2-OH <=> CH3-CH2-CH(CH3)-COO-CH2-CH2-CH3 + H2O}\\]<br>
                            Reactivos: <strong>ácido 2-metilbutanoico</strong> y <strong>propan-1-ol</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Reacción de combustión y cálculo de riqueza:</strong><br>
                            Ecuación ajustada de la combustión del etanol:<br>
                            \\[\\ce{CH3-CH2-OH + 3 O2 -> 2 CO2 + 3 H2O}\\]<br>
                            Cálculo de moles de \\(\\ce{CO2}\\) formados (<br>
                            \\(P = \\frac{785}{760} = 1,0329 \\text{ atm}\\); \\(T = 298,15 \\text{ K}\\)):<br>
                            \\[ n_{\\ce{CO2}} = \\frac{P \\cdot V}{R \\cdot T} = \\frac{1,0329 \\text{ atm} \\cdot 14,2 \\text{ L}}{0,082 \\cdot 298,15 \\text{ K}} = 0,600 \\text{ mol de CO}_2 \\]<br><br>
                            Por estequiometría (1 mol etanol : 2 mol \\(\\ce{CO2}\\)):<br>
                            \\[ n_{\\text{etanol}} = \\frac{0,600}{2} = 0,300 \\text{ mol de } \\ce{C2H6O} \\]<br>
                            Masa de etanol puro (M = 46,0 g/mol):<br>
                            \\[ m_{\\text{etanol}} = 0,300 \\text{ mol} \\cdot 46,0 \\text{ g/mol} = 13,8 \\text{ g} \\]<br>
                            Porcentaje de riqueza de la muestra:<br>
                            \\[ \\text{Riqueza} = \\frac{13,8 \\text{ g}}{17 \\text{ g}} \\cdot 100 = \\boxed{81,2\\%} \\]
                        </div>
                    `
                },
                {
                    titulo: "Julio 2024 - Isómeros C₂H₆O, Cis/Trans y Derivados del Eteno B.2",
                    enunciado: "a) Formule y nombre los isómeros de fórmula \\(\\ce{C2H6O}\\).<br>b) De los compuestos 1,2-dicloroeteno y 1,1-dicloroeteno, indique cuál presenta isomería geométrica e identifíquelos.<br>c) Indique a partir de qué compuesto pueden obtenerse etanol, 1,2-dibromoetano, cloroetano y etano, escribiendo sus reacciones.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Isómeros de fórmula \\(\\ce{C2H6O}\\):</strong><br>
                            - <strong>Etanol:</strong> \\(\\ce{CH3-CH2-OH}\\) (alcohol)<br>
                            - <strong>Metoximetano:</strong> \\(\\ce{CH3-O-CH3}\\) (dimetil éter, éter)<br>
                            Son isómeros de función.
                        </div>
                        <div class='paso'>
                            <strong>b) Isomería geométrica:</strong><br>
                            - <strong>1,1-dicloroeteno (\\(\\ce{CCl2=CH2}\\)):</strong> No presenta isomería geométrica (dos sustituyentes iguales en C1 y C2).<br>
                            - <strong>1,2-dicloroeteno (\\(\\ce{CHCl=CHCl}\\)):</strong> Sí presenta isomería geométrica al poseer un H y un Cl en cada carbono del doble enlace:<br>
                              - <strong><em>cis</em>-1,2-dicloroeteno</strong> (o (Z)-1,2-dicloroeteno)<br>
                              - <strong><em>trans</em>-1,2-dicloroeteno</strong> (o (E)-1,2-dicloroeteno)
                        </div>
                        <div class='paso'>
                            <strong>c) Compuesto de partida y síntesis:</strong><br>
                            El compuesto de partida es el <strong>eteno (\\(\\ce{CH2=CH2}\\))</strong>.<br>
                            1. <strong>Etanol:</strong> Adición (hidratación en medio ácido): \\(\\ce{CH2=CH2 + H2O ->[H+] CH3-CH2-OH}\\)<br>
                            2. <strong>1,2-dibromoetano:</strong> Adición de halógeno: \\(\\ce{CH2=CH2 + Br2 -> CH2Br-CH2Br}\\)<br>
                            3. <strong>Cloroetano:</strong> Adición de hidrácido: \\(\\ce{CH2=CH2 + HCl -> CH3-CH2-Cl}\\)<br>
                            4. <strong>Etano:</strong> Adición (hidrogenación catalítica): \\(\\ce{CH2=CH2 + H2 ->[Ni/Pt] CH3-CH3}\\)
                        </div>
                    `
                },
                {
                    titulo: "Junio 2025 - Formulación, Nomenclatura e Isomería 3A",
                    enunciado: "a) Nombre los compuestos y tipo: i) \\(\\ce{CH3-CH(CH3)-CH2-C(CH2CH3)(CH3)-CH2-CHO}\\) ii) \\(\\ce{CH2=CH-O-CH2-CH3}\\)<br>b) Escriba la fórmula semidesarrollada e indique el grupo funcional de: i) 3-etil-3,5-dimetilhexan-2-ol ii) ácido 4-etenilhept-2-enoico iii) 4-etilhexan-3-ona iv) 3-etil-4-metilheptanamida.<br>c) Formule y nombre dos isómeros de cadena no cíclicos del hexano.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Nomenclatura y tipo de compuesto:</strong><br>
                            - i) <strong>3-etil-3,5-dimetilhexanal</strong> (Aldehído).<br>
                            - ii) <strong>etoxieteno</strong> o etil vinil éter (Éter insaturado).
                        </div>
                        <div class='paso'>
                            <strong>b) Formulación y grupos funcionales:</strong><br>
                            - i) 3-etil-3,5-dimetilhexan-2-ol: \\(\\ce{CH3-CH(OH)-C(CH2CH3)(CH3)-CH2-CH(CH3)-CH3}\\) (Grupo: Alcohol, \\(\\ce{-OH}\\)).<br>
                            - ii) ácido 4-etenilhept-2-enoico: \\(\\ce{HOOC-CH=CH-CH(CH=CH2)-CH2-CH2-CH3}\\) (Grupos: Ácido carboxílico, \\(\\ce{-COOH}\\) y Alqueno, \\(\\ce{=C=}\\)).<br>
                            - iii) 4-etilhexan-3-ona: \\(\\ce{CH3-CH2-CO-CH(CH2CH3)-CH2-CH3}\\) (Grupo: Cetona, \\(\\ce{-CO-}\\)).<br>
                            - iv) 3-etil-4-metilheptanamida: \\(\\ce{H2N-CO-CH2-CH(CH2CH3)-CH(CH3)-CH2-CH2-CH3}\\) (Grupo: Amida, \\(\\ce{-CONH2}\\)).
                        </div>
                        <div class='paso'>
                            <strong>c) Isómeros de cadena del hexano (\\(\\ce{C6H14}\\)):</strong><br>
                            - <strong>2-metilpentano:</strong> \\(\\ce{CH3-CH(CH3)-CH2-CH2-CH3}\\)<br>
                            - <strong>2,3-dimetilbutano:</strong> \\(\\ce{CH3-CH(CH3)-CH(CH3)-CH3}\\)
                        </div>
                    `
                },
                {
                    titulo: "Junio 2025 - Propiedades, Hibridación y Síntesis de Alcohol 3B",
                    enunciado: "a) Para el \\(\\ce{CH3-CH2-CHOH-CH3}\\), razone V/F: i) Con \\(\\ce{H2SO4}\\) conc. da dos isómeros geométricos ii) Puede adicionar agua para dar butano.<br>b) Formule: i) Aldehído de 3 carbonos con hibridación sp ii) Amina secundaria de 3 carbonos unida a carbonos \\(sp^3\\) y \\(sp^2\\).<br>c) Dados propan-2-ol y propano: i) Justifique cuál tiene mayor Tfusión ii) Formule la obtención del alcohol a partir del alqueno indicando condiciones.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Justificación V/F para el butan-2-ol:</strong><br>
                            - i) <strong>Verdadero.</strong> La deshidratación con \\(\\ce{H2SO4}\\) (eliminación) sigue la regla de Zaítsev produciendo mayoritariamente <strong>but-2-eno</strong>, el cual posee dos isómeros geométricos: <strong><em>cis</em>-but-2-eno</strong> y <strong><em>trans</em>-but-2-eno</strong>.<br>
                            - ii) <strong>Falso.</strong> Un alcohol saturado no sufre reacciones de adición de agua; además, la adición a una insaturación daría dioles o alcoholes, nunca alcanos.
                        </div>
                        <div class='paso'>
                            <strong>b) Formulación según hibridación:</strong><br>
                            - i) <strong>Propinanal</strong> (o prop-2-inal): \\(\\ce{HC\\equiv C-CHO}\\) (3 carbonos, grupo aldehído y carbonos del triple enlace con hibridación \\(sp\\)).<br>
                            - ii) <strong>N-metiletenamina</strong>: \\(\\ce{CH3-NH-CH=CH2}\\) (nitrógeno unido a metilo con \\(sp^3\\) y a carbono vinílico con \\(sp^2\\)).
                        </div>
                        <div class='paso'>
                            <strong>c) Propiedades y síntesis de propan-2-ol:</strong><br>
                            - i) El <strong>propan-2-ol</strong> tiene mayor temperatura de fusión que el propano. Presenta enlaces de hidrógeno intermoleculares por su grupo \\(\\ce{-OH}\\), mientras que el propano sólo interactúa por fuerzas de dispersión de London débiles.<br>
                            - ii) Obtención de propan-2-ol a partir de <strong>propeno</strong> mediante <strong>adición electrófila</strong> (hidratación en medio ácido):<br><br>
                              \\[\\ce{CH3-CH=CH2 + H2O ->[H+] CH3-CHOH-CH3}\\]<br>
                              Sigue la <strong>regla de Markovnikov</strong> constituyendo el producto mayoritario.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2025 - Isomería, Esterificación y Puntos de Ebullición 3B",
                    enunciado: "a) Formule y nombre un isómero de función del ácido etanoico.<br>b) Formule la reacción entre ácido benzoico y etanol e indique su tipo.<br>c) Escriba la polimerización del etenilbenceno y nombre el polímero.<br>d) Las temperaturas de ebullición de etano, cloroetano y etanol son -88,6 °C, 12,3 °C y 78,5 °C, respectivamente. Justifique las diferencias.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Isómero de función del ácido etanoico (\\(\\ce{C2H4O2}\\)):</strong><br>
                            - <strong>Metanoato de metilo:</strong> \\(\\ce{H-COO-CH3}\\) (éster).
                        </div>
                        <div class='paso'>
                            <strong>b) Reacción entre ácido benzoico y etanol:</strong><br>
                            Reacción de <strong>esterificación (condensación)</strong>:<br><br>
                            \\[\\ce{C6H5-COOH + CH3-CH2-OH <=> C6H5-COO-CH2-CH3 + H2O}\\]<br>
                            Productos: <strong>benzoato de etilo</strong> y agua.
                        </div>
                        <div class='paso'>
                            <strong>c) Polimerización del etenilbenceno (estireno):</strong><br>
                            Reacción de <strong>polimerización por adición</strong>:<br><br>
                            \\[\\ce{n C6H5-CH=CH2 -> -[CH(C6H5)-CH2]_n-}\\]<br>
                            Nombre del polímero: <strong>Poliestireno (PS)</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Justificación de las temperaturas de ebullición:</strong><br>
                            - <strong>Etano (\\(\\ce{CH3-CH3}\\), -88,6 °C):</strong> Molécula apolar; únicamente presenta fuerzas de dispersión de London muy débiles.<br>
                            - <strong>Cloroetano (\\(\\ce{CH3-CH2-Cl}\\), 12,3 °C):</strong> Molécula polar; presenta interacciones dipolo permanente-dipolo permanente superiores a las de London.<br>
                            - <strong>Etanol (\\(\\ce{CH3-CH2-OH}\\), 78,5 °C):</strong> Molécula polar con un enlace \\(\\ce{O-H}\\) capaz de formar intensos <strong>enlaces de hidrógeno</strong> intermoleculares, requiriendo mucha más energía térmica para pasar al estado gaseoso.
                        </div>
                    `
                }
            ]
        },
        "polimeros_propiedades": {
            nombre: "Polímeros y Propiedades Físicas",
            problemas: [
                {
                    titulo: "Junio 2019 - Polímeros e Hidrocarburos",
                    enunciado: "a) Formule: eteno, propeno, cloroeteno y buta-1,3-dieno.<br>b) Formule y nombre el polímero obtenido a partir de eteno y el de cloroeteno.<br>c) Formule una reacción química para obtener etanol a partir de eteno.<br>d) Formule la hidrogenación total del buta-1,3-dieno y nombre el producto.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Formulación de hidrocarburos/derivados:</strong><br>
                            - Eteno: \\(\\ce{CH2=CH2}\\)<br>
                            - Propeno: \\(\\ce{CH3-CH=CH2}\\)<br>
                            - Cloroeteno: \\(\\ce{CH2=CH-Cl}\\)<br>
                            - Buta-1,3-dieno: \\(\\ce{CH2=CH-CH=CH2}\\)
                        </div>
                        <div class='paso'>
                            <strong>b) Polímeros de adición:</strong><br>
                            - A partir de eteno: <strong>Polietileno</strong> (\\(\\ce{-[CH2-CH2]_n-}\\)).<br>
                            - A partir de cloroeteno: <strong>Policloruro de vinilo / PVC</strong> (\\(\\ce{-[CH2-CH(Cl)]_n-}\\)).
                        </div>
                        <div class='paso'>
                            <strong>c) Obtención de etanol desde eteno:</strong><br>
                            Reacción de <strong>adición (hidratación)</strong> catalizada por ácido:<br><br>
                            \\[\\ce{CH2=CH2 + H2O ->[H+] CH3-CH2-OH}\\]
                        </div>
                        <div class='paso'>
                            <strong>d) Hidrogenación total del buta-1,3-dieno:</strong><br>
                            Reacción de <strong>adición (hidrogenación)</strong>:<br><br>
                            \\[\\ce{CH2=CH-CH=CH2 + 2 H2 ->[Ni/Pt] CH3-CH2-CH2-CH3}\\]<br>
                            Producto obtenido: <strong>butano</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2022 - Razonamientos de Isomería, Reglas y Polímeros A.2",
                    enunciado: "Razone si las siguientes afirmaciones son verdaderas o falsas:<br>a) Butanal y butanona son isómeros de función del but-3-en-1-ol. Indique grupo funcional.<br>b) La adición de HBr a propeno da mayoritariamente 1-bromopropano.<br>c) La eliminación en pentan-2-ol con \\(\\ce{H2SO4}\\) y calor da mayoritariamente pent-2-eno.<br>d) El PVC se obtiene por polimerización por condensación.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Verdadero.</strong> Todos comparten la fórmula molecular \\(\\ce{C4H8O}\\).<br>
                            - Butanal (\\(\\ce{CH3-CH2-CH2-CHO}\\)): grupo aldehído (\\(\\ce{-CHO}\\)).<br>
                            - Butanona (\\(\\ce{CH3-CO-CH2-CH3}\\)): grupo cetona (\\(\\ce{-CO-}\\)).<br>
                            - But-3-en-1-ol (\\(\\ce{CH2=CH-CH2-CH2OH}\\)): grupos alqueno (\\(\\ce{=C=}\\)) y alcohol (\\(\\ce{-OH}\\)).
                        </div>
                        <div class='paso'>
                            <strong>b) Falso.</strong> Por la <strong>regla de Markovnikov</strong>, el \\(\\ce{H+}\\) se une al carbono del doble enlace con más átomos de hidrógeno (C1) y el \\(\\ce{Br-}\\) al carbono sustituido (C2), siendo el producto mayoritario el <strong>2-bromopropano</strong> (\\(\\ce{CH3-CH(Br)-CH3}\\)).
                        </div>
                        <div class='paso'>
                            <strong>c) Verdadero.</strong> Sigue la <strong>regla de Zaítsev</strong>, la cual establece que en una reacción de eliminación se abstrae el protón del carbono adyacente menos hidrogenado (C3), dando el alqueno más sustituido y estable, el <strong>pent-2-eno</strong>.
                        </div>
                        <div class='paso'>
                            <strong>d) Falso.</strong> El PVC (policloruro de vinilo) se obtiene mediante una polimerización por <strong>adición</strong> del monómero cloroeteno, sin pérdida de moléculas pequeñas.
                        </div>
                    `
                }
            ]
        }
    }
};