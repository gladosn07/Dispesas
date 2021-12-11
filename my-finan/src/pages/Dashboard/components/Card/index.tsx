import { Button } from "../../../../components/atoms/Button"

export const Card = ({item}) => {
    return (
        <article className='bg-white p-4 shadow-md flex flex-col justify-center h-40 relative gap-2'>
            <h2 className='font-bold text-xl'>{item.title}</h2>
            <p className='px-2 h-8 flex items-center justify-center text-purple-900 bg-purple-100 rounded-full self-start'>{item.category}</p>
            <p className='font-medium'>{item.cost}</p>
            <Button variant='ghost'>Excluir</Button>
        </article>
    )
}
