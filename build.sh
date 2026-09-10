#!/bin/bash

TEX_DIR="./img/genera_imagenes"
TEX_FILE="moleculas.tex"
STAMP_FILE=".tex_stamp"

if [ ! -d "$TEX_DIR" ]; then
    echo "Error: No existe el directorio $TEX_DIR"
    exit 1
fi

cd "$TEX_DIR" || exit 1

REBUILD=false

# 1. Comprobar si el archivo .tex es más reciente que el stamp
if [ ! -f "$STAMP_FILE" ] || [ "$TEX_FILE" -nt "$STAMP_FILE" ]; then
    REBUILD=true
fi

# 2. Comprobar si falta alguna imagen SVG buscando nombres con \svgname{...}
if [ -f "$TEX_FILE" ]; then
    # Extrae nombres de forma compatible (compatible con Linux y macOS)
    NAMES=$(grep -o '\\svgname{[^}]*}' "$TEX_FILE" | sed 's/\\svgname{//;s/}//')

    for name in $NAMES; do
        # Revisa si la imagen falta en la carpeta actual O en la carpeta padre
        if [ ! -f "${name}.svg" ] && [ ! -f "../${name}.svg" ]; then
            echo "🔍 Falta la imagen: ${name}.svg"
            REBUILD=true
            break
        fi
    done
fi

# 3. Recompilar si es necesario
if [ "$REBUILD" = true ]; then
    echo "⚙️ Cambios o imágenes faltantes detectados. Generando moléculas..."
    ./tex2svg.sh "$TEX_FILE"
    
    if [ $? -eq 0 ]; then
        touch "$STAMP_FILE"
    fi
else
    echo "✅ Todas las moléculas están actualizadas. No se requiere compilación."
fi