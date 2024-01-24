import Imagen from "@/components/Imagen"
import Button from "@/components/Button"

function ArticulosForm({ action, title, articulo, disabled }) {
    return (
        <form id='preview'>
            <Imagen img={articulo?.imagen ?? '/imagen.png'} />
            <div className="datos">
                <input type='hidden' name='id' value={articulo?.id} />
                <fieldset disabled={disabled}>
                    <label htmlFor='nombre'>Nombre</label>
                    <input type='text' id='nombre' name='nombre'
                        placeholder='Nombre'
                        defaultValue={articulo?.nombre} autoFocus ></input>
                    <label htmlFor='descripcion'>Descripción</label>
                    <input type='text' id='descripcion' name='descripcion'
                        placeholder='Descripción'
                        defaultValue={articulo?.descripcion} />
                    <label htmlFor='precio'>Precio</label>
                    <input type='number' id='precio' name='precio' min='0' step={0.01}
                        placeholder='precio'
                        defaultValue={articulo?.precio} />
                </fieldset>
                <Button action={action} title={title}></Button>
            </div>
        </form>
    )
}

export default ArticulosForm