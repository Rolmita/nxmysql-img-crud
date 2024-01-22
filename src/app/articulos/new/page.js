import ArticulosForm from "@/components/ArticulosForm"
import { newArticulo } from "@/lib/actions"

function page() {
  return (
    <div>
        <h3>Nuevo artículo</h3>
        <ArticulosForm action={newArticulo} title='Crear artículo' articulo={null} disabled={false}  />
    </div>
  )
}

export default page