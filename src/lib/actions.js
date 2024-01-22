'use server'
import { db } from '@/lib/mysql'
import { redirect } from 'next/navigation';

// OPERACIONES CON ARTÍCULOS

export async function getArticulos() {
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

    const query = 'insert into articulos(nombre,descripcion,precio) values (?, ?, ?)';
    const results = await db.query(query, [nombre, descripcion, precio]);
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

  try {
    const query = 'update articulos set ? where id = ? ';
    const results = await db.query(query, [{nombre, descripcion, precio}, id]);
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

    const query = 'insert into proveedores(nombre,telefono) values (?, ?)';
    const results = await db.query(query, [nombre, telefono]);
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

  try {
    const query = 'update proveedores set ? where id = ? ';
    const results = await db.query(query, [{nombre, telefono}, id]);
    console.log(results);
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