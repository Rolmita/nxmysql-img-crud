import Imagen from '@/components/Imagen'

export default async function Articulos({ children, articulo }) {

    return (
        <div className='visualizador' style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <Imagen img={articulo?.imagen ?? '/no-image.png'} />
            <div className='datos'>
                <div className='texto'>
                    <p><strong>{articulo.nombre}</strong></p>
                    <p>{articulo.descripcion}</p>
                    <p>{articulo.precio} €</p>
                </div>
                <div className='botones'>{children}</div>
            </div>
        </div>
    )
}
