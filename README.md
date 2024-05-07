# Desafio BossaBox

Este é um projeto desenvolvido como parte do Desafio BossaBox, utilizando Spring Boot para o backend e documentação com Swagger para facilitar o entendimento da API.

## Tecnologias Utilizadas

- Spring Boot
- MySql
- Swagger
- Docker
- Angular
- Styled Components

## Pré-requisitos

Antes de começar, certifique-se de ter o Java e o MongoDB instalados em sua máquina.

## Instalação e Configuração

Siga os passos abaixo para instalar e configurar o projeto:

1. Clone este repositório:

   ```bash
   git clone https://github.com/FernandoSchimidt/desafio-bossabox.git
Acesse o diretório do backend:
bash

cd desafio-bossabox/backend
Configure as variáveis de ambiente no arquivo application.properties, conforme necessário.
Inicie o servidor backend:
bash

./mvnw spring-boot:run
Acesse a documentação da API no navegador: http://localhost:8080/swagger-ui.html
Abra uma nova janela do terminal e acesse o diretório do frontend:
bash

cd ../frontend
Instale as dependências do frontend:
bash

npm install
Inicie o servidor frontend:
bash

npm start
Acesse a aplicação no navegador: http://localhost:3000
Uso
Na página inicial, você pode visualizar a lista de ferramentas cadastradas.
Para adicionar uma nova ferramenta, clique em "Adicionar" e preencha o formulário.
Para filtrar as ferramentas por tag, utilize a barra de busca.
Contribuição
Contribuições são bem-vindas! Siga os passos abaixo para contribuir com este projeto:

Faça um fork deste repositório.
Crie uma nova branch com sua funcionalidade: git checkout -b minha-funcionalidade
Faça commit das suas alterações: git commit -am 'Adiciona nova funcionalidade'
Faça push para a branch criada: git push origin minha-funcionalidade
Abra um Pull Request explicando suas alterações.
Licença
Este projeto está sob a licença MIT. Consulte o arquivo LICENSE para mais detalhes.
