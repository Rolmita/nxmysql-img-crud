import ProveedoresForm from "@/components/ProveedoresForm"
import { db } from "@/lib/mysql"
import { deleteProveedor } from "@/lib/actions"

async function page({ searchParams }) {
  const [proveedor] = await db.query('select * from proveedores where id = ?', [searchParams.id]);
  return (
    <div>
      <h3>Eliminar proveedor {searchParams.id}</h3>
      <ProveedoresForm action={deleteProveedor} title='Eliminar proveedor' proveedor={proveedor} disabled={true} />
    </div>
  )
}

export default page