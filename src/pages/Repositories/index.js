import React, { useEffect, useState } from 'react';
import * as S from './styled';

export default function Repositories() {
    useEffect(() => {
        const repoNames = localStorage.getItem('repoName');
    }, [])


    return(
        <S.Container>
            <S.Title>Repos</S.Title>
            <S.List>
                <S.ListItem>Repositório 1</S.ListItem>
                <S.ListItem>Repositório 2</S.ListItem>
                <S.ListItem>Repositório 3</S.ListItem>
                <S.ListItem>Repositório 4</S.ListItem>
            </S.List>
        </S.Container>
    )
}