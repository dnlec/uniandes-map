UniandesMap es una aplicación web diseñada sobre una base de datos de django
y estilizada con html, css y javascript.

Para ejecutarla localmente tiene que importar todos los archivos del repositorio
a un IDE como Vscode e instalar las librerias usadas:
pip install django
pip install networkx
pip install pandas

Una vez hecho esto, nos dirigimos a la ubicación de nuestro proyecto en la terminal
y ejecutamos el siguiente comando: 
python manage.py runserver

Si todo funciona correctamente, debería aparecer la URL local de la página en la
terminal. Ejemplo:

    System check identified no issues (0 silenced).

    Django version 5.0.2, using settings 'uniandesmap.settings'
    Starting development server at http://127.0.0.1:8000/
    Quit the server with CONTROL-C.
