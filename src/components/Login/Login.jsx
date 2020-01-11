import React from 'react'
import './Login.scss'

export default props =>(
    <form className ="form-login">
        <div>
            <h4>Login</h4>
        </div>
        <div class="form-group">
            <label for="exampleInputEmail1">Endereço de email</label>
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Seu email"></input>
            <small id="emailHelp" class="form-text text-muted">Nunca vamos compartilhar seu email, com ninguém.</small>
        </div>

        <div class="form-group">
            <label for="exampleInputPassword1">Senha</label>
            <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Senha"></input>
        </div>

        <div class="form-group form-check">
            <input type="checkbox" class="form-check-input" id="exampleCheck1"></input>
            <label class="form-check-label" for="exampleCheck1">Clique em mim</label>
        </div>

        <button type="submit" class="btn btn-primary">Enviar</button>

        <div>
            <p> Não tem login e: </p>
            <a href="/tela_acolhido" class="btn btn-primary btn-sm active" role="button" aria-pressed="true">é Imigrante/Refugiado?</a>
            <a href="/tela_acolhido" class="btn btn-primary btn-sm active" role="button" aria-pressed="true">Quer ajudar?</a>
        </div>
    </form>

    



)