1.0 Enunciado
Construa, utilizando o React, uma aplicação para informar os resultados de
eleições em 5 municípios.

2.0 Atividades
Os alunos deverão desempenhar as seguintes atividades:
• Implementar, utilizando o React, uma aplicação denominada "reactelections", que mostrará o resultado de eleições em 5 municípios. Os
dados sobre as eleições serão fornecidos pelo professor no Fórum de
Avisos do Módulo.

3.0 Considerações importantes:
• Imagens – será fornecida, no Fórum de Avisos do Professor, uma pasta
img com imagens dos candidatos. Esta pasta deve estar localizada dentro
da pasta public do projeto de Front End e a url do componente de imagem
deve ser acessada como "/img/superman.png", por exemplo.
• Estruturas de dados – será fornecido, no Fórum de Avisos do Professor,
um Back End fake com json-server, que irá monitorar o arquivo
elections.json, que contém:
− Um array denominado cities, que contém dados sobre os 5
municípios e informações sobre total de eleitores 3
(votingPopulation), abstenções (quem não votou – absence) e
presenças (diferença entre eleitores e abstenções – presence).
− Um array denominado candidates, que contém dados sobre os
candidatos. O campo username pode ser utilizado para localizar a
imagem correspondente do candidato. Observação: para simplificar o
processo de geração dos dados de forma aleatória, considere que um
mesmo candidato pode participar da eleição de mais de um município.
− Um array denominado election, que contém o vínculo entre município
e candidato e informações sobre a votação. Este é o maior array e, na
prática, deve ser filtrado e ordenado (mair votação >>> menor
votação) para refletir determinada eleição em determinado município.
− O Back End on-line dará acesso às seguintes rotas/urls, que
"devolvem" os dados conforme as descrições dos tópicos acima:
− Há basicamente duas estratégias para a busca dos dados:
1ª. Você pode buscar todo o back-end e trabalhar com todos
os dados em memória.

2ª. Você pode buscar por cities e candidates, mantendo-os
em memória. A partir da cidade selecionada pelo usuário,
você traz os dados referentes às eleições daquele
município com a seguinte url:
http://localhost:3001/election?cityId=d2dab6a2-3029-
45a5-89f2-fcbaee387758 (neste exemplo, trago o
resultado da votação de "Smallville", considerando os
dados gerados no momento da criação deste
documento, ou seja, o id (d2dab6a2-3029-45a5-89f2-
fcbaee387758) pode possuir um outro valor em outras
ofertas deste Desafio.
