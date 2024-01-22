import ArticulosForm from "@/components/ArticulosForm"
import { db } from "@/lib/mysql"
import { deleteArticulo } from "@/lib/actions"

async function page({ searchParams }) {
  const [articulo] = await db.query('select * from articulos where id = ?', [searchParams.id]);
  return (
    <div>
      <h3>Eliminar artículo {searchParams.id}</h3>
      <ArticulosForm action={deleteArticulo} title='Eliminar artículo' articulo={articulo} disabled={true} />
    </div>
  )
}

export default page