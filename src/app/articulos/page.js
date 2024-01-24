import Link from 'next/link'
import Articulos from '@/components/Articulos'
import { getArticulos } from '@/lib/actions'

export default async function Home() {
    const articulos = await getArticulos()
    // console.log(articulos);

    return (
        <div>
            <Link className='enlace' href="/articulos/new"> Nuevo artículo </Link>
            {
                articulos.map((articulo) => (
                    <Articulos key={articulo.id} articulo={articulo} >
                        <Link
                            className='enlace'
                            href={{ pathname: '/articulos/edit', query: { id: articulo.id } }}>
                            Editar artículo
                        </Link>
                        <Link
                            className='enlace'
                            href={{ pathname: '/articulos/delete', query: { id: articulo.id } }}>
                            Eliminar artículo
                        </Link>
                    </Articulos>
                ))
            }
        </div>
    )
}
