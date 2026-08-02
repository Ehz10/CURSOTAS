/* AV.js - Versão melhorada com navegação e drag to scroll */
document.addEventListener('DOMContentLoaded', function() {
    // ===== DADOS DOS CAPÍTULOS - ABORDAGEM DA VÍTIMA =====
    const chapters = {
        1: {
            title: 'I. INTRODUÇÃO',
            content: `
                <div class="intro-text">
                    <p>Este manual é uma ferramenta essencial para as equipas da emergência pré-hospitalar. Trata de temas fundamentais como a abordagem e avaliação da vítima, a manutenção da via aérea, a oxigenoterapia e a abordagem cuidadosa a pessoas com necessidades específicas.</p>
                </div>

                <div class="content-block">
                    <p>Em momentos de emergência, a resposta rápida e eficaz pode fazer toda a diferença. Este manual oferece diretrizes claras sobre como abordar uma vítima, desde a avaliação inicial até a implementação de procedimentos de emergência. Exploraremos o exame ABCDE, a identificação de prioridades e estratégias para garantir a estabilidade da vítima até à chegada de ajuda diferenciada ou até à chegada à unidade hospitalar.</p>
                </div>

                <div class="content-block">
                    <p>A manutenção da via aérea e a administração adequada de oxigénio é crucial em diversas emergências médicas. Iremos detalhar as diferentes técnicas a realizar.</p>
                </div>

                <div class="content-block">
                    <p>Reconhecendo a diversidade das necessidades individuais, iremos disponibilizar algumas estratégias de abordagem adaptadas para lidar com pessoas que possuem condições médicas específicas, como idosos, pessoas com deficiência e pessoas com perturbação de desenvolvimento. É essencial que as equipas mostrem empatia sobre qualquer vítima, e isso implica que conheçam noções sobre comunicação e personalizem a abordagem para garantir a prestação de cuidados eficazes.</p>
                </div>

                <div class="highlight-box">
                    <p>Nem todas as vítimas podem ser salvas, pois existem condições incompatíveis com a vida. Contudo, a sua missão passa por nunca se perder uma vítima cuja morte, por agravamento de lesões ou da sua condição clínica, possa ser evitada com uma avaliação adequada e com a melhor aplicação dos recursos disponíveis.</p>
                </div>

                <div class="final-message">
                    <p><strong>Esteja preparado para agir com confiança e eficácia, sabendo que cada decisão que irá tomar pode fazer a diferença na vida daqueles que precisam de assistência imediata.</strong></p>
                </div>
            `
        },
        2: {
            title: 'II. ABORDAGEM E AVALIAÇÃO DA VÍTIMA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Conhecer as estratégias de abordagem e comunicação com o adulto</li>
                        <li>Identificar as considerações a ter em conta na avaliação do cenário</li>
                        <li>Identificar a preparação para a atuação</li>
                        <li>Compreender o exame ABCDE</li>
                        <li>Compreender o exame secundário</li>
                        <li>Conhecer os aspetos fundamentais no transporte da vítima</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A abordagem à vítima pela equipa de emergência pré-hospitalar (EPH), pretende-se que seja realizada de forma célere, objetiva que sejam identificados sinais de gravidade e se necessário seja solicitada ajuda diferenciada, enquanto são instituídas as medidas disponíveis de forma imediata, para responder às necessidades específicas das vítimas. O transporte da vítima deve ser realizado o mais rápido possível para a unidade de saúde mais adequada à situação clínica da vítima.</p>
                </div>

                <div class="info-card">
                    <h4><i class="fa-solid fa-list-check"></i> Etapas da Abordagem Inicial</h4>
                    <ul>
                        <li>Preparação a caminho do local</li>
                        <li>Avaliação do local de ocorrência</li>
                        <li>Avaliação da vítima, instituição de medidas e recolha de informação</li>
                        <li>Transporte</li>
                    </ul>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-clock"></i>
                    <div>
                        <h4>Limitação do Tempo no Local</h4>
                        <p>A permanência no local de ocorrência deve ser limitada ao estritamente necessário para uma correta avaliação, não devendo exceder os <strong>20 minutos</strong>, na generalidade.</p>
                    </div>
                </div>

                <h2>Avaliação do Local de Ocorrência</h2>
                <div class="info-card">
                    <h4><i class="fa-solid fa-shield-halved"></i> Pontos a Avaliar</h4>
                    <ul>
                        <li>Garantir precauções universais</li>
                        <li>Avaliar e garantir as condições de segurança do local da ocorrência</li>
                        <li>Determinar a tipologia de ocorrência (Doença Súbita ou Trauma)</li>
                        <li>Determinar o número de vítimas</li>
                        <li>Considerar meios de socorro adicionais</li>
                    </ul>
                </div>

                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Equipamento</th>
                                <th>Doença Súbita</th>
                                <th>Trauma</th>
                                <th>Trabalho de Parto</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Saco de 1ª abordagem</strong></td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                            </tr>
                            <tr>
                                <td><strong>Garrafa portátil de O<sub>2</sub></strong></td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                            </tr>
                            <tr>
                                <td><strong>Aspirador</strong></td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                            </tr>
                            <tr>
                                <td><strong>DAE</strong></td>
                                <td>✓</td>
                                <td>✓</td>
                                <td>✓</td>
                            </tr>
                            <tr>
                                <td><strong>Saco de trauma</strong></td>
                                <td>✗</td>
                                <td>✓</td>
                                <td>✗</td>
                            </tr>
                            <tr>
                                <td><strong>Kit de parto</strong></td>
                                <td>✗</td>
                                <td>✗</td>
                                <td>✓</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h2>Avaliação Primária - ABCDE</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4><strong>A</strong> - Airway</h4>
                        <p>Permeabilização da Via Aérea com estabilização cervical manual</p>
                    </div>
                    <div class="info-card">
                        <h4><strong>B</strong> - Breathing</h4>
                        <p>Ventilação e Oxigenação</p>
                    </div>
                    <div class="info-card">
                        <h4><strong>C</strong> - Circulation</h4>
                        <p>Assegurar a Circulação com controlo da Hemorragia</p>
                    </div>
                    <div class="info-card">
                        <h4><strong>D</strong> - Disability</h4>
                        <p>Disfunção Neurológica</p>
                    </div>
                    <div class="info-card">
                        <h4><strong>E</strong> - Expose/Environment</h4>
                        <p>Exposição com controlo de Temperatura</p>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-hourglass-half"></i>
                    <div>
                        <h4>Avaliação Inicial</h4>
                        <p>A avaliação inicial deve demorar apenas <strong>60-90 segundos</strong> a realizar. No entanto, se forem necessárias intervenções e/ou procedimentos poderá levar mais tempo.</p>
                    </div>
                </div>

                <h3>A - Airway: Permeabilização da Via Aérea</h3>
                <div class="info-card">
                    <h4>Sons Anormais da Via Aérea</h4>
                    <ul>
                        <li><strong>Ressonar</strong> - obstrução anatómica em vítimas inconscientes ou com AEC</li>
                        <li><strong>Estridor</strong> - som agudo que aumenta na inspiração, associado a edema</li>
                        <li><strong>Gorgolejo</strong> - obstrução por fluidos (sangue, vómito, secreções)</li>
                        <li><strong>Rouquidão</strong> - processo infecioso da laringe ou queimadura das vias aéreas</li>
                    </ul>
                </div>

                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th colspan="2">Avaliação da Via Aérea (A) e Procedimentos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Avaliação</strong></td>
                                <td>Pesquisar na cavidade oral: corpos estranhos, fluidos, edemas, queimaduras<br>
                                    Sons indicadores: estridor, ressonar, gorgolejo, rouquidão<br>
                                    Observar no pescoço: desvio traqueia, ingurgitamento jugular, enfisema subcutâneo</td>
                            </tr>
                            <tr>
                                <td><strong>Procedimentos</strong></td>
                                <td>Remover corpos estranhos • Aspirar fluidos • Vítima inconsciente/AEC: extensão da cabeça e elevação do mento, protusão da mandíbula • Aplicar adjuvantes básicos • Posicionar a vítima em PLS • Pedir ajuda diferenciada</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>B - Breathing: Ventilação e Oxigenação</h3>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Parâmetros da Ventilação (FAR)</h4>
                        <ul>
                            <li><strong>Frequência</strong> - Lenta | Normal | Rápida</li>
                            <li><strong>Amplitude</strong> - Profunda | Normal | Superficial</li>
                            <li><strong>Ritmo</strong> - Regular | Irregular</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Valores de Referência</h4>
                        <ul>
                            <li><strong>FR normal:</strong> 12-20 cpm</li>
                            <li><strong>Bradipneia:</strong> &lt; 12 cpm</li>
                            <li><strong>Taquipneia:</strong> &gt; 30 cpm <span class="badge">CRITÉRIO DE GRAVIDADE</span></li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-lungs"></i>
                    <div>
                        <h4>SpO2 - Saturação Periférica de Oxigénio</h4>
                        <p><strong>Adulto:</strong> 92% - 96%</p>
                        <p><strong>DPOC:</strong> 88% - 92%</p>
                    </div>
                </div>

                <h3>C - Circulation: Assegurar a Circulação com controlo da Hemorragia</h3>
                <div class="info-card">
                    <h4>Métodos de Controlo de Hemorragia</h4>
                    <ul>
                        <li>Compressão manual direta no local da hemorragia</li>
                        <li>Aplicação de torniquete</li>
                        <li>Preenchimento de feridas</li>
                        <li>Aplicação de frio</li>
                        <li>Elevação do membro</li>
                    </ul>
                </div>

                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Parâmetros do Pulso (FAR)</h4>
                        <ul>
                            <li><strong>Frequência</strong> - Lento | Normal | Rápido</li>
                            <li><strong>Amplitude</strong> - Cheio | Fino</li>
                            <li><strong>Ritmo</strong> - Regular | Irregular</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Valores de Referência</h4>
                        <ul>
                            <li><strong>FC normal:</strong> 60-100 bpm</li>
                            <li><strong>Bradicardia:</strong> &lt; 60 bpm</li>
                            <li><strong>Taquicardia:</strong> &gt; 100 bpm</li>
                        </ul>
                    </div>
                </div>

                <div class="info-card">
                    <h4><i class="fa-solid fa-droplet"></i> Tipos de Hemorragias</h4>
                    <ul>
                        <li><strong>Hemoptise</strong> - pulmões</li>
                        <li><strong>Epistáxis</strong> - nariz</li>
                        <li><strong>Hematúria</strong> - uretra</li>
                        <li><strong>Otorragia</strong> - ouvido</li>
                        <li><strong>Hematemeses</strong> - gastrointestinal</li>
                        <li><strong>Melena</strong> - gastrointestinal</li>
                    </ul>
                </div>

                <h3>D - Disability: Disfunção Neurológica</h3>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Escala AVDS</h4>
                        <ul>
                            <li><strong>A</strong> - Alerta</li>
                            <li><strong>V</strong> - Responde a estímulos verbais</li>
                            <li><strong>D</strong> - Responde a estímulos dolorosos</li>
                            <li><strong>S</strong> - Sem resposta</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Avaliação Pupilar</h4>
                        <ul>
                            <li><strong>Miose</strong> - ambas contraídas</li>
                            <li><strong>Midríase</strong> - ambas dilatadas</li>
                            <li><strong>Anisocóricas</strong> - diâmetros diferentes</li>
                            <li><strong>Isocóricas</strong> - ambas com tamanho normal</li>
                        </ul>
                    </div>
                </div>

                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th colspan="4">Escala de Coma de Glasgow - GCS</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colspan="2"><strong>Resposta Ocular</strong></td>
                                <td colspan="2"><strong>Resposta Verbal</strong></td>
                            </tr>
                            <tr>
                                <td>Espontânea</td>
                                <td>4</td>
                                <td>Orientada</td>
                                <td>5</td>
                            </tr>
                            <tr>
                                <td>Ao Som</td>
                                <td>3</td>
                                <td>Desorientada</td>
                                <td>4</td>
                            </tr>
                            <tr>
                                <td>À pressão</td>
                                <td>2</td>
                                <td>Palavras inapropriadas</td>
                                <td>3</td>
                            </tr>
                            <tr>
                                <td>Ausente</td>
                                <td>1</td>
                                <td>Sons incompreensíveis</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td>NT</td>
                                <td>NT</td>
                                <td>Ausente</td>
                                <td>1</td>
                            </tr>
                            <tr>
                                <td colspan="2"></td>
                                <td>NT</td>
                                <td>NT</td>
                            </tr>
                            <tr>
                                <td colspan="2"><strong>Resposta Motora</strong></td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <td>Obedece a ordens</td>
                                <td>6</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <td>Localiza a dor</td>
                                <td>5</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <td>Foge à dor</td>
                                <td>4</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <td>Em flexão</td>
                                <td>3</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <td>Em extensão</td>
                                <td>2</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <td>Ausente</td>
                                <td>1</td>
                                <td colspan="2"></td>
                            </tr>
                            <tr>
                                <td>NT</td>
                                <td>NT</td>
                                <td colspan="2"></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

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
                                <td>Pedir à vítima que sorria ou mostre os dentes</td>
                                <td>Ambos os lados se movem igualmente</td>
                                <td>Um lado não se move</td>
                            </tr>
                            <tr>
                                <td><strong>Debilidade dos braços</strong></td>
                                <td>Pedir para fechar os olhos e manter os braços estendidos durante 10 segundos</td>
                                <td>Ambos os braços se movem igualmente</td>
                                <td>Um braço não se move ou apresenta queda</td>
                            </tr>
                            <tr>
                                <td><strong>Fala anormal</strong></td>
                                <td>Pedir à vítima para falar (ex: nome completo)</td>
                                <td>Usa as palavras corretas com articulação clara</td>
                                <td>Pronuncia palavras inteligíveis ou é incapaz de falar</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>E - Expose/Environment: Exposição com controlo de Temperatura</h3>
                <div class="info-card">
                    <h4>Procedimentos</h4>
                    <ul>
                        <li>Garantir privacidade na exposição da vítima</li>
                        <li>Pesquisar outras lesões (queimaduras, feridas, hematomas, fraturas, equimoses)</li>
                        <li>Pesquisar edemas dos membros</li>
                        <li>Alterações cutâneas (petéquias, rubor, rash, exantema, cicatrizes)</li>
                        <li>Controlo de temperatura</li>
                        <li>Tratamento de lesões</li>
                    </ul>
                </div>

                <h2>Avaliação Secundária</h2>
                <div class="info-card">
                    <h4>CHAMU - Recolha de Informação</h4>
                    <ul>
                        <li><strong>C</strong> - Circunstâncias do acidente</li>
                        <li><strong>H</strong> - História anterior de doenças e/ou Gravidez</li>
                        <li><strong>A</strong> - Alergias</li>
                        <li><strong>M</strong> - Medicação habitual</li>
                        <li><strong>U</strong> - Última refeição</li>
                    </ul>
                </div>

                <h3>Parâmetros Vitais</h3>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Pressão Arterial</h4>
                        <ul>
                            <li><strong>Sistólica:</strong> 100-140 mmHg</li>
                            <li><strong>Diastólica:</strong> 60-90 mmHg</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Temperatura</h4>
                        <ul>
                            <li><strong>Febre (Retal):</strong> ≥ 38°C</li>
                            <li><strong>Febre (Axilar):</strong> ≥ 37,6°C</li>
                            <li><strong>Febre (Timpânica):</strong> ≥ 37,8°C</li>
                            <li><strong>Hipotermia:</strong> &lt; 35°C</li>
                        </ul>
                    </div>
                </div>

                <div class="info-card">
                    <h4>Glicemia Capilar</h4>
                    <ul>
                        <li><strong>Normoglicemia:</strong> 70-130 mg/dL</li>
                        <li><strong>Hipoglicemia:</strong> &lt; 70 mg/dL</li>
                        <li><strong>Hiperglicemia:</strong> &gt; 200 mg/dL</li>
                    </ul>
                </div>

                <h3>Dor - 5º Sinal Vital</h3>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Significado</th>
                                <th>Intensidade</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Sem dor</td>
                                <td>0</td>
                            </tr>
                            <tr>
                                <td>Dor ligeira</td>
                                <td>1 - 2</td>
                            </tr>
                            <tr>
                                <td>Dor moderada</td>
                                <td>3 - 5</td>
                            </tr>
                            <tr>
                                <td>Dor intensa</td>
                                <td>6 - 8</td>
                            </tr>
                            <tr>
                                <td>Dor máxima</td>
                                <td>9 - 10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="info-card">
                    <h4>TILIDAS - Caracterização da Dor</h4>
                    <ul>
                        <li><strong>T</strong> - Tipo: Como descreve a dor?</li>
                        <li><strong>I</strong> - Intensidade: NRS de 1 a 10</li>
                        <li><strong>L</strong> - Localização e irradiação: Onde sente a dor?</li>
                        <li><strong>I</strong> - Início: Há quanto tempo começou a dor?</li>
                        <li><strong>D</strong> - Duração: Constante ou intermitente?</li>
                        <li><strong>A</strong> - Alívio e agravamento: O que alivia ou agrava a dor?</li>
                        <li><strong>S</strong> - Sinais e sintomas associados</li>
                    </ul>
                </div>

                <h2>Transporte</h2>
                <div class="info-card">
                    <h4>Considerações no Transporte</h4>
                    <ul>
                        <li>Transporte em segurança para a Unidade Hospitalar mais adequada</li>
                        <li>Vigilância contínua do nível de consciência e parâmetros vitais</li>
                        <li>Qualquer alteração significativa deve ser comunicada ao CODU</li>
                        <li>Garantir a correta fixação da vítima e dispositivos</li>
                        <li>Grávida: posicionamento lateral para a esquerda (15-30 graus) a partir das 20 semanas</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A abordagem à vítima deve ser célere e objetiva</li>
                        <li>O local de ocorrência deve ser permanentemente reavaliado</li>
                        <li>O exame ABCDE permite identificar e corrigir situações com risco de vida</li>
                        <li>A avaliação inicial deve demorar 60-90 segundos</li>
                        <li>Os sinais vitais devem ser reavaliados de 5 em 5 minutos (vítima crítica) ou 15 em 15 minutos</li>
                        <li>A dor é o 5º sinal vital - avaliar com NRS</li>
                        <li>Utilizar o ISBAR para comunicação entre profissionais</li>
                        <li>Transporte deve ser seguro e com vigilância contínua</li>
                    </ul>
                </div>
            `
        },
        3: {
            title: 'III. VIA AÉREA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Conhecer as técnicas manuais de permeabilização da via aérea</li>
                        <li>Permeabilizar a via aérea, utilizando técnicas para posicionamento, colocação de adjuvantes, aspiração de secreções e remoção de corpos estranhos</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Obstrução da Via Aérea</h3>
                    <p>A obstrução da via aérea e as alterações que comprometem a ventilação são emergências que requerem uma intervenção rápida e precisa.</p>
                </div>

                <h2>Tipos de Obstrução da Via Aérea</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4><i class="fa-solid fa-brain"></i> Obstrução Anatómica</h4>
                        <p>Ocorre na vítima com alteração do estado de consciência, onde há o relaxamento das estruturas anatómicas levando à obstrução.</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-cube"></i> Obstrução Mecânica</h4>
                        <p>Ocorre pela presença de corpo estranho na via aérea, este pode ser objeto, alimento, fluidos.</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-droplet"></i> Obstrução Patológica</h4>
                        <p>Ocorre por edema das estruturas da via aérea.</p>
                    </div>
                </div>

                <h2>Técnicas Manuais de Permeabilização</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Extensão da Cabeça e Elevação do Mento</h4>
                        <ul>
                            <li>Para vítimas sem suspeita de trauma cervical</li>
                            <li>Colocar uma mão na testa e inclinar a cabeça para trás</li>
                            <li>Com a outra mão, elevar o mento</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Protusão da Mandíbula</h4>
                        <ul>
                            <li>Para vítimas com suspeita de trauma cervical</li>
                            <li>Colocar os dedos atrás dos ângulos da mandíbula</li>
                            <li>Elevar a mandíbula para a frente</li>
                            <li>Evitar movimentar a cabeça</li>
                        </ul>
                    </div>
                </div>

                <h2>Adjuvantes Básicos da Via Aérea</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Tubo Orofaríngeo (Guedel)</h4>
                        <ul>
                            <li>Mantém a língua afastada da parede posterior da faringe</li>
                            <li>Indicado em vítimas inconscientes sem reflexo de vómito</li>
                            <li>Selecionar o tamanho adequado (medir do lóbulo da orelha ao canto da boca)</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Tubo Nasofaríngeo</h4>
                        <ul>
                            <li>Mantém a via aérea permeável em vítimas com reflexo de vómito presente</li>
                            <li>Indicado em vítimas conscientes ou semiconscientes</li>
                            <li>Lubrificar antes de inserir</li>
                            <li>Selecionar o tamanho adequado (medir do lóbulo da orelha à ponta do nariz)</li>
                        </ul>
                    </div>
                </div>

                <h2>Aspiração da Via Aérea</h2>
                <div class="info-card">
                    <h4>Procedimento</h4>
                    <ul>
                        <li>Remover vómito, sangue, saliva e secreções</li>
                        <li>Indicado especialmente quando existe <strong>gorgolejo</strong> (borbulhar)</li>
                        <li>Utilizar sonda de aspiração adequada (Yankauer para adultos)</li>
                        <li>Aspirar apenas na retirada da sonda</li>
                        <li>Não aspirar por mais de 10-15 segundos</li>
                    </ul>
                </div>

                <h2>Remoção de Corpo Estranho</h2>
                <div class="info-card">
                    <h4>Pinça de Magill</h4>
                    <ul>
                        <li>Permite remover corpos estranhos visíveis na orofaringe</li>
                        <li>Utilizar em vítimas inconscientes</li>
                        <li>Visualizar com laringoscópio ou diretamente</li>
                        <li>Remover com cuidado para não empurrar o objeto para mais baixo</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>O reconhecimento de sinais de gravidade e aplicação de medidas corretivas atempadas são essenciais para uma correta permeabilização da via aérea</li>
                        <li>As técnicas de permeabilização da via aérea poderão ser manuais, ou com recursos a adjuvantes, aspirador ou pinça Magill</li>
                        <li>A ordem na aplicação das técnicas adequadas à vítima deverá ser da menos invasiva para a mais invasiva</li>
                        <li>Uma permeabilização da via aérea eficaz permite que a ventilação seja avaliada corretamente</li>
                    </ul>
                </div>
            `
        },
        4: {
            title: 'IV. OXIGENOTERAPIA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Conhecer as técnicas para oxigenoterapia no adulto</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Oxigenoterapia</h3>
                    <p>A oxigenoterapia corresponde à administração de oxigénio de uso medicinal. A fração inspiratória de oxigénio (FiO2) é a quantidade de oxigénio que entra no organismo em cada inspiração. Numa inspiração normal, com ar atmosférico, o valor é de <strong>21%</strong>.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Regra Geral</h4>
                        <p>O O2 deve, em geral, ser administrado a todas as vítimas com hipoxia, suspeita de hipoxia ou risco de a desenvolver, choque e nas vítimas com alterações de causa desconhecida.</p>
                        <p><strong>Em caso de dúvida quanto à necessidade de administração de oxigénio, administre.</strong></p>
                    </div>
                </div>

                <h2>Equipamentos de Oxigenoterapia por Inalação</h2>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Dispositivo</th>
                                <th>FiO2</th>
                                <th>Débito</th>
                                <th>Indicação</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Cânula Nasal</strong></td>
                                <td>24% - 44%</td>
                                <td>1 - 6 L/min</td>
                                <td>Hipoxia ligeira, DPOC</td>
                            </tr>
                            <tr>
                                <td><strong>Máscara Simples</strong></td>
                                <td>40% - 60%</td>
                                <td>5 - 10 L/min</td>
                                <td>Hipoxia moderada</td>
                            </tr>
                            <tr>
                                <td><strong>Máscara Alta Concentração</strong></td>
                                <td>60% - 100%</td>
                                <td>12 - 15 L/min</td>
                                <td>Hipoxia grave, choque, RCP</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Cânula Nasal</h3>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Procedimento</h4>
                        <ul>
                            <li>Tranquilizar a vítima e pedir colaboração</li>
                            <li>Abrir o sistema de oxigénio</li>
                            <li>Conectar a cânula nasal ao debitómetro</li>
                            <li>Regular o débito até 6 L/min</li>
                            <li>Introduzir as extremidades nas narinas</li>
                            <li>Passar os ramos por trás das orelhas</li>
                            <li>Ajustar à região submandibular</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Observações</h4>
                        <ul>
                            <li>Débito superior a 6 L/min seca a mucosa nasal</li>
                            <li>Pode causar desconforto, cefaleias e úlceras</li>
                            <li>Narinas devem estar permeáveis</li>
                            <li>Permite a expiração, evitando retenção de CO2</li>
                        </ul>
                    </div>
                </div>

                <h3>Máscara Simples</h3>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Procedimento</h4>
                        <ul>
                            <li>Tranquilizar a vítima e pedir colaboração</li>
                            <li>Abrir o sistema de oxigénio</li>
                            <li>Conectar a máscara ao debitómetro</li>
                            <li>Regular o débito entre 5-10 L/min</li>
                            <li>Colocar a máscara cobrindo boca e nariz</li>
                            <li>Ajustar o elástico de fixação</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Observações</h4>
                        <ul>
                            <li>Não usar com débito inferior a 5 L/min</li>
                            <li>Pode permitir acumulação de CO2 expirado</li>
                            <li>Orifícios laterais permitem entrada de ar ambiente</li>
                        </ul>
                    </div>
                </div>

                <h3>Máscara de Alta Concentração (Hudson)</h3>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Procedimento</h4>
                        <ul>
                            <li>Tranquilizar a vítima e pedir colaboração</li>
                            <li>Abrir o sistema de oxigénio</li>
                            <li>Conectar a máscara ao debitómetro</li>
                            <li>Regular o débito entre 12-15 L/min</li>
                            <li><strong>Permitir enchimento do reservatório antes de colocar</strong></li>
                            <li>Colocar a máscara cobrindo boca e nariz</li>
                            <li>Ajustar o elástico de fixação</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Observações</h4>
                        <ul>
                            <li>Reservatório acumula O2 para cada inspiração</li>
                            <li>FiO2 de 60% a 100%</li>
                            <li>Se as válvulas laterais se perderem, há entrada de ar ambiente</li>
                        </ul>
                    </div>
                </div>

                <h2>Ventilação Assistida</h2>
                <div class="definition-box">
                    <p>A ventilação assistida é realizada quando a vítima <strong>não ventila</strong> ou quando a ventilação <strong>não é eficaz</strong> – FR &lt; 8 cpm ou &gt; 35 cpm.</p>
                </div>

                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Insuflador Manual</h4>
                        <ul>
                            <li>Balão de plástico com válvula unidirecional</li>
                            <li>Conectado a máscara facial ou dispositivo de VA</li>
                            <li>Com reservatório: até 100% O2</li>
                            <li>Sem reservatório: 40% - 60% O2</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Técnica CE</h4>
                        <ul>
                            <li>Polegar e indicador em forma de <strong>C</strong> sobre a máscara</li>
                            <li>3º, 4º e 5º dedos em forma de <strong>E</strong> na mandíbula</li>
                            <li>Garante boa vedação da máscara</li>
                            <li>Idealmente por 2 elementos</li>
                        </ul>
                    </div>
                </div>

                <div class="info-card">
                    <h4>Procedimento com Insuflador Manual</h4>
                    <ul>
                        <li>Conectar o reservatório e sistema de O2 ao insuflador</li>
                        <li>Aplicar um <strong>filtro de ar</strong> no insuflador</li>
                        <li>Escolher a máscara facial adequada</li>
                        <li>Dois elementos: um sela a máscara, outro aperta o insuflador</li>
                        <li>Insufiação: <strong>1 segundo</strong>, volume suficiente para elevação visível do tórax</li>
                        <li>Frequência: <strong>10 insuflações/minuto</strong> (1 a cada 6 segundos)</li>
                        <li>Reavaliar a vítima a cada minuto</li>
                    </ul>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-hospital"></i>
                    <div>
                        <h4>Vítimas Traqueostomizadas</h4>
                        <p>A aspiração, administração de oxigénio e ventilação assistida são feitas através da <strong>cânula de traqueostomia</strong>.</p>
                        <p>Na ausência de equipamento específico, usar equipamento pediátrico.</p>
                        <p>Não são necessárias técnicas manuais de permeabilização.</p>
                    </div>
                </div>

                <h2>Algoritmo de Administração de Oxigénio</h2>
                <div class="info-card">
                    <h4>Sinais de Dificuldade Respiratória Grave</h4>
                    <ul>
                        <li><strong>FR &gt; 30 cpm</strong></li>
                        <li><strong>Esforço respiratório</strong> com utilização de musculatura acessória, tiragem</li>
                        <li><strong>Cianose</strong></li>
                    </ul>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-syringe"></i>
                    <div>
                        <h4>Administração de O2 a 100% ou 15 L/min</h4>
                        <ul>
                            <li>Durante a Reanimação Cardiopulmonar (RCP)</li>
                            <li>Durante a ventilação manual assistida</li>
                            <li>Doente crítico com sinais de dificuldade respiratória grave (sem SpO2)</li>
                            <li>Doente em choque hemorrágico (até SpO2 disponível)</li>
                            <li>Suspeita de intoxicação por monóxido de carbono</li>
                            <li>Pré-oxigenação para intubação</li>
                            <li>Doença de descompressão</li>
                            <li>Grávida com sofrimento fetal</li>
                        </ul>
                    </div>
                </div>

                <h2>Cálculo da Autonomia das Garrafas de Oxigénio</h2>
                <div class="definition-box">
                    <h4>Fórmulas</h4>
                    <p><strong>Volume utilizável (litros)</strong> = Capacidade da garrafa (litros) × Pressão de oxigénio (bar)</p>
                    <p><strong>Minutos disponíveis</strong> = Volume utilizável / Débito a administrar</p>
                </div>

                <div class="info-card">
                    <h4>Exemplo</h4>
                    <ul>
                        <li>Capacidade da garrafa = 20 L</li>
                        <li>Pressão de oxigénio = 200 bar</li>
                        <li>Débito = 15 L/min</li>
                        <li><strong>Volume utilizável</strong> = 20 × 200 = 4.000 L</li>
                        <li><strong>Minutos disponíveis</strong> = 4.000 / 15 ≈ 267 min ≈ 4h27m</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>O reconhecimento de sinais de gravidade e aplicação de medidas corretivas atempadas são essenciais para uma correta oxigenação</li>
                        <li>A oxigenoterapia pode ser realizada por inalação ou através da ventilação assistida</li>
                        <li>A oxigenoterapia por inalação pode ser realizada por cânula nasal, máscara simples e máscara de alta concentração</li>
                        <li>A oxigenoterapia através de ventilação assistida é realizada com o insuflador manual, filtro e máscara facial</li>
                    </ul>
                </div>
            `
        },
        5: {
            title: 'V. ABORDAGEM A PESSOAS COM NECESSIDADES ESPECÍFICAS',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Conhecer as técnicas para abordagem a pessoas com necessidades específicas</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A abordagem à vítima no pré-hospitalar, pretende-se que seja realizada de forma célere e objetiva. O que significa que são necessárias estratégias específicas para lidar com pessoas com necessidades especiais.</p>
                </div>

                <div class="info-card">
                    <h4><i class="fa-solid fa-comments"></i> Princípios Gerais de Abordagem</h4>
                    <ul>
                        <li>Identifique-se antes de falar com a pessoa ou familiar</li>
                        <li>Dirija-se sempre à pessoa com necessidades específicas</li>
                        <li>Ofereça ajuda e espere que seja aceite</li>
                        <li>Mostre disponibilidade e empatia</li>
                        <li>Assuma uma atitude calma, postura tranquila e humilde</li>
                        <li>Mantenha o contacto visual e utilize o toque de forma ponderada</li>
                        <li>Utilize linguagem simples e clara</li>
                        <li>Seja paciente, aguarde a resposta</li>
                        <li>Não faça promessas que não pode cumprir</li>
                        <li>Não se coloque numa postura confrontativa</li>
                    </ul>
                </div>

                <h2>Pessoas Séniores</h2>
                <div class="info-card">
                    <ul>
                        <li>Trate a pessoa pelo nome usando <strong>Senhor</strong> ou <strong>Senhora</strong></li>
                        <li>Não utilize termos diminutivos como "querido", "avô"</li>
                        <li>Não fale com familiares à frente do idoso como se este não estivesse presente</li>
                        <li>Alguns idosos podem ter resposta lentificada - repita as perguntas as vezes necessárias</li>
                        <li>Explique que a retirada de casa é temporária e por uma questão de saúde</li>
                        <li>Os séniores têm limitações no uso da tecnologia - preste ajuda se necessário</li>
                    </ul>
                </div>

                <h2>Pessoas Surdas ou com Deficiência Auditiva</h2>
                <div class="info-card">
                    <ul>
                        <li>Para a pessoa surda, a <strong>visão</strong> é o sentido primordial de comunicação</li>
                        <li>Articule bem as palavras para que possa observar os seus lábios e face</li>
                        <li>Recorra à escrita como alternativa</li>
                        <li>Se souber Língua Gestual Portuguesa (LGP), utilize</li>
                        <li><strong>Evite</strong> a palavra "surdo-mudo" - é considerada ofensiva</li>
                        <li>Mantenha o contacto visual - quando desviar o olhar pode interpretar que terminou a conversa</li>
                        <li>Repita o que ouviu para confirmar a informação</li>
                    </ul>
                </div>

                <h2>Pessoas com Deficiência Visual</h2>
                <div class="info-card">
                    <ul>
                        <li>Podem ser mais suscetíveis a quedas ou embate com obstáculos</li>
                        <li><strong>Evite</strong> a palavra "invisual" - é considerada ofensiva</li>
                        <li>Nunca puxe pelo braço, bengala ou arnês do cão-guia</li>
                        <li>Comunique com palavras - não adianta gesticular ou apontar</li>
                        <li>Seja claro a indicar o caminho ou descrever obstáculos</li>
                        <li><strong>Não interaja</strong> com o cão-guia, para que se mantenha concentrado</li>
                    </ul>
                </div>

                <h2>Pessoas com Paralisia Cerebral</h2>
                <div class="info-card">
                    <ul>
                        <li>Lesão cerebral que causa perda de controlo sobre os músculos</li>
                        <li>Pode ter dificuldade em andar e falar</li>
                        <li>Pode apresentar movimentos involuntários e expressões faciais estranhas</li>
                        <li>Tenha especial atenção à fala - permita que termine o que quer dizer</li>
                        <li><strong>Não se intimide</strong> com expressões ou sons invulgares</li>
                        <li><strong>Não subestime o raciocínio</strong> - podem não ter limitação intelectual</li>
                        <li>Não conter os movimentos da vítima</li>
                    </ul>
                </div>

                <h2>Pessoas com Dificuldades Intelectuais e/ou Perturbações de Desenvolvimento</h2>
                <div class="info-card">
                    <ul>
                        <li>Podem ter limitações na comunicação, raciocínio e competências sociais</li>
                        <li>Cumprimente e aja naturalmente</li>
                        <li>Utilize <strong>frases curtas e simples</strong></li>
                        <li>Se for adulto, <strong>evite infantilizar</strong> a comunicação</li>
                        <li><strong>Não subestime o raciocínio</strong> - podem levar mais tempo a responder</li>
                        <li>Ajude apenas quando for estritamente necessário</li>
                        <li>Evite abordagem em local com ruído e confusão</li>
                    </ul>
                </div>

                <h2>Pessoas com Autismo</h2>
                <div class="info-card">
                    <ul>
                        <li>Não existem dois autistas iguais - abordagem personalizada</li>
                        <li>Prevenir a crise (meltdown) é o maior desafio</li>
                        <li>Permitir que a vítima fique com um objeto que a tranquilize</li>
                        <li>Permitir a prévia manipulação dos aparelhos (termómetro, estetoscópio)</li>
                        <li><strong>Evitar sinais sonoros e estímulos luminosos</strong> - baixar volume do rádio</li>
                    </ul>
                </div>

                <h2>Pessoas com Deficiência Motora ou Mobilidade Condicionada</h2>
                <div class="info-card">
                    <ul>
                        <li>Maiores dificuldades são a locomoção</li>
                        <li>Aproxime-se, apresente-se e sente-se para ficarem ao mesmo nível</li>
                        <li>A cadeira de rodas, bengalas fazem parte do espaço corporal - <strong>não mexa sem autorização</strong></li>
                        <li>Ao mobilizar uma cadeira de rodas numa rampa, fazer com a pessoa de costas</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>As necessidades de adaptação no discurso serão diferentes consoante o tipo de população</li>
                        <li>Para a pessoa surda, a visão é o sentido primordial de comunicação</li>
                        <li>As pessoas com deficiência visual poderão ser mais suscetíveis a quedas</li>
                        <li>Não existem dois autistas iguais - o maior desafio é prevenir a crise</li>
                        <li>Mantenha sempre uma atitude calma, empática e respeitosa</li>
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