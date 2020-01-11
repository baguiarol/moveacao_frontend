import React from 'react'
import './FormAjudador.scss'


export default props =>(
    <form className = "form-all">
        <p class="text-center">{props.title}</p>
        <div class="form-group">
            <label for="inputAddress">Nome Completo</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Ex: Jose da Silva"></input>
        </div>

        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email"></input>
            </div>

            <div class="form-group col-md-6">
                <label for="inputPassword4">Nova Senha</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Senha"></input>
            </div>
        </div>

        <div class="form-row">
            <label for="inputEmail4"> Data de Nascimento</label>
            <input type="email" class="form-control" id="inputEmail4" placeholder="Data de Nascimento"></input>
        </div>

        <div class="form-group">
            <label for="inputAddress">Endereço</label>
            <input type="text" class="form-control" id="inputAddress" placeholder="Rua dos Bobos, nº 0"></input>
        </div>

        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputCity">Cidade</label>
                <input type="text" class="form-control" id="inputCity"></input>
            </div>

            <div class="form-group col-md-4">
                <label for="inputEstado">Estado</label>
                <select id="inputEstado" class="form-control">
                    <option selected>Escolher...</option>
                    <option>Amazonas</option>
                    <option>Pará</option>
                    <option>São Paulo</option>
                </select>
            </div>

            <div class="form-group col-md-2">
                <label for="inputCEP">CEP</label>
                <input type="text" class="form-control" id="inputCEP"></input>
            </div>
        </div>

        <fieldset class="form-group">
            <div class="row">
                <legend class="col-form-label text-left">Deseja que seus dados apareçam quando for doar algum recurso?</legend>
                <div class="col-sm-10">
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="opcao1" checked></input>
                        <label class="form-check-label" for="gridRadios1">
                            Sim
                    </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="opcao2"></input>
                        <label class="form-check-label" for="gridRadios2">
                            Não
                        </label>
                    </div>
                </div>
            </div>
        </fieldset>

    <button type="submit" class="btn btn-primary">Entrar</button>
</form>
)