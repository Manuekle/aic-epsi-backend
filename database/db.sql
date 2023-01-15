--Create table afiliados
CREATE TABLE afiliados (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200),
    tipo_documento VARCHAR(50),
    numero_documento VARCHAR(50),
    genero VARCHAR(30),
    estado_civil VARCHAR(100),
    municipio VARCHAR(100),
    departamento VARCHAR(100),
    direccion VARCHAR(100),
    correo_electronico VARCHAR(100),
    indigena BOOLEAN DEFAULT 0,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)

--Create table indigena
CREATE TABLE indigena (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    pueblo VARCHAR(100) NOT NULL,
    cabildo VARCHAR(100) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id) REFERENCES afiliados(id)
)

--Create table autorizacion
CREATE TABLE autorizacion (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    diagnostico_principal VARCHAR(500),
    diagnostico_relacionado VARCHAR(500),
    regimen VARCHAR(250),
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id) REFERENCES afiliados(id)
)

--Create table medicamento
CREATE TABLE medicamento (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    descripcion VARCHAR(500) NOT NULL,    
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)

--Create table autorizacion_medicamento
CREATE TABLE autorizacion_medicamento (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (id) REFERENCES autorizacion(id),
    FOREIGN KEY (id) REFERENCES medicamento(id)
)