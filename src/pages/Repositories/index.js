import React, { useEffect, useState } from 'react';
import * as S from './styled';

export default function Repositories() {
    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        let repoNames = localStorage.getItem('repoName');
        repoNames = JSON.parse(repoNames);
        setRepositories(repoNames);
        console.log(repositories);
    }, []);


    return(
        <S.Container>
            <S.Title>Repos</S.Title>
            <S.List>                                
                {
                    repositories.map(repository => {
                        return(
                            <S.ListItem>{ repository }</S.ListItem>
                        )
                    })
                }
            </S.List>
        </S.Container>
    )
}