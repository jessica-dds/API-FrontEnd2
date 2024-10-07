![Captura de tela 2024-10-07 105213](https://github.com/user-attachments/assets/186932b1-2e1a-454f-a43c-ec243899f395)

Desenvolvido durante o curso Full Stack da Cubos Academy.
Documentação da API para Integração
URL da API
    https://api-crud-user.pedagogico.cubos.academy
Rotas
POST /login
Permite você fazer o login na requisição

Body da requisição
    {
	"email": "jessica.gleizer@email.com",
	"senha": "123abc"
    }
Resposta da requisição quando houver sucesso
    {
      "usuario": {
        "id": 1,
        "nome": "jessica",
        "email": "jessica.gleizer@email.com"
      },
      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NiwiaWF0IjoxNjY0ODQ2NzIxLCJleHAiOjE2NjQ4NzU1MjF9.tV21FxS0qZ3-16g8rHR_sw-YuSRtAJEAXXzZBOupbD8"

    }
POST /usuarios
Permite você cadastrar um novo usuário

Body da requisição

{
    "nome": "jessica",
    "email": "jessica.gleizer@email.com",
    "senha": "123456"
}
A resposta é:

{
  "id": 2,
  "nome": "jessica",
  "email": "jessica.gleizer@email.com"
}

GET /usuarios
Permite você listar o usuário que está logado, para isso você precisa passar o seu token no header da requisição:

    headers: {
        "Authorization":token
    }
A resposta é como essa:

{
  "id": 2,
  "nome": "jessica",
  "email": "jessica.gleizer@email.com"
}
PUT /usuarios
Permite você atualizar as informações do usuário que está logado, para isso você precisa passar o seu token no header da requisição:

    headers: {
        "Authorization":token
    }
O Body da requisição precisa ter as seguintes informações:

{
  "nome": "jessica",
  "email": "jessica.gleizer@email.com",
  "senha":"102030"
}
A resposta é como essa quando obtiver sucesso:

    "Usuário foi atualizado com sucesso."
DELETE /usuarios
Permite você excluir o usuário que está logado, para isso você precisa passar o seu token no header da requisição:

    headers: {
        "Authorization":token
    }
A resposta é como essa quando obtiver sucesso:

    "Usuário excluido com sucesso"
