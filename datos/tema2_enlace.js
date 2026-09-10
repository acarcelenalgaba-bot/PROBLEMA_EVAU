if (typeof baseDatosTemas === 'undefined') {
    var baseDatosTemas = {};
}

baseDatosTemas["tema2"] = {
    id: "tema2",
    titulo: "Tema 2: Enlace Químico",
    deshabilitado: true,
    secciones: {
        "enlace_ionico": {
            nombre: "Enlace iónico",
            problemas: [
                {
                    titulo: "Ciclo de Born-Haber para el CaCl₂",
                    enunciado: "Haz un esquema del ciclo de Born-Haber para el \\(\\ce{CaCl2}\\) y calcula \\(\\Delta H^0_f\\) por mol del \\(\\ce{CaCl2 (s)}\\) utilizando los valores de las energías de los procesos:<br><br>- sublimación del calcio: \\(+178,2 \\text{ kJ}\\cdot\\text{mol}^{-1}\\)<br>- disociación de la molécula de cloro: \\(+243,2 \\text{ kJ}\\cdot\\text{mol}^{-1}\\)<br>- 1ª energía de ionización del calcio: \\(+590 \\text{ kJ}\\cdot\\text{mol}^{-1}\\)<br>- 2ª energía de ionización del calcio: \\(+1145 \\text{ kJ}\\cdot\\text{mol}^{-1}\\)<br>- afinidad electrónica del cloro: \\(-348,0 \\text{ kJ}\\cdot\\text{mol}^{-1}\\)<br>- energía de red del \\(\\ce{CaCl2}\\): \\(-2223 \\text{ kJ}\\cdot\\text{mol}^{-1}\\)",
                    solucion: `
                        < div class= 'paso' >

                            <strong>Esquema del ciclo de Born-Haber para la formación de un mol de \\(\\boldsymbol{\\ce{CaCl2 (s)}}\\):</strong><br><br>
                            <img src="img/Born_Haber_CaCl2.svg" style="height: 20em; width: auto;"> <br>
                        </div>
                        <div class='paso'>
                            <strong>Cálculo mediante la ley de Hess:</strong><br>
                            Aplicando la ley de Hess, sustituimos los valores correspondientes y operamos:<br><br>
                            \\[\\ce{ \\Delta H^0_f = \\Delta H_{sub} + \\Delta H_{1-EI} + \\Delta H_{2-EI} + \\Delta H_{dis} + 2 \\cdot \\Delta H_{AE} + U_{red} }\\]<br>
                            \\[\\ce{ \\Delta H^0_f = 178,2 \\, \\frac{kJ}{mol} + 590 \\, \\frac{kJ}{mol} + 1145 \\, \\frac{kJ}{mol} + 243,2 \\, \\frac{kJ}{mol} + 2 \\cdot \\left(-348,0 \\, \\frac{kJ}{mol}\\right) - 2223 \\, \\frac{kJ}{mol} }\\]<br>
                            \\[\\ce{ \\Delta H^0_f = \\boxed{-762,6 \\, \\text{kJ}\\cdot\\text{mol}^{-1}} }\\]
                        </div>
                    `
                },
                {
                    titulo: "Junio 2005 - Ciclo de Born-Haber del NaF",
                    enunciado: "A partir del esquema del ciclo de Born-Haber para el fluoruro de sodio:<br><img src='img/Born_Haber_NaF.svg' style='display: block; margin: 0 auto;height: 15em; width: auto;'> <br>a) Nombre las energías implicadas en los procesos 1, 2 y 3.<br>b) Nombre las energías implicadas en los procesos 4, 5 y 6.<br>c) Justifique si son positivas las energías implicadas en los procesos 1, 2, 3, 4 y 5.<br>d) En función de los tamaños de los iones justifique si la energía reticular del fluoruro sódico será mayor o menor, en valor absoluto, que la del cloruro de sodio. Justifique la respuesta.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Energías implicadas en los procesos 1, 2 y 3:</strong><br>
                            - <strong>1:</strong> Entalpía de sublimación del sodio (\\(\\Delta H_{sub}\\)).<br>
                            - <strong>2:</strong> Energía de disociación del flúor molecular (\\(\\Delta H_{dis}\\)).<br>
                            - <strong>3:</strong> Primer potencial (o energía) de ionización del sodio (\\(EI_1\\)).
                        </div>
                        <div class='paso'>
                            <strong>b) Energías implicadas en los procesos 4, 5 y 6:</strong><br>
                            - <strong>4:</strong> Afinidad electrónica del flúor (\\(AE\\)).<br>
                            - <strong>5:</strong> Energía reticular del fluoruro de sodio (\\(U_R\\)).<br>
                            - <strong>6:</strong> Entalpía de formación del fluoruro de sodio (\\(\\Delta H^0_f\\)).
                        </div>
                        <div class='paso'>
                            <strong>c) Signos de las energías (procesos 1 a 5):</strong><br>
                            - <strong>1:</strong> Es positiva (endotérmica) porque es la energía requerida para el cambio de estado sólido a gas.<br>
                            - <strong>2:</strong> Es positiva (endotérmica) porque es la energía necesaria para romper el enlace covalente F-F.<br>
                            - <strong>3:</strong> Es positiva (endotérmica) porque se debe suministrar energía para arrancar un electrón del átomo de Na.<br>
                            - <strong>4:</strong> Es negativa (exotérmica) porque es la energía que se desprende cuando el átomo de flúor capta un electrón.<br>
                            - <strong>5:</strong> Es negativa (exotérmica) porque se libera energía al formarse la red cristalina a partir de sus iones en estado gaseoso.
                        </div>
                        <div class='paso'>
                            <strong>d) Comparación de energías reticulares (NaF vs NaCl):</strong><br>
                            La energía reticular depende inversamente de la distancia interiónica (tamaño de los iones). Como el anión cloruro (\\(\\ce{Cl^-}\\)) tiene mayor radio iónico que el anión fluoruro (\\(\\ce{F^-}\\)), la distancia interiónica en el NaCl es mayor que en el NaF.<br><br>
                            Por tanto, la energía reticular del fluoruro de sodio (\\(\\ce{NaF}\\)) será <strong>mayor en valor absoluto</strong> que la del cloruro de sodio (\\(\\ce{NaCl}\\)).
                        </div>
                    `
                },
                {
                    titulo: "Energía Reticular (NaF vs NaCl)",
                    enunciado: "En función del tamaño de los iones, justifica si la energía reticular del fluoruro de sodio será mayor o menor, en valor absoluto, que la del cloruro de sodio.",
                    solucion: `
                        <div class='paso'>
                            <strong>Justificación en función del tamaño iónico:</strong><br>
                            La energía reticular (\\(U_R\\)) de un cristal iónico es inversamente proporcional a la distancia interiónica (\\(r_0 = r_+ + r_-\\)), según la ley de Coulomb y la ecuación de Born-Landé:<br><br>
                            \\[ |U_R| \\propto \\frac{|Z_+ \\cdot Z_-|}{r_0} \\]<br>
                            En ambos compuestos el catión es el mismo (\\(\\ce{Na^+}\\)) y las cargas iónicas son idénticas (+1 y -1). Por lo tanto, la diferencia estriba en el tamaño del anión.<br><br>
                            Como el anión fluoruro (\\(\\ce{F^-}\\)) pertenece al periodo 2 y el anión cloruro (\\(\\ce{Cl^-}\\)) al periodo 3, el radio del fluoruro es menor que el del cloruro (\\(r_{\\ce{F^-}} < r_{\\ce{Cl^-}}\\)).<br><br>
                            Al ser menor la distancia interiónica en el NaF, la fuerza de atracción electrostática es mayor. Por consiguiente, <strong>la energía reticular del NaF es mayor en valor absoluto que la del NaCl</strong> (\\(|U_R(\\ce{NaF})| > |U_R(\\ce{NaCl})|\\)).
                        </div>
                    `
                },
                {
                    titulo: "Propiedades de Compuestos Iónicos: Punto de Fusión, Dureza y Solubilidad",
                    enunciado: "Dadas las energías reticulares de las siguientes sustancias en \\(\\text{kJ}\\cdot\\text{mol}^{-1}\\): &nbsp;&nbsp;&nbsp;&nbsp; \\(\\ce{NaF}: -914\\); &nbsp;&nbsp; \\(\\ce{NaCl}: -770\\); &nbsp;&nbsp; \\(\\ce{NaBr}: -728\\)<br>Razona cómo varían y ordena las sustancias según su punto de fusión, dureza y solubilidad en agua.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Punto de fusión:</strong><br>
                            Todas las sustancias son sólidos iónicos. Para fundir un compuesto iónico se debe suministrar energía para romper la red cristalina; cuanto mayor sea la energía reticular (en valor absoluto), más fuerte es el enlace y mayor será la temperatura necesaria para fundirlo.<br>
                            <strong>Orden de mayor a menor punto de fusión:</strong><br>
                            \\[ \\ce{NaF} > \\ce{NaCl} > \\ce{NaBr} \\]
                        </div>
                        <div class='paso'>
                            <strong>b) Dureza:</strong><br>
                            La dureza mide la resistencia a ser rayado, lo que implica romper enlaces en la superficie del cristal. A mayor energía reticular en valor absoluto, mayor será la dureza del compuesto.<br>
                            <strong>Orden de mayor a menor dureza:</strong><br>
                            \\[ \\ce{NaF} > \\ce{NaCl} > \\ce{NaBr} \\]
                        </div>
                        <div class='paso'>
                            <strong>c) Solubilidad en agua:</strong><br>
                            La solubilidad de un compuesto iónico disminuye al aumentar la estabilidad de la red cristalina (mayor \\(|U_R|\\)), ya que resulta más difícil separar los iones mediante la solvatación. Por tanto, las sustancias con menor energía reticular serán más solubles.<br>
                            <strong>Orden de mayor a menor solubilidad:</strong><br>
                            \\[ \\ce{NaBr} > \\ce{NaCl} > \\ce{NaF} \\]
                        </div>
                    `
                },
                {
                    titulo: "Energía Reticular y Solubilidad de Haluros de Alcalinos",
                    enunciado: "Supón que los sólidos cristalinos CsBr, NaBr y KBr cristalizan con el mismo tipo de red.<br>a) Ordénalos de mayor a menor según su energía reticular. Justifica tu respuesta.<br>b) Razona cuál de ellos será menos soluble.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Orden de energía reticular (de mayor a menor):</strong><br>
                            La energía reticular de un sólido iónico es directamente proporcional al producto de sus cargas e inversamente proporcional a la distancia entre sus núcleos (suma de radios iónicos):<br>
                            \\[ |U_R| \\propto \\frac{|Z_+ \\cdot Z_-|}{r_+ + r_-} \\]<br>
                            Los tres compuestos comparten el mismo anión (\\(\\ce{Br^-}\\)) y todos los cationes (\\(\\ce{Na^+}\\), \\(\\ce{K^+}\\), \\(\\ce{Cs^+}\\)) pertenecen al grupo 1 de los alcalinos con carga +1. Descendiendo en el grupo, el radio iónico aumenta debido al incremento en el número de capas electrónicas:<br>
                            \\[ r(\\ce{Na^+}) < r(\\ce{K^+}) < r(\\ce{Cs^+}) \\]<br>
                            A menor radio catiónico, menor es la distancia interiónica y mayor la energía reticular.<br><br>
                            <strong>Orden de mayor a menor energía reticular:</strong><br>
                            \\[ U_R(\\ce{NaBr}) > U_R(\\ce{KBr}) > U_R(\\ce{CsBr}) \\]
                        </div>
                        <div class='paso'>
                            <strong>b) Menor solubilidad:</strong><br>
                            Cuanto mayor es la energía de red de un compuesto iónico, más estable es el cristal y más energía se requiere para separar sus iones en el proceso de disolución. De los tres compuestos, el <strong>\\(\\ce{NaBr}\\)</strong> es el que tiene mayor energía reticular y, por tanto, será el <strong>menos soluble</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Dureza Comparativa de Óxidos Alcalinotérreos (MgO vs CaO)",
                    enunciado: "Sabiendo que en los compuestos iónicos la dureza depende de la energía reticular, ¿por qué la dureza del MgO es superior a la del CaO?",
                    solucion: `
                        <div class='paso'>
                            <strong>Justificación de la mayor dureza del MgO:</strong><br>
                            Ambos compuestos son iónicos formados por el mismo anión óxido (\\(\\ce{O^{2-}}\\)) y cationes del grupo 2 de los alcalinotérreos (\\(\\ce{Mg^{2+}}\\) y \\(\\ce{Ca^{2+}}\\)), compartiendo las mismas cargas (+2 y -2).<br><br>
                            La diferencia reside en la distancia interiónica. El magnesio pertenece al periodo 3 y el calcio al periodo 4, por lo que el radio iónico del magnesio es menor que el del calcio (\\(r_{\\ce{Mg^{2+}}} < r_{\\ce{Ca^{2+}}}\\)).<br><br>
                            Al ser menor el tamaño del catión \\(\\ce{Mg^{2+}}\\), la distancia de enlace en el MgO es menor y, según la ecuación de Born-Landé, su energía reticular es superior a la del CaO.<br><br>
                            Como la dureza depende directamente de la energía de red, resulta más difícil deformar o rayar la superficie del cristal de MgO, por lo que <strong>la dureza del MgO es superior a la del CaO</strong>.
                        </div>
                    `
                }

            ]
        },
        "covalente": {
            nombre: "Enlace Covalente",
            problemas: [
                {
                    titulo: "Septiembre 2017",
                    enunciado: "Para las moléculas BF<sub>3</sub>, PF<sub>3</sub> y CF<sub>4</sub>:<br>a) Represente sus estructuras de Lewis.<br>b) Determine cuál es su geometría y la hibridación del átomo central.<br>c) Justifique si alguna de ellas es una molécula polar.",
                    solucion: `
                        <div class= 'paso'>
                            a) 
                            BF<sub>3</sub>: \\(\\hspace{0.5cm}\\) <img src="img/septiembre17_lewis_BF3.svg" style="width: 7em;"> \\(\\hspace{3.5cm}\\) 
                            PF<sub>3</sub>: \\(\\hspace{0.5cm}\\)  <img src="img/septiembre17_lewis_PF3.svg" style="width: 7em;"> \\(\\hspace{3.5cm}\\) 
                            CF<sub>4</sub>: \\(\\hspace{0.5cm}\\)  <img src="img/septiembre17_lewis_CF4.svg" style="width: 7em;"> \\(\\hspace{0.5cm}\\) 
                        </div >
                        <div class='paso'>
                            b) En CF<sub>4</sub> hay 4 parejas de electrones enlazantes en torno al átomo central, luego la hibridación es sp<sup>3</sup> y tendrá geometría tetraédrica.<br>En PF<sub>3</sub> hay 3 parejas de electrones enlazantes y una no enlazante en torno al átomo central, luego la hibridación es sp<sup>3</sup> y tendrá geometría piramidal triangular.<br>En BF<sub>3</sub> hay 3 parejas de electrones enlazantes y ninguna no enlazante en torno al átomo central, luego la hibridación es sp<sup>2</sup> y tendrá geometría triangular.
                        </div>
                        <div class='paso'>
                            c) Los enlaces C-F, B-F y P-F son polares, pero en el caso de CF<sub>4</sub> y BF<sub>3</sub> la geometría hace que se cancelen y la molécula sea apolar, por lo que solamente es polar PF<sub>3</sub>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2018",
                    enunciado: "Considerando las sustancias CO<sub>2</sub> y NH<sub>3</sub>.<br>a) Represente e indique la geometría molecular en base al modelo de repulsión entre los pares de electrones de la capa de valencia (RPECV).<br>b) Indique la hibridación del átomo central.<br>c) Indique qué tipo de fuerza intermolecular contribuye preferentemente a mantener las sustancias del enunciado en estado líquido.<br>d) Explique cuál tiene mayor punto de ebullición.",
                    solucion: `
                        <div class= 'paso'>
                        a) En NH<sub>3</sub> hay 4 pares de electrones en torno al átomo central (3 pares asociados a cada enlace simple N-H y 1 un par de electrones libres no enlazantes, ya que el átomo central N tiene 5 electrones de valencia y se han utilizado 3 en los 3 enlaces, quedando 2).<br> Según el modelo de repulsión de pares de electrones de la capa de valencia, esos 4 pares se disponen en la posición más alejada entre ellos que es en los vértices de un tetraedro estando el átomo central en el centro del tetraedro, por lo que la geometría molecular es piramidal triangular. <br> En CO<sub>2</sub> hay 2 grupos de electrones en torno al átomo central (2 pares asociados a cada enlace doble C=O) y no hay pares de electrones libres, ya que el átomo central C tiene 4 electrones de valencia y se han utilizado 4 en los 2 enlaces dobles, por lo que no queda ninguno. Según el modelo de repulsión de pares de electrones de la capa de valencia, esos 2 grupos se disponen en la posición más alejada entre ellos que es en posiciones opuestas, por lo que la geometría molecular es lineal.
                        </div>
                        
                        <div class= 'paso'>
                        b) En NH<sub>3</sub> la hibridación es sp<sup>3</sup>, y en CO<sub>2</sub> la hibridación es sp.
                        </div>

                        <div class= 'paso'>
                        c) En NH<sub>3</sub> hay varios tipos de fuerzas intermoleculares, que de mayor a menor intensidad son: enlace de hidrógeno y fuerzas de Van Der Waals: Dipolo permanente-dipolo permanente al ser una molécula polar, dipolo instantáneo-dipolo inducido (\"de dispersión ó de London\").<br>En CO<sub>2</sub>, al ser una molécula apolar, solo hay dipolo instantáneo-dipolo inducido (\"de dispersión ó de London\").
                        </div>

                        <div class= 'paso'>
                        d) La temperatura de ebullición de una sustancia está asociada a vencer las fuerzas de cohesión de las unidades estructurales, que en estos dos casos son moléculas. Al haber fuerzas intermoleculares más intensas en NH<sub>3</sub> que en CO<sub>2</sub> (comentado en apartado c), la temperatura de ebullición es mayor en en el NH<sub>3</sub>.
                        </div>
                    `
                },
                {
                    titulo: "Julio 2018",
                    enunciado: "Para las moléculas NH<sub>3</sub> y CO<sub>2</sub>:<br>a) Justifique el número de pares de electrones enlazantes y los pares libres del átomo central.<br>b) Indique su geometría y la hibridación que presenta el átomo central.<br>c) Justifique las fuerzas intermoleculares que presentan.<br>d) Explique su polaridad.",
                    solucion: "a) En NH<sub>3</sub> hay 3 parejas de electrones enlazantes en torno al átomo central (una pareja asociada a cada enlace simple N-H) y una pareja de electrones libres no enlazantes, ya que el átomo central N tiene 5 electrones de valencia y se han utilizado 3 en los 3 enlaces, quedando 2.<br>En CO<sub>2</sub> hay 4 parejas de electrones enlazantes en torno al átomo central (2 parejas asociadas a cada enlace doble C=O) y no hay pares de electrones libres, ya que el átomo central C tiene 4 electrones de valencia y se han utilizado 4 en los 2 enlaces dobles, por lo que no queda ninguno.<br>b) En NH<sub>3</sub> la hibridación es sp<sup>3</sup> y presenta geometría piramidal triangular.<br>En CO<sub>2</sub> la hibridación es sp y presenta geometría lineal.<br>c) En NH<sub>3</sub> hay varios tipos de fuerzas intermoleculares, que de mayor a menor intensidad son: enlace de hidrógeno y fuerzas de Van Der Waals: Dipolo permanente-dipolo permanente al ser una molécula polar, dipolo instantáneo-dipolo inducido (\"de dispersión ó de London\").<br>En CO<sub>2</sub>, al ser una molécula apolar, solo hay dipolo instantáneo-dipolo inducido (\"de dispersión ó de London\").<br>d) El CO<sub>2</sub> es una molécula apolar porque aunque sus enlaces son polares su geometría lineal hace que se cancelen.<br>El NH<sub>3</sub> es una molécula polar porque sus enlaces son polares y su geometría piramidal triangular hace que no se cancelen."
                },
                {
                    titulo: "Junio 2019",
                    enunciado: "Para las moléculas BCl<sub>3</sub> y PCl<sub>3</sub>:<br>a) Justifique el número de pares de electrones enlazantes y de pares libres del átomo central.<br>b) Indique su geometría molecular y la hibridación que presenta el átomo central.<br>c) Explique su polaridad.<br>d) Indique las fuerzas intermoleculares que presentan.",
                    solucion: "a) BCl<sub>3</sub> hay 3 parejas de electrones enlazantes en torno al átomo central (una pareja asociada a cada enlace simple B-Cl) y ninguna pareja de electrones libres no enlazantes, ya que el átomo central B tiene 3 electrones de valencia y se han utilizado 3 en los 3 enlaces.<br>PCl<sub>3</sub> hay 4 parejas de electrones enlazantes en torno al átomo central (una pareja asociada a cada enlace simple P-Cl) y una pareja de electrones libres no enlazantes, ya que el átomo central P tiene 5 electrones de valencia y se han utilizado 3 en los 3 enlaces.<br>b) BCl<sub>3</sub>: Hibridación sp<sup>2</sup> en el átomo central (B). Los tres orbitales híbridos forma un enlace σ con cada átomo de cloro, y el orbital p no hibridado queda vacío sin electrones. Geometría triangular plana, ángulos de 120°.<br>PCl<sub>3</sub>: Hibridación sp<sup>3</sup> en el átomo central (P). Los tres orbitales híbridos forma un enlace σ con cada átomo de cloro, y el orbital p no hibridado queda ocupado con 2 electrones. Geometría piramidal, ocupando el fosforo el vértice de la pirámide con el par de electrones no enlazantes encima.<br>c) BCl<sub>3</sub>: los enlaces son polares pero la geometría hace que la moléculas sea apolar.<br>PCl<sub>3</sub>: los enlaces son polares y la geometría hace que la molécula sea polar.<br>d) BCl<sub>3</sub>: al ser la moléculas apolar, las únicas fuerzas intermoleculares fuerzas de Van Der Waals: dipolo instantáneo-dipolo inducido (\"de dispersión ó de London\").<br>PCl<sub>3</sub>: hay varios tipos de fuerzas intermoleculares, que de mayor a menor intensidad son: fuerzas de Van Der Waals: dipolo permanente-dipolo permanente al ser una molécula polar, dipolo instantáneo-dipolo inducido (\"de dispersión ó de London\")."
                },
                {
                    titulo: "Julio 2019",
                    enunciado: "Para cada una de las siguientes moléculas: BF<sub>3</sub> y CH<sub>3</sub>Cl.<br>a) Dibuje su estructura de Lewis.<br>b) Justifique el número de pares de electrones enlazantes y el de pares libres del átomo central.<br>c) Dibuje e indique su geometría molecular aplicando el método de repulsión de pares de electrones de la capa de valencia (RPECV).<br>d) Justifique su polaridad.",
                    solucion: "a) BF<sub>3</sub>: ; CH<sub>3</sub>Cl: (Las estructuras de Lewis / geometrías se representaban gráficamente en el documento original; no se han podido reproducir en este formato.)<br>b) En BF<sub>3</sub> hay 3 parejas de electrones enlazantes en torno al átomo central (una pareja asociada a cada enlace simple B-F) y ninguna pareja de electrones libres no enlazantes, ya que el átomo central B tiene 3 electrones de valencia y se han utilizado 3 en los 3 enlaces.<br>En CH<sub>3</sub>Cl hay 4 parejas de electrones enlazantes en torno al átomo central (una pareja asociada a cada enlace simple C-H y otra pareja asociada al enlace C-Cl) y ninguna pareja de electrones libres no enlazantes, ya que el átomo central C tiene 4 electrones de valencia y se han utilizado 4 en los 4 enlaces.<br>c) Mediante el diagrama de Lewis y TRPECV se puede razonar:<br>BF<sub>3</sub> tiene 3 nubes electrónicas rodeando el átomo de B y se disponen en los vértices de un triángulo equilátero, por lo que la geometría es triangular plana (el ángulo F-B-F es de 120°).<br>CH<sub>3</sub>Cl tiene 4 nubes electrónicas rodeando el átomo de C y se disponen en los vértices de un tetraedro, por lo que la geometría es tetraédrica (el ángulo H-C-H es aproximadamente de 109°), aunque el mayor volumen de la nube electrónica del átomo de Cl repelerá más los H y el ángulo H-C-H será algo menor y el H-C-Cl algo mayor.<br>d) En BF<sub>3</sub> los enlaces son polares e idénticos, y la geometría hace que la polaridad global sea nula y sea un molécula apolar.<br>En CH<sub>3</sub>Cl los enlaces son polares, pero no son idénticos y la geometría no hace que se cancelen, por lo que la molécula será polar (momento dipolar dirigido hacia el átomo de cloro)"
                },
                {
                    titulo: "Junio 2020",
                    enunciado: "B.1. Para las moléculas H<sub>2</sub>O y PF<sub>3</sub>.<br>a) Justifique el número de pares de electrones enlazantes y los pares libres del átomo central.<br>b) Indique la hibridación que presenta el átomo central y su geometría.<br>c) Explique su polaridad.<br>d) Indique el tipo de fuerzas intermoleculares.",
                    solucion: "a) H<sub>2</sub>O tiene 2 pares enlazantes (uno por cada enlace simple H-O) y 2 pares libres porque el O de sus 6 e<sup>-</sup> externos ha utilizado sólo 2, uno por cada enlace;<br>PF<sub>3</sub> tiene 3 pares enlazantes (uno por cada enlace simple P-F) y 1 par libre, ya que el P de sus 5 e<sup>-</sup> externos ha utilizado sólo 3, uno por cada enlace.<br>b) En el H<sub>2</sub>O, geometría angular, el O presenta hibridación sp<sup>3</sup>.<br>En el PF<sub>3</sub>, geometría de pirámide trigonal, el P presenta hibridación sp<sup>3</sup>.<br>c) Ambas son polares porque tienen momentos dipolares de enlace que no están compensados por su geometría.<br>d) El H<sub>2</sub>O tiene enlace de hidrógeno, fuerzas dipolo-dipolo y fuerzas de dispersión (fuerzas de London).<br>El PF<sub>3</sub> tiene fuerzas dipolo-dipolo y fuerzas de dispersión."
                },
                {
                    titulo: "Septiembre 2020",
                    enunciado: "B.1. Responda las siguientes cuestiones:<br>a) Para la molécula NF<sub>3</sub>, indique la hibridación del átomo central, número de orbitales híbridos y número de electrones en cada orbital híbrido.<br>b) Justifique si la molécula NF<sub>3</sub> es polar o apolar.<br>c) Explique la solubilidad del propan-2-ol en agua en función de las fuerzas intermoleculares existentes.",
                    solucion: "a) En la molécula NF<sub>3</sub> el átomo central es nitrógeno, que tiene 5 electrones en la capa de valencia. Presenta hibridación con cuatro orbitales sp<sup>3</sup> de los cuales tres forman enlaces simples con los átomos de cloro (en cada orbital híbrido hay un electrón del nitrógeno y uno del cloro), y un orbital con dos electrones no enlazantes.<br>b) El enlace N-F es polar ya que el flúor es más electronegativo, y la geometría molecular, que es piramidal triangular, hace que la molécula sea polar.<br>c) El propan-2-ol (CH<sub>3</sub>-CHOH-CH<sub>3</sub>) es una molécula polar (los átomos de carbono tienen orbitales híbridos sp<sup>3</sup> y la geometría de los enlaces de cada carbono es tetraédrica), y además presenta fuerzas intermoleculares de puente de hidrógeno por el H del grupo alcohol unido a O. Al ser el agua también una molécula polar y que presenta fuerzas intermoleculares de puente de hidrógeno, el propan2-ol sí será soluble en agua."
                },
                {
                    titulo: "Junio 2021",
                    enunciado: "B.1. Responda las siguientes cuestiones:<br>a) Justifique si la molécula NH<sub>3</sub> es polar utilizando la teoría de hibridación y su geometría.<br>b) Explique si los siguientes compuestos presentan enlace de hidrógeno: H<sub>2</sub>O, CH<sub>4</sub> y HCl.<br>c) Justifique por qué el bromuro de sodio tiene un punto de fusión menor que el cloruro de sodio.",
                    solucion: "a) NH<sub>3</sub> es una molécula polar. El átomo central N presenta hibridación sp<sup>3</sup>. La geometría es una pirámide trigonal. Los enlaces N-H son polares y sus momentos dipolares no se cancelan entre sí, ni con el momento dipolar debido a los dos electrones no enlazantes, por lo que su momento dipolar total no es nulo.<br>b) Solo el H<sub>2</sub>O, porque los H están unidos al O que es un átomo muy electronegativo y pequeño.<br>c) NaBr y NaCl presentan enlace iónico y forman redes cristalinas. La energía reticular que hay que vencer para fundir el sólido (punto de fusión) es mayor en NaCl. Ambos aniones tienen la misma carga, pero el tamaño del átomo de Cl es menor que el del Br, y la energía reticular depende de la relación carga/radio que es mayor para el NaCl."
                },
                {
                    titulo: "Julio 2021",
                    enunciado: "B.1. Considere las moléculas NCl<sub>3</sub> y AlCl<sub>3</sub>.<br>a) Dibuje sus estructuras de Lewis.<br>b) Justifique las fuerzas intermoleculares presentes en el compuesto que forma cada molécula.<br>c) Indique la hibridación y el número de pares de electrones enlazantes y libres del átomo central de cada una de ellas.",
                    solucion: "a) NCl<sub>3</sub>: AlCl<sub>3</sub>: (Las estructuras de Lewis / geometrías se representaban gráficamente en el documento original; no se han podido reproducir en este formato.)<br>b) NCl<sub>3</sub>: fuerzas dipolo-dipolo, ya que tiene enlaces polares y sus momentos dipolares no se anulan por geometría y fuerzas de dispersión (fuerzas de London).<br>AlCl<sub>3</sub>: fuerzas de dispersión (fuerzas de London), ya que aunque tiene enlaces polares sus momentos dipolares se anulan por geometría.<br>c) N: sp<sup>3</sup>, 3 pares de electrones enlazantes y 1 par de electrones libres.<br>Al: sp<sup>2</sup>, 3 pares de electrones enlazantes y no tiene electrones libres."
                },
                {
                    titulo: "Julio 2022",
                    enunciado: "B.1. Considere las moléculas NaBr, NH<sub>3</sub>, CH<sub>4</sub> y HCl.<br>a) Justifique, mediante el tipo de enlace y las distintas fuerzas intermoleculares presentes, qué punto de ebullición corresponde a cada molécula: - 33,3 °C, - 85,1 °C, 1396 °C y - 161,6 °C.<br>b) Indique la hibridación del átomo central y la geometría de las moléculas NH<sub>3</sub> y CH<sub>4</sub>.",
                    solucion: "a) NaBr: 1396 °C. Sólido con enlace iónico, formando una red tridimensional cristalina con intensas fuerzas electrostáticas entre sus iones, por lo que presenta alta temperatura de ebullición.<br>NH<sub>3</sub>: - 33,3 °C. Sustancia molecular con enlace covalente entre sus átomos y tiene fuerzas intermoleculares de enlaces de hidrógeno, de dipolo-dipolo (por ser polar) y de dispersión (o de London).<br>HCl: - 85,1 °C. Sustancia molecular con enlace covalente y fuerzas intermoleculares dipolo-dipolo (por ser polar) y de dispersión.<br>CH<sub>4</sub>: - 161,6 °C. Sustancia molecular con enlace covalente y sólo fuerzas intermoleculares de dispersión (por ser apolar).<br>b) NH<sub>3</sub>: N hibridación sp<sup>3</sup>, geometría pirámide trigonal (tetraédrica)<br>CH<sub>4</sub>: C hibridación sp<sup>3</sup>, geometría tetraédrica."
                },
                {
                    titulo: "Julio 2023",
                    enunciado: "B.1. Para las moléculas: NH<sub>3</sub> y SH<sub>2</sub>.<br>a) Indique y represente la geometría molecular aplicando el método de repulsión de pares de electrones de la capa de valencia (RPECV).<br>b) Indique la hibridación del átomo central.<br>c) Justifique su polaridad.<br>d) Justifique la fuerza intermolecular más importante que presenta cada una de ellas.",
                    solucion: "a) NH<sub>3</sub>: pirámide trigonal. (Las estructuras de Lewis / geometrías se representaban gráficamente en el documento original; no se han podido reproducir en este formato.)<br>SH<sub>2</sub>: angular.<br>b) N: sp<sup>3</sup>. S: sp<sup>3</sup>.<br>c) NH<sub>3</sub>: polar. Los enlaces son muy polares y el par de electrones en el N también contribuye a la polaridad.<br>SH<sub>2</sub>: polar. Los enlaces son polares y los pares de electrones en el S también contribuyen a la polaridad. Los momentos dipolares no se anulan en ninguna de las dos moléculas.<br>d) NH<sub>3</sub>: La más importante es el enlace de hidrógeno. El nitrógeno, además de poseer un par de electrones no enlazados y tener un carácter muy electronegativo, es muy pequeño.<br>SH<sub>2</sub>: La más importante es la dipolo-dipolo, ya que tiene momento dipolar permanente."
                },
                {
                    titulo: "Junio 2024",
                    enunciado: "B.1. Considere las moléculas: PF<sub>3</sub> y OCS, y responda a las siguientes cuestiones:<br>a) Represente sus estructuras de Lewis e indique cuántos pares de electrones no enlazantes tiene el átomo central.<br>b) Indique y represente sus geometrías moleculares de acuerdo con la teoría RPECV, y escriba la hibridación del átomo central.<br>c) Justifique la polaridad de cada una.",
                    solucion: "a) PF<sub>3</sub> el átomo central (P) tiene un par no enlazante. (Las estructuras de Lewis / geometrías se representaban gráficamente en el documento original; no se han podido reproducir en este formato.)<br>OCS: el átomo central (C) no tiene pares no enlazantes.<br>b) PF<sub>3</sub>: pirámide trigonal P: sp<sup>3</sup><br>OCS: lineal C: sp<br>c) PF<sub>3</sub> es polar porque los enlaces son polares, con momentos dipolares que no se cancelan por geometría, además de tener un par de electrones libres sobre el átomo central.<br>OCS es polar porque sus enlaces son polares, con momentos dipolares que no se cancelan por simetría ya que tienen distinta magnitud."
                },
                {
                    titulo: "Julio 2024",
                    enunciado: "B.1. Para cada una de las moléculas PF<sub>3</sub> y BCl<sub>3</sub><br>a) Indique su geometría molecular según la teoría RPECV.<br>b) Indique la hibridación que presenta el átomo central.<br>c) Justifique su polaridad y escriba el tipo de fuerzas intermoleculares que presenta.<br>d) Razone cuál de ellas es más soluble en agua.",
                    solucion: "a) PF<sub>3</sub>: pirámide trigonal BCl<sub>3</sub>: trigonal plana (Las estructuras de Lewis / geometrías se representaban gráficamente en el documento original; no se han podido reproducir en este formato.)<br>b) P: sp<sup>3</sup><br>B: sp<sup>2</sup><br>c) PF<sub>3</sub> es polar porque los enlaces son polares, con momentos dipolares que no se cancelan por geometría, además de tener un par de electrones libres sobre el átomo central.<br>BCl<sub>3</sub> es apolar porque sus enlaces son polares, con momentos dipolares pero se cancelan por simetría.<br>d) La molécula de PF<sub>3</sub> es polar luego es más soluble en agua que la molécula de BCl<sub>3</sub> que es apolar."
                },
                {
                    titulo: "Junio 2025",
                    enunciado: "2B) Considere las siguientes moléculas, cuyas temperaturas de ebullición se indican entre paréntesis:<br>CH<sub>3</sub>OH (338 K), HCHO (254 K) y CH<sub>4</sub> (111 K):<br>a) Dibuje la estructura de Lewis de los tres compuestos.<br>b) Indique la hibridación del átomo de carbono y la geometría de cada una de las moléculas del enunciado utilizando el modelo de RPECV.<br>c) Justifique los diferentes valores de las temperaturas de ebullición indicadas.<br>d) ¿Cuál/es es/son soluble/s en agua? Justifique la respuesta.",
                    solucion: ``
                },
                {
                    titulo: "Julio 2025",
                    enunciado: "2B) Responda a las siguientes cuestiones relacionadas con las moléculas tricloruro de boro, ácido etanoico y clorometano.<br>a) Dibuje la estructura de Lewis de cada molécula.<br>b) Determine la geometría molecular a partir de la teoría de repulsión de pares electrónicos de la capa de valencia (RPECV) del tricloruro de boro y el clorometano. Indique la polaridad de esas moléculas y las fuerzas intermoleculares que se establecen.<br>c) Justifique cuál de las tres moléculas presenta mayor temperatura de ebullición.<br>d) Indique la hibridación de cada uno de los átomos de carbono de las moléculas dadas.",
                    solucion: ``
                },
                {
                    titulo: "Junio 2026",
                    enunciado: "2A) Considere los siguientes compuestos: LiF, PCl<sub>3</sub>, CH<sub>3</sub>Br y LiI.<br>a) Para los compuestos covalentes, indique la geometría molecular según la teoría de repulsión de los pares de electrones de la capa de valencia (TRPECV), y la hibridación del átomo central.<br>Justifique la polaridad.<br>b) Justifique cuál de los sólidos iónicos tiene mayor energía de red, suponiendo que todos cristalizan con el mismo tipo de red.<br>c) Explique razonadamente qué tipo de interacciones hay que vencer en cada uno de los siguientes procesos:<br>i) ebullición del CH3Br, ii) fusión del LiF.",
                    solucion: ``
                },
                {
                    titulo: "Julio 2026",
                    enunciado: "2B) Considere las moléculas BCl<sub>3</sub>, NH<sub>3</sub>, SCl<sub>2</sub>, CO<sub>2</sub> y HCHO, y conteste a las siguientes cuestiones:<br>a) Indique su geometría molecular, según la teoría de repulsión de pares de electrones de la capa de valencia (TRPECV), y la hibridación que presenta el átomo central de cada una de ellas.<br>b) Justifique su polaridad y escriba el tipo de fuerzas intermoleculares que presentan.<br>c) Explique si el BCl<sub>3</sub> y el NH<sub>3</sub> se comportan como ácidos o bases de Lewis.",
                    solucion: ``
                }
            ]
        },
        "intermoleculares": {
            nombre: "Fuerzas intermoleculares",
            problemas: [
                {
                    titulo: "Junio 2014",
                    enunciado: "Con los datos recogidos en la tabla adjunta conteste razonadamente a las siguientes preguntas:<br> <table border='1' style='border-collapse: collapse; text-align: center; margin: 10px auto; width: 80%;'><tr><th>Sustancia</th><th>H<sub>2</sub>O</th><th>HF</th><th>HCl</th><th>Cl<sub>2</sub></th></tr><tr><td><strong>T. ebullición (°C)</strong></td><td>100</td><td>20</td><td>-85</td><td>-34</td></tr></table> a) ¿Por qué la temperatura de ebullición normal de HF es mayor que la del HCl?<br> b) ¿Por qué la temperatura de ebullición normal de H<sub>2</sub>O es mayor que la del Cl<sub>2</sub>?<br> c) ¿Por qué la temperatura de ebullición normal de HCl es menor que la del Cl<sub>2</sub>?<br> d) ¿Cuál de las sustancias de la tabla presentará menor punto de fusión?",
                    solucion: `
                    <div class='paso'>a) El HF tiene mayor temperatura de ebullición que el HCl ya que las fuerzas intermoleculares son mayores al presentar enlace por puente de hidrógeno, que no está presente en HCl, que tiene fuerzas intermoleculares asociadas a ser una molécula polar.</div>
                    <div class='paso'>b) El H<sub>2</sub>O tiene mayor temperatura de ebullición que el Cl<sub>2</sub> ya que las fuerzas intermoleculares son mayores al presentar enlace por puente de hidrógeno, que no está presente en Cl<sub>2</sub>, que tiene fuerzas intermoleculares asociadas a ser una molécula apolar.</div>
                    <div class='paso'>c) La temperatura de ebullición del HCl es inferior a la del Cl<sub>2</sub> porque al ser la molécula Cl<sub>2</sub> mayor que la molécula HCl aumenta el número de electrones, disminuye la atracción electrostática y crece la probabilidad de formación de dipolos instantáneos, aumentando, en difinitiva, la intensidad de las fuerzas de London en el cloro, y superando a las fuerzas dipolo-dipolo permanente en el cloruro de hidrógeno.</div>
                    <div class='paso'>d) El mayor punto de fusión será el de H<sub>2</sub>O, ya que tiene las fuerzas intermoleculares más intensas: puente de hidrógeno; y entre HF y H<sub>2</sub>O, hay mayor posibilidad de puentes de hidrógeno en el agua. Ambas son polares y el agua tiene mayor masa molecular por lo que las fuerzas de dispersión serán mayores, pero las fuerzas predominantes si existen son las de puente de hidrógeno. Para elegir entre ambas, la temperatura de fusión será mayor en H<sub>2</sub>O ya que cada molécula puede formar mayor número de puentes de hidrógeno que cada molécula de HF.</div>
                    `
                },
                {
                    titulo: "Junio 2014",
                    enunciado: "Considere las moléculas OF<sub>2</sub>, monóxido de carbono y metanol.<br>a) Escriba sus estructuras de Lewis.<br>b) Justifique su geometría.<br>c) Razone si son o no polares.<br>d) Indique razonadamente para cuál de ellas se espera mayor punto de ebullición.",
                    solucion: `
                    <div class='paso'>a)<br>    <div style="display: flex; align-items: center; flex-wrap: wrap; gap: 200px; margin-top: 5px; margin-left: 20px;">
                        <div style="display: inline-flex; align-items: center; gap: 30px;">
                        <span>OF<sub>2</sub>:</span>
                        <img src="img/lewis_OF2.svg" style="height: 2em; width: auto;">
                        </div>
                        <div style="display: inline-flex; align-items: center; gap: 30px;"><span>CO:</span>
                        <img src="img/lewis_CO.svg" style="height: 2em; width: auto;">
                        </div>
                        <div style="display: inline-flex; align-items: center; gap: 30px;"><span>CH<sub>3</sub>OH:</span>
                        <img src="img/lewis_CH3OH.svg" style="height: 7em; width: auto;">
                        </div>
                    </div>
                    </div>

                    <div class='paso'>
                        b) OF<sub>2</sub>: Geometría angular, ángulo algo menor de 109 °. El O tiene cuatro grupos de electrones que lo rodean, dos de ellos asociados a los enlaces y otras dos parejas de electrones no compartidos. La repulsión entre estos cuatro grupos hace que se alejen lo máximo entre sí, siendo la geometría la de un tetraedro en el que el O está en el centro; en dos vértices, dos átomos de F y en los otros dos, dos pares de electrones. El ángulo es algo menor de 109 ° por la repulsión de los pares de electrones no compartidos.<br>CO: Geometría lineal, son solamente dos átomos<br>CH<sub>3</sub>OH: Geometría tetraédrica centrada en el C, geometría angular centrada en el O, con ángulo algo menor de 109 °. El C tiene cuatro pares de electrones que lo rodena, y los cuatro pares forman enlaces, se disponen en los vértices de un tetraedro. El O tiene cuatro grupos de electrones que lo rodean, dos de ellos asociados a los enlaces C-O y O-H y otros dos parejas de electrones no compartidos. La repulsión entre estos cuatro grupos hace que se alejen lo máximo entre sí, siendo la geometría la de un tetraedro en el que el O está en el centro, en dos vértices dos átomos de C y H y en los otros dos dos pares de electrones. El ángulo es algo menor de 109 ° por la repulsión de los pares de electrones no compartidos.
                    </div>
                    <div class='paso'>
                        c) OF<sub>2</sub> será polar, ya que los enlaces son polares y por la geometría no se cancelan.<br>CO será polar, ya que hay un único enlace entre átomos de distinta electronegatividad.<br>El metanol será polar (la geometría no cancela la polaridad de los enlaces individuales)
                    </div>
                    <div class='paso'>
                        d) La temperatura de ebullición de una sustancia está asociada a vencer las fuerzas de cohesión de las unidades estructurales. Las tres sustancias son moleculares, pero solamente en el metanol hay fuerzas asociadas a puentes de hidrógeno y en las otras dos fuerzas de Van der Waals, menos intensas, por lo que el metanol tiene la mayor temperatura de ebullición."
                    </div>
                    `
                },
                {
                    titulo: "Septiembre 2017",
                    enunciado: "Considere los compuestos NH<sub>3</sub>, CH<sub>4</sub> y HF e indique razonadamente:<br>a) Qué tipo de enlace presentan.<br>b) Cuál o cuáles son polares.<br>c) Aquéllos compuestos con enlace de hidrógeno.<br>d) Cuál de ellos es más ácido, basándose en criterios de electronegatividad.",
                    solucion: `
                        <div class='paso'>
                            a) NH<sub>3</sub>: enlace covalente, N y H son no metales.<br>CH<sub>4</sub>: enlace covalente, C y H son no metales<br>HF: enlace covalente, H y F son no metales.
                        </div>
                        <div class='paso'>
                            b) Los enlaces N-H, C-H y H-F son polares, En NH<sub>3</sub> la geometría es piramidal triangular, y sí es polar. En CH<sub>4</sub> la geometría es tetraédrica y la molécula es apolar. En HF la molécula es polar al tener geometría lineal.
                        </div>
                        <div class='paso'>
                            c) El enlace de hidrógeno se presenta en enlaces de H con átomos pequeños y electronegativos (N, O y F), por lo que solamente está presente en HF.
                        </div>
                        <div class='paso'>
                            d) En todos ellos el H se combina con distintos elementos. El elemento más electronegativo es el F, y HF será el más ácido, ya que es el que el F atrae más a los electrones del H, y puede formar F- haciendo que se libere un H+. C y N están más a la izquierda que F en el mismo segundo periodo, por lo que son menos electronegativos.
                        </div>
                        `
                }
            ]
        },
        "tipos_enlace": {
            nombre: "Tipos de enlace ",
            problemas: [
                {
                    titulo: "Junio 2013",
                    enunciado: "Considere los compuestos: óxido de estroncio, bromuro de hidrógeno, tetracloruro de carbono y yoduro de magnesio.<br>a) Formúlelos.<br>b) Razone el tipo de enlace que posee cada uno. <br>c) Explique la geometría de la molécula de tetracloruro de carbono. <br>d) Justifique la solubilidad en agua de los compuestos que tienen enlace covalente.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Formulación de los compuestos:</strong><br>
                            - Óxido de estroncio: \\(\\quad \\ce{SrO}\\)<br>
                            - Bromuro de hidrógeno: \\(\\quad \\ce{HBr}\\)<br>
                            - Tetracloruro de carbono: \\(\\quad \\ce{CCl4}\\)<br>
                            - Yoduro de magnesio: \\(\\quad \\ce{MgI2}\\)
                        </div>
                        <div class='paso'>
                            <strong>b) Razonamiento del tipo de enlace:</strong><br>
                            - <strong>\\(\\ce{SrO}\\):</strong> Enlace iónico, por la unión entre un metal (Sr) de baja electronegatividad y un no metal (O) de alta electronegatividad.<br>
                            - <strong>\\(\\ce{HBr}\\):</strong> Enlace covalente, por la unión entre dos no metales (H y Br) que comparten electrones.<br>
                            - <strong>\\(\\ce{CCl4}\\):</strong> Enlace covalente, unión entre dos no metales (C y Cl).<br>
                            - <strong>\\(\\ce{MgI2}\\):</strong> Enlace iónico, unión entre un metal (Mg) y un no metal (I).
                        </div>
                        <div class='paso'>
                            <strong>c) Geometría de la molécula de tetracloruro de carbono:</strong><br>
                            La molécula \\(\\ce{CCl4}\\) tiene geometría tetraédrica, con el átomo de carbono en el centro y los cuatro átomos de cloro en los vértices del tetraedro. Esto se debe a que el carbono tiene cuatro pares de electrones enlazantes y no tiene pares libres, lo que permite una distribución simétrica de los átomos alrededor del carbono.
                        </div>
                        <div class='paso'>
                            <strong>d) Solubilidad en agua de los compuestos con enlace covalente:</strong><br>
                            - \\(\\ce{HBr}\\): Es soluble en agua debido a su polaridad y capacidad para formar enlaces de hidrógeno con las moléculas de agua.<br>
                            - \\(\\ce{CCl4}\\): Es insoluble en agua porque es una molécula apolar y no puede interactuar eficazmente con las moléculas polares de agua.
                        </div>
                        `
                },
                {
                    titulo: "Junio 2017",
                    enunciado: "Considere las sustancias \\(\\ce{F2}\\), \\(\\ce{HCl}\\), \\(\\ce{Ni}\\) y \\(\\ce{KBr}\\).<br>a) Indique el tipo de enlace que presenta cada una de ellas.<br>b) Justifique si conducen la corriente eléctrica y en qué condiciones.",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Tipo de enlace de cada sustancia:</strong><br>
                            - <strong>\\(\\ce{F2}\\):</strong> Enlace covalente no polar, ya que el flúor es un no metal unido a otro átomo idéntico.<br>
                            - <strong>\\(\\ce{HCl}\\):</strong> Enlace covalente polar, formado por dos no metales (H y Cl).<br>
                            - <strong>\\(\\ce{Ni}\\):</strong> Enlace metálico, red tridimensional de cationes níquel rodeados de un mar de electrones deslocalizados.<br>
                            - <strong>\\(\\ce{KBr}\\):</strong> Enlace iónico, formado por la atracción electrostática entre un metal (K) y un no metal (Br).
                        </div>
                        <div class='paso'>
                            <strong>b) Conductividad eléctrica y condiciones:</strong><br>
                            - <strong>\\(\\ce{Ni}\\) (metálico):</strong> Conduce la corriente eléctrica tanto en estado sólido como líquido gracias a la movilidad del mar de electrones deslocalizados.<br>
                            - <strong>\\(\\ce{KBr}\\) (iónico):</strong> En estado sólido no conduce la corriente porque sus iones ocupan posiciones fijas en la red. Sin embargo, sí conduce en estado fundido o en disolución acuosa, al quedar los iones libres para desplazarse.<br>
                            - <strong>\\(\\ce{F2}\\) y \\(\\ce{HCl}\\) (covalentes moleculares):</strong> En estado puro no conducen la corriente eléctrica por carecer de cargas móviles (electrones o iones). <em>Nota: El \\(\\ce{HCl}\\) al disolverse en agua se ioniza formando \\(\\ce{H3O ^ +}\\) y \\(\\ce{Cl ^ -}\\), conduciendo la electricidad en disolución acuosa.</em>
                        </div>
                        `
                },
                {
                    titulo: "Julio 2022",
                    enunciado: "B.1. Considere las sustancias Cl<sub>2</sub>, HBr, Fe y KI.<br>a) Indique el tipo de enlace que presenta cada una de ellas.<br>b) Justifique si conducen la corriente eléctrica a temperatura ambiente.<br>c) Escriba las estructuras de Lewis de aquellas que sean covalentes.<br>d) Justifique si cada una de ellas es soluble en agua o no.",
                    solucion: `
                        <div class='paso'>
                            a) Cl<sub>2</sub> y HBr presentan enlace covalente, Fe presenta enlace metálico y KI presenta enlace iónico. (Las estructuras de Lewis / geometrías se representaban gráficamente en el documento original; no se han podido reproducir en este formato.)
                        </div>
                        <div class='paso'>
                            b) Solo conduce la electricidad, a temperatura ambiente, el Fe por ser metálico y poseer electrones que se mueven fácilmente. Las moléculas covalentes no conducen la electricidad y la sustancia iónica (KI) tampoco porque a temperatura ambiente es sólida y no es posible el movimiento de sus cargas.<br>
                            c) d) El agua es polar, por lo que solo serán solubles HBr por ser covalente polar y KI por ser iónica.
                        </div>
                        `
                },
                {
                    titulo: "Septiembre 2015",
                    enunciado: "Indique si las siguientes afirmaciones son verdaderas o falsas, justificando su respuesta:<br>a) En la molécula de etino, los dos átomos de carbono comparten entre sí dos pares de electrones.<br>b) La entalpía de vaporización del agua es mayor que la del sulfuro de hidrógeno.<br>c) El cloruro de sodio en disolución acuosa conduce la electricidad.<br>d) El carbono puro en forma de diamante presenta enlace metálico.",
                    solucion: `
                        <div class='paso'>
                            a) Falso. Etino (CH ≡ CH) tiene un enlace triple, formado por un enlace sigma y dos pi. En cada enlace se comparte un par de electrones, por lo que los átomos de carbono comparten 3 pares de electrones, no 2 pares.
                        </div>
                        <div class='paso'>
                            b) Verdadero. La entalpía de vaporización de una sustancia está asociada a vencer las fuerzas de cohesión de las unidades estructurales. Ambas sustancias son moleculares, pero en el agua las fuerzas están asociadas a puentes de hidrógeno y en el sulfuro de hidrógeno solamente a fuerzas dipolo permanente-dipolo permanente, menos intensas.
                        </div>
                        <div class='paso'>
                            c) Verdadero. NaCl es una sustancia iónica, en disolución acuosa se disocia en sus iones, Na<sup>+</sup> y Cl<sup>-</sup> y conduce la electricidad.
                        </div>
                        <div class='paso'>
                            d) Falso. El carbono en forma de diamante es un cristal covalente, una red \"indefinida\" de átomos de carbono unidos entre sí por enlaces covalentes.
                        </div>
                    `
                },
                {
                    titulo: "Curva de Energía Potencial y Teoría de Bandas",
                    enunciado: "a) Explique, ayudándose de un esquema de la curva de energía potencial frente a la distancia interatómica (E vs r), por qué se forma un enlace químico entre dos átomos y defina los conceptos de distancia de enlace y energía de enlace. <br> b)Utilizando la Teoría de Bandas, explique razonadamente por qué el magnesio es un buen conductor de la electricidad mientras que el azufre sólido es un aislante, haciendo referencia explícita a la banda de valencia, la banda de conducción y la banda prohibida (gap).",
                    solucion: `
                        <div class='paso'>
                            <strong>a)Explicación del enlace químico mediante la curva de energía potencial:</strong><br>
                            <img src="img/energia_enlace.png" style="width: 40em;"> <br>
                            La curva de energía potencial frente a la distancia interatómica (E vs r) muestra cómo varía la energía del sistema formado por dos átomos a medida que se acercan o se alejan entre sí. A grandes distancias, la energía es alta debido a la falta de interacción entre los átomos. A medida que se acercan, la energía disminuye hasta alcanzar un mínimo, que corresponde a la distancia de enlace (r<sub>0</sub>). En este punto, las fuerzas atractivas (debidas a la interacción entre los electrones y núcleos) equilibran las fuerzas repulsivas (debidas a la repulsión entre los núcleos y los electrones). La energía en este mínimo es la energía de enlace (E<sub>0</sub>), que representa la cantidad de energía necesaria para separar los átomos hasta el infinito.<br><br>
                            <strong>Definiciones:</strong><br>
                            - <strong>Distancia de enlace (r<sub>0</sub>):</strong> Es la distancia entre los núcleos de dos átomos en un enlace químico cuando el sistema se encuentra en su estado de mínima energía.<br>
                            - <strong>Energía de enlace (E<sub>0</sub>):</strong> Es la energía requerida para romper el enlace químico y separar los átomos hasta una distancia infinita, es decir, la profundidad del pozo de energía en la curva E vs r.
                        </div>
                        <div class='paso'>
                            <strong>b) Explicación de la conductividad eléctrica mediante la Teoría de Bandas:</strong><br>
                            En la Teoría de Bandas, los electrones en un sólido ocupan bandas de energía. La banda de valencia es la banda más alta que está completamente llena de electrones a temperatura cero, mientras que la banda de conducción es la banda inmediatamente superior que puede aceptar electrones libres para conducir electricidad. La banda prohibida (gap) es el rango de energía entre estas dos bandas donde no existen estados electrónicos permitidos.<br><br>
                            - <strong>Magnesio (Mg):</strong> Es un metal con una banda de valencia parcialmente llena y una banda de conducción superpuesta o muy cercana, lo que permite que los electrones se muevan libremente bajo un campo eléctrico, haciendo del magnesio un buen conductor de electricidad.<br>
                            - <strong>Azufre sólido (S):</strong> Es un no metal con una banda de valencia completamente llena y una banda de conducción separada por un gap amplio. Debido a esta gran separación, los electrones no pueden saltar a la banda de conducción bajo condiciones normales, lo que hace que el azufre sólido sea un aislante eléctrico.
                        </div>`
                },
                {
                    titulo: "Cuestiones de Enlace Químico y Propiedades",
                    enunciado: "Contesta, de forma razonada, las siguientes cuestiones:<br>a) ¿Cuál de los siguientes compuestos: óxido de calcio y cloruro de cesio, será más soluble en agua?<br>b) ¿Qué metal tiene mayor punto de fusión, el potasio o el cobre?<br>c) ¿Quién conduce mejor la corriente eléctrica, un cristal de nitrato de cinc o una disolución de esta sustancia?",
                    solucion: `
                        <div class='paso'>
                            <strong>a) Solubilidad en agua (CaO vs CsCl):</strong><br>
                            La energía reticular depende de forma determinante del producto de las cargas de los iones (\\(|U_R| \\propto |Z_1 \\cdot Z_2|\\)). En el óxido de calcio (\\(\\ce{Ca ^ { 2+}}\\ce{O ^ { 2-}}\\)) las cargas son (+2, -2) produciendo un producto de carga igual a 4, mientras que en el cloruro de cesio (\\(\\ce{Cs ^ {+}}\\ce{Cl ^ {-}}\\)) las cargas son (+1, -1) dando un producto igual a 1.<br><br>
                            La energía reticular del CaO es aproximadamente cuatro veces superior a la del CsCl, lo que hace que la red del CaO sea extremadamente difícil de romper. Por ello, <strong>es más soluble en agua el cloruro de cesio (CsCl)</strong>.
                        </div>
                        <div class='paso'>
                            <strong>b) Mayor punto de fusión (Potasio vs Cobre):</strong><br>
                            El punto de fusión en los metales depende de la fuerza del enlace metálico, la cual aumenta con el número de electrones de valencia aportados al mar de electrones y disminuye con el radio atómico.<br><br>
                            El potasio (K, grupo 1) aporta solo 1 electrón de valencia y tiene un radio grande. El cobre (Cu, metal de transición) aporta electrones d y s, y posee un radio atómico sensiblemente menor. Por consiguiente, la atracción metálica en el cobre es mucho más fuerte y <strong>el elemento con mayor punto de fusión es el cobre</strong>.
                        </div>
                        <div class='paso'>
                            <strong>c) Conductividad eléctrica (Cristal de Zn(NO₃)₂ vs Disolución):</strong><br>
                            El nitrato de cinc es un compuesto iónico. En estado cristalino (sólido), los iones \\(\\ce{Zn ^ { 2+}}\\) y \\(\\ce{NO3 ^ -}\\) ocupan posiciones fijas en la red cristalina y no pueden moverse, por lo que no conduce la corriente eléctrica.<br><br>
                            En disolución acuosa, el cristal se disocia e ioniza completamente, dejando los iones libres para desplazarse hacia los electrodos. Por tanto, <strong>conduce mejor la corriente eléctrica la disolución acuosa de nitrato de cinc</strong>.
                        </div>
                    `
                },
                {
                    titulo: "Junio 2017",
                    enunciado: "Conteste razonadamente las preguntas referidas a las sustancias: sulfuro de hidrógeno, diamante, etilamina, yodo molecular, platino y cloruro de calcio.<br>a) Cuál/cuáles presentan enlace de hidrógeno.<br>b) Cuál/cuáles son conductoras de la electricidad y en qué condiciones lo son.<br>c) ¿Hay alguna insoluble en agua?<br>d) ¿Es la temperatura de fusión del cloruro de calcio mayor o menor que la del yodo molecular?",
                    solucion: `
                        <div class='paso'>
                            Sulfuro de hidrógeno: \\(\\quad \\) H<sub>2</sub>S \\(\\quad \\) \\(\\quad \\) diamante: \\(\\quad \\) C \\(\\quad \\) \\(\\quad \\) etilamina: \\(\\quad \\) CH<sub>3</sub>-CH<sub>2</sub>-NH<sub>2</sub> \\(\\quad \\) \\(\\quad \\) yodo molecular: \\(\\quad \\) I<sub>2</sub> \\(\\quad \\)\\(\\quad \\) platino: \\(\\quad \\) Pt \\(\\quad \\)\\(\\quad \\) cloruro de calcio: \\(\\quad \\) CaCl<sub>2</sub>.
                            <br>a) <br> El enlace de hidrógeno se presenta en enlaces de H con átomos pequeños y electronegativos (N, O y F), por lo que solamente está presente en la etilamina.
                        </div>
                        <div class='paso'>
                            b) <br> Para ser conductor de la electricidad debe disponer de cargas móviles, lo que en estado sólido solamente ocurre en el platino que es un metal. En disolución o fundido ocurre en las sustancias iónicas como CaCl<sub>2</sub>.
                        </div>
                        <div class='paso'>
                            c) <br> Para que sea soluble en agua las fuerzas que unen las unidades estructurales de la sustancia deben ser similares a las fuerzas intermoleculares de las partículas del disolvente, de modo que el disolvente pueda desmoronar la estructura del soluto y las unidades estructurales se intercambien por las partículas del disolvente.<br>Son insolubles:<br>- El diamante (cristal covalente), la fuerza que une los átomos en el cristal son enlaces covalentes.<br>- El platino (cristal metálico), la fuerza que une los átomos en el cristal metálico es enlace metálico.<br>- El yodo molecular (sustancia molecular apolar), las fuerzas polares que realiza un disolvente polar como el agua no permiten que las moléculas apolares se disuelvan en el disolvente.<br>Son solubles:<br>Sulfuro de hidrógeno y etilamina (sustancias moleculares polares) y el cloruro de calcio (cristal iónico).
                        </div>
                        <div class='paso'>
                            d) <br> Las fuerzas a vencer para fundir una sustancia sólida son las fuerzas que unen las unidades estructurales de la sustancia: en el caso del cloruro de calcio son enlaces iónicos del cristal iónico, y en el caso de yodo molecular son fuerzas de Van Der Waals, mucho más débiles. Por lo tanto la temperatura de fusión del cloruro de calcio será mayor que la del yodo molecular.
                        </div>
                    `
                }
            ]
        }
    }
};