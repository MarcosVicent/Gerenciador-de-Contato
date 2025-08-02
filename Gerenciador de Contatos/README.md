# Gerenciador de Contatos Angular

Este é um mini projeto front-end desenvolvido com Angular, com foco em demonstrar conceitos essenciais de **UI/UX**, aplicação de **Design Patterns** e uma simulação de ambiente para **DevOps**. Toda a nomenclatura utilizada no código e na documentação está em português para clareza no contexto.

## 🚀 Visão Geral

O objetivo principal deste projeto é criar um sistema simples de **Gerenciamento de Contatos**. A aplicação é composta por duas páginas principais que se relacionam para permitir a gestão completa dos contatos:

1.  **Lista de Contatos (`/contatos`):** Exibe uma lista de todos os contatos cadastrados. Permite visualizar detalhes básicos de cada contato, navegar para a tela de edição e remover contatos existentes.
2.  **Adicionar/Editar Contato (`/contatos/novo` ou `/contatos/editar/:id`):** Um formulário unificado para criar novos contatos ou modificar os dados de um contato existente. A página se adapta dinamicamente com base na presença de um ID na URL.

Os dados são persistidos no `localStorage` do navegador, simulando uma base de dados local, o que garante que as informações não se percam ao recarregar a página.

## ✨ Conceitos Aplicados

### UI/UX (Interface do Usuário e Experiência do Usuário)

* **Design Responsivo:** O layout da aplicação é adaptável a diferentes tamanhos de tela (desktop, tablet, mobile), utilizando Flexbox e Media Queries no CSS global para garantir uma experiência consistente.
* **Navegação Intuitiva:** Um cabeçalho claro (`CabecalhoComponent`) com links de navegação (`routerLink`) facilita a transição entre a lista de contatos e o formulário de adição/edição. O `routerLinkActive` oferece feedback visual sobre a página ativa.
* **Feedback Visual:** Mensagens informativas (sucesso, erro, aviso) são exibidas ao usuário após a realização de operações (adicionar, editar, remover contatos), melhorando a clareza e a usabilidade.
* **Consistência Visual:** Variáveis CSS (`:root`) são empregadas para definir uma paleta de cores e tipografia consistentes em toda a aplicação. A padronização de botões e campos de formulário contribui para uma interface coesa.
* **Usabilidade do Formulário:** Campos de formulário com `placeholder`, atributos `required` e validação básica garantem que o usuário forneça as informações necessárias de forma clara. Confirmações (`confirm()`) são solicitadas antes de operações destrutivas como a remoção de um contato.
* **Acessibilidade (ARIA):** Utilização de atributos ARIA como `aria-label` e `role` em elementos chave, visando melhorar a navegação e a compreensão do conteúdo para usuários que dependem de tecnologias assistivas.

### DevOps (Conceitual/Simulado)

* **Versionamento de Código:** A estrutura do projeto é otimizada para integração com sistemas de controle de versão (ex: Git). O `package.json` gerencia de forma centralizada todas as dependências do projeto.
* **Automação de Build:** Os scripts padrão do Angular CLI (`ng build`) são utilizados para compilar e otimizar a aplicação, gerando uma versão pronta para deploy em ambientes de produção.
* **Contêinerização (Demonstração):** Arquivos `Dockerfile` e `docker-compose.yml` são fornecidos para ilustrar como a aplicação pode ser empacotada em um contêiner Docker. Isso assegura que o ambiente de execução da aplicação seja consistente e portátil entre diferentes estágios (desenvolvimento, teste, produção).
* **Configuração de Ambiente:** O uso de variáveis de ambiente (`environments/`) e a configuração do `nginx.conf` no Dockerfile demonstram como o projeto pode ser adaptado para diferentes configurações de ambiente.

### Design Patterns (Padrões de Projeto)

* **Componentes Reutilizáveis:** `CabecalhoComponent` e `RodapeComponent` são exemplos clássicos de componentes que encapsulam elementos de UI comuns e podem ser reutilizados em qualquer parte da aplicação, promovendo modularidade e DRY (Don't Repeat Yourself).
* **Serviços (Service Layer):** `ContatoService` é um serviço que encapsula toda a lógica de negócio relacionada à manipulação de contatos (CRUD e persistência no `localStorage`). Essa abordagem desacopla a lógica dos componentes, tornando-a mais fácil de testar, manter e reutilizar em diferentes partes da aplicação.
* **Container/Presentational Components:** As páginas (`ListaContatosComponent`, `FormContatoComponent`) atuam como componentes de "container". Elas gerenciam o estado da aplicação, interagem com os serviços para obter/salvar dados e orquestram a exibição dos elementos da UI.
* **Single Responsibility Principle (SRP):** Cada componente, serviço e modelo no projeto tem uma responsabilidade única e bem definida. Por exemplo, `ContatoService` é responsável apenas pelas operações de contatos.
* **Reatividade com RxJS:** O `ContatoService` utiliza `BehaviorSubject` e `Observable` (do RxJS) para fornecer dados de forma reativa. Os componentes se inscrevem nesses Observables para receber atualizações automaticamente quando os dados dos contatos mudam, implementando o padrão **Observador**.
* **Comunicação entre Componentes:** A comunicação é feita de forma clara via **Roteamento** (para navegação entre páginas), **Parâmetros de Rota** (para passar IDs de contato para edição) e **Serviços Compartilhados** (para a troca de dados reativos).

### Estrutura e Nomenclatura

* **Nomenclatura em Português:** Uma prioridade para este projeto. Nomes de arquivos, classes, variáveis, métodos e comentários são consistentemente em português, facilitando a compreensão e manutenção por desenvolvedores que preferem ou trabalham nesse idioma.
    * Ex: `ListaContatosComponent`, `salvarContato`, `item-lista`, `btn-primario`.
* **Organização de Pastas:** O projeto segue uma estrutura de pastas lógica do Angular: `components` para elementos de UI menores, `pages` (ou `views`) para componentes associados a rotas, `services` para a lógica de negócio e `models` para as interfaces de dados.
* **`@Input()` e `@Output()`:** Utilizados para uma comunicação explícita e clara entre componentes pai e filho, aderindo às melhores práticas do Angular.

## 🛠️ Tecnologias Utilizadas

* **Angular:** Framework JavaScript robusto para construção de aplicações front-end de página única (SPA).
* **TypeScript:** Superset do JavaScript que adiciona tipagem estática, melhorando a escalabilidade e a detecção de erros.
* **Angular CLI:** Ferramenta de linha de comando essencial para inicializar, desenvolver, testar e construir projetos Angular.
* **Angular Router:** Módulo para gerenciar a navegação e as rotas da aplicação.
* **HTML5:** Linguagem de marcação para a estrutura do conteúdo web.
* **CSS3:** Linguagem de folha de estilo para estilização, utilizando variáveis CSS para um tema consistente.
* **Font Awesome:** Biblioteca de ícones escaláveis para enriquecer a interface do usuário.
* **RxJS:** Biblioteca para programação reativa, amplamente utilizada no Angular para manipulação de eventos e dados assíncronos.

## ⚙️ Como Configurar e Rodar o Projeto

### Pré-requisitos

* **Node.js** (versão LTS recomendada)
* **npm** (Node Package Manager) ou **Yarn** (gerenciador de pacotes alternativo)
* **Angular CLI** (instale globalmente via `npm install -g @angular/cli`)
