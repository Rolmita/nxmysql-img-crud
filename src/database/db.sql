CREATE TABLE articulos (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    descripcion VARCHAR(200),
    precio DECIMAL(10,2),
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE proveedores (
    id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(200) NOT NULL,
    telefono CHAR(9) NOT NULL
);

-- ALTER TABLE articulos ADD COLUMN imagen VARCHAR(200) AFTER descripcion;

-- insert into articulos(nombre,descripcion,precio) values("VESTIDO LARGO SOFT RIB - ZARA","Vestido largo de escote pico y manga larga",22.95);
-- insert into articulos(nombre,descripcion,precio) values("LTHR HLD BTS 11 - ZARA","Zapato tipo bota tacón en piel. Detalle de tira con hebilla en el tobillo y en la parte superior de la caña. Tacón ancho. Cierre mediante cremallera lateral. Acabado en punta",249.00);
-- insert into articulos(nombre,descripcion,precio) values("PACK PULSERAS BRILLOS - ZARA","Pack de pulseras elásticas con aplicación de brillos.",15.95);
-- insert into articulos(nombre,descripcion,precio) values("COLLAR CORDÓN CORAZÓN - ZARA","Collar de cordón con colgante en forma de corazón con aplicación de brillos.",15.95);

-- insert into proveedores(nombre,telefono) values("Juan García Pérez","987654321");
-- insert into proveedores(nombre,telefono) values("Julio Sánchez Pérez","987321654");
-- insert into proveedores(nombre,telefono) values("Roberto García Domínguez","654987321");