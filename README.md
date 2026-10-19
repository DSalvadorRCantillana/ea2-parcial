# Portafolio Personal

Aplicación web de una sola página (SPA) con mi portafolio profesional: perfil, experiencia laboral, estudios, proyectos y formulario de contacto.

## Tecnologías

- React + Vite
- Tailwind CSS
- Vitest + React Testing Library

## Requisitos previos

- [Node.js](https://nodejs.org) versión 20 o superior (incluye npm)
- [Git](https://git-scm.com)

## Instalación y ejecución local

1. Clona el repositorio:

```bash
   git clone https://github.com/tu-usuario/ea2-parcial.git
```

2. Entra a la carpeta del proyecto:

```bash
   cd ea2-parcial
```

3. Instala las dependencias:

```bash
   npm install
```

4. Levanta el servidor de desarrollo:

```bash
   npm run dev
```

5. Abre en el navegador la dirección que aparece en la terminal (normalmente `http://localhost:5173`).

## Scripts disponibles

| Comando           | Descripción                                   |
| ----------------- | --------------------------------------------- |
| `npm run dev`     | Inicia el servidor de desarrollo              |
| `npm run build`   | Genera la versión de producción               |
| `npm run preview` | Previsualiza la versión de producción         |
| `npm test`        | Ejecuta las pruebas automatizadas una vez     |
| `npm run test:watch` | Ejecuta las pruebas y las repite al guardar |

## Arquitectura: Atomic Design

```
src/
├── components/
│   ├── atoms/       Button, Heading, Label, Input, Avatar, ExternalLink, LinkButton
│   ├── molecules/   FormField, ProjectCard, TimelineItem, SocialLinks
│   └── organisms/   Navbar, ProfileSection, ExperienceSection, EducationSection,
│                    ProjectsSection, ContactSection, ContactForm, Footer
├── templates/       MainTemplate
├── pages/           HomePage
├── data/            Datos del perfil, experiencia, estudios, proyectos y redes
└── utils/           Funciones auxiliares (validación del formulario)
```

## Pruebas

Se ejecutan con `npm test`. Cubren la validación del formulario de contacto, el comportamiento del formulario y el renderizado de los organismos principales.

## Autor

Tu Nombre: [LinkedIn](https://www.linkedin.com/in/demiansalvadorojascantillana/) · [GitHub](https://github.com/DSalvadorRCantillana)