/* script.js */
document.addEventListener('DOMContentLoaded', function() {
    // ===== DADOS DOS CAPÍTULOS =====
    const chapters = {
        1: {
            title: 'I. INTRODUÇÃO',
            content: `
                <div class="intro-text">
                    <p>Bem-vindo ao Manual de Introdução à Emergência Pré-hospitalar, uma fonte projetada para capacitar Tripulantes de Ambulância na gestão eficaz de situações críticas.</p>
                </div>

                <div class="content-block">
                    <p>Ao longo dos capítulos, exploraremos o <strong>Sistema Integrado de Emergência Médica</strong>, mergulhando nos <strong>aspetos éticos e legais</strong> que regem as ações em momentos cruciais. Além disso, aprofundaremos alguns conceitos da <strong>anatomia e fisiologia</strong>, proporcionando uma base sólida para intervenções urgentes e emergentes mais precisas e fundamentadas.</p>
                </div>

                <div class="content-block">
                    <p>A secção dedicada à <strong>higiene e segurança</strong> da vítima fornecerá diretrizes essenciais para minimizar a infeção, enquanto os <strong>aspetos ergonómicos</strong> destacam a importância do bem-estar físico dos profissionais durante as operações de socorro.</p>
                </div>

                <div class="content-block">
                    <p>Este manual não estaria completo sem abordar as <strong>comunicações via rádio</strong>, uma ferramenta vital na coordenação eficiente de esforços de socorro.</p>
                </div>

                <div class="highlight-box">
                    <p>Este manual visa não apenas transmitir conhecimento, mas também cultivar uma <strong>mentalidade ética e responsável</strong>, essencial para enfrentar desafios complexos em ambientes dinâmicos de emergência.</p>
                </div>

                <div class="content-block">
                    <p>Ao percorrer estas páginas, juntamente com os restantes manuais, esperamos que se sinta mais preparado e confiante para responder de maneira diligente e eficiente às mais variadas situações críticas que surgem no âmbito da emergência médica.</p>
                </div>

                <div class="final-message">
                    <p><strong>Juntos, comprometemo-nos a elevar os padrões de qualidade na prestação de cuidados de saúde de emergência e contribuir para comunidades mais seguras e saudáveis.</strong></p>
                </div>
            `
        },
        2: {
            title: 'II. SISTEMA INTEGRADO DE EMERGÊNCIA MÉDICA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Identificar as fases do SIEM</li>
                        <li>Conhecer os intervenientes do SIEM</li>
                        <li>Identificar os subsistemas do INEM</li>
                        <li>Compreender a rede de referenciação hospitalar</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>O que é o SIEM?</h3>
                    <p><strong>Sistema Integrado de Emergência Médica (SIEM)</strong> consiste num conjunto de ações coordenadas, de âmbito pré-hospitalar, hospitalar e inter-hospitalar, que resultam da intervenção ativa e dinâmica dos vários componentes do sistema de saúde nacional, de modo a possibilitar uma atuação rápida, eficaz e com economia de meios em situações de emergência médica.</p>
                    <p class="small-note">Compreende toda a atividade de urgência/emergência, nomeadamente o sistema de socorro pré-hospitalar, o transporte, a receção hospitalar e a adequada referenciação do doente urgente/emergente.</p>
                </div>

                <h2>A "Estrela da Vida"</h2>
                <p>A "Estrela da Vida" é o símbolo internacional dos serviços de emergência médica. É composta por seis faixas, tendo localizado no seu centro, ao alto, o bastão de Esculápio com uma serpente enrolada. As seis faixas correspondem às fases que constituem um ciclo completo de ações em termos de Emergência Médica.</p>

                <div class="life-star-grid">
                    <div class="life-star-item">
                        <span class="star-number">1</span>
                        <div>
                            <h4>Deteção</h4>
                            <p>Momento em que alguém se apercebe da existência de uma ou mais vítimas de doença súbita ou acidente.</p>
                        </div>
                    </div>
                    <div class="life-star-item">
                        <span class="star-number">2</span>
                        <div>
                            <h4>Alerta</h4>
                            <p>Fase em que se contactam os serviços de emergência, utilizando o <strong>Número Europeu de Emergência - 112</strong>.</p>
                        </div>
                    </div>
                    <div class="life-star-item">
                        <span class="star-number">3</span>
                        <div>
                            <h4>Pré-socorro</h4>
                            <p>Conjunto de gestos simples que podem e devem ser efetuados até à chegada do socorro.</p>
                        </div>
                    </div>
                    <div class="life-star-item">
                        <span class="star-number">4</span>
                        <div>
                            <h4>Socorro</h4>
                            <p>Cuidados de emergência iniciais efetuados às vítimas com o objetivo de as estabilizar, diminuindo assim a morbilidade e a mortalidade.</p>
                        </div>
                    </div>
                    <div class="life-star-item">
                        <span class="star-number">5</span>
                        <div>
                            <h4>Cuidados durante o transporte</h4>
                            <p>Transporte assistido da vítima numa ambulância com características, tripulação e carga bem definidas, desde o local da ocorrência até à unidade de saúde adequada.</p>
                        </div>
                    </div>
                    <div class="life-star-item">
                        <span class="star-number">6</span>
                        <div>
                            <h4>Transferência e tratamento definitivo</h4>
                            <p>Tratamento no serviço de saúde mais adequado ao estado clínico da vítima.</p>
                        </div>
                    </div>
                </div>

                <h2>Intervenientes no SIEM</h2>
                <div class="intervenientes-grid">
                    <span class="tag blue">Cidadão</span>
                    <span class="tag blue">Operadores das Centrais 112</span>
                    <span class="tag blue">Agentes da Autoridade</span>
                    <span class="tag blue">Bombeiros</span>
                    <span class="tag blue">Cruz Vermelha Portuguesa</span>
                    <span class="tag blue">Tripulantes de Ambulância</span>
                    <span class="tag blue">Técnicos de Emergência Pré-Hospitalar</span>
                    <span class="tag blue">Médicos</span>
                    <span class="tag blue">Enfermeiros</span>
                    <span class="tag blue">Pessoal Técnico Hospitalar</span>
                    <span class="tag blue">Pessoal Técnico de Telecomunicações</span>
                    <span class="tag blue">Pessoal Técnico de Informática</span>
                </div>

                <h2>Número Europeu de Emergência - 112</h2>
                <div class="info-box highlight">
                    <i class="fa-solid fa-phone"></i>
                    <div>
                        <p><strong>Criado em 1991</strong> · Gratuito · Não precisa de indicativo</p>
                        <p>Pode ser marcado a partir de dispositivos das redes fixa (incluindo telefones públicos) ou móvel, tendo prioridade sobre as outras chamadas.</p>
                        <p><strong>Em Portugal:</strong> 4 centros operacionais (2 no continente, 2 nas Regiões Autónomas)</p>
                    </div>
                </div>

                <h3>Centros Operacionais 112</h3>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Centro</th>
                                <th>Responsabilidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>112CONOR</strong></td>
                                <td>Aveiro, Braga, Bragança, Coimbra, Guarda, Porto, Viana do Castelo, Vila Real, Viseu</td>
                            </tr>
                            <tr>
                                <td><strong>112COSUL</strong></td>
                                <td>Beja, Castelo Branco, Évora, Faro, Leiria, Lisboa, Portalegre, Santarém, Setúbal</td>
                            </tr>
                            <tr>
                                <td><strong>112COAZR</strong></td>
                                <td>Região Autónoma dos Açores</td>
                            </tr>
                            <tr>
                                <td><strong>112COMDR</strong></td>
                                <td>Região Autónoma da Madeira</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Coordenação do SIEM - INEM</h2>
                <div class="definition-box">
                    <p>O <strong>INEM</strong> é o organismo do Ministério da Saúde ao qual cabe coordenar o funcionamento do Sistema Integrado de Emergência Médica, no território de Portugal Continental, de forma a garantir às vítimas em situação de emergência a pronta e correta prestação de cuidados de saúde.</p>
                </div>

                <h3>Competências dos Centros Operacionais 112</h3>
                <ul class="styled-list">
                    <li>O atendimento ao público, identificação e caracterização das ocorrências</li>
                    <li>O apoio especializado para situações especiais, ao nível de segurança pública, proteção civil ou emergência médica</li>
                    <li>O encaminhamento das ocorrências para as entidades competentes visando o despacho dos meios de socorro</li>
                </ul>
                <p class="small-note">A gestão operacional do serviço 112 compete à Direção Nacional da Polícia de Segurança Pública (PSP).</p>

                <h2>CODU - Centro de Orientação de Doentes Urgentes</h2>
                <div class="definition-box">
                    <p>Compete ao <strong>CODU</strong> atender e avaliar no mais curto espaço de tempo os pedidos de socorro recebidos, com o objetivo de determinar os recursos necessários e adequados a cada situação.</p>
                </div>

                <div class="grid-2col">
                    <div class="info-card">
                        <h4><i class="fa-solid fa-list-check"></i> Funções do CODU</h4>
                        <ul>
                            <li>Avaliar, através de um sistema de algoritmos de triagem, os pedidos de socorro</li>
                            <li>Aconselhar os cidadãos a realizar manobras básicas de emergência</li>
                            <li>Selecionar e acionar os meios de emergência médica adequados</li>
                            <li>Aconselhar as equipas no terreno</li>
                            <li>Proceder à correta referenciação do doente urgente/emergente</li>
                            <li>Assegurar o contacto com as unidades de saúde</li>
                            <li>Gerir as telecomunicações de emergência</li>
                            <li>Promover a resposta integrada ao doente urgente/emergente</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-satellite-dish"></i> Serviços Específicos</h4>
                        <ul>
                            <li><strong>CODU Mar</strong> - Aconselhamento médico a embarcações</li>
                            <li><strong>CIAV</strong> - Centro de Informação Antivenenos <span class="badge">800 250 250</span></li>
                            <li><strong>CAPIC</strong> - Centro de Apoio Psicológico e Intervenção em Crise</li>
                        </ul>
                    </div>
                </div>

                <h2>Meios INEM</h2>
                <div class="meios-grid">
                    <div class="meio-card">
                        <i class="fa-solid fa-helicopter"></i>
                        <h4>Helicópteros (SHEM)</h4>
                        <p>Transporte de doentes graves com SAV</p>
                        <span class="tag blue">Médico + Enfermeiro</span>
                    </div>
                    <div class="meio-card">
                        <i class="fa-solid fa-car"></i>
                        <h4>VMER</h4>
                        <p>Viatura Médica de Emergência e Reanimação</p>
                        <span class="tag blue">Médico + Enfermeiro</span>
                    </div>
                    <div class="meio-card">
                        <i class="fa-solid fa-ambulance"></i>
                        <h4>TIP</h4>
                        <p>Transporte Inter-hospitalar Pediátrico</p>
                        <span class="tag orange">Médico + Enfermeiro + TEPH</span>
                    </div>
                    <div class="meio-card">
                        <i class="fa-solid fa-truck-medical"></i>
                        <h4>AEM</h4>
                        <p>Ambulância de Emergência Médica</p>
                        <span class="tag blue">2 TEPH</span>
                    </div>
                    <div class="meio-card">
                        <i class="fa-solid fa-heart-pulse"></i>
                        <h4>SIV</h4>
                        <p>Suporte Imediato de Vida</p>
                        <span class="tag green">Enfermeiro + TEPH</span>
                    </div>
                    <div class="meio-card">
                        <i class="fa-solid fa-motorcycle"></i>
                        <h4>MEM</h4>
                        <p>Motociclo de Emergência Médica</p>
                        <span class="tag purple">TEPH</span>
                    </div>
                    <div class="meio-card">
                        <i class="fa-solid fa-people-group"></i>
                        <h4>UMIPE</h4>
                        <p>Unidade Móvel de Intervenção Psicológica</p>
                        <span class="tag purple">TEPH + Psicólogo</span>
                    </div>
                    <div class="meio-card">
                        <i class="fa-solid fa-tent"></i>
                        <h4>VIC / PT EMT</h4>
                        <p>Viatura de Intervenção em Catástrofe</p>
                        <span class="tag red">Hospital de Campanha</span>
                    </div>
                    <div class="meio-card">
                        <i class="fa-solid fa-building"></i>
                        <h4>PEM / PR</h4>
                        <p>Postos de Emergência Médica e Reserva</p>
                        <span class="tag orange">Ambulância Tipo B</span>
                    </div>
                    <div class="meio-card">
                        <i class="fa-solid fa-truck"></i>
                        <h4>Ambulâncias de Socorro</h4>
                        <p>Operadas por agentes de proteção civil</p>
                        <span class="tag orange">Tipo B</span>
                    </div>
                </div>

                <h2>Rede de Referenciação Hospitalar</h2>
                <p>As Redes de Referenciação Hospitalar (RRH) são sistemas através dos quais se pretende regular as relações de complementaridade e de apoio técnico entre todas as instituições hospitalares.</p>

                <div class="hospital-levels">
                    <div class="level-card">
                        <div class="level-badge">SUB</div>
                        <h4>Serviço de Urgência Básico</h4>
                        <p>Primeiro nível de acolhimento, de maior proximidade das populações. Realizam a estabilização inicial de situações urgentes de maior complexidade.</p>
                    </div>
                    <div class="level-card">
                        <div class="level-badge">SUMC</div>
                        <h4>Serviço de Urgência Médico-Cirúrgico</h4>
                        <p>Apoio diferenciado à rede SUB. Valências obrigatórias: Medicina Interna, Pediatria, Cirurgia Geral, Ortopedia, Anestesiologia, Imuno-Hemoterapia, Bloco Operatório, Imagiologia e Patologia Clínica.</p>
                    </div>
                    <div class="level-card">
                        <div class="level-badge">SUP</div>
                        <h4>Serviço de Urgência Polivalente</h4>
                        <p>Nível mais diferenciado. Inclui Neurocirurgia, Angiografia Digital, Ressonância Magnética, Cardiologia de Intervenção, Cirurgia Cardiotorácica, Cirurgia Plástica, Cirurgia Maxilo-facial, Cirurgia Vascular, Medicina Intensiva.</p>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>O SIEM consiste num conjunto de ações coordenadas, de âmbito pré-hospitalar, hospitalar e inter-hospitalar</li>
                        <li>A "Estrela da Vida" é o símbolo internacional dos serviços de emergência médica</li>
                        <li>As fases do SIEM são: Deteção, Alerta, Pré-socorro, Socorro, Cuidados durante o transporte e Transferência e tratamento definitivo</li>
                        <li>O número Europeu de Emergência é <strong>112</strong></li>
                        <li>Em Portugal, as chamadas para o 112 são atendidas em quatro centros operacionais</li>
                        <li>O INEM coordena o funcionamento do SIEM em Portugal Continental</li>
                        <li>O CODU atende e avalia os pedidos de socorro, determinando os recursos adequados</li>
                        <li>CIAV: <strong>800 250 250</strong> (intoxicações) · CAPIC: apoio psicológico</li>
                        <li>Meios INEM: Helicóptero, VMER, TIP, SIV, AEM, MEM, Ambulâncias de socorro, UMIPE, VIC e PT-EMT</li>
                    </ul>
                </div>
            `
        },
        3: {
            title: 'III. ÉTICA E ASPETOS LEGAIS',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender o que é a ética</li>
                        <li>Compreender os aspetos legais relacionados com a atividade da emergência pré-hospitalar</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>O que é Ética?</h3>
                    <p>A palavra ética deriva do termo de origem grega <strong>éthos</strong>, que significava o costume, o hábito, o caráter.</p>
                    <p>Atualmente, ética pode ser definida como um <strong>conjunto de valores morais e princípios</strong> que norteiam a conduta humana na sociedade, contribuindo para que haja um equilíbrio e bom funcionamento social, possibilitando que ninguém saia prejudicado.</p>
                </div>

                <div class="highlight-box">
                    <p><strong>Ética</strong> é a ciência que pretende estabelecer a distinção entre o bem e o mal, tendo como objetivo um comportamento ideal.</p>
                </div>

                <h2>Ética vs Lei</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4><i class="fa-solid fa-scale-balanced"></i> Ética</h4>
                        <ul>
                            <li>Conjunto de valores morais e princípios</li>
                            <li>Não obriga à adoção de determinado comportamento</li>
                            <li>Relacionada com o sentimento de justiça social</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-gavel"></i> Lei</h4>
                        <ul>
                            <li>Conjunto de normas que regula o agir humano</li>
                            <li>Determina consequências para a não adoção de comportamentos</li>
                            <li>Caráter obrigatório e punitivo</li>
                        </ul>
                    </div>
                </div>

                <h2>Princípio da Igualdade</h2>
                <div class="definition-box">
                    <p>O princípio da igualdade impõe um <strong>tratamento igual</strong> de todos os seres humanos perante a lei e uma <strong>proibição de discriminações</strong> infundadas.</p>
                    <p>Ninguém pode ser privilegiado, beneficiado, prejudicado, privado de qualquer direito ou isento de qualquer dever em razão de ascendência, sexo, raça, língua, território de origem, religião, convicções políticas ou ideológicas, instrução, situação económica, condição social ou orientação sexual.</p>
                </div>

                <h2>Direitos Fundamentais</h2>
                <div class="rights-grid">
                    <div class="right-card">
                        <i class="fa-solid fa-heart"></i>
                        <h4>Direito à Vida</h4>
                        <p>Bem jurídico mais importante de todos os direitos fundamentais. Implica o reconhecimento do dever de proteção do direito à vida.</p>
                    </div>
                    <div class="right-card">
                        <i class="fa-solid fa-shield-halved"></i>
                        <h4>Direito à Integridade Pessoal</h4>
                        <p>Garantia de não ser agredido ou ofendido, por meios físicos ou morais. Inclui a vertente física e moral/psíquica.</p>
                    </div>
                    <div class="right-card">
                        <i class="fa-solid fa-lock"></i>
                        <h4>Direito à Liberdade</h4>
                        <p>Só em situações excecionais e desde que preenchidos determinados requisitos, é que alguém pode ser detido, aprisionado ou fisicamente confinado.</p>
                    </div>
                    <div class="right-card">
                        <i class="fa-solid fa-hospital"></i>
                        <h4>Direito à Proteção da Saúde</h4>
                        <p>Visa garantir a todas as pessoas a devida proteção e promoção da saúde. O SNS tem caráter universal.</p>
                    </div>
                </div>

                <h2>Direitos de Personalidade</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4><i class="fa-solid fa-id-card"></i> Direito à capacidade civil</h4>
                        <p>Direito de ser sujeito de relações jurídicas. Todas as pessoas têm personalidade jurídica.</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-star"></i> Direito ao bom nome</h4>
                        <p>Direito de não ser ofendido na sua honra e dignidade perante a sociedade.</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-camera"></i> Direito à imagem</h4>
                        <p>Direito de não ser fotografado, filmado, e direito a não ver divulgada a sua imagem sem consentimento.</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-user-secret"></i> Direito à reserva da intimidade</h4>
                        <p>Direito de impedir o acesso a informações sobre a vida privada e familiar.</p>
                    </div>
                </div>

                <h2>Consentimento Informado</h2>
                <div class="definition-box">
                    <p>O <strong>consentimento informado</strong> constitui um requisito fundamental e estruturante da prestação de cuidados de saúde. A vítima deve ser informada de forma clara, de toda a informação relevante para a decisão, numa linguagem adequada.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-pen"></i>
                    <div>
                        <h4>Consentimento Presumido</h4>
                        <p>Presume-se a obtenção do consentimento quando o indivíduo está em <strong>perigo de vida</strong>, existe comprometimento de saúde ou alteração do estado de consciência e não é possível obtê-lo junto deste ou de quem o represente.</p>
                    </div>
                </div>

                <h3>Menores</h3>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4><i class="fa-solid fa-child"></i> Menores de 16 anos</h4>
                        <p>O consentimento dos representantes legais mantém-se como requisito obrigatório, exceto se o tratamento é necessário e urgente e os pais não estão presentes.</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-user-graduate"></i> Maiores de 16 anos</h4>
                        <p>Consentimento eficaz se possuir discernimento necessário para avaliar o sentido e alcance da sua decisão.</p>
                    </div>
                </div>

                <h2>Recusa de Transporte</h2>
                <div class="definition-box">
                    <p>Uma pessoa (adulto) com capacidade e autonomia de decisão pode, por regra, recusar livremente qualquer tipo de assistência (tratamento, intervenção e transporte à unidade de saúde).</p>
                    <p>Para que seja válida a declaração de recusa, a vítima tem de ter <strong>capacidade de facto</strong> para entender as consequências da sua decisão e discernimento para poder decidir recusar.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-file-signature"></i>
                    <div>
                        <h4>Procedimento em caso de recusa</h4>
                        <p>O operacional deve preencher o Verbete de Socorro, esclarecendo o teor e solicitando que o subscreva. Se recusar assinar, contactar o CODU e documentar toda a informação relevante.</p>
                    </div>
                </div>

                <h2>Verificação do Óbito</h2>
                <div class="definition-box">
                    <p>A verificação do óbito, em Portugal, é da <strong>competência exclusiva dos médicos</strong>.</p>
                    <p>A morte corresponde à cessação irreversível das funções do tronco cerebral.</p>
                </div>

                <h3>Diretiva Antecipada de Vontade (DAV)</h3>
                <div class="info-card">
                    <h4><i class="fa-solid fa-file-medical"></i> Testamento Vital</h4>
                    <p>Documento formal no qual é manifestada a vontade consciente, livre e esclarecida sobre quais os cuidados de saúde que deseja receber ou não.</p>
                    <ul>
                        <li>Pode ser feita por maiores de idade</li>
                        <li>Eficaz durante 5 anos</li>
                        <li>Pode incluir a abstenção de manobras de reanimação</li>
                        <li>Perante uma DAV válida, contactar o CODU e cumprir orientações</li>
                    </ul>
                </div>

                <h2>Transporte e Acompanhante</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4><i class="fa-solid fa-user-plus"></i> Acompanhante</h4>
                        <p>A vítima tem direito a ser acompanhada por uma pessoa por si indicada, exceto se comprometer a eficácia dos cuidados ou implicar risco.</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-dog"></i> Cães de Assistência</h4>
                        <p>Pessoas com deficiência têm direito a fazer-se acompanhar de cães de assistência no acesso a transportes e estabelecimentos de saúde.</p>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A ética define a base de conduta, o conjunto de valores morais e legais esperados do profissional</li>
                        <li>São direitos fundamentais: princípio da igualdade, direito à vida, direito à integridade pessoal, direito à liberdade, direito à proteção da Saúde</li>
                        <li>O princípio da igualdade prevê que todos os cidadãos são iguais perante a lei</li>
                        <li>O menor e a pessoa interdita não têm capacidade legal para recusar o transporte e/ou procedimentos</li>
                        <li>A contenção de doentes só é aplicável quando estes colocam a si ou à sua envolvente em risco</li>
                        <li>A preservação de provas no local do crime não se sobrepõe ao principal objetivo que é prestar o adequado socorro</li>
                        <li>A verificação do óbito é da competência exclusiva do médico</li>
                        <li>Perante uma DAV válida, contactar o CODU e cumprir as orientações</li>
                    </ul>
                </div>
            `
        },
        4: {
            title: 'IV. ANATOMIA E FISIOLOGIA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Identificar os planos, as posições e os termos anatómicos</li>
                        <li>Compreender a anatomia e fisiologia dos sistemas esquelético, muscular, nervoso, endócrino, respiratório, cardiovascular, digestivo, urinário e reprodutor</li>
                        <li>Compreender a anatomia e fisiologia da pele e órgãos dos sentidos</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Conceitos Fundamentais</h3>
                    <p><strong>Anatomia</strong> - deriva do grego "Ana tomnein", significa cortar separando em partes. Estuda a forma e a estrutura do corpo humano.</p>
                    <p><strong>Fisiologia</strong> - ciência que estuda os processos e funções do organismo. Explica todos os mecanismos físicos e químicos que mantêm os processos vitais.</p>
                </div>

                <h2>Planos Anatómicos</h2>
                <div class="plans-grid">
                    <div class="plan-card">
                        <span class="plan-icon"><i class="fa-solid fa-arrows-up-down"></i></span>
                        <h4>Plano Frontal</h4>
                        <p>Divide o corpo em região <strong>anterior</strong> (frente) e <strong>posterior</strong> (trás)</p>
                    </div>
                    <div class="plan-card">
                        <span class="plan-icon"><i class="fa-solid fa-arrows-left-right"></i></span>
                        <h4>Plano Sagital</h4>
                        <p>Divide o corpo em duas partes - <strong>direita</strong> e <strong>esquerda</strong></p>
                    </div>
                    <div class="plan-card">
                        <span class="plan-icon"><i class="fa-solid fa-arrows-spin"></i></span>
                        <h4>Plano Transversal</h4>
                        <p>Divide o corpo em região <strong>superior</strong> e <strong>inferior</strong></p>
                    </div>
                </div>

                <h2>Termos Anatómicos de Referência</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4><i class="fa-solid fa-circle"></i> Medial/Interior</h4>
                        <p>Próximo da linha média vertical imaginária</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-circle"></i> Lateral/Externa</h4>
                        <p>Afastado da linha média vertical imaginária</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-arrow-up"></i> Proximal</h4>
                        <p>Próximo de um ponto de referência</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-arrow-down"></i> Distal</h4>
                        <p>Afastado de um ponto de referência</p>
                    </div>
                </div>

                <h2>Posicionamento da Vítima</h2>
                <div class="positions-grid">
                    <div class="position-card">
                        <h4>Decúbito Dorsal</h4>
                        <p>De costas para baixo e face para cima</p>
                    </div>
                    <div class="position-card">
                        <h4>Decúbito Ventral</h4>
                        <p>Deitado sobre o abdómen, face para baixo</p>
                    </div>
                    <div class="position-card">
                        <h4>Decúbito Lateral</h4>
                        <p>Deitado lateralmente sobre o lado esquerdo ou direito</p>
                    </div>
                    <div class="position-card">
                        <h4>Trendelenburg</h4>
                        <p>Decúbito dorsal com membros inferiores elevados</p>
                    </div>
                    <div class="position-card">
                        <h4>Fowler</h4>
                        <p>Decúbito dorsal com tronco elevado (45º-90º)</p>
                    </div>
                    <div class="position-card">
                        <h4>Semi-Fowler</h4>
                        <p>Tronco elevado entre 30º-45º</p>
                    </div>
                </div>

                <h2>Sistema Esquelético</h2>
                <p>O corpo humano do adulto é constituído por <strong>206 ossos</strong>.</p>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Tipo de Osso</th>
                                <th>Característica</th>
                                <th>Exemplo</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Longos</strong></td>
                                <td>Mais compridos do que largos</td>
                                <td>Fémur, Úmero</td>
                            </tr>
                            <tr>
                                <td><strong>Curtos</strong></td>
                                <td>Quase tão largos como compridos</td>
                                <td>Ossos do carpo</td>
                            </tr>
                            <tr>
                                <td><strong>Planos</strong></td>
                                <td>Delgados, achatados e geralmente encurvados</td>
                                <td>Ossos do crânio (parietal)</td>
                            </tr>
                            <tr>
                                <td><strong>Irregulares</strong></td>
                                <td>Formas que não se encaixam nas outras categorias</td>
                                <td>Vértebras, ossos da face</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Funções do Sistema Esquelético</h3>
                <div class="function-grid">
                    <div class="function-item">
                        <i class="fa-solid fa-1"></i>
                        <span>Suporte - serve de suporte ao peso do corpo</span>
                    </div>
                    <div class="function-item">
                        <i class="fa-solid fa-2"></i>
                        <span>Proteção - protege os órgãos que envolve</span>
                    </div>
                    <div class="function-item">
                        <i class="fa-solid fa-3"></i>
                        <span>Movimento - os músculos esqueléticos inserem-se nos ossos</span>
                    </div>
                    <div class="function-item">
                        <i class="fa-solid fa-4"></i>
                        <span>Armazenamento - armazena minerais como cálcio e fósforo</span>
                    </div>
                    <div class="function-item">
                        <i class="fa-solid fa-5"></i>
                        <span>Produção de células sanguíneas - medula óssea</span>
                    </div>
                </div>

                <h2>Sistema Muscular</h2>
                <div class="grid-3col">
                    <div class="info-card">
                        <h4>Músculo Esquelético</h4>
                        <p>Voluntário · 40% do peso corporal</p>
                        <p>Liga-se aos ossos por tendões</p>
                    </div>
                    <div class="info-card">
                        <h4>Músculo Liso</h4>
                        <p>Involuntário</p>
                        <p>Mobilização de alimentos, esvaziamento da bexiga</p>
                    </div>
                    <div class="info-card">
                        <h4>Músculo Cardíaco</h4>
                        <p>Involuntário e automático</p>
                        <p>Forma a parede do coração</p>
                    </div>
                </div>

                <h2>Sistema Nervoso</h2>
                <div class="system-structure">
                    <div class="structure-item">
                        <h4><i class="fa-solid fa-brain"></i> Sistema Nervoso Central</h4>
                        <ul>
                            <li><strong>Cérebro</strong> - controla atividade motora voluntária, pensamento, linguagem, memória</li>
                            <li><strong>Cerebelo</strong> - equilíbrio, controlo da postura, coordenação motora</li>
                            <li><strong>Tronco Cerebral</strong> - centro de controlo das funções vitais (ventilação, frequência cardíaca)</li>
                            <li><strong>Medula Espinhal</strong> - atos reflexos</li>
                        </ul>
                    </div>
                    <div class="structure-item">
                        <h4><i class="fa-solid fa-arrows-spin"></i> Sistema Nervoso Periférico</h4>
                        <ul>
                            <li><strong>Somático</strong> - atividades voluntárias</li>
                            <li><strong>Autónomo</strong> - atividades involuntárias
                                <ul>
                                    <li><em>Simpático</em> - mobiliza energia, resposta ao stress</li>
                                    <li><em>Parassimpático</em> - atividades relaxantes</li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>

                <h2>Sistema Endócrino</h2>
                <div class="info-card">
                    <p>O sistema endócrino é um sistema regulador com três funções essenciais:</p>
                    <ul>
                        <li><strong>Homeostasia</strong> - manutenção do equilíbrio do organismo</li>
                        <li><strong>Resposta a situações de stress</strong> - em combinação com o sistema nervoso</li>
                        <li><strong>Regulação do crescimento e desenvolvimento</strong> - incluindo desenvolvimento sexual</li>
                    </ul>
                </div>

                <h2>Aparelho Respiratório</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Trato Respiratório Superior</h4>
                        <ul>
                            <li>Fossas nasais</li>
                            <li>Faringe (nasofaringe, orofaringe, hipofaringe)</li>
                            <li>Laringe (epiglote, cartilagem tiroideia, cricoide)</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Trato Respiratório Inferior</h4>
                        <ul>
                            <li>Traqueia (10-13 cm)</li>
                            <li>Brônquios (direito e esquerdo)</li>
                            <li>Bronquíolos</li>
                            <li>Alvéolos (trocas gasosas)</li>
                            <li>Pulmões (direito: 3 lobos · esquerdo: 2 lobos)</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-lungs"></i>
                    <div>
                        <h4>Ventilação vs Respiração</h4>
                        <p><strong>Ventilação</strong> - processo mecânico de passagem de ar pelas estruturas respiratórias</p>
                        <p><strong>Respiração</strong> - processo químico de trocas gasosas (O2 e CO2) na membrana alvéolo-capilar</p>
                    </div>
                </div>

                <h2>Aparelho Cardiovascular</h2>
                <p>Constituído por vasos sanguíneos e pelo <strong>coração</strong> (órgão musculoso que propulsiona o sangue).</p>

                <div class="grid-3col">
                    <div class="info-card">
                        <h4><i class="fa-solid fa-heart"></i> Aurículas</h4>
                        <p><strong>Direita</strong> - recebe sangue venoso (veias cava)</p>
                        <p><strong>Esquerda</strong> - recebe sangue arterial (veias pulmonares)</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-heart"></i> Ventrículos</h4>
                        <p><strong>Direito</strong> - circulação pulmonar</p>
                        <p><strong>Esquerdo</strong> - circulação sistémica</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-heart"></i> Válvulas</h4>
                        <p><strong>Tricúspide</strong> - AD → VD</p>
                        <p><strong>Mitral</strong> - AE → VE</p>
                    </div>
                </div>

                <h3>Circulação Sistémica e Pulmonar</h3>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Circulação Sistémica (Grande)</h4>
                        <p>VE → Artéria aorta → Corpo → Veias cavas → AD</p>
                    </div>
                    <div class="info-card">
                        <h4>Circulação Pulmonar (Pequena)</h4>
                        <p>VD → Artéria pulmonar → Pulmões → Veias pulmonares → AE</p>
                    </div>
                </div>

                <h2>Aparelho Digestivo</h2>
                <div class="info-card">
                    <p>Função: disponibilizar nutrientes para o corpo através de 5 atividades:</p>
                    <ul>
                        <li><strong>Ingestão</strong> - introdução do alimento</li>
                        <li><strong>Mistura e movimentação</strong> - peristaltismo</li>
                        <li><strong>Digestão</strong> - degradação química e mecânica</li>
                        <li><strong>Absorção</strong> - passagem dos nutrientes para o sangue</li>
                        <li><strong>Dejeção</strong> - eliminação de substâncias não digeridas</li>
                    </ul>
                </div>

                <h2>Aparelho Urinário</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Funções</h4>
                        <ul>
                            <li>Manter o nível de água corporal</li>
                            <li>Regular a composição química do meio interno</li>
                            <li>Eliminar substâncias nocivas</li>
                            <li>Regular a pressão arterial</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Componentes</h4>
                        <ul>
                            <li>2 Rins (aparelho urinário superior)</li>
                            <li>2 Ureteres (aparelho urinário superior)</li>
                            <li>Bexiga (aparelho urinário inferior)</li>
                            <li>Uretra (aparelho urinário inferior)</li>
                        </ul>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Anatomia estuda a forma e estrutura do corpo; Fisiologia estuda os processos e funções</li>
                        <li>3 planos anatómicos: sagital, frontal e transversal</li>
                        <li>Sistema esquelético: 5 funções (suporte, proteção, movimento, armazenamento, produção de células sanguíneas)</li>
                        <li>Sistema muscular: manter posicionamento, executar movimentos, produzir calor</li>
                        <li>Sistema nervoso: regula funções do corpo e interação com o meio ambiente</li>
                        <li>Sistema endócrino: homeostasia, resposta ao stress, regulação do crescimento</li>
                        <li>Respiratório: epiglote separa trato superior/inferior; trocas gasosas nos alvéolos</li>
                        <li>Cardiovascular: coração (4 câmaras) e vasos sanguíneos</li>
                        <li>Digestivo: disponibiliza nutrientes através de ingestão, digestão, absorção e dejeção</li>
                        <li>Urinário: filtra o sangue, forma e excreta urina</li>
                        <li>Pele: 3 camadas (epiderme, derme, hipoderme) com funções de proteção, regulação térmica e sensitiva</li>
                    </ul>
                </div>
            `
        },
        5: {
            title: 'V. HIGIENE E SEGURANÇA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender conceitos de infeção, risco de infeção, infeção cruzada, infeções associadas aos cuidados de saúde, vias de transmissão e precauções básicas de controlo de infeção</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Infeções Associadas aos Cuidados de Saúde (IACS)</h3>
                    <p>A IACS é uma infeção adquirida pelos doentes em consequência dos cuidados e procedimentos de saúde prestados e que pode, também, afetar os profissionais de saúde durante o exercício da sua atividade.</p>
                </div>

                <h2>Vias de Transmissão</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Endógenas</h4>
                        <ul>
                            <li>Flora da pele, nariz, boca</li>
                            <li>Flora do aparelho respiratório superior</li>
                            <li>Flora intestinal</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Exógenas</h4>
                        <ul>
                            <li>Mãos dos prestadores de cuidados</li>
                            <li>Equipamento</li>
                            <li>Dispositivos médicos</li>
                            <li>Ambiente envolvente</li>
                        </ul>
                    </div>
                </div>

                <h2>Precauções Básicas de Controlo de Infeção (PBCI)</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Medidas PBCI</h4>
                        <ul>
                            <li>Colocação do Doente</li>
                            <li>Higiene das Mãos</li>
                            <li>Etiqueta respiratória</li>
                            <li>Utilização de EPI</li>
                            <li>Descontaminação de Materiais</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Medidas PBCI (continuação)</h4>
                        <ul>
                            <li>Controlo Ambiental</li>
                            <li>Manuseamento Seguro da Roupa</li>
                            <li>Recolha Segura de Resíduos</li>
                            <li>Práticas Seguras em Injetáveis</li>
                            <li>Exposição a Agentes Antimicrobianos</li>
                        </ul>
                    </div>
                </div>

                <h2>Higiene das Mãos</h2>
                <div class="info-box highlight">
                    <i class="fa-solid fa-hand-sparkles"></i>
                    <div>
                        <h4>Quando higienizar as mãos?</h4>
                        <ul>
                            <li>Antes do contacto com o doente</li>
                            <li>Antes de procedimentos limpos/assépticos</li>
                            <li>Após risco de exposição a fluidos orgânicos</li>
                            <li>Após o contacto com o doente</li>
                            <li>Após contacto com ambiente envolvente</li>
                        </ul>
                    </div>
                </div>

                <h3>Métodos de Lavagem de Mãos</h3>
                <ul class="styled-list">
                    <li><strong>Lavagem higiénica de mãos</strong> - água e sabão dermoprotetor (40-60 segundos)</li>
                    <li><strong>Fricção antisséptica das mãos</strong> - solução alcoólica (20-30 segundos)</li>
                    <li><strong>Lavagem cirúrgica das mãos</strong> - para procedimentos invasivos</li>
                </ul>

                <h2>Equipamentos de Proteção Individual (EPI)</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>EPI mais comuns</h4>
                        <ul>
                            <li><strong>Luvas</strong> - exame ou cirúrgicas</li>
                            <li><strong>Bata/Avental</strong> - proteção contra salpicos</li>
                            <li><strong>Proteção ocular</strong> - risco de projeção</li>
                            <li><strong>Máscara cirúrgica</strong> - gotículas</li>
                            <li><strong>Máscara FFP2</strong> - aerossóis/via aérea</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Precauções por via de transmissão</h4>
                        <ul>
                            <li><strong>Contacto</strong> - luvas e bata</li>
                            <li><strong>Gotículas</strong> - máscara cirúrgica</li>
                            <li><strong>Via aérea</strong> - máscara FFP2</li>
                            <li><strong>Máximas</strong> - todas as precauções em simultâneo</li>
                        </ul>
                    </div>
                </div>

                <h2>Resíduos Hospitalares</h2>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Grupo</th>
                                <th>Descrição</th>
                                <th>Exemplos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Grupo I</strong></td>
                                <td>Resíduos Sólidos Urbanos</td>
                                <td>Papel, cartão, restos de alimentos</td>
                            </tr>
                            <tr>
                                <td><strong>Grupo II</strong></td>
                                <td>Sem vestígios de sangue/risco biológico</td>
                                <td>Talas, gessos, fraldas não contaminadas</td>
                            </tr>
                            <tr>
                                <td><strong>Grupo III</strong></td>
                                <td>Com vestígios de sangue/risco biológico</td>
                                <td>Material contaminado, EPI utilizado</td>
                            </tr>
                            <tr>
                                <td><strong>Grupo IV</strong></td>
                                <td>Incineração obrigatória</td>
                                <td>Agulhas, cateteres, peças anatómicas</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Descontaminação</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Limpeza</h4>
                        <p>Remoção de sujidade, pó e material orgânico através de remoção mecânica e ação de um detergente.</p>
                    </div>
                    <div class="info-card">
                        <h4>Desinfeção</h4>
                        <p>Remoção e destruição de quase todos os microrganismos potencialmente patogénicos.</p>
                    </div>
                    <div class="info-card">
                        <h4>Esterilização</h4>
                        <p>Destruição completa de todos os microrganismos patogénicos e não patogénicos, incluindo esporos.</p>
                    </div>
                </div>

                <h2>Higienização da Ambulância</h2>
                <ul class="styled-list">
                    <li><strong>Limpeza corrente</strong> - após cada ocorrência, superfícies utilizadas</li>
                    <li><strong>Limpeza imediata</strong> - quando ocorrem salpicos/derrames</li>
                    <li><strong>Limpeza de conservação</strong> - semanalmente, todas as superfícies</li>
                    <li><strong>Limpeza global</strong> - mensalmente, estruturas de difícil acesso</li>
                </ul>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A IACS é uma infeção adquirida em consequência dos cuidados de saúde</li>
                        <li>A higiene das mãos é a medida mais importante para reduzir a transmissão</li>
                        <li>Os EPI devem ser usados de acordo com o risco de exposição</li>
                        <li>As precauções baseadas na via de transmissão são: contacto, gotículas e via aérea</li>
                        <li>Os resíduos hospitalares dividem-se em Grupos I, II, III e IV</li>
                        <li>A descontaminação inclui limpeza, desinfeção e esterilização</li>
                        <li>A ambulância deve ser higienizada regularmente para prevenir infeções cruzadas</li>
                    </ul>
                </div>
            `
        },
        6: {
            title: 'VI. SEGURANÇA DO DOENTE',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Identificar as áreas prioritárias (identificação inequívoca dos doentes, controlo de infeções, utilização de medicamentos, prevenção de quedas, comunicação e informação, parto seguro, notificação de incidentes)</li>
                    </ul>
                </div>

                <h2>Áreas Prioritárias de Atuação</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4><i class="fa-solid fa-id-card"></i> Identificação Inequívoca</h4>
                        <ul>
                            <li>Confirmar identidade com documento</li>
                            <li>Usar pelo menos 2 dados inequívocos</li>
                            <li>Registar: nome completo, data de nascimento, nº CODU</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-hand-holding-heart"></i> Prevenção de Quedas</h4>
                        <ul>
                            <li>Valorizar sempre o risco de quedas</li>
                            <li>Planear movimentação e transporte</li>
                            <li>Usar sistemas de retenção adequados</li>
                            <li>Nunca deixar o doente sozinho</li>
                        </ul>
                    </div>
                </div>

                <h2>Comunicação e Informação - ISBAR</h2>
                <div class="definition-box">
                    <p>A metodologia <strong>ISBAR</strong> é recomendada para a comunicação entre profissionais, garantindo uma transferência de informação eficaz.</p>
                </div>

                <div class="grid-2col">
                    <div class="info-card">
                        <h4><strong>I</strong> - Identificação</h4>
                        <p>Nome e função do emissor e reector, nº da ocorrência, nome da vítima, idade</p>
                    </div>
                    <div class="info-card">
                        <h4><strong>S</strong> - Situação atual</h4>
                        <p>Queixa principal, data/hora de início, terapêutica realizada</p>
                    </div>
                    <div class="info-card">
                        <h4><strong>B</strong> - Background (Antecedentes)</h4>
                        <p>Antecedentes clínicos, alergias, medicação habitual, DAV</p>
                    </div>
                    <div class="info-card">
                        <h4><strong>A</strong> - Avaliação</h4>
                        <p>Estado atual (ABCDE), terapêutica instituída, alterações de estado</p>
                    </div>
                    <div class="info-card">
                        <h4><strong>R</strong> - Recomendações</h4>
                        <p>Plano de continuidade de cuidados, necessidade de outros meios, referenciação</p>
                    </div>
                </div>

                <h2>Parto Seguro</h2>
                <div class="info-card">
                    <p>O parto extra-hospitalar apresenta riscos para a mãe e recém-nascido. É fundamental:</p>
                    <ul>
                        <li>Revisão de protocolos de abordagem à grávida e recém-nascido</li>
                        <li>Formação contínua dos operacionais</li>
                        <li>Lista de verificação para parto seguro (OMS)</li>
                    </ul>
                </div>

                <h2>Notificação de Incidentes</h2>
                <div class="info-box highlight">
                    <i class="fa-solid fa-bell"></i>
                    <div>
                        <h4>Plataforma "NOTIFICA"</h4>
                        <p>Disponível em: <a href="https://notifica.dgs.min-saude.pt/" target="_blank">notifica.dgs.min-saude.pt</a></p>
                        <p>Notificação voluntária, confidencial e não punitiva de incidentes relacionados com:</p>
                        <ul>
                            <li>Prestação de cuidados de saúde</li>
                            <li>Violência contra profissionais de saúde</li>
                            <li>Utilização de dispositivos corto-perfurantes</li>
                        </ul>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Identificação inequívoca: nome completo e data de nascimento</li>
                        <li>Prevenção de quedas: transporte seguro e sistemas de retenção</li>
                        <li>Comunicação: utilizar a mnemónica ISBAR</li>
                        <li>Parto seguro: listas de verificação e formação</li>
                        <li>Notificação de incidentes: voluntária, confidencial, não punitiva</li>
                    </ul>
                </div>
            `
        },
        7: {
            title: 'VII. ASPETOS ERGONÓMICOS',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender conceitos como lesões músculo-esqueléticas relacionadas com o trabalho (LMERT)</li>
                        <li>Identificar quais as causas de lesões na coluna com o intuito de as prevenir</li>
                        <li>Compreender quais os fatores de risco associados à movimentação de cargas</li>
                        <li>Reconhecer as boas práticas para a movimentação manual de cargas</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>LMERT - Lesões Músculo-Esqueléticas Relacionadas com o Trabalho</h3>
                    <p>As LMERT são a doença profissional mais comum na União Europeia. Aproximadamente <strong>24%</strong> dos trabalhadores sofrem de lombalgias.</p>
                </div>

                <h2>Consequências para a Saúde</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Principais Patologias</h4>
                        <ul>
                            <li><strong>Hérnias Discais</strong> - compressão das raízes nervosas</li>
                            <li><strong>Lombalgias</strong> - dores na região lombar após esforço</li>
                            <li><strong>Ciática</strong> - dor na perna por irritação do nervo ciático</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Consequências Gerais</h4>
                        <ul>
                            <li>Aumento do absentismo</li>
                            <li>Menor eficiência no trabalho</li>
                            <li>Sofrimento e incapacidade</li>
                            <li>Isolamento social</li>
                        </ul>
                    </div>
                </div>

                <h2>Posturas de Risco</h2>
                <div class="grid-3col">
                    <div class="info-card">
                        <h4>Inclinação para a Frente</h4>
                        <p>Compressão da parte frontal dos discos e distensão da parte posterior</p>
                    </div>
                    <div class="info-card">
                        <h4>Inclinação Lateral com Rotação</h4>
                        <p>Postura mais nociva - compressão simultânea da parte frontal e lateral dos discos</p>
                    </div>
                    <div class="info-card">
                        <h4>Segurar Carga esticando para trás</h4>
                        <p>Compressão da parte posterior dos discos e das articulações intervertebrais</p>
                    </div>
                </div>

                <h2>Fatores de Risco</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Características da Carga</h4>
                        <ul>
                            <li>Peso (>20kg é difícil de sustentar)</li>
                            <li>Dimensão (grandes impedem boa postura)</li>
                            <li>Pega (difícil de agarrar)</li>
                            <li>Estabilidade e equilíbrio</li>
                            <li>Alcance (posturas extremas)</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Características Individuais</h4>
                        <ul>
                            <li>Antecedentes médicos</li>
                            <li>Stress (tensões musculares)</li>
                            <li>Falta de experiência/formacão</li>
                            <li>Idade e antiguidade</li>
                            <li>Capacidade física</li>
                        </ul>
                    </div>
                </div>

                <h2>Boas Práticas para Movimentação de Cargas</h2>
                <div class="info-box highlight">
                    <i class="fa-solid fa-check-double"></i>
                    <div>
                        <h4>Regras Essenciais</h4>
                        <ul>
                            <li><strong>Pensar antes de agarrar</strong> - planear a elevação</li>
                            <li><strong>Adotar posição estável</strong> - pés afastados, um adiantado</li>
                            <li><strong>Ter boa preensão</strong> - carga junto ao corpo</li>
                            <li><strong>Usar força das pernas</strong> - fletir joelhos, não as costas</li>
                            <li><strong>Evitar torção</strong> - rodar movendo os pés</li>
                            <li><strong>Manter cabeça erguida</strong> - olhar para a frente</li>
                            <li><strong>Movimentar suavemente</strong> - sem movimentos bruscos</li>
                            <li><strong>Pousar primeiro, ajustar depois</strong></li>
                        </ul>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>As LMERT são a doença profissional mais comum na UE</li>
                        <li>Posturas incorretas são a principal causa de lesões na coluna</li>
                        <li>Fatores de risco: características da carga, tarefas, ambiente e individuais</li>
                        <li>Boas práticas: planeamento, posição estável, uso da força das pernas, evitar torção</li>
                        <li>Manter a carga próxima ao corpo e a cabeça erguida durante o transporte</li>
                    </ul>
                </div>
            `
        },
        8: {
            title: 'VIII. COMUNICAÇÕES RÁDIO',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Conhecer as modalidades de Redes Rádio</li>
                        <li>Compreender a Rede Rádio CODU</li>
                        <li>Compreender os procedimentos rádio</li>
                    </ul>
                </div>

                <h2>Modalidades de Operação</h2>
                <div class="grid-3col">
                    <div class="info-card">
                        <h4>Simplex</h4>
                        <ul>
                            <li>Uma única frequência para emissão e receção</li>
                            <li>Não pode emitir e receber em simultâneo</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Duplex</h4>
                        <ul>
                            <li>Frequências diferentes para emissão e receção</li>
                            <li>Pode emitir e receber em simultâneo</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Semi-Duplex</h4>
                        <ul>
                            <li>Frequências diferentes para emissão e receção</li>
                            <li>Não pode emitir e receber em simultâneo</li>
                            <li>Modo mais utilizado em redes rádio</li>
                        </ul>
                    </div>
                </div>

                <h2>Exploração da Rede Rádio</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Rede Livre</h4>
                        <ul>
                            <li>Postos comunicam livremente entre si</li>
                            <li>Respeitar: disciplina, brevidade, precisão, clareza, conhecimento</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Rede Dirigida</h4>
                        <ul>
                            <li>Comunicações controladas pela EDR</li>
                            <li>Não podem comunicar sem autorização prévia</li>
                            <li>Usada em situações de prioridade</li>
                        </ul>
                    </div>
                </div>

                <h2>SIRESP - Sistema Integrado de Redes de Emergência e Segurança</h2>
                <div class="definition-box">
                    <p>O <strong>SIRESP</strong> é um sistema único, nacional, partilhado, que assegura as comunicações das forças de segurança e serviços de emergência.</p>
                    <p>Baseado na tecnologia <strong>TETRA</strong> (Terrestrial Trunked Radio) digital.</p>
                </div>

                <h3>Status Operacionais</h3>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>N°</th>
                                <th>Tipo de Status</th>
                                <th>Descrição</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0</td>
                                <td>ATZ FONIA</td>
                                <td>Pedido de autorização para Falar</td>
                            </tr>
                            <tr>
                                <td>1</td>
                                <td>EVENTO RECEBIDO</td>
                                <td>Meio recebe a ocorrência</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>INOP</td>
                                <td>Meio não está em condições de efetuar serviço</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>CAMINHO LOCAL</td>
                                <td>Início da marcha para o local</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>LOCAL</td>
                                <td>Chegada ao local da ocorrência</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>CHEGADA À VÍTIMA</td>
                                <td>Chegada junto da vítima</td>
                            </tr>
                            <tr>
                                <td>6</td>
                                <td>CAMINHO HOSPITAL</td>
                                <td>Início do transporte para a unidade de saúde</td>
                            </tr>
                            <tr>
                                <td>7</td>
                                <td>HOSPITAL</td>
                                <td>Chegada à unidade de saúde</td>
                            </tr>
                            <tr>
                                <td>8</td>
                                <td>DISPONÍVEL</td>
                                <td>Meio disponível para novo serviço</td>
                            </tr>
                            <tr>
                                <td>9</td>
                                <td>BASE</td>
                                <td>Chegada à base</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Procedimentos Rádio</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Regras Fundamentais</h4>
                        <ul>
                            <li><strong>Disciplina</strong> - respeitar normas e procedimentos</li>
                            <li><strong>Brevidade</strong> - ocupar o canal o mínimo tempo</li>
                            <li><strong>Precisão</strong> - pensar na mensagem antes de transmitir</li>
                            <li><strong>Clareza</strong> - falar devagar, articular bem</li>
                            <li><strong>Conhecimento</strong> - conhecer a rede e equipamentos</li>
                            <li><strong>Obediência</strong> - cumprir as regras estabelecidas</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Expressões de Serviço</h4>
                        <ul>
                            <li><strong>AFIRMATIVO</strong> - Sim</li>
                            <li><strong>NEGATIVO</strong> - Não</li>
                            <li><strong>ESCUTO</strong> - Aguardo resposta</li>
                            <li><strong>TERMINADO</strong> - Fim da comunicação</li>
                            <li><strong>AGUARDE</strong> - Mantenha-se à escuta</li>
                            <li><strong>CORRETO</strong> - Mensagem recebida corretamente</li>
                        </ul>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Modalidades: Simplex, Duplex e Semi-duplex</li>
                        <li>Redes: Livre (comunicação livre) e Dirigida (controlada pela EDR)</li>
                        <li>SIRESP é a rede utilizada pelo CODU (tecnologia TETRA)</li>
                        <li>Status operacionais indicam a situação do meio de socorro</li>
                        <li>Procedimentos: Disciplina, Brevidade, Precisão, Clareza, Conhecimento, Obediência</li>
                        <li>Comunicação estruturada: Indicativo de chamada → Mensagem → Fim da mensagem</li>
                    </ul>
                </div>
            `
        },
        9: {
            title: 'IX. SIGLAS E REFERÊNCIAS',
            content: `
                <h2>SIGLAS</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li><strong>AEM</strong> - Ambulância de Emergência Médica</li>
                            <li><strong>CO112</strong> - Centro Operacional 112</li>
                            <li><strong>CODU</strong> - Centro de Orientação de Doentes Urgentes</li>
                            <li><strong>DMO</strong> - Direct Mode Operation</li>
                            <li><strong>EDR</strong> - Estação Diretora de Rede</li>
                            <li><strong>INEM</strong> - Instituto Nacional de Emergência Médica</li>
                            <li><strong>LMERT</strong> - Lesões Músculo-esqueléticas relacionadas com o Trabalho</li>
                            <li><strong>OIT</strong> - Organização Internacional do Trabalho</li>
                            <li><strong>OSHA</strong> - Agência Europeia para a Segurança e Saúde no Trabalho</li>
                            <li><strong>PEM</strong> - Posto de Emergência Médica</li>
                            <li><strong>PR</strong> - Posto de reserva</li>
                            <li><strong>PSP</strong> - Polícia Segurança Pública</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li><strong>PT EMT</strong> - Portuguese Emergency Medical Team</li>
                            <li><strong>RGPD</strong> - Regulamento Geral sobre a Proteção de Dados</li>
                            <li><strong>RRH</strong> - Redes de Referenciação Hospitalar</li>
                            <li><strong>SAV</strong> - Suporte Avançado de Vida</li>
                            <li><strong>SBV</strong> - Suporte Básico de Vida</li>
                            <li><strong>SHEM</strong> - Serviço de Helicópteros de Emergência Médica</li>
                            <li><strong>SIEM</strong> - Sistema Integrado de Emergência Médica</li>
                            <li><strong>SIV</strong> - Suporte Imediato de Vida</li>
                            <li><strong>SIRESP</strong> - Sistema Integrado de Redes de Emergência e Segurança de Portugal</li>
                            <li><strong>TEPH</strong> - Técnico de Emergência Pré-Hospitalar</li>
                            <li><strong>VIC</strong> - Viaturas de Intervenção em Catástrofe</li>
                            <li><strong>VMER</strong> - Viaturas Médicas de Emergência e Reanimação</li>
                        </ul>
                    </div>
                </div>

                <h2>REFERÊNCIAS BIBLIOGRÁFICAS</h2>
                <div class="info-card">
                    <ol style="font-size:13px; color:#444; line-height:1.8; padding-left:20px;">
                        <li>Portaria Nº147/216 de 19 de Maio, Rede de Referenciação Hospitalar. Diário da República; 2016.</li>
                        <li>Despacho n.º 8591-D/2016, de 1 de Julho / DRE/ Aprovação Do Modelo de Gestão Operacional Do Serviço 112; 2016.</li>
                        <li>Cabral R. Temas de Ética. Faculdade de Filosofia da UCP; 2003.</li>
                        <li>Serrão D, Nunes R. Ética Em Cuidados de Saúde. Porto Editora; 1998.</li>
                        <li>Código Civil - Decreto Lei n.º 47344/66.</li>
                        <li>Lei n.º 15/2014, de 21 de março - consolida a legislação em matéria de direitos e deveres do utente dos serviços de saúde.</li>
                        <li>Constituição da República Portuguesa: Decreto Lei de 10 de abril de 1976.</li>
                        <li>Código Do Processo Penal - Decreto Lei n.º 78/87, de 17 de Fevereiro.</li>
                        <li>Lei sobre Informação Genética Pessoal e Informação de Saúde - Lei n.º 12/2005, de 26 de janeiro.</li>
                        <li>Orientação Nº 021/2011: Prevenção de Comportamentos Dos Doentes Que Põem Em Causa a Sua Segurança Ou Da Sua Envolvente Contenção de Doentes; 2011.</li>
                        <li>Código Penal - Decreto Lei n.º 48/95, de 15 de Março.</li>
                        <li>Lei da Saúde Mental - Lei n.º 35/2023, de 21 de julho.</li>
                        <li>DIREITOS E DEVERES DOS UTENTES DOS SERVIÇOS DE SAÚDE; 2021.</li>
                        <li>Regime jurídico do maior acompanhado - Lei n.º 49/2018, de 14 de agosto.</li>
                        <li>Lei n.º 141/99, de 28 de agosto - Estabelece os princípios em que se baseia a verificação da morte.</li>
                        <li>Olasveengen TM, Semeraro F, Ristagno G, et al. European Resuscitation Council Guidelines 2021: Basic Life Support. Resuscitation. 2021;161:98-114.</li>
                        <li>Regime das Diretivas Antecipadas de Vontade Decreto - Lei n.º 25/2012, de 16 julho.</li>
                        <li>Regime de Acesso à informação Administrativa e Ambiental e de reutilização de documentos - Lei n.º 26/2016, de 22 de agosto.</li>
                        <li>Regulamento (UE) 2016/679 do Parlamento e do Conselho, de 27 de abril de 2016 (RGPD).</li>
                        <li>Richard D, A. Wayne V, Adam M. Gray's Anatomy for Students. 4ª Ed. ELSEVIER; 2019.</li>
                        <li>Guyton AC, Hall JE. Tratado de Fisiologia Médica. Elsevier; 2017.</li>
                        <li>Paulsen F, Waschke J. Sobotta Atlas of the Human Anatomy. 24ª Ed. Guanabara Koogan; 2018.</li>
                        <li>Valente M, Catarino R, Machado A, et al. ABORDAGEM À VÍTIMA - Manual TAS/TAT. Versão 2.0. 1ª Ed.; 2012.</li>
                        <li>Araújo A, Reis C, Costa C, et al. Manual de Controlo de Infeção do INEM. Versão 3-2ª edição. INEM; 2023.</li>
                        <li>Plano de Higienização da Ambulância. INEM; 2020.</li>
                        <li>Batuca A, Figueiredo A, Ferreira C, et al. Manual de Segurança Do Doente No Pré-Hospitalar. Versão 5.0-5ª ed.; 2023.</li>
                        <li>Lavinha P, Meira L, Valente M, Viana R. ASPETOS ERGONÓMICOS PRÉ-HOSPITALAR. Versão 1.1. 1ª Ed.; 2013.</li>
                    </ol>
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

        // Atualizar tabs
        tabs.forEach(tab => {
            tab.classList.toggle('active', parseInt(tab.dataset.chapter) === num);
        });

        // Carregar conteúdo com animação
        chapterContent.style.opacity = '0';
        setTimeout(() => {
            chapterContent.innerHTML = chapter.content;
            chapterContent.style.opacity = '1';
        }, 150);

        // Scroll para o topo do conteúdo em mobile
        if (window.innerWidth < 768) {
            document.querySelector('.chapter-content-wrapper').scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }

    function scrollTabs(direction) {
        const scrollAmount = tabsContainer.clientWidth * 0.6;
        tabsContainer.scrollBy({ 
            left: direction * scrollAmount, 
            behavior: 'smooth' 
        });
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
    // Clique nos tabs
    tabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const num = parseInt(this.dataset.chapter);
            loadChapter(num);
            scrollToTab(this);
        });
    });

    // Setas de navegação
    if (scrollLeftBtn) {
        scrollLeftBtn.addEventListener('click', () => scrollTabs(-1));
    }
    if (scrollRightBtn) {
        scrollRightBtn.addEventListener('click', () => scrollTabs(1));
    }

    // Scroll com roda do mouse (horizontal)
    if (tabsContainer) {
        tabsContainer.addEventListener('wheel', function(e) {
            if (e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
                e.preventDefault();
                const scrollAmount = e.deltaX || e.deltaY;
                this.scrollBy({ left: scrollAmount, behavior: 'smooth' });
            }
        }, { passive: false });

        // Drag to scroll
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

        // Atualizar overflow
        tabsContainer.addEventListener('scroll', checkOverflow);
    }

    // Resize
    window.addEventListener('resize', checkOverflow);
    window.addEventListener('load', function() {
        setTimeout(checkOverflow, 300);
    });

    // ===== KEYBOARD SHORTCUTS =====
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

    // ===== CARREGAR PRIMEIRO CAPÍTULO =====
    loadChapter(1);
    setTimeout(checkOverflow, 200);
});