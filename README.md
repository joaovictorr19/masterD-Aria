<!------------ ARIA CONSULTORIA ------------>

Aqui está meu projeto editável 100% responsivo. Demorei aproximadamente 3 dias para pensar em
como seria a elaboração, entretando tive a ideia de usar o framework Angular 7 + Bootstrap para
 ajudar na responsividade já que estava em outro curso do mesmo.

A idéia que tive foi criar uma consultoria de aparelhos apple. Algo fictício mas com
toda a estrutura de contactar e elaboração de um Orçamento.

Após confirmação de vocês para usar o framework, comecei a buscar por templates 
(https://www.creative-tim.com/templates/angular-bootstrap)  para ajudar nas criatividad, Foram muitos 
erros e dor de cabeça para escrever um código html puro transcrevendo em componentes, e foi com a ajuda 
de alguns vídeos do youtube que entendi como fazer essa transição (https://www.youtube.com/watch?v=Ym_T0mvvc7c).

#Estrutura do projeto:
A estrutura do projeto mantem estrutura angular usando um index principal navegando pela pagina por parametros
ID na url, contem um SCSS 'folha de estilo' global, onde todos os estilos das páginas se encontram.
na raiz do projeto também é possivel acessar a página public que fica os arquivos compilados para o servidor 
(no angular o nome dessa pasta é encontrada com o nome 'dist' ou 'www'). Scrips JS e pacotes PHP foram importados 
apenas para fazer pequenas animações com o bootstrap.


#Desenvolvimento do projeto:

Um dos requisitos do projeto era possuir 6 paginas HTML, que podiam ser implementadas
facilmente usando o evento (click)="goTo('/routeExemple')" e na parte da programação
'thia.router.navigate(['/routeExemple']' visto em (https://angular.io/guide/router). Entretanto escolhi
usar just-one-page aprendendo a usar metodo scrollTo pegando o Id com getElementById(),
dessa forma passando no href um ID da parte da página especifífica.

Como o angular é orientado a componentes, fiz o trabalho de dividir cada 'página'
em componente por questão de organização.

#Orçamento descritivo:

A solução que encontrei para o orçamento foi cobrar 5,15€/H, totalizando 231.75€ em criação. 
Todo o tempo de planejamento e estudo também estava incluíndo nesse valor.

#Orçamento do alojamento e domínio:

Primeiro pensei em usar meu computador como servidor principal, mas depois li os custos e responsabilidade de
manter sempre ativo, e logo busquei por algum site de hospedagem. O servidor que escolhi para hospedar o site
não é apenas um host mas também um backend completo para aplicações web / mobile.
O site se encontra hospedado no https://aria.back4app.io/ com o plano gratuito por se tratar de algo fictício.
Caso o cliente ultrapassasse o plano gratuíto o cliente arcaria com os custos.
