import React from 'react'
import { Button } from '../../components/atoms/Button'
import { InputText } from '../../components/molecules/inputText'
import { Link } from '../../components/molecules/Link.index'
import { HeroSideBar } from '../../components/organism/HeroSideBar'
import * as S from '../../components/templates'

export default function DahsboarAdd() {
    return (
        <S.TamplateContainer>
            <S.TamplateContent>
               <HeroSideBar />
                <S.MainHeroSection>
                    <h1 className='font-bold text-3xl'>
                        Cadastre Nova Despesa
                    </h1>
                    <form className='flex flex-col w-full gap-4 max-w-xs'>
                        <InputText label='Despesa' type='text' />
                        <InputText label='Caategoria' type='text' />
                        <InputText label='Valor' type='Number' />
                        <Button>Cadastrar</Button>
                    </form>
                    <Link href='/dashboard'>Voltar</Link>
                </S.MainHeroSection>
            </S.TamplateContent>
        </S.TamplateContainer>
    )
}
