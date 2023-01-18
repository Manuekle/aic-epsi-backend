--Create table afiliados
CREATE TABLE afiliados (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(200) NOT NULL,
    tipo_documento VARCHAR(50) NOT NULL,
    numero_documento VARCHAR(50) NOT NULL,
    genero VARCHAR(30) NOT NULL,
    estado_civil VARCHAR(100) NOT NULL,
    municipio VARCHAR(100) NOT NULL,
    departamento VARCHAR(100) NOT NULL,
    direccion VARCHAR(100) NOT NULL,
    correo_electronico VARCHAR(100) NOT NULL,
    indigena BOOLEAN DEFAULT 0,
    pueblo VARCHAR(100) DEFAULT NULL,
    cabildo VARCHAR(100) DEFAULT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
)

--Create table autorizacion
CREATE TABLE autorizacion (
    id INTEGER PRIMARY KEY AUTO_INCREMENT,
    diagnostico_principal VARCHAR(500) NOT NULL,
    diagnostico_relacionado VARCHAR(500) NOT NULL,
    regimen VARCHAR(250) NOT NULL,
    medicamento VARCHAR(500) NOT NULL,
    created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    afiliados_id INTEGER,
    FOREIGN KEY (afiliados_id) REFERENCES afiliados(id)
)