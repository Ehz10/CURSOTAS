/* EO.js - Versão com scroll ao topo ao mudar de capítulo */
document.addEventListener('DOMContentLoaded', function() {
    // ===== DADOS DOS CAPÍTULOS - EMERGÊNCIAS DE OBSTETRÍCIA =====
    const chapters = {
        1: {
            title: 'I. ANATOMIA E FISIOLOGIA DA GRAVIDEZ',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Descrever as estruturas anatómicas envolvidas no processo da gravidez</li>
                        <li>Identificar as principais funções das estruturas envolvidas no processo da gravidez</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Fecundação e Desenvolvimento</h3>
                    <p>A fecundação dá início a um processo de multiplicação celular, com uma duração normal até às <strong>41 semanas e 6 dias</strong> e que culmina com o nascimento de um ser humano.</p>
                </div>

                <h2>Estruturas da Gravidez</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4><i class="fa-solid fa-person-pregnant"></i> Útero</h4>
                        <p>Estrutura formada por fibras musculares involuntárias, com capacidade de se distender à medida que o feto se desenvolve.</p>
                        <p>As <strong>contrações musculares</strong> do útero expulsam o feto no fim da gravidez.</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-hand-holding-heart"></i> Placenta</h4>
                        <p>Estrutura fixada na parede interior do útero, constituída por vasos sanguíneos que permitem a ligação entre a mãe e o feto.</p>
                        <p>Permite que o feto receba os nutrientes necessários para viver e se desenvolver.</p>
                    </div>
                </div>

                <div class="grid-2col">
                    <div class="info-card">
                        <h4><i class="fa-solid fa-link"></i> Cordão Umbilical</h4>
                        <p>Liga a placenta ao feto, permitindo a circulação de sangue entre ambos.</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-water"></i> Saco Amniótico e Líquido Amniótico</h4>
                        <p>Saco membranoso que contém o feto mergulhado em líquido amniótico.</p>
                        <p>Funções: proteger o feto de agressões externas, manter temperatura estável, proteger de infeções, permitir movimentos livres.</p>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-water"></i>
                    <div>
                        <h4>Líquido Amniótico</h4>
                        <ul>
                            <li>Proteger o feto de agressões externas</li>
                            <li>Permitir ao feto temperaturas estáveis</li>
                            <li>Proteger o feto de algumas infeções do exterior</li>
                            <li>Permitir ao feto movimentos livres no espaço do útero</li>
                        </ul>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A gravidez normal dura até 41 semanas e 6 dias</li>
                        <li>O útero contrai-se para expelir o feto</li>
                        <li>A placenta permite a ligação mãe-feto</li>
                        <li>O cordão umbilical liga a placenta ao feto</li>
                        <li>O líquido amniótico protege e permite o desenvolvimento do feto</li>
                    </ul>
                </div>
            `
        },
        2: {
            title: 'II. ABORDAGEM À GRÁVIDA',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Descrever as fases do parto</li>
                        <li>Identificar as características do parto iminente</li>
                        <li>Conhecer o equipamento necessário na assistência ao parto</li>
                        <li>Descrever a abordagem ao parto iminente e ao recém-nascido</li>
                        <li>Identificar as situações de emergências obstétricas</li>
                        <li>Recolher informação segundo nomenclatura CHAMU</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Gravidez</h3>
                    <p>A Gravidez é o período durante o qual o produto da conceção se desenvolve, desde a fecundação até à sua expulsão, que, numa gravidez normal, ocorre no termo, ou seja, entre as <strong>37 e as 41 semanas e 6 dias</strong>.</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-book"></i>
                    <div>
                        <h4>Boletim de Saúde da Grávida (BSG)</h4>
                        <p>O "livro verde" contém informação relevante:</p>
                        <ul>
                            <li>Antecedentes pessoais</li>
                            <li>Alergias conhecidas</li>
                            <li>Medicação habitual</li>
                            <li>Antecedentes obstétricos</li>
                            <li>História da gravidez atual (idade gestacional, tipo de gestação, apresentação fetal, localização da placenta)</li>
                        </ul>
                    </div>
                </div>

                <h2>Idade Gestacional</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Trimestres</h4>
                        <ul>
                            <li><strong>1º Trimestre:</strong> até 13s+6d</li>
                            <li><strong>2º Trimestre:</strong> 14s até 27s+6d</li>
                            <li><strong>3º Trimestre:</strong> a partir das 28s</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Viabilidade Fetal</h4>
                        <ul>
                            <li><strong>&lt;24 semanas:</strong> não viável (aborto)</li>
                            <li><strong>24-36s+6d:</strong> viável, mas prematuro</li>
                            <li><strong>≥37 semanas:</strong> viável, de termo</li>
                        </ul>
                    </div>
                </div>

                <h2>Tipo de Gestação e Apresentação Fetal</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Gestação</h4>
                        <ul>
                            <li><strong>Simples</strong> - 1 feto</li>
                            <li><strong>Múltipla</strong> - mais de 1 feto (gestação gemelar)</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Apresentação Fetal</h4>
                        <ul>
                            <li><strong>Cefálica</strong> - cabeça em primeiro lugar (mais comum, menos complicações)</li>
                            <li><strong>Pélvica</strong> - pélvis ou membros inferiores em primeiro lugar (riscos acrescidos)</li>
                        </ul>
                    </div>
                </div>

                <h2>Antecedentes Obstétricos - Gesta e Para</h2>
                <div class="info-card">
                    <ul>
                        <li><strong>Gesta</strong> - número de gestações, incluindo a atual</li>
                        <li><strong>Para</strong> - número de partos de fetos potencialmente viáveis (≥24 semanas)</li>
                    </ul>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-heart"></i>
                    <div>
                        <h4>Alterações Fisiológicas da Gravidez</h4>
                        <ul>
                            <li><strong>A:</strong> Grávida = "estômago cheio" - risco de vómito e aspiração</li>
                            <li><strong>B:</strong> FR aumenta (necessidades de O2 aumentam 20%)</li>
                            <li><strong>C:</strong> FC aumenta 10-15 bpm; PA diminui 15-20% no início, normaliza no 3º trimestre</li>
                            <li>Hipertensão (>140/90mmHg) pode ser sinal de gravidade</li>
                        </ul>
                    </div>
                </div>

                <h2>Estádios do Trabalho de Parto</h2>
                <div class="grid-3col">
                    <div class="info-card">
                        <h4>1º Estádio</h4>
                        <p><strong>Dilatação</strong></p>
                        <p>Contrações uterinas persistentes e dolorosas. Dilatação e apagamento do colo uterino.</p>
                    </div>
                    <div class="info-card">
                        <h4>2º Estádio</h4>
                        <p><strong>Período Expulsivo e Parto</strong></p>
                        <p>Desde a dilatação completa até à expulsão do feto.</p>
                    </div>
                    <div class="info-card">
                        <h4>3º Estádio</h4>
                        <p><strong>Dequitadura e Puerpério Imediato</strong></p>
                        <p>Desprendimento e expulsão da placenta. Pode demorar até 30 minutos.</p>
                    </div>
                </div>

                <h2>Sinais de Parto Iminente</h2>
                <div class="info-card">
                    <ul>
                        <li>Sensação de pressão na vagina e/ou ânus</li>
                        <li>Vontade de "puxar", "fazer força" ou evacuar</li>
                        <li>Contrações com intervalos &lt;5 minutos</li>
                        <li>Vontade incontrolável de fazer força</li>
                    </ul>
                </div>

                <h2>Assistência ao Parto</h2>
                <div class="info-card">
                    <h4>Equipamento (Kit de Partos)</h4>
                    <ul>
                        <li>Superfície plana para o RN</li>
                        <li>Luvas descartáveis, panos secos e quentes</li>
                        <li>Clamp de cordão umbilical e tesoura</li>
                        <li>Sistema de aspiração (sondas Fr 6, 8, 10)</li>
                        <li>Tubo orofaríngeo</li>
                        <li>Insuflador manual neonatal com válvula limitadora de pressão</li>
                        <li>Máscaras faciais (tamanhos 00, 0, 1)</li>
                        <li>Fonte de oxigénio</li>
                        <li>Monitor de SpO2</li>
                    </ul>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <div>
                        <h4>Procedimentos Importantes</h4>
                        <ul>
                            <li><strong>Não aguardar pela dequitadura</strong> para iniciar o transporte</li>
                            <li><strong>Não tracionar</strong> o cordão para abreviar a dequitadura</li>
                            <li><strong>Protelar a clampagem</strong> do cordão ~1 minuto após o parto (se RN estiver bem)</li>
                            <li><strong>Aspiração de rotina</strong> não está recomendada</li>
                            <li>O <strong>contacto pele-a-pele</strong> é recomendado pela OMS</li>
                        </ul>
                    </div>
                </div>

                <h2>Emergências Obstétricas</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Prolapso do Cordão Umbilical</h4>
                        <ul>
                            <li>Contactar CODU imediatamente</li>
                            <li>Posicionar em <strong>Trendelenburg</strong></li>
                            <li>Inserir dois dedos na vagina, <strong>empurrar a apresentação</strong></li>
                            <li><strong>Não reintroduzir</strong> o cordão</li>
                            <li>Proteger com compressas esterilizadas em SF</li>
                            <li>O2 a 15 L/min</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Exteriorização de Membro Fetal</h4>
                        <ul>
                            <li>Contactar CODU imediatamente</li>
                            <li>Posicionar em <strong>Trendelenburg</strong></li>
                            <li><strong>Não reintroduzir</strong> o membro</li>
                            <li>Proteger com pano do kit de partos</li>
                            <li>O2 a 15 L/min</li>
                        </ul>
                    </div>
                </div>

                <div class="info-card">
                    <h4>Parto Pélvico</h4>
                    <ul>
                        <li>Impedir ao máximo o parto: controlo materno, posicionamento (Trendelenburg)</li>
                        <li>Caso o tronco já esteja exteriorizado:</li>
                        <ul>
                            <li>Deixar o feto descer até ao umbigo</li>
                            <li>Puxar suavemente o cordão umbilical</li>
                            <li>Alinhar ombros em posição ântero-posterior</li>
                            <li>Exercer ligeira tração até ver as axilas</li>
                            <li>Libertar ombro posterior e depois anterior</li>
                            <li>Rodar o feto com a face posterior</li>
                            <li>Apoiar o feto num antebraço</li>
                            <li>Deslizar dedos até encontrar queixo e nariz</li>
                        </ul>
                    </ul>
                </div>

                <h2>Hipertensão na Gravidez</h2>
                <div class="info-card">
                    <ul>
                        <li>PA ≥ 140/90 mmHg após 20 semanas</li>
                        <li>Sinais de gravidade: cefaleias intensas, perturbações visuais ("moscas volantes"), dores abdominais severas</li>
                        <li>Comunicar imediatamente ao CODU</li>
                    </ul>
                </div>

                <h2>Aborto ou Abortamento</h2>
                <div class="info-card">
                    <ul>
                        <li>Principal causa de hemorragia no 1º trimestre</li>
                        <li>Fim da gravidez antes das 24 semanas</li>
                        <li>Atuação: Trendelenburg, O2, pensos higiénicos, vigiar perdas hemáticas e sinais de choque</li>
                        <li>Recolher o produto da conceção, acondicionar e transportar</li>
                    </ul>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>As alterações fisiológicas da gravidez devem ser consideradas no exame primário</li>
                        <li>O BSG apresenta informação essencial e deve acompanhar a grávida</li>
                        <li>Protelar a clampagem do cordão ~1 minuto após o parto</li>
                        <li>Aspiração de rotina do RN não está recomendada</li>
                        <li>Não aguardar pela dequitadura para iniciar transporte</li>
                        <li>Contacto pele-a-pele é recomendado pela OMS</li>
                        <li>Emergências obstétricas: prolapso do cordão, exteriorização de membro, parto pélvico</li>
                    </ul>
                </div>
            `
        },
        3: {
            title: 'III. REANIMAÇÃO NEONATAL',
            content: `
                <div class="objectives-box">
                    <h3><i class="fa-solid fa-bullseye"></i> Objetivos</h3>
                    <ul>
                        <li>Assegurar uma transição segura do recém-nascido (RN) ao meio extrauterino</li>
                        <li>Prestar os cuidados iniciais ao RN</li>
                        <li>Identificar os critérios de gravidade no RN que requerem reanimação</li>
                        <li>Executar os passos que compreendem o algoritmo de reanimação neonatal</li>
                    </ul>
                </div>

                <div class="definition-box">
                    <h3>Enquadramento</h3>
                    <p>A reanimação neonatal aplica-se exclusivamente à reanimação do RN, imediatamente após o parto, nos primeiros minutos de vida.</p>
                    <p><strong>6% a 10%</strong> dos RN necessitam de alguma forma de ajuda na adaptação à vida extrauterina (frequentemente, apoio na ventilação).</p>
                    <p>Apenas <strong>1%</strong> chegará a necessitar de reanimação avançada (compressões torácicas e fármacos).</p>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-lungs"></i>
                    <div>
                        <h4>Foco da Reanimação Neonatal</h4>
                        <p>O foco na reanimação neonatal será no <strong>"A" (Airway) e no "B" (Breathing)</strong>.</p>
                        <p>A adequada adaptação à vida extra-uterina está dependente do <strong>início da função dos pulmões</strong>.</p>
                    </div>
                </div>

                <h2>Avaliação Inicial - 3 Focos</h2>
                <div class="grid-3col">
                    <div class="info-card">
                        <h4><i class="fa-solid fa-muscle"></i> Tónus</h4>
                        <p>Bom tónus muscular: membros em movimentos de flexão normal</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-microphone"></i> Choro/Ventilação</h4>
                        <p>Choro vigoroso indica ventilação adequada e VA desobstruída</p>
                    </div>
                    <div class="info-card">
                        <h4><i class="fa-solid fa-heart"></i> Frequência Cardíaca</h4>
                        <p>FC ≥ 100 bpm (avaliada por auscultação)</p>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-thermometer-half"></i>
                    <div>
                        <h4>Prevenção da Hipotermia</h4>
                        <ul>
                            <li>Pré-aquecer o ambiente (23-25°C)</li>
                            <li>Secar o RN <strong>imediatamente</strong> após o parto</li>
                            <li>Remover o pano molhado</li>
                            <li>Cobrir a cabeça e o corpo com pano seco e quente</li>
                            <li>RN pré-termo (&lt;32 semanas): envolver tronco, abdómen, braços e pernas em plástico</li>
                            <li>Temperatura alvo: <strong>36,5-37,5°C</strong></li>
                        </ul>
                    </div>
                </div>

                <h2>Cuidados Imediatos ao RN</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Procedimentos</h4>
                        <ul>
                            <li>Registar a hora de nascimento</li>
                            <li><strong>Clampagem tardia</strong> do cordão (≥60 segundos)</li>
                            <li>Secar imediatamente</li>
                            <li>Envolver em pano seco e quente</li>
                            <li>Evitar métodos vigorosos de estimulação</li>
                            <li>Avaliar: tónus, choro, FC</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Via Aérea</h4>
                        <ul>
                            <li>Cabeça alinhada em <strong>posição neutra</strong></li>
                            <li>Toalha com 2-3 cm sob os ombros</li>
                            <li><strong>Aspiração apenas se VA obstruída</strong></li>
                            <li>Pressão de aspiração ≤150 mmHg</li>
                            <li>Períodos ≤5 segundos</li>
                            <li>Não usar tubo orofaríngeo em pré-termo &lt;34 semanas</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-heart"></i>
                    <div>
                        <h4>SpO2 Alvo no RN</h4>
                        <ul>
                            <li><strong>2 min:</strong> 65%</li>
                            <li><strong>5 min:</strong> 85%</li>
                            <li><strong>10 min:</strong> 90%</li>
                        </ul>
                        <p><small>Monitorizar no punho da mão direita</small></p>
                    </div>
                </div>

                <h2>Ventilação</h2>
                <div class="info-card">
                    <h4>Indicações para Ventilação</h4>
                    <ul>
                        <li>RN não respira adequadamente</li>
                        <li>FC &lt; 100 bpm</li>
                    </ul>
                    <h4>Procedimento</h4>
                    <ul>
                        <li>Iniciar com <strong>5 insuflações iniciais</strong> (2-3 segundos cada)</li>
                        <li>Usar <strong>ar ambiente</strong> inicialmente em RN de termo</li>
                        <li>Aumentar O2 se necessário para SpO2 ≥85% aos 5 min</li>
                        <li>Verificar expansão torácica</li>
                        <li>Maioria responde com <strong>30 segundos</strong> de ventilação</li>
                        <li>Se FC &gt;100 bpm mas ventilação ineficaz: manter 30 ciclos/min</li>
                        <li>Reavaliar a cada 30 segundos</li>
                    </ul>
                </div>

                <h2>Compressões Torácicas</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <h4>Técnica do Abraço (preferencial)</h4>
                        <ul>
                            <li>2 polegares no terço inferior do esterno</li>
                            <li>Dedos a envolver o tronco</li>
                            <li>Comprimir 1/3 do diâmetro ântero-posterior</li>
                            <li>Não levantar os polegares durante a descompressão</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Técnica dos 2 Dedos</h4>
                        <ul>
                            <li>Quando as mãos do reanimador são pequenas</li>
                            <li>Quando a técnica do abraço interfere com outras manobras</li>
                            <li>Aplicar dois dedos sobre o esterno, em ângulo reto</li>
                        </ul>
                    </div>
                </div>

                <div class="info-box highlight">
                    <i class="fa-solid fa-heart"></i>
                    <div>
                        <h4>Relação 3:1 - Compressões:Ventilações</h4>
                        <ul>
                            <li>Iniciar compressões se <strong>FC &lt; 60 bpm</strong> após 30 segundos de ventilação eficaz</li>
                            <li>Relação <strong>3:1</strong> (3 compressões para 1 ventilação)</li>
                            <li>~90 compressões e 30 ventilações por minuto</li>
                            <li>Verificar FC a cada 30 segundos</li>
                            <li>Aumentar O2 até 100%</li>
                            <li>Suspender compressões quando FC &gt;60 bpm</li>
                        </ul>
                    </div>
                </div>

                <h2>Índice de Apgar</h2>
                <div class="table-wrapper">
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>Sinal</th>
                                <th>0 pontos</th>
                                <th>1 ponto</th>
                                <th>2 pontos</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><strong>Respiração</strong></td>
                                <td>Ausente</td>
                                <td>Irregular, lenta</td>
                                <td>Boa, choro vigoroso</td>
                            </tr>
                            <tr>
                                <td><strong>FC</strong></td>
                                <td>Ausente</td>
                                <td>&lt;100 bpm</td>
                                <td>&gt;100 bpm</td>
                            </tr>
                            <tr>
                                <td><strong>Tónus</strong></td>
                                <td>Flácido</td>
                                <td>Alguma flexão</td>
                                <td>Movimentos ativos</td>
                            </tr>
                            <tr>
                                <td><strong>Reflexos</strong></td>
                                <td>Ausentes</td>
                                <td>Careta</td>
                                <td>Tosse, espirro</td>
                            </tr>
                            <tr>
                                <td><strong>Cor</strong></td>
                                <td>Cianótico, pálido</td>
                                <td>Corpo rosado, extremidades cianóticas</td>
                                <td>Rosado</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div class="info-card">
                    <h4>Avaliação do Apgar</h4>
                    <ul>
                        <li>Realizado ao <strong>1º minuto</strong> de vida</li>
                        <li>Repetido aos <strong>5 e 10 minutos</strong></li>
                        <li>Pontuação de <strong>0 a 10</strong></li>
                        <li>Quanto mais alta, melhor o estado clínico</li>
                    </ul>
                </div>

                <h2>Características do RN nas Primeiras Horas</h2>
                <div class="grid-2col">
                    <div class="info-card">
                        <ul>
                            <li><strong>Cabeça moldável</strong> - formato assimétrico (reverte 24-48h)</li>
                            <li><strong>Fontanelas</strong> - grande (moleirinha) e pequena</li>
                            <li><strong>Lanugo</strong> - penugem (desaparece nas primeiras semanas)</li>
                            <li><strong>Vérnix caseosa</strong> - material gorduroso branco em pregas cutâneas</li>
                        </ul>
                    </div>
                    <div class="info-card">
                        <h4>Textura da Pele por Idade Gestacional</h4>
                        <ul>
                            <li><strong>Pré-termo:</strong> muito fina e gelatinosa</li>
                            <li><strong>Termo:</strong> lisa, brilhante, húmida e fina</li>
                            <li><strong>Pós-termo:</strong> seca, enrugada, apergaminhada</li>
                        </ul>
                    </div>
                </div>

                <div class="key-points">
                    <h3><i class="fa-solid fa-key"></i> Pontos a Reter</h3>
                    <ul>
                        <li>A maioria dos RN não necessita de reanimação</li>
                        <li>Manter o RN seco e quente</li>
                        <li>O RN não deve ser aspirado por rotina</li>
                        <li>O foco da reanimação deve incidir sobre o "A" e o "B"</li>
                        <li>As primeiras 5 insuflações com ar, durante 2-3 segundos</li>
                        <li>Reavaliações de 30 em 30 segundos</li>
                        <li>Relação 3:1 se FC &lt;60 bpm após 30 seg de ventilação eficaz</li>
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

        // ===== SCROLL SUAVE AO TOPO AO MUDAR DE CAPÍTULO =====
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