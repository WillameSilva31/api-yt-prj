# Youtube Clone API

## Descrição
Este projeto é uma API para um clone do YouTube, permitindo a criação, busca e autenticação de usuários, além de upload e pesquisa de vídeos. A API é construída utilizando Node.js, Express, TypeScript e MySQL.

## Instruções de Configuração
1. Clone o repositório:
    ```sh
    git clone https://github.com/WillameSilva31/api-yt-prj.git
    ```
2. Navegue até o diretório do projeto:
    ```sh
    cd api-yt-prj
    ```
3. Instale as dependências:
    ```sh
    npm install
    ```
4. Crie um arquivo `.env` na raiz do projeto e adicione as seguintes variáveis:
    ```env
    SECRET=segredo
    USER_DATABASE=root
    PASSWORD_DATABASE=Pr0gr4m3
    DATABASE=api-youtube-project
    HOST_DATABASE=localhost
    PORT_DATABASE=3306
    ```
5. Execute o projeto em modo de desenvolvimento:
    ```sh
    npm run dev
    ```
6. Para construir o projeto para produção:
    ```sh
    npm run build
    ```

## Uso
- **Criar Usuário:**
    ```sh
    POST /user/sign-up
    ```
    Corpo da requisição:
    ```json
    {
        "name": "Nome do Usuário",
        "email": "email@exemplo.com",
        "password": "senha"
    }
    ```

- **Login:**
    ```sh
    POST /user/sign-in
    ```
    Corpo da requisição:
    ```json
    {
        "email": "email@exemplo.com",
        "password": "senha"
    }
    ```

- **Criar Vídeo:**
    ```sh
    POST /videos/create-videos
    ```
    Corpo da requisição:
    ```json
    {
        "title": "Título do Vídeo",
        "description": "Descrição do Vídeo",
        "user_id": "ID do Usuário"
    }
    ```

- **Buscar Vídeos:**
    ```sh
    GET /videos/get-videos
    ```
    Corpo da requisição:
    ```json
    {
        "user_id": "ID do Usuário"
    }
    ```

- **Pesquisar Vídeos:**
    ```sh
    POST /videos/search
    ```
    Corpo da requisição:
    ```json
    {
        "search": "termo de busca"
    }
    ```

## Diretrizes para Contribuidores
1. Faça um fork do repositório.
2. Crie uma nova branch para sua feature ou correção de bug:
    ```sh
    git checkout -b minha-feature
    ```
3. Faça commit das suas alterações:
    ```sh
    git commit -m 'Adiciona minha feature'
    ```
4. Envie para o repositório remoto:
    ```sh
    git push origin minha-feature
    ```
5. Abra um Pull Request.

## Licença
Este projeto está licenciado sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
