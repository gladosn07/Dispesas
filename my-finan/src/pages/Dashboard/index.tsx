import React from 'react'
import Router from 'next/router'
import { Button } from '../../components/atoms/Button'
import * as S from '../../components/templates'
import { Card } from './components/Card'

export default function index() {

    const array= [
        {id: '0',title: 'Netflix',category: 'Streaaming', cost: 39.99},
        {id: '1',title: 'Amazon',category: 'Streaaming', cost: 29.99},
        {id: '2',title: 'Spotify',category: 'Music', cost: 19.99},
        {id: '3',title: 'Deezer',category: 'Streaaming', cost: 9.87},
]

const handleNavigateToAdd = () => {
    Router.push('/dashboard/add')
}

    return (
        <S.TamplateContainer>
            <header className='w-full max-w-screen-lg flex justify-between items-center h-1/6'>
                <span className='font-bold text-2-xl'>Expanse Tracker</span>

                <nav className='flex gap-4'>
                    <Button onClick={handleNavigateToAdd}>
                        Adicionar Nova Conta
                    </Button>
                    <Button variant='ghost'>
                        Sair
                    </Button>
                </nav>
            </header>

            <main className='w-full bg-purple-50 max-w-screen-lg h-5/6 grid overflow-y-scroll content-start  grid-cols-3 gap-4 p-4'>
                {array?.map(item => 
                        <Card key={item.id} item={item}/>
                    )}
            </main>
        </S.TamplateContainer>
    )
}