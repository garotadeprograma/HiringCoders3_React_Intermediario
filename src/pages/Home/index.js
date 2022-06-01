import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled'

export default function HelloWorld()
{
    const [ usuario, setUsuario ] = useState('');

    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
            const repo = response.data;
            const repoName = [];

            repo.map(repository => {
                repoName.push(repository.name);
            });
            localStorage.setItem('repoName', JSON.stringify(repoName))
        })
    }

    return(
       <>
        <S.Input className='usuarioInput' placeholder='Usuário' value={ usuario } onChange={ u => setUsuario(u.target.value) } />
        <S.Button type='button' onClick={ handlePesquisa }>Pesquisar</S.Button>
       </>
    )
}