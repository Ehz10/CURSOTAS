/* script.js - Versão para Emergências Médicas */
document.addEventListener('DOMContentLoaded', function() {
    // ===== DADOS DOS CAPÍTULOS - EMERGÊNCIAS MÉDICAS =====
    const chapters = {
        1: {
            title: 'I. ANAFILAXIA E REAÇÃO ALÉRGICA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Diferenciar reação alérgica de reação anafilática</li>
                        <li>Compreender os sinais e sintomas da reação alérgica e anafilática</li>
                        <li>Conhecer a atuação para a reação alérgica e anafilática</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A <strong>alergia</strong> é uma resposta exagerada do sistema imunitário a uma substância estranha ao organismo.</p>
                    <p>A <strong>anafilaxia</strong> consiste numa reação de hipersensibilidade após ingestão, injeção, inalação ou contacto com o agente desencadeante. É caracterizada por envolvimento multissistémico que pode incluir compromisso da via aérea (edema laríngeo e broncospasmo), choque com vasodilatação e aumento da permeabilidade capilar.</p>
                    <p class="small-note">Até 40% das situações de anafilaxia não apresentam alterações da pele.</p>
                </div>

                <h2>Reação Alérgica: Sinais e Sintomas</h2>
                <div class="info-card">
                    <ul>
                        <li>Edema das mucosas (olhos, lábios)</li>
                        <li>Aumento das secreções nasais</li>
                        <li>Tosse</li>
                        <li>Dor abdominal, náuseas, vómitos e diarreia</li>
                        <li>Eritema (rubor, provocado por vasodilatação)</li>
                        <li>Prurido (comichão)</li>
                        <li>Urticária (manchas vermelhas na pele)</li>
                        <li>Alterações do estado de consciência (desorientação, zumbidos, vertigens)</li>
                        <li>Olhos vermelhos com ardor e lacrimejo</li>
                    </ul>
                </div>

                <h2>Reação Anafilática: Sinais e Sintomas</h2>
                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <p>A identificação de <strong>dois ou mais</strong> dos seguintes sinais, após contacto com alergénio, indicam a presença de uma reação anafilática:</p>
                        <ul>
                            <li>Alterações da pele e/ou mucosas (urticária, prurido, língua/lábios edemaciados)</li>
                            <li>Compromisso respiratório (dispneia, síbilos, estridor, cianose)</li>
                            <li>Hipotensão ou sintomas associados (síncope, astenia, descontrolo de esfíncteres)</li>
                            <li>Sintomas gastrointestinais persistentes (vómitos, dor abdominal, diarreia)</li>
                        </ul>
                    </div>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li><strong>Afastar</strong> o fator desencadeante, ou retirar a vítima do local, o mais precocemente possível</li>
                        <li>Administrar oxigénio de acordo com protocolo</li>
                        <li>Recolher informação: substância/alergénio, história de episódios anteriores, progressão da sintomatologia, antecedentes de alergias, hábitos farmacológicos</li>
                        <li>Perante sinais de gravidade, identificar vítima crítica e solicitar apoio diferenciado ao CODU</li>
                        <li>Transporte da vítima mantendo a via aérea permeável</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A alergia é uma resposta exagerada do sistema imunitário</li>
                        <li>A anafilaxia é uma reação sistémica grave com envolvimento multissistémico</li>
                        <li>Até 40% das anafilaxias não apresentam alterações da pele</li>
                        <li>Dois ou mais sinais indicam reação anafilática</li>
                        <li>A atuação passa por afastar o agente, administrar O2 e solicitar apoio diferenciado</li>
                    </ul>
                </div>
            `
        },
        2: {
            title: 'II. EMERGÊNCIAS RESPIRATÓRIAS',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Identificar as principais emergências respiratórias</li>
                        <li>Identificar os sinais e sintomas associados às diferentes emergências respiratórias</li>
                        <li>Conhecer a atuação específica de acordo com o tipo de emergência respiratória</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>Segundo a Sociedade Portuguesa de Pneumologia, em Portugal, as doenças respiratórias representam a <strong>terceira causa de morte</strong> prevendo-se que, até 2030, venham a ocupar o primeiro lugar.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-globe"></i>
                    <div>
                        <h4>Dados Mundiais (OMS, 2017)</h4>
                        <ul>
                            <li><strong>384 milhões</strong> de pessoas sofrem de DPOC - <strong>3 milhões</strong> de mortes/ano</li>
                            <li><strong>10 milhões</strong> desenvolvem tuberculose - <strong>1,6 milhões</strong> de mortes/ano</li>
                            <li>Cancro do Pulmão - <strong>1,76 milhões</strong> de vítimas/ano</li>
                            <li><strong>334 milhões</strong> de pessoas sofrem de asma - afeta <strong>14%</strong> das crianças</li>
                        </ul>
                    </div>
                </div>

                <div class="definition-box">
                    <h3>Insuficiência Respiratória</h3>
                    <p>É a incapacidade de entregar aos tecidos oxigénio em quantidade adequada e remover destes o dióxido de carbono em excesso.</p>
                </div>

                <h2>Emergências Respiratórias no Pré-Hospitalar</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li>Asma</li>
                            <li>DPOC (Doença Pulmonar Obstrutiva Crónica)</li>
                            <li>Infeções respiratórias</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li>Pneumotórax</li>
                            <li>Tromboembolismo pulmonar (TEP)</li>
                            <li>Neoplasia do pulmão</li>
                        </ul>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>As doenças respiratórias são a 3ª causa de morte em Portugal</li>
                        <li>A insuficiência respiratória é a incapacidade de oxigenar e remover CO2</li>
                        <li>As emergências respiratórias mais comuns: Asma, DPOC, infeções, pneumotórax, TEP</li>
                    </ul>
                </div>
            `
        },
        3: {
            title: 'III. ASMA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender a fisiopatologia da asma</li>
                        <li>Identificar os sinais e sintomas da asma</li>
                        <li>Conhecer a atuação na crise asmática</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Definição</h3>
                    <p>A <strong>asma</strong> ou asma brônquica é uma doença inflamatória crónica das vias aéreas. As vias aéreas cronicamente inflamadas tornam-se <strong>hiper-reativas e obstruídas</strong>, limitando o fluxo de ar.</p>
                </div>

                <h2>Fatores Desencadeantes</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li>Alergénios (ácaros, pelo de animais, pólenes)</li>
                            <li>Exercício físico</li>
                            <li>Fármacos (aspirina, AINEs)</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li>Irritantes químicos</li>
                            <li>Fumo do tabaco</li>
                            <li>Infeções virais</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-lungs"></i>
                    <div>
                        <h4>Sintoma Principal</h4>
                        <p>O principal sintoma da asma é a <strong>dispneia</strong> (dificuldade ventilatória) que ocorre principalmente na fase expiratória. O som sibilante característico é a <strong>pieira</strong>.</p>
                    </div>
                </div>

                <h2>Tipos de Crise</h2>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Sinais e Sintomas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Crise Ligeira</strong></td>
                                <td>Calma ou ligeiramente ansiosa • Dispneia com a marcha • Pieira discreta • FR normal ou ligeiramente elevada</td>
                            </tr>
                            <tr>
                                <td><strong>Crise Moderada</strong></td>
                                <td>Ansiedade • Dispneia em pequenos esforços • Prefere estar sentada • Incapacidade de completar frases • Pieira • Músculos acessórios e tiragens • FR aumentada • SpO2 ↓ • FC ↑</td>
                            </tr>
                            <tr>
                                <td><strong>Crise Grave</strong></td>
                                <td>Ansiedade ou agitação • Dispneia em repouso • Posição de tripé • Incapacidade de completar frases • Músculos acessórios e tiragens • FR e FC ↑</td>
                            </tr>
                            <tr>
                                <td><strong>Paragem Respiratória Iminente</strong></td>
                                <td>Prostração ou desorientação • Sons ventilatórios inaudíveis (silêncio ventilatório) • Apneia • Bradicardia</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Atuação na Asma</h2>
                <div class="info-card">
                    <ul>
                        <li>Remover fator desencadeante ou retirar a vítima do local</li>
                        <li>Posicionar vítima para facilitar a respiração (elevação do tronco)</li>
                        <li>Administrar oxigénio de acordo com protocolo</li>
                        <li>Recolher informação: início de sintomas, história de episódios anteriores, sintomas associados, fatores desencadeantes, medicação habitual</li>
                        <li>Minimizar esforços</li>
                        <li>Perante sinais de gravidade, solicitar apoio diferenciado ao CODU</li>
                        <li>Transportar em posição de Fowler (elevação da cabeceira a 45º)</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A asma é uma doença inflamatória crónica das vias aéreas</li>
                        <li>O principal sintoma é a dispneia com pieira na expiração</li>
                        <li>As crises variam de ligeiras a graves, podendo levar à paragem ventilatória</li>
                        <li>O "silêncio ventilatório" é um sinal de gravidade extrema</li>
                        <li>Posicionar em Fowler e administrar O2</li>
                    </ul>
                </div>
            `
        },
        4: {
            title: 'IV. DPOC',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender a fisiopatologia da DPOC</li>
                        <li>Identificar os sinais e sintomas da DPOC</li>
                        <li>Conhecer a atuação na agudização da DPOC</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Definição</h3>
                    <p>A <strong>DPOC</strong> (Doença Pulmonar Obstrutiva Crónica) é uma situação em que existe uma obstrução <strong>permanente</strong> à passagem de ar ao nível dos brônquios, devido a inflamação permanente destes.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Dados em Portugal</h4>
                        <p>Segundo a Sociedade Portuguesa de Pneumologia (2019), estimava-se que <strong>800 mil portugueses</strong> tinham DPOC. Prevalece em indivíduos com <strong>mais de 40 anos</strong>.</p>
                    </div>
                </div>

                <h2>Fatores de Risco</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li>Tabagismo (principal fator)</li>
                            <li>Doenças profissionais (poeiras e produtos químicos)</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li>Infeções recorrentes</li>
                            <li>Predisposição genética</li>
                        </ul>
                    </div>
                </div>

                <h2>Patologias que Contribuem para a DPOC</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Bronquite Crónica</h4>
                        <p>Inflamação dos brônquios, caracterizada pela produção diária de <strong>tosse e expetoração</strong>.</p>
                    </div>
                    <div class="info-card">
                        <h4>Enfisema Pulmonar</h4>
                        <p>Alvéolos dilatam e ocorre fusão entre grupos de alvéolos, reduzindo a superfície de contacto para as trocas gasosas.</p>
                    </div>
                </div>

                <h2>Comorbilidades Associadas</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li>Doenças cardiovasculares</li>
                            <li>Disfunção muscular periférica</li>
                            <li>Neoplasia do pulmão</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li>Osteoporose e osteopenia</li>
                            <li>Ansiedade e depressão</li>
                            <li>Síndrome metabólica</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-wind"></i>
                    <div>
                        <h4>Atenção à Oxigenoterapia na DPOC</h4>
                        <p>Algumas vítimas de DPOC ventilam através do <strong>hypoxic drive</strong> (estímulo respiratório usa O2 em vez de CO2).</p>
                        <p>Os valores de SpO2 alvo são <strong>88-92%</strong>. Um aumento significativo pode diminuir o estímulo ventilatório, podendo levar à <strong>paragem ventilatória</strong>.</p>
                    </div>
                </div>

                <h2>Atuação na DPOC</h2>
                <div class="info-card">
                    <ul>
                        <li>Posicionar vítima para facilitar a respiração (elevação do tronco)</li>
                        <li>Perante secreções que a vítima não consegue expelir, proceder à <strong>aspiração</strong></li>
                        <li>Administrar oxigénio com alvo de SpO2 <strong>88-92%</strong></li>
                        <li>Recolher informação: início de sintomas, história de agudizações, comorbilidades, medicação habitual, oxigenoterapia no domicílio</li>
                        <li>Minimizar esforços</li>
                        <li>Perante sinais de gravidade, solicitar apoio diferenciado ao CODU</li>
                        <li>Transportar em posição de Fowler (45º)</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A DPOC é uma obstrução permanente dos brônquios</li>
                        <li>O principal fator de risco é o tabagismo</li>
                        <li>O enfisema e a bronquite crónica são as patologias mais comuns</li>
                        <li>Os valores de SpO2 alvo são <strong>88-92%</strong></li>
                        <li>O hypoxic drive pode ser um mecanismo de ventilação nestes doentes</li>
                        <li>Não administrar O2 em excesso para não suprimir o estímulo ventilatório</li>
                    </ul>
                </div>
            `
        },
        5: {
            title: 'V. EDEMA AGUDO DO PULMÃO',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender a fisiopatologia do EAP</li>
                        <li>Identificar os sinais e sintomas do EAP</li>
                        <li>Conhecer a atuação no EAP</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Definição</h3>
                    <p>O <strong>edema agudo do pulmão (EAP)</strong> é a acumulação de fluido nos alvéolos e espaço intersticial pulmonar, proveniente dos capilares pulmonares, o que impede o aporte de oxigénio, dificulta as trocas gasosas e provoca uma oxigenação deficiente.</p>
                </div>

                <h2>Mecanismos do EAP</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Aumento da Pressão Vascular</h4>
                        <ul>
                            <li>Insuficiência cardíaca</li>
                            <li>Enfarte agudo do miocárdio</li>
                            <li>Crise hipertensiva</li>
                            <li>Doença valvular</li>
                            <li>Insuficiência renal</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Aumento da Permeabilidade</h4>
                        <ul>
                            <li>Infeções</li>
                            <li>Consumo de drogas (heroína, cocaína)</li>
                            <li>Intoxicação por ácido acetilsalicílico (AAS)</li>
                        </ul>
                    </div>
                </div>

                <h2>Sinais e Sintomas</h2>
                <div class="info-card">
                    <ul>
                        <li><strong>Secreções aquosas, espumosas e de coloração rosada</strong> (patognomónico)</li>
                        <li>Cianose</li>
                        <li>Dispneia</li>
                        <li>Ortopneia (intolerância à posição supina)</li>
                        <li>FR aumentada</li>
                        <li>Sensação de afogamento</li>
                        <li><strong>Farfalheira</strong> (ou fervores) - "panela de água a ferver"</li>
                        <li>Ansiedade e agitação</li>
                        <li>FC aumentada</li>
                        <li>PA aumentada (na maioria dos casos)</li>
                        <li>Palidez e sudorese</li>
                    </ul>
                </div>

                <h2>Atuação no EAP</h2>
                <div class="info-card">
                    <ul>
                        <li><strong>Posicionar sentada ou Fowler, com as pernas pendentes</strong> (diminui o retorno venoso)</li>
                        <li>Administrar oxigénio de acordo com protocolo</li>
                        <li>Recolher informação: início de sintomas, história de episódios anteriores, antecedentes de patologia cardíaca, medicação habitual</li>
                        <li>Minimizar esforços</li>
                        <li>Perante sinais de gravidade, solicitar apoio diferenciado ao CODU</li>
                        <li>Transportar em posição de Fowler, com as pernas pendentes</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>O EAP é a acumulação de fluido nos alvéolos</li>
                        <li>Secreções espumosas e rosadas são características</li>
                        <li>A farfalheira é o ruído característico</li>
                        <li>Posicionar <strong>sentado com pernas pendentes</strong> para diminuir o retorno venoso</li>
                        <li>É uma emergência que requer apoio diferenciado</li>
                    </ul>
                </div>
            `
        },
        6: {
            title: 'VI. INFECÇÃO RESPIRATÓRIA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Identificar os tipos de infeção respiratória</li>
                        <li>Conhecer os sinais e sintomas</li>
                        <li>Conhecer a atuação nas infeções respiratórias</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Definição</h3>
                    <p>A infeção respiratória ocorre quando uma parte do aparelho respiratório é infetada por um microrganismo (vírus, bactéria, fungo ou parasita).</p>
                </div>

                <h2>Tipos de Infeção por Localização</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li><strong>Nariz</strong> - Rinite</li>
                            <li><strong>Seios perinasais</strong> - Sinusite</li>
                            <li><strong>Faringe</strong> - Faringite</li>
                            <li><strong>Laringe</strong> - Laringite</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li><strong>Brônquios</strong> - Bronquite, Bronquiolite</li>
                            <li><strong>Pulmão</strong> - Pneumonias, Tuberculose</li>
                            <li><strong>Pleura</strong> - Pleurite</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-shield-halved"></i>
                    <div>
                        <h4>Medidas Profiláticas</h4>
                        <p>A contaminação ocorre por contacto direto através da projeção de <strong>gotículas de saliva ou expetoração</strong>.</p>
                        <p>As medidas mais eficazes são:</p>
                        <ul>
                            <li>Colocação de máscara por parte do doente</li>
                            <li>Higienização das mãos</li>
                        </ul>
                    </div>
                </div>

                <h2>Sinais e Sintomas</h2>
                <div class="info-card">
                    <ul>
                        <li>Expetação purulenta</li>
                        <li>Congestão e corrimento nasal</li>
                        <li>Tosse</li>
                        <li>Febre</li>
                        <li>Mialgias (dores musculares)</li>
                        <li>Astenia (fraqueza, cansaço)</li>
                    </ul>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Posicionar vítima para facilitar a respiração (sentada ou Fowler)</li>
                        <li>Administrar oxigénio de acordo com protocolo</li>
                        <li>Recolher informação: início de sintomas, história de episódios anteriores, contacto com pessoas com infeção respiratória, medicação habitual</li>
                        <li>Minimizar esforços</li>
                        <li>Perante sinais de gravidade, solicitar apoio diferenciado ao CODU</li>
                        <li>Transportar em posição de Fowler (45º)</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>As infeções respiratórias podem afetar qualquer parte do aparelho respiratório</li>
                        <li>A contaminação ocorre por gotículas</li>
                        <li>A máscara e a higienização das mãos são medidas profiláticas eficazes</li>
                        <li>Podem causar agravamento de doenças pulmonares existentes</li>
                    </ul>
                </div>
            `
        },
        7: {
            title: 'VII. PNEUMOTÓRAX',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender a fisiopatologia do pneumotórax</li>
                        <li>Identificar os sinais e sintomas</li>
                        <li>Conhecer a atuação no pneumotórax</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Definição</h3>
                    <p>O <strong>pneumotórax</strong> caracteriza-se pela existência de ar no interior da cavidade pleural.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Fatores de Risco</h4>
                        <ul>
                            <li>Jovens entre 20-40 anos</li>
                            <li>Sexo masculino</li>
                            <li>Altos, magros e fumadores</li>
                            <li>Doenças: asma, pneumonia, DPOC</li>
                            <li>Ventilação com pressão positiva (CPAP, tubo endotraqueal)</li>
                        </ul>
                    </div>
                </div>

                <h2>Sinais e Sintomas</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li>Desvio da traqueia (tardio)</li>
                            <li>Ingurgitamento jugular</li>
                            <li>Enfisema subcutâneo</li>
                            <li>Cianose</li>
                            <li>Dispneia</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li>Respiração superficial</li>
                            <li>Assimetria da parede torácica</li>
                            <li>Dor intensa tipo pontada ou facada</li>
                            <li>Pele pálida</li>
                            <li>Sudorese</li>
                            <li>Sinais de choque: hipotensão, taquicardia, taquipneia</li>
                        </ul>
                    </div>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Posicionar vítima para facilitar a respiração (sentada ou Fowler)</li>
                        <li>Administrar oxigénio de acordo com protocolo</li>
                        <li>Recolher informação: início de sintomas, história de episódios anteriores, situações com alteração de pressão atmosférica (voo/mergulho), hábitos tabágicos, características da vítima, trauma torácico</li>
                        <li>Minimizar esforços</li>
                        <li>Perante sinais de gravidade, solicitar apoio diferenciado ao CODU</li>
                        <li>Transportar em posição de Fowler (45º)</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>O pneumotórax é a presença de ar na cavidade pleural</li>
                        <li>Pode ocorrer espontaneamente ou por trauma</li>
                        <li>O pneumotórax hipertensivo é uma emergência com risco de vida</li>
                        <li>O desvio da traqueia é um sinal tardio</li>
                        <li>Pode ocorrer em indivíduos jovens, altos, magros e fumadores</li>
                    </ul>
                </div>
            `
        },
        8: {
            title: 'VIII. EMERGÊNCIAS CARDIOVASCULARES',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Identificar as principais emergências cardiovasculares</li>
                        <li>Identificar os sinais e sintomas da dor torácica de origem cardíaca</li>
                        <li>Compreender os sinais e sintomas da disseção da aorta</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>As doenças cardiovasculares são a <strong>principal causa de morte no mundo</strong>, segundo a OMS. Estima-se que <strong>17,9 milhões</strong> de pessoas morreram por estas doenças em 2016, representando <strong>31%</strong> de todas as mortes a nível global.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-heart"></i>
                    <div>
                        <h4>Dados em Portugal (INE, 2019)</h4>
                        <ul>
                            <li><strong>7.151</strong> óbitos por doença isquémica do coração (6,4% da mortalidade total)</li>
                            <li><strong>4.275</strong> mortes por EAM (60% das mortes por doenças isquémicas)</li>
                        </ul>
                    </div>
                </div>

                <h2>Fatores de Risco para Doenças Cardiovasculares</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Modificáveis</h4>
                        <ul>
                            <li>Hipertensão</li>
                            <li>Obesidade</li>
                            <li>Diabetes Mellitus</li>
                            <li>Sedentarismo</li>
                            <li>Etilismo</li>
                            <li>Stress</li>
                            <li>Dislipidemia</li>
                            <li>Tabagismo</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Não Modificáveis</h4>
                        <ul>
                            <li>Sexo</li>
                            <li>Idade</li>
                            <li>Genéticos</li>
                        </ul>
                    </div>
                </div>

                <h2>Principais Emergências Cardiovasculares</h2>
                <div class="info-card">
                    <ul>
                        <li>Dor torácica de origem cardíaca</li>
                        <li>Aneurisma e dissecção da aorta</li>
                        <li>Trombembolismo</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>As doenças cardiovasculares são a principal causa de morte no mundo</li>
                        <li>A aterosclerose é um importante fator de risco</li>
                        <li>Os fatores de risco modificáveis devem ser alvo de prevenção</li>
                        <li>As principais emergências são: dor torácica, dissecção da aorta e TEP</li>
                    </ul>
                </div>
            `
        },
        9: {
            title: 'IX. DOR TORÁCICA DE ORIGEM CARDÍACA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender a fisiopatologia da dor torácica de origem cardíaca</li>
                        <li>Diferenciar angina de peito de EAM</li>
                        <li>Conhecer a atuação na dor torácica de origem cardíaca</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Fisiopatologia</h3>
                    <p>Uma dor cardíaca representa uma situação em que o <strong>miocárdio não está a receber a quantidade de oxigénio suficiente</strong> para as suas necessidades do momento.</p>
                    <p>A <strong>aterosclerose</strong> é a alteração das artérias mais comum, consistindo na deposição progressiva de placas de gordura no interior das artérias.</p>
                </div>

                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Angina de Peito</h4>
                        <ul>
                            <li>Causada por desequilíbrio entre aporte e necessidade de O2</li>
                            <li>Desencadeada por esforço ou emoções</li>
                            <li>Dura: 1-5 minutos (até 15 min)</li>
                            <li>Alivia com repouso ou nitratos</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Enfarte Agudo do Miocárdio</h4>
                        <ul>
                            <li>Interrupção súbita, prolongada e total da perfusão coronária</li>
                            <li>Morte celular (necrose) por deficiente irrigação</li>
                            <li>Pode ocorrer em repouso ou sono</li>
                            <li><strong>Não alivia</strong> com repouso ou nitratos</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Sintomas Atípicos</h4>
                        <p>Vítimas como <strong>idosos, mulheres e doentes com diabetes</strong> podem apresentar sintomas atípicos, podendo mesmo <strong>não manifestar dor torácica</strong>.</p>
                    </div>
                </div>

                <h2>Sinais e Sintomas</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li>Dispneia</li>
                            <li>Cansaço de início súbito</li>
                            <li>Dor/desconforto retroesternal tipo opressão, peso, ardor</li>
                            <li>Dor epigástrica</li>
                            <li>Irradiação para MS (principalmente esquerdo), pescoço, mandíbula</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li>Palpitações</li>
                            <li>Palidez</li>
                            <li>Sudorese</li>
                            <li>Náuseas e/ou vómitos</li>
                            <li>Ansiedade e agitação</li>
                            <li>Lipotimia ou síncope</li>
                            <li>Angústia</li>
                        </ul>
                    </div>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Evitar que a vítima faça esforços</li>
                        <li>Posicionar em posição de conforto</li>
                        <li>Administrar oxigénio titulado (evitar alta concentração se não houver hipoxia)</li>
                        <li>Caracterizar a dor torácica</li>
                        <li>Recolher informação: início de sintomas, história de episódios anteriores, antecedentes cardíacos, medicação habitual (nitratos)</li>
                        <li><strong>Solicitar apoio diferenciado ao CODU</strong> - ECG, Via Verde Coronária</li>
                        <li>Transportar em posição de Fowler (45º)</li>
                    </ul>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-clock"></i>
                    <div>
                        <h4>Via Verde Coronária</h4>
                        <p>A Via Verde Coronária permite que AEM, SIV e VMER agilizem a fase pré-hospitalar, encaminhando precocemente as vítimas com EAM através da coordenação com a Rede Nacional de Urgências.</p>
                        <p>O objetivo é a <strong>desobstrução da artéria</strong> (remoção do coágulo), retomando a circulação sanguínea.</p>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A aterosclerose é a causa mais comum de dor torácica cardíaca</li>
                        <li>A angina alivia com repouso; o EAM <strong>não alivia</strong></li>
                        <li>Idosos, mulheres e diabéticos podem ter sintomas atípicos</li>
                        <li>O ECG é fundamental para diagnóstico</li>
                        <li>Oxigénio titulado (não alta concentração sem indicação)</li>
                        <li>Solicitar apoio diferenciado para Via Verde Coronária</li>
                    </ul>
                </div>
            `
        },
        10: {
            title: 'X. DISSECÇÃO DA AORTA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender a fisiopatologia da dissecção da aorta</li>
                        <li>Identificar os sinais e sintomas</li>
                        <li>Conhecer a atuação na dissecção da aorta</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Definição</h3>
                    <p>A <strong>dissecção da aorta</strong> consiste no rompimento longitudinal da sua túnica interna, tendo como consequência a saída do sangue do lúmen verdadeiro da aorta para um falso lúmen.</p>
                    <p>O <strong>aneurisma</strong> consiste na dilatação de uma região débil da parede de uma artéria.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Característica da Dor</h4>
                        <p>A dor descrita por estas vítimas é muito característica:</p>
                        <ul>
                            <li>A <strong>dor mais intensa</strong> que alguma vez sentiram</li>
                            <li>Tipo <strong>dilacerante ou afiada</strong> (como um corte com uma faca)</li>
                        </ul>
                    </div>
                </div>

                <h2>Sinais e Sintomas</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li>Cianose periférica</li>
                            <li>Dor torácica ou interescapular de <strong>início súbito</strong>, muito intensa</li>
                            <li>Palidez</li>
                            <li>Sudorese</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li>Hipotensão</li>
                            <li><strong>Assimetria dos pulsos periféricos</strong> (ausência de um deles)</li>
                            <li>Diferenças nas PA entre membros >10mmHg</li>
                            <li>Síncope</li>
                        </ul>
                    </div>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>A atuação é similar à avaliação e atuação da dor de origem cardíaca</li>
                        <li>Administrar oxigénio de acordo com protocolo</li>
                        <li>Posicionar em posição de conforto</li>
                        <li>Recolher informação: início de sintomas, antecedentes de HTA, história de aneurisma</li>
                        <li>Solicitar apoio diferenciado ao CODU</li>
                        <li>Transporte precoce para unidade hospitalar com capacidade cirúrgica</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A dissecção da aorta é uma emergência com elevada mortalidade</li>
                        <li>A dor é descrita como a mais intensa e dilacerante</li>
                        <li>Assimetria de pulsos e diferenças de PA são sinais importantes</li>
                        <li>Está associada a aneurisma e HTA</li>
                        <li>Transporte precoce para hospital com capacidade cirúrgica</li>
                    </ul>
                </div>
            `
        },
        11: {
            title: 'XI. DISTÚRBIOS GASTROINTESTINAIS',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Identificar os principais distúrbios gastrointestinais</li>
                        <li>Conhecer os sinais e sintomas</li>
                        <li>Compreender a atuação</li>
                    </ul>
                </div>

                <h2>Principais Distúrbios Gastrointestinais</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li>Hemorragia digestiva</li>
                            <li>Dor abdominal</li>
                            <li>Apendicite</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li>Oclusão intestinal</li>
                            <li>Cólica renal</li>
                        </ul>
                    </div>
                </div>

                <h2>Atuação Geral</h2>
                <div class="info-card">
                    <ul>
                        <li>Caracterizar a dor de acordo com a mnemónica <strong>TILIDAS</strong></li>
                        <li>Administrar oxigénio de acordo com protocolo</li>
                        <li>Posicionar em posição de conforto que permita o alívio da dor</li>
                        <li><strong>Desaconselhar a ingestão de qualquer líquido ou alimento</strong></li>
                        <li>Recolher informação: início de sintomas, história de episódios anteriores, antecedentes de patologia digestiva, medicação habitual</li>
                        <li>Perante sinais de gravidade, solicitar apoio diferenciado ao CODU</li>
                        <li>Transporte em posição confortável (flexão dos joelhos sobre o abdómen pode aliviar)</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Os distúrbios GI incluem hemorragia digestiva, dor abdominal, apendicite, oclusão intestinal e cólica renal</li>
                        <li>Caracterizar a dor com TILIDAS</li>
                        <li>Não permitir ingestão de líquidos ou alimentos</li>
                        <li>Posicionar em posição de conforto</li>
                    </ul>
                </div>
            `
        },
        12: {
            title: 'XII. HEMORRAGIA DIGESTIVA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Classificar os tipos de hemorragia digestiva</li>
                        <li>Identificar os sinais e sintomas</li>
                        <li>Conhecer a atuação</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Definição</h3>
                    <p>A hemorragia digestiva consiste na perda de sangue do trato gastrointestinal, podendo ser grave ao ponto de colocar a vida da vítima em risco.</p>
                </div>

                <h2>Classificação</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Alta</h4>
                        <ul>
                            <li><strong>Hematemeses</strong> - vómito com sangue</li>
                            <li><strong>Melena</strong> - fezes com sangue escuro (digestão >14h)</li>
                            <li>Causas: úlceras, varizes esofágicas, gastrite</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Baixa</h4>
                        <ul>
                            <li><strong>Hematoquésias</strong> - dejeções com sangue vermelho vivo</li>
                            <li><strong>Retorragia</strong> - sangue vermelho vivo durante a dejeção</li>
                            <li>Causas: hemorroidas, fissuras anais, cancro do cólon</li>
                        </ul>
                    </div>
                </div>

                <h2>Sinais e Sintomas</h2>
                <div class="info-card">
                    <ul>
                        <li>Presença de vómito ou dejeção com características hemáticas</li>
                        <li>Sudorese</li>
                        <li>Palidez</li>
                        <li>Pulso rápido</li>
                        <li>Náuseas</li>
                        <li>Hipotensão</li>
                        <li>Tonturas</li>
                        <li>Síncope</li>
                    </ul>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Caracterizar o vómito ou dejeção quanto à quantidade e aspeto</li>
                        <li>Perante vítimas com AEC, permeabilizar a via aérea</li>
                        <li>Administrar oxigénio de acordo com protocolo</li>
                        <li>Posicionar em posição de conforto mantendo a VA permeável</li>
                        <li>Recolher informação: início de sintomas, história de episódios anteriores, antecedentes de patologia digestiva, medicação habitual</li>
                        <li>Solicitar apoio diferenciado ao CODU</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Hematemeses = vómito com sangue (alta)</li>
                        <li>Melena = fezes escuras (alta)</li>
                        <li>Hematoquésias = sangue vermelho vivo nas fezes (baixa)</li>
                        <li>Retorragia = sangue vermelho vivo durante a dejeção</li>
                        <li>A hemorragia digestiva pode ser grave e colocar a vida em risco</li>
                    </ul>
                </div>
            `
        },
        13: {
            title: 'XIII. DOR ABDOMINAL',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Identificar as principais causas de dor abdominal</li>
                        <li>Conhecer os sinais e sintomas</li>
                        <li>Compreender a atuação</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Principais Causas de Dor Abdominal</h3>
                    <ul>
                        <li>Apendicite</li>
                        <li>Oclusão intestinal</li>
                        <li>Cólica Renal</li>
                    </ul>
                </div>

                <h2>Apendicite</h2>
                <div class="info-card">
                    <h4>Sinais e Sintomas</h4>
                    <ul>
                        <li>Dor na <strong>fossa ilíaca direita</strong>, que aumenta com a rápida descompressão</li>
                        <li>Dor pode irradiar para membro inferior</li>
                        <li>Náuseas, vómitos, febre, perda de apetite</li>
                        <li>Em caso de rutura: diminuição da dor (alívio paradoxal), dor difusa em todo o abdómen</li>
                    </ul>
                </div>

                <h2>Oclusão Intestinal</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Sinais e Sintomas</h4>
                        <ul>
                            <li>Dor abdominal tipo cólica</li>
                            <li>Distensão do abdómen</li>
                            <li>Obstipação</li>
                            <li>Náuseas e vómitos</li>
                            <li>Em casos graves: <strong>vómitos fecaloides</strong> (fezes, odor fétido, cor escura)</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Causas</h4>
                        <ul>
                            <li>Paralisia dos intestinos</li>
                            <li>Diminuição do lúmen (neoplasia, pólipos)</li>
                            <li>Hérnias, intussusceção, volvo, aderências</li>
                        </ul>
                    </div>
                </div>

                <h2>Cólica Renal</h2>
                <div class="info-card">
                    <h4>Sinais e Sintomas</h4>
                    <ul>
                        <li>Dor tipo cólica (extremamente violenta), com início na <strong>região lombar</strong> e irradiação para bexiga e órgãos genitais</li>
                        <li>Agitação (procura por posição antálgica)</li>
                        <li>Náuseas e vómitos</li>
                        <li>Dor ao urinar (se obstrução ureteral)</li>
                        <li>Hematúria (em alguns casos)</li>
                    </ul>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Caracterizar a dor com <strong>TILIDAS</strong></li>
                        <li>Administrar oxigénio de acordo com protocolo</li>
                        <li>Posicionar em posição de conforto</li>
                        <li><strong>Desaconselhar ingestão de líquidos ou alimentos</strong></li>
                        <li>Recolher informação: início de sintomas, história de episódios anteriores, antecedentes de patologia digestiva, medicação habitual</li>
                        <li>Solicitar apoio diferenciado ao CODU</li>
                        <li>Transporte em posição confortável (flexão dos joelhos sobre o abdómen)</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Apendicite: dor na fossa ilíaca direita</li>
                        <li>Oclusão intestinal: vómitos fecaloides (sinal grave)</li>
                        <li>Cólica renal: dor lombar com irradiação, agitação</li>
                        <li>Não permitir ingestão de líquidos ou alimentos</li>
                        <li>Usar TILIDAS para caracterizar a dor</li>
                    </ul>
                </div>
            `
        },
        14: {
            title: 'XIV. EMERGÊNCIAS NEUROLÓGICAS',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Identificar as principais causas das emergências neurológicas</li>
                        <li>Compreender os sinais e sintomas e atuação na síncope, crise convulsiva e AVC</li>
                        <li>Conhecer os critérios de inclusão na Via Verde AVC</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>As emergências neurológicas traduzem as situações que comprometem, de forma temporária ou permanente, as funções cerebrais.</p>
                    <p>As emergências neurológicas que motivam o acionamento de meios de emergência com maior frequência são:</p>
                    <ul>
                        <li>Síncopes</li>
                        <li>Convulsões</li>
                        <li>Acidentes Vasculares Cerebrais (AVC)</li>
                    </ul>
                </div>

                <h2>Alteração do Estado de Consciência (AEC)</h2>
                <div class="info-card">
                    <p>A AEC representa a alteração da capacidade de percecionar e interagir com o ambiente. Não corresponde a uma doença, mas sim à consequência de um evento primário.</p>
                    <p>Existem inúmeras causas que colocam em risco a vida e necessitam de correção imediata.</p>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>As emergências neurológicas comprometem as funções cerebrais</li>
                        <li>As mais frequentes: síncope, convulsão e AVC</li>
                        <li>A AEC é um sinal de gravidade que requer avaliação imediata</li>
                    </ul>
                </div>
            `
        },
        15: {
            title: 'XV. SÍNCOPE',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender a fisiopatologia da síncope</li>
                        <li>Identificar os tipos de síncope</li>
                        <li>Conhecer a atuação</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Definição</h3>
                    <p>A <strong>síncope</strong> é a perda de consciência de forma súbita, causada por uma diminuição do fluxo sanguíneo cerebral com inevitável perda do tónus postural.</p>
                    <p>Vulgarmente designada por <strong>desmaio</strong>. A <strong>lipotimia</strong> significa "sensação de desmaio", mas sem perda de consciência.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-globe"></i>
                    <div>
                        <h4>Epidemiologia (ERC 2021)</h4>
                        <ul>
                            <li>Incidência mundial: 15-39%</li>
                            <li>50% das mulheres já tiveram uma síncope</li>
                            <li>25% dos homens já tiveram uma síncope</li>
                        </ul>
                    </div>
                </div>

                <h2>Causas da Síncope</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Cardíaca</h4>
                        <ul>
                            <li>Disrritmias (FC &lt;40 ou &gt;150 bpm)</li>
                            <li>Insuficiência cardíaca</li>
                            <li>Doença valvular</li>
                        </ul>
                        <h4>Vasovagal (mais comum - 50%)</h4>
                        <ul>
                            <li>Estimulação do nervo vago</li>
                            <li>Dor, stress, medo súbito</li>
                            <li>Micção, defecação, tosse</li>
                            <li>Hipersensibilidade do seio carotídeo</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Ortostática</h4>
                        <ul>
                            <li>Mudança rápida de posição</li>
                            <li>Hipovolémia (hemorragia, diarreia, vómitos)</li>
                            <li>Fármacos/drogas (diuréticos, vasodilatadores)</li>
                        </ul>
                        <h4>Outras Causas</h4>
                        <ul>
                            <li>Metabólicas (hiperventilação, hipo/hiperglicemia)</li>
                            <li>Neurológicas (Parkinson, neuropatia)</li>
                            <li>Gravidez (compressão da veia cava)</li>
                            <li>Tosse, hipotensão pós-prandial</li>
                        </ul>
                    </div>
                </div>

                <h2>Sinais e Sintomas</h2>
                <div class="info-card">
                    <ul>
                        <li>Alteração do estado de consciência</li>
                        <li>Lipotimia (sensação de perda dos sentidos)</li>
                        <li>Tonturas</li>
                        <li>Visão turva</li>
                        <li>Astenia</li>
                        <li>Hipotensão</li>
                        <li>Palidez</li>
                        <li>Sudorese</li>
                        <li>Náuseas e vómitos</li>
                    </ul>
                </div>

                <h2>Manobras de Contrapressão Física</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Parte Inferior do Corpo (mais eficazes)</h4>
                        <ul>
                            <li>Agachamento</li>
                            <li>Cruzar as pernas</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Parte Superior do Corpo</h4>
                        <ul>
                            <li>Aperto das mãos</li>
                            <li>Flexão do pescoço</li>
                        </ul>
                    </div>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Se detetada pré-síncope, promover manobras de contrapressão</li>
                        <li>Se desidratação, promover ingestão de pequenas quantidades de água</li>
                        <li><strong>Avaliar glicemia capilar</strong></li>
                        <li>Administrar oxigénio de acordo com protocolo</li>
                        <li>Recolher informação: história de sintomas, episódios anteriores, causa, doenças cardiovasculares, medicação habitual</li>
                        <li>Solicitar apoio diferenciado ao CODU</li>
                        <li>Transporte mantendo a permeabilidade da VA</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A síncope é a perda súbita de consciência por diminuição do fluxo cerebral</li>
                        <li>A causa vasovagal é a mais comum (50%)</li>
                        <li>As manobras de contrapressão da parte inferior do corpo são mais eficazes</li>
                        <li>Lipotimia ≠ Síncope (não há perda de consciência)</li>
                        <li>Avaliar glicemia capilar</li>
                    </ul>
                </div>
            `
        },
        16: {
            title: 'XVI. CONVULSÃO',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender a fisiopatologia das convulsões</li>
                        <li>Classificar os tipos de convulsão</li>
                        <li>Conhecer a atuação</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Definição</h3>
                    <p>As convulsões são uma <strong>alteração eletrofisiológica temporária</strong> que ocorre no cérebro, causada por uma atividade elétrica anormal dos neurónios.</p>
                </div>

                <h2>Tipos de Convulsão</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Generalizadas</h4>
                        <ul>
                            <li><strong>Ausência (pequeno mal)</strong> - breves ausências de consciência, "olhar perdido"</li>
                            <li><strong>Tónico-Clónicas (grande mal)</strong> - perda súbita de consciência, contrações musculares</li>
                            <li><strong>Fase tónica</strong> (10-30 seg): espasmos, apneia, mordedura da língua</li>
                            <li><strong>Fase clónica</strong> (1-5 min): contrações rítmicas, hiperventilação, sialorreia</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Parciais (Focais)</h4>
                        <ul>
                            <li><strong>Simples</strong> - sem perturbação da consciência</li>
                            <li>Disautonómicos, motores, sensitivos, psíquicos</li>
                            <li><strong>Complexas</strong> - com perturbação da consciência</li>
                            <li>Perda de contacto consciente, contração muscular isolada, comportamentos repetitivos</li>
                            <li>Podem evoluir para tónico-clónicas</li>
                        </ul>
                    </div>
                </div>

                <h2>Causas de Convulsão</h2>
                <div class="info-card">
                    <ul>
                        <li>Epilepsia (causa mais comum)</li>
                        <li>Hipertermia ou febre</li>
                        <li>Desidratação</li>
                        <li>Alterações da glicemia (hipo ou hiperglicemia)</li>
                        <li>Intoxicação</li>
                        <li>AVC</li>
                        <li>TCE</li>
                        <li>Tumores cerebrais</li>
                        <li>Hipoxia</li>
                    </ul>
                </div>

                <h2>Estado de Mal Epilético (Status Epilepticus)</h2>
                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <p>Crise convulsiva com duração <strong>superior a 5 minutos</strong> ou várias crises prolongadas sem recuperação da consciência.</p>
                        <p>Pode ocorrer <strong>lesões cerebrais permanentes ou morte</strong> devido à privação de oxigénio e glicose.</p>
                    </div>
                </div>

                <h2>Atuação</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Durante a Crise</h4>
                        <ul>
                            <li>Afastar objetos perigosos</li>
                            <li>Proteger a cabeça</li>
                            <li>Permeabilizar a VA se possível (não forçar)</li>
                            <li>Administrar O2</li>
                            <li><strong>Não restringir movimentos</strong></li>
                            <li>Registar duração e zonas envolvidas</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Pós-Crise</h4>
                        <ul>
                            <li>Colocar em PLS</li>
                            <li>Avaliar temperatura, glicemia</li>
                            <li>Se hipoglicemia, administrar glicose</li>
                            <li>Se sinais de AVC, verificar critérios VV AVC</li>
                            <li>Reduzir estimulação sensorial</li>
                            <li>Recolher informação: duração, partes envolvidas, intervalo entre crises, causa provável, medicação</li>
                            <li>Solicitar apoio diferenciado ao CODU</li>
                        </ul>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>As convulsões são atividade elétrica anormal dos neurónios</li>
                        <li>Tipos: generalizadas (tónico-clónicas, ausência) e parciais (simples, complexas)</li>
                        <li>Estado de mal epilético: &gt;5 min - emergência</li>
                        <li>Não restringir movimentos durante a crise</li>
                        <li>Avaliar glicemia capilar na pós-crise</li>
                    </ul>
                </div>
            `
        },
        17: {
            title: 'XVII. AVC',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender a fisiopatologia do AVC</li>
                        <li>Distinguir AVC isquémico de hemorrágico</li>
                        <li>Conhecer os critérios de inclusão na Via Verde AVC</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Definição</h3>
                    <p>O AVC é um evento grave no qual há uma <strong>interrupção do fluxo sanguíneo cerebral</strong> que leva à isquemia dos tecidos. É muitas vezes chamado de <strong>enfarte cerebral</strong>.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-globe"></i>
                    <div>
                        <h4>Dados Mundiais (OMS)</h4>
                        <ul>
                            <li><strong>15 milhões</strong> de pessoas sofrem um AVC anualmente</li>
                            <li><strong>5 milhões</strong> morrem</li>
                            <li><strong>5 milhões</strong> ficam permanentemente incapacitados</li>
                        </ul>
                        <h4>Dados em Portugal (INE, 2020)</h4>
                        <p>Os AVC causaram o maior número de óbitos, representando <strong>9,9%</strong> da mortalidade.</p>
                    </div>
                </div>

                <h2>Fatores de Risco</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Modificáveis</h4>
                        <ul>
                            <li>Hipertensão</li>
                            <li>Obesidade</li>
                            <li>Diabetes Mellitus</li>
                            <li>Sedentarismo</li>
                            <li>Etilismo</li>
                            <li>Stress</li>
                            <li>Dislipidemia</li>
                            <li>Tabagismo</li>
                            <li>Terapêutica contracetiva + tabaco</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Não Modificáveis</h4>
                        <ul>
                            <li>Genéticos</li>
                            <li>Sexo</li>
                            <li>Idade</li>
                        </ul>
                    </div>
                </div>

                <h2>Tipos de AVC</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Isquémico (85%)</h4>
                        <ul>
                            <li>Obstrução de um vaso sanguíneo</li>
                            <li>Causado por <strong>trombo</strong> ou <strong>êmbolo</strong></li>
                            <li>Único com terapêutica específica tempo-dependente</li>
                        </ul>
                        <h4>Acidente Isquémico Transitório (AIT)</h4>
                        <ul>
                            <li>Oclusão transitória</li>
                            <li>Recuperação total em 24h</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Hemorrágico</h4>
                        <ul>
                            <li>Rotura de um vaso sanguíneo</li>
                            <li>Principal causa: <strong>HTA</strong></li>
                            <li>Pode formar <strong>aneurismas</strong></li>
                            <li>Instalação muito rápida</li>
                            <li>Cefaleias intensas prévias ao evento</li>
                        </ul>
                    </div>
                </div>

                <h2>Avaliação - Escalas</h2>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th colspan="4">Escala de Cincinnati</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th>Sinal/Sintoma</th>
                                <th>Como avaliar</th>
                                <th>Normal</th>
                                <th>Anormal</th>
                            </tr>
                            <tr>
                                <td><strong>Queda facial</strong></td>
                                <td>Pedir para sorrir</td>
                                <td>Simetria mantida</td>
                                <td>Assimetria facial</td>
                            </tr>
                            <tr>
                                <td><strong>Debilidade dos braços</strong></td>
                                <td>Pedir para manter braços estendidos 10s</td>
                                <td>Movem-se igualmente</td>
                                <td>Queda de um braço</td>
                            </tr>
                            <tr>
                                <td><strong>Fala anormal</strong></td>
                                <td>Pedir para falar (ex: nome)</td>
                                <td>Palavras corretas, articulação clara</td>
                                <td>Disartria, afasia</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-clock"></i>
                    <div>
                        <h4>Tempo é Cérebro!</h4>
                        <p>O tecido cerebral é extremamente vulnerável à privação de irrigação sanguínea. Em <strong>cada minuto de isquémia, um número elevado de células nervosas é destruído</strong>.</p>
                    </div>
                </div>

                <h2>Critérios de Inclusão Via Verde AVC</h2>
                <div class="info-card">
                    <ul>
                        <li>Início dos sintomas até <strong>24h</strong> de evolução (última vez visto bem)</li>
                        <li>Idade <strong>≥18 anos</strong></li>
                        <li>Alterações súbitas: hemiparesia/hemiplegia, disartria/afasia, assimetria facial</li>
                    </ul>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Identificar sintomatologia compatível com AVC</li>
                        <li>Identificar critérios para VV AVC (≤24h, ≥18 anos)</li>
                        <li>Administrar oxigénio de acordo com protocolo</li>
                        <li><strong>Contactar precocemente o CODU</strong></li>
                        <li>Avaliar Escala Cincinnati e RACE</li>
                        <li>Avaliar glicemia capilar</li>
                        <li>Posicionar com <strong>elevação do tronco a 30º</strong></li>
                        <li>Recolher informação: início de sintomas, história de AVC, medicação (anticoagulantes)</li>
                        <li>Solicitar apoio diferenciado</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>AVC isquémico (85%) vs hemorrágico (15%)</li>
                        <li>FAST: Face, Arms, Speech, Time</li>
                        <li>Escala Cincinnati: 1 critério = 72%, 3 critérios = 85%</li>
                        <li>VV AVC: ≤24h e ≥18 anos</li>
                        <li>"Tempo é cérebro" - cada minuto conta</li>
                        <li>Posicionar com tronco elevado a 30º</li>
                    </ul>
                </div>
            `
        },
        18: {
            title: 'XVIII. DIABETES MELLITUS, HIPOGLICEMIA E HIPERGLICEMIA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Conhecer os diferentes tipos de Diabetes</li>
                        <li>Compreender os sinais e sintomas da hipoglicemia e hiperglicemia</li>
                        <li>Conhecer a atuação perante uma hipoglicemia</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Diabetes Mellitus (DM)</h3>
                    <p>A DM é uma doença metabólica crónica caracterizada pela incapacidade do organismo em metabolizar a glicose, caracterizando-se por um aumento anormal da glicemia plasmática.</p>
                    <p>A <strong>insulina</strong> é a hormona responsável pela passagem da glicose para o interior das células.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-globe"></i>
                    <div>
                        <h4>Dados em Portugal</h4>
                        <ul>
                            <li>Prevalência estimada: <strong>14,1%</strong> (1,1 milhões)</li>
                            <li>90% dos diabéticos têm excesso de peso ou obesidade</li>
                            <li>1 em cada 5 pessoas com &gt;65 anos têm diabetes</li>
                        </ul>
                    </div>
                </div>

                <h2>Tipos de Diabetes</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Tipo 1</h4>
                        <ul>
                            <li>Não há produção de insulina</li>
                            <li>Surge na infância/adolescência</li>
                            <li>Tratamento: <strong>insulina exógena</strong></li>
                            <li>Autoimune</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Tipo 2</h4>
                        <ul>
                            <li>Resistência celular à insulina</li>
                            <li>Mais comum (90% dos casos)</li>
                            <li>Relacionada com síndrome metabólica</li>
                            <li>Tratamento: antidiabéticos orais</li>
                            <li>Pode ser insulinotratada</li>
                        </ul>
                    </div>
                </div>

                <div class="info-card">
                    <h4>Diabetes Gestacional</h4>
                    <ul>
                        <li>Anomalia do metabolismo da glicose durante a gravidez</li>
                        <li>Não crónico - desaparece no final da gestação</li>
                        <li>Forte probabilidade de desenvolver DM tipo 2</li>
                        <li>Pode causar anomalias congénitas no feto</li>
                    </ul>
                </div>

                <h2>Sinais e Sintomas da DM</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li>Cefaleias e tonturas</li>
                            <li>Náuseas e vómitos</li>
                            <li>AEC</li>
                            <li><strong>Polifagia</strong> - aumento de apetite</li>
                            <li><strong>Polidipsia</strong> - sede excessiva</li>
                            <li><strong>Poliúria</strong> - aumento da urina</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li>Astenia</li>
                            <li>Mialgias</li>
                            <li>Perda de peso inexplicada</li>
                            <li>Visão turva</li>
                            <li>Dificuldade de cicatrização</li>
                            <li>Xerostomia (boca seca)</li>
                            <li>Prurido genital</li>
                            <li>Glicosúria</li>
                        </ul>
                    </div>
                </div>

                <h2>Hipoglicemia</h2>
                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Glicemia Capilar &lt; 60 mg/dL</h4>
                        <p>O cérebro depende da glicose como principal fonte de energia. A hipoglicemia interfere com a capacidade de o cérebro funcionar adequadamente.</p>
                        <p>Pode ocorrer lesões cerebrais irreversíveis e morte se mantida de forma prolongada.</p>
                    </div>
                </div>

                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Sinais e Sintomas</h4>
                        <ul>
                            <li>AEC (agitação, agressividade, confusão)</li>
                            <li>Cefaleias, tonturas</li>
                            <li>Fraqueza muscular, tremores</li>
                            <li>Visão turva</li>
                            <li>Taquicardia, sudorese</li>
                            <li>Polifagia (sensação de fome)</li>
                            <li>Descoordenação motora</li>
                            <li>Discurso arrastado</li>
                            <li>Midríase</li>
                            <li>Convulsões</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Atuação</h4>
                        <ul>
                            <li>Avaliar glicemia capilar</li>
                            <li>Administrar O2</li>
                            <li>Se &lt;60 mg/dL:
                                <ul>
                                    <li><strong>Consciente (A):</strong> 25g glicose oral + hidratos de carbono</li>
                                    <li><strong>V/D/S:</strong> papa espessa de açúcar na mucosa oral</li>
                                </ul>
                            </li>
                            <li>Se 60-80 mg/dL: alimentos ricos em hidratos de carbono</li>
                            <li>Recolher informação e solicitar apoio diferenciado</li>
                        </ul>
                    </div>
                </div>

                <h2>Hiperglicemia</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Definição</h4>
                        <p>Glicemia capilar <strong>&gt; 200 mg/dL</strong></p>
                        <h4>Sinais e Sintomas</h4>
                        <ul>
                            <li>AEC (confusão, prostração, sonolência)</li>
                            <li>Pulso rápido e cheio</li>
                            <li>Náuseas e vómitos</li>
                            <li><strong>Hálito frutado (cetónico)</strong></li>
                            <li>Pele seca e ruborizada</li>
                            <li>Desidratação, hipotensão</li>
                            <li>Poliúria, polidipsia</li>
                            <li>Xerostomia, dor abdominal</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Causas</h4>
                        <ul>
                            <li>Grande ingestão de alimentos com índice glicémico elevado</li>
                            <li>Administração insuficiente de insulina</li>
                            <li>Stress, infeção, trauma, cirurgia</li>
                            <li>Determinados fármacos (corticosteroides)</li>
                            <li>Conservação incorreta da insulina</li>
                            <li>Sedentarismo</li>
                        </ul>
                    </div>
                </div>

                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Fatores</th>
                                <th>Hipoglicemia</th>
                                <th>Hiperglicemia</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Causa</strong></td>
                                <td>Excesso de insulina ou défice de açúcar</td>
                                <td>Excesso de açúcar ou défice de insulina</td>
                            </tr>
                            <tr>
                                <td><strong>Início</strong></td>
                                <td>Rápido e súbito</td>
                                <td>Lento e progressivo</td>
                            </tr>
                            <tr>
                                <td><strong>Comportamento</strong></td>
                                <td>Agitação, irritabilidade, convulsões</td>
                                <td>Fraqueza, confusão, sonolência</td>
                            </tr>
                            <tr>
                                <td><strong>Pele</strong></td>
                                <td>Pálida e Suada</td>
                                <td>Seca e avermelhada</td>
                            </tr>
                            <tr>
                                <td><strong>Hálito</strong></td>
                                <td>Normal</td>
                                <td>Cetónico, adocicado (a maçã)</td>
                            </tr>
                            <tr>
                                <td><strong>Sede</strong></td>
                                <td>Ausente</td>
                                <td>Presente</td>
                            </tr>
                            <tr>
                                <td><strong>Vómitos</strong></td>
                                <td>Raros</td>
                                <td>Presentes</td>
                            </tr>
                            <tr>
                                <td><strong>Fome</strong></td>
                                <td>Intensa</td>
                                <td>Ausente</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>DM tipo 1: sem insulina; tipo 2: resistência à insulina</li>
                        <li>Hipoglicemia &lt;60 mg/dL - urgência</li>
                        <li>Hiperglicemia &gt;200 mg/dL</li>
                        <li>Hipoglicemia: início súbito, pele pálida e suada</li>
                        <li>Hiperglicemia: início lento, pele seca, hálito cetónico</li>
                        <li>Avaliar glicemia capilar em qualquer AEC</li>
                    </ul>
                </div>
            `
        },
        19: {
            title: 'XIX. INTOXICAÇÕES',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Conhecer as vias de intoxicação</li>
                        <li>Identificar os sinais e sintomas associados às intoxicações</li>
                        <li>Conhecer a atuação nas intoxicações</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>"Tudo é veneno e nada é veneno, só a dose faz o veneno." - Paracelso (séc. XVI)</p>
                    <p>A <strong>intoxicação</strong> consiste num quadro clínico, com manifestação de sinais e sintomas, decorrente do contacto ou exposição (acidental, intencional ou profissional) a uma substância ou produto.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-phone"></i>
                    <div>
                        <h4>CIAV - Centro de Informação Antivenenos</h4>
                        <p><strong>Número: 800 250 250</strong> (24h/7dias)</p>
                        <p>Em 2021: 25.574 consultas, 61,5% exposições não intencionais, 80,53% via digestiva</p>
                    </div>
                </div>

                <h2>Vias de Intoxicação</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Digestiva (mais comum)</h4>
                        <ul>
                            <li>Ingestão de fármacos, alimentos, produtos</li>
                            <li>Intoxicação medicamentosa voluntária em jovens</li>
                            <li>Lesões imediatas (cáusticos) ou após horas</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Inalatória</h4>
                        <ul>
                            <li>Gases, fumos, vapores (CO, gás propano/butano)</li>
                            <li>Absorção intranasal (cocaína)</li>
                            <li>Monóxido de carbono: incolor e inodoro</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Cutânea</h4>
                        <ul>
                            <li>Absorção pela pele</li>
                            <li>Organofosforados e carbonatos (pesticidas)</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Parentérica</h4>
                        <ul>
                            <li>Administração endovenosa de fármacos/drogas</li>
                            <li>Picadas/mordeduras de animais</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Ocular</h4>
                        <ul>
                            <li>Substância tóxica atinge os olhos</li>
                            <li>Geralmente acidental</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Intoxicação por Monóxido de Carbono</h4>
                        <ul>
                            <li>CO liga-se à hemoglobina com afinidade 200-250x maior que o O2</li>
                            <li>Formação de carboxihemoglobina</li>
                            <li>Oxímetro <strong>não</strong> diferencia O2 de CO</li>
                            <li>Administrar <strong>O2 a 15L/min</strong> independentemente da SpO2</li>
                            <li>Sintomas: cefaleia, náuseas (leve) → convulsões, coma, PCR (grave)</li>
                        </ul>
                    </div>
                </div>

                <h2>Atuação Geral</h2>
                <div class="info-card">
                    <ul>
                        <li>Utilizar EPI adequado</li>
                        <li>Garantir segurança do local (CO: arejar e retirar vítima)</li>
                        <li>Afastar o tóxico ou retirar a vítima</li>
                        <li>Administrar oxigénio (CO: 15L/min)</li>
                        <li>Recolher e transportar embalagens do tóxico</li>
                        <li>Avaliar glicemia capilar</li>
                        <li>Recolher informação: <strong>QUEM, O QUÊ, QUANTO, QUANDO, ONDE, COMO</strong></li>
                        <li>Contactar <strong>CIAV (800 250 250)</strong> ou CODU</li>
                        <li>Solicitar apoio diferenciado</li>
                    </ul>
                </div>

                <h2>Procedimentos Específicos por Via</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Cutânea</h4>
                        <ul>
                            <li>Remover roupa contaminada</li>
                            <li>Lavar pele com água corrente (15 min)</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Ocular</h4>
                        <ul>
                            <li>Lavar com soro fisiológico ou água corrente (15 min)</li>
                            <li>Manter pálpebras afastadas</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Digestiva</h4>
                        <ul>
                            <li>CODU/CIAV pode recomendar:</li>
                            <li>Indução mecânica do vómito</li>
                            <li>Administração de carvão ativado</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Parentérica/Picada</h4>
                        <ul>
                            <li>Imobilizar área atingida</li>
                            <li>Repouso (não acelerar absorção)</li>
                            <li>Desinfeção do local</li>
                            <li>Aplicar gelo (exceto peixe-aranha: calor)</li>
                        </ul>
                    </div>
                </div>

                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Indução Mecânica do Vómito</th>
                                <th>Administração de Carvão Ativado</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Procedimento:</strong> 200-300ml água, sentar e inclinar para a frente, estimular úvula</td>
                                <td><strong>Indicação:</strong> Diminuir absorção do tóxico (até 1h após ingestão)</td>
                            </tr>
                            <tr>
                                <td><strong>Contraindicações:</strong> Vítima sonolenta/AEC, cáusticos, substâncias que fazem espuma, derivados de petróleo</td>
                                <td><strong>Condição:</strong> Vítima consciente, colaborante, que bebe espontaneamente</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>CIAV: <strong>800 250 250</strong></li>
                        <li>Intoxicação por CO: O2 a 15L/min (SpO2 não é fiável)</li>
                        <li>Recolher embalagens do tóxico</li>
                        <li>Indução do vómito e carvão ativado SÓ com indicação do CODU/CIAV</li>
                        <li>Nunca induzir vómito em vítima sonolenta, cáusticos, espuma ou derivados de petróleo</li>
                    </ul>
                </div>
            `
        },
        20: {
            title: 'XX. SÉPSIS',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Conhecer a Via Verde Sépsis</li>
                        <li>Conhecer os critérios da Via Verde Sépsis</li>
                        <li>Compreender a atuação na sépsis</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Definição</h3>
                    <p>A <strong>sépsis</strong> é a resposta desregulada do organismo à infeção que, na ausência de tratamento em tempo útil, pode levar à falência multiorgânica e morte.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-globe"></i>
                    <div>
                        <h4>Dados em Portugal (DGS, 2016)</h4>
                        <ul>
                            <li>A sépsis foi responsável por <strong>38%</strong> da mortalidade hospitalar global</li>
                            <li>Mata <strong>o triplo do AVC</strong></li>
                            <li>Responsável por <strong>20%</strong> dos internamentos em UCI</li>
                            <li>Choque séptico: sobrevivência de <strong>apenas 50%</strong></li>
                        </ul>
                    </div>
                </div>

                <h2>Fatores de Risco</h2>
                <div class="info-card">
                    <ul>
                        <li>≥ 65 anos</li>
                        <li>&lt; 1 ano</li>
                        <li>Doenças crónicas: Diabetes, doença pulmonar, cancro, doença renal</li>
                        <li>Doentes com sistema imunitário debilitado</li>
                    </ul>
                </div>

                <h2>Sinais e Sintomas</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li>FR &gt; 22 cpm</li>
                            <li>SpO2 &lt; 90%</li>
                            <li>Tosse, dispneia</li>
                            <li>FC &gt; 90 bpm</li>
                            <li>PAS &lt; 90 mmHg</li>
                            <li>Temperatura ≥38°C ou &lt;35°C</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li>Dor abdominal e/ou lombar</li>
                            <li>Distensão abdominal, obstipação, diarreia</li>
                            <li>AEC</li>
                            <li>Cefaleias</li>
                            <li>Sinais de inflamação cutâneos</li>
                            <li>Icterícia</li>
                            <li>Sintomas de infeção urinária</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-clock"></i>
                    <div>
                        <h4>Via Verde Sépsis</h4>
                        <p>Perante sinais compatíveis com caso suspeito ou provável VV Sépsis, <strong>contactar o CODU</strong> para determinação de envio de meio diferenciado.</p>
                        <p>Realizar <strong>pelo menos 2 avaliações completas</strong> de sinais vitais (antes e após medidas).</p>
                    </div>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Identificar sinais compatíveis com sépsis</li>
                        <li>Administrar oxigénio de acordo com protocolo</li>
                        <li>Recolher informação: progressão da sintomatologia, história de infeção, medicação habitual</li>
                        <li>Contactar CODU</li>
                        <li>Transporte mantendo a VA permeável</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A sépsis é a resposta desregulada do organismo à infeção</li>
                        <li>Mata 3x mais que o AVC em Portugal</li>
                        <li>Reconhecimento precoce é fundamental</li>
                        <li>Critérios no verbete de socorro identificam caso suspeito</li>
                        <li>Contactar CODU para ativação VV Sépsis</li>
                    </ul>
                </div>
            `
        },
        21: {
            title: 'XXI. CHOQUE',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Conhecer os sintomas de hipoperfusão</li>
                        <li>Conhecer os tipos de choque</li>
                        <li>Compreender a atuação na vítima com choque</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Definição</h3>
                    <p>O <strong>choque</strong> é considerado um estado de <strong>hipoperfusão celular generalizada</strong>, em que o aporte de oxigénio a nível celular é inadequado para satisfazer as necessidades metabólicas.</p>
                </div>

                <h2>Sinais e Sintomas de Hipoperfusão</h2>
                <div class="info-card">
                    <ul>
                        <li><strong>AEC</strong> - ansiedade → agitação → confusão → prostração → sonolência</li>
                        <li><strong>Taquipneia</strong> - inicialmente ligeira, evolui para acentuada</li>
                        <li><strong>Taquicardia</strong> - pulsos periféricos finos, podendo ficar ausentes</li>
                        <li><strong>Pele pálida, fria, viscosa, cianótica, suada</strong> - vasoconstrição periférica</li>
                        <li><strong>Hipotensão</strong> - sinal mais tardio (perda &gt;30% do volume sanguíneo)</li>
                    </ul>
                </div>

                <h2>Tipos de Choque</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Hipovolémico</h4>
                        <ul>
                            <li>Perda aguda de fluidos</li>
                            <li><strong>Hemorrágico</strong>: hemorragia</li>
                            <li><strong>Não hemorrágico</strong>: desidratação, queimaduras</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Obstrutivo</h4>
                        <ul>
                            <li>Obstrução que interfere com pré-carga/pós-carga</li>
                            <li>Pneumotórax hipertensivo</li>
                            <li>Tamponamento cardíaco</li>
                            <li>E</li>
                        </ul>
                    </div>
                </div>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Distributivo</h4>
                        <ul>
                            <li>Aumento da capacidade vascular</li>
                            <li><strong>Neurogénico</strong>: lesão medular (T1-L2)</li>
                            <li><strong>Anafilático</strong>: reação alérgica grave</li>
                            <li><strong>Séptico</strong>: infeção grave</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Cardiogénico</h4>
                        <ul>
                            <li>Falha do coração em bombear sangue</li>
                            <li>EAM, ICC descompensada</li>
                            <li>Disritmias graves</li>
                            <li>Contusão cardíaca</li>
                        </ul>
                    </div>
                </div>

                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Tipo de Choque</th>
                                <th>Causas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Hipovolémico</strong></td>
                                <td>Diminuição de sangue ou fluidos (hemorragia, desidratação, queimaduras)</td>
                            </tr>
                            <tr>
                                <td><strong>Obstrutivo</strong></td>
                                <td>Obstrução que interfere com entrada/saída de sangue no coração (TEP, tamponamento, pneumotórax hipertensivo)</td>
                            </tr>
                            <tr>
                                <td><strong>Distributivo</strong></td>
                                <td>Vasodilatação incontrolada e/ou permeabilidade vascular extrema (neurogénico, anafilático, séptico)</td>
                            </tr>
                            <tr>
                                <td><strong>Cardiogénico</strong></td>
                                <td>Incapacidade do coração em bombear sangue (EAM, ICC, disritmias, contusão cardíaca)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Sinais</th>
                                <th>Choque Hipovolémico</th>
                                <th>Choque Neurogénico</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Pele</strong></td>
                                <td>Pálida, fria e Suada</td>
                                <td>Rosada, quente e seca</td>
                            </tr>
                            <tr>
                                <td><strong>Pressão arterial</strong></td>
                                <td>Baixa</td>
                                <td>Baixa</td>
                            </tr>
                            <tr>
                                <td><strong>Estado de consciência</strong></td>
                                <td>Alterado</td>
                                <td>Alerta</td>
                            </tr>
                            <tr>
                                <td><strong>Preenchimento capilar</strong></td>
                                <td>Aumentado</td>
                                <td>Normal</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Identificar sintomatologia compatível com choque</li>
                        <li>Atuar sobre a causa do choque</li>
                        <li>Garantir manutenção da temperatura corporal</li>
                        <li>Administrar oxigénio de acordo com protocolo</li>
                        <li>Se PAS &lt;90mmHg, <strong>elevar os membros inferiores</strong></li>
                        <li>Recolher informação: etiologia, progressão, medicação habitual</li>
                        <li>Contactar CODU</li>
                        <li>Transporte mantendo a VA permeável</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Choque = hipoperfusão celular generalizada</li>
                        <li>Tipos: hipovolémico, obstrutivo, distributivo, cardiogénico</li>
                        <li>Choque neurogénico: pele rosada, quente e seca (diferente dos outros)</li>
                        <li>Hipotensão é um sinal tardio</li>
                        <li>Elevar MMII se PAS &lt;90mmHg</li>
                    </ul>
                </div>
            `
        },
        22: {
            title: 'XXII. APOIO AO SUPORTE AVANÇADO DE VIDA (SAV)',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Conhecer os elementos com quem poderá fazer equipa no socorro</li>
                        <li>Conhecer o equipamento disponível nos meios diferenciados</li>
                        <li>Compreender a atuação durante o apoio ao SAV</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Trabalho de Equipa</h3>
                    <p>É frequente o encontro de duas equipas para socorrer uma vítima crítica. É importante reconhecer a <strong>cadeia de comando</strong> e trabalhar com as orientações do <strong>team-leader</strong>.</p>
                </div>

                <h2>Equipamentos</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Monitorização</h4>
                        <ul>
                            <li><strong>Lifepack 15 (LP15)</strong> - monitor/desfibrilhador</li>
                            <li><strong>Oxímetro de pulso</strong> - SpO2</li>
                            <li><strong>Braçadeira de PA</strong> - colocação com círculo sobre a artéria</li>
                            <li><strong>Elétrodos de ECG</strong> - pele limpa, seca, sem pelos; superfícies ósseas</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Suporte</h4>
                        <ul>
                            <li><strong>Ventiladores</strong> - vários modelos</li>
                            <li><strong>Seringas infusoras</strong> - administração de fármacos</li>
                            <li><strong>Compressores mecânicos</strong> (LUCAS®) - compressões torácicas contínuas</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-syringe"></i>
                    <div>
                        <h4>Preparação de Soros</h4>
                        <p><strong>Os 9 Certos</strong> da segurança do doente:</p>
                        <ul>
                            <li>Vítima certa • Medicação certa • Via certa • Dose certa • Hora certa</li>
                            <li>Registo da hora • Ação esperada • Forma farmacêutica • Monitorização/vigilância</li>
                        </ul>
                        <p><strong>Fluidos mais utilizados:</strong> Soro fisiológico, Lactato de Ringer, Polieletrolítico</p>
                    </div>
                </div>

                <h2>Sequência de Preparação de Soro</h2>
                <div class="info-card">
                    <ul>
                        <li>Retirar todas as embalagens e fechar o regulador de gota</li>
                        <li>Perfurar o saco de soro com o espeta frasco</li>
                        <li>Pressionar a câmara conta-gotas para criar pressão negativa e preencher com metade de soro</li>
                        <li>Abrir o regulador de gotas com o circuito na vertical - a gravidade faz subir as bolhas de ar</li>
                        <li><strong>Confirmar que não existe ar no sistema</strong></li>
                    </ul>
                </div>

                <h2>Transição SBV-DAE para SAV</h2>
                <div class="info-card">
                    <h4>Dados a Passar</h4>
                    <ul>
                        <li>Choques? Quantos?</li>
                        <li>Problemas de saúde conhecidos</li>
                        <li>Circunstâncias da PCR</li>
                        <li>Tempo estimado total de PCR</li>
                        <li>Tempo total de manobras de SBV</li>
                    </ul>
                    <h4>Papel do TAS no SAV</h4>
                    <ul>
                        <li>Realizar 200 compressões em 2 min</li>
                        <li>Retirar máscara facial e conectar insuflador ao TOT</li>
                        <li>Fixar o nastro</li>
                        <li>Realizar insuflações: 20x em 2 min (1 a cada 6 seg)</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Reconhecer a cadeia de comando e o team-leader</li>
                        <li>Conhecer os equipamentos dos meios diferenciados</li>
                        <li>Os 9 Certos na preparação de soros</li>
                        <li>Passar dados de forma objetiva na transição SBV-DAE para SAV</li>
                        <li>Os TAS podem ajudar nas compressões e insuflações sob supervisão</li>
                    </ul>
                </div>
            `
        },
        23: {
            title: 'XXIII. REANIMAÇÃO NO ADULTO',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Adaptar os conhecimentos de SBV-DAE para o contexto de equipas de emergência</li>
                        <li>Conhecer estratégias que melhoram a eficiência e o desempenho das Equipas de Reanimação</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Pontos Chave para Melhorar o Desempenho</h3>
                    <ul>
                        <li><strong>Minimizar as pausas</strong> nas compressões torácicas</li>
                        <li>Baixar a frequência das compressões para <strong>100 a 120/min</strong></li>
                        <li>Melhorar o posicionamento do reanimador para permitir <strong>descompressão total</strong> do tórax</li>
                        <li>Aumentar a profundidade das compressões para <strong>5 a 6 cm</strong></li>
                    </ul>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-hand-holding-heart"></i>
                    <div>
                        <h4>Técnica de Hovering</h4>
                        <p>Manter os braços do reanimador que irá iniciar manobras após choque ou análise já posicionados, mas <strong>sem contacto com a pele da vítima</strong> - "a pairar no tórax".</p>
                        <p>Permite iniciar compressões imediatamente após a desfibrilhação.</p>
                    </div>
                </div>

                <h2>Sequência de Atuação</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Recepção da Ocorrência</h4>
                        <ul>
                            <li>Confirmar localização exata</li>
                            <li>Pensar e discutir potencial tipo de vítima</li>
                            <li>Distribuir tarefas</li>
                            <li>Preparar EPI adequado</li>
                            <li>Antever possíveis cenários</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Chegada ao Local</h4>
                        <ul>
                            <li>Levar DAE, saco, O2 e aspirador</li>
                            <li>Garrafa de O2 portátil com ≥100bar</li>
                            <li>Distribuir material por funções</li>
                            <li>Não atrasar a abordagem</li>
                        </ul>
                    </div>
                </div>

                <div class="info-card">
                    <h4>Durante a Reanimação</h4>
                    <ul>
                        <li>R1 confirma PCR, R2 inicia compressões e chama CODU</li>
                        <li>R1 liga DAE, cola elétrodos (≤30 seg)</li>
                        <li>R2 só suspende compressões durante análise do DAE</li>
                        <li>R2 mantém <strong>hovering</strong> durante análise</li>
                        <li>R1 confirma segurança, interrompe compressões para choque</li>
                        <li>R1 reinicia compressões <strong>imediatamente</strong> após choque</li>
                        <li>R2 prepara material de via aérea</li>
                    </ul>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-clock"></i>
                    <div>
                        <h4>Interrupções a Evitar</h4>
                        <p>Minimizar pausas durante:</p>
                        <ul>
                            <li>Colocação de elétrodos</li>
                            <li>Análises de ritmo</li>
                            <li>Ventilações</li>
                            <li>Desfibrilhação (antes e depois)</li>
                        </ul>
                    </div>
                </div>

                <div class="info-card">
                    <h4>Envio de Alerta PCR pelo iTEAMS®</h4>
                    <p>Complementar o pedido de ajuda ao CODU, enviar o alerta de vítima em PCR através do verbete eletrónico - <strong>iTEAMS®</strong>.</p>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Compressões: 100-120/min, 5-6 cm profundidade</li>
                        <li>Minimizar interrupções (&lt;5 seg)</li>
                        <li>Técnica de hovering para início imediato pós-choque</li>
                        <li>R1 e R2 têm papéis bem definidos</li>
                        <li>Preparar material de VA durante as compressões</li>
                        <li>Enviar alerta PCR pelo iTEAMS®</li>
                    </ul>
                </div>
            `
        }
    };

    // ===== ELEMENTOS =====
    const tabs = document.querySelectorAll('.tab-btn');
    const chapterContent = document.getElementById('chapterContent');
    const tabsWrapper = document.getElementById('tabsWrapper');
    const tabsContainer = document.getElementById('tabsContainer');
    const totalChapters = Object.keys(chapters).length;

    // ===== ELEMENTOS DE NAVEGAÇÃO =====
    const prevBtn = document.getElementById('prevChapter');
    const nextBtn = document.getElementById('nextChapter');
    const backToTopBtn = document.getElementById('backToTop');
    const navDots = document.querySelectorAll('.nav-dot');
    const progressBar = document.getElementById('tabsProgress');
    const breadcrumbProgress = document.querySelector('.breadcrumb-progress');

    let currentChapter = 1;

    // ===== FUNÇÃO PARA SCROLL SUAVE AO TOPO =====
    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }

    // ===== FUNÇÃO PARA ATUALIZAR A BARRA DE PROGRESSO =====
    function updateProgress(chapterNum) {
        const progress = (chapterNum / totalChapters) * 100;
        if (progressBar) {
            progressBar.style.width = progress + '%';
        }
        if (breadcrumbProgress) {
            breadcrumbProgress.textContent = `Capítulo ${chapterNum} de ${totalChapters}`;
        }
        navDots.forEach((dot, index) => {
            dot.classList.toggle('active', index === chapterNum - 1);
        });
        if (prevBtn) prevBtn.disabled = chapterNum === 1;
        if (nextBtn) nextBtn.disabled = chapterNum === totalChapters;
    }

    // ===== FUNÇÃO PARA CARREGAR CAPÍTULO =====
    function loadChapter(num) {
        const chapter = chapters[num];
        if (!chapter) return;

        currentChapter = num;

        tabs.forEach(tab => {
            tab.classList.toggle('active', parseInt(tab.dataset.chapter) === num);
        });

        chapterContent.style.opacity = '0';
        setTimeout(() => {
            chapterContent.innerHTML = chapter.content;
            chapterContent.style.opacity = '1';
        }, 150);

        updateProgress(num);
        scrollToTop();
    }

    // ===== FUNÇÃO PARA SCROLL DAS TABS POR DRAG =====
    let isDown = false;
    let startX = 0;
    let scrollLeftPos = 0;

    function initDragScroll() {
        if (!tabsContainer) return;

        tabsContainer.addEventListener('mousedown', function(e) {
            if (e.target.closest('.tab-btn')) return;
            isDown = true;
            this.style.cursor = 'grabbing';
            startX = e.pageX - this.offsetLeft;
            scrollLeftPos = this.scrollLeft;
            this.style.userSelect = 'none';
        });

        tabsContainer.addEventListener('mouseleave', function() {
            isDown = false;
            this.style.cursor = 'grab';
            this.style.userSelect = '';
        });

        tabsContainer.addEventListener('mouseup', function() {
            isDown = false;
            this.style.cursor = 'grab';
            this.style.userSelect = '';
        });

        tabsContainer.addEventListener('mousemove', function(e) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - this.offsetLeft;
            const walk = (x - startX) * 1.5;
            this.scrollLeft = scrollLeftPos - walk;
        });

        // Scroll com roda do mouse (horizontal)
        tabsContainer.addEventListener('wheel', function(e) {
            if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
                const scrollAmount = e.deltaX || e.deltaY;
                this.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, { passive: false });

        // Touch support para mobile
        let touchStartX = 0;
        let touchScrollLeft = 0;

        tabsContainer.addEventListener('touchstart', function(e) {
            touchStartX = e.touches[0].pageX - this.offsetLeft;
            touchScrollLeft = this.scrollLeft;
        }, { passive: true });

        tabsContainer.addEventListener('touchmove', function(e) {
            const touchX = e.touches[0].pageX - this.offsetLeft;
            const walk = (touchX - touchStartX) * 1.5;
            this.scrollLeft = touchScrollLeft - walk;
        }, { passive: true });
    }

    // ===== FUNÇÃO PARA VERIFICAR OVERFLOW DAS TABS =====
    function checkOverflow() {
        if (!tabsContainer || !tabsWrapper) return;
        const hasOverflow = tabsContainer.scrollWidth > tabsContainer.clientWidth;
        tabsWrapper.classList.toggle('has-overflow', hasOverflow);
    }

    // ===== FUNÇÃO PARA SCROLL PARA O TAB SELECIONADO =====
    function scrollToTab(tab) {
        if (!tabsContainer || !tab) return;
        const containerRect = tabsContainer.getBoundingClientRect();
        const tabRect = tab.getBoundingClientRect();
        const isVisible = (
            tabRect.left >= containerRect.left &&
            tabRect.right <= containerRect.right
        );
        if (!isVisible) {
            const scrollAmount = tab.offsetLeft - tabsContainer.offsetLeft - 20;
            tabsContainer.scrollTo({ left: scrollAmount, behavior: 'smooth' });
        }
    }

    // ===== EVENTOS =====

    // Clique nos tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const num = parseInt(this.dataset.chapter);
            loadChapter(num);
            scrollToTab(this);
        });
    });

    // Botão Anterior
    if (prevBtn) {
        prevBtn.addEventListener('click', function() {
            if (currentChapter > 1) {
                loadChapter(currentChapter - 1);
                const prevTab = document.querySelector(`.tab-btn[data-chapter="${currentChapter}"]`);
                if (prevTab) scrollToTab(prevTab);
            }
        });
    }

    // Botão Próximo
    if (nextBtn) {
        nextBtn.addEventListener('click', function() {
            if (currentChapter < totalChapters) {
                loadChapter(currentChapter + 1);
                const nextTab = document.querySelector(`.tab-btn[data-chapter="${currentChapter}"]`);
                if (nextTab) scrollToTab(nextTab);
            }
        });
    }

    // Botão Voltar ao Topo
    if (backToTopBtn) {
        backToTopBtn.addEventListener('click', scrollToTop);
    }

    // Clique nos dots de navegação
    navDots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            loadChapter(index + 1);
            const tab = document.querySelector(`.tab-btn[data-chapter="${index + 1}"]`);
            if (tab) scrollToTab(tab);
        });
    });

    // Atalhos de teclado
    document.addEventListener('keydown', function(e) {
        const activeTab = document.querySelector('.tab-btn.active');
        if (!activeTab) return;

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            if (currentChapter < totalChapters) {
                loadChapter(currentChapter + 1);
                const nextTab = document.querySelector(`.tab-btn[data-chapter="${currentChapter}"]`);
                if (nextTab) scrollToTab(nextTab);
            }
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            if (currentChapter > 1) {
                loadChapter(currentChapter - 1);
                const prevTab = document.querySelector(`.tab-btn[data-chapter="${currentChapter}"]`);
                if (prevTab) scrollToTab(prevTab);
            }
        } else if (e.key === 'Home') {
            e.preventDefault();
            scrollToTop();
        }
    });

    // ===== INICIALIZAÇÃO =====
    initDragScroll();

    window.addEventListener('resize', checkOverflow);
    window.addEventListener('load', function() {
        setTimeout(checkOverflow, 300);
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                if (href !== '#') {
                    e.preventDefault();
                    const target = document.querySelector(href);
                    if (target) {
                        target.scrollIntoView({ behavior: 'smooth' });
                    }
                }
            });
        });
    });

    // ===== CARREGAR PRIMEIRO CAPÍTULO =====
    loadChapter(1);
    setTimeout(checkOverflow, 200);
});