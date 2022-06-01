import React, { useState } from 'react';
import axios from 'axios';
import * as S from './styled';
import { useNavigate } from 'react-router-dom';

export default function HelloWorld()
{
    const [ usuario, setUsuario ] = useState('');
    const navigate = useNavigate();

    function handlePesquisa() {
        axios.get(`https://api.github.com/users/${usuario}/repos`).then(response => {
            const repo = response.data;
            const repoName = [];

            repo.map(repository => {
                repoName.push(repository.name);
            });
            localStorage.setItem('repoName', JSON.stringify(repoName))
            navigate('./repositories');
        })
    }

    return(
       <>
        <S.Input className='usuarioInput' placeholder='Usuário' value={ usuario } onChange={ u => setUsuario(u.target.value) } />
        <S.Button type='button' onClick={ handlePesquisa }>Pesquisar</S.Button>
       </>
    )
}