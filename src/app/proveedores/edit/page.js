import ProveedoresForm from "@/components/ProveedoresForm"
import { db } from "@/lib/mysql"
import { editProveedor } from "@/lib/actions"

async function page({searchParams}) {
  const [ proveedor ] = await db.query('select * from proveedores where id = ?', [ searchParams.id ]);

  return (
    <div>
        <h3>Editar proveedor {searchParams.id}</h3>
        <ProveedoresForm action={editProveedor} title='Editar proveedor' proveedor={proveedor} disabled={false}  />
    </div>
  )
}


export default page