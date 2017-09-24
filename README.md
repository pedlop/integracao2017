## Integração 1 - INF/UFG - 2017/2

Repositório vinculado a Projeto para a disciplina de Integração 1 - INF/UFG - 2017/2.

Índice
--- 
- [Equipe](#integrantes-e-papéis-do-projeto)
- [Visão](#visão-do-projeto)
- [Mais Informações](#links-para-informações-sobre-o-projeto)
  - [Informações Adicionais](#links-para-informações-sobre-o-projeto)
  - [Alocamento de Atividades](#alocamento-de-atividades)
  - [Política de Commits](#política-de-commits)
- [Rodando Projeto](#como-faço-para-rodar-o-projeto)
- [Tecnologias Utilizadas](#quais-as-tecnologias-e-ferramentas-utilizadas)
- [Protótipo funcional da solução](https://pedlop.github.io/integracao2017/index.html)

## **Integrantes e Papéis do Projeto** ##

|Integrante                    |Papel              |
|------------------------------|-------------------|
|Guilherme Alves Rosa e Silva  |Engenheiro de Requisitos|
|Igor Queiroz Silva            |Verificação e Validação|
|João Henrique Camargo         |Desenvolvedor|
|Lucas Vinicios Ferreira Silva |Arquiteto de Software/Desenvolvedor|
|Marcos Vinicius Ribeiro Silva |Designer/Desenvolvedor|
|Pedro Victor de Almeida Lopes |Gerente de Projeto/Desenvolvedor|  

## **Visão do Projeto** ##

Fornecer e elucidar uma visão coesa e integrada da Engenharia de Software de tal forma que o estudante desenvolva uma sólida percepção de como fazer uso do conhecimento desta área em toda a sua extensão.

### **Links para informações sobre o Projeto** ###

- [Proposta](https://docs.google.com/document/d/1ujvTIM47dr3d30GfUcfyDTLJgYhaZqjHo4nO7AIKjMs/edit)
- [Plano da Disciplina](https://docs.google.com/document/d/14AdWF9sBbCWWimYUTnYmrzoMrAKUrWdrY7eK1tNx54Y/edit)

### **Alocamento de Atividades:** ###
* Para cada atividade é criada uma [**_issue_**](https://github.com/pedlop/integracao2017/issues), em 'New issue';
* Estas issues estão distribuídas no [**Projeto Kanban**](https://github.com/pedlop/integracao2017/projects/1) criado com tal função;
* Cada issue tem um ou mais integrante(s) alocado(s) para realizar a mesma.
  * Esta alocação é realizada pelo **Gerente de Projeto**.

### **Política de Commits:** ###
* Todos os Commits serão realizados na Branch **_dev_**.
* Uma vez na semana, no sábado, o **Gerente de Projeto** irá fazer o merge da **_dev_** na **_master_**. Para tal tarefa ser realizada, é preciso:
  * Validar o código:
    * Verificar se há algum erro de compilação (aot - ahead-of-time);
    * Verificar se o código está seguindo o padrão do Angular 4 de desenvolvimento (lint);
    * Verificar se o código construído está seguindo o padrão da estrutura inicial definida;
    * Verificar se o template não tem nenhuma falha ou bug visual (html - scss).
  * Validar as atividades:
    * Verificar se a atividade a ser desenvolvida foi totalmente finalizada;
    * Verificar se com atividade finalizada, temos a funcionalidade cumprindo as expectativas.

## **Como faço para rodar o projeto?** ##

**Caso você não tenha o ambiente Anglular CLI configurado:**
>* Faça o download e a instalação do [Node.js](https://nodejs.org/en/);
>* Na linha de comando:
>* `npm install`
>* `npm install -g @angular/cli`

**Dependências:**
>* npm install primeng --save
>* npm install ngx-bootstrap --save
>* npm install clarity-icons --save
>* npm install clarity-ui --save
>* npm install clarity-angular --save

**Caso o ambiente já esteja configurado:**
>* Clone o projeto através do GitKraken, copie e cole o link HTTPS;
>* Ou [Clonando pela linha de comando](#clonando-projeto-pela-linha-de-comando);
>* Vá no diretório `cd integracao2017` e `cd portal-es` em que o projeto foi clonado pela linha de comando;
>* Digite: `ng serve`
>* Acesse no seu browser o `localhost:4200`
>* Projeto configurado e rodando.

#### **Clonando Projeto pela Linha de Comando:**
>* Caso não tenha o GitKraken:
>* Vá na linha de comando e digite:
> `git clone https://github.com/pedlop/integracao2017.git`

## **Quais as Tecnologias e Ferramentas utilizadas?** ##

Para o desenvolvimento do projeto serão utilizadas ferramentas para auxiliar na Gerência do Projeto e na construção do software. As seguintes tecnologias serão utilizadas:

**Linguagem de Programação & Frameworks:**
- [Angular 4](https://angular.io/) - _Framework JavaScript open-source, mantido pelo Google, que auxilia na execução de single-page applications._
- [Bootstrap 4](http://getbootstrap.com/) - _O Bootstrap é um conjunto de ferramentas de código aberto para desenvolvimento com HTML, CSS e JS._

**Bibliotecas:**
- [ngx-bootstrap](https://valor-software.com/ngx-bootstrap/index-bs4.html#/) - _O ngx-bootstrap contém todos os componentes Bootstrap do núcleo (e não apenas), alimentados por Angular. Portanto, você não precisa incluir componentes JS originais, mas usam marcação e css fornecidos pelo Bootstrap._
- [PrimeNg](https://www.primefaces.org/primeng/#/) - _O primeNG é uma coleção de componentes UI ricos para Angular. Todos os widgets são de código aberto e gratuitos para usar sob a licença MIT. O PrimeNG é desenvolvido pela PrimeTek Informatics, um fornecedor com experiência em desenvolvimento de soluções de UI de código aberto._
- [Clarity Design](https://vmware.github.io/clarity/) - _O Project Clarity é um sistema de design de código aberto que reúne as diretrizes UX, um framework HTML / CSS e componentes angulares. A claridade é para designers e desenvolvedores._

**IDE(s):**
- [Visual Studio Code](https://code.visualstudio.com/) - _Editor de código fonte leve mas poderoso que funciona em seu desktop e está disponível para Windows, macOS e Linux._
- [Atom](https://atom.io/) - _Editor de texto que é moderno, acessível, mas hackable para o núcleo - uma ferramenta que você pode personalizar para fazer qualquer coisa, mas também usar de forma produtiva sem nunca tocar em um arquivo de configuração._

**Gerência de Projeto/Configuração e Comunicação da Equipe:**
- [Github](https://github.com/) - _Controle de versão do código fonte do projeto._
- [GitKraken](https://www.gitkraken.com/) - _A GUI(Interface Gráfica do Usuário) mais popular do Git para Windows, Mac e Linux_.
- [Whatsapp](https://web.whatsapp.com/) - _Comunicação a qualquer momento do dia, em grupo da equipe._
