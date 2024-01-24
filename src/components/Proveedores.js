import Imagen from '@/components/Imagen'

export default async function Proveedores({ children, proveedor }) {
    return (
        <div className='visualizador' style={{ 'border': '1px solid lightgrey', 'padding': '50px' }}>
            <Imagen img={proveedor?.imagen ?? '/no-image.png'} />
            <div className='datos'>
                <div className='texto'>
                    <p><strong>{proveedor.nombre}</strong></p>
                    <p>{proveedor.telefono}</p>
                </div>
                <div className='botones'>{children}</div>
            </div>
        </div>
    )
}
