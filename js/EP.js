/* EP.js - Versão melhorada com navegação e drag to scroll */
document.addEventListener('DOMContentLoaded', function() {
    // ===== DADOS DOS CAPÍTULOS - EMERGÊNCIAS PEDIÁTRICAS =====
    const chapters = {
        1: {
            title: 'I. INTRODUÇÃO',
            content: `
                <div class="intro-text">
                    <p>Este manual é uma ferramenta crucial para todos os operacionais dedicados a prestar assistência médica de alta qualidade a crianças em situações críticas. O nosso compromisso com a segurança e o bem-estar da vítima em idade pediátrica exige um conhecimento especializado e um conjunto de competências específicas.</p>
                </div>

                <div class="content-block">
                    <p>Este documento foi elaborado com o intuito de fornecer orientações precisas e práticas para lidar com uma ampla gama de emergências pediátricas. A assistência a crianças em situações de crise requer uma abordagem sensível, competências técnicas avançadas e um entendimento profundo das necessidades únicas destas vítimas.</p>
                </div>

                <div class="content-block">
                    <p>Aqui, será possível encontrar informações essenciais sobre avaliação, intervenção e transporte de bebés e crianças em situação de emergência. A nossa prioridade é garantir que, em cada situação de emergência, o formando esteja preparado para fornecer cuidados especializados, mesmo considerando a baixa estatística de ocorrências em pediatria.</p>
                </div>

                <div class="final-message">
                    <p><strong>Embora a prevenção seja fundamental, o papel do tripulante de ambulância de socorro é inestimável. A sua capacidade de resposta pode fazer a diferença na vida de uma criança.</strong></p>
                </div>
            `
        },
        2: {
            title: 'II. ABORDAGEM E AVALIAÇÃO DA VÍTIMA PEDIÁTRICA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Identificar os estádios de desenvolvimento da criança</li>
                        <li>Conhecer as estratégias de abordagem e comunicação com a criança</li>
                        <li>Identificar as considerações a ter em conta na avaliação do cenário</li>
                        <li>Identificar a preparação para a atuação</li>
                        <li>Identificar os critérios a avaliar no Triângulo de Avaliação Pediátrica</li>
                        <li>Compreender as particularidades do exame ABCDE na vítima pediátrica</li>
                        <li>Compreender as particularidades do exame secundário na vítima pediátrica</li>
                        <li>Conhecer os aspetos fundamentais no transporte da vítima pediátrica</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p><strong>"As crianças não são adultos em ponto pequeno".</strong></p>
                    <p>Prestar cuidados de emergência a crianças em ambiente pré-hospitalar coloca desafios e limitações, que obrigam os profissionais a desenvolver condutas diferentes daquelas que têm com os adultos.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Particularidades Pediátricas</h4>
                        <ul>
                            <li>Antecedentes clínicos frequentemente não conhecidos</li>
                            <li>Criança pode não ter maturidade para expressar queixas</li>
                            <li>Responsável pode estar nervoso e assustado</li>
                            <li>Exame ABCDE comprometido pela incapacidade de abordar fisicamente a criança</li>
                            <li>Sinais vitais com valores diferentes por idade</li>
                        </ul>
                    </div>
                </div>

                <h2>Estádios do Desenvolvimento da Criança</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Recém-Nascido (0-28 dias)</h4>
                        <ul>
                            <li>Respiração predominantemente nasal (até 4-6 meses)</li>
                            <li>Muito sensíveis à estimulação vagal</li>
                            <li>Incapazes de produzir calor através de tremores</li>
                            <li>Genitais edemaciados, pseudo-menstruação</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Lactente (29 dias - 1 ano)</h4>
                        <ul>
                            <li>Incapacidade de comunicação verbal</li>
                            <li>Considerar opinião dos cuidadores</li>
                            <li>A partir dos 2-6 meses tornam-se mais ativos</li>
                            <li>Começam a gatinhar, colocar-se de pé e caminhar</li>
                        </ul>
                    </div>
                </div>

                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Criança (1-3 anos)</h4>
                        <ul>
                            <li>Primeira infância - "segundo estádio terrível"</li>
                            <li>Ativos, teimosos, assustados perante estranhos</li>
                        </ul>
                        <h4>Pré-Escolar (3-5 anos)</h4>
                        <ul>
                            <li>Criativos, pensadores com pouca lógica</li>
                            <li>Não distinguem fantasia da realidade</li>
                            <li>Nível de atenção baixo, exploram muito</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Escolar (6-11 anos)</h4>
                        <ul>
                            <li>Observadores e faladores</li>
                            <li>Capacidade de entender relação causa-efeito</li>
                        </ul>
                        <h4>Adolescente (12-18 anos)</h4>
                        <ul>
                            <li>Racionais, compreendem causa-efeito</li>
                            <li>Capazes de se expressar por palavras</li>
                            <li>Expõem-se a riscos, sentem-se isentos de perigos</li>
                        </ul>
                    </div>
                </div>

                <h2>Triângulo de Avaliação Pediátrica (TAP)</h2>
                <div class="definition-box">
                    <p>O TAP baseia-se, exclusivamente, na <strong>observação da vítima</strong>. Realiza-se durante o momento em que a equipa se aproxima da criança, <strong>sem tocar, apenas a observar</strong>.</p>
                    <p>Objetivo: determinar nos primeiros <strong>10 a 15 segundos</strong> se o estado fisiológico é ou não potencialmente crítico.</p>
                </div>

                <div class="grid-3col">
                    <div class="info-card">
                        <h4><i class="fa-solid fa-user"></i> Aparência</h4>
                        <p>Reflete a eficácia da ventilação, oxigenação, perfusão cerebral e funcionamento do SNC.</p>
                        <p><strong>TICLS:</strong> Tónus, Interatividade, Consolo, Olhar, Speech (Discurso/Choro)</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-lungs"></i> Trabalho Respiratório</h4>
                        <p>Indicador da capacidade de oxigenação e ventilação. Reflete a tentativa de compensar problemas.</p>
                        <p><strong>Sons:</strong> Ressonar, estridor, rouquidão, pieira</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-heart"></i> Perfusão Periférica</h4>
                        <p>Determina a qualidade da circulação nos órgãos vitais.</p>
                        <p><strong>Avaliar:</strong> Coloração da pele, lábios, mucosas, leitos ungueais. Sinais de hemorragia, sudorese.</p>
                    </div>
                </div>

                <h3>Interpretação do TAP</h3>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Dificuldade Respiratória</h4>
                        <ul>
                            <li>Aparência e perfusão normais</li>
                            <li>Aumento do trabalho respiratório</li>
                            <li>Adejo nasal, posicionamento anormal, tiragem</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Falência Respiratória</h4>
                        <ul>
                            <li>Aumento ou diminuição do trabalho respiratório</li>
                            <li>Aparência anormal (hipotónica, letárgica)</li>
                            <li>Vítima crítica</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Falência Circulatória/Choque</h4>
                        <ul>
                            <li>Perfusão periférica inadequada</li>
                            <li>Aparência anormal</li>
                            <li>Vítima crítica</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Alterações Metabólicas/Disfunção do SNC</h4>
                        <ul>
                            <li>Aparência anormal (única componente alterada)</li>
                            <li>Suspeitar de disfunção cerebral ou alterações metabólicas</li>
                            <li>Vítima crítica</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Cianose - Sinal Crítico</h4>
                        <p>Nunca esperar pelo desenvolvimento da <strong>cianose</strong> para iniciar o tratamento com aporte de oxigénio e/ou ventilação assistida. A presença de cianose é sempre um <strong>sinal crítico</strong> que necessita de intervenção imediata.</p>
                    </div>
                </div>

                <h2>Parâmetros de Referência por Idade</h2>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Idade</th>
                                <th>Peso (Kg)</th>
                                <th>FR (cpm)</th>
                                <th>FC (bpm)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>RN termo</td>
                                <td>3,5</td>
                                <td>40</td>
                                <td>100-180</td>
                            </tr>
                            <tr>
                                <td>3 meses</td>
                                <td>6</td>
                                <td>35</td>
                                <td>90-180</td>
                            </tr>
                            <tr>
                                <td>6 meses</td>
                                <td>7,5</td>
                                <td>30</td>
                                <td>90-180</td>
                            </tr>
                            <tr>
                                <td>1 ano</td>
                                <td>10</td>
                                <td>24</td>
                                <td>90-170</td>
                            </tr>
                            <tr>
                                <td>2 anos</td>
                                <td>12</td>
                                <td>22</td>
                                <td>90-140</td>
                            </tr>
                            <tr>
                                <td>3 anos</td>
                                <td>14</td>
                                <td>20</td>
                                <td>80-140</td>
                            </tr>
                            <tr>
                                <td>5 anos</td>
                                <td>18</td>
                                <td>16-20</td>
                                <td>70-120</td>
                            </tr>
                            <tr>
                                <td>7 anos</td>
                                <td>22</td>
                                <td>16-20</td>
                                <td>70-120</td>
                            </tr>
                            <tr>
                                <td>10 anos</td>
                                <td>33</td>
                                <td>16-20</td>
                                <td>60-110</td>
                            </tr>
                            <tr>
                                <td>12 anos</td>
                                <td>40</td>
                                <td>14-18</td>
                                <td>60-100</td>
                            </tr>
                            <tr>
                                <td>15 anos</td>
                                <td>50</td>
                                <td>14-16</td>
                                <td>60-100</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Idade</th>
                                <th>PA Sistólica Normal</th>
                                <th>PA Sistólica Mínima</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>0-1 mês</td>
                                <td>&gt; 60</td>
                                <td>50-60</td>
                            </tr>
                            <tr>
                                <td>1-12 meses</td>
                                <td>80</td>
                                <td>70</td>
                            </tr>
                            <tr>
                                <td>1-10 anos</td>
                                <td>90 + (2 × idade)</td>
                                <td>70 + (2 × idade)</td>
                            </tr>
                            <tr>
                                <td>&gt; 10 anos</td>
                                <td>120</td>
                                <td>90</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Particularidades do Exame ABCDE em Pediatria</h2>

                <h3>A - Via Aérea</h3>
                <div class="info-card">
                    <ul>
                        <li>Línguas largas comparativamente à cavidade oral</li>
                        <li>Fossas nasais de pequeno diâmetro</li>
                        <li>Laringe mais cefálica e anterior</li>
                        <li>Cabeça proporcionalmente maior que o corpo</li>
                        <li>Occipital proeminente nos lactentes promove flexão passiva</li>
                        <li>Posição neutra (lactente) ou "sniffing position" (criança)</li>
                        <li>Aspiração: RN 6Fr, lactente 8Fr, criança 10Fr, adolescente 14Fr</li>
                    </ul>
                </div>

                <h3>B - Ventilação e Oxigenação</h3>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Particularidades</h4>
                        <ul>
                            <li>Até 4-6 meses respiram preferencialmente pelo nariz</li>
                            <li>Músculos intercostais pouco desenvolvidos</li>
                            <li>FR &gt; 60 cpm = sinal de gravidade</li>
                            <li>Oxigenoterapia titulada para SpO2 94-98%</li>
                            <li>Oxigénio "à face" - método menos incomodativo</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Ventilação Assistida</h4>
                        <ul>
                            <li><strong>RN:</strong> 40-60 cpm</li>
                            <li><strong>Lactente e criança:</strong> 20-30 cpm</li>
                            <li>Insufiações de 1 segundo</li>
                            <li>Evitar hiperventilação</li>
                            <li>Volume suficiente para expansão torácica simétrica</li>
                        </ul>
                    </div>
                </div>

                <h3>C - Circulação</h3>
                <div class="info-card">
                    <ul>
                        <li>Pulso braquial em crianças até 2 anos</li>
                        <li>Tempo de preenchimento capilar (TPC) avaliado no centro do tórax até 2 anos</li>
                        <li>Hipotensão e pulso fino = sinais tardios e graves</li>
                    </ul>
                </div>

                <h3>D - Disfunção Neurológica</h3>
                <div class="info-card">
                    <ul>
                        <li>Cérebro duplica de tamanho nos primeiros 6 meses</li>
                        <li>Fontanela anterior fecha entre 12-18 meses</li>
                        <li>Avaliar com escala AVDS</li>
                        <li>Avaliar glicemia capilar em AEC</li>
                    </ul>
                </div>

                <h3>E - Exposição</h3>
                <div class="info-card">
                    <ul>
                        <li>Expor apenas o necessário</li>
                        <li>Evitar hipotermia</li>
                        <li>Pesquisar lesões, exantema, petéquias</li>
                        <li>Arrefecimento apenas se não houver tremores</li>
                    </ul>
                </div>

                <h2>Transporte e Segurança da Criança</h2>
                <div class="info-card">
                    <h4>Boas Práticas (ordem de preferência)</h4>
                    <ol>
                        <li><strong>1ª opção:</strong> Sistema de retenção de criança (SRC) próprio para macas de ambulâncias</li>
                        <li><strong>2ª opção:</strong> SRC da própria vítima adaptado à maca (fixado em 3 pontos)</li>
                        <li><strong>3ª opção:</strong> Transporte na maca com cabeceira levantada e preenchimento dos espaços laterais</li>
                    </ol>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>O TAP realiza-se no primeiro momento de aproximação à vítima pediátrica</li>
                        <li>Com o TAP é possível definir qualitativamente se a criança é vítima crítica ou não</li>
                        <li>O TAS durante a avaliação pediátrica ABCDE deve ter presente as particularidades anatómicas e fisiológicas</li>
                        <li>O envolvimento do cuidador/responsável pode ser crucial para a prestação com sucesso de alguns cuidados</li>
                        <li>A máscara de oxigénio com reservatório é a primeira escolha na criança gravemente doente em respiração espontânea</li>
                        <li>Todo o operacional que trabalhe com crianças tem de estar apto a realizar ventilação manual de forma eficaz</li>
                    </ul>
                </div>
            `
        },
        3: {
            title: 'III. ALERGIA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Reconhecer um quadro de alergia</li>
                        <li>Identificar um quadro de anafilaxia</li>
                        <li>Identificar a sintomatologia na alergia</li>
                        <li>Atuar na alergia</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A alergia é uma resposta exagerada do sistema imunológico a uma substância com a qual o organismo entrou em contato.</p>
                    <p>A alergia caracteriza-se por uma reação de hipersensibilidade que se desenvolve em minutos ou horas após exposição a um alergénio.</p>
                </div>

                <h2>Alergénios Mais Comuns</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li>Ácaros presentes na poeira</li>
                            <li>Fungos</li>
                            <li>Medicamentos</li>
                            <li>Pelos de animais domésticos</li>
                            <li>Nozes</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <ul>
                            <li>Picadas de insetos</li>
                            <li>Plantas</li>
                            <li>Crustáceos</li>
                            <li>Pólen das flores</li>
                            <li>Metais</li>
                        </ul>
                    </div>
                </div>

                <h2>Sintomatologia</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Alergia</h4>
                        <ul>
                            <li>Exantema urticariforme</li>
                            <li>Prurido ("comichão")</li>
                            <li>Vómitos e diarreia</li>
                            <li>Edema das estruturas da VA, lábios e rosto</li>
                            <li>Tosse e pieira</li>
                            <li>Dispneia</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Anafilaxia (Reação Grave)</h4>
                        <ul>
                            <li>Alteração cutânea-mucosa (urticária, angioedema)</li>
                            <li>Compromisso da via aérea (estridor, broncoespasmo)</li>
                            <li>Compromisso circulatório (hipotensão)</li>
                            <li>Taquipneia, pieira, cansaço, cianose</li>
                            <li>Palidez, sudorese, desmaio, sonolência/coma</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Potencialmente Fatal na Anafilaxia</h4>
                        <ul>
                            <li><strong>Via Aérea:</strong> edema, rouquidão, estridor</li>
                            <li><strong>Ventilação:</strong> taquipneia, pieira, cansaço, cianose, SpO2 &lt;92%, confusão</li>
                            <li><strong>Circulação:</strong> palidez, hipotensão, sudorese, desmaio, sonolência/coma</li>
                        </ul>
                    </div>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Afastar o fator desencadeante, ou retirar a vítima do local</li>
                        <li>Administrar oxigénio de acordo com protocolo</li>
                        <li>Recolher informação sobre o eventual alergénio</li>
                        <li>Perante sinais de gravidade (anafilaxia), identificar vítima crítica e solicitar apoio diferenciado ao CODU</li>
                        <li>Transporte da vítima mantendo a via aérea permeável</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>É importante reconhecer os sinais e sintomas de um quadro de alergia</li>
                        <li>Depois de identificar o alergénio, minimizar ou evitar o contacto</li>
                        <li>Durante a avaliação inicial se existir qualquer compromisso em A, B ou C solicitar apoio diferenciado</li>
                        <li>Em quadros graves de anafilaxia promover a rápida evacuação ou rendez-vous com equipa diferenciada</li>
                    </ul>
                </div>
            `
        },
        4: {
            title: 'IV. EMERGÊNCIAS RESPIRATÓRIAS',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Reconhecer um quadro de dificuldade respiratória</li>
                        <li>Identificar sinais de dificuldade respiratória no quadro clínico de asma, bronquiolite aguda, laringite aguda</li>
                        <li>Atuar em situações de emergências respiratórias</li>
                    </ul>
                </div>

                <h2>Asma</h2>
                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A asma é uma doença inflamatória que afeta <strong>1-18%</strong> da população, sendo muito frequente na infância e adolescência.</p>
                    <p>Até aos 3 anos, <strong>30 a 50%</strong> das crianças têm pelo menos um episódio. Na maioria dos casos, até à idade escolar, deixam de surgir.</p>
                    <p>Em Portugal, a asma é uma entidade prevalente em idade pré-escolar.</p>
                </div>

                <div class="info-card">
                    <h4>Sintomatologia</h4>
                    <ul>
                        <li>Dispneia</li>
                        <li>Sinais de esforço ventilatório</li>
                        <li>Dificuldade em completar frases</li>
                        <li>Taquipneia e taquicardia</li>
                        <li><strong>Pieira</strong> (som tipo "chiar de chaleira")</li>
                        <li>Uso excessivo de músculos abdominais</li>
                        <li>Cianose ou pele marmoreada</li>
                        <li>Saturação periférica de oxigénio normal ou baixa</li>
                        <li><strong>Posição de tripé</strong></li>
                    </ul>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Crise de Asma Grave</h4>
                        <ul>
                            <li>Alteração do estado de consciência</li>
                            <li>Tiragem e utilização de musculatura acessória</li>
                            <li>Exaustão ventilatória</li>
                            <li>Diminuição ou ausência de sons ventilatórios</li>
                            <li>Bradipneia e/ou alteração do padrão ventilatório</li>
                        </ul>
                    </div>
                </div>

                <div class="info-card">
                    <h4>Atuação</h4>
                    <ul>
                        <li>Atuação compatível com situação de asma no adulto</li>
                        <li>Administração de oxigénio suplementar de acordo com orientação técnica</li>
                        <li>Sem oximetria administrar O2 a 15L/min nas crises de asma moderadas ou graves</li>
                        <li>Recolher informação sobre esquema de tratamento</li>
                        <li>Solicitar apoio diferenciado em caso de gravidade</li>
                    </ul>
                </div>

                <h2>Bronquiolite</h2>
                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A bronquiolite é uma infeção respiratória aguda em crianças com menos de <strong>2 anos</strong>.</p>
                    <p>O <strong>Vírus Sincicial Respiratório (VSR)</strong> é responsável por até <strong>75%</strong> dos casos.</p>
                    <p>Sazonalidade: <strong>novembro a abril</strong>.</p>
                </div>

                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Sintomatologia</h4>
                        <ul>
                            <li>Quadro de constipação inicial</li>
                            <li>Diminuição do apetite, desidratação</li>
                            <li>Febre (geralmente &lt;39°C)</li>
                            <li>Períodos de apneia (&lt;2 meses)</li>
                            <li>Taquipneia, tiragem, adejo nasal</li>
                            <li>Hipoxemia, taquicardia</li>
                            <li>Aumento do tempo de reperfusão capilar</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Atuação</h4>
                        <ul>
                            <li>Solicitar apoio diferenciado</li>
                            <li>Elevação da cabeceira a 30º</li>
                            <li>Desobstrução nasal suave</li>
                            <li>Aspiração suave (evitar nasofaríngea)</li>
                            <li>Administração de O2 de acordo com orientação técnica</li>
                            <li>Suporte ventilatório se bradipneia ou exaustão</li>
                        </ul>
                    </div>
                </div>

                <h2>Laringite</h2>
                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A laringite é uma inflamação da laringe. Manifesta-se sobretudo durante a <strong>noite</strong>.</p>
                    <p>Principal causa: <strong>infeciosa</strong> (vírus).</p>
                    <p>Frequentemente em crianças entre <strong>6 meses e 3 anos</strong>.</p>
                </div>

                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Sintomatologia</h4>
                        <ul>
                            <li>Tosse laríngea (tosse de "cão")</li>
                            <li>Rouquidão ou mudanças na voz</li>
                            <li><strong>Estridor</strong> (mais comum na inspiração)</li>
                            <li>Dificuldade respiratória durante episódios de tosse</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Atuação</h4>
                        <ul>
                            <li>Solicitar apoio diferenciado</li>
                            <li>Elevação da cabeceira a 30º</li>
                            <li>Administrar oxigénio suplementar</li>
                            <li><strong>Minimizar stress e choro</strong></li>
                            <li>Não aquecer demasiado o ambiente</li>
                            <li>Considerar colocar à janela para ar frio</li>
                        </ul>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Asma: inflamação crónica da VA, dispneia com pieira audível</li>
                        <li>Bronquiolite: infeção respiratória em &lt;2 anos, VSR em 75% dos casos</li>
                        <li>Bronquiolite: agravamento entre 3º-5º dia</li>
                        <li>Laringite: tosse de "cão", estridor, piora noturna</li>
                        <li>Se não houver oximetria fiável, iniciar oxigenoterapia</li>
                        <li>Solicitar apoio diferenciado em sinais de gravidade</li>
                    </ul>
                </div>
            `
        },
        5: {
            title: 'V. DESIDRATAÇÃO',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Reconhecer a desidratação em função da idade pediátrica</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A desidratação ocorre pela perda de líquidos excessiva do corpo, geralmente causada por <strong>vómitos e diarreia</strong>.</p>
                    <p>É preocupante devido à perda associada de <strong>eletrólitos</strong> (sódio, potássio, cloreto, bicarbonato).</p>
                    <p>A desidratação é um sintoma ou sinal de outra doença, frequentemente da <strong>diarreia</strong>.</p>
                </div>

                <h2>Sintomatologia</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Sinais Gerais</h4>
                        <ul>
                            <li>Sede</li>
                            <li>Mucosas secas, saliva espessa e branca</li>
                            <li>Língua encortiçada</li>
                            <li>Pele seca, olhos sem brilho</li>
                            <li>Prega cutânea (que se mantém após beliscar)</li>
                            <li>Apatia</li>
                            <li>Diminuição do débito urinário</li>
                            <li>Fontanela anterior deprimida (&lt;18 meses)</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Sinais de Alarme em Bebés</h4>
                        <ul>
                            <li><strong>Fontanela anterior deprimida</strong></li>
                            <li>Olhos "encovados"</li>
                            <li>Ausência de lágrimas ao chorar</li>
                            <li>Boca seca</li>
                            <li>Diminuição da quantidade de urina</li>
                            <li>Menos alerta e menos ativo (letárgico)</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Alteração do Estado de Consciência</h4>
                        <p>É um <strong>sinal de gravidade</strong> na desidratação grave que indica necessidade de apoio diferenciado e referenciação imediata para um serviço de urgência pediátrico.</p>
                    </div>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <h4>Se Vómitos</h4>
                    <ul>
                        <li>Pausa alimentar de pelo menos 30 minutos</li>
                        <li>Dar líquidos em pequena quantidade de cada vez</li>
                        <li>Hidratar com colher de sopa de 5 em 5 minutos</li>
                        <li>Vigiar quantidade de urina produzida</li>
                    </ul>
                </div>

                <div class="info-card">
                    <h4>Recolher Informação</h4>
                    <ul>
                        <li>Tempo de início dos sintomas</li>
                        <li>Evolução do quadro clínico</li>
                        <li>Sintomas associados</li>
                        <li>Número de fraldas e intervalo de tempo</li>
                        <li>Episódios de vómitos e intervalo</li>
                        <li>Hábitos farmacológicos</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A desidratação ocorre quando há uma perda significativa de água e eletrólitos</li>
                        <li>A desidratação é um sintoma ou sinal de outra doença, frequentemente da diarreia</li>
                        <li>Desidratação moderada: criança interage/brinca menos, boca seca, urina com menos frequência</li>
                        <li>AEC é um sinal de gravidade que indica apoio diferenciado</li>
                    </ul>
                </div>
            `
        },
        6: {
            title: 'VI. FEBRE',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Reconhecer a febre</li>
                        <li>Relacionar a febre com a história e o quadro clínico da criança</li>
                        <li>Identificar e adequar as atitudes e cuidados que visam o arrefecimento gradual da criança</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A febre é uma <strong>resposta de defesa</strong> do organismo perante uma infeção. <strong>Não é uma doença</strong>, mas sim um sintoma.</p>
                    <p>O aumento da temperatura corporal contribui para a <strong>inativação dos microrganismos</strong> e controlo da sua multiplicação.</p>
                    <p>A febre só deve ser combatida para <strong>aliviar o desconforto</strong> existente.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-thermometer-half"></i>
                    <div>
                        <h4>Valores de Febre (DGS)</h4>
                        <ul>
                            <li><strong>Retal:</strong> ≥ 38°C</li>
                            <li><strong>Axilar:</strong> ≥ 37,6°C</li>
                            <li><strong>Timpânica:</strong> ≥ 37,8°C</li>
                            <li><strong>Oral:</strong> ≥ 37,6°C</li>
                        </ul>
                    </div>
                </div>

                <h2>Sinais de Alarme</h2>
                <div class="info-card">
                    <ul>
                        <li>Febre em lactente com <strong>menos de 3 meses</strong></li>
                        <li>Febre com <strong>mais de 3-4 dias</strong> de evolução sem melhoria</li>
                        <li>Temperatura corporal <strong>superior a 40°C</strong></li>
                        <li>Presença de <strong>manchas ou pintas</strong> no corpo</li>
                        <li>Presença de pieira, convulsões, dificuldade respiratória</li>
                        <li>Vómitos incoercíveis ou desidratação</li>
                        <li>Prostração/sonolência</li>
                        <li>Febre em criança com <strong>doença crónica</strong></li>
                    </ul>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <h4>Medidas de Arrefecimento (se não houver tremores)</h4>
                    <ul>
                        <li>Retirar peças de roupa excessivas</li>
                        <li>Manter a criança protegida do ambiente frio</li>
                        <li>Oferecer líquidos (água, chás, sumos)</li>
                    </ul>
                </div>

                <div class="info-card">
                    <h4>Recolher Informação</h4>
                    <ul>
                        <li>Tempo de início dos sintomas</li>
                        <li>Quadro de sinais de infeção</li>
                        <li>Episódio de crise convulsiva</li>
                        <li>Sintomas associados</li>
                        <li>Patologia prévia</li>
                        <li>Hábitos farmacológicos</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A febre, isoladamente, dificilmente será motivo de ativação 112</li>
                        <li>A febre não é uma doença, mas sim um sintoma</li>
                        <li>A febre é uma resposta de defesa do organismo perante uma infeção</li>
                        <li>Valores de febre: Retal ≥38°C, Axilar ≥37,6°C, Timpânica ≥37,8°C, Oral ≥37,6°C</li>
                    </ul>
                </div>
            `
        },
        7: {
            title: 'VII. CONVULSÃO',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Reconhecer uma convulsão na vítima pediátrica</li>
                        <li>Identificar os principais motivos de convulsão</li>
                        <li>Identificar o tipo de convulsão</li>
                        <li>Atuar durante a convulsão</li>
                        <li>Atuar no estado pós-crítico</li>
                        <li>Identificar critérios de gravidade em ABCDE na criança que teve uma convulsão</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>Convulsão é a <strong>contração involuntária da musculatura</strong>, com movimentos desorganizados, generalizados ou focais, provocados por descargas elétricas anormais dos neurónios.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Causas de Convulsão em Pediatria</h4>
                        <ul>
                            <li><strong>Febre</strong> (causa mais frequente)</li>
                            <li>Epilepsia</li>
                            <li>Infeções no SNC</li>
                            <li>Intoxicações</li>
                            <li>TCE</li>
                            <li>Hipoglicémia</li>
                            <li>Hipoxia</li>
                            <li>Golpe de calor</li>
                        </ul>
                    </div>
                </div>

                <h2>Convulsão Febril</h2>
                <div class="info-card">
                    <ul>
                        <li>Crise generalizada (tónico-clónica)</li>
                        <li>Duração <strong>inferior a 5 minutos</strong></li>
                        <li>Ocorre em crianças entre <strong>6 meses e 5 anos</strong></li>
                        <li>Habitualmente cessam antes da chegada da equipa</li>
                        <li>Foco: prevenir nova convulsão se a febre não diminuir</li>
                    </ul>
                </div>

                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Sintomatologia</h4>
                        <ul>
                            <li><strong>Recém-nascidos:</strong> convulsões subtis - olhar vago, movimentos de sucção ou "pedalar"</li>
                            <li><strong>Lactentes/crianças:</strong> espasmos involuntários, aumento do tónus muscular</li>
                            <li>Movimentos involuntários dos membros</li>
                            <li>Olhar fixo (crise de ausência)</li>
                            <li>Confusão ou sensações estranhas (parestesias)</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Atuação</h4>
                        <ul>
                            <li><strong>Durante a convulsão:</strong></li>
                            <li>Administrar O2 alto débito (15L/min)</li>
                            <li>Solicitar apoio diferenciado</li>
                            <li>Auxiliar pais no posicionamento (se medicação SOS)</li>
                            <li><strong>Pós-crise:</strong></li>
                            <li>Avaliar e corrigir ABCDE</li>
                            <li>Posição de recuperação</li>
                            <li>Administrar O2 se SpO2 &lt;92%</li>
                        </ul>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Convulsão = contração involuntária da musculatura por descargas elétricas anormais</li>
                        <li>A convulsão por motivo de febre é a mais frequente</li>
                        <li>Durante a convulsão: O2 alto débito, proteção, pedido de apoio</li>
                        <li>Pós-crítico: valorizar prostração, reavaliar ABCDE, manter pedido de apoio</li>
                    </ul>
                </div>
            `
        },
        8: {
            title: 'VIII. SÉPSIS MENINGOCÓCICA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Compreender o conceito de Sépsis</li>
                        <li>Identificar sinais e sintomas de um quadro de doença meningocócica</li>
                        <li>Atuar em conformidade com suspeita de infeção do sistema nervoso central</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A sépsis é considerada pela OMS como uma das <strong>maiores causas de morte infantil</strong>.</p>
                    <p>A <strong>meningococemia</strong> é uma infeção grave causada pela bactéria <em>Neisseria meningitidis</em> (meningococo).</p>
                    <p>A mortalidade passou de <strong>97%</strong> em 1966 para <strong>10%</strong> nos últimos estudos.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Transmissão</h4>
                        <p>A bactéria pode ser transmitida de pessoa para pessoa através de <strong>gotículas respiratórias</strong> (tosse e espirro) ou por <strong>saliva</strong> (partilha de copos e talheres).</p>
                    </div>
                </div>

                <h2>Sintomatologia</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Sinais Precoces (7-12h)</h4>
                        <ul>
                            <li>Febre</li>
                            <li>Dor nas pernas</li>
                            <li>Sede</li>
                            <li>Coloração da pele alterada</li>
                            <li>Dificuldade respiratória</li>
                            <li>Mãos e pés frios</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Sinais Clássicos (13-22h)</h4>
                        <ul>
                            <li><strong>Rash hemorrágico</strong> (petéquias)</li>
                            <li>Sinais de choque</li>
                            <li>Rigidez da nuca</li>
                            <li>Fotofobia</li>
                            <li>Fontanela hipertensa (em lactentes)</li>
                        </ul>
                    </div>
                </div>

                <div class="info-card">
                    <h4>Sinais Tardios (&gt;22h)</h4>
                    <ul>
                        <li>Confusão ou delírio</li>
                        <li>Convulsões</li>
                        <li>AEC</li>
                    </ul>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <ul>
                        <li>Perante sinais de gravidade, solicitar apoio diferenciado</li>
                        <li>Abordar com <strong>EPI adequado</strong> (transmissão por gotículas)</li>
                        <li>Administrar oxigénio suplementar</li>
                        <li>Sem oximetria e com alterações em A, B, C - O2 a 15L/min</li>
                        <li>Prevenir a hipertermia</li>
                        <li>Recolher informação: início de sintomas, evolução, vacinação, débito urinário</li>
                        <li>Contactar CODU para agilizar profilaxia</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A meningococemia pode evoluir para sépsis com choque séptico</li>
                        <li>É importante a exposição da criança para detetar petéquias</li>
                        <li>A equipa deve usar EPI adequado durante a avaliação e transporte</li>
                        <li>Reavaliação constante do ABCDE para identificar e corrigir situações potencialmente fatais</li>
                    </ul>
                </div>
            `
        },
        9: {
            title: 'IX. HIPOGLICEMIA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Identificar quadro de hipoglicemia</li>
                        <li>Reconhecer a criança onde é imperativo avaliar glicemia capilar</li>
                        <li>Identificar o valor a partir do qual se considera hipoglicemia em recém-nascidos e em lactentes/crianças</li>
                        <li>Conhecer medidas e os seus riscos para repor os valores normais de glicemia</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A hipoglicemia corresponde a uma baixa concentração de glicose no sangue:</p>
                    <ul>
                        <li><strong>Recém-nascidos:</strong> glicemia capilar &lt; <strong>40 mg/dL</strong></li>
                        <li><strong>Lactentes e crianças:</strong> glicemia capilar &lt; <strong>60 mg/dL</strong></li>
                    </ul>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Consequências</h4>
                        <p>Os tecidos do SNC dependem da glicose como fonte de energia. Se a hipoglicemia se mantiver de forma prolongada ou repetida pode causar <strong>morte ou lesões cerebrais irreversíveis</strong>.</p>
                    </div>
                </div>

                <h2>Quando Avaliar a Glicemia</h2>
                <div class="info-card">
                    <ul>
                        <li>Na criança com alteração da <strong>"Aparência" no TAP</strong></li>
                        <li>Com história compatível de <strong>diabetes ou hipoglicemia</strong></li>
                        <li>Com <strong>AEC</strong></li>
                    </ul>
                </div>

                <h2>Atuação</h2>
                <div class="info-card">
                    <h4>Vítimas Pediátricas em Amamentação</h4>
                    <ul>
                        <li>Na ausência de vómito, com reflexos de sucção e deglutição mantidos: <strong>colocar ao peito ou dar biberão</strong></li>
                        <li>Com capacidade para se alimentar: fornecer <strong>açúcar, fruta ou pão com doce</strong></li>
                        <li>Sem reflexos de deglutição: <strong>papa de açúcar</strong> sob a língua e bochechas (atenção à quantidade para não obstruir a VA)</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Hipoglicemia: RN &lt;40 mg/dL; Lactente/Criança &lt;60 mg/dL</li>
                        <li>Situação mais frequente: crianças diabéticas com dose superior de insulina</li>
                        <li>Pode causar morte ou lesões cerebrais irreversíveis se prolongada</li>
                        <li>Não administrar papa de açúcar em excesso na criança sem reflexos de deglutição</li>
                    </ul>
                </div>
            `
        },
        10: {
            title: 'X. INTOXICAÇÃO',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Reconhecer um cenário de intoxicação, assegurar condições de segurança para a equipa e vítima pediátrica</li>
                        <li>Identificar a substância nos cenários de intoxicação</li>
                        <li>Identificar critérios de gravidade e lesões provocadas pelos diferentes tóxicos</li>
                        <li>Atuar em conformidade com o tipo de intoxicação</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>As intoxicações agudas em pediatria são uma causa frequente de ida ao serviço de urgência, constituindo perto de <strong>0,5% a 5%</strong> das urgências pediátricas, sobretudo abaixo dos <strong>5 anos</strong>.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-phone"></i>
                    <div>
                        <h4>CIAV - Centro de Informação Antivenenos</h4>
                        <p><strong>Número: 800 250 250</strong></p>
                        <p>Em 2021: <strong>8429 episódios</strong> de intoxicação em crianças, <strong>62%</strong> com idade inferior a 5 anos.</p>
                        <p>Principais agentes: <strong>fármacos</strong> (paracetamol, AINEs, benzodiazepinas) e <strong>produtos domésticos</strong> (lixívia, detergentes).</p>
                    </div>
                </div>

                <h2>Características por Faixa Etária</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>&lt; 6 anos</h4>
                        <ul>
                            <li>Intoxicações <strong>involuntárias</strong> (curiosidade)</li>
                            <li>Principais agentes: fármacos e produtos domésticos</li>
                            <li>Maioria das ingestões inconsequentes</li>
                            <li>Substâncias com sabor desagradável</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Adolescentes</h4>
                        <ul>
                            <li>Intoxicações <strong>medicamentosas voluntárias</strong></li>
                            <li><strong>Intoxicação etanólica</strong></li>
                            <li>Comportamentos de risco</li>
                            <li>Psicofármacos no domicílio</li>
                        </ul>
                    </div>
                </div>

                <h2>Alterações Sugestivas de Intoxicação</h2>
                <div class="info-card">
                    <ul>
                        <li>Queimadura envolvendo lábios e/ou língua (substância cáustica)</li>
                        <li>Edema dos lábios e língua, fuligem, sialorreia, rouquidão (lesão da VA por inalação)</li>
                        <li>Hálito estranho (acetona, amêndoa amarga, alho)</li>
                    </ul>
                </div>

                <h2>Recolha de Informação</h2>
                <div class="info-card">
                    <ul>
                        <li><strong>QUEM:</strong> idade, sexo, peso</li>
                        <li><strong>O QUÊ:</strong> nome do tóxico (medicamento, planta, produto)</li>
                        <li><strong>QUANTO:</strong> quantidade de produto</li>
                        <li><strong>QUANDO:</strong> tempo decorrido desde a exposição</li>
                        <li><strong>ONDE:</strong> local da exposição</li>
                        <li><strong>COMO:</strong> em jejum, com alimentos, com bebidas alcoólicas</li>
                    </ul>
                </div>

                <h2>Síndromes Tóxicas</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Anticolinérgicos</h4>
                        <p>Taquicardia, midríase, hipertermia, pele vermelha e seca, agitação</p>
                    </div>
                    <div class="info-card">
                        <h4>Colinérgicos</h4>
                        <p>Miose, hipersecreção, incontinência urinária, diarreia</p>
                    </div>
                    <div class="info-card">
                        <h4>Simpaticomiméticos</h4>
                        <p>Taquicardia, HTA, midríase, delírio, vómitos, sudorese</p>
                    </div>
                    <div class="info-card">
                        <h4>Sedativos/Hipnóticos</h4>
                        <p>Bradicardia, hipotensão, depressão respiratória, hipotermia</p>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>Crianças são particularmente vulneráveis a intoxicações graves devido ao baixo peso</li>
                        <li>Abaixo dos 5 anos: principais agentes são fármacos e produtos domésticos</li>
                        <li>Adolescentes: intoxicações medicamentosas voluntárias e etanólicas</li>
                        <li>Sinais e sintomas variam de acordo com a substância</li>
                        <li>Através do CIAV é possível adequar a resposta e encaminhamento</li>
                    </ul>
                </div>
            `
        },
        11: {
            title: 'XI. REANIMAÇÃO EM PEDIATRIA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Conjugar os conhecimentos de SBV-DAE e SBV Pediátrico</li>
                        <li>Conhecer estratégias que melhoram a eficiência e o desempenho das Equipas de Reanimação em Pediatria</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Utilização de DAE em Crianças</h3>
                    <ul>
                        <li>DAE standard são adequados para crianças a partir dos <strong>8 anos</strong> (ou 25 Kg)</li>
                        <li>Em crianças até aos 8 anos: utilizar DAE com <strong>sistema atenuador de corrente</strong> e/ou <strong>elétrodos pediátricos</strong></li>
                        <li>Na ausência de elétrodos pediátricos: posição <strong>ântero-posterior</strong> (centro do tórax e entre omoplatas)</li>
                    </ul>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Particularidades na PCR Pediátrica</h4>
                        <ul>
                            <li>Principal causa: <strong>hipoxia</strong> (deterioração progressiva)</li>
                            <li>Raramente é um evento súbito</li>
                            <li>Prioridade: <strong>otimização da oxigenação</strong></li>
                            <li>Se colapso súbito e causa provável cardíaca: <strong>antecipar desfibrilhação</strong></li>
                        </ul>
                    </div>
                </div>

                <h2>Sequência de Atuação em PCR Pediátrica</h2>

                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Recepção da Ocorrência</h4>
                        <ul>
                            <li>Confirmar localização</li>
                            <li>Pensar em potencial tipo de vítima pediátrica</li>
                            <li>Distribuir tarefas</li>
                            <li>Preparar EPI e equipamento</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Chegada ao Local</h4>
                        <ul>
                            <li>Realizar <strong>TAP</strong> enquanto se aproxima</li>
                            <li>Levar DAE, mala, O2, aspirador</li>
                            <li>Garrafa de O2 com ≥100 bar</li>
                            <li>Não atrasar abordagem</li>
                        </ul>
                    </div>
                </div>

                <div class="info-card">
                    <h4>Durante a Reanimação</h4>
                    <ul>
                        <li><strong>R1</strong> deteta vítima inconsciente e solicita ajuda</li>
                        <li><strong>R2</strong> pede ajuda ao CODU (chamada em "alta voz")</li>
                        <li><strong>R1</strong> permeabiliza VA, avalia VOS</li>
                        <li><strong>R1</strong> posiciona máscara facial e inicia <strong>5 insuflações</strong>*</li>
                        <li><strong>R1</strong> liga DAE, cola elétrodos enquanto R2 faz compressões</li>
                        <li><strong>R2</strong> só suspende compressões durante análise do DAE</li>
                        <li><strong>R2</strong> em <strong>hovering</strong> durante análise</li>
                        <li><strong>R1</strong> confirma segurança e interrompe compressões para choque</li>
                        <li><strong>R1</strong> reinicia compressões <strong>imediatamente</strong> após choque</li>
                    </ul>
                    <p class="small-note">*Caso a criança tenha colapsado subitamente e a causa provável seja cardíaca: <strong>omitir as insuflações</strong> e antecipar análise de ritmo e compressões.</p>
                </div>

                <div class="info-card">
                    <h4>Ventilação Durante RCP</h4>
                    <ul>
                        <li>R2 posiciona-se para fixar e selar máscara (duas mãos)</li>
                        <li>R1 insufla com uma mão (mantendo a segunda no local das compressões)</li>
                        <li>R1 realiza <strong>2 insuflações</strong> com duração de <strong>1 segundo</strong> cada</li>
                        <li>Se insuflações ineficazes e história compatível com OVA: considerar <strong>pinça Magill</strong></li>
                    </ul>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-clock"></i>
                    <div>
                        <h4>iTEAMS® - Alerta PCR</h4>
                        <p>Complementando o pedido de ajuda ao CODU, é possível enviar o alerta de vítima em PCR através do verbete eletrónico – <strong>iTEAMS®</strong>.</p>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>DAE com atenuador de corrente para crianças &lt;8 anos</li>
                        <li>Posição ântero-posterior se não houver elétrodos pediátricos</li>
                        <li>PCR pediátrica: geralmente por hipoxia (processo progressivo)</li>
                        <li>5 insuflações iniciais (exceto se colapso súbito cardíaco)</li>
                        <li>Técnica de hovering para início imediato pós-choque</li>
                        <li>R1 e R2 com papéis bem definidos</li>
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