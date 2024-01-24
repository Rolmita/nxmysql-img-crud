'use server'
import { db } from '@/lib/mysql'
import { redirect } from 'next/navigation'
import cloudinary from '@/lib/cloudinary'
import { unstable_noStore } from 'next/cache'

// subir cualquier imagen a cualquier carpeta
async function imgCreate(file, subcarpeta) {
  console.log(file);

  const fileBuffer = await file.arrayBuffer();

  let mime = file.type;
  let encoding = 'base64';
  let base64Data = Buffer.from(fileBuffer).toString('base64');
  let fileUri = 'data:' + mime + ';' + encoding + ',' + base64Data;

  try {
    // Transformamos imagen al subirla
    // width: 600, aspect-ratio: 1
    const result = await cloudinary.uploader.upload(fileUri, {
      invalidate: true,
      folder: `tienda/${subcarpeta}`,
      public_id: file.name.split('.').slice(0, -1).join('.'), // eliminamos extensión del archivo
      aspect_ratio: "1.0",
      width: 600,
      crop: "fill",
      gravity: "center"
    })
    console.log(result);
    return result.secure_url
  } catch (error) {
    console.log(error);
    return null
  }
}

// OPERACIONES CON ARTÍCULOS

export async function getArticulos() {
  unstable_noStore()
  try {
    const results = await db.query('select * from articulos');
    // console.log(results);
    return results;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}

export async function newArticulo(formData) {
  try {
    const nombre = formData.get('nombre');
    const descripcion = formData.get('descripcion');
    const precio = formData.get('precio');
    const file = formData.get('file');

    const subcarpeta = 'articulos'
    const imagen = await imgCreate(file, subcarpeta)

    const query = 'insert into articulos(nombre,descripcion,precio,imagen) values (?, ?, ?, ?)';
    const results = await db.query(query, [nombre, descripcion, precio, imagen]);

    console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}

export async function editArticulo(formData) {
  const id = formData.get('id')
  const nombre = formData.get('nombre')
  const descripcion = formData.get('descripcion')
  const precio = formData.get('precio')
  const file = formData.get('file')

  try {
    const query = 'update articulos set ? where id = ? ';
    const subcarpeta = 'articulos'
    if (file.size > 0) {
      const imagen = await imgCreate(file, subcarpeta)
      const results = await db.query(query, [{ nombre, descripcion, precio, imagen }, id]);
    } else {
      results = await db.query(query, [{ nombre, descripcion, precio }, id]);
    }
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}

export async function deleteArticulo(formData) {
  try {
    const id = formData.get('id');

    const query = 'delete from articulos where id = ?';
    const results = await db.query(query, [id]);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/articulos');
}

// OPERACIONES CON PROVEEDORES

export async function getProveedores() {
  unstable_noStore()
  try {
    const results = await db.query('select * from proveedores');
    // console.log(results);
    return results;
  } catch (error) {
    // console.log(error);  
    return null;
  }
}

export async function newProveedor(formData) {
  try {
    const nombre = formData.get('nombre');
    const telefono = formData.get('telefono');
    const file = formData.get('file');

    const subcarpeta = 'proveedores'
    const imagen = await imgCreate(file, subcarpeta)

    const query = 'insert into proveedores(nombre,telefono,imagen) values (?, ?, ?)';
    const results = await db.query(query, [nombre, telefono, imagen]);

    console.log(results);
    
  } catch (error) {
    console.log(error);
  }
  redirect('/proveedores');
}

export async function editProveedor(formData) {
  const id = formData.get('id')
  const nombre = formData.get('nombre')
  const telefono = formData.get('telefono')
  const file = formData.get('file')

  try {
    const query = 'update proveedores set ? where id = ? ';
    const subcarpeta = 'proveedores'
    if (file.size > 0) {
      const imagen = await imgCreate(file, subcarpeta)
      const results = await db.query(query, [{ nombre, telefono, imagen }, id]);
    } else {
      const results = await db.query(query, [{ nombre, telefono, imagen }, id]);
    }
  } catch (error) {
    console.log(error);
  }
  redirect('/proveedores');
}

export async function deleteProveedor(formData) {
  try {
    const id = formData.get('id');

    const query = 'delete from proveedores where id = ?';
    const results = await db.query(query, [id]);
    console.log(results);
  } catch (error) {
    console.log(error);
  }
  redirect('/proveedores');
}