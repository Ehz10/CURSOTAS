/* script.js - Versão para Emergências de Trauma */
document.addEventListener('DOMContentLoaded', function() {
    // ===== DADOS DOS CAPÍTULOS - EMERGÊNCIAS DE TRAUMA =====
    const chapters = {
        1: {
            title: 'I. INTRODUÇÃO',
            content: `
                <div class="intro-text">
                    <p>O traumatismo é uma lesão proveniente de uma alteração anatómica e fisiológica que ocorre quando o corpo não consegue dissipar, nem absorver uma determinada energia externa que lhe é transmitida. A avaliação dos mecanismos de lesão é fundamental numa situação de trauma, pois é através desta que é possível prever o tipo de lesões numa vítima.</p>
                </div>

                <div class="content-block">
                    <p>Segundo a Organização Mundial da Saúde (OMS), o trauma é responsável por <strong>10%</strong> do total das mortes em todo o mundo, superado pelas doenças cardiovasculares, doenças infectocontagiosas e neoplasias.</p>
                </div>

                <div class="content-block">
                    <p>Entre o primeiro ano de vida e os 44 anos, a primeira causa de morte no trauma diz respeito aos <strong>acidentes/atropelamentos</strong>, a segunda aos <strong>suicídios</strong> e a terceira aos <strong>homicídios</strong>.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-clock"></i>
                    <div>
                        <h4>Hora de Ouro</h4>
                        <p>Concebida em 1960 pelo médico R. Adams Cowley, a <strong>"hora de ouro"</strong> é um período crucial durante o qual é importante iniciar os cuidados definitivos às vítimas de trauma grave. A hora de ouro não se refere estritamente a 60 minutos, varia de vítima para vítima com base nas lesões que sofrem.</p>
                    </div>
                </div>

                <div class="content-block">
                    <p>Ter acesso ao doente, identificar, tratar as lesões com risco de vida, imobilizar quando indicado e transportar o doente até a unidade hospitalar adequada mais próxima, no menor tempo possível, são objetivos essenciais para satisfazer o período dito de ouro.</p>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>O trauma é responsável por 10% das mortes no mundo</li>
                        <li>1ª causa de morte entre 1-44 anos: acidentes/atropelamentos</li>
                        <li>A "hora de ouro" é o período crucial para iniciar cuidados definitivos</li>
                        <li>A avaliação dos mecanismos de lesão é fundamental para prever lesões</li>
                    </ul>
                </div>
            `
        },
        2: {
            title: 'II. MECANISMOS DE LESÃO',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender e identificar os mecanismos capazes de produzir lesões em situações de trauma</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Biomecânica</h3>
                    <p>A biomecânica é o estudo da mecânica dos organismos vivos, ou seja, pretende-se conhecer as forças internas e externas que atuam no corpo humano e os efeitos produzidos por essas forças.</p>
                </div>

                <h2>Fases de uma Colisão</h2>
                <div class="grid-3col">
                    <div class="info-card">
                        <h4>Pré-Colisão</h4>
                        <p>Eventos que precedem o acidente: ingestão de álcool, drogas, medicação, condições patológicas prévias.</p>
                    </div>
                    <div class="info-card">
                        <h4>Colisão</h4>
                        <p>Transferência de energia entre um objeto e uma vítima. Colisão entre a vítima e uma estrutura e/ou movimentação dos órgãos internos.</p>
                    </div>
                    <div class="info-card">
                        <h4>Pós-Colisão</h4>
                        <p>Inicia quando a vítima recebe a energia e ocorre a lesão. Surgem alterações anatómicas e fisiológicas.</p>
                    </div>
                </div>

                <h2>Sistemas de Segurança Passivos</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Cinto de Segurança</h4>
                        <ul>
                            <li>Uma em cada 13 vítimas projetadas sofre lesão na coluna</li>
                            <li>Risco de morte para projetadas é 6x maior</li>
                            <li>Posicionamento correto: cintura pélvica e tórax</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Airbags</h4>
                        <ul>
                            <li>Absorvem lentamente a energia transmitida pelo corpo</li>
                            <li>Esvaziam em &lt;0,5 segundos</li>
                            <li>Não são eficientes em impactos múltiplos</li>
                            <li>Não acionados podem ser perigosos</li>
                        </ul>
                    </div>
                </div>

                <h2>Tipos de Trauma por Região</h2>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Região</th>
                                <th>Trauma Fechado</th>
                                <th>Trauma Aberto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Cabeça</strong></td>
                                <td>Compressão craniana, fratura, lesão encefálica</td>
                                <td>Projétil perfura, energia distribuída em cavidade fechada</td>
                            </tr>
                            <tr>
                                <td><strong>Tórax</strong></td>
                                <td>Fratura de costelas, contusão cardíaca, "efeito saco de papel"</td>
                                <td>Pneumotórax, hemotórax, tamponamento cardíaco</td>
                            </tr>
                            <tr>
                                <td><strong>Abdómen</strong></td>
                                <td>Rotura de órgãos (baço, fígado, rins), compressão contra coluna</td>
                                <td>Lesão de vísceras ocas e sólidas, grande risco hemorrágico</td>
                            </tr>
                            <tr>
                                <td><strong>Pescoço</strong></td>
                                <td>Hiperextensão/hiperflexão, TVM</td>
                                <td>Lesão de estruturas vitais</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Colisões Envolvendo Veículos</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Impacto Frontal</h4>
                        <ul>
                            <li>Trajetória por cima do volante: TCE, lesões torácicas/abdominais</li>
                            <li>Trajetória por baixo: lesões MMII, joelhos</li>
                            <li>"Olho de boi" no vidro</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Impacto Traseiro</h4>
                        <ul>
                            <li>Hiperextensão do pescoço</li>
                            <li>TVM cervical</li>
                            <li>Apoio de cabeça mal posicionado agrava lesões</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Impacto Lateral</h4>
                        <ul>
                            <li>Fraturas da coluna comuns</li>
                            <li>Lesão do baço (lado esquerdo) ou fígado (lado direito)</li>
                            <li>Fratura de costelas, contusão pulmonar</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Capotamento</h4>
                        <ul>
                            <li>Múltiplos embates em vários ângulos</li>
                            <li>Movimento centrífugo</li>
                            <li>Alto risco de TVM e TCE</li>
                            <li>Projeção - alta mortalidade</li>
                        </ul>
                    </div>
                </div>

                <h2>Lesões por Explosão</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Fase Primária</h4>
                        <p>Onda de choque. Lesões em órgãos com gás: tímpano, pulmões, intestinos.</p>
                    </div>
                    <div class="info-card">
                        <h4>Fase Secundária</h4>
                        <p>Projeção de fragmentos e estilhaços. Lesões perfurantes e oculares.</p>
                    </div>
                    <div class="info-card">
                        <h4>Fase Terciária</h4>
                        <p>Projeção da vítima ou queda de estruturas. TVM.</p>
                    </div>
                    <div class="info-card">
                        <h4>Fase Quaternária</h4>
                        <p>Calor e gases. Queimaduras, lesões por inalação, asfixia.</p>
                    </div>
                    <div class="info-card">
                        <h4>Fase Quinária</h4>
                        <p>Radiações, substâncias químicas e biológicas.</p>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A avaliação dos mecanismos de lesão é fundamental para prever lesões</li>
                        <li>É indispensável analisar todos os elementos envolvidos no acidente</li>
                        <li>O conhecimento dos mecanismos de lesão e cinemática é crucial</li>
                        <li>As lesões por explosão têm 5 fases: primária, secundária, terciária, quaternária e quinária</li>
                    </ul>
                </div>
            `
        },
        3: {
            title: 'III. VIA VERDE DE TRAUMA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender quais os critérios de ativação da via verde de trauma</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A abordagem da vítima deverá estar completa nos <strong>20 minutos</strong> após a chegada da equipa.</p>
                    <p>Para a inclusão na via verde trauma é necessário registar: <strong>critérios de gravidade fisiológica, critérios anatómicos e o mecanismo de lesão</strong>.</p>
                </div>

                <h2>Critérios de Gravidade Fisiológica</h2>
                <div class="info-card">
                    <ul>
                        <li><strong>GCS &lt; 9</strong></li>
                        <li><strong>TAS &lt; 90 mmHg</strong></li>
                        <li><strong>FR &lt; 10 ou &gt; 29 cpm</strong></li>
                    </ul>
                </div>

                <h2>Critérios da Anatomia da Lesão</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li>Fratura crânio com afundamento</li>
                            <li>Fratura 2 ossos longos</li>
                            <li>Fratura instável Bacia</li>
                            <li>Retalho costal móvel</li>
                            <li>Amputação proximal (ao punho/tornozelo)</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li>Lesão neurológica</li>
                            <li>Queimadura 2°Grau &gt;20%</li>
                            <li>Queimadura 3°Grau &gt;5%</li>
                            <li>Queimadura da via aérea</li>
                            <li>Queimaduras circunferenciais mãos/pés</li>
                        </ul>
                    </div>
                </div>

                <h2>Mecanismos de Lesão - Critérios de Gravidade</h2>
                <div class="info-card">
                    <ul>
                        <li>Queda &gt;6m</li>
                        <li>Encarceramento &gt;30 min</li>
                        <li>Projeção do veículo</li>
                        <li>Acidente com veículo 2 rodas</li>
                        <li>Atropelamento</li>
                        <li>Mortos no mesmo veículo</li>
                        <li>Enforcamento</li>
                        <li>Submersão/afogamento</li>
                        <li>Arma fogo/arma branca</li>
                        <li>Objeto empalado</li>
                    </ul>
                </div>

                <h2>Escalas de Gravidade</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Escala MGAP</h4>
                        <ul>
                            <li>Varia entre 3 e 29</li>
                            <li>MGAP &lt; 18 = referenciação para centro de trauma</li>
                            <li>Critérios: Mecanismo, GCS, Idade (Age), Pressão arterial</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Escala RTS (Revised Trauma Score)</h4>
                        <ul>
                            <li>Varia entre 0 e 15</li>
                            <li>RTS ≤ 10 = referenciação para centro de trauma</li>
                            <li>Critérios: GCS, FR, TAS</li>
                        </ul>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Critérios fisiológicos: GCS &lt;9, TAS &lt;90, FR &lt;10 ou &gt;29</li>
                        <li>Critérios anatómicos: fraturas graves, amputações, queimaduras extensas</li>
                        <li>MGAP &lt;18 e RTS ≤10 indicam referenciação para centro de trauma</li>
                        <li>Abordagem completa em 20 minutos</li>
                    </ul>
                </div>
            `
        },
        4: {
            title: 'IV. CONTROLO DE HEMORRAGIAS',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Definir os diferentes tipos de hemorragia e identificar as variáveis de gravidade</li>
                        <li>Conhecer os métodos de controlo de hemorragia e as condicionantes associadas</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A hemorragia está identificada como a <strong>principal causa de morte em trauma</strong>.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Tríade Letal em Trauma</h4>
                        <ul>
                            <li><strong>Hipotermia</strong> - temperatura &lt;35°C. A hipotermia moderada (32-34°C) reduz a atividade dos fatores de coagulação em ~10% por cada grau</li>
                            <li><strong>Acidose Metabólica</strong></li>
                            <li><strong>Coagulopatia</strong> - inibe a ação da trombina e prejudica a síntese de fibrinogénio</li>
                        </ul>
                    </div>
                </div>

                <h2>Tipos de Hemorragia</h2>
                <div class="grid-3col">
                    <div class="info-card">
                        <h4>Arterial</h4>
                        <ul>
                            <li>Sangue vermelho vivo</li>
                            <li>Sai em jato</li>
                            <li>Mais abundante e difícil de controlar</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Venosa</h4>
                        <ul>
                            <li>Sangue vermelho-escuro</li>
                            <li>Fluxo regular</li>
                            <li>Menos abundante, mais fácil de controlar</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Capilar</h4>
                        <ul>
                            <li>Sangramento lento</li>
                            <li>Fácil controlo</li>
                            <li>Pode parar espontaneamente</li>
                        </ul>
                    </div>
                </div>

                <h2>Métodos de Controlo de Hemorragias</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Compressão Direta</h4>
                        <ul>
                            <li>Técnica inicial</li>
                            <li>Eficaz na maioria das situações</li>
                            <li>Pressão manual direta sobre a ferida</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Torniquete</h4>
                        <ul>
                            <li>Para hemorragias incontroláveis</li>
                            <li>Aplicação proximal à lesão</li>
                            <li>Não remover após aplicação</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Preenchimento de Feridas</h4>
                        <ul>
                            <li>Para hemorragias profundas</li>
                            <li>Com agentes hemostáticos</li>
                            <li>Compressão após preenchimento</li>
                        </ul>
                    </div>
                </div>

                <h2>Hemorragias por Orifícios Naturais</h2>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Origem</th>
                                <th>Atuação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Otorragias</strong></td>
                                <td>Ouvido</td>
                                <td>Penso para absorver, sem tamponar</td>
                            </tr>
                            <tr>
                                <td><strong>Epistáxis</strong></td>
                                <td>Nariz</td>
                                <td>Compressão nas asas nasais, frio. Não tamponar em TCE</td>
                            </tr>
                            <tr>
                                <td><strong>Hemoptises</strong></td>
                                <td>Pulmões/Traqueia</td>
                                <td>Posição confortável, despistar gravidez</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A hipotermia torna a hemorragia mais difícil de controlar (coagulopatia)</li>
                        <li>3 métodos de controlo: compressão direta, torniquete, preenchimento</li>
                        <li>Hemorragias internas tornam-se visíveis por orifícios naturais</li>
                        <li>Tríade letal: hipotermia, acidose metabólica, coagulopatia</li>
                    </ul>
                </div>
            `
        },
        5: {
            title: 'V. TRAUMATISMO CRANIOENCEFÁLICO (TCE)',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender e identificar os mecanismos capazes de produzir lesões em situações de trauma</li>
                        <li>Distinguir as diferentes lesões cerebrais e respetiva classificação de gravidade</li>
                        <li>Identificar e compreender as causas das lesões do crânio</li>
                        <li>Conhecer a classificação de gravidade de um TCE</li>
                        <li>Definir lesões cerebrais primárias e secundárias</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>O TCE constitui um problema de saúde pública, com taxa considerável de morbilidade e mortalidade em todo o mundo. As causas mais comuns são <strong>quedas e acidentes com veículos motorizados</strong>.</p>
                    <p>Morrem em média <strong>600 pessoas por ano</strong> em Portugal vítimas de TCE grave. A cada ano, <strong>6.000 novos casos graves</strong>.</p>
                </div>

                <h2>Lesões do TCE</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Lesões do Couro Cabeludo</h4>
                        <ul>
                            <li>Muito vascularizado</li>
                            <li>Pequenas lesões causam grande hemorragia</li>
                            <li>Podem levar ao choque</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Fraturas do Crânio</h4>
                        <ul>
                            <li><strong>Lineares</strong> - 80% dos casos, 50% na região temporal</li>
                            <li><strong>Com afundamento</strong> - fragmentos ósseos no encéfalo</li>
                            <li><strong>Da base</strong> - sinal de Battle, Racoon eyes</li>
                            <li><strong>Abertas</strong> - perda de LCR</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-brain"></i>
                    <div>
                        <h4>Lesões Cerebrais</h4>
                        <ul>
                            <li><strong>Primárias</strong> - imediatas após o impacto (concussão, contusão, hematomas)</li>
                            <li><strong>Secundárias</strong> - desencadeiam-se pela lesão primária (hipoxia, isquemia, edema, hipercapnia, hipotensão, aumento da PIC)</li>
                        </ul>
                    </div>
                </div>

                <h2>Sinais e Sintomas</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Sinais Gerais</h4>
                        <ul>
                            <li>AEC (desorientação a inconsciência)</li>
                            <li>Confusão ou alteração de comportamento</li>
                            <li>Amnésia anterógrada</li>
                            <li>Perda de coordenação, tonturas</li>
                            <li>Cefaleias, náuseas, vómitos</li>
                            <li>Alterações da fala</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Sinais Específicos</h4>
                        <ul>
                            <li><strong>Racoon eyes</strong> - equimose periorbital</li>
                            <li><strong>Sinal de Battle</strong> - equimose retroauricular</li>
                            <li>Alteração pupilar (anisocoria)</li>
                            <li>Convulsões</li>
                            <li>Perda de LCR ou sangue por orifícios naturais</li>
                            <li>Postura de descorticação ou descerebração</li>
                        </ul>
                    </div>
                </div>

                <h2>Tríade de Cushing</h2>
                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <ul>
                            <li><strong>Ventilação irregular</strong> (Cheyne-Stokes)</li>
                            <li><strong>Bradicardia</strong></li>
                            <li><strong>Hipertensão</strong> (aumento da PAS)</li>
                        </ul>
                        <p>A elevação mantida da PIC pode levar ao aparecimento destes sinais.</p>
                    </div>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Elevar a cabeceira da maca a <strong>30º</strong>, se TAS ≥ 110 mmHg</li>
                        <li>Se TAS &lt; 110 mmHg, manter posição neutra</li>
                        <li>Não aplicar pensos compressivos em TCE</li>
                        <li>Contraindicada a introdução de dispositivos nasais</li>
                        <li>Administrar oxigénio</li>
                        <li>Transporte sem colar cervical se: alteração de 2 pontos na GCS, alterações pupilares, hemiparesia, Tríade de Cushing</li>
                        <li>Solicitar apoio diferenciado</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>TCE é a principal causa de morte nos politraumatizados</li>
                        <li>Lesão cerebral secundária: hipoxia, isquemia, edema, hipercapnia, hipotensão</li>
                        <li>Prioridade: oxigénio, ventilação adequada, manutenção do débito cardíaco</li>
                        <li>Pedido de apoio diferenciado para unidade com neurocirurgia</li>
                    </ul>
                </div>
            `
        },
        6: {
            title: 'VI. TRAUMATISMO VERTEBROMEDULAR (TVM)',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Dotar os formandos de conhecimentos e competências que lhes permitam atuar perante uma vítima com traumatismo-vertebro medular</li>
                        <li>Definir choque neurogénico, consequências associadas e respetivos sinais e sintomas</li>
                        <li>Conhecer os conceitos de lesões completas e incompletas da medula</li>
                        <li>Descrever os sinais e sintomas associados ao TVM</li>
                        <li>Descrever os procedimentos de imobilização da coluna vertebral</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>O TVM é a principal causa da perda de mobilidade parcial ou total de forma permanente.</p>
                    <p><strong>45,6%</strong> - colisão de veículos motorizados</p>
                    <p><strong>19,6%</strong> - quedas</p>
                    <p><strong>17,8%</strong> - violência</p>
                    <p><strong>10,7%</strong> - lesões desportivas</p>
                </div>

                <h2>Choque Neurogénico vs Choque Medular</h2>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Choque Neurogénico</th>
                                <th>Choque Medular</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Lesão desencadeante</strong></td>
                                <td>Lesão medular em T-6 ou acima</td>
                                <td>Lesão medular a qualquer nível</td>
                            </tr>
                            <tr>
                                <td><strong>Fisiopatologia</strong></td>
                                <td>Perda temporária do tónus simpático</td>
                                <td>Perda da função reflexa abaixo do nível da lesão</td>
                            </tr>
                            <tr>
                                <td><strong>Duração</strong></td>
                                <td>Temporária, frequentemente &lt;72h</td>
                                <td>Variável (horas a semanas)</td>
                            </tr>
                            <tr>
                                <td><strong>Sinais e sintomas</strong></td>
                                <td>Bradicardia, hipotensão, perda da transpiração</td>
                                <td>Flacidez, perda de reflexos</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Choque Neurogénico</h4>
                        <p>Forma de choque distributivo, associado a lesões da medula espinal ao nível de <strong>T-6 ou acima</strong>.</p>
                        <p>Resulta em: <strong>vasodilatação maciça, bradicardia, diminuição do débito cardíaco e hipotensão</strong>.</p>
                    </div>
                </div>

                <h2>Sinais e Sintomas</h2>
                <div class="info-card">
                    <ul>
                        <li>Dor ou hipersensibilidade ao movimento ou à palpação da coluna</li>
                        <li>Deformidade anatómica da coluna</li>
                        <li>Dificuldade ou paragem ventilatória</li>
                        <li>Alterações da resposta motora ou sensitiva</li>
                        <li>Parestesias ou dormência</li>
                        <li>Sinais de choque neurogénico (bradicardia, pele quente/ruborizada, hipotensão)</li>
                        <li>Incontinência de esfíncteres</li>
                        <li>Priapismo</li>
                    </ul>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Proceder a restrição de movimentos de coluna</li>
                        <li>Administrar oxigénio</li>
                        <li>Solicitar apoio diferenciado se: compromisso da VA, dificuldade respiratória, perda súbita de consciência, alteração de 2 pontos na GCS, alteração da resposta motora, sinais de choque neurogénico</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>TVM mais comum em colisões de veículos motorizados (45,6%)</li>
                        <li>Choque neurogénico: bradicardia, hipotensão, pele quente/ruborizada</li>
                        <li>Lesões medulares podem ser completas ou incompletas</li>
                        <li>Pedido de apoio diferenciado para unidade com neurocirurgia</li>
                    </ul>
                </div>
            `
        },
        7: {
            title: 'VII. TRAUMATISMO TORÁCICO',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Distinguir traumatismo torácico aberto de traumatismo torácico fechado</li>
                        <li>Conhecer as principais lesões causadas por traumatismo no tórax</li>
                        <li>Identificar os principais sinais e sintomas das lesões associadas ao traumatismo torácico</li>
                        <li>Explicar a atuação geral e específica dos diferentes traumatismos torácicos</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>Nas vítimas politraumatizadas, cerca de <strong>20 a 25%</strong> resultam em morte. As mortes causadas por traumatismo torácico ocorrem num curto espaço de tempo após o incidente.</p>
                </div>

                <h2>Lesões Torácicas com Risco de Vida</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li>Fraturas de Costelas</li>
                            <li>Retalho (Vollet) costal</li>
                            <li>Pneumotórax</li>
                            <li>Pneumotórax aberto</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li>Pneumotórax hipertensivo</li>
                            <li>Hemotórax</li>
                            <li>Tamponamento cardíaco</li>
                            <li>Lesões dos grandes vasos</li>
                            <li>Rotura do diafragma</li>
                        </ul>
                    </div>
                </div>

                <h2>Fratura de Costelas</h2>
                <div class="info-card">
                    <ul>
                        <li>Mais frequentes: 4ª a 8ª costela (face lateral)</li>
                        <li>Fraturas da 1ª e 2ª costelas: associadas a lesões mais graves</li>
                        <li>Fraturas inferiores (7ª a 12ª): lesões no fígado e baço</li>
                    </ul>
                </div>

                <h2>Retalho Costal (Vollet)</h2>
                <div class="info-card">
                    <ul>
                        <li>Duas ou mais costelas adjacentes fraturadas em 2 pontos</li>
                        <li><strong>Movimento paradoxal</strong></li>
                        <li>Atuação: encorajar a ventilar profundamente</li>
                        <li>Não aplicar ligaduras a envolver o tórax</li>
                    </ul>
                </div>

                <h2>Pneumotórax Hipertensivo</h2>
                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Emergência com risco de vida!</h4>
                        <p>Sinais: ansiedade/agitação, taquipneia superficial, dispneia progressiva, expansão assimétrica, ingurgitamento jugular, desvio da traqueia (tardio), taquicardia, hipotensão, cianose.</p>
                        <p>Atuação: solicitar apoio diferenciado para descompressão, administrar O2.</p>
                    </div>
                </div>

                <h2>Tamponamento Cardíaco</h2>
                <div class="info-card">
                    <h4>Tríade de Beck</h4>
                    <ul>
                        <li>Ingurgitamento das veias jugulares</li>
                        <li>Hipotensão</li>
                        <li>Hipofonese dos sons cardíacos</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Traumatismo torácico: 20-25% de mortalidade</li>
                        <li>Lesões com risco de vida: pneumotórax hipertensivo, tamponamento cardíaco, hemotórax</li>
                        <li>Tríade de Beck: ingurgitamento jugular, hipotensão, hipofonese</li>
                        <li>Pneumotórax hipertensivo requer descompressão imediata</li>
                    </ul>
                </div>
            `
        },
        8: {
            title: 'VIII. TRAUMATISMO ABDOMINAL',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Conhecer as principais lesões causadas por traumatismo abdominal</li>
                        <li>Identificar as complicações associadas à evisceração</li>
                        <li>Reconhecer os sinais e sintomas dos diferentes traumatismos abdominais</li>
                        <li>Descrever a atuação específica perante uma evisceração</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>O traumatismo abdominal é a <strong>principal causa de morte evitável</strong>.</p>
                    <p>Mortalidade: trauma fechado <strong>10 a 30%</strong>; trauma aberto por arma de fogo <strong>5 a 15%</strong>; trauma aberto por arma branca <strong>1 a 2%</strong>.</p>
                </div>

                <h2>Lesões por Órgão</h2>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Órgão</th>
                                <th>Sinais e Sintomas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Fígado</strong></td>
                                <td>Trauma na parte superior do abdómen, choque, peritonite</td>
                            </tr>
                            <tr>
                                <td><strong>Baço</strong></td>
                                <td>Trauma no quadrante superior esquerdo, dor no ombro esquerdo (sinal Kehr)</td>
                            </tr>
                            <tr>
                                <td><strong>Intestinos</strong></td>
                                <td>Forças de compressão e descompressão, má colocação do cinto</td>
                            </tr>
                            <tr>
                                <td><strong>Rins</strong></td>
                                <td>Trauma na região retroperitoneal, perda de sangue ou urina</td>
                            </tr>
                            <tr>
                                <td><strong>Diafragma</strong></td>
                                <td>Aumento da pressão abdominal, compromisso ventilatório</td>
                            </tr>
                            <tr>
                                <td><strong>Evisceração</strong></td>
                                <td>Exteriorização de órgão abdominal</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Evisceração - Atuação</h4>
                        <ul>
                            <li><strong>Não reintroduzir</strong> as vísceras</li>
                            <li>Colocar compressas humedecidas em SF</li>
                            <li>Tapar com película não porosa</li>
                            <li>Posicionar a vítima com joelhos fletidos (trauma isolado)</li>
                        </ul>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Traumatismo abdominal é a principal causa de morte evitável</li>
                        <li>Nenhuma região é mais suscetível a hemorragia severa sem evidência física</li>
                        <li>Evisceração: não reintroduzir, proteger com compressas humedecidas</li>
                        <li>Transporte rápido para SU</li>
                    </ul>
                </div>
            `
        },
        9: {
            title: 'IX. TRAUMATISMO DE TECIDOS MOLES',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Classificar e identificar os diferentes tipos de lesões abertas e fechadas</li>
                        <li>Conhecer as considerações especiais nos traumatismos de tecidos moles</li>
                        <li>Saber os princípios gerais de atuação a prestar numa vítima com uma lesão aberta e fechada</li>
                        <li>Saber os princípios gerais de atuação a prestar numa vítima com um objeto empalado e esmagamento</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Tipos de Lesões</h3>
                </div>

                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Lesões Fechadas</h4>
                        <ul>
                            <li><strong>Edema</strong> - acumulação anormal de fluido</li>
                            <li><strong>Equimose</strong> - lesão de capilares, mancha azul/roxa</li>
                            <li><strong>Hematoma</strong> - rotura de vasos de maior calibre</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Lesões Abertas</h4>
                        <ul>
                            <li><strong>Abrasão/Escoriação</strong> - perda da epiderme</li>
                            <li><strong>Laceração</strong> - bordos irregulares</li>
                            <li><strong>Incisão</strong> - bordos regulares</li>
                            <li><strong>Avulsão</strong> - perda parcial/total de tecido</li>
                            <li><strong>Amputação</strong> - perda parcial/total de um órgão</li>
                            <li><strong>Ferida perfurante</strong> - objeto pontiagudo</li>
                        </ul>
                    </div>
                </div>

                <h2>Considerações Especiais</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Objetos Empalados</h4>
                        <ul>
                            <li><strong>Não remover</strong> o objeto</li>
                            <li>Estabilizar o objeto</li>
                            <li>Controlar hemorragia sem comprimir o objeto</li>
                            <li>Se nos olhos: tapar ambos os olhos</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Síndrome Compartimental</h4>
                        <ul>
                            <li>Aumento de pressão em espaço anatómico restrito</li>
                            <li>Pode ser provocado por trauma, queimadura elétrica</li>
                            <li>Sinais: dor, palidez, parestesia, paresia, ausência de pulso distal</li>
                            <li>Risco de morte dos tecidos &gt;8h</li>
                        </ul>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Lesões da pele: lacerações, abrasões, avulsões, contusões, punções e hematomas</li>
                        <li>Quando a barreira da pele é danificada, risco de infeção</li>
                        <li>Síndrome compartimental: aumento de pressão em espaço restrito</li>
                        <li>Objetos empalados: não remover, estabilizar</li>
                    </ul>
                </div>
            `
        },
        10: {
            title: 'X. TRAUMATISMO MUSCULOESQUELÉTICO',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Identificar os diferentes tipos de traumatismos músculo-esqueléticos</li>
                        <li>Conhecer as lesões músculo-esqueléticas de origem não traumática</li>
                        <li>Definir e identificar a sintomatologia dos diferentes traumatismos músculo-esqueléticos</li>
                        <li>Descrever os princípios da imobilização</li>
                    </ul>
                </div>

                <h2>Tipos de Lesões</h2>
                <div class="grid-3col">
                    <div class="info-card">
                        <h4>Fraturas</h4>
                        <ul>
                            <li>Abertas (expostas)</li>
                            <li>Fechadas</li>
                            <li>Sinais: dor, impotência funcional, deformidade, crepitação, edema</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Luxações</h4>
                        <ul>
                            <li>Perda de contacto das superfícies articulares</li>
                            <li>Deformidade evidente</li>
                            <li>Impotência funcional</li>
                            <li>Imobilizar na posição encontrada</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Entorses</h4>
                        <ul>
                            <li>Rotura/estiramento de ligamentos</li>
                            <li>Dor, edema, equimose</li>
                            <li>RICE: Rest, Ice, Compression, Elevation</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Cinto Pélvico - Critérios de Aplicação</h4>
                        <p>Considerar aplicação sempre que haja mecanismo de lesão sugestivo de trauma abdominopélvico fechado de alta cinética associado a:</p>
                        <ul>
                            <li>Sinais de choque</li>
                            <li>VDS ou GCS &lt;13</li>
                            <li>Lesão distrativa</li>
                            <li>Dor/deformação pélvica</li>
                        </ul>
                        <p>Basta <strong>apenas um critério</strong> para recomendar a aplicação.</p>
                    </div>
                </div>

                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Fratura</th>
                                <th>Perdas Sanguíneas (ml)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Costela</td>
                                <td>125</td>
                            </tr>
                            <tr>
                                <td>Rádio ou cúbito</td>
                                <td>250-500</td>
                            </tr>
                            <tr>
                                <td>Úmero</td>
                                <td>500-750</td>
                            </tr>
                            <tr>
                                <td>Tíbia ou perónio</td>
                                <td>500-1000</td>
                            </tr>
                            <tr>
                                <td>Fémur</td>
                                <td>1000-2000</td>
                            </tr>
                            <tr>
                                <td>Cintura pélvica</td>
                                <td>1000 - exsanguinação</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Fraturas: abertas ou fechadas</li>
                        <li>Sinais: deformação, encurtamento, edema, equimose, perda de função</li>
                        <li>Cinto pélvico: aplicar precocemente em trauma pélvico</li>
                        <li>Imobilizar osso acima e abaixo da lesão</li>
                    </ul>
                </div>
            `
        },
        11: {
            title: 'XI. TRAUMA TÉRMICO',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Conhecer o mecanismo de termorregulação</li>
                        <li>Identificar os fatores de risco para as emergências provocadas por ambiente térmico</li>
                        <li>Descrever os sinais e sintomas dos diferentes tipos de emergências provocadas por ambiente térmico</li>
                        <li>Refletir sobre a importância da avaliação do local da ocorrência</li>
                        <li>Explicar os princípios de atuação</li>
                    </ul>
                </div>

                <h2>Golpe de Calor</h2>
                <div class="definition-box">
                    <p>Emergência provocada pelo calor com maior risco de morte. Temperatura corporal ≥ <strong>41°C</strong>.</p>
                    <p>Caracterizado por: <strong>disfunção do SNC, delírios, convulsões ou outras AEC</strong>.</p>
                </div>

                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Sinais e Sintomas</h4>
                        <ul>
                            <li>AEC, tremores, convulsões</li>
                            <li>Pupilas mióticas</li>
                            <li>Taquipneia → bradipneia</li>
                            <li>Taquicardia → bradicardia</li>
                            <li>Pulso fino, hipotensão</li>
                            <li>Vasodilatação periférica</li>
                            <li>Pele vermelha e quente</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Atuação</h4>
                        <ul>
                            <li>Remover do ambiente quente</li>
                            <li>Arrefecimento rápido (água tépida, ventilação)</li>
                            <li>Sacos de frio no pescoço, virilhas, axilas</li>
                            <li>PLS, O2</li>
                            <li>Arrefecer até 39°C</li>
                            <li>Hidratação oral se deglutição mantida</li>
                        </ul>
                    </div>
                </div>

                <h2>Hipotermia</h2>
                <div class="definition-box">
                    <p>Descida da temperatura corporal abaixo dos <strong>35°C</strong>.</p>
                </div>

                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Gravidade</th>
                                <th>Temperatura</th>
                                <th>Sinais e Sintomas</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Leve</strong></td>
                                <td>35-32°C</td>
                                <td>Tremores exacerbados, diminuição da coordenação/raciocínio, fala arrastada, apatia</td>
                            </tr>
                            <tr>
                                <td><strong>Moderada</strong></td>
                                <td>32-28°C</td>
                                <td>Depressão respiratória, bradicardia, fibrilhação auricular</td>
                            </tr>
                            <tr>
                                <td><strong>Severa</strong></td>
                                <td>&lt;28°C</td>
                                <td>Perda profunda dos reflexos, pupilas dilatadas e arreativas, fibrilhação ventricular</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="info-card">
                    <h4>Atuação na Hipotermia</h4>
                    <ul>
                        <li>Remover de ambientes frios, húmidos e ventosos</li>
                        <li>Retirar roupa molhada, secar a pele</li>
                        <li>Sacos de calor no pescoço, tórax, axilas, virilhas</li>
                        <li>Manta isotérmica, manter cabeça quente</li>
                        <li>Aquecer a célula sanitária</li>
                        <li>Líquidos aquecidos (sem cafeína/álcool) se deglutição mantida</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Crianças e idosos têm limitações na termorregulação</li>
                        <li>Golpe de calor: temperatura ≥41°C, AEC</li>
                        <li>Hipotermia: &lt;35°C</li>
                        <li>Aquecimento progressivo e controlado</li>
                    </ul>
                </div>
            `
        },
        12: {
            title: 'XII. AFOGAMENTO E BAROTRAUMA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Definir afogamento</li>
                        <li>Definir barotraumatismo</li>
                        <li>Distinguir os vários tipos de barotraumatismo</li>
                        <li>Compreender o comportamento do azoto no corpo humano</li>
                        <li>Descrever os princípios gerais de atuação numa vítima de afogamento e barotraumatismo</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Afogamento</h3>
                    <p>Todo o evento em que há <strong>compromisso da ventilação</strong> devido à submersão ou imersão num líquido.</p>
                    <p>Segundo a OMS, é uma das principais causas de morte e incapacidade a nível mundial.</p>
                </div>

                <h2>Progressão do Afogamento</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Fases</h4>
                        <ul>
                            <li>Apneia</li>
                            <li>Laringospasmo</li>
                            <li>Hipóxia tecidular</li>
                            <li>Falha multiorgânica</li>
                            <li>Paragem cardiorrespiratória</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Fatores que Afetam a Evolução</h4>
                        <ul>
                            <li><strong>Temperatura</strong> - água fria melhora prognóstico</li>
                            <li><strong>Duração da submersão</strong> - menor tempo = melhor prognóstico</li>
                            <li><strong>Qualidade da água</strong> - contaminada piora</li>
                            <li><strong>Idade</strong> - menor idade melhor prognóstico</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Barotrauma</h4>
                        <p>Lesões provocadas nos tecidos por efeito mecânico da pressão. Resultam da expansão dos gases contidos nas cavidades do organismo.</p>
                        <ul>
                            <li><strong>Lei de Boyle</strong>: os gases expandem quando a pressão diminui</li>
                            <li><strong>Lei de Henry</strong>: grandes quantidades de gás dissolvem-se em líquidos a pressões elevadas</li>
                        </ul>
                    </div>
                </div>

                <h2>Tipos de Barotrauma</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Durante a Descida</h4>
                        <ul>
                            <li>Lesão do ouvido - dor intensa, perda de audição</li>
                            <li>Lesão dos seios perinasais - dor intensa</li>
                            <li>Manobra de Valsava pode compensar</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Durante a Subida</h4>
                        <ul>
                            <li><strong>Hiperpressurização pulmonar</strong> - rotura alveolar, pneumotórax</li>
                            <li><strong>Doença da descompressão</strong> - rash, dores articulares, dispneia</li>
                            <li><strong>Narcose do azoto</strong> - alterações de comportamento</li>
                            <li><strong>Síncope das águas pouco profundas</strong> - perda de consciência na superfície</li>
                        </ul>
                    </div>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Considerar imobilização vertebromedular</li>
                        <li>Prevenir hipotermia (remover roupas molhadas, manta térmica)</li>
                        <li>Administrar O2</li>
                        <li>Estar atento a vómito</li>
                        <li>Recolher história do mergulho</li>
                        <li>Transporte para unidade com câmara hiperbárica</li>
                        <li>Transporte em decúbito dorsal, por via terrestre</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Afogamento: compromisso da ventilação por submersão</li>
                        <li>Barotrauma: lesões por efeito mecânico da pressão</li>
                        <li>Lei de Boyle: gases expandem com a diminuição da pressão</li>
                        <li>Doença da descompressão: azoto dissolve-se no sangue</li>
                        <li>Transporte para câmara hiperbárica</li>
                    </ul>
                </div>
            `
        },
        13: {
            title: 'XIII. QUEIMADURAS',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Definir queimadura</li>
                        <li>Compreender as diferentes causas de queimaduras</li>
                        <li>Reconhecer os diferentes tipos de queimaduras quanto à profundidade</li>
                        <li>Identificar a extensão de uma queimadura através dos diferentes métodos</li>
                        <li>Reconhecer as queimaduras que requerem especial atenção</li>
                        <li>Descrever os cuidados de emergência pré-hospitalares</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>Mais de <strong>um quarto de milhão de mortes</strong> em todo o mundo por queimaduras.</p>
                </div>

                <h2>Causas de Queimaduras</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li><strong>Térmica</strong> - mais comum, exposição ao calor</li>
                            <li><strong>Química</strong> - ácidos, bases, compostos orgânicos</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li><strong>Elétrica</strong> - contacto direto, arco elétrico</li>
                            <li><strong>Radiação</strong> - raios X, gama, UV</li>
                        </ul>
                    </div>
                </div>

                <h2>Profundidade das Queimaduras</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>1º Grau (Epidérmica)</h4>
                        <ul>
                            <li>Apenas epiderme</li>
                            <li>Rubor, dor local</li>
                            <li>Ex: queimadura solar</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>2º Grau (Parcial)</h4>
                        <ul>
                            <li>Epiderme + parte da derme</li>
                            <li>Edema, flictenas (bolhas)</li>
                            <li>Dor local</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>3º Grau (Profunda)</h4>
                        <ul>
                            <li>Epiderme + derme completa</li>
                            <li>Destruição dos recetores sensitivos</li>
                            <li>Não há dor na queimadura</li>
                            <li>Aspeto de couro</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>4º Grau</h4>
                        <ul>
                            <li>Todas as camadas da pele</li>
                            <li>Músculos, ossos e/ou órgãos internos</li>
                            <li>Extrema gravidade</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-thermometer-half"></i>
                    <div>
                        <h4>Regra dos 9</h4>
                        <ul>
                            <li>Cabeça e pescoço: 9%</li>
                            <li>Cada membro superior: 9%</li>
                            <li>Tórax anterior: 9%</li>
                            <li>Tórax posterior: 9%</li>
                            <li>Abdómen anterior: 9%</li>
                            <li>Abdómen posterior: 9%</li>
                            <li>Cada membro inferior: 18%</li>
                            <li>Períneo: 1%</li>
                        </ul>
                        <p><strong>Palma da mão</strong> (incluindo dedos) = <strong>1%</strong> da SCQ</p>
                    </div>
                </div>

                <h2>Atuação</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Queimaduras Térmicas</h4>
                        <ul>
                            <li>Arrefecer com água tépida ou SF (5-10 min)</li>
                            <li>Remover roupas não aderidas</li>
                            <li>Tapar com compressas secas ou hidrogel</li>
                            <li>Evitar hipotermia</li>
                            <li>Transporte para unidade de queimados</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Queimaduras Elétricas</h4>
                        <ul>
                            <li>Não tocar sem garantir que a corrente foi desligada</li>
                            <li>Considerar cinemática de trauma associada</li>
                            <li>Solicitar apoio diferenciado</li>
                            <li>Monitorização cardíaca</li>
                        </ul>
                    </div>
                </div>

                <div class="info-card">
                    <h4>Queimaduras Químicas</h4>
                    <ul>
                        <li>Consultar ficha de segurança e contactar CIAV</li>
                        <li>Utilizar EPI adequado</li>
                        <li>Abordar com o "vento pelas costas" (se pó)</li>
                        <li>Remover vestuário e fechar em saco</li>
                        <li>Lavar abundantemente com água tépida (se indicado)</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Queimaduras classificadas em 4 graus</li>
                        <li>Causa de morte mais frequente em incêndios: inalação de substâncias tóxicas</li>
                        <li>Em PCR por eletrocussão, hipóteses de sobrevivência são elevadas se manobras iniciadas de imediato</li>
                        <li>Queimaduras da via aérea: pedir apoio diferenciado precocemente</li>
                    </ul>
                </div>
            `
        },
        14: {
            title: 'XIV. TRAUMA NA GRÁVIDA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender as especificidades do trauma na grávida</li>
                        <li>Identificar atuação específica para a grávida</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>O trauma é a <strong>principal causa de morbidade e mortalidade na gravidez</strong>. Cerca de <strong>6% a 7%</strong> de todas as grávidas são vítimas de algum tipo de trauma.</p>
                    <p>As causas mais frequentes: <strong>acidentes de viação e quedas</strong>.</p>
                </div>

                <h2>Alterações Fisiológicas na Grávida</h2>
                <div class="info-card">
                    <ul>
                        <li>Aumento do volume sanguíneo</li>
                        <li>Aumento do débito cardíaco</li>
                        <li>Diminuição da pressão arterial (10-15 mmHg mais baixa)</li>
                        <li>Alterações no padrão respiratório (útero eleva o diafragma)</li>
                        <li>FC normal 10-15 bpm mais rápida</li>
                    </ul>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Lateralização da Grávida</h4>
                        <p>A pressão arterial da grávida com mais de 20 semanas de gestação, em decúbito dorsal, leva a hipotensão pelo peso do útero na veia cava inferior.</p>
                        <p><strong>Lateralizar a vítima entre 15° a 30° para a esquerda</strong> para descomprimir a veia cava e melhorar a perfusão placentária.</p>
                    </div>
                </div>

                <h2>Particularidades do Trauma</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Traumatismo Fechado</h4>
                        <ul>
                            <li>Líquido amniótico protege o feto</li>
                            <li>Lesão fetal por embate violento</li>
                            <li>Cinto de segurança: segmento abdominal sobre as cristas ilíacas</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Traumatismo Aberto</h4>
                        <ul>
                            <li>Útero exposto após 1º trimestre</li>
                            <li>Líquido amniótico funciona como amortecedor</li>
                            <li>Feto pequeno = mais suscetível a trauma</li>
                        </ul>
                    </div>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Lateralizar a vítima (15° a 30°) para a esquerda</li>
                        <li>Se imobilizada: colocar altura por baixo do dispositivo do lado direito</li>
                        <li>Cinto pélvico: passar por baixo da barriga</li>
                        <li>Considerar transporte para unidade com traumatologia e obstetrícia</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Considerar alterações anatomofisiológicas da gravidez</li>
                        <li>Lateralizar 15-30° para esquerda</li>
                        <li>Transporte para unidade com traumatologia e obstetrícia</li>
                    </ul>
                </div>
            `
        },
        15: {
            title: 'XV. TRAUMA NA PEDIATRIA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Enumerar os tipos de lesões mais frequentes na criança vítima de trauma</li>
                        <li>Descrever as particularidades da criança quando sujeita a trauma</li>
                        <li>Descrever a importância da identificação do mecanismo do trauma</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A criança vítima de trauma não se trata de um adulto de menores dimensões, mas sim de um tipo de doente com <strong>características especiais</strong>, decorrentes do seu processo de desenvolvimento e maturação.</p>
                </div>

                <h2>Particularidades por Região</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>TCE em Pediatria</h4>
                        <ul>
                            <li>Uma das causas mais comuns de morte</li>
                            <li>Cabeça proporcionalmente maior</li>
                            <li>Melhor prognóstico que adultos</li>
                            <li>Lesão cerebral secundária: hipoxia e choque</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>TVM em Pediatria</h4>
                        <ul>
                            <li>Raro devido à elasticidade óssea</li>
                            <li>Mais comum ao nível cervical</li>
                            <li>Cabeça pesada e ligamentos imaturos</li>
                            <li>Elevar o tronco para posição neutra</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Trauma Torácico</h4>
                        <ul>
                            <li>Fratura de costelas rara</li>
                            <li>Sinais visíveis: taquipneia, adejo nasal, respiração abdominal</li>
                            <li>Aplicar O2 precocemente</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Trauma Abdominal</h4>
                        <ul>
                            <li>2ª maior causa de morte</li>
                            <li>Lesões em órgãos sólidos</li>
                            <li>Marca de cinto = sinal de gravidade</li>
                            <li>Fígado e baço relativamente grandes</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Fraturas em "Ramo Verde"</h4>
                        <p>As fraturas que rompem o periósteo em apenas um dos lados do osso são as <strong>mais comuns</strong> em crianças. O periósteo é uma membrana altamente vascularizada que envolve os ossos.</p>
                    </div>
                </div>

                <h2>Considerações Especiais</h2>
                <div class="info-card">
                    <ul>
                        <li>Taquicardia persistente é o indicador precoce de choque mais confiável</li>
                        <li>A hipotensão é um sinal tardio</li>
                        <li>O TVM é mais comum ao nível cervical</li>
                        <li>Na imobilização da cabeça, garantir posição neutra (elevar o tronco)</li>
                        <li>Lesões abdominais são difíceis de identificar - principal queixa: dor abdominal</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A hipotensão é um sinal tardio - taquicardia é o indicador precoce</li>
                        <li>TVM mais comum ao nível cervical</li>
                        <li>Garantir posição neutra na imobilização</li>
                        <li>Fraturas em "ramo verde" são as mais comuns</li>
                        <li>Lesões abdominais são subtis - principal queixa é dor abdominal</li>
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
    const scrollLeftBtn = document.getElementById('scrollLeft');
    const scrollRightBtn = document.getElementById('scrollRight');

    // ===== FUNÇÕES =====
    function loadChapter(num) {
        const chapter = chapters[num];
        if (!chapter) return;

        tabs.forEach(tab => {
            tab.classList.toggle('active', parseInt(tab.dataset.chapter) === num);
        });

        chapterContent.style.opacity = '0';
        setTimeout(() => {
            chapterContent.innerHTML = chapter.content;
            chapterContent.style.opacity = '1';
        }, 150);

        if (window.innerWidth < 768) {
            document.querySelector('.chapter-content-wrapper').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function scrollTabs(direction) {
        const scrollAmount = tabsContainer.clientWidth * 0.6;
        tabsContainer.scrollBy({ left: direction * scrollAmount, behavior: 'smooth' });
    }

    function checkOverflow() {
        if (!tabsContainer || !tabsWrapper) return;
        
        const hasOverflow = tabsContainer.scrollWidth > tabsContainer.clientWidth;
        tabsWrapper.classList.toggle('has-overflow', hasOverflow);
        
        if (scrollLeftBtn && scrollRightBtn) {
            const maxScroll = tabsContainer.scrollWidth - tabsContainer.clientWidth;
            const atStart = tabsContainer.scrollLeft <= 5;
            const atEnd = tabsContainer.scrollLeft >= maxScroll - 5;
            
            if (window.innerWidth > 768) {
                scrollLeftBtn.style.display = (hasOverflow && !atStart) ? 'flex' : 'none';
                scrollRightBtn.style.display = (hasOverflow && !atEnd) ? 'flex' : 'none';
            } else {
                scrollLeftBtn.style.display = 'flex';
                scrollRightBtn.style.display = 'flex';
            }
        }
    }

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
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const num = parseInt(this.dataset.chapter);
            loadChapter(num);
            scrollToTab(this);
        });
    });

    if (scrollLeftBtn) {
        scrollLeftBtn.addEventListener('click', () => scrollTabs(-1));
    }
    if (scrollRightBtn) {
        scrollRightBtn.addEventListener('click', () => scrollTabs(1));
    }

    if (tabsContainer) {
        tabsContainer.addEventListener('wheel', function(e) {
            if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
                const scrollAmount = e.deltaX || e.deltaY;
                this.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, { passive: false });

        let isDown = false;
        let startX = 0;
        let scrollLeft = 0;

        tabsContainer.addEventListener('mousedown', function(e) {
            if (e.target.closest('.tab-btn')) return;
            isDown = true;
            this.style.cursor = 'grabbing';
            startX = e.pageX - this.offsetLeft;
            scrollLeft = this.scrollLeft;
        });

        tabsContainer.addEventListener('mouseleave', function() {
            isDown = false;
            this.style.cursor = 'grab';
        });

        tabsContainer.addEventListener('mouseup', function() {
            isDown = false;
            this.style.cursor = 'grab';
        });

        tabsContainer.addEventListener('mousemove', function(e) {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - this.offsetLeft;
            const walk = (x - startX) * 1.5;
            this.scrollLeft = scrollLeft - walk;
        });

        tabsContainer.addEventListener('scroll', checkOverflow);
    }

    window.addEventListener('resize', checkOverflow);
    window.addEventListener('load', function() {
        setTimeout(checkOverflow, 300);
    });

    document.addEventListener('keydown', function(e) {
        const activeTab = document.querySelector('.tab-btn.active');
        if (!activeTab) return;

        const tabsArray = Array.from(tabs);
        const currentIndex = tabsArray.indexOf(activeTab);

        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            const nextIndex = (currentIndex + 1) % tabsArray.length;
            loadChapter(parseInt(tabsArray[nextIndex].dataset.chapter));
            scrollToTab(tabsArray[nextIndex]);
        } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            const prevIndex = (currentIndex - 1 + tabsArray.length) % tabsArray.length;
            loadChapter(parseInt(tabsArray[prevIndex].dataset.chapter));
            scrollToTab(tabsArray[prevIndex]);
        }
    });

    loadChapter(1);
    setTimeout(checkOverflow, 200);
});