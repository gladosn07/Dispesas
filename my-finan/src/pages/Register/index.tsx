import React from 'react'
import { Button } from '../../components/atoms/Button'
import { InputText } from '../../components/molecules/inputText'
import { Link } from '../../components/molecules/Link.index'
import { HeroSideBar } from '../../components/organism/HeroSideBar'
import * as S from '../../components/templates'

export default function RegisterPage() {
    return (
        <S.TamplateContainer>
            <S.TamplateContent>
               <HeroSideBar />
                <S.MainHeroSection>
                    <h1 className='font-bold text-3xl'>
                        Crie Sua Conta
                    </h1>
                    <form className='flex flex-col w-full gap-4 max-w-xs'>
                        <InputText label='Email' type='email' />
                        <InputText label='Senha' type='password' />
                        <Button>Criar Conta</Button>
                    </form>
                    <Link href='/'>Ja Possuo Conta</Link>
                </S.MainHeroSection>
            </S.TamplateContent>
        </S.TamplateContainer>
    )
}
