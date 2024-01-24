
import Imagen from "@/components/Imagen"
import Button from "@/components/Button"


function ProveedoresForm({ action, title, proveedor, disabled }) {
    return (
        <form id='preview' >
            <Imagen img={proveedor?.imagen ?? '/imagen.png'} />
            <div className="datos">
                <input type='hidden' name='id' value={proveedor?.id} />
                <fieldset disabled={disabled}>
                    <label htmlFor='nombre'>Nombre</label>
                    <input type='text' id='nombre' name='nombre'
                        placeholder='Nombre'
                        defaultValue={proveedor?.nombre} autoFocus ></input>
                    <label htmlFor='telefono'>Teléfono</label>
                    <input type='tel' id='telefono' name='telefono'
                        placeholder='Teléfono'
                        defaultValue={proveedor?.telefono} />
                </fieldset>
                <Button action={action} title={title}></Button>
            </div>
        </form>
    )
}

export default ProveedoresForm