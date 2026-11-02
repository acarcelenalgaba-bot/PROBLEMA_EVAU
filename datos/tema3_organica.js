if (typeof baseDatosTemas === 'undefined') {
    var baseDatosTemas = {};
}

baseDatosTemas["tema3"] = {
    id: "tema3",
    titulo: "Tema 3: Química Orgánica",
    deshabilitado: false,
    secciones: {
        "formulacion_isomeria": {
            nombre: "1. Formulación, Nomenclatura e Isomería",
            problemas: [
                {
                    titulo: "Julio 2019 - Isomería de Diversas Familias",
                    enunciado: "Formule y nombre los siguientes compuestos orgánicos:<br>a) Dos hidrocarburos saturados, isómeros de cadena, de fórmula molecular \\(\\ce{C4H10}\\).<br>b) Dos aminas primarias, isómeras de posición, de fórmula molecular \\(\\ce{C3H9N}\\).<br>c) Dos compuestos, isómeros de función (monofuncional), de fórmula molecular \\(\\ce{C3H6O2}\\).<br>d) Un hidrocarburo aromático de fórmula molecular \\(\\ce{C7H8}\\). <br> <strong>Solución: a) butano y 2-metilpropano; b) propan-1-amina y propan-2-amina; c) ácido propanoico y etanoato de metilo; d) metilbenceno (tolueno).</strong>",
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
                    titulo: "Julio 2021 - Síntesis de Tolueno y Formulación B.2",
                    enunciado: "a) Formule la reacción que permite obtener metilbenceno (tolueno) a partir de clorometano e indique de qué tipo es.<br>b) Formule: penta-2,4-dien-1,4-diol, but-3-in-2-ona y 4-fenil-2-metilpentan-1-ol.<br>c) Nombre y formule dos compuestos, isómeros de función, de fórmula molecular \\(\\ce{C3H6O}\\). <br> <strong>Solución: a) alquilación de Friedel-Crafts: C₆H₆ + CH₃Cl → C₆H₅-CH₃ + HCl; b) HO-CH₂-CH=CH-C(OH)=CH₂; CH₃-CO-C≡CH; HO-CH₂-CH(CH₃)-CH₂-CH(C₆H₅)-CH₃; c) propanal (CH₃-CH₂-CHO) y propanona (CH₃-CO-CH₃).</strong>",
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
                    enunciado: "a) Nombre los compuestos, escriba su fórmula molecular e indique los tipos de isomería entre ellos:<br>a1) \\(\\ce{CH3-CO-CH2-CH(CH3)2}\\)<br>a2) \\(\\ce{CH3-CHOH-CH(CH3)-CH2-CH3}\\)<br>a3) \\(\\ce{CH3-C(CH3)2-CH2-CHO}\\)<br>a4) \\(\\ce{CH3-(CH2)2-O-(CH2)2-CH3}\\) <br> <strong>Solución: a1) 4-metilpentan-2-ona (C₆H₁₂O); a2) 3-metilpentan-2-ol (C₆H₁₄O); a3) 3,3-dimetilbutanal (C₆H₁₂O); a4) dipropil éter (C₆H₁₄O); a1 y a3 isómeros de función (cetona/aldehído); a2 y a4 isómeros de función (alcohol/éter).</strong>",
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
                    `
                },
                {
                    titulo: "Junio 2023 - Pares de Compuestos e Isomería B.2",
                    enunciado: "Considere los pares de compuestos siguientes:<br>&emsp; &emsp; (i) etanoato de etilo y ácido butanoico;&emsp;&emsp;&emsp; (ii) pent-1-eno y ciclopentano;&emsp; &emsp; &emsp; (iii) but-1-eno y but-2-ino.<br>a) Escriba sus fórmulas semidesarrolladas.<br>b) Razone si corresponden a compuestos isómeros e indique el tipo. <br> <strong>Solución: a) CH₃-COO-CH₂-CH₃ y CH₃-CH₂-CH₂-COOH; CH₂=CH-CH₂-CH₂-CH₃ y C₅H₁₀ (anillo); CH₂=CH-CH₂-CH₃ y CH₃-C≡C-CH₃; b) (i) isómeros de función (C₄H₈O₂); (ii) isómeros de función (C₅H₁₀); (iii) NO son isómeros (C₄H₈ vs C₄H₆).</strong>",
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
                    `
                },
                {
                    titulo: "Julio 2023 - Isomería, Éteres y Combustión A.2",
                    enunciado: "a) Formule el 3-bromo-4-metilpentanal y un isómero de función.<br>b) Formule y nombre dos isómeros de posición del éter con fórmula \\(\\ce{C4H10O}\\).<br>c) Escriba y ajuste la reacción de combustión del etino. <br> <strong>Solución: a) CH₃-CH(CH₃)-CH(Br)-CH₂-CHO; isómero cetona: 4-bromo-5-metilhexan-2-ona; b) 1-metoxipropano (CH₃-O-CH₂-CH₂-CH₃) y 2-metoxipropano (CH₃-O-CH(CH₃)₂); c) 2 C₂H₂ + 5 O₂ → 4 CO₂ + 2 H₂O.</strong>",
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
                    `
                },
                {
                    titulo: "Junio 2024 - Isomería Geométrica y Reacciones A.2",
                    enunciado: "a) Indique cuál de los compuestos presenta isomería geométrica y dibuje los isómeros: <br>&emsp; i) Propeno &emsp;ii) But-1-eno &emsp;iii) Pent-2-eno &emsp;iv) Propen-2-ol.<br>c) Nombre e indique el grupo principal de: <br> &emsp; i) \\(\\ce{CH3-CH=CH-CHO}\\) &emsp;&emsp;ii) \\(\\ce{H-COO-CH(CH3)-CH2-CH3}\\) <br> <strong>Solución: a) solo el pent-2-eno presenta isomería geométrica (cis y trans); c) i) but-2-enal, grupo aldehído; ii) metanoato de sec-butilo, grupo éster.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Isomería geométrica:</strong><br>
                            Sólo el <strong>pent-2-eno</strong> (\\(\\ce{CH3-CH=CH-CH2-CH3}\\)) presenta isomería geométrica, al tener dos sustituyentes distintos en cada carbono del doble enlace (H y metilo en C2; H y etilo en C3):<br>
                            - <strong><em>cis</em>-pent-2-eno</strong> (o (Z)-pent-2-eno)<br>
                            - <strong><em>trans</em>-pent-2-eno</strong> (o (E)-pent-2-eno)<br>
                            <em>(Los demás tienen dos hidrógenos sobre el C1 terminal, impidiendo esta isomería).</em>
                        </div>
                        <div class='paso'>
                            <strong>c) Nomenclatura y grupos funcionales:</strong><br>
                            - i) \\(\\ce{CH3-CH=CH-CHO}\\): <strong>but-2-enal</strong>. Grupo principal: <strong>aldehído</strong> (\\(\\ce{-CHO}\\)).<br>
                            - ii) \\(\\ce{H-COO-CH(CH3)-CH2-CH3}\\): <strong>metanoato de sec-butilo</strong> (o metanoato de 1-metilpropilo). Grupo principal: <strong>éster</strong> (\\(\\ce{-COO-}\\)).
                        </div>
                    `
                },
                {
                    titulo: "Julio 2024 - Isómeros C₂H₆O, Cis/Trans y Derivados del Eteno B.2",
                    enunciado: "a) Formule y nombre los isómeros de fórmula \\(\\ce{C2H6O}\\).<br>b) De los compuestos 1,2-dicloroeteno y 1,1-dicloroeteno, indique cuál presenta isomería geométrica e identifíquelos. <br> <strong>Solución: a) etanol (CH₃-CH₂-OH) y metoximetano (CH₃-O-CH₃); b) el 1,2-dicloroeteno presenta isomería cis/trans; el 1,1-dicloroeteno no.</strong>",
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
                    `
                },
                {
                    titulo: "Junio 2025 - Formulación, Nomenclatura e Isomería 3A",
                    enunciado: "a) Nombre los compuestos y tipo: <br> \\(\\quad\\) i) \\(\\ce{CH3-CH(CH3)-CH2-C(CH2CH3)(CH3)-CH2-CHO}\\) <br> \\(\\quad\\) ii) \\(\\ce{CH2=CH-O-CH2-CH3}\\)<br>b) Escriba la fórmula semidesarrollada e indique el grupo funcional de: <br> \\(\\quad\\) i) 3-etil-3,5-dimetilhexan-2-ol <br> \\(\\quad\\) ii) ácido 4-etenilhept-2-enoico iii) 4-etilhexan-3-ona iv) 3-etil-4-metilheptanamida.<br>c) Formule y nombre dos isómeros de cadena no cíclicos del hexano. <br> <strong>Solución: a) i) 3-etil-3,5-dimetilhexanal (aldehído); ii) etoxieteno (éter); b) i) CH₃-CH(OH)-C(CH₂CH₃)(CH₃)-CH₂-CH(CH₃)-CH₃ (alcohol); ii) HOOC-CH=CH-CH(CH=CH₂)-CH₂-CH₂-CH₃ (ácido + alqueno); iii) CH₃-CH₂-CO-CH(CH₂CH₃)-CH₂-CH₃ (cetona); iv) H₂N-CO-CH₂-CH(CH₂CH₃)-CH(CH₃)-CH₂-CH₂-CH₃ (amida); c) 2-metilpentano y 2,3-dimetilbutano.</strong>",
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
                    titulo: "Junio 2025 - Propiedades e Hibridación",
                    enunciado: "b) Formule: <br> &emsp; i) Aldehído de 3 carbonos con hibridación sp. <br> &emsp; ii) Amina secundaria de 3 carbonos unida a carbonos \\(\\ce{sp^3}\\) y \\(\\ce{sp^2}\\).<br>c) Dados propan-2-ol y propano: <br> &emsp;i) Justifique cuál tiene mayor T<sub>fusión</sub>. <br> <strong>Solución: b) i) prop-2-inal (HC≡C-CHO); ii) N-metiletenamina (CH₃-NH-CH=CH₂); c) i) el propan-2-ol tiene mayor T_fusión por los enlaces de hidrógeno.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>b) Formulación según hibridación:</strong><br>
                            - i) <strong>Propinanal</strong> (o prop-2-inal): \\(\\ce{HC\\equiv C-CHO}\\) (3 carbonos, grupo aldehído y carbonos del triple enlace con hibridación \\(sp\\)).<br>
                            - ii) <strong>N-metiletenamina</strong>: \\(\\ce{CH3-NH-CH=CH2}\\) (nitrógeno unido a metilo con \\(sp^3\\) y a carbono vinílico con \\(sp^2\\)).
                        </div>
                        <div class='paso'>
                            <strong>c) Propiedades y síntesis de propan-2-ol:</strong><br>
                            - i) El <strong>propan-2-ol</strong> tiene mayor temperatura de fusión que el propano. Presenta enlaces de hidrógeno intermoleculares por su grupo \\(\\ce{-OH}\\), mientras que el propano sólo interactúa por fuerzas de dispersión de London débiles.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2025 - Isomería y Puntos de Ebullición 3B",
                    enunciado: "a) Formule y nombre un isómero de función del ácido etanoico.<br>d) Las temperaturas de ebullición de etano, cloroetano y etanol son -88,6 °C, 12,3 °C y 78,5 °C, respectivamente. Justifique las diferencias. <br> <strong>Solución: a) metanoato de metilo (H-COO-CH₃); d) etano (London) < cloroetano (dipolo-dipolo) < etanol (enlaces de hidrógeno).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Isómero de función del ácido etanoico (\\(\\ce{C2H4O2}\\)):</strong><br>
                            - <strong>Metanoato de metilo:</strong> \\(\\ce{H-COO-CH3}\\) (éster).
                        </div>
                        <div class='paso'>
                            <strong>d) Justificación de las temperaturas de ebullición:</strong><br>
                            - <strong>Etano (\\(\\ce{CH3-CH3}\\), -88,6 °C):</strong> Molécula apolar; únicamente presenta fuerzas de dispersión de London muy débiles.<br>
                            - <strong>Cloroetano (\\(\\ce{CH3-CH2-Cl}\\), 12,3 °C):</strong> Molécula polar; presenta interacciones dipolo permanente-dipolo permanente superiores a las de London.<br>
                            - <strong>Etanol (\\(\\ce{CH3-CH2-OH}\\), 78,5 °C):</strong> Molécula polar con un enlace \\(\\ce{O-H}\\) capaz de formar intensos <strong>enlaces de hidrógeno</strong> intermoleculares, requiriendo mucha más energía térmica para pasar al estado gaseoso.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2026 - Isomería 3A",
                    enunciado: "Responda a las siguientes cuestiones: <br>a) Nombre los siguientes compuestos y escriba su fórmula molecular. Justifique si son isómeros y, en su caso, el tipo de isomería que presentan:<br> &emsp;&emsp; \\( \\ce{CH2Br-CH2-COO-CH2-CH3 \\quad y \\quad CH3-(CH2)2-CHBr-COOH}\\) <br> <strong>Solución: a) 3-bromopropanoato de etilo (C₅H₉BrO₂) y ácido 2-bromopentanoico (C₅H₉BrO₂); son isómeros de función (éster vs ácido carboxílico).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Nomenclatura, fórmula molecular y tipo de isomería:</strong><br>
                            - Primer compuesto: \\(\\ce{CH2Br-CH2-COO-CH2-CH3}\\) es el <strong>3-bromopropanoato de etilo</strong>. Fórmula molecular: \\(\\ce{C5H9BrO2}\\).<br>
                            - Segundo compuesto: \\(\\ce{CH3-(CH2)2-CHBr-COOH}\\) es el <strong>ácido 2-bromopentanoico</strong>. Fórmula molecular: \\(\\ce{C5H9BrO2}\\).<br>
                            Ambos tienen la misma fórmula molecular, por lo que son <strong>isómeros</strong>. Como el primero es un éster y el segundo un ácido carboxílico, se trata de <strong>isómeros de función</strong>.
                        </div>
                    `
                }
            ]
        },
        "reacciones_organicas": {
            nombre: "2. Reacciones Orgánicas y Síntesis",
            problemas: [
                {
                    titulo: "Julio 2020 - Reacciones Orgánicas B.2",
                    enunciado: "Formule y nombre los reactivos y todos los productos orgánicos de las siguientes reacciones:<br>a) Deshidratación de pentan-2-ol con ácido sulfúrico y calor.<br>b) Reducción de propanona.<br>c) \\(\\ce{CH3-CHOH-CH3 + CH3-COOH ->}\\)<br>d) \\(\\ce{CH3-CH=C(CH3)-CH2-CH3 + HCl ->}\\) <br> <strong>Solución: a) eliminación, productos pent-2-eno (mayoritario) y pent-1-eno; b) reducción, propan-2-ol; c) esterificación, etanoato de isopropilo; d) adición electrófila (Markovnikov), 3-cloro-3-metilpentano.</strong>",
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
                    enunciado: "Formule la reacción, indique de qué tipo es, y nombre los compuestos orgánicos implicados:<br>b) propan-2-ol + \\(\\ce{H2SO4}\\)/calor →<br>c) pent-2-eno + \\(\\ce{H2O/H+} ->\\)<br>d) 3-metilpentan-1-ol + HBr → <br> <strong>Solución: b) eliminación, propeno; c) adición, pentan-2-ol y pentan-3-ol; d) sustitución nucleófila, 1-bromo-3-metilpentano.</strong>",
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
                    titulo: "Julio 2021 - Cuestiones V/F en Orgánica A.4",
                    enunciado: "Justifique si las siguientes afirmaciones son verdaderas o falsas:<br>a) El propanoato de metilo se obtiene mediante una reacción de esterificación a partir de ácido propanoico y etanol.<br>b) En la reacción de eliminación del compuesto butan-2-ol se obtiene como producto mayoritario but-1-eno.<br>c) El compuesto prop-2-en-1-ol es un isómero de función de la propanona.<br>d) El compuesto pent-2-eno en presencia de \\(\\ce{Br2}\\) da lugar a 2,3-dibromopentano. <br> <strong>Solución: a) falso (se obtiene con metanol, no etanol); b) falso (mayoritario but-2-eno, regla de Zaítsev); c) verdadero (ambos C₃H₆O, alcohol insaturado vs cetona); d) verdadero (adición de Br₂ al doble enlace).</strong>",
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
                    titulo: "Junio 2022 - Reacciones Orgánicas Generales B.2",
                    enunciado: "Complete y ajuste las siguientes reacciones, formule y nombre todos los compuestos orgánicos que intervienen e indique el tipo de reacción:<br>a) Propano + oxígeno →<br>b) Ácido butanoico + propan-1-amina →<br>c) n \\(\\ce{CH2=CH2}\\) + catalizador →<br>d) \\(\\ce{CH3-CHOH-CH3 + H2SO4 \\text{ (concentrado)} ->}\\) <br> <strong>Solución: a) combustión: C₃H₈ + 5 O₂ → 3 CO₂ + 4 H₂O; b) amidación: ácido butanoico + propan-1-amina → N-propilbutanamida + H₂O; c) polimerización: n CH₂=CH₂ → polietileno; d) eliminación: propan-2-ol → propeno + H₂O.</strong>",
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
                    enunciado: "Escriba todos los productos de las siguientes reacciones orgánicas, indique el tipo de reacción y nombre los compuestos orgánicos implicados:<br>a) \\(\\ce{CH3-CH2-CH2-CH2-Cl + NaOH ->}\\)<br>b) \\(\\ce{CH3-CHO + H2 ->}\\)<br>c) \\(\\ce{CH3-COOH + CH3-CH2-OH ->}\\)<br>d) \\(\\ce{CH3-C(OH)(CH3)-CH2-CH2-CH3 + H2SO4/calor ->}\\) <br> <strong>Solución: a) sustitución nucleófila: 1-clorobutano + NaOH → butan-1-ol + NaCl; b) reducción: etanal + H₂ → etanol; c) esterificación: ácido etanoico + etanol → etanoato de etilo + H₂O; d) eliminación (Zaítsev): 2-metilpentan-2-ol → 2-metilpent-2-eno (mayoritario) + H₂O.</strong>",
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
                    titulo: "Junio 2023 - Deducción de esquema reaccional A.2",
                    enunciado: "A, B, C, D y E son compuestos orgánicos que reaccionan de acuerdo a los siguientes procesos:<br>&emsp;&emsp;i) A + HBr → 2-bromopropano<br>&emsp;&emsp;ii) B + C → propanoato de etilo + agua<br>&emsp;&emsp;iii) D + oxidante → propanona<br>&emsp;&emsp;iv) E + \\(\\ce{H2SO4}\\) (concentrado) → but-2-eno<br>a) Escriba las fórmulas semidesarrolladas de los productos orgánicos de cada reacción.<br>b) Identifique, con sus fórmulas semidesarrolladas y su nombre, los compuestos A, B, C, D y E.<br>c) Indique de qué tipo es cada reacción.<br>d) Diga si en alguna de estas reacciones se puede obtener más de un producto. <br> <strong>Solución: b) A = propeno, B = ácido propanoico, C = etanol, D = propan-2-ol, E = butan-2-ol; c) i) adición, ii) esterificación, iii) oxidación, iv) eliminación; d) sí, en iv) se forma but-1-eno minoritario (Zaítsev) y en i) 1-bromopropano minoritario.</strong>",
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
                    enunciado: "Formule los reactivos y el producto mayoritario de las siguientes reacciones. Indique el tipo de reacción, la regla que sigue si es el caso, y nombre los productos:<br>a) 3-metilpent-2-eno + HCl →<br>b) 3-metilpentan-2-ol + \\(\\ce{H2SO4}\\) (concentrado) →<br>c) Ácido pentanoico + etanol → <br> <strong>Solución: a) adición (Markovnikov): 3-cloro-3-metilpentano; b) eliminación (Zaítsev): 3-metilpent-2-eno; c) esterificación: pentanoato de etilo + H₂O.</strong>",
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
                    titulo: "Junio 2024 - Esterificación y Estequiometría de Gases B.2",
                    enunciado: "a) Formule: i) Ácido etanodioico ii) 2-Metilbutanoato de propilo iii) 2,3,3-Trimetilpentanal.<br>b) Formule la esterificación para obtener 2-metilbutanoato de propilo.<br>c) Formule la combustión de etanol. Determine la riqueza en etanol de una muestra de 17 g sabiendo que al reaccionar con exceso de \\(\\ce{O2}\\) produce 14,2 L de \\(\\ce{CO2}\\) medidos a 25 °C y 785 mmHg.<br><em>Datos: \\(\\ce{R=0,082 \\text{ atm}\\cdot\\text{L}\\cdot\\text{mol}^{-1}\\cdot\\text{K}^{-1}}\\); M.A.(u): H=1,0; C=12,0; O=16,0.</em> <br> <strong>Solución: a) HOOC-COOH; CH₃-CH₂-CH(CH₃)-COO-CH₂-CH₂-CH₃; CH₃-CH₂-C(CH₃)₂-CH(CH₃)-CHO; b) ácido 2-metilbutanoico + propan-1-ol → 2-metilbutanoato de propilo + H₂O; c) CH₃CH₂OH + 3 O₂ → 2 CO₂ + 3 H₂O; riqueza ≈ 81,2 %.</strong>",
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
                    titulo: "Julio 2024 - Secuencia de Reacciones Orgánicas A.2",
                    enunciado: "Se lleva a cabo la siguiente secuencia de reacciones:<br>2-bromopropano + KOH/EtOH → A (alqueno); A + \\(\\ce{H2O/H+} ->\\) B; B + oxidante (\\(\\ce{Cr2O7^2-}\\))/\\(\\ce{H+} ->\\) C<br>a) Formule y nombre los compuestos orgánicos mayoritarios A, B y C, indique el tipo de reacción y la regla aplicable.<br>b) ¿Son isómeros B y C? ¿A podría presentar isomería geométrica? Justifique.<br>c) Formule y nombre la reacción en medio ácido: B + ácido etanoico → <br> <strong>Solución: a) A = propeno (eliminación), B = propan-2-ol (adición, Markovnikov), C = propanona (oxidación); b) B y C no son isómeros (C₃H₈O vs C₃H₆O); A no presenta isomería geométrica; c) esterificación: etanoato de isopropilo + H₂O.</strong>",
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
                    enunciado: "Complete las siguientes reacciones. Formule y nombre todos los compuestos orgánicos. Indique el tipo de reacción y, si procede, el producto mayoritario y la regla que sigue. Dibuje los posibles isómeros geométricos que se formen:<br>a) Metilbutano + \\(\\ce{O2}\\) →<br>b) Ácido propanoico + NaOH (ac) →<br>c) Metilpropeno + HBr →<br>d) Pentan-2-ol + \\(\\ce{H2SO4}\\)/calor → <br> <strong>Solución: a) combustión: C₅H₁₂ + 8 O₂ → 5 CO₂ + 6 H₂O; b) neutralización: propanoato de sodio + H₂O; c) adición (Markovnikov): 2-bromo-2-metilpropano; d) eliminación (Zaítsev): pent-2-eno (con isómeros cis/trans) + H₂O.</strong>",
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
                },
                {
                    titulo: "Junio 2026 - Isomería y Reacciones 3A",
                    enunciado: "Conteste de forma razonada las siguientes cuestiones: <br>a) Nombre los siguientes compuestos e identifique el grupo funcional principal.<br> \\(\\ce{\\quad (1) CH3-CH2-CH2OH \\quad \\quad (2) (CH3)3-N \\quad \\quad (3) CH3-COO-CH3 \\quad \\quad (4) CH3-CH=CH2 \\quad \\quad (5) CH3-CH2-CHO} \\)<br>b) Escriba las reacciones correspondientes a los procesos siguientes:<br> &emsp;&emsp; i) Obtención del compuesto (1) a partir de un aldehído.<br> &emsp;&emsp; ii) Obtención del compuesto (4) a partir de un alcohol primario. <br> &emsp;&emsp; iii) Obtención del compuesto (3). <br>c) Formule y nombre los dos isómeros geométricos cis y trans con la misma fórmula molecular que la del compuesto (5). <br> <strong>Solución: a) (1) propan-1-ol (alcohol); (2) trimetilamina (amina); (3) etanoato de metilo (éster); (4) propeno (alqueno); (5) propanal (aldehído); b) i) propanal + H₂ → propan-1-ol; ii) propan-1-ol → propeno + H₂O; iii) ácido etanoico + metanol → etanoato de metilo + H₂O; c) but-2-eno: cis-but-2-eno y trans-but-2-eno (C₄H₈).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Nomenclatura y grupos funcionales:</strong><br>
                            - (1) \\(\\ce{CH3-CH2-CH2OH}\\): <strong>propan-1-ol</strong>. Grupo: <strong>alcohol</strong> (\\(\\ce{-OH}\\)).<br>
                            - (2) \\(\\ce{(CH3)3-N}\\): <strong>trimetilamina</strong>. Grupo: <strong>amina terciaria</strong>.<br>
                            - (3) \\(\\ce{CH3-COO-CH3}\\): <strong>etanoato de metilo</strong>. Grupo: <strong>éster</strong> (\\(\\ce{-COO-}\\)).<br>
                            - (4) \\(\\ce{CH3-CH=CH2}\\): <strong>propeno</strong>. Grupo: <strong>alqueno</strong> (\\(\\ce{C=C}\\)).<br>
                            - (5) \\(\\ce{CH3-CH2-CHO}\\): <strong>propanal</strong>. Grupo: <strong>aldehído</strong> (\\(\\ce{-CHO}\\)).
                        </div>
                        <div class='paso'>
                            <strong>b) Reacciones:</strong><br>
                            - i) Reducción del propanal a propan-1-ol:<br>
                              \\[\\ce{CH3-CH2-CHO + H2 ->[Ni] CH3-CH2-CH2OH}\\]<br>
                            - ii) Deshidratación del propan-1-ol:<br>
                              \\[\\ce{CH3-CH2-CH2OH ->[H2SO4, \\Delta] CH3-CH=CH2 + H2O}\\]<br>
                            - iii) Esterificación para obtener etanoato de metilo:<br>
                              \\[\\ce{CH3-COOH + CH3OH <=> CH3-COO-CH3 + H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>c) Isómeros geométricos con la fórmula del propanal (\\(\\ce{C3H6O}\\)):</strong><br>
                            El propanal tiene fórmula molecular \\(\\ce{C3H6O}\\). Un isómero con posibilidad de isomería geométrica sería un alqueno cíclico o un compuesto con doble enlace adecuado. Con esa fórmula, no existen isómeros geométricos cis/trans directos. Un ejemplo válido de isómeros cis/trans con la misma fórmula molecular no es posible sin modificar la estructura. Se suele proponer el <strong>but-2-eno (\\(\\ce{C4H8}\\))</strong> como ejemplo clásico de isómeros geométricos:<br>
                            - <strong><em>cis</em>-but-2-eno</strong><br>
                            - <strong><em>trans</em>-but-2-eno</strong>
                        </div>
                    `
                },
                {
                    titulo: "Junio 2026 - Reacciones Generales 3B",
                    enunciado: "Responda a las siguientes cuestiones: <br> b) Complete las siguientes reacciones con el producto mayoritario, formulando los compuestos de partida, y nombrando y formulando los compuestos orgánicos A, B, C, D y E.:<br>i) \\(\\ce{Propan-1-ol \\quad ->[oxidación] \\quad  A ->[oxidación] \\quad  B}\\)<br>ii)  \\(\\ce{Etanol + B \\quad -> \\quad  C }\\) <br>iii) \\(\\ce{Butan-2-ol \\quad  ->[H2SO4 conc/calor] \\quad  D \\quad ->[HBr] \\quad  E }\\) <br> <strong>Solución: i) A = propanal, B = ácido propanoico; ii) C = propanoato de etilo; iii) D = but-2-eno (mayoritario), E = 2-bromobutano (Markovnikov).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>i) Oxidación del propan-1-ol:</strong><br>
                            - <strong>A:</strong> <strong>propanal</strong> (\\(\\ce{CH3-CH2-CHO}\\)). Oxidación parcial del alcohol primario.<br>
                            - <strong>B:</strong> <strong>ácido propanoico</strong> (\\(\\ce{CH3-CH2-COOH}\\)). Oxidación total del aldehído.<br>
                            \\[\\ce{CH3-CH2-CH2OH ->[K2Cr2O7/H+] CH3-CH2-CHO ->[K2Cr2O7/H+] CH3-CH2-COOH}\\]
                        </div>
                        <div class='paso'>
                            <strong>ii) Etanol + ácido propanoico (B):</strong><br>
                            Reacción de <strong>esterificación</strong>:<br><br>
                            \\[\\ce{CH3-CH2-OH + CH3-CH2-COOH <=> CH3-CH2-COO-CH2-CH3 + H2O}\\]<br>
                            - <strong>C:</strong> <strong>propanoato de etilo</strong>.
                        </div>
                        <div class='paso'>
                            <strong>iii) Deshidratación del butan-2-ol y adición de HBr:</strong><br>
                            - <strong>D:</strong> Por regla de Zaítsev, el producto mayoritario es el <strong>but-2-eno</strong> (\\(\\ce{CH3-CH=CH-CH3}\\)).<br>
                            - <strong>E:</strong> Adición de HBr según Markovnikov al but-2-eno:<br>
                              \\[\\ce{CH3-CH=CH-CH3 + HBr -> CH3-CH2-CH(Br)-CH3}\\]<br>
                              Producto mayoritario: <strong>2-bromobutano</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2026 - Reacciones Generales 3A",
                    enunciado: "Responda a las siguientes cuestiones: <br> b) Complete las siguientes reacciones, formule y nombre todos los compuestos orgánicos indicando el producto mayoritario cuando proceda, y especifique la regla que sigue y el tipo de reacción: <br> &emsp;&emsp; i) \\(\\ce{ \\quad propeno + HBr -> }\\) <br> &emsp;&emsp; ii) \\(\\ce{ \\quad CH3-CH(CH3)-CHOH-CH3 + KMnO4 (oxidante) -> }\\) <br>c) Formule y ajuste la reacción de hidrogenación del cis-pent-2-eno. <br> <strong>Solución: b) i) adición electrófila (Markovnikov): 2-bromopropano; ii) oxidación: 3-metilbutan-2-ona; c) hidrogenación: cis-pent-2-eno + H₂ → pentano.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>b) i) Adición de HBr a propeno:</strong><br>
                            Reacción de <strong>adición electrófila</strong>. Sigue la <strong>regla de Markovnikov</strong>:<br><br>
                            \\[\\ce{CH3-CH=CH2 + HBr -> CH3-CH(Br)-CH3}\\]<br>
                            Producto mayoritario: <strong>2-bromopropano</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) ii) Oxidación de 3-metilbutan-2-ol:</strong><br>
                            Reacción de <strong>oxidación</strong> de un alcohol secundario a cetona:<br><br>
                            \\[\\ce{CH3-CH(CH3)-CHOH-CH3 ->[KMnO4/H+] CH3-CH(CH3)-CO-CH3}\\]<br>
                            Producto: <strong>3-metilbutan-2-ona</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Hidrogenación del cis-pent-2-eno:</strong><br>
                            Reacción de <strong>adición (hidrogenación)</strong>:<br><br>
                            \\[\\ce{CH3-CH=CH-CH2-CH3 + H2 ->[Ni/Pt] CH3-CH2-CH2-CH2-CH3}\\]<br>
                            Producto: <strong>pentano</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2026 - Reacciones Generales 3B",
                    enunciado: "Responda a las siguientes cuestiones: <br>a) Formule las siguientes reacciones, escriba el nombre de todos los reactivos y productos orgánicos e indique el tipo de reacción.<br> &emsp;&emsp; i) \\(\\quad \\) Formación de \\(\\ce{CH3-CH(CH3)-(CH2)2-COO-CH3}\\) a partir de la reacción de un ácido con otro reactivo. <br> &emsp;&emsp; ii) \\(\\ce{\\quad CH3-(CH2)4-CHO + oxidante -> } \\) <br> b) Escriba la fórmula semidesarrollada de los siguientes compuestos orgánicos: <br> &emsp;&emsp; i) \\(\\quad\\)  2,3,3-trimetilbutanal. <br> &emsp;&emsp; ii) \\(\\quad\\) trans-4-metilpent-2-eno. <br> c) Formule la reacción de adición de \\(\\ce{Cl2}\\) a \\(\\ce{CH3-CH=CH2}\\). Nombre todos los compuestos orgánicos. <br>Razone cómo afecta un aumento de temperatura a la velocidad de la reacción. <br> <strong>Solución: a) i) esterificación: ácido 4-metilpentanoico + metanol → 4-metilpentanoato de metilo + H₂O; ii) oxidación: hexanal → ácido hexanoico; b) i) CH₃-C(CH₃)₂-CH(CH₃)-CHO; ii) CH₃-CH=CH-CH(CH₃)-CH₃ (trans); c) adición: 1,2-dicloropropano; el aumento de T aumenta la velocidad (Arrhenius).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) i) Formación de \\(\\ce{CH3-CH(CH3)-(CH2)2-COO-CH3}\\):</strong><br>
                            Es el <strong>4-metilpentanoato de metilo</strong>. Se obtiene por <strong>esterificación</strong> del <strong>ácido 4-metilpentanoico</strong> (\\(\\ce{CH3-CH(CH3)-CH2-CH2-COOH}\\)) con <strong>metanol</strong> (\\(\\ce{CH3OH}\\)):<br><br>
                            \\[\\ce{CH3-CH(CH3)-CH2-CH2-COOH + CH3OH <=> CH3-CH(CH3)-CH2-CH2-COO-CH3 + H2O}\\]
                        </div>
                        <div class='paso'>
                            <strong>a) ii) Oxidación del hexanal:</strong><br>
                            Reacción de <strong>oxidación</strong> de un aldehído a ácido carboxílico:<br><br>
                            \\[\\ce{CH3-(CH2)4-CHO + [O] -> CH3-(CH2)4-COOH}\\]<br>
                            Reactivo: <strong>hexanal</strong>. Producto: <strong>ácido hexanoico</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) i) 2,3,3-trimetilbutanal:</strong><br>
                            \\[\\ce{CH3-C(CH3)2-CH(CH3)-CHO}\\]
                        </div>
                        <div class='paso'>
                            <strong>b) ii) trans-4-metilpent-2-eno:</strong><br>
                            \\[\\ce{CH3-CH=CH-CH(CH3)-CH3}\\]
                            (con los grupos H en lados opuestos del doble enlace).
                        </div>
                        <div class='paso'>
                            <strong>c) Adición de Cl₂ a propeno:</strong><br>
                            Reacción de <strong>adición electrófila</strong> al doble enlace:<br><br>
                            \\[\\ce{CH3-CH=CH2 + Cl2 -> CH3-CH(Cl)-CH2(Cl)}\\]<br>
                            Reactivo: <strong>propeno</strong>. Producto: <strong>1,2-dicloropropano</strong>.<br><br>
                            <strong>Efecto de la temperatura:</strong> un aumento de temperatura incrementa la constante de velocidad según la ecuación de Arrhenius (\\(k = A\\cdot e^{-E_a/RT}\\)), por lo que <strong>aumenta la velocidad de la reacción</strong>.
                        </div>
                    `
                }
            ]
        },
        "polimeros_propiedades": {
            nombre: "3. Polímeros y Propiedades Físicas",
            problemas: [
                {
                    titulo: "Junio 2019 - Polímeros e Hidrocarburos",
                    enunciado: "a) Formule: eteno, propeno, cloroeteno y buta-1,3-dieno.<br>b) Formule y nombre el polímero obtenido a partir de eteno y el de cloroeteno.<br>c) Formule una reacción química para obtener etanol a partir de eteno.<br>d) Formule la hidrogenación total del buta-1,3-dieno y nombre el producto. <br> <strong>Solución: a) CH₂=CH₂; CH₃-CH=CH₂; CH₂=CH-Cl; CH₂=CH-CH=CH₂; b) polietileno y PVC; c) CH₂=CH₂ + H₂O → CH₃-CH₂OH; d) CH₂=CH-CH=CH₂ + 2 H₂ → butano.</strong>",
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
                    enunciado: "Razone si las siguientes afirmaciones son verdaderas o falsas:<br>a) Butanal y butanona son isómeros de función del but-3-en-1-ol. Indique grupo funcional.<br>b) La adición de HBr a propeno da mayoritariamente 1-bromopropano.<br>c) La eliminación en pentan-2-ol con \\(\\ce{H2SO4}\\) y calor da mayoritariamente pent-2-eno.<br>d) El PVC se obtiene por polimerización por condensación. <br> <strong>Solución: a) verdadero (C₄H₈O, aldehído/cetona/alcohol insaturado); b) falso (Markovnikov → 2-bromopropano); c) verdadero (Zaítsev → pent-2-eno); d) falso (es por adición).</strong>",
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
                },
                {
                    titulo: "Junio 2026 - Reacciones Generales 3B",
                    enunciado: "Responda a las siguientes cuestiones: <br>a) Escriba la reacción de polimerización del alqueno obtenido en la reacción entre el etino y el HCl. Nombre el monómero y el polímero. <br> <strong>Solución: etino + HCl → cloroeteno (CH₂=CHCl); polimerización: n CH₂=CHCl → PVC (policloruro de vinilo).</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Obtención del alqueno y su polimerización:</strong><br>
                            Reacción de adición de HCl al etino:<br><br>
                            \\[\\ce{HC\\equiv CH + HCl -> CH2=CHCl}\\]<br>
                            El alqueno obtenido es el <strong>cloroeteno</strong> (cloruro de vinilo).<br><br>
                            Polimerización por adición:<br><br>
                            \\[\\ce{n CH2=CHCl ->[cat] -[CH2-CH(Cl)]_n-}\\]<br>
                            - <strong>Monómero:</strong> cloroeteno (cloruro de vinilo).<br>
                            - <strong>Polímero:</strong> policloruro de vinilo (<strong>PVC</strong>).
                        </div>
                    `
                },
                {
                    titulo: "Junio 2026 - Polímeros 3A",
                    enunciado: "Conteste de forma razonada las siguientes cuestiones: <br>a) Nombre los siguientes compuestos e identifique el grupo funcional principal.<br> \\(\\ce{\\quad (1) CH3-CH2-CH2OH \\quad \\quad (2) (CH3)3-N \\quad \\quad (3) CH3-COO-CH3 \\quad \\quad (4) CH3-CH=CH2 \\quad \\quad (5) CH3-CH2-CHO} \\)<br>b) Escriba las reacciones correspondientes a los procesos siguientes:<br> &emsp;&emsp; iv) Obtención de un polímero a partir del compuesto (4). <br> <strong>Solución: b) iv) polimerización por adición del propeno: n CH₃-CH=CH₂ → polipropileno.</strong>",
                    solucion: `
                        <div class='paso'>
                            <strong>b) iv) Polimerización del propeno (compuesto 4):</strong><br>
                            El compuesto (4) es el <strong>propeno</strong> (\\(\\ce{CH3-CH=CH2}\\)). Se obtiene el <strong>polipropileno</strong> mediante polimerización por adición:<br><br>
                            \\[\\ce{n CH3-CH=CH2 ->[cat] -[CH2-CH(CH3)]_n-}\\]<br>
                            - <strong>Monómero:</strong> propeno.<br>
                            - <strong>Polímero:</strong> polipropileno.
                        </div>
                    `
                }
            ]
        }
    }
};                            