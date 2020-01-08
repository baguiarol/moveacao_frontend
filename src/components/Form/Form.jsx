import React from 'react'


export default props => (
    <form>
    <input class="form-control" type="text" placeholder="Input padrão"></input>
   
            <div class= "form-group">
                <label for="exempleInputEmail1"> Endereço de email</label>
                <input type = "email" class = "form-control" id = "exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email"></input>
                <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
            </div>

            <div class= "form-group">
                <label for="exempleInputPassword1"> Senha </label>
                <input type = "password" class = "form-control" id = "exempleInputPassword1" placeholder="Senha"></input>
            </div>

            <div class= "form-group">
                <input type = "checkbox" class = "form-control-input" id = "exempleCheck1"></input>
                <label class="form-check-label" for="exempleCheck1"> Clique em mim</label>
            </div>

            <button type ="submit" class= "btn btn-primary">Enviar</button>

            
    </form>
)
